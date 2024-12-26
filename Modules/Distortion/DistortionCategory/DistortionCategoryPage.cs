
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/DistortionCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistortionCategoryRow))]
    public class DistortionCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/DistortionCategory/DistortionCategoryIndex.cshtml");
        }
    }
}