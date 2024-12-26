
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsSurveyDistress"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsSurveyDistressRow))]
    public class AssetsSurveyDistressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsSurveyDistress/AssetsSurveyDistressIndex.cshtml");
        }
    }
}