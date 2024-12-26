
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/DistortionStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistortionStatusRow))]
    public class DistortionStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/DistortionStatus/DistortionStatusIndex.cshtml");
        }
    }
}