
namespace PMMS.EAM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("EAM/OpValues"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OpValuesRow))]
    public class OpValuesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/EAM/OpValues/OpValuesIndex.cshtml");
        }
    }
}