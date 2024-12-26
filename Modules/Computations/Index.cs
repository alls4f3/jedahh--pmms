
namespace PMMS.Apps.Computations
{
    using AmtarApp.Modules.Computations;
    using PMMS.Northwind;
    using Serenity.Web;
    using System.Web.Mvc;
    [RoutePrefix("Apps/Computations"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Computations)]
    public class ComputationsController : Controller
    {
        public ActionResult Index()
        {

       
            return View(MVC.Views.PMMS.Apps.Computations);
        }

         public JsonResult Run(string Type, string contractor_no, string zone, string area, string City, int Prediction_Year1, int Prediction_Month1)
        {
            ReportItem rp = new ReportItem();
            if (Type == "comp1")
            {
              
                Budget_Planning_Calculations cc = new Budget_Planning_Calculations();
                rp.Result = cc.Budget_Planning_Cal( contractor_no,  zone,  area,  City,  Prediction_Year1,  Prediction_Month1);

            }
            else if (Type == "comp2")
            {
                PCI_Calculations_Location cc = new PCI_Calculations_Location();
                rp.Result=cc.PCICal("", zone, area, City);
                // here the next method
            }
            else if (Type == "comp3")
            {
                Maintenance_Cost_Calculations cc = new Maintenance_Cost_Calculations();
                rp.Result = cc.Maintenance_Cost_Calc(contractor_no, zone, area, City);
                // here the next method********************
            }
            else if (Type == "comp4")
            {

                Maintenance_Priority_Calculations cc = new Maintenance_Priority_Calculations();
                rp.Result = cc.Maintenance_Priority_Cal(contractor_no, zone, area, City, Prediction_Year1, Prediction_Month1);
                // here the next method
            }
            else if (Type == "comp5")
            {

                Survey_Planning_Calculations cc = new Survey_Planning_Calculations();
                rp.Result = cc.Survey_Planning_Cal(contractor_no, zone, area, City);
                // here the next method
            }

            // this for test
            else if(Type== "type1")
            {
                rp.Result = Type.ToString() + contractor_no.ToString() + zone.ToString() + area.ToString() + City.ToString() + Prediction_Year1.ToString() + Prediction_Month1.ToString();
            }

            return Json(rp.Result, JsonRequestBehavior.AllowGet);


        }




        public class ReportItem
        {
           
            public string Result { get; set; }

        }
    }
}
