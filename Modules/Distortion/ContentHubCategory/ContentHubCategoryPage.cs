
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/ContentHubCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContentHubCategoryRow))]
    public class ContentHubCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/ContentHubCategory/ContentHubCategoryIndex.cshtml");
        }
    }
}