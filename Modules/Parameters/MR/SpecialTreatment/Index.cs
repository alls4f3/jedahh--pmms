
namespace PMMS.Parameters.MR
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using System.Collections.Generic;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/SpecialTreatment"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class SpecialTreatmentController : Controller
    {
        public ActionResult Index()
        {

   
            return View(MVC.Views.PMMS.MR.SpecialTreatment);



        }



        public JsonResult GetData(string Id)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Parameters.MR.SpecialTreatmentController.SpecialTreatmentItenms>(@"
select s.SPECIAL_TREATMENT_DESCRIPTION,s.SPECIAL_TREATMENT_NO as ID,s.SP_TYPE,t.SPECIAL_TREATMENT_NO,t.SPECIAL_TREATMENT_VALUE,t.CONTRACTOR_NO from Special_Treatment as s
left join [dbo].[CONTRACTOR_SPECIAL_TREATMENT] as t

on s.SPECIAL_TREATMENT_NO=t.SPECIAL_TREATMENT_NO and s.SP_TYPE=t.SP_TYPE and t.CONTRACTOR_NO="+Id+@"
order by s.SPECIAL_TREATMENT_NO
");
            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }



        [HttpPost]
        public ActionResult SaveData(List<SpecialTreatmentItenms> itemset,string ID)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            var allitems = ID.ToString();
            if (itemset.Count > 0)
            {
            connection.Execute("delete from CONTRACTOR_SPECIAL_TREATMENT where   CONTRACTOR_NO ='" + ID + "'");

            }


            foreach (var item in itemset)
            {
                if (item.SPECIAL_TREATMENT_DESCRIPTION != "")
                {

                    connection.Execute("update Special_Treatment set SPECIAL_TREATMENT_DESCRIPTION='" + item.SPECIAL_TREATMENT_DESCRIPTION + "' where SPECIAL_TREATMENT_NO='" + item.SPECIAL_TREATMENT_NO + "' and SP_TYPE='" + item.SP_TYPE + "'");

                    if (item != null)
                    {
                        if (item.SPECIAL_TREATMENT_VALUE != null)
                        {
                            if (item.SPECIAL_TREATMENT_VALUE != "" && item.SPECIAL_TREATMENT_VALUE.Length > 0)
                            {
                                connection.Execute("insert into CONTRACTOR_SPECIAL_TREATMENT(SPECIAL_TREATMENT_NO,CONTRACTOR_NO,SPECIAL_TREATMENT_VALUE,SP_TYPE) values('" + item.SPECIAL_TREATMENT_NO + "','" + ID + "','" + item.SPECIAL_TREATMENT_VALUE + "','" + item.SP_TYPE + "') ");

                            }
                        }
                    }
                   
                  

                }
            }



            return Json("Done");



        }


        public class SpecialTreatmentItenms
        {
            public string SPECIAL_TREATMENT_DESCRIPTION { get; set; }
            //public string ID { get; set; }
            public string SP_TYPE { get; set; }
            public string SPECIAL_TREATMENT_NO { get; set; }
            public string SPECIAL_TREATMENT_VALUE { get; set; }
            //public string CONTRACTOR_NO { get; set; }
          

        }
    }
}
