
namespace PMMS.Distortion.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Distortion/ContentHub"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContentHubRow))]
    public class ContentHubController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Distortion/ContentHub/ContentHubIndex.cshtml");
        }
    }
}