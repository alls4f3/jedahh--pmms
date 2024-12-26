
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

    [RoutePrefix("Apps/Reports"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.SystemReports)]
    public class ReportsController : Controller
    {
        public ActionResult Index()
        {
            var ReportType="none";
            var City = "";
            var Zone = "";
            var Area = "";
            var Contractor = "";

            if (Request.QueryString["type"] != null)
            {
                ReportType = Request.QueryString["type"].ToString();
            }


            if (Request.QueryString["City"] != null)
            {
                City = Request.QueryString["City"].ToString();
            }


            if (Request.QueryString["Zone"] != null)
            {
                Zone = Request.QueryString["Zone"].ToString();
            }

            if (Request.QueryString["Area"] != null)
            {
                Area = Request.QueryString["Area"].ToString();
            }

            if (Request.QueryString["Contractor"] != null)
            {
                Contractor = Request.QueryString["Contractor"].ToString();
            }




            FastReport.Web.WebReport webReport = new FastReport.Web.WebReport();
          
            webReport.Width = 845;
            webReport.Height = 1200;
            webReport.CssClass = "csrt";
            webReport.BorderWidth = 1;
            var report = getReportData(ReportType, City, Zone, Area, Contractor);
            try
           {
                if (Request.QueryString["type"] != null)
                {

                    webReport.Report.Load(Server.MapPath(report.ReportPath));

                    webReport.Report.RegisterData(report.data, report.DSName);
                    webReport.Report.GetDataSource(report.DSName).Enabled = true;
                    // webReport.ShowToolbar = true;

                    webReport.Report.Prepare();

                    // webReport.Report.Design();

                }
                else
                {
                    if (Request.QueryString["render"] != null)
                    {

                        webReport.Report.Load(Server.MapPath("~/App_Data/upload/Reports/" + Request.QueryString["render"].ToString() + ".frx"));

                        foreach (FastReport.Data.MsSqlDataConnection item in webReport.Report.Dictionary.Connections)
                        {
                            item.ConnectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

                        }
                    



                    }
                    else
                    {
                        webReport.Report.Load(Server.MapPath("~/App_Data/Prepared.frx"));

                    }

                    // webReport.ShowToolbar = false;

                }
            }
            catch
            {
                webReport.Report.Load(Server.MapPath("~/App_Data/Prepared.frx"));
            }

          
            ViewBag.WebReport = webReport;


            return View(MVC.Views.PMMS.Apps.Reports);
        }

    

        ReportItem getReportData(string Type,string city,string zone,string area,string contractor)
        {
            ReportItem rp = new ReportItem();
            if (Type == "rpt1")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/test.frx";

                 ReportSections rs = new ReportSections();
                rp.data=  rs.Report1(city,zone,area);
            }
           else if (Type == "rptabbas")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/test.frx";

                ReportSections rs = new ReportSections();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt1")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt1.frx";

                SecRpt1 rs = new SecRpt1();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt21")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt21.frx";

                SecRpt21 rs = new SecRpt21();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt3")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt3.frx";

                SecRpt3 rs = new SecRpt3();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt4")
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt4.frx";

                SecRpt4 rs = new SecRpt4();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt5")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt5.frx";

                SecRpt5 rs = new SecRpt5();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "Secrpt5All")//SecRpt5Minor
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/Secrpt5All.frx";

                Secrpt5All rs = new Secrpt5All();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt5Minor")//Secrpt5Emergency
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt5Minor.frx";

                SecRpt5Minor rs = new SecRpt5Minor();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "Secrpt5Emergency")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/Secrpt5Emergency.frx";

                Secrpt5Emergency rs = new Secrpt5Emergency();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt6")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt6.frx";

                SecRpt6 rs = new SecRpt6();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt7")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt7.frx";

                SecRpt7 rs = new SecRpt7();
                rp.data = rs.Report1(city, zone, area);
            }
            else if (Type == "SecRpt8")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt8.frx";

                SecRpt8 rs = new SecRpt8();
                rp.data = rs.Report1();
            }
            else if (Type == "SecRpt9")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt9.frx";

                SecRpt9 rs = new SecRpt9();
                rp.data = rs.Report1();
            }
            else if (Type == "SecRpt10")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt10.frx";

                SecRpt10 rs = new SecRpt10();
                rp.data = rs.Report1(contractor);
            }
            else if (Type == "SecRpt11")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt11.frx";

                SecRpt11 rs = new SecRpt11();
                rp.data = rs.Report1(contractor);
            }
            else if (Type == "SecRpt12")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt12.frx";

                SecRpt12 rs = new SecRpt12();
                rp.data = rs.Report1(contractor);
            }
            else if (Type == "SecRpt13")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SecRpt13.frx";

                SecRpt13 rs = new SecRpt13();
                rp.data = rs.Report1(contractor);
            }
            else if (Type == "InvRpt1")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/InvRpt1.frx";

                InvRpt1 rs = new InvRpt1();
                rp.data = rs.Report1();
            }
            else if (Type == "InvRpt0F")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/InvRpt0F.frx";

                InvRpt0F rs = new InvRpt0F();
                rp.data = rs.Report1();
            }
            else if (Type == "InvRpt3F")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/InvRpt3F.frx";

                InvRpt3F rs = new InvRpt3F();
                rp.data = rs.Report1();
            }
            else if (Type == "PctRpt1F")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/PctRpt1F.frx";

                PctRpt1F rs = new PctRpt1F();
                rp.data = rs.Report1();
            }
            else if (Type == "SrvRpt1F")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/SrvRpt1F.frx";

                SrvRpt1F rs = new SrvRpt1F();
                rp.data = rs.Report1();
            }
            else if (Type == "BdpRpt12F")//DistressAnalys
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/BdpRpt12F.frx";

                BdpRpt12F rs = new BdpRpt12F();
                rp.data = rs.Report1();
            }
            else if (Type == "DistressAnalys")//
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/DistressAnalys.frx";

                DistressAnalys rs = new DistressAnalys();
                rp.data = rs.Report1();
            }
            else
            {
                rp.DSName = "DS";
                rp.ReportPath = "~/App_Data/Prepared.frx";
                List<object> none = new List<object>();
                rp.data = none;
            }


            return rp;
        }

      


        public class ReportItem
        {
            public string ReportPath { get; set; }
            public string DSName { get; set; }
            public  IEnumerable<dynamic> data { get; set; }
        }
    }
}
