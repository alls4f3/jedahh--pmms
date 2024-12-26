
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Areas"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class AreasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Areas/AreasIndex.cshtml");
        }
    }
}