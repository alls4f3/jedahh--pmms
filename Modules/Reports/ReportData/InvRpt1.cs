using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class InvRpt1
    {
        public List<MyRow> Report1()
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("InvRpt1",
                    param: new
                    {
                        
                        
                    },
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {

            public string section_no { get; set; }
            public string section_PCI { get; set; }
            public string Distress_summary { get; set; }
            public string Section_Rating { get; set; }          

        }
    }
}