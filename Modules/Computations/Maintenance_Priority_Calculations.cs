using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Computations
{
    public class Maintenance_Priority_Calculations
    {
        public string Maintenance_Priority_Cal(string contractor_no, string zone, string area, string City, int Prediction_Year1, int Prediction_Month1)
        {
            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
                //////////
                int RsIdx = 0;

                if (City != "0" && area != "0" && zone != "0" && contractor_no != "0")
                {
                    if (contractor_no != "")
                    {
                        if (contractor_no.Length == 1)
                        {
                            contractor_no = "0" + contractor_no;
                        }
                        DataTable DTsql11 = new DataTable();
                        //var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");
                        DTsql11 = cd.GetData("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");
                    }

                    if (City != "" && zone != "" && area == "")
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;
                        }
                        int Sql_temp = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Average_Daily_Traffic) From Section_Details where substring(section_no,1,4) like '" + City + zone + "%') Where Maintenance_Factor_No='OpTr' ");
                        int Sql_temp2 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Maintenance_Cost) From Pavement_Condition where  substring(section_no,1,4) like '" + City + zone + "%') Where Maintenance_Factor_No='MnCt'");
                    }
                    else
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;

                        }
                        if (zone.Length == 1)
                        {
                            zone = "00" + zone;
                        }
                        if (zone.Length == 2)
                        {
                            zone = "0" + zone;
                        }
                    }
                    DataTable dt = new DataTable();
                    if (contractor_no != "")
                    {
                        int Sql_temp2 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Average_Daily_Traffic) From Section_Details) Where Maintenance_Factor_No='OpTr' ");
                        int Sql_temp12 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Maintenance_Cost) From Pavement_Condition) Where Maintenance_Factor_No='MnCt'");

                        var sql = cd.GetData("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");
                        dt = (DataTable)sql;
                    }
                    else if (City != "" && zone == "" && area == "")
                    {
                        int Sql_temp2 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Average_Daily_Traffic) From Section_Details where  substring(section_no,1,2) like '" + City + "%') Where Maintenance_Factor_No='OpTr' ");
                        int Sql_temp12 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Maintenance_Cost) From Pavement_Condition where substring(section_no,1,2) like '" + City + "%') Where Maintenance_Factor_No='MnCt' ");

                        var sql = cd.GetData("Select * from Section_Details where substr(section_no,1,2)= '" + City + "' order by Section_No asc");
                        dt = (DataTable)sql;
                    }
                    else if (City != "" && zone != "" && area == "")
                    {
                        if (zone.Length == 1)
                        {
                            zone = "0" + zone;
                        }
                        int Sql_temp2 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Average_Daily_Traffic) From Section_Details where substring(section_no,1,4) like '" + City + zone + "%') Where Maintenance_Factor_No='OpTr'");
                        int Sql_temp12 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Maintenance_Cost) From Pavement_Condition where substr(section_no,1,4) like '" + City + zone + "%') Where Maintenance_Factor_No='MnCt'");

                        var sql = cd.GetData("Select * from Section_Details where substring(section_no,1,4)= '" + City + zone + "' order by Section_No asc");
                        dt = (DataTable)sql;
                    }
                    else if (City != "" && zone != "" && area != "")
                    {
                        if (zone.Length == 1)
                        {
                            zone = "0" + zone;
                        }
                        if (area.Length == 1)
                        {
                            area = "00" + area;
                        }
                        else if (area.Length == 2)
                        {
                            area = "0" + area;
                        }
                        int Sql_temp2 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Average_Daily_Traffic) From Section_Details) Where Maintenance_Factor_No='OpTr'");
                        int Sql_temp12 = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value = (Select Max(Maintenance_Cost) From Pavement_Condition) Where Maintenance_Factor_No='MnCt'");

                        var sql = cd.GetData("Select * from Section_Details where substring(section_no,1,7)= '" + City + zone + area + "' order by Section_No asc");
                        dt = (DataTable)sql;
                    }
                    //If Not NoMsg Then
                    // If MsgBox("Starting M&R Priority Calculations. This process takes several minutes!", 36, Me.Caption) = 7 Then
                    //   GoTo sub_quit
                    // End If
                    //End If

                    var sqlFacT = cd.GetData("Select * from Maintenance_Factors where Maintenance_Factor_No='OpTr'");
                    DataTable DTsqlFacT = (DataTable)sqlFacT;
                    double Maximum_Operating_Traffic = double.Parse(DTsqlFacT.Rows[0]["Maintenance_Factor_Value"].ToString());


                    var FacC = cd.GetData("Select * from Maintenance_Factors where Maintenance_Factor_No='MnCt'");
                    DataTable DTsqlFacC = (DataTable)FacC; //(DataTable)sqlFacT;
                    double Maximum_Cost = double.Parse(DTsqlFacC.Rows[0]["Maintenance_Factor_Value"].ToString());// double.Parse(DTsqlFacT.Rows[0]["Maintenance_Factor_Value"].ToString());

                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        i = 5;///////////////////////////////////////////////////////test

                        string Current_Section_No1 = dt.Rows[i]["section_no"].ToString();

                        var sql = cd.GetData("Select * from Pavement_Condition where Section_No = '" + Current_Section_No1 + "'");
                        DataTable dtPC = (DataTable)sql;

                        long xpb1 = 0;
                        long xpb2 = 0;
                        long xpb3 = 0;
                        long xpb4 = 0;
                        DateTime xpb5;
                        DateTime xpb6;
                        string Current_Special_Treatment_Type = "";
                        var sqlSD = cd.GetData("Select * from Section_Details  where Section_No = '" + Current_Section_No1 + "'");
                        DataTable DTsqlSD = (DataTable)sqlSD;
                        double Maintenance_Priority_Value = 0;
                        if (dtPC.Rows[0]["Special_Treatment_Type"].ToString() != "")
                        {
                            Current_Special_Treatment_Type = Two_Digit(dtPC.Rows[0]["Special_Treatment_Type"].ToString());
                            if (dtPC.Rows[0]["Special_Treatment_Type"].ToString() == "01"
                                || dtPC.Rows[0]["Special_Treatment_Type"].ToString() == "02"
                                || dtPC.Rows[0]["Special_Treatment_Type"].ToString() == "03"
                                || dtPC.Rows[0]["Special_Treatment_Type"].ToString() == "04")
                            {
                                //PrtLst1.AddItem " Cannot Compute Maintenance Priority - Special Treatment Required"
                                Maintenance_Priority_Value = -1;
                                ///GoTo doneprt
                                var sql1Pc = cd.GetData("Select * from Pavement_Condition Where Section_No = '" + Current_Section_No1 + "'");
                                DataTable dtsql1Pc = (DataTable)sql1Pc;
                                double Current_Maintenance_Priority = 0;
                                if (dtsql1Pc.Rows.Count > 0)
                                {
                                    Current_Maintenance_Priority = Math.Round(Maintenance_Priority_Value, 2);
                                    int Sql_temp = connection.Execute("Update Pavement_Condition Set Maintenance_Priority =" + Current_Maintenance_Priority + " WHERE Section_No ='" + Current_Section_No1 + "'");

                                }
                                else
                                {
                                    double Current_Maintenance_Cost = 0;
                                    if (dtsql1Pc.Rows[0]["maintenance_cost"].ToString() != "")
                                    {
                                        //Current_Maintenance_Priority = Math.Round(Maintenance_Priority_Value, 2);
                                        Current_Maintenance_Cost = Math.Round(double.Parse(dtsql1Pc.Rows[0]["maintenance_cost"].ToString()), 2);

                                    }
                                    Current_Maintenance_Priority = Math.Round(Maintenance_Priority_Value, 2);

                                    int Sql_tempPc = connection.Execute("Insert into Pavement_Condition  (SECTION_NO,Maintenance_Cost, Maintenance_Priority) Values ('" + Current_Section_No1 + "','" + Current_Maintenance_Cost + "," + Current_Maintenance_Priority + ")");
                                }






                            }
                        }

                        DataTable dt_Maintenance_Fact = new DataTable();
                        string road_class = dt.Rows[i]["road_class"].ToString();
                        double Road_Class_Value = 0;
                        if (road_class == "1")
                        {
                            var sql11 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = 'R1'");
                            dt_Maintenance_Fact = (DataTable)sql11;
                        }
                        else if (road_class == "2")
                        {
                            var sql11 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = 'R2'");
                            dt_Maintenance_Fact = (DataTable)sql11;
                        }
                        else if (road_class == "3")
                        {
                            var sql11 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = 'R3'");
                            dt_Maintenance_Fact = (DataTable)sql11;
                        }
                        else if (road_class == "4")
                        {
                            var sql11 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = 'R4'");
                            dt_Maintenance_Fact = (DataTable)sql11;
                        }
                        else if (road_class == "5")
                        {
                            var sql11 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = 'R5'");
                            dt_Maintenance_Fact = (DataTable)sql11;
                        }
                        else
                        {
                            Road_Class_Value = 0;
                        }

                        if (dt_Maintenance_Fact.Rows.Count > 0)
                        {
                            Road_Class_Value = double.Parse(dt_Maintenance_Fact.Rows[0]["Maintenance_Factor_Value"].ToString());

                        }
                        // ' computing pavement condition value for current section
                        double Pavement_Condition_Value = 0;
                        var sql1 = cd.GetData("Select * from Pavement_Condition Where Section_No = '" + Current_Section_No1 + "'");
                        DataTable dt_pc_sec = (DataTable)sql1;
                        if (dt_pc_sec.Rows.Count > 0)
                        {
                            Pavement_Condition_Value = 100 - double.Parse(dt_pc_sec.Rows[0]["Section_PCI"].ToString());
                        }
                        //' computing operating traffic value for current section
                        double Current_Operating_Traffic = 0;
                        if (double.Parse(dt.Rows[i]["Average_Daily_Traffic"].ToString()) != 0)
                        {
                            Current_Operating_Traffic = double.Parse(dt.Rows[i]["Average_Daily_Traffic"].ToString());
                        }
                        double Operating_Traffic_Value = 0;
                        if (Maximum_Operating_Traffic != 0)
                        {
                            Operating_Traffic_Value = 100 * Current_Operating_Traffic / Maximum_Operating_Traffic;
                        }
                        // ' computing maintenance cost value for current section

                        double Maintenance_Cost_Value = 0;
                        double Total_Cost = double.Parse(dt_pc_sec.Rows[0]["maintenance_cost"].ToString());
                        if (Maximum_Cost != 0)
                        {
                            Maintenance_Cost_Value = 100 * (1 - Total_Cost / Maximum_Cost);
                        }
                        // ' computing importance to community factor value for current section
                        double Importance_To_Community_Value = 0;
                        string Current_MR_Section_No = "";
                        for (int jj = 1; jj < 6; jj++)
                        {
                            Current_MR_Section_No = "I" + jj;
                            var sqljj = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No + "'");
                            DataTable dt_sqljj = (DataTable)sqljj;

                            if (jj == 1)
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * Road_Class_Value;
                            }
                            if (jj == 2 && dt.Rows[i]["Is_Passing_Thro_CBD"].ToString() == "Y")
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * 100;
                            }
                            if (jj == 3 && dt.Rows[i]["Is_Used_By_VIP"].ToString() == "Y")//
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * 100;
                            }
                            if (jj == 4)
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * Operating_Traffic_Value;
                            }
                            if (jj == 5 && dt.Rows[i]["Has_Alternate_Road"].ToString() == "N")
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * 100;
                            }
                            if (jj == 6 && dt.Rows[i]["Is_Near_Off_Public_Build"].ToString() == "Y")
                            {
                                Importance_To_Community_Value = Importance_To_Community_Value + double.Parse(dt_sqljj.Rows[0]["Maintenance_Factor_Value"].ToString()) * 100;
                            }
                        }
                        /// ' computing maintenance priority factor value for current section

                        // double Maintenance_Priority_Value = 0;
                        for (int jjP = 1; jjP <= 7; jjP++)
                        {
                            Current_MR_Section_No = "M" + jjP;
                            var sqljjp = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No + "'");
                            DataTable dtsqljjp = (DataTable)sqljjp;
                            if (dtsqljjp.Rows.Count > 0)
                            {


                                if (jjP == 1)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * Road_Class_Value;
                                }
                                if (jjP == 2)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * Pavement_Condition_Value;
                                }
                                if (jjP == 3)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * Operating_Traffic_Value;
                                }
                                if (jjP == 4)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * double.Parse(dtPC.Rows[0]["Riding_Quality_Value"].ToString()); ///double.Parse(dtsqljjp.Rows[0]["Riding_Quality_Value"].ToString());///dtPC
                                }
                                if (jjP == 5)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * double.Parse(dtPC.Rows[0]["Safety_Condition_Value"].ToString()); //double.Parse(dtsqljjp.Rows[0]["Safety_Condition_Value"].ToString());
                                }
                                if (jjP == 6)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * Maintenance_Cost_Value;
                                }
                                if (jjP == 7)
                                {
                                    Maintenance_Priority_Value = Maintenance_Priority_Value + double.Parse(dtsqljjp.Rows[0]["Maintenance_Factor_Value"].ToString()) * Importance_To_Community_Value;
                                }
                            }
                            else
                            {
                                return " Database Entry Missing From Maintenance_Factors !";
                            }

                        }
                        ///////update
                        int Sql_tempSew = connection.Execute("Update Pavement_Condition Set MAINTENANCE_PRIORITY='" + Maintenance_Priority_Value + "' where SECTION_NO='" + Current_Section_No1 + "'");
                        ///end update

                        //////end for//////
                    }



                }
                else
                {
                    return "choose city/area/zone or contractor";
                }

                return "success finish calculation";
            }
            catch (Exception ex)
            {
                return "there are problem : " + ex.Message;
            }
        }

      public string Two_Digit(string str) {
            
                if (str.Length == 1)
                    str = "0" + str;
                else
                    str = str;

            return str;
            }
    }
}