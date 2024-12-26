
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetClass"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetClassRow))]
    public class AssetClassController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetClass/AssetClassIndex.cshtml");
        }
    }
}