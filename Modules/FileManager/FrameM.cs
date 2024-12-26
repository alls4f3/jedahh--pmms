
namespace PMMS.Apps.Browse
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;
    using System.IO;
    using System.Web;
    using System;
    using Kendo.Mvc;
    using System.Collections.Generic;
    using Serenity;
    using System.Web.Hosting;

    [RoutePrefix("Apps/Filebox"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.FileManager)]
    public class FileManagerFrameController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.PMMS.Apps.FileManagerFrame);
        }




    }
}
