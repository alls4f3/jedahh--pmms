
namespace PMMS.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ImportWizerdDataRepository;
    using MyRow = Entities.ImportWizerdDataRow;
  
    using System.Linq;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using System;
    using PMMS.Northwind;

    [RoutePrefix("Services/Default/ImportWizerdData"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ImportWizerdDataController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            string IDREF= System.Guid.NewGuid().ToString();
            request.Entity.FileName = "Import Data : - " + System.DateTime.Now.ToString("yyyy-MM.dd- HH-mm");
            request.Entity.ImportDate = System.DateTime.Now;
            request.Entity.ImportBy = Authorization.UserId.ToString();
            request.Entity.Status = "Done";
            request.Entity.StatusMessage = "All Sample has been created (Sec 10001- SAM 1,Sec 10002- SAM 4)";
            request.Entity.ImportRef = IDREF;
            //var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            request.Entity.Status = "InProgress";
            request.Entity.StatusMessage = "analysis Services will auto detect the the files";
            DataTable dt = new DataTable();
            try
            {
                var Dis = new PMS.Modules.API.PrepareExcelData();
                var excel = new PMS.Modules.API.ExcelDT();


            
                List<fileupload> fileupload = JsonConvert.DeserializeObject<List<fileupload>>(request.Entity.ContentUrl);
                if (!string.IsNullOrEmpty(request.Entity.ContentUrl))
                {
                    // Upload
                    //foreach (var item in fileupload)
                    //{
                    //    dt = Dis.GetDistress(HttpContext.Server.MapPath("~/App_data/upload/" + item.Filename));


                    //    excel.Bulk_Insert(dt, IDREF);
                    //}



                    //  FWD 
                    if (!string.IsNullOrEmpty(request.Entity.ContentUrlFWD))
                    {
                        //List<fileupload> fileuploadFWD = JsonConvert.DeserializeObject<List<fileupload>>(request.Entity.ContentUrlFWD);

                        //foreach (var item in fileuploadFWD)
                        //{
                        //    dt = Dis.GetFWD(HttpContext.Server.MapPath("~/App_data/upload/" + item.Filename));


                        //    excel.Bulk_InsertFWD(dt, IDREF);
                        //}

                    }


                    //  IRI 

                    if (!string.IsNullOrEmpty(request.Entity.ContentUrlIRI))
                    {
                        //List<fileupload> fileuploadIRI = JsonConvert.DeserializeObject<List<fileupload>>(request.Entity.ContentUrlIRI);

                        //foreach (var item in fileuploadIRI)
                        //{
                        //    dt = Dis.GETIRI(HttpContext.Server.MapPath("~/App_data/upload/" + item.Filename));


                        //    excel.Bulk_InsertIRI(dt, IDREF);
                        //}

                    }


                    // SKID

                    if (!string.IsNullOrEmpty(request.Entity.ContentUrlSKID))
                    {
                        //List<fileupload> fileuploadSKID = JsonConvert.DeserializeObject<List<fileupload>>(request.Entity.ContentUrlSKID);

                        //foreach (var item in fileuploadSKID)
                        //{
                        //    dt = Dis.GETSKID(HttpContext.Server.MapPath("~/App_data/upload/" + item.Filename));


                        //    excel.Bulk_InsertSkid(dt, IDREF);
                        //}

                        //request.Entity.StatusMessage = dt.Rows.Count.ToString();
                    }
                }
                else
                {
                    throw new ValidationError("Please add the attached file");
                }

            }
            catch (System.Exception ex)
            {
                request.Entity.Status = "Fail";
                request.Entity.StatusMessage = ex.Message.ToString() + "- "  + dt.Rows.Count.ToString();


            }

         

            return new MyRepository().Create(uow, request);

        }


        public IEnumerable<PMMS.Northwind.distressUpload> checkIsExsitSection_Distress(string refNumber)
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            return connection.Query<PMMS.Northwind.distressUpload>("select  distinct TOP 5  Sec from ( select SECTION + '01' + (select FEATURES.FEATURE_NO from  [dbo].[FEATURES] where [ShortName]=LEFT(lane,1) ) as Sec ,lane ,MPID,Severity, case when MPID='1' then sum(convert(float,length)) else sum(convert(float,area)) end as area from tbldistress where ref = '"+ refNumber + "' group by SECTION,lane ,MPID,Severity )c where Sec not in (select  [SECTION_NO] from [dbo].[SECTION_DETAILS])");

        }

        public bool IsValidFile(string refNumber)
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

         var dt=    connection.Query<PMMS.Northwind.ImportFileUpload>(@"
declare @refvar nvarchar(max)
set @refvar='"+ refNumber + @"'


insert into [dbo].[ImportSummary]([Section],[Note],[RefId])


  select  [SECTION_NO] as Scetion ,N'Missing Section not included in the file' as Note,@refvar from SECTIONS s 
 left  join [dbo].[TblDistress] d on d.section=s.[SECTION_NO]
  

  and d.ref=@refvar
  where ROAD_NO in (
  select ROAD_NO from SECTIONS where [SECTION_NO]
  in 
  (SELECT distinct Section FROM [db_a50ea1_pmmsjed].[dbo].[TblDistress] where ref=@refvar)
  )
  and Section is null
  union all
   
   -- Not Register in GIS/PMMS
  SELECT distinct Section as Scetion  ,N'Not Register in GIS/PMMS' as Note ,@refvar FROM [db_a50ea1_pmmsjed].[dbo].[TblDistress] where ref=@refvar
  and Section not in (select [SECTION_NO] from SECTIONS)

  ---
  union all

-- ===================
select LaneName ,'Not Register Lane' as Note,@refvar from (
select SECTION + '01' + isnull(s,'')


as Sec,SECTION + isnull(lane,'') LaneName
		
	from 
	(
	select distinct Section ,lane,(select FEATURES.FEATURE_NO from  [dbo].[FEATURES] where [ShortName]=lane)as s
	from tbldistress
	where ref = @refvar
	)s
	
	
	)c where Sec not in (select SECTION_NO from SECTION_DETAILS)



  -- ============================
  -- File Validation Error 
  union all
  select s,'not mapped in each file' ,@refvar
  
  
  from(
  select distinct [SECTION_NO] + '' +isnull(lane,'') as s,1 as cnt from [dbo].[TblFWD] where ref=@refvar
    union all
   select distinct SECTION + '' +isnull(lane,'') as s,1 as cnt from [dbo].[TblDistress] where ref=@refvar
     union all
    select distinct [SECTION_NO]  + '' + isnull(LANE_NO,'') as s,1 as cnt from [dbo].[TblSkid]   where ref=@refvar
	  union all
	 select distinct SECTION + '' +isnull(lane,'') as s ,1 as cnt from [dbo].[TblIRI] where ref=@refvar)c group by s
	 having sum(cnt) <> 4



	 select [Section],[Note] from [dbo].[ImportSummary] where [RefId]=@refvar


").ToList();

            if (dt.Count > 0)
            {




                return false;


            }
            else
            {
                return true;

            }

        }



        public class fileupload
        {
            public string Filename { get; set; }
            public string OriginalName { get; set; }

        }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {


            throw new ValidationError("update is not allowed");

         
            //return new MyRepository().Update(uow, request);

        }
  
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var AllItems = connection.Query<MyRow>("select * from importwizerd where importid='" + request.EntityId.ToString() + "'").ToList();
                connection.Execute("delete from DISTRESS_SAMPLES where importref='" + AllItems[0].ImportRef.ToString() + "'");

            }

            return new MyRepository().Delete(uow, request);
            //return null;

        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse DeleteAndRollBack(IUnitOfWork uow, DeleteRequest request)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var AllItems = connection.Query<ItemSelect>("select ImportRef as Name from importwizerd where importid='" + request.EntityId.ToString() + "'").ToList();
                connection.Execute("delete from DISTRESS_SAMPLES where importref='" + AllItems[0].Name.ToString()+"'");

            }

            return new MyRepository().Delete(uow, request);
            //return null;

        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
