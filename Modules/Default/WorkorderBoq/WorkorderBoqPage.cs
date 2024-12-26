
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkorderBoq"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkorderBoqRow))]
    public class WorkorderBoqController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkorderBoq/WorkorderBoqIndex.cshtml");
        }
    }
}