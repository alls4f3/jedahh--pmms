using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class InvRpt3F
    {
        public List<MyRow> Report1()
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("InvRpt3",
                    param: new
                    {
                        
                        
                    },
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {
            //section_no, Det_MR1, Det_MR2, Det_MR3, Det_MR4, Det_QTY1,Det_QTY2, Det_QTY3, Det_QTY4, Det_Cost1, Det_Cost2, Det_Cost3, Det_Cost4, Det_Cost
            public string section_no { get; set; }
            public string Det_MR1 { get; set; }
            public string Det_MR2 { get; set; }
            public string Det_MR3 { get; set; }

            public string Det_MR4 { get; set; }
            public string Det_QTY1 { get; set; }
            public string Det_QTY2 { get; set; }
            public string Det_QTY3 { get; set; }
            public string Det_QTY4 { get; set; }
            public string Det_Cost1 { get; set; }
            public string Det_Cost2 { get; set; }
            public string Det_Cost3 { get; set; }

            public string Det_Cost { get; set; }
            
        }
    }
}