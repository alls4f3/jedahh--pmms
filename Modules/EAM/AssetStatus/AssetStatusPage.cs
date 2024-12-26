
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetStatusRow))]
    public class AssetStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetStatus/AssetStatusIndex.cshtml");
        }
    }
}