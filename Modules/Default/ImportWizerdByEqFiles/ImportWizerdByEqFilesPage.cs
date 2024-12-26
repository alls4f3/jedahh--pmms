
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ImportWizerdByEqFiles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportWizerdByEqFilesRow))]
    public class ImportWizerdByEqFilesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImportWizerdByEqFiles/ImportWizerdByEqFilesIndex.cshtml");
        }
    }
}