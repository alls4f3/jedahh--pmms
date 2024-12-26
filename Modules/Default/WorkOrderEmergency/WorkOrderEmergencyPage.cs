
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkOrderEmergency"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkOrderEmergencyRow))]
    public class WorkOrderEmergencyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkOrderEmergency/WorkOrderEmergencyIndex.cshtml");
        }
    }
}