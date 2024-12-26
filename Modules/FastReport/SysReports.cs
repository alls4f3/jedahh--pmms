using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using FastReport;

namespace PMMS.Modules.FastReports
{
    public class SysReports
    {

        public byte[] GetReport(dynamic obj, string templatePath, string dataSourceName, string subject, string title)
        {
            //Add datasource to Report
            FastReport.Report myReport = new FastReport.Report();
            myReport.Load(System.Web.HttpContext.Current.Server.MapPath(templatePath));
            myReport.RegisterData(obj, dataSourceName);
            myReport.GetDataSource(dataSourceName).Enabled = true;

            //myReport.Design();
           
            myReport.Prepare();

            FastReport.Export.Pdf.PDFExport pdfExport = new FastReport.Export.Pdf.PDFExport();
            pdfExport.ShowProgress = false;
            pdfExport.Subject = subject;
            pdfExport.Title = title;
            pdfExport.Compressed = true;
            pdfExport.AllowPrint = true;
            pdfExport.EmbeddingFonts = true;

            MemoryStream strm = new MemoryStream();
            myReport.Report.Export(pdfExport, strm);
            myReport.Dispose();
            pdfExport.Dispose();
            strm.Position = 0;

            //  FileStream file = new FileStream("d:\\Test123456.pdf", FileMode.Create, FileAccess.Write);
            // strm.WriteTo(file);

            return strm.ToArray();
            //  return null;
        }






        public MemoryStream GetReportStream(dynamic obj, string templatePath, string dataSourceName, string subject, string title)
        {
            //Add datasource to Report
            FastReport.Report myReport = new FastReport.Report();
            myReport.Load(System.Web.HttpContext.Current.Server.MapPath(templatePath));
            myReport.RegisterData(obj, dataSourceName);
            myReport.GetDataSource(dataSourceName).Enabled = true;

            //myReport.Design();

            myReport.Prepare();

            FastReport.Export.Pdf.PDFExport pdfExport = new FastReport.Export.Pdf.PDFExport();
            pdfExport.ShowProgress = false;
            pdfExport.Subject = subject;
            pdfExport.Title = title;
            pdfExport.Compressed = true;
            pdfExport.AllowPrint = true;
            pdfExport.EmbeddingFonts = true;

            MemoryStream strm = new MemoryStream();
            myReport.Report.Export(pdfExport, strm);
            myReport.Dispose();
            pdfExport.Dispose();
            strm.Position = 0;

            //  FileStream file = new FileStream("d:\\Test123456.pdf", FileMode.Create, FileAccess.Write);
            // strm.WriteTo(file);

            return strm;
            //  return null;
        }


        public byte[] Design(dynamic obj, string templatePath, string dataSourceName, string subject, string title)
        {
            //Add datasource to Report
            FastReport.Report myReport = new FastReport.Report();
            myReport.Load(System.Web.HttpContext.Current.Server.MapPath(templatePath));


            myReport.RegisterData(obj, dataSourceName);

           myReport.GetDataSource(dataSourceName).Enabled = true;


          
         

            myReport.Design();
              return null;
            //  return null;
        }
    }
}