
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsSeverity"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsSeverityRow))]
    public class AssetsSeverityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsSeverity/AssetsSeverityIndex.cshtml");
        }
    }
}