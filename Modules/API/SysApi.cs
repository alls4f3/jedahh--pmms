
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using System.Drawing;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Security;


namespace PMMS.Northwind.Pages
{
    using PMMS.Administration.Entities;
    using Kendo.Mvc.UI;
    using Northwind;

    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Mvc;
    using Kendo.Mvc.Extensions;
    using System.Linq;
    using PMMS.Common.Pages;
    using System.Data;
    using System.Reflection;
    using Newtonsoft.Json;
    using AmtarApp.Modules.Common.Helpers;
    using System.Text;
    using System.Net.Http;
    using Newtonsoft.Json.Linq;
    using System.Web.Script.Serialization;
    using System.IO;

    [RoutePrefix("sysapi"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.RelatedData)]
    //[Authorize,AllowAnonymous]
    public class sysapiController : Controller
    {

        PdfLoadedDocument ldoc;
        PdfSignature signature;
        PdfBitmap bmp;
        PdfGraphics graphics;
        PdfCertificate pdfCert;

        [Authorize, AllowAnonymous]
        public string RunWorkflow(string id)
        {
            // xngoBJtRC6kVrXSjUlEu
            try
            {
                if (id == "xngoBJtRC6kVrXSjUlEu")
                {

                
                    //search to check if any hafria
                    var update = new AmtarApp.Modules.Common.autoUpdate();
                    update.MoveFromHafriaApproval();
                    //update.ReCreateHafria();

                    //
                    var update2 = new AmtarApp.Modules.Common.autoUpdateBlock();
                    update2.Block();


                    var update3 = new AmtarApp.Modules.Common.autoUpdateDirctor();
                    update3.Move();


                    var update4 = new AmtarApp.Modules.Common.autoUpdateHafriaReview();
                    update4.Move();


                    var update5 = new AmtarApp.Modules.Common.autoApprove48();
                    update5.Move();


                    

                    return "Done";
                }
                else
                {
                    return "No Auth";

                }

            }
            catch (Exception ex)
            {

                return ex.Message.ToString();
            }



        }


      


      


        //[PageAuthorize]
        public ActionResult Index()
        {

            return null;


        }

        public ActionResult ListDistress()
        {
            SQLToExcel sql = new SQLToExcel();

           
            return File(sql.Excel("select * from PCI_All"), sql.Options.ContentType, "PCI" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");

        }


        public ActionResult ListMR()
        {
            SQLToExcel sql = new SQLToExcel();


            return File(sql.Excel("select * from SectionMR"), sql.Options.ContentType, "SectionMR" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");

        }


        public ActionResult ExportReports(string ReportId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                SQLToExcel sql = new SQLToExcel();


                string UserId = Authorization.UserId.ToString();
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"


select replace(replace(Reportpath,'.rdl',''),'Reports/','') as Id, Sqltxt  as Text from customreports

where (isExcel='1' and ReportId='" + ReportId + @"' ) and ([ReportId] in (


select 
[ReportId]
from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportUsers], ',')

)e where e.value='" + UserId + @"'


)

or [ReportId] in (

select [ReportId]

from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)
)



").ToList();

                if (GetAll.Count > 0)
                {
                    return File(sql.Excel(GetAll[0].Text), sql.Options.ContentType, "Export_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");

                }
                else
                {
                    return null;
                }


            }







        }





        public ActionResult ExportDs(string ReportId, int part, string filter = "")
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                SQLToExcel sql = new SQLToExcel();


                string UserId = Authorization.UserId.ToString();
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"


select PageName as  Id, PagePath  as Text from CustomDashboards

where ( PageId='" + ReportId + @"' ) and ([PageId] in (


select 
[PageId]
from(
	SELECT [PageId], value 
FROM [CustomDashboards]  
CROSS APPLY STRING_SPLIT([PageUsers], ',')

)e where e.value='" + UserId + @"'


)

or [PageId] in (

select [PageId]

from(
	SELECT [PageId], value 
FROM [CustomDashboards]  
CROSS APPLY STRING_SPLIT([PageGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)
)



").ToList();

                if (GetAll.Count > 0)
                {

                    List<string> data = new List<string>();
                    var getdate = connection.Query<PMMS.Northwind.ItemSelect>(@"select ScriptAPI as Name from [dbo].[CustomDashboardsScripts] where PageId='" + ReportId + "'");
                    foreach (var item in getdate)
                    {
                        data.Add(item.Name);
                    }

                    //   string jsons = JsonConvert.SerializeObject();

                    //  return Json(sql.GetJSON(sql.DataSet(data)), JsonRequestBehavior.AllowGet);





                    var jsonss = JsonConvert.SerializeObject(sql.DataSet(data[part], filter));
                    // var token = JToken.Parse(jsonss);

                    //  var stringwithoutbackslash = JObject.Parse(jsonss.Replace(@"\",""));

                    //   return Json(jsonss.Replace(@"\", ""), JsonRequestBehavior.AllowGet);
                    var datasoutp = jsonss.Replace("\"[", "[");
                    datasoutp = datasoutp.Replace("]\"", "]");
                    return Content(datasoutp, "application/json charset=utf-8");



                }
                else
                {
                    return null;
                }


            }







        }





        public ActionResult ExportSamples(string ReportId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                SQLToExcel sql = new SQLToExcel();

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select importref as Name from ImportWizerd where importid='" + ReportId + "'").ToList();
                return File(sql.Excel("select * from DISTRESS_SAMPLES where importref='" + GetAll[0].Name + "'"), sql.Options.ContentType, "Export_Samples_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");


            }







        }


        public ActionResult ExportSamplesLocal(string ReportId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                SQLToExcel sql = new SQLToExcel();

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select importref as Name from ImportWizerdLocal where importid='" + ReportId + "'").ToList();
                return File(sql.Excel("select * from DISTRESS_SAMPLES where importref='" + GetAll[0].Name + "'"), sql.Options.ContentType, "Export_Samples_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");


            }







        }


        public JsonResult GetCustomReportsExcel()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string UserId = Authorization.UserId.ToString();
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"


select reportid as Id, Reportname  as Text from customreports

where (isExcel='1') and ([ReportId] in (


select 
[ReportId]
from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportUsers], ',')

)e where e.value='" + UserId + @"'


)

or [ReportId] in (

select [ReportId]

from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)
)



");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult GetCustomReports()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string UserId = Authorization.UserId.ToString();
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"


select replace(replace(Reportpath,'.rdl',''),'Reports/','') as Id, Reportname  as Text from customreports

where (isExcel='0' or isExcel is null) and ([ReportId] in (


select 
[ReportId]
from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportUsers], ',')

)e where e.value='" + UserId + @"'


)

or [ReportId] in (

select [ReportId]

from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)
)



");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }

        public string workOrdercalc()
        {


            var update = new AmtarApp.Modules.Common.UpdaterWorkOrder();

            update.UpdateAll();
            update.UpdateOldAll();


            return "Ok";

        }


        public string workOrdercalcById(string id)
        {


            var update = new AmtarApp.Modules.Common.UpdaterWorkOrder();

            update.Updatethis(id);


            return "Ok";

        }



   


        public PavePixel.PCI.PCI.Devals cdvcalDb(double sumobj, int dctcnt, double IRI, double Skid, double Fwd)
        {

            var PCI = new PavePixel.PCI.PCI();
            return PCI.cdvcal(sumobj, dctcnt, -1, -1, -1);
        }


        public PavePixel.PCI.PCI.Devals dedcalDB(double area, double QT, int dts, double Dis_k, string sev, string current)
        {

            var PCI = new PavePixel.PCI.PCI();

            return PCI.dedcal(area, QT, dts, Dis_k, sev, current);
        }





        public JsonResult getAssetsClass(string id)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                IEnumerable<PMMS.Northwind.ItemSelect> GetAll;
                if (id == null)
                {
                    id = "";
                }
                if (id == "")
                {
                    GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select itemid as Id,itemname as Text,parentid as ReportsTo,case when parentid is null then  1 else 0 end as hasChildern from AssetClass where parentid is null");

                }
                else
                {
                    GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select itemid as Id,itemname as Text,parentid as ReportsTo,case when parentid is null then  0 else 1 end as hasChildern from AssetClass where parentid='" + id + "'");

                }


                var Cat = from e in GetAll

                          select new
                          {
                              Id = e.Id,
                              Text = e.Text,
                              ReportsTo = e.ReportsTo,
                              hasChildern = e.hasChildern,

                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult getCity()
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select CITY_NO as Id,  CITY_NO +' - '+ CITY_NAME as Text from CITY where Isdeleted=0");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }



        public JsonResult getCity2()
        {

            System.Data.DataTable dt = new System.Data.DataTable();
            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
            dt = cd.GetData("select * from CITY where Isdeleted=0");

            PMMS.Modules.FastReports.SysReports rpt = new Modules.FastReports.SysReports();

            return Json(JsonConvert.SerializeObject(dt), JsonRequestBehavior.AllowGet);
        }


        public JsonResult getContractor()
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select CONTRACTOR_NO as Id, COMPANY_NAME as Text from CONTRACTORS");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };


                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult GetRoadCategory()
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select distinct roadcategory as Id from roads where roadcategory is not null and roadcategory<>''");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Id,
                          };


                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }






        public JsonResult getContractItem(string id)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("SELECT [ITM_DESC]  as Id, STUFF( ISNULL(',' + REPLACE( convert(nvarchar(50), [ITM_CODE]),'/','-'), '') + ISNULL(',' + convert(nvarchar(50), [ITM_SEQ]), '') + ISNULL(',' +  convert(nvarchar(50),[REMAINDER]), '') + ISNULL(',' +  convert(nvarchar(50),[QTY]), '') + ISNULL(',' +  convert(nvarchar(50),[EXEC_QTY]), '') + ISNULL(',' +  convert(nvarchar(50), [UNIT]), ''),1,1,'') as Text FROM [workorderBOQ] where CONTRACT_ID=(select contract_id from Projects where ProjectId='" + id.ToString() + "')");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }



        }



        public JsonResult getZone(string id)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select ZONE_NO as Id, ZONE_NO +' - '+ZONE_NAME as Text from ZONES where Isdeleted=0 and CITY_NO='" + id.ToString() + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult getAreas(string id, string id2)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select AREA_NO  as Id,AREA_NO+' - '+ AREA_NAME   as Text from Areas where Isdeleted=0 and ZONE_NO='" + id.ToString() + "' and CITY_NO='" + id2.ToString() + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult getRoad(string id, string id2, string id3)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select ROAD_NO as Id ,ROAD_NO +'- '+ ROAD_NAME as Text from roads where Isdeleted=0 and city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }


        public JsonResult getRoadCategoryItem(string id, string id2, string id3, string Category)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string sqladd = "";
                if (!string.IsNullOrEmpty(Category) && Category != "0")
                {
                    sqladd = " and roadcategory=N'" + Category + "'";
                }
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select ROAD_NO as Id ,ROAD_NO +'- '+ ROAD_NAME as Text from roads where Isdeleted=0 and city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "'" + sqladd + "order by ROAD_NO");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult getRoadPCI(string id, string id2, string id3)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string queryadd = "'enable' as itemstatus";
                if (id != "99")
                {
                    queryadd = "case when isnull(avg(sample_pci),0) <= 65 then 'enable' else 'disable' end as itemstatus";
                }



                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select ROAD_NO as Id ,ROAD_NO +'- '+ ROAD_NAME 
 + ' - (PCI='  + isnull( convert(nvarchar(max),convert(numeric(18,2), avg(sample_pci))),'none') + ')'

 + case when 
 roads.filter is not null then 
 (select MsgName from SystemMessage where MsgId=1)
 else '' end
 as Text

," + queryadd + @"

from roads
left join [latestSampleRoad] l on roads.roadid=l.streetid
 where  roads.isactive='1' and Isdeleted=0 and city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "' group by roads.roadid,roads.ROAD_NAME,roads.ROAD_NO,roads.filter"
 );


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                              itemstatus = e.itemstatus,

                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }


        public JsonResult getSection(string id, string id2, string id3, string id4)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select SECTION_NO as Id ,SECTION_NO as Text from SECTIONS where Isdeleted=0 and city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "' and Road_No='" + id4 + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };
                return Json(Cat, JsonRequestBehavior.AllowGet);
            }





        }

        public JsonResult getSectionId(string id, string id2, string id3, string id4)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select case when SectionId is null then '99999-'+ convert(nvarchar(max), streetId) else '88888-'+ convert(nvarchar(max),SectionId) end as Id ,SECTION_NO as Text from SECTIONS where city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "' and Road_No='" + id4 + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult getSectionIdPCI2(string id, string id2, string id3, string id4)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select case when SectionId is null then '99999-'+ convert(nvarchar(max), streetId) else '88888-'+ convert(nvarchar(max),SectionId) end as Id ,SECTION_NO as Text from SECTIONS where  SECTIONS.SECTION_NO in (select * from Section_PCI_UnderGood) and city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "' and Road_No='" + id4 + "'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult getSectionIdPCI(string id, string id2, string id3, string id4)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select
case when SectionId is null then '99999-'+ convert(nvarchar(max), streetId) else '88888-'+ convert(nvarchar(max),SectionId) end as Id ,

s.SECTION_NO  + ' - (PCI='  + isnull( convert(nvarchar(max),convert(numeric(18,2), avg(sample_pci))),'none') + ')' 
+ case when 
 s.filter is not null then 
 (select MsgName from SystemMessage where MsgId=2)
 else '' end
 as Text



,case when isnull(avg(sample_pci),0) <= 65 then 'enable' else 'disable' end as itemstatus
from sections s

left join latestSample  d on s.SECTION_NO=LEFT(d.SECTION_NO, LEN(d.SECTION_NO)-4)
where s.IsDeleted=0 and s.isactive='1' and 
 city_No='" + id + "' and zone_no='" + id2 + "' and Area_no='" + id3 + "' and Road_No='" + id4 + "' group by s.SECTION_NO,SectionId,streetId,s.filter");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                              itemstatus = e.itemstatus,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }

        public JsonResult getFeature()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select feature_no as Id , FEATURE_DESCRIPTION as Text from FEATURES");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }

        public JsonResult getFeatureSection(string Section)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"

select feature_no as Id , FEATURE_DESCRIPTION  + ' - ' + ShortName as Text from FEATURES
where feature_no in 
(select right(SECTION_NO,2) from SECTION_DETAILS
where     left([SECTION_NO], len([SECTION_NO]) - 4) ='" + Section + @"')
");
                // SECTION_NO like '" + Section + @"%

                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }



        public JsonResult getFeatureSectionAll(string Section)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select feature_no as Id , FEATURE_DESCRIPTION  + ' - ' + ShortName as Text from FEATURES");
                // SECTION_NO like '" + Section + @"%

                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }

        public JsonResult getDirection()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select DIRECTION_NO as Id , DIRECTION_DESCRIPTION as Text from DIRECTION");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }


        public JsonResult GetSpTreatment()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select convert(nvarchar(max), [SPECIAL_TREATMENT_NO]) +' -'+ [SPECIAL_TREATMENT_DESCRIPTION] as Text, [SPECIAL_TREATMENT_NO] as Id from SPECIAL_TREATMENT where SP_TYPE='p' and  [SPECIAL_TREATMENT_DESCRIPTION] <>''");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }


        }




        public JsonResult IsUserHasAccessToWF()
        {




            if (Authorization.HasPermission(PermissionKeys.Apps.WorkflowEdit) || Authorization.HasPermission(PermissionKeys.Apps.WorkflowCreate))
            {
                return Json("1", JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Json("0", JsonRequestBehavior.AllowGet);

            }



        }


        public bool UserInRole(string role)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string userId = Authorization.UserId.ToString();
                var GetAll = connection.Query("select * from [dbo].[UserRoles] as us left join  [dbo].[Roles] as r on us.RoleId=r.RoleId where us.UserId='" + userId + "' and r.RoleName='" + role + "'");
                if (GetAll.ToList().Count > 0)
                {
                    return true;
                }
                else
                {
                    return false;

                }
            }



        }


        public JsonResult WorkfkowHistory(string Itemid)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string SQL_I = "SELECT TOP 500 [FlowId] ,[ItemId] ,isnull([Action],'') as Action ,[ActionBy] ,[Comment] ,[ActionData] ,displayname as username,isnull(ActionFrom,'') as ActionFrom  FROM [dbo].[WorkorderFlow] left join users on [dbo].[WorkorderFlow].actionby=users.userid where itemid=" + Itemid + " and ActionBy<>'97' ORDER BY [FlowId] asc";


                var GetAll = connection.Query<WorkfkowHistoryData>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }




        }


        public JsonResult workorderOld(string Itemid)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string SQL_I = "select * from workorderBOQItem_old where woid='" + Itemid + "'";


                var GetAll = connection.Query<WorkorderOldItems>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }




        }
        public JsonResult LaneDataTemplate(string Itemid)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string SQL_I = @"select * from laneMaps

where WoId='" + Itemid + "'";


                var GetAll = connection.Query<LaneInfo>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }




        }




        public JsonResult HafriaDataTemplate(string Itemid)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string SQL_I = @"select * from GetHafira where road_job_id='999" + Itemid + "'";


                var GetAll = connection.Query<HafriaInfo>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }




        }

        public JsonResult SecDataTemplate(string Itemid)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string SQL_I = @"select * from WokrOrderMaps where workorderid='" + Itemid + "'";


                var GetAll = connection.Query<SecData>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }




        }

        public JsonResult GetEmergency()
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select Eid as Id,Ename   as Text from WorkOrderEmergency where Eid<>'0'");


                var Cat = from e in GetAll

                          select new
                          {
                              id = e.Id,
                              Name = e.Text,
                          };

                return Json(Cat, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult ImportSummary(string Itemid)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string SQL_I = "select [Section] as ItemId ,[Note] as Comment from [dbo].[ImportSummary] where [RefId]=(select [ImportRef] from ImportWizerd where [ImportId]=" + Itemid + " )";


                var GetAll = connection.Query<WorkfkowHistoryData>(SQL_I);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }



        }

        public class WorkfkowHistoryData
        {
            public string FlowId { get; set; }
            public string ItemId { get; set; }
            public string Action { get; set; }
            public string ActionBy { get; set; }
            public string Comment { get; set; }
            public string ActionData { get; set; }
            public string username { get; set; }
            public string ActionFrom { get; set; }



        }

        public class WorkorderOldItems
        {
            public string ITM_CODE { get; set; }
            public string ITM_DESC { get; set; }
            public string UNIT { get; set; }
            public string EXEC_QTY { get; set; }
            public string REMAINDER { get; set; }
            public string PREV_EXEC_QTY { get; set; }
            public string QUANTITY { get; set; }
          

        }



        private void SetCryptographicStandard(string cryptographic, PdfSignature signature)
        {
            if (cryptographic != null)
            {
                if (cryptographic == "CAdES")
                    signature.Settings.CryptographicStandard = CryptographicStandard.CADES;
                else
                    signature.Settings.CryptographicStandard = CryptographicStandard.CMS;
            }

        }

        private void SetDigestAlgorithm(string digestAlgorithm, PdfSignature signature)
        {
            if (digestAlgorithm != null)
            {
                switch (digestAlgorithm)
                {
                    case "SHA1":
                        signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA1;
                        break;
                    case "SHA384":
                        signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA384;
                        break;
                    case "SHA512":
                        signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA512;
                        break;
                    case "RIPEMD160":
                        signature.Settings.DigestAlgorithm = DigestAlgorithm.RIPEMD160;
                        break;
                    default:
                        signature.Settings.DigestAlgorithm = DigestAlgorithm.SHA256;
                        break;
                }
            }
        }

        public void DigitalSignature(string password, string Reason, string Contact, string Location, HttpPostedFileBase pdfdocument, HttpPostedFileBase certificate, string RadioButtonList2, string NewPDF, string submit, string Cryptographic, string digestAlgorithm)
        {


            if (submit == "Create Sign PDF")
            {
                if (password != string.Empty && Reason != String.Empty && Contact != String.Empty && Location != string.Empty)
                {
                    string pfxPath = string.Empty;
                    if (pdfdocument != null && pdfdocument.ContentLength > 0)
                    {
                        if (pdfdocument.FileName.Contains(".pdf"))
                        {
                            ldoc = new PdfLoadedDocument(pdfdocument.InputStream);
                        }
                    }
                    if (certificate != null && certificate.ContentLength > 0)
                    {
                        if (certificate.FileName.Contains(".pfx"))
                        {
                            pfxPath = Path.Combine(Server.MapPath("~/App_Data"), certificate.FileName);
                            certificate.SaveAs(pfxPath);
                        }
                    }

                    bmp = new PdfBitmap(("PDFDemo.jpg"));

                    PdfPageBase page = ldoc.Pages[0];
                    if (password != string.Empty)
                        pdfCert = new PdfCertificate(pfxPath, password);

                    signature = new PdfSignature(ldoc, page, pdfCert, "Signature");

                    signature.Bounds = new RectangleF(new PointF(5, 5), bmp.PhysicalDimension);
                    signature.ContactInfo = Contact;
                    signature.LocationInfo = Location;
                    signature.Reason = Reason;
                    string validto = "Valid To: " + signature.Certificate.ValidTo.ToString();
                    string validfrom = "Valid From: " + signature.Certificate.ValidFrom.ToString();

                    SetCryptographicStandard(Cryptographic, signature);
                    SetDigestAlgorithm(digestAlgorithm, signature);

                    // Save the pdf document to the Stream.
                    MemoryStream stream = new MemoryStream();
                    ldoc.Save(stream);
                    Response.ClearContent();
                    Response.Expires = 0;
                    Response.Buffer = true;

                    string disposition = "content-disposition";
                    Response.AddHeader(disposition, "attachment; filename=Sample.pdf");
                    Response.AddHeader("Content-Type", "application/pdf");
                    Response.Clear();
                    stream.WriteTo(Response.OutputStream);
                    Response.End();

                    ldoc.Close();

                }
                else
                {
                    //   ViewBag.lab = "NOTE: Fill all fields and then create PDF";
                    // return View();
                }
            }
            else
            {
                PdfDocument doc = new PdfDocument();
                PdfPage page = doc.Pages.Add();
                PdfSolidBrush brush = new PdfSolidBrush(Color.Black);
                PdfPen pen = new PdfPen(brush, 0.2f);
                PdfFont font = new PdfStandardFont(PdfFontFamily.Courier, 12, PdfFontStyle.Regular);
                try
                {
                    pdfCert = new PdfCertificate(("PDF.pfx"), "password123");
                    signature = new PdfSignature(page, pdfCert, "Signature");
                    bmp = new PdfBitmap((".gif"));

                    signature.Bounds = new RectangleF(new PointF(5, 5), page.Size);
                    signature.ContactInfo = "Rasef Software";
                    signature.LocationInfo = "Jeddah";
                    signature.Reason = "WorkOrder Document";

                    if (RadioButtonList2 == "Standard")
                        signature.Certificated = true;
                    else
                        signature.Certificated = false;
                    graphics = signature.Appearance.Normal.Graphics;
                    SetCryptographicStandard(Cryptographic, signature);
                    SetDigestAlgorithm(digestAlgorithm, signature);
                }
                catch (Exception)
                {
                    graphics = signature.Appearance.Normal.Graphics;

                    Response.Write("Warning Certificate not found \"Cannot sign This Document\"");

                    //Draw the Text at specified location.
                    graphics.DrawString("Warning this document is not signed", font, brush, new PointF(0, 20));
                    graphics.DrawString("Create a self signed Digital ID to sign this document", font, brush, new PointF(20, 40));
                    graphics.DrawLine(pen, new PointF(0, 100), new PointF(page.GetClientSize().Width, 200));
                    graphics.DrawLine(pen, new PointF(0, 200), new PointF(page.GetClientSize().Width, 100));
                }

                string validto = "Valid To: " + signature.Certificate.ValidTo.ToString();
                string validfrom = "Valid From: " + signature.Certificate.ValidFrom.ToString();

                graphics.DrawImage(bmp, 0, 0);

                doc.Pages[0].Graphics.DrawString(validfrom, font, pen, brush, 0, 90);
                doc.Pages[0].Graphics.DrawString(validto, font, pen, brush, 0, 110);

                doc.Pages[0].Graphics.DrawString(" Protected Document. Digitally signed Document.", font, pen, brush, 0, 130);
                doc.Pages[0].Graphics.DrawString("* To validate Signature click on the signature on this page \n * To check Document Status \n click document status icon on the bottom left of the acrobat reader.", font, pen, brush, 0, 150);

                // Save the pdf document to the Stream.
                MemoryStream stream = new MemoryStream();
                doc.Save(stream);
                Response.ClearContent();
                Response.Expires = 0;
                Response.Buffer = true;

                string disposition = "content-disposition";
                Response.AddHeader(disposition, "attachment; filename=Sample.pdf");
                Response.AddHeader("Content-Type", "application/pdf");
                Response.Clear();
                stream.WriteTo(Response.OutputStream);
                Response.End();

                doc.Close();

            }
        }

        public class LaneInfo
        {
            public string ActionData { get; set; }
            public string Action { get; set; }
            public string ROAD_NAME { get; set; }
            public string ROAD_NO { get; set; }
            public string WorkorderSection { get; set; }
            public string area_name { get; set; }
            public string zone_name { get; set; }
            public string city_name { get; set; }
            public string roadid { get; set; }
            public string SectionNumber { get; set; }
            public string ItemID { get; set; }
            public string lat { get; set; }

            public string longt { get; set; }





        }
        public class HafriaInfo
        {

            public string ID { get; set; }
            public string OBJECTID { get; set; }
            public string ROAD_JOB_ID { get; set; }
            public string MUNICIPALITY { get; set; }
            public string MUNICIPALITY_ID { get; set; }
            public string DISTRICT { get; set; }
            public string DISTRICT_ID { get; set; }
            public string STATUS_CODE { get; set; }
            public string INITIAL_DATE { get; set; }
            public string DEPT_NAME { get; set; }
            public string DEPT_ID { get; set; }
            public string START_ROAD_JOB_DATE { get; set; }
            public string STREET_ID { get; set; }
            public string CONT_NAME { get; set; }
            public string CONT_ID { get; set; }
            public string ORDER_ID { get; set; }
            public string DURATION_ROAD_DATE { get; set; }
            public string END_ROAD_JOB_DATE { get; set; }


        }
        public class SecData
        {
            public string RoadName { get; set; }
            public string SecionName { get; set; }
            public string CityName { get; set; }
            public string ZoneName { get; set; }
            public string AreaNamew { get; set; }

            public string lat { get; set; }

            public string longt { get; set; }

            public string WorkOrderId { get; set; }



        }
    }



}
