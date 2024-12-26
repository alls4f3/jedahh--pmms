
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetCustAttr"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetCustAttrRow))]
    public class AssetCustAttrController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetCustAttr/AssetCustAttrIndex.cshtml");
        }
    }
}