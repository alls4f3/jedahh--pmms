
namespace PMMS.Apps.Reports
{
    using AmtarApp.Modules.Reports.ReportData;
    using PMMS.Northwind;
    using Serenity.Data;
    using Serenity.Web;
    using System.Collections.Generic;
    using System.Data;
    using System.Reflection;
    using System.Web.Mvc;
    using static AmtarApp.Modules.Reports.ReportData.ReportSections;
    using System.Configuration;
    using Serenity;
    using System.Linq;
    using Stimulsoft.Report.Mvc;
    using Stimulsoft.Report;

    [RoutePrefix("Apps/BIDashboards"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.DashBoards)]
    public class BIDashboardsController : Controller
    {
        public ActionResult Index(string ReportId)
        {

            string runBi = "";
            var path = System.Web.HttpContext.Current.Server.MapPath("~/content/license.key");


            Stimulsoft.Base.StiLicense.Key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkgpgFGkUl79uxVs8X+uspx6K+tqdtOB5G1S6PFPRrlVNvMUiSiNYl724EZbrUAWwAYHlGLRbvxMviMExTh2l9xZJ2xc4K1z3ZVudRpQpuDdFq+fe0wKXSKlB6okl0hUd2ikQHfyzsAN8fJltqvGRa5LI8BFkA/f7tffwK6jzW5xYYhHxQpU3hy4fmKo/BSg6yKAoUq3yMZTG6tWeKnWcI6ftCDxEHd30EjMISNn1LCdLN0/4YmedTjM7x+0dMiI2Qif/yI+y8gmdbostOE8S2ZjrpKsgxVv2AAZPdzHEkzYSzx81RHDzZBhKRZc5mwWAmXsWBFRQol9PdSQ8BZYLqvJ4Jzrcrext+t1ZD7HE1RZPLPAqErO9eo+7Zn9Cvu5O73+b9dxhE2sRyAv9Tl1lV2WqMezWRsO55Q3LntawkPq0HvBkd9f8uVuq9zk7VKegetCDLb0wszBAs1mjWzN+ACVHiPVKIk94/QlCkj31dWCg8YTrT5btsKcLibxog7pv1+2e4yocZKWsposmcJbgG0";


            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


                

                string UserId = Authorization.UserId.ToString();
                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"


select PageName as  Name, PagePath  as Text from CustomDashboards

where ( PageId='" + ReportId + @"' ) and ([PageId] in (


select 
[PageId]
from(
	SELECT [PageId], value 
FROM [CustomDashboards]  
CROSS APPLY STRING_SPLIT([PageUsers], ',')

)e where e.value='" + UserId + @"'


)

or [PageId] in (

select [PageId]

from(
	SELECT [PageId], value 
FROM [CustomDashboards]  
CROSS APPLY STRING_SPLIT([PageGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)
)



").ToList();
                if (GetAll.Count > 0)
                {

                    if (GetAll[0].Text.Contains(".mrt"))
                    {
                        runBi = "1";
                        ViewBag.pageNameTile = GetAll[0].Name;
                        ViewBag.PageAfterCotent = "";

                        ViewBag.error = "0";
                    }
                    else
                    {
                        ViewBag.Output = "/App_Data/upload/" + GetAll[0].Text;

                        var fileitem = System.IO.File.ReadAllText(Server.MapPath("/App_Data/upload/" + GetAll[0].Text));

                        fileitem = fileitem.Replace("@@dt0", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=0");
                        fileitem = fileitem.Replace("@@dt1", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=1");
                        fileitem = fileitem.Replace("@@dt2", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=2");
                        fileitem = fileitem.Replace("@@dt3", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=3");
                        fileitem = fileitem.Replace("@@dt4", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=4");
                        fileitem = fileitem.Replace("@@dt5", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=5");
                        fileitem = fileitem.Replace("@@dt6", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=6");
                        fileitem = fileitem.Replace("@@dt7", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=7");
                        fileitem = fileitem.Replace("@@dt8", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=8");
                        fileitem = fileitem.Replace("@@dt9", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=9");
                        fileitem = fileitem.Replace("@@dt10", "/sysapi/ExportDs?Reportid=" + ReportId + "&part=10");


                        ViewBag.pageNameTile = GetAll[0].Name;
                        ViewBag.PageAfterCotent = fileitem;

                        ViewBag.error = "0";
                    }
                   

                }
                else
                {
                    ViewBag.error = "1";
                    ViewBag.pageNameTile = "No connection found";
                }

            }
            catch (System.Exception ex)
            {
                ViewBag.error = "1";
                ViewBag.pageNameTile = ex.Message.ToString();


            }

            if (runBi == "")
            {
                return View(MVC.Views.PMMS.Apps.DashBoards);

            }
            else
            {
                return View(MVC.Views.PMMS.Apps.DashBoardsv2);

            }


        }
        public ActionResult GetReport()

        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

            string UserId = Authorization.UserId.ToString();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select pagepath as Text from CustomDashboards where CustomDashboards.PageId='" + Request.QueryString["ReportId"].ToString() + "'").ToList();

            StiReport report = new StiReport();

            report.Load(Server.MapPath("~/App_Data/upload/" + GetAll[0].Text));

            foreach (var item in report.Dictionary.Databases.ToList())
            {
                if (item.ConnectionType == Stimulsoft.Report.Dictionary.StiConnectionType.Sql)
                {
                    report.Dictionary.Databases.Clear();
                    report.Dictionary.Databases.Add(new Stimulsoft.Report.Dictionary.StiSqlDatabase("Connection", connectionString));
                    break;
                }
            }
            //report.Load(Server.MapPath("~/Content/Dashboard.mrt"));



            return StiMvcViewer.GetReportResult(report);

        }



        public ActionResult ViewerEvent()

        {

            return StiMvcViewer.ViewerEventResult();

        }

    }
}
