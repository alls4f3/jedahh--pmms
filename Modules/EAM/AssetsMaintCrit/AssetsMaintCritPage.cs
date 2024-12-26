
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsMaintCrit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsMaintCritRow))]
    public class AssetsMaintCritController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsMaintCrit/AssetsMaintCritIndex.cshtml");
        }
    }
}