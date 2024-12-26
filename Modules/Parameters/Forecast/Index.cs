
namespace PMMS.Parameters.Forecast
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;


    [RoutePrefix("Parameters/Forecast"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class ForecastController : Controller
    {
        public ActionResult Index()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"
select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where

 MAINTENANCE_FACTOR_NO like 'BC%'
union all
select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where
 MAINTENANCE_FACTOR_NO like 'BM%'
union all
select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where

 MAINTENANCE_FACTOR_NO like 'BL%'
union all

select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where

 MAINTENANCE_FACTOR_NO like 'BS%'
 union all

select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where

 MAINTENANCE_FACTOR_NO  in ('BT1', 'BT2', 'BT3', 'BT4', 'BT5', 'BT6')

 union all
 select  MAINTENANCE_FACTOR_NO as Name, MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where

 MAINTENANCE_FACTOR_NO like 'BR%'");

            return View(MVC.Views.PMMS.Forecast.Index, GetAll.ToList());
        }


        public JsonResult SaveData(string m0, string m1, string m2, string m3, string m4, string m5, string m6, string m7, string m8, string m9, string m10, string m11, string m12, string m13, string m14, string m15, string m16, string m17, string m18, string m19, string m20, string m21, string m22, string m23, string m24, string m25, string m26, string m27, string m28, string m29, string m30, string m31, string m32, string m33, string m34, string m35, string m36, string m37, string m38, string m39, string m40, string m41, string m42, string m43, string m44, string m45, string m46, string m47, string m48, string m49, string m50, string m51, string m52, string m53, string m54, string m55, string m56)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m0 + "'  where MAINTENANCE_FACTOR_NO ='BC1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='BC2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='BC3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='BC4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='BC5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m5 + "'  where MAINTENANCE_FACTOR_NO ='BC6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m6 + "'  where MAINTENANCE_FACTOR_NO ='BM1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m7 + "'  where MAINTENANCE_FACTOR_NO ='BM2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m8 + "'  where MAINTENANCE_FACTOR_NO ='BM3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m9 + "'  where MAINTENANCE_FACTOR_NO ='BM4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m10 + "'  where MAINTENANCE_FACTOR_NO ='BM5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m11 + "'  where MAINTENANCE_FACTOR_NO ='BM6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m12 + "'  where MAINTENANCE_FACTOR_NO ='BM7'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m13 + "'  where MAINTENANCE_FACTOR_NO ='BM8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m14 + "'  where MAINTENANCE_FACTOR_NO ='BM9'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m15 + "'  where MAINTENANCE_FACTOR_NO ='BM10'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m16 + "'  where MAINTENANCE_FACTOR_NO ='BM11'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m17 + "'  where MAINTENANCE_FACTOR_NO ='BM12'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m18 + "'  where MAINTENANCE_FACTOR_NO ='BL1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m19 + "'  where MAINTENANCE_FACTOR_NO ='BL2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m20 + "'  where MAINTENANCE_FACTOR_NO ='BL3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m21 + "'  where MAINTENANCE_FACTOR_NO ='BL4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m22 + "'  where MAINTENANCE_FACTOR_NO ='BL5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m23 + "'  where MAINTENANCE_FACTOR_NO ='BL6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m24 + "'  where MAINTENANCE_FACTOR_NO ='BL7'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m25 + "'  where MAINTENANCE_FACTOR_NO ='BL8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m26 + "'  where MAINTENANCE_FACTOR_NO ='BL9'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m27 + "'  where MAINTENANCE_FACTOR_NO ='BL10'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m28 + "'  where MAINTENANCE_FACTOR_NO ='BL11'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m29 + "'  where MAINTENANCE_FACTOR_NO ='BL12'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m30 + "'  where MAINTENANCE_FACTOR_NO ='BS1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m31 + "'  where MAINTENANCE_FACTOR_NO ='BS2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m32 + "'  where MAINTENANCE_FACTOR_NO ='BS3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m33 + "'  where MAINTENANCE_FACTOR_NO ='BS4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m34 + "'  where MAINTENANCE_FACTOR_NO ='BS5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m35 + "'  where MAINTENANCE_FACTOR_NO ='BS6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m36 + "'  where MAINTENANCE_FACTOR_NO ='BS7'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m37 + "'  where MAINTENANCE_FACTOR_NO ='BS8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m38 + "'  where MAINTENANCE_FACTOR_NO ='BS9'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m39 + "'  where MAINTENANCE_FACTOR_NO ='BS10'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m40 + "'  where MAINTENANCE_FACTOR_NO ='BS11'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m41 + "'  where MAINTENANCE_FACTOR_NO ='BS12'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m42 + "'  where MAINTENANCE_FACTOR_NO ='BT6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m43 + "'  where MAINTENANCE_FACTOR_NO ='BT4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m44 + "'  where MAINTENANCE_FACTOR_NO ='BT3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m45 + "'  where MAINTENANCE_FACTOR_NO ='BT5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m46 + "'  where MAINTENANCE_FACTOR_NO ='BT1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m47 + "'  where MAINTENANCE_FACTOR_NO ='BT2'");


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m48 + "'  where MAINTENANCE_FACTOR_NO ='BR1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m49 + "'  where MAINTENANCE_FACTOR_NO ='BR2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m50+ "'  where MAINTENANCE_FACTOR_NO ='BR3'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m51 + "'  where MAINTENANCE_FACTOR_NO ='BR4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m52 + "'  where MAINTENANCE_FACTOR_NO ='BR5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m53 + "'  where MAINTENANCE_FACTOR_NO ='BR6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m54 + "'  where MAINTENANCE_FACTOR_NO ='BR7'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m55 + "'  where MAINTENANCE_FACTOR_NO ='BR8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m56 + "'  where MAINTENANCE_FACTOR_NO ='BR9'");











            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}
