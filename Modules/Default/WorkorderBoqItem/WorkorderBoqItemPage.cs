
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkorderBoqItem"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkorderBoqItemRow))]
    public class WorkorderBoqItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkorderBoqItem/WorkorderBoqItemIndex.cshtml");
        }
    }
}