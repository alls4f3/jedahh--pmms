
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/DistortionSubCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistortionSubCategoryRow))]
    public class DistortionSubCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/DistortionSubCategory/DistortionSubCategoryIndex.cshtml");
        }
    }
}