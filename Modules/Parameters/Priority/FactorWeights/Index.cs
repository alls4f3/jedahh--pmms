
namespace PMMS.Parameters.Priority
{
    using Serenity.Data;
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/FactorWeights"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class FactorWeightsController : Controller
    {
        public ActionResult Index()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select  MAINTENANCE_FACTOR_NO as Name,MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where  Maintenance_Factor_No in( 'MC1','MC2','MC3','MC4','MC5','MC6','MC7','MC8','MC9','MC10','MC11','MC12') ");

            return View(MVC.Views.PMMS.Priority.FactorWeights, GetAll.ToList());
        }

      


        public JsonResult SaveData(string m1,string m2,string m3,string m4,string m5 ,string m6,string m7, string m8, string m9, string m10, string m11, string m12)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='MC1'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='MC2'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='MC3'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='MC4'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m5 + "'  where MAINTENANCE_FACTOR_NO ='MC5'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m6 + "'  where MAINTENANCE_FACTOR_NO ='MC6'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m7+ "'  where MAINTENANCE_FACTOR_NO ='MC7'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m8+ "'  where MAINTENANCE_FACTOR_NO ='MC8'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m9+ "'  where MAINTENANCE_FACTOR_NO ='MC9'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m10+ "'  where MAINTENANCE_FACTOR_NO ='MC10'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m11+ "'  where MAINTENANCE_FACTOR_NO ='MC11'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m12+ "'  where MAINTENANCE_FACTOR_NO ='MC12'");

            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}
