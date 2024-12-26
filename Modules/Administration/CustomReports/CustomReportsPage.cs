
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/CustomReports"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomReportsRow))]
    public class CustomReportsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/CustomReports/CustomReportsIndex.cshtml");
        }
    }
}