
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetServiceStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetServiceStatusRow))]
    public class AssetServiceStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetServiceStatus/AssetServiceStatusIndex.cshtml");
        }
    }
}