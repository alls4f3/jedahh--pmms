
namespace PMMS.Default.Pages
{
    using BoldReports.Web;
    using BoldReports.Writer;
    using Newtonsoft.Json;
    using PMMS.Northwind;
    using Serenity;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;

    [RoutePrefix("Default/WorkOrder"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Workflow)]
    public class WorkOrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/WorkOrder/WorkOrderIndex.cshtml");
        }

        public ActionResult GetReport(string Id)
        {
            try
            {

                List<BoldReports.Web.ReportParameter> userParameters = new List<BoldReports.Web.ReportParameter>();

                userParameters.Add(new BoldReports.Web.ReportParameter()
                {
                    Name = "WorkOrderId",
                    Values = new List<string>() { Id }
                });

                List<DataSourceCredentials> credentials = new List<DataSourceCredentials>();
                DataSourceCredentials dataSourceCredentials = new DataSourceCredentials();

                string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

                //You have to provide the shared data source name used with the report or the data source name available with the report.
                dataSourceCredentials.Name = "DataSource1";
                dataSourceCredentials.ConnectionString = connectionString;

                ReportWriter reportWriter = new ReportWriter(Server.MapPath("~/App_Data/Reports/workorderPrint.rdl"));

                reportWriter.SetParameters(userParameters);

                credentials.Add(dataSourceCredentials);
                reportWriter.SetDataSourceCredentials(credentials);



                MemoryStream stream = new MemoryStream();

                //Step 3: Save the report as PDF, Word or Excel document in the form of stream contents
                reportWriter.Save(stream, WriterFormat.PDF);


                return File(stream.ToArray(), "application/pdf", "WorkOrder - " + Id.ToString() + " -.pdf");





                //    System.Data.DataTable dt = new System.Data.DataTable();
                //    System.Data.DataTable dtbug = new System.Data.DataTable();
                //    System.Data.DataTable dtfix = new System.Data.DataTable();
                //    System.Data.DataTable dtProje = new System.Data.DataTable();



                //    PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
                //    dt = cd.GetData("select * from WorkOrder where WorkOrderId=" + Id);



                //dtbug = cd.GetData("select * from WorkOrderBug where WorkOrderId=" + Id);
                //    dtfix = cd.GetData("select * from WorkOrderFix where WorkOrderId=" + Id);
                //    List<PMMS.Modules.Reports.WorkOrderRpt> Wrpt = new List<Modules.Reports.WorkOrderRpt>();
                //    Wrpt.Add(new Modules.Reports.WorkOrderRpt());

                //    List<PMMS.Modules.Reports.workOrderBug> workbug = new List<Modules.Reports.workOrderBug>();

                //    List<PMMS.Modules.Reports.workOrderfix> workfix = new List<Modules.Reports.workOrderfix>();

                //    foreach (System.Data.DataRow item in dtbug.Rows)
                //    {
                //        workbug.Add(new Modules.Reports.workOrderBug() { ItemName = item["ItemBugName"].ToString() });
                //    }

                //    foreach (System.Data.DataRow item in dtfix.Rows)
                //    {
                //        workfix.Add(new Modules.Reports.workOrderfix() { ItemName = item["ItemFixName"].ToString() });
                //    }


                //if (dt.Rows[0]["RefId"] == null || dt.Rows[0]["RefId"].ToString() == "")
                //{
                //    Wrpt[0].ProjectName = "-";
                //    Wrpt[0].ContractName = "-";
                //    //Wrpt[0].ProjectLocation = "-";
                //}
                //else
                //{
                //    dtProje = cd.GetData("select * from Projects where ProjectId=" + dt.Rows[0]["RefId"]);
                //    Wrpt[0].ProjectName = dtProje.Rows[0]["ProjectName"].ToString();
                //    Wrpt[0].ContractName = dtProje.Rows[0]["ContractorName"].ToString();
                //    Wrpt[0].DocImageMap = imageItem(dt.Rows[0]["DocImageMap"].ToString());
                //    Wrpt[0].DocImageMapSmall = imageItem(dt.Rows[0]["DocImageMapKey"].ToString());
                //        //Wrpt[0].remarkDate1 = dtProje.Rows[0]["ProjectLocation"].ToString();


                //    }
                //    Wrpt[0].WorkOrderId = dt.Rows[0]["WorkOrderId"].ToString();

                //    int c = dt.Rows[0]["DateOfOrderWork"].ToString().IndexOf(" ");
                //   Wrpt[0].DateOfOrderWork = dt.Rows[0]["DateOfOrderWork"].ToString().Substring(0, c);
                //    Wrpt[0].WorkDuration = dt.Rows[0]["WorkDuration"].ToString();
                //    Wrpt[0].WorkorderStartDate = dt.Rows[0]["WorkorderStartDate"].ToString();
                //    int d = dt.Rows[0]["WorkorderEndDate"].ToString().IndexOf(" ");
                //    Wrpt[0].WorkorderEndDate = dt.Rows[0]["WorkorderEndDate"].ToString().Substring(0, d);
                //    Wrpt[0].WorkorderRenewDate = dt.Rows[0]["WorkorderRenewDate"].ToString().Substring(0, 10);
                //    Wrpt[0].WorkorderNotes = dt.Rows[0]["WorkorderNotes"].ToString();
                //    Wrpt[0].ProjectLocation = dt.Rows[0]["ProjectLocation"].ToString();
                //    Wrpt[0].remarkDate1 = dt.Rows[0]["ProjectLocation"].ToString();

                //    Wrpt[0].remark1 = dt.Rows[0]["remark1"].ToString();
                //    Wrpt[0].remark2 = dt.Rows[0]["remark2"].ToString();
                //    Wrpt[0].remark3 = dt.Rows[0]["remark3"].ToString();
                //    Wrpt[0].remark4 = dt.Rows[0]["remark4"].ToString();



                //    int e = dt.Rows[0]["WorkorderRenewDate"].ToString().IndexOf(" ");
                //    Wrpt[0].remarkDate2 = dt.Rows[0]["WorkorderRenewDate"].ToString().Substring(0, e);
                //    //Wrpt[0].remarkDate1 = dt.Rows[0]["remarkDate1"].ToString();
                //    //Wrpt[0].remarkDate2 = dt.Rows[0]["remarkDate2"].ToString();
                //    Wrpt[0].Doc1 = imageItem(dt.Rows[0]["Doc1"].ToString());
                //    Wrpt[0].Doc2 = imageItem(dt.Rows[0]["Doc2"].ToString());
                //    Wrpt[0].Doc3 = imageItem(dt.Rows[0]["Doc3"].ToString());
                //    Wrpt[0].Doc4 = imageItem(dt.Rows[0]["Doc4"].ToString());
                //    Wrpt[0].Doc5 = imageItem(dt.Rows[0]["Doc5"].ToString());
                //    Wrpt[0].Doc6 = imageItem(dt.Rows[0]["Doc6"].ToString());
                //    Wrpt[0].Doc7 = imageItem(dt.Rows[0]["Doc7"].ToString());
                //    Wrpt[0].Doc8 = imageItem(dt.Rows[0]["Doc8"].ToString());


                //    Wrpt[0].listItemBug = workbug;
                //    Wrpt[0].listItemfix = workfix;

                //    PMMS.Modules.FastReports.SysReports rpt = new Modules.FastReports.SysReports();
                //    return  File(rpt.GetReportStream(Wrpt, "/App_Data/WorkOrder.frx", "DS", "workorder", "workorder").ToArray(), "application/pdf","WorkOrder - "+Id.ToString()+" -.pdf");
            }
            catch (System.Exception)
            {

                return null;
            }


        }

        public  byte[] imageItem(string path)
        {
            try
            {
                string imgPath = Server.MapPath("~/App_Data/upload/" + path);
                // Convert image to byte array  
                byte[] byteData = System.IO.File.ReadAllBytes(imgPath);

                return byteData;
            }
            catch (Exception)
            {

                return null;
            }
          



            //try
            //{
            //    if (path != "")
            //    {
            //        string imgPath = Server.MapPath("~/" + path);
            //        // Convert image to byte array  
            //        byte[] byteData = System.IO.File.ReadAllBytes(imgPath);

            //        return byteData;
            //    }
            //    else
            //    {
            //        return null;
            //    }
            //}
            //catch (System.Exception)
            //{

            //    return null;
            //}


        }


    }
}