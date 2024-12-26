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
    public class PrepareExcelData
    {

        public DataTable GetDistress(string FileName)
        {
            var workbook = ExcelFile.Load(FileName);
            var dataTable = new DataTable();
            //dataTable.Columns.Add("Section", typeof(string));///[Lane]
            dataTable.Columns.Add("Lane", typeof(string));
            //dataTable.Columns.Add("Date", typeof(string));
            dataTable.Columns.Add("StreetNo", typeof(string));
            dataTable.Columns.Add("DistressType", typeof(string));
            dataTable.Columns.Add("MPID", typeof(string));
            dataTable.Columns.Add("Severity", typeof(string));
            dataTable.Columns.Add("MaxSeverityLevel", typeof(string));
            dataTable.Columns.Add("Width", typeof(string));
            dataTable.Columns.Add("Length", typeof(string));
            dataTable.Columns.Add("Area", typeof(string));
            dataTable.Columns.Add("Location_Station", typeof(string));
            dataTable.Columns.Add("From", typeof(string));
            dataTable.Columns.Add("To", typeof(string));

            dataTable.Columns.Add("Latitude", typeof(string));
            dataTable.Columns.Add("Longitude", typeof(string));
            dataTable.Columns.Add("Altitude", typeof(string));



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

        public DataTable GetFWD(string FileName)
        {
            var workbook = ExcelFile.Load(FileName);
            var dataTable = new DataTable();
            dataTable.Columns.Add("MAIN_NO", typeof(string));///[Lane]
            dataTable.Columns.Add("B_T", typeof(string));
            dataTable.Columns.Add("SECTION_NO", typeof(string));
            dataTable.Columns.Add("StationID", typeof(string));
            dataTable.Columns.Add("DropID", typeof(string));
            dataTable.Columns.Add("STATION", typeof(string));
            dataTable.Columns.Add("LANE", typeof(string));
            dataTable.Columns.Add("Asphalt", typeof(string));
            dataTable.Columns.Add("Surface", typeof(string));
            dataTable.Columns.Add("Air", typeof(string));
            dataTable.Columns.Add("DATETIME", typeof(string));
            dataTable.Columns.Add("DATETIME2", typeof(string));
            dataTable.Columns.Add("LATITUDE", typeof(string));
            dataTable.Columns.Add("LONGITUDE", typeof(string));

            dataTable.Columns.Add("Stress", typeof(string));
            dataTable.Columns.Add("Force", typeof(string));

            dataTable.Columns.Add("D1", typeof(string));
            dataTable.Columns.Add("D2", typeof(string));
            dataTable.Columns.Add("D3", typeof(string));
            dataTable.Columns.Add("D4", typeof(string));
            dataTable.Columns.Add("D5", typeof(string));
            dataTable.Columns.Add("D6", typeof(string));
            dataTable.Columns.Add("D7", typeof(string));
            dataTable.Columns.Add("D8", typeof(string));
            dataTable.Columns.Add("D9", typeof(string));


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

        public DataTable GETIRI(string FileName)
        {



            var workbook = ExcelFile.Load(FileName);
            var dataTable = new DataTable();
            dataTable.Columns.Add("Section", typeof(string));///[Lane]
            dataTable.Columns.Add("Lane", typeof(string));
            dataTable.Columns.Add("Date", typeof(string));
            dataTable.Columns.Add("Velocity", typeof(string));
            dataTable.Columns.Add("Duplicate", typeof(string));
            dataTable.Columns.Add("StreetNo", typeof(string));
            dataTable.Columns.Add("From", typeof(string));
            dataTable.Columns.Add("To", typeof(string));
            dataTable.Columns.Add("Left", typeof(string));
            dataTable.Columns.Add("Center", typeof(string));
            dataTable.Columns.Add("Right", typeof(string));
            dataTable.Columns.Add("Average", typeof(string));



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

        public DataTable GETSKID(string FileName)
        {

            var workbook = ExcelFile.Load(FileName);

            var dataTable = new DataTable();
            dataTable.Columns.Add("MAIN_NO", typeof(string));///[Lane]
            dataTable.Columns.Add("STATION_NO", typeof(int));
            dataTable.Columns.Add("SECTION_NO", typeof(string));
            dataTable.Columns.Add("LANE_NO", typeof(string));
            dataTable.Columns.Add("TEST_DATE", typeof(string));
            dataTable.Columns.Add("DISTANCE", typeof(string));
            dataTable.Columns.Add("FN", typeof(string));
            dataTable.Columns.Add("AVE_SPEED", typeof(string));
            dataTable.Columns.Add("remarks", typeof(string));





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

      
    }
}