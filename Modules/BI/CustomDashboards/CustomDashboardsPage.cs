
namespace PMMS.BI.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("BI/CustomDashboards"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomDashboardsRow))]
    public class CustomDashboardsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/BI/CustomDashboards/CustomDashboardsIndex.cshtml");
        }
    }
}