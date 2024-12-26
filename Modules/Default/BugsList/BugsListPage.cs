
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BugsList"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class BugsListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BugsList/BugsListIndex.cshtml");
        }
    }
}