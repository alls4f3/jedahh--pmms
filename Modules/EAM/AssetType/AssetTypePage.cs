
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetTypeRow))]
    public class AssetTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetType/AssetTypeIndex.cshtml");
        }
    }
}