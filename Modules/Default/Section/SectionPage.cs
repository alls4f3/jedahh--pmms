
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Section"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class SectionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Section/SectionIndex.cshtml");
        }
    }
}