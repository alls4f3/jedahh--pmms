using AmtarApp.Modules.Common.Helpers;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Reports.ReportData
{
    public class SecRpt9
    {
        public List<MyRow> Report1()
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.AreasRow>())
            {

                return connection.Query<MyRow>("SecRpt9",
                    //param: new
                    //{
                    //    k0 = Pk0,
                    //    k1 = Pk1,
                    //    k2 = Pk2,
                    //},
                    commandType: System.Data.CommandType.StoredProcedure).ToList();


            }



        }


        public class MyRow
        {

            public string ano { get; set; }
            public string ana { get; set; }
            public string nr { get; set; }
            public string nse { get; set; }
            public string ase { get; set; }
            public string nsa { get; set; }
            public string asa { get; set; }
            public string pci { get; set; }
            public string rt { get; set; }
           

            //public string city { get; set; }
            //public string zone { get; set; }
            //public string area1 { get; set; }
            //public string CITY_NAME { get; set; }
            //public string AREA_NAME { get; set; }

        }
    }
}