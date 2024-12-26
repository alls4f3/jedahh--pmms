
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetCategoryRow))]
    public class AssetCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetCategory/AssetCategoryIndex.cshtml");
        }
    }
}