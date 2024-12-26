
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/DistortionCases"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistortionCasesRow))]
    public class DistortionCasesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/DistortionCases/DistortionCasesIndex.cshtml");
        }
    }
}