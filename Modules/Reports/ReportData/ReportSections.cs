﻿using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class ReportSections
    {
        public List<MyRow> Report1(string Pk0, string Pk1, string Pk2)
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("RPTTEST",
                    param: new
                    {
                        k0 = "001",
                        k1 = Pk1,
                        k2 = Pk2,
                    },
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {

            public string rno { get; set; }
            public string rna { get; set; }
            public string rcl { get; set; }
            public string secno { get; set; }
            public string dir { get; set; }
            public string ftr { get; set; }
            public string lgt { get; set; }
            public string wdt { get; set; }
            public string area { get; set; }
            public string adt { get; set; }
            public string tp { get; set; }
         
        }
    }
}