
namespace PMMS.Default.Pages
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Contractors"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Configrations)]
    public class ContractorsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Contractors/ContractorsIndex.cshtml");
        }
    }
}