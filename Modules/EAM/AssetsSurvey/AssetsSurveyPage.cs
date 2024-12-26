
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/AssetsSurvey"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsSurveyRow))]
    public class AssetsSurveyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/AssetsSurvey/AssetsSurveyIndex.cshtml");
        }
    }
}