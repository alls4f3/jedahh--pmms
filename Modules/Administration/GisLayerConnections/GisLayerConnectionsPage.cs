
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/GisLayerConnections"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GisLayerConnectionsRow))]
    public class GisLayerConnectionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/GisLayerConnections/GisLayerConnectionsIndex.cshtml");
        }
    }
}