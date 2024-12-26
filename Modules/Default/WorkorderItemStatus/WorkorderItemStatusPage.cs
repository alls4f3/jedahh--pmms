
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkorderItemStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkorderItemStatusRow))]
    public class WorkorderItemStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkorderItemStatus/WorkorderItemStatusIndex.cshtml");
        }
    }
}