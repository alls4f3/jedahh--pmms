using GemBox.Spreadsheet;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PMS.Modules.API
{
    public class ExcelDT
    {

       
        public DataTable ConvertExcelToDataTable(string FileName)
        {


            var workbook = ExcelFile.Load(FileName);

            // Create DataTable with specified columns.
            var dataTable = new DataTable();
            dataTable.Columns.Add("Section", typeof(string));




            // Select the first worksheet from the file.
            var worksheet = workbook.Worksheets[0];

            var options = new ExtractToDataTableOptions(1, 0, worksheet.Rows.Count - 1);

            options.ExcelCellToDataTableCellConverting += (sender, e) =>
            {
                if (!e.IsDataTableValueValid)
                {
                    // Convert ExcelCell value to string.
                    if (e.DataTableColumnType == typeof(string))
                        e.DataTableValue = e.ExcelCell.Value?.ToString();
                    else
                        e.DataTableValue = DBNull.Value;
                }
            };

            worksheet.ExtractToDataTable(dataTable, options);


            return dataTable;

        }

        public  List<DataTable> SplitDataTableTomultiple(DataTable originalTable, int batchSize)
        {
            List<DataTable> dts = new List<DataTable>();
            DataTable dt = new DataTable();
            dt = originalTable.Clone();
            int j = 0;
            int k = 1;
            if (originalTable.Rows.Count <= batchSize)
            {
                dt.TableName = "Table_" + k;
                dt = originalTable.Copy();
                dts.Add(dt.Copy());
            }
            else
            {
                for (int i = 0; i < originalTable.Rows.Count; i++)
                {
                    dt.NewRow();
                    dt.ImportRow(originalTable.Rows[i]);
                    if ((i + 1) == originalTable.Rows.Count)
                    {
                        dt.TableName = "Table_" + k;
                        dts.Add(dt.Copy());
                        dt.Rows.Clear();
                        k++;
                    }
                    else if (++j == batchSize)
                    {
                        dt.TableName = "Table_" + k;
                        dts.Add(dt.Copy());
                        dt.Rows.Clear();
                        k++;
                        j = 0;
                    }
                }
            }

            return dts;
        }









        public void Bulk_Insert(DataTable dt,string Ref)
        {

            


            if (dt.Rows.Count > 0)
            {

                string strDocument = Ref;

                DataColumn col = new DataColumn();
                col.ColumnName = "Ref";
                col.AllowDBNull = false;
                col.DataType = typeof(string);
                col.DefaultValue = strDocument;
                dt.Columns.Add(col);



                //DataColumn col2 = new DataColumn();
                //col2.ColumnName = "Date";
                //col2.AllowDBNull = false;
                //col2.DataType = typeof(string);
                //col2.DefaultValue = DateTime.Now.ToString();



                //DataColumn col3 = new DataColumn();
                //col3.ColumnName = "Section";
                //col3.AllowDBNull = false;
                //col3.DataType = typeof(string);
                //col3.DefaultValue = "Second";



                //dt.Columns.Add(col2);
                //dt.Columns.Add(col3);

                string consString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;


                var cmdText = @"
    insert into dbo.TblDistress ([Section],[Lane],[Date],[StreetNo],[DistressType],[MPID],[Severity],[MaxSeverityLevel],[Width],[Length],[Area],[Location_Station],[From],[To],[Latitude],[Longitude],[Altitude],Ref)
    select [Section],[Lane],[Date],[StreetNo],[DistressType],[MPID],[Severity],[MaxSeverityLevel],[Width],[Length],[Area],[Location_Station],[From],[To],[Latitude],[Longitude],[Altitude],Ref
    from @customers where Section is not null";


           
                using (var connection = new SqlConnection(consString))
                {
                    var command = new SqlCommand(cmdText, connection);
                    var param = command.Parameters.AddWithValue("@customers", dt);
                    param.TypeName = "dbo.TblDistress_Type";
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();

                }

            }



        }






        public void Bulk_InsertFWD(DataTable dt, string Ref)
        {




            if (dt.Rows.Count > 0)
            {

                string strDocument = Ref;

                DataColumn col = new DataColumn();
                col.ColumnName = "Ref";
                col.AllowDBNull = false;
                col.DataType = typeof(string);
                col.DefaultValue = strDocument;
                dt.Columns.Add(col);

                string consString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;



                var cmdText = @"
                insert into dbo.TblFWD ([MAIN_NO],[B_T],[SECTION_NO],[StationID],[DropID],[STATION],[LANE],[Asphalt],[Surface],[Air],[DATETIME],[DATETIME2],[LATITUDE],[LONGITUDE],[Stress],[Force],[D1],[D2],[D3],[D4],[D5],[D6],[D7],[D8],[D9],Ref)
                select [MAIN_NO],[B_T],[SECTION_NO],[StationID],[DropID],[STATION],[LANE],[Asphalt],[Surface],[Air],[DATETIME],[DATETIME2],[LATITUDE],[LONGITUDE],[Stress],[Force],[D1],[D2],[D3],[D4],[D5],[D6],[D7],[D8],[D9],Ref
                from @TblFWD where SECTION_NO is not null";


                using (var connection = new SqlConnection(consString))
                {
                    var command = new SqlCommand(cmdText, connection);
                    var param = command.Parameters.AddWithValue("@TblFWD", dt);
                    param.TypeName = "dbo.TblFWD_Type";
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();

                }

            }



        }

        public void Bulk_InsertIRI(DataTable dt, string Ref)
        {




            if (dt.Rows.Count > 0)
            {

                string strDocument = Ref;

                DataColumn col = new DataColumn();
                col.ColumnName = "Ref";
                col.AllowDBNull = false;
                col.DataType = typeof(string);
                col.DefaultValue = strDocument;
                dt.Columns.Add(col);

                string consString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;




                var cmdText = @"
                        insert into dbo.TblIRI ([Section],[Lane],[Date],[Velocity],[Duplicate],[StreetNo],[From],[To],[Left],[Center],[Right],[Average],Ref)
                        select [Section],[Lane],[Date],[Velocity],[Duplicate],[StreetNo],[From],[To],[Left],[Center],[Right],[Average],Ref
                        from @TblIRI  where Section is not null";

                using (var connection = new SqlConnection(consString))
                {
                    var command = new SqlCommand(cmdText, connection);
                    var param = command.Parameters.AddWithValue("@TblIRI", dt);
                    param.TypeName = "dbo.TblIRI_Type";
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();

                }

            }



        }




        public void Bulk_InsertSkid(DataTable dt, string Ref)
        {




            if (dt.Rows.Count > 0)
            {

                string strDocument = Ref;

                DataColumn col = new DataColumn();
                col.ColumnName = "Ref";
                col.AllowDBNull = false;
                col.DataType = typeof(string);
                col.DefaultValue = strDocument;
                dt.Columns.Add(col);

                string consString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;


                var cmdText = @"
                insert into dbo.TblSKID ([MAIN_NO],[STATION_NO],[SECTION_NO],[LANE_NO],[TEST_DATE],[DISTANCE],[FN],[AVE_SPEED],[remarks],Ref)
                select [MAIN_NO],[STATION_NO],[SECTION_NO],[LANE_NO],[TEST_DATE],[DISTANCE],[FN],[AVE_SPEED],[remarks],Ref
                from @TblSKIDa where SECTION_NO is not null";

                using (var connection = new SqlConnection(consString))
                {
                    var command = new SqlCommand(cmdText, connection);
                    var param = command.Parameters.AddWithValue("@TblSKIDa", dt);
                    param.TypeName = "dbo.TblSkid_Type";
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();

                }

            }



        }
    }
}