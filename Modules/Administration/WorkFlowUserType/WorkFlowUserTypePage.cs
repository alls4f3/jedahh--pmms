
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/WorkFlowUserType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WorkFlowUserTypeRow))]
    public class WorkFlowUserTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/WorkFlowUserType/WorkFlowUserTypeIndex.cshtml");
        }
    }
}