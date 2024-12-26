
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetBuilding"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetBuildingRow))]
    public class AssetBuildingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetBuilding/AssetBuildingIndex.cshtml");
        }
    }
}