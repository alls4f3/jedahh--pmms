using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class SecRpt7
    {
        public List<MyRow> Report1(string Pk0, string Pk1, string Pk2)
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("SecRpt7",
                    param: new
                    {
                        k0 = Pk0,
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
            public string bmrt { get; set; }
            public string bmrc { get; set; }
            public string sls { get; set; }
            public string area { get; set; }
            public string sns { get; set; }
            public string bcp { get; set; }
            public string bpp { get; set; }

            public string city { get; set; }
            public string zone { get; set; }
            public string area1 { get; set; }
            public string CITY_NAME { get; set; }
            public string AREA_NAME { get; set; }

        }
    }
}