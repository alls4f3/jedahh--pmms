
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/Assets"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetsRow))]
    public class AssetsController : Controller
    {

        public ActionResult Index()
        {
            return View("~/Modules/EAM/Assets/AssetsIndex.cshtml");
        }
    }
}