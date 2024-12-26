
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetLocation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetLocationRow))]
    public class AssetLocationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetLocation/AssetLocationIndex.cshtml");
        }
    }
}