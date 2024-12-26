
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/FixList"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class FixListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/FixList/FixListIndex.cshtml");
        }
    }
}