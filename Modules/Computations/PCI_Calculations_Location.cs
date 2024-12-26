using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using System.Web.Mvc;
//using System.Linq;


namespace AmtarApp.Modules.Computations
{
    public class PCI_Calculations_Location
    {

        public string PCICal(string contractor_no,string zone,string area,string City)
        {
            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();

                string result = "";
                DataTable dt = new DataTable();

                connection.Execute("truncate table Pavement_Condition");
                var GetAll = cd.GetData("Select * from Section_Details where section_no in (Select Section_No from Distress_Samples where IsOld is null ) order by Section_No asc");
                dt = (DataTable)GetAll;


                if (dt.Rows.Count > 0)
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        string[] DistressArray = new string[20];
                        string Dststr = "";
                        double Average_PCI = 0;
                        string Current_Rating = "";
                        double Sum_PCI = 0;
                        int Count_ = 0;
                      
                        DataTable dt1 = new DataTable();
                        var GetAll1 = cd.GetData("SELECT * FROM Distress_Samples c1 WHERE SAMPLE_NO = (SELECT MAX(SAMPLE_NO) FROM Distress_Samples c2 where c2.Section_No=c1.Section_No  and Sample_PCI is not null) and c1.Section_No= '" + dt.Rows[i]["Section_No"].ToString() + "'");
                        dt1 = (DataTable)GetAll1;
                       
                        ////fill array
                        if (dt1.Rows.Count > 0)
                        {
                            //////////////
                            for (int j = 0; j < dt1.Rows.Count; j++)
                            {
                                Count_++;
                                if (dt1.Rows[j]["Sample_PCI"].ToString() != "")
                                {
                                    Sum_PCI = Sum_PCI + double.Parse(dt1.Rows[j]["Sample_PCI"].ToString());
                                }
                            }
                            //////////////

                            for (int ardis = 0; ardis < 20; ardis++)
                            {

                                if (dt1.Rows[0]["DISTRESS_" + ardis].ToString() != "")
                                {
                                    // DistressArray[ardis]
                                    Dststr = Dststr + dt1.Rows[0]["DISTRESS_" + ardis].ToString() + " ";
                                }

                            }
                        }
                        else
                        {
                           
                        }
                       
                        try
                        {
                            Average_PCI = Sum_PCI / Count_;
                            if (Average_PCI <= 9)
                            {
                                Current_Rating = "Failed";
                            }
                            else if (Average_PCI > 9 && Average_PCI <= 24)
                            {
                                Current_Rating = "Very Poor";
                            }
                            else if (Average_PCI > 24 && Average_PCI <= 39)
                            {
                                Current_Rating = "Poor";
                            }
                            else if (Average_PCI > 39 && Average_PCI <= 54)
                            {
                                Current_Rating = "Fair";
                            }
                            else if (Average_PCI > 54 && Average_PCI <= 69)
                            {
                                Current_Rating = "Good";
                            }
                            else if (Average_PCI > 69 && Average_PCI <= 84)
                            {
                                Current_Rating = "Very Good";
                            }
                            else if (Average_PCI > 84 && Average_PCI <= 100)
                            {
                                Current_Rating = "Excellent";
                            }


                           

                            /* Call Distress_Catenate(Distress_Array, k, Dststr)*/
                            var GetAll3 = cd.GetData("Select * from Pavement_Condition Where Section_No = '" + dt.Rows[i]["Section_No"].ToString() + "'");
                            ///exec sql2
                            Average_PCI = Math.Round(Average_PCI);
                            DataTable dt3 = new DataTable();
                            dt3 = (DataTable)GetAll3;
                            if (dt3.Rows.Count > 0)
                            {

                                int Sql_temp = connection.Execute("Update Pavement_Condition Set Section_PCI= Null, Distress_Summary= Null, Section_Rating= Null, Maintenance_Cost = NULL, Maintenance_Priority = Null," +
                                    "Distress_Condition_Before = Null, Distress_Condition_After = Null,Special_Treatment_Cost = Null, Special_Treatment_Type = Null,Special_Treatment_Description = Null WHERE Section_No ='" + dt.Rows[i]["Section_No"].ToString() + "'");
                                ///exec sql_temp
                                int Sql_temp3 = connection.Execute("Update Pavement_Condition  Set Section_PCI ='" + Average_PCI + "', Distress_Summary = '" + Dststr + "', Section_Rating ='" + Current_Rating + "' Where Section_No = '" + dt.Rows[i]["Section_No"].ToString() + "'");
                                result = "pci calculate success";
                                ///exec sql_temp3

                            }
                            else
                            {
                                ///insert row
                                int Sql_temp_insert = connection.Execute("Insert into Pavement_Condition  (Section_No, Section_PCI,Distress_Summary,  Section_Rating) Values('" + dt.Rows[i]["Section_No"].ToString() + "'," + Average_PCI + ",'" + Dststr + "','" + Current_Rating + "' )");
                                result = "pci calculate success";
                            }
                        }
                        catch (Exception ex)
                        {

                        }
                      


                    }
                }
                else
                {
                    result = "there aren't any data";
                }

                return result;
            }
            catch (Exception ex)
            {
                return "there are problem : " + ex.Message;
            }
        }

        public string Calculate_MR(string Severity_Value,string MR_Value)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
            string selmr = "";
            /////////////////////////////////
            string sql = "Select * from Maintenance_Selection Where Maintenance_Selection_No = '" + MR_Value + "'";
            ////exec sql
            DataTable dt = cd.GetData(sql);// new DataTable();
            if (dt.Rows.Count>0)
            {
                if (Severity_Value== "LL")
                {
                    selmr = dt.Rows[0]["Low_Low"].ToString();
                }
                else if (Severity_Value == "LM")
                {
                    selmr = dt.Rows[0]["Low_Medium"].ToString();
                }
                else if (Severity_Value == "LH")
                {
                    selmr = dt.Rows[0]["Low_High"].ToString();
                }
                else if (Severity_Value == "ML")
                {
                    selmr = dt.Rows[0]["Medium_Low"].ToString();
                }
                else if (Severity_Value == "MM")
                {
                    selmr = dt.Rows[0]["Medium_Medium"].ToString();
                }

                else if (Severity_Value == "MH")
                {
                    selmr = dt.Rows[0]["Medium_High"].ToString();
                }
                else if (Severity_Value == "HL")
                {
                    selmr = dt.Rows[0]["High_Low"].ToString();
                }
                else if (Severity_Value == "HM")
                {
                    selmr = dt.Rows[0]["High_Medium"].ToString();
                }
                else if (Severity_Value == "HH")
                {
                    selmr = dt.Rows[0]["High_High"].ToString();
                }
                else if (Severity_Value == "LV")
                {
                    selmr = dt.Rows[0]["Low_Very_High"].ToString();
                }
                else if (Severity_Value == "MV")
                {
                    selmr = dt.Rows[0]["Medium_Very_High"].ToString();
                }
                else if (Severity_Value == "HV")
                {
                    selmr = dt.Rows[0]["High_Very_High"].ToString();
                }
            }


            //  If Current_RSM1.RecordCount > 0 Then
            //   Select Case Severity_Value
            //     Case "LL"
            //         selmr = Current_RSM1![Low_Low]
            //     Case "LM"
            //         selmr = Current_RSM1![Low_Medium]
            //     Case "LH"
            //         selmr = Current_RSM1![Low_High]
            //     Case "ML"
            //         selmr = Current_RSM1![Medium_Low]
            //     Case "MM"
            //         selmr = Current_RSM1![Medium_Medium]
            //     Case "MH"
            //         selmr = Current_RSM1![Medium_High]
            //     Case "HL"
            //         selmr = Current_RSM1![High_Low]
            //     Case "HM"
            //         selmr = Current_RSM1![High_Medium]
            //     Case "HH"
            //         selmr = Current_RSM1![High_High]
            //     Case "LV"
            //         selmr = Current_RSM1![Low_Very_High]
            //     Case "MV"
            //         selmr = Current_RSM1![Medium_Very_High]
            //     Case "HV"
            //         selmr = Current_RSM1![High_Very_High]
            //    End Select
            //  Else
            //     MsgBox "M/R Selection Matrix Not Entered Correctly !"
            //  End If
            //  Calculate_MR = selmr
            //  DAL.RecordSet_Close(RsIdx)

            //  GoTo sub_quit
            //Sub_Error:
            //            MsgBox "Report System Error - " & Err.number & ": " & Err.Description & " in Location MenuForm_38"
            //sub_quit:

            //            End Function

            ////////////////////////////////////
            return selmr;
        }

        public string Distress_Catenate(string[] Distress_Array,int k,string Dststr)
        {
            //string Dststr = "";
            int[] Temp_Sort_Array = new int[21];
            // 'on error GoTo Sub_Error

           int j = -1;
            for (int M = 0; M <= k; M++)
            {
               int ina = 0;
                for (var n = 0; n <= j; n++)
                {
                    if (Temp_Sort_Array[n].ToString() == Distress_Array[M])
                        ina = 1;
                }
                if (ina == 0)
                {
                    j = j + 1;
                    Temp_Sort_Array[j] =int.Parse( Distress_Array[M]);
                }
            }

            for (int M = 0; M <= j - 1; M++)
            {
                for (var n = M + 1; n <= j; n++)
                {
                    if (Temp_Sort_Array[M] > Temp_Sort_Array[n])
                    {
                       int T = Temp_Sort_Array[M];
                        Temp_Sort_Array[M] = Temp_Sort_Array[n];
                        Temp_Sort_Array[n] = T;
                    }
                }
            }

            Dststr = "";
            for (int M = 0; M <= j; M++)
            {
                if (Temp_Sort_Array[M] > 0 & Temp_Sort_Array[M] <= 9)
                    Dststr = Dststr + "0" + (string)Temp_Sort_Array[M].ToString() + "  ";
                else
                    Dststr = Dststr + (string)Temp_Sort_Array[M].ToString() + "  ";
            }

            return Dststr;
        }
    }
}