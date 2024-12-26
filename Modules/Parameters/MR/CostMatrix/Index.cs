
namespace PMMS.Parameters.MR
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using System.Collections.Generic;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/CostMatrix"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class CostMatrixController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.PMMS.MR.CostMatrix);
        }



        public JsonResult GetData(string Id)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Parameters.MR.CostMatrixController.CostMatrixItenms>(@"
select 

[CONTRACTOR_NO],
[MAINTENANCE_COST_VALUE],
[MAINTENANCE_COST_ID]

 from [dbo].[CONTRACTOR_MAINTENANCE_COST] where contractor_no=" + Id);
            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }



        [HttpPost]
        public ActionResult SaveData(List<CostMatrixItenms> itemset, string ID)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            var allitems = ID.ToString();
            if (itemset.Count > 0)
            {
                connection.Execute("delete from CONTRACTOR_MAINTENANCE_COST where   CONTRACTOR_NO ='" + ID + "'");

            }

            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "3" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "6" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "21" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "23" + "','" + ID + "','" + "0" + "') ");

            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "24" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "26" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "27" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "33" + "','" + ID + "','" + "0" + "') ");

            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "36" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "38" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "39" + "','" + ID + "','" + "0" + "') ");
            connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + "2" + "','" + ID + "','" + "0" + "') ");
 



    
            foreach (var item in itemset)
            {
                
                    if (item != null)
                    {
                        if (item.MAINTENANCE_COST_VALUE != null)
                        {
                            if (item.MAINTENANCE_COST_VALUE != "" && item.MAINTENANCE_COST_VALUE.Length > 0)
                            {
                                connection.Execute("insert into CONTRACTOR_MAINTENANCE_COST(MAINTENANCE_COST_ID,CONTRACTOR_NO,MAINTENANCE_COST_VALUE) values('" + item.MAINTENANCE_COST_ID + "','" + ID + "','" + item.MAINTENANCE_COST_VALUE +  "') ");

                            }
                        }
                    }



               
            }



            return Json("Done");



        }

        public JsonResult SaveCostData(string m1, string m2)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("Update Section_Details Set Contractor_No =" + m1 + " Where Section_No Like '" + m2 + "%'");
            connection.Execute("Update Section_Objects Set Contractor_No =" + m1 + " Where Section_No Like '" + m2 + "%'");


            return Json("done", JsonRequestBehavior.AllowGet);
        }





        public class CostMatrixItenms
        {
            public string CONTRACTOR_NO { get; set; }
            public string MAINTENANCE_COST_VALUE { get; set; }
            public string MAINTENANCE_COST_ID { get; set; }

       

        }

        //Direction
    }
}
