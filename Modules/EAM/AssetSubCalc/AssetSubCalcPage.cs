
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetSubCalc"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetSubCalcRow))]
    public class AssetSubCalcController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetSubCalc/AssetSubCalcIndex.cshtml");
        }
    }
}