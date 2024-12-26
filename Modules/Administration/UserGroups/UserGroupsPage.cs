
namespace PMMS.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/UserGroups"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserGroupsRow))]
    public class UserGroupsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/UserGroups/UserGroupsIndex.cshtml");
        }
    }
}