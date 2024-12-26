
namespace PMMS.Parameters.Priority
{
    using Serenity.Data;
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/ImportanceCommunity"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class ImportanceCommunityController : Controller
    {
        public ActionResult Index()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select  MAINTENANCE_FACTOR_NO as Name,MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where  Maintenance_Factor_No in( 'I1','I2','I3','I4','I5','I6') ");

            return View(MVC.Views.PMMS.Priority.ImportanceCommunity, GetAll.ToList());
        }





        public JsonResult SaveData(string m1, string m2, string m3, string m4, string m5, string m6)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='I1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='I2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='I3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='I4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m5 + "'  where MAINTENANCE_FACTOR_NO ='I5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m6 + "'  where MAINTENANCE_FACTOR_NO ='I6'");

            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}
