
namespace PMMS.Common.Pages
{
    using Kendo.Mvc.UI;
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    

    [RoutePrefix("Home"), Route("{action=index}")]
    public class AllExternalController : Controller
    {
        [ HttpGet, Route("~/site")]
        public ActionResult Index()
        {
          
            return View(MVC.Views.Common.External.Home);
           
        }
    }


    [RoutePrefix("contact-us"), Route("{action=index}")]
    public class contacusController : Controller
    {
        [HttpGet, Route("~/contact-us")]
        public ActionResult Index()
        {

            return View(MVC.Views.Common.External.ContactUs);

        }
    }

    [RoutePrefix("About"), Route("{action=index}")]
    public class aboutController : Controller
    {
        [HttpGet, Route("~/About")]
        public ActionResult Index()
        {

            return View(MVC.Views.Common.External.About);

        }
    }


    [RoutePrefix("Locations"), Route("{action=index}")]
    public class LocationsController : Controller
    {
        [HttpGet, Route("~/Locations")]
        public ActionResult Index()
        {

            return View(MVC.Views.Common.External.Locations);

        }
    }

    [RoutePrefix("HowTo"), Route("{action=index}")]
    public class HowToController : Controller
    {
        [HttpGet, Route("~/HowTo")]
        public ActionResult Index()
        {

            return View(MVC.Views.Common.External.HowTo);

        }
    }
}
