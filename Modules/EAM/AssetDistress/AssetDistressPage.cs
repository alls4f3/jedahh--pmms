
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetDistress"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetDistressRow))]
    public class AssetDistressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetDistress/AssetDistressIndex.cshtml");
        }
    }
}