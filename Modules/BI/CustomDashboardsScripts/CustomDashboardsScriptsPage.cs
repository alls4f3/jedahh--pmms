
namespace PMMS.BI.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BI/CustomDashboardsScripts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomDashboardsScriptsRow))]
    public class CustomDashboardsScriptsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BI/CustomDashboardsScripts/CustomDashboardsScriptsIndex.cshtml");
        }
    }
}