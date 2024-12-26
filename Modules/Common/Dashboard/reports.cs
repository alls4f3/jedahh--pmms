
using PMMS.Common.Pages;
using System.Collections.Generic;


namespace PMMS.Common.Pages
{
    using BoldReports.Web.ReportViewer;
    using Kendo.Mvc.Examples.Models.Chart;
    using Kendo.Mvc.UI;
    using Northwind;
   
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;


    [RoutePrefix("ReportsCenter"), Route("{action=index}")]
    public class ReportsAPIController : Controller
    {
        [Authorize, HttpGet, Route("~/ReportsCenter")]
        [PageAuthorize(PermissionKeys.Apps.Reports)]
        public ActionResult Index(string Report)
        {

            if (string.IsNullOrEmpty(Report))
            {
                ViewBag.Report = "Welcome";
            }
            else
            {
                ViewBag.Report = Report;

            }

            return View("~/Modules/Common/Dashboard/reports.cshtml");
        }



        
    }
}
