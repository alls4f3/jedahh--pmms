﻿using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class BdpRpt12F
    {
        public List<MyRow> Report1()
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("BdpRpt12",
                    param: new
                    {
                        
                        
                    },
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {
            //section_no, Det_MR1, Det_MR2, Det_MR3, Det_MR4, Det_QTY1,Det_QTY2, Det_QTY3, Det_QTY4, Det_Cost1, Det_Cost2, Det_Cost3, Det_Cost4, Det_Cost
            public string an { get; set; }
            public string rn { get; set; }
          
            public string secno { get; set; }
            public string pci { get; set; }
            public string tc { get; set; }
            public string tt { get; set; }
            //public string rt { get; set; }            
        }
    }
}