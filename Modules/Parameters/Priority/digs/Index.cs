
namespace PMMS.Parameters.Priority
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/digs"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class digsController : Controller
    {
        public ActionResult Index()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select  MAINTENANCE_FACTOR_NO as Name,MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where Maintenance_Factor_No in( 'CS10','CS11','CS12','CS13') ");

            return View(MVC.Views.PMMS.Priority.digs, GetAll.ToList());
        }


        public JsonResult SaveData(string m1, string m2, string m3, string m4)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='CS10'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='CS11'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='CS12'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='CS13'");


            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}
