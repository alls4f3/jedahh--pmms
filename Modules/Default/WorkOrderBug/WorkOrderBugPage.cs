
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkOrderBug"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Workflow)]
    public class WorkOrderBugController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkOrderBug/WorkOrderBugIndex.cshtml");
        }
    }
}