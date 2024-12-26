
using PMMS.Common.Pages;
using System.Collections.Generic;

namespace PMMS.Common.Pages
{
    using Kendo.Mvc.Examples.Models.Chart;
    using Kendo.Mvc.UI;
    using Northwind;
  
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/Dashboard")]
        public ActionResult Index()
        {
            //var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
            //    OrderRow.Fields.GenerationKey, () =>
            //    {
            //        var model = new DashboardPageModel();
            //        var o = OrderRow.Fields;
            //        using (var connection = SqlConnections.NewFor<OrderRow>())
            //        {
            //            model.OpenOrders = connection.Count<OrderRow>(o.TransferStatus == (int)TransferStatus.open);
            //            var closedOrders = connection.Count<OrderRow>(o.TransferStatus == (int)TransferStatus.Closed);
            //            var totalOrders = model.OpenOrders + closedOrders;
            //            model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
            //                ((double)closedOrders / (double)totalOrders * 100));
            //            model.CustomerCount = connection.Count<CustomerRow>();
            //            model.ProductCount = connection.Count<ProductRow>();
            //            model.TotalNextVisit = connection.Count<OrderVisitsRow>(OrderVisitsRow.Fields.VDate >= DateTime.Now);




            //        }





            //        return model;
            //    });
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
            var user = ((UserDefinition)Serenity.Authorization.UserDefinition).Source.ToString();

            //if (user == "sign")
            //{
            //    return Redirect("~/MyOrders"); ;

            //}
            //else
            //{
            //    return Redirect("~/Apps/Inbox");

            //}



            return Redirect("~/Apps/Inbox");


            //  return View("~/Modules/Common/Dashboard/DashboardIndex.cshtml");
        }


        [HttpPost]
        public ActionResult MFA(string MFAP)
        {
            try
            {
                if (Request.Cookies["TFA"] == null)
                {
                    return Redirect("~/");


                }
                else
                {
                    HttpCookie cookie = Request.Cookies.Get("TFA");

                    FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(cookie.Value);
                    ViewBag.data = ticket.UserData.Split(',')[3];




                    FormsAuthenticationTicket ticket2 = new FormsAuthenticationTicket(
                                  1,
                                  "MFACIDE",
                                  DateTime.Now,
                                  DateTime.Now.AddMinutes(180),
                                  false,

                                  "CODEAUTH," + ticket.UserData.Split(',')[1] + "," + ticket.UserData.Split(',')[2] + "," + MFAP);
                    string encryptedTicket = FormsAuthentication.Encrypt(ticket2);
                    HttpCookie cookie2 = new HttpCookie("TFA", encryptedTicket);

                    Response.Cookies["TFA"].Value = encryptedTicket;

                    return Redirect("~/Apps/Inbox");
                }
            }
            catch (Exception)
            {

                return Redirect("~/");
            }
            

           
        }


        [HttpPost]
        public ActionResult SalesByProductCategory()
        {
            return Json(ChartOverviewDataRepository.ProductCategoriesData());
        }

        [HttpPost]
        public ActionResult FunnelSales()
        {
            return Json(ChartOverviewDataRepository.FunnelSalesData());
        }

        [HttpPost]
        public ActionResult SalesByRegion()
        {
            return Json(ChartOverviewDataRepository.RegionSalesData());
        }
        [HttpPost]
        public ActionResult SalesPerformers()
        {
            return Json(ChartOverviewDataRepository.SalesPerformers());
        }
    }


    public class AllDataQuery
    {

        public string year { get; set; }
        public string month { get; set; }
        public string count { get; set; }
        public string Opencount { get; set; }
        public string Closedcount { get; set; }
        public string Suspendcount { get; set; }
        public string name { get; set; }
    }
    public class TaskViewModel : ISchedulerEvent
    {
        public int TaskID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime start;
        public DateTime Start
        {
            get
            {
                return start;
            }
            set
            {
                start = value.ToUniversalTime();
            }
        }

        public string StartTimezone { get; set; }

        public DateTime end;
        public DateTime End
        {
            get
            {
                return end;
            }
            set
            {
                end = value.ToUniversalTime();
            }
        }

        public string EndTimezone { get; set; }

        public string RecurrenceRule { get; set; }
        public int? RecurrenceID { get; set; }
        public string RecurrenceException { get; set; }
        public bool IsAllDay { get; set; }
        public int? OwnerID { get; set; }

        public Task ToEntity()
        {
            return new Task
            {
                TaskID = TaskID,
                Title = Title,
                Start = Start,
                StartTimezone = StartTimezone,
                End = End,
                EndTimezone = EndTimezone,
                Description = Description,
                RecurrenceRule = RecurrenceRule,
                RecurrenceException = RecurrenceException,
                RecurrenceID = RecurrenceID,
                IsAllDay = IsAllDay,
                OwnerID = OwnerID
            };
        }
    }

    public partial class Task
    {
        public Task()
        {
            this.Tasks1 = new HashSet<Task>();
        }

        public int TaskID { get; set; }
        public System.DateTime Start { get; set; }
        public System.DateTime End { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Nullable<int> OwnerID { get; set; }
        public bool IsAllDay { get; set; }
        public string RecurrenceRule { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
        public string RecurrenceException { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }

        public virtual ICollection<Task> Tasks1 { get; set; }
        public virtual Task Task1 { get; set; }
    }

    public class ProductCategoriesModel
    {
        public string v1;
        public int v2;
        public int v3;
        public int v4;
        public int v5;

        public ProductCategoriesModel(string v1, int v2, int v3, int v4, int v5)
        {
            this.v1 = v1;
            this.v2 = v2;
            this.v3 = v3;
            this.v4 = v4;
            this.v5 = v5;
        }


    }



    public class RegionSalesModel
    {
        public string v1;
        public double v2;

        public RegionSalesModel(string v1, double v2)
        {
            this.v1 = v1;
            this.v2 = v2;
        }
    }

    public class SalesPerformersModel
    {
        public string v1;
        public int v2;

        public SalesPerformersModel(string v1, int v2)
        {
            this.v1 = v1;
            this.v2 = v2;
        }
    }

    public class FunnelSalesModel
    {
        public string v1;
        public int v2;

        public FunnelSalesModel(string v1, int v2)
        {
            this.v1 = v1;
            this.v2 = v2;
        }
    }
}
namespace Kendo.Mvc.Examples.Models.Chart
{
    public class ChartOverviewDataRepository
    {
        public static IEnumerable<ProductCategoriesModel> ProductCategoriesData()
        {
            return new ProductCategoriesModel[] {
                new ProductCategoriesModel("2022-01", 2085200, 3080700, 1485700, 6651600),
                new ProductCategoriesModel("2022-02", 2091800, 3386400, 1525800, 7004000),
                new ProductCategoriesModel("2022-03", 3002100, 2627000, 1095500, 6724600),
                new ProductCategoriesModel("2022-04", 3008000, 4389700, 1907500, 9305200),
                new ProductCategoriesModel("2022-05", 3015000, 3443900, 1570000, 8028900),
                new ProductCategoriesModel("2022-06", 3035000, 2302500, 2117600, 7455100),
                new ProductCategoriesModel("2022-07", 3042000, 2983100, 2329700, 8354800),
                new ProductCategoriesModel("2022-08", 3044400, 3052200, 2756800, 8853400),
                new ProductCategoriesModel("2022-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2022-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2022-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2022-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2022-10", 3087800, 2211200, 3020300, 8319300),

                   new ProductCategoriesModel("2023-01", 2085200, 3080700, 1485700, 6651600),
                new ProductCategoriesModel("2023-02", 2091800, 3386400, 1525800, 7004000),
                new ProductCategoriesModel("2023-03", 3002100, 2627000, 1095500, 6724600),
                new ProductCategoriesModel("2023-04", 3008000, 4389700, 1907500, 9305200),
                new ProductCategoriesModel("2023-05", 3015000, 3443900, 1570000, 8028900),
                new ProductCategoriesModel("2023-06", 3035000, 2302500, 2117600, 7455100),
                new ProductCategoriesModel("2023-07", 3042000, 2983100, 2329700, 8354800),
                new ProductCategoriesModel("2023-08", 3044400, 3052200, 2756800, 8853400),
                new ProductCategoriesModel("2023-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2023-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2023-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2023-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2023-10", 3087800, 2211200, 3020300, 8319300),


                   new ProductCategoriesModel("2024-01", 2085200, 3080700, 1485700, 6651600),
                new ProductCategoriesModel("2024-02", 2091800, 3386400, 1525800, 7004000),
                new ProductCategoriesModel("2024-03", 3002100, 2627000, 1095500, 6724600),
                new ProductCategoriesModel("2024-04", 3008000, 4389700, 1907500, 9305200),
                new ProductCategoriesModel("2024-05", 3015000, 3443900, 1570000, 8028900),
                new ProductCategoriesModel("2024-06", 3035000, 2302500, 2117600, 7455100),
                new ProductCategoriesModel("2024-07", 3042000, 2983100, 2329700, 8354800),
                new ProductCategoriesModel("2024-08", 3044400, 3052200, 2756800, 8853400),
                new ProductCategoriesModel("2024-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2024-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2024-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2024-09", 3057800, 2611200, 3220300, 8889300),
                new ProductCategoriesModel("2024-10", 3087800, 2211200, 3020300, 8319300)
            };
        }

        public static IEnumerable<FunnelSalesModel> FunnelSalesData()
        {
            return new FunnelSalesModel[] {
                new FunnelSalesModel("عينات الشوارع الرئيسية", 35319300),
                new FunnelSalesModel("عينات الشوارع الفرعية", 15319300),
                //new FunnelSalesModel("Properties Shown", 12319300),
                new FunnelSalesModel("الاجمالى", 8319300)
            };
        }

        public static IEnumerable<RegionSalesModel> RegionSalesData()
        {
            return new RegionSalesModel[] {
                new RegionSalesModel("بلدية البلد", 17.6),
                new RegionSalesModel("بلدية ابحر", 9.2),
                new RegionSalesModel("بلدية جدة الجديدة", 4.6),
                new RegionSalesModel("الشوارع الرئيسية", 30.8),
                new RegionSalesModel("بلدية الجامعة", 21.1),
                new RegionSalesModel("بلدية المطار", 16.3)
            };
        }
        


        public static IList<SalesPerformersModel> SalesPerformers()
        {
            return new SalesPerformersModel[] {
                new SalesPerformersModel("ممتاز", 23),
                new SalesPerformersModel("جيد جدا", 45),
                new SalesPerformersModel("جيد", 33),
                new SalesPerformersModel("مقبول", 10),
                new SalesPerformersModel("غير مقبول", 8)
            };
        }

      
    }
}