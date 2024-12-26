
namespace PMMS.Parameters.MR
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using System.Collections.Generic;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/SelectionMatrix"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class SelectionMatrixController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.PMMS.MR.SelectionMatrix);
        }




        public JsonResult GetData(string Id)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Parameters.MR.SelectionMatrixController.SelectionMatrixItems>(@"
SELECT [MAINTENANCE_SELECTION_NO]
      ,[LOW_LOW]
      ,[LOW_MEDIUM]
      ,[LOW_HIGH]
      ,[MEDIUM_LOW]
      ,[MEDIUM_MEDIUM]
      ,[MEDIUM_HIGH]
      ,[HIGH_LOW]
      ,[HIGH_MEDIUM]
      ,[HIGH_HIGH]
      ,[LOW_VERY_HIGH]
      ,[MEDIUM_VERY_HIGH]
      ,[HIGH_VERY_HIGH]
  FROM [dbo].[MAINTENANCE_SELECTION]
where MAINTENANCE_SELECTION_NO=" + Id);
            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }



       
        public ActionResult SaveData(string currentSelect,bool IsSideWalk, string LOW_LOW, string LOW_MEDIUM, string  LOW_HIGH, string  LOW_VERY_HIGH, string MEDIUM_LOW,
            string MEDIUM_MEDIUM, string MEDIUM_HIGH, string MEDIUM_VERY_HIGH, string HIGH_LOW, string HIGH_MEDIUM, string HIGH_HIGH, string HIGH_VERY_HIGH)
        {

            
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            if (IsSideWalk == false)
            {
                connection.Execute("update [MAINTENANCE_SELECTION]  set [LOW_LOW] ='" + LOW_LOW + "' ,[LOW_MEDIUM] ='" + LOW_MEDIUM + "' ,[LOW_HIGH] ='" + LOW_HIGH + "'  ,[MEDIUM_LOW]='" + MEDIUM_LOW + "' ,[MEDIUM_MEDIUM]='" + MEDIUM_MEDIUM + "' ,[MEDIUM_HIGH]='" + MEDIUM_HIGH + "'  ,[HIGH_LOW]='" + HIGH_LOW + "' ,[HIGH_MEDIUM]='" + HIGH_MEDIUM + "',[HIGH_HIGH]='" + HIGH_HIGH + "'  ,[LOW_VERY_HIGH]='" + LOW_VERY_HIGH + "' ,[MEDIUM_VERY_HIGH]='" + MEDIUM_VERY_HIGH + "',[HIGH_VERY_HIGH]='" + HIGH_VERY_HIGH + "'where MAINTENANCE_SELECTION_NO='" + currentSelect + "'");

            }
            else
            {
                connection.Execute("update [MAINTENANCE_SELECTION]  set [LOW_LOW] ='" + LOW_LOW + "' ,[LOW_MEDIUM] ='" + LOW_MEDIUM + "' ,[LOW_HIGH] ='" + LOW_HIGH + "'  ,[LOW_VERY_HIGH]='" + LOW_VERY_HIGH + "' "+" where MAINTENANCE_SELECTION_NO='" + currentSelect + "'");

            }

            return Json("done", JsonRequestBehavior.AllowGet);



        }


        public class SelectionMatrixItems
        {
            public string MAINTENANCE_SELECTION_NO { get; set; }
            //public string ID { get; set; }
            public string LOW_LOW { get; set; }
            public string LOW_MEDIUM { get; set; }
            public string LOW_HIGH { get; set; }
            public string MEDIUM_LOW { get; set; }
            public string MEDIUM_MEDIUM { get; set; }
            public string MEDIUM_HIGH { get; set; }
            public string HIGH_LOW { get; set; }
            public string HIGH_MEDIUM { get; set; }
            public string HIGH_HIGH { get; set; }
            public string LOW_VERY_HIGH { get; set; }
            public string MEDIUM_VERY_HIGH { get; set; }
            public string HIGH_VERY_HIGH { get; set; }


        }
    }
}
