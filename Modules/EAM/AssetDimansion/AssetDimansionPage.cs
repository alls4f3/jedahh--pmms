
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetDimansion"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetDimansionRow))]
    public class AssetDimansionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetDimansion/AssetDimansionIndex.cshtml");
        }
    }
}