
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/City"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class CityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/City/CityIndex.cshtml");
        }
    }
}