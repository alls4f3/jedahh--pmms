
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Features"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class FeaturesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Features/FeaturesIndex.cshtml");
        }
    }
}