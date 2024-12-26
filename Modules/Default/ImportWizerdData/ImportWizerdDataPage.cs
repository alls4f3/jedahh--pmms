
namespace PMMS.Default.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;

    [RoutePrefix("Default/ImportWizerdData"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportWizerdDataRow))]
    public class ImportWizerdDataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ImportWizerdData/ImportWizerdDataIndex.cshtml");
        }

        [HttpPost]
        public ActionResult Rollback(string EntityId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var AllItems = connection.Query<Entities.ImportWizerdDataRow>("select * from importwizerd where importid='" + EntityId.ToString() + "'").ToList();
                connection.Execute("delete from DISTRESS_SAMPLES where importref='" + AllItems[0].ImportRef.ToString() + "'");

            }

            return Json("Done");
        }
    }
}