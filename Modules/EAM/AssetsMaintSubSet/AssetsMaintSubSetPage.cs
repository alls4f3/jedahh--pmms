
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsMaintSubSet"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsMaintSubSetRow))]
    public class AssetsMaintSubSetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsMaintSubSet/AssetsMaintSubSetIndex.cshtml");
        }
    }
}