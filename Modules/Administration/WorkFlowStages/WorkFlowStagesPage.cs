
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/WorkFlowStages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkFlowStagesRow))]
    public class WorkFlowStagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/WorkFlowStages/WorkFlowStagesIndex.cshtml");
        }
    }
}