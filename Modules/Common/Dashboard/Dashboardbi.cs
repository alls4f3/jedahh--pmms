
namespace PMMS.Common.Pages
{
    using Kendo.Mvc.UI;
    using Northwind;
    
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    

    [RoutePrefix("Dashboardbi"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.PowerBi)]

    public class DashboardbiController : Controller
    {
        [Authorize, HttpGet, Route("~/Dashboardbi")]
       [PageAuthorize(PermissionKeys.Apps.PowerBi)]

        public ActionResult Index()
        {
          



            //        return model;
            //    });
            return View("~/Modules/Common/Dashboard/Dashboardbi.cshtml");
           
           
        }
    }


   
}
