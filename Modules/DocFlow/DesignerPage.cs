
namespace PMMS.Northwind.Pages
{
    using PMMS.Administration.Entities;
    using Kendo.Mvc.UI;
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Mvc;
    using Kendo.Mvc.Extensions;
    using System.Linq;
    using PMMS.Common.Pages;


    [RoutePrefix("Designer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class DesignerController : Controller
    {

        //[PageAuthorize]
        public ActionResult Index()
        {

            return View(MVC.Views.Common.DocFlow.Designer);


        }


    }


}
