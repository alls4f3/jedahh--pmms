
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsTotalCalc"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsTotalCalcRow))]
    public class AssetsTotalCalcController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsTotalCalc/AssetsTotalCalcIndex.cshtml");
        }
    }
}