
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/AuditLog"), Route("{action=index}")]
  //  [PageAuthorize(typeof(Entities.AuditLogRow))]
    [PageAuthorize(typeof(Entities.UserRow))]
    public class AuditLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/AuditLog/AuditLogIndex.cshtml");
        }
    }
}