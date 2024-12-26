
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ImportWizerd"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportWizerdRow))]
    public class ImportWizerdController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImportWizerd/ImportWizerdIndex.cshtml");
        }
    }
}