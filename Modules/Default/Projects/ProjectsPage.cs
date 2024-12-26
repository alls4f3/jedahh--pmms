
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Projects"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class ProjectsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Projects/ProjectsIndex.cshtml");
        }
    }
}