
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Apps/About"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class AboutController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/About/About.cshtml");
        }
    }
}