
namespace PMMS.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ImportWizerdLocalRepository;
    using MyRow = Entities.ImportWizerdLocalRow;
    using System.Linq;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using System;
    using PMMS.Northwind;

    [RoutePrefix("Services/Default/ImportWizerdLocal"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ImportWizerdLocalController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            string IDREF = System.Guid.NewGuid().ToString();
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
                request.Entity.StatusMessage = ex.Message.ToString() + "- " + dt.Rows.Count.ToString();


            }



            return new MyRepository().Create(uow, request);
       
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var AllItems = connection.Query<ItemSelect>("select ImportRef as Name from ImportWizerdLocal where importid='" + request.EntityId.ToString() + "'").ToList();
                connection.Execute("delete from DISTRESS_SAMPLES where importref='" + AllItems[0].Name.ToString() + "'");

            }

            return new MyRepository().Delete(uow, request);
        
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

        public class fileupload
        {
            public string Filename { get; set; }
            public string OriginalName { get; set; }

        }
    }
}
