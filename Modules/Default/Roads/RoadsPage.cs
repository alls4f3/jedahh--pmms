
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Roads"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class RoadsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Roads/RoadsIndex.cshtml");
        }
    }
}