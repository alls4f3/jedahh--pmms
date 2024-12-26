
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Zones"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class ZonesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Zones/ZonesIndex.cshtml");
        }
    }
}