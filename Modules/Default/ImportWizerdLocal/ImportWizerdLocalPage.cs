
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ImportWizerdLocal"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportWizerdLocalRow))]
    public class ImportWizerdLocalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImportWizerdLocal/ImportWizerdLocalIndex.cshtml");
        }
    }
}