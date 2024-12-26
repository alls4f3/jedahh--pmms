
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Department"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartmentRow))]
    public class DepartmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Department/DepartmentIndex.cshtml");
        }
    }
}