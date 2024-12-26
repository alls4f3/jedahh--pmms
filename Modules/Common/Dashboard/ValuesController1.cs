using BoldReports.Web;
using BoldReports.Web.ReportViewer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
namespace AmtarApp.Modules.Common.Dashboard
{
    public class ValuesController : ApiController, IReportController
    {
        
        public object PostReportAction(Dictionary<string, object> jsonResult)
        {
            return ReportHelper.ProcessReport(jsonResult, this);
        }

        [HttpGet]
        public object PostReportAction2()
        {
            //Contains helper methods that help to process a Post or Get request from the Report Viewer control and return the response to the Report Viewer control
            return "Hello";
        }

        // Get action for getting resources from the report
        [System.Web.Http.ActionName("GetResource")]
        [AcceptVerbs("GET")]
        public object GetResource(string key, string resourcetype, bool isPrint)
        {
            return ReportHelper.GetResource(key, resourcetype, isPrint);
        }

        // Method that will be called when initialize the report options before start processing the report
        [NonAction]
        public void OnInitReportOptions(ReportViewerOptions reportOption)
        {
            // You can update report options here


            DataSourceCredentials dataSourceCredentials = new DataSourceCredentials();

            string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

            //You have to provide the shared data source name used with the report or the data source name available with the report.
            dataSourceCredentials.Name = "DataSource1";
            dataSourceCredentials.ConnectionString = connectionString;
          
            reportOption.ReportModel.DataSourceCredentials = new List<DataSourceCredentials> { dataSourceCredentials };
        }

        // Method that will be called when reported is loaded
        [NonAction]
        public void OnReportLoaded(ReportViewerOptions reportOption)
        {
            //You can update report options here
        }
       

    }
}