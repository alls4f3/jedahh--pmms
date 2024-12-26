
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Apps/Inbox2"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class HomeStartController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Home/Start.cshtml");
        }
    }
}