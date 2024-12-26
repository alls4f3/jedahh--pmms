using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class SecRpt12
    {
        public List<MyRow> Report1(string Pk0)
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("SecRpt12",
                    param: new
                    {
                        k0 = Pk0,
                        
                    },
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {

            public string rno { get; set; }
            public string secno { get; set; }
            public string dir { get; set; }
            public string ftr { get; set; }
            public string pamr { get; set; }
            public string paqty { get; set; }
            public string pemr { get; set; }
            public string peqty { get; set; }
            public string pwmr { get; set; }
            public string pwqty { get; set; }
            public string stamr { get; set; }
            public string staqty { get; set; }
            public string stemr { get; set; }
            public string steqty { get; set; }
            public string stwmr { get; set; }
            public string stwqty { get; set; }

        }
    }
}