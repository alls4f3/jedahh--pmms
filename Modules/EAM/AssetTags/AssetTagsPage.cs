
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetTags"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetTagsRow))]
    public class AssetTagsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetTags/AssetTagsIndex.cshtml");
        }
    }
}