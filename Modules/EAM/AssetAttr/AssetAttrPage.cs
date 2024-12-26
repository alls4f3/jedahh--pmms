
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetAttr"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetAttrRow))]
    public class AssetAttrController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetAttr/AssetAttrIndex.cshtml");
        }
    }
}