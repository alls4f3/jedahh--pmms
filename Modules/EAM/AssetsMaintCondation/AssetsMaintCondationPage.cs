
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsMaintCondation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsMaintCondationRow))]
    public class AssetsMaintCondationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsMaintCondation/AssetsMaintCondationIndex.cshtml");
        }
    }
}