
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetSubCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetSubCategoryRow))]
    public class AssetSubCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetSubCategory/AssetSubCategoryIndex.cshtml");
        }
    }
}