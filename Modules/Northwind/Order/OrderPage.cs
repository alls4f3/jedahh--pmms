

using System;

namespace PMMS.Northwind
{
    public class GeneralDashBoardPageModel
    {
        public int id { get; set; }
        public int orderid { get; set; }
        public int? status { get; set; }
        public string notes { get; set; }
        public string employeeid { get; set; }
        public string customerid { get; set; }
        public DateTime orderdate { get; set; }
        public string shipcity { get; set; }
        public string shipaddress { get; set; }
        public string displayname { get; set; }
        public DateTime vdate { get; set; }


        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        public int TotalNextVisit { get; set; }


    }

    public class CatDashboard
    {

        public int Id { get; set; }
        public string Text { get; set; }
        public string Name { get; set; }
        public int? ReportsTo { get; set; }
        public bool hasChildern { get; set; }


    }


    public class ItemSelect
    {

        public string Id { get; set; }
        public string Text { get; set; }
        public string Name { get; set; }
        public int? ReportsTo { get; set; }
        public bool hasChildern { get; set; }
        public string itemstatus { get; set; }

        

    }

    public class distressUpload
    {

        public string Sec { get; set; }



    }

    public class ImportFileUpload
    {

        public string Section { get; set; }
        public string Note { get; set; }



    }
}











namespace PMMS.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    [RoutePrefix("Apps/Inbox"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.RelatedData)]

    public class InboxController : Controller
    {
        public ActionResult Index()
        {

           

            return View(MVC.Views.Northwind.Order.OrderIndex);
        }
    }




}
