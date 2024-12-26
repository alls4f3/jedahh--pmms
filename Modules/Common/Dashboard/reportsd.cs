
using PMMS.Common.Pages;
using System.Collections.Generic;

namespace PMMS.Common.Pages
{
    using BoldReports.Web.ReportViewer;
    using Kendo.Mvc.Examples.Models.Chart;
    using Kendo.Mvc.UI;
    using Northwind;

    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;


    [RoutePrefix("ReportsCenterd"), Route("{action=index}")]
    public class ReportsAPIdController : Controller
    {
        [Authorize, HttpGet, Route("~/ReportsCenterd")]
        [PageAuthorize(PermissionKeys.Apps.Reports)]
        public ActionResult Index(string Report)
        {

            if (string.IsNullOrEmpty(Report))
            {
                ViewBag.Report = "Welcome";
            }
            else
            {

                using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                {

                    string UserId = Authorization.UserId.ToString();
                    var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"

select * from (
select replace(replace(Reportpath,'.rdl',''),'Reports/','') as Id, Reportname  as Text from customreports

where [ReportId] in (


select 
[ReportId]
from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportUsers], ',')

)e where e.value='" + UserId + @"'


)

or [ReportId] in (

select [ReportId]

from(
	SELECT [ReportId], value 
FROM [CustomReports]  
CROSS APPLY STRING_SPLIT([ReportGroups], ',')
)k
join [dbo].[UserRoles] j on j.[RoleId]=k.value
and [UserId]='" + UserId + @"'

)

)c where c.id='"+Report+@"'


").ToList();


                    if (GetAll.Count > 0)
                    {
                        ViewBag.Report = Report;

                    }
                    else
                    {
                        ViewBag.Report = "Welcome";

                    }
                }

               


            }

            return View("~/Modules/Common/Dashboard/reportsd.cshtml");
        }
        
    }
}
