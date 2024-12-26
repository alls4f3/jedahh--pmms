
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ImportType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportTypeRow))]
    public class ImportTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImportType/ImportTypeIndex.cshtml");
        }
    }
}