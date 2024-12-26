
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetSubCategoryLevel"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetSubCategoryLevelRow))]
    public class AssetSubCategoryLevelController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetSubCategoryLevel/AssetSubCategoryLevelIndex.cshtml");
        }
    }
}