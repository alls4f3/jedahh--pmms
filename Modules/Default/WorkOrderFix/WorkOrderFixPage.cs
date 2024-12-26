
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkOrderFix"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Workflow)]
    public class WorkOrderFixController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkOrderFix/WorkOrderFixIndex.cshtml");
        }
    }
}