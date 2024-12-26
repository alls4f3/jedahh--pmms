
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Sections"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class SectionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Sections/SectionsIndex.cshtml");
        }
    }
}