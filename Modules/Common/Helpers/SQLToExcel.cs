using GemBox.Spreadsheet;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace AmtarApp.Modules.Common.Helpers
{
    public class SQLToExcel
    {

        DataSet GetRecordsFromDatabase(string SQL)
        {
            DataSet dataSet = new DataSet();

            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            SqlCommand cmd = new SqlCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = SQL;
            cmd.Connection = conn;

            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = cmd;
            sqlDataAdapter.Fill(dataSet);

            return dataSet;
        }

        DataTable GetRecordsFromDatabaseAsTable(string SQL)
        {
            DataTable dataSet = new DataTable();

            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            SqlCommand cmd = new SqlCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = SQL;
            cmd.Connection = conn;

            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
            sqlDataAdapter.SelectCommand = cmd;
            sqlDataAdapter.Fill(dataSet);

            return dataSet;
        }



        DataTable GetRecordsFromDatabaseAsTable(string SQL,List<SqlParameter> sqlParameters)
        {
            DataTable dataSet = new DataTable();

            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(SQL, conn);

            foreach (var item in sqlParameters)
            {

                
                sqlDataAdapter.SelectCommand.Parameters.Add(item);

                //cmd.Parameters.Add(item);
            }

            sqlDataAdapter.Fill(dataSet);

            return dataSet;
        }

        public StringBuilder List(string sql)
        {
            //Fill dataset with records
            DataSet dataSet = GetRecordsFromDatabase(sql);

            StringBuilder sb = new StringBuilder();

            sb.Append("<table>");

            //LINQ to get Column names
            var columnName = dataSet.Tables[0].Columns.Cast<DataColumn>()
                                 .Select(x => x.ColumnName)
                                 .ToArray();
            sb.Append("<tr>");
            //Looping through the column names
            foreach (var col in columnName)
                sb.Append("<td>" + col + "</td>");
            sb.Append("</tr>");

            //Looping through the records
            foreach (DataRow dr in dataSet.Tables[0].Rows)
            {
                sb.Append("<tr>");
                foreach (DataColumn dc in dataSet.Tables[0].Columns)
                {
                    sb.Append("<td>" + dr[dc] + "</td>");
                }
                sb.Append("</tr>");
            }

            sb.Append("</table>");

            return (sb);

            //Writing StringBuilder content to an excel file.
          
        }

        public MemoryStream Excel(string SQl)
        {
            var workbook = new ExcelFile();
         
            DataSet dataSet = GetRecordsFromDatabase(SQl);

            foreach (DataTable dataTable in dataSet.Tables)
            {
                ExcelWorksheet worksheet = workbook.Worksheets.Add(dataTable.TableName);
                worksheet.Rows[0].Style.HorizontalAlignment = HorizontalAlignmentStyle.Center;
                worksheet.Rows[0].Style.Font.Weight = ExcelFont.BoldWeight;
                worksheet.Rows[0].Style = workbook.Styles[BuiltInCellStyleName.Accent6];


                // Insert DataTable to an Excel worksheet.
                worksheet.InsertDataTable(dataTable,
                    new InsertDataTableOptions()
                    {
                        ColumnHeaders = true
                    });
            }


            //MemoryStream m = new MemoryStream();
            //workbook.Save(m,"gt.xls");


            var stream = new MemoryStream();
            workbook.Save(stream, Options);


            return stream;
        }



        public DataTable DataSet(string SQl)
        {

           // DataSet dataSet = new DataSet();

            //foreach (string item in SQl)
            //{
            //    DataTable dt = GetRecordsFromDatabaseAsTable(item);
            //    dataSet.Tables.Add(dt);
            //}
            //DataTable dt = GetRecordsFromDatabaseAsTable(SQl);
            //dataSet.Tables.Add(dt);


            return GetRecordsFromDatabaseAsTable(SQl);
        }


        public DataTable DataSet(string SQl,string CustomQuery)
        {

       
            List<SqlParameter> para = new List<SqlParameter>();
            var d = CustomQuery.Split(',');
            foreach (var item in d)
            {
                if (item.ToString().Trim() != "")
                {
                    var sp = item.ToString().Split(':');
                    para.Add(new SqlParameter(sp[0], sp[1]));
                   // string p = "@" + sp[0];

                }


            }

           // para.Add(new SqlParameter("workorderid", "149"));
            return GetRecordsFromDatabaseAsTable(SQl, para);
        }


        public  string GetJSON( DataSet ds)
        {

            System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            ArrayList root = new ArrayList();
            List<Dictionary<string, object>> table;
            Dictionary<string, object> data;

            foreach (DataTable dt in ds.Tables)
            {
                table = new List<Dictionary<string, object>>();
                foreach (DataRow dr in dt.Rows)
                {
                    data = new Dictionary<string, object>();
                    foreach (DataColumn col in dt.Columns)
                    {
                        data.Add(col.ColumnName, dr[col]);
                    }
                    table.Add(data);
                }
                root.Add(table);
            }

            return serializer.Serialize(root);
        }

        public string Format { get; set; } = "XLSX";
        public SaveOptions Options => this.FormatMappingDictionary[this.Format];

        public IDictionary<string, SaveOptions> FormatMappingDictionary => new Dictionary<string, SaveOptions>()
        {
            ["XLSX"] = new XlsxSaveOptions(),
            ["XLS"] = new XlsSaveOptions(),
            ["ODS"] = new OdsSaveOptions(),
            ["CSV"] = new CsvSaveOptions(CsvType.CommaDelimited),
            ["PDF"] = new PdfSaveOptions(),
            ["HTML"] = new HtmlSaveOptions() { EmbedImages = true },
            ["XPS"] = new XpsSaveOptions(),
            ["BMP"] = new ImageSaveOptions(ImageSaveFormat.Bmp),
            ["PNG"] = new ImageSaveOptions(ImageSaveFormat.Png),
            ["JPG"] = new ImageSaveOptions(ImageSaveFormat.Jpeg),
            ["GIF"] = new ImageSaveOptions(ImageSaveFormat.Gif),
            ["TIF"] = new ImageSaveOptions(ImageSaveFormat.Tiff)
        };
    }
}