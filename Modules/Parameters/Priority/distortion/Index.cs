﻿
namespace PMMS.Parameters.Priority
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/distortion"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class distortionController : Controller
    {
        public ActionResult Index()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select  MAINTENANCE_FACTOR_NO as Name,MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where Maintenance_Factor_No in( 'CS5','CS6','CS7','CS8','CS9') ");

            return View(MVC.Views.PMMS.Priority.distortion, GetAll.ToList());
        }


        public JsonResult SaveData(string m1, string m2, string m3, string m4, string m5)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='CS5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='CS6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='CS6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='CS8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m5 + "'  where MAINTENANCE_FACTOR_NO ='CS9'");


            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}