using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Computations
{
    public class Survey_Planning_Calculations
    {

        public string Survey_Planning_Cal(string contractor_no, string zone, string area, string City)
        {
            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
                DataTable DTsql11 = new DataTable();
                //////////////////////////
                int[] Year_Limit1 = new int[7];
                if ((City != "0" && area != "0" && zone != "0") || contractor_no != "0")
                {
                    if (contractor_no != "")
                    {
                        if (contractor_no.Length == 1)
                        {
                            contractor_no = "0" + contractor_no;
                        }

                        var GetAll = cd.GetData("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");
                        DTsql11 = (DataTable)GetAll;
                    }
                    else if (City != "" && zone == "" && area == "")
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;
                        }
                        var GetAll = cd.GetData("Select * from Section_Details where substring(section_no,1,2)= '" + City + "' order by Section_No asc");
                        DTsql11 = (DataTable)GetAll;
                    }
                    else if (City != "" && zone != "" && area == "")
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;
                        }
                        if (zone.Length == 1)
                        {
                            zone = "0" + zone;

                        }

                        var GetAll = cd.GetData("Select * from Section_Details where substring(section_no,1,4)= '" + City + area + "' order by Section_No asc");
                        DTsql11 = (DataTable)GetAll;
                    }
                    else if (City != "" && zone != "" && area != "")
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;
                        }
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
                        var GetAll = cd.GetData("Select * from Section_Details where substring(section_no,1,7)= '" + City + zone + area + "' order by Section_No asc");
                        ////exec sql11
                        DTsql11 = (DataTable)GetAll;
                    }

                    //DataTable DTsql11 = new DataTable();
                    for (int i = 0; i < DTsql11.Rows.Count; i++)
                    {
                        ////Mintanance factor
                        ///'DAL.Execute_SQL ("Truncate Table Pavement_Prediction")
                        var GetFact = cd.GetData("Select * from Maintenance_Factors");
                        ///exec sqlfact
                        DataTable DTsqlFact = (DataTable)GetFact;// new DataTable();
                        for (int j1 = 0; j1 < DTsqlFact.Rows.Count; j1++)
                        {
                            if (DTsqlFact.Rows[j1]["Maintenance_Factor_No"].ToString() == "P1")
                            {
                                Year_Limit1[1] = int.Parse(DTsqlFact.Rows[j1]["Maintenance_Factor_Value"].ToString());///
                            }
                            if (DTsqlFact.Rows[j1]["Maintenance_Factor_No"].ToString() == "P2")
                            {
                                Year_Limit1[2] = int.Parse(DTsqlFact.Rows[j1]["Maintenance_Factor_Value"].ToString());///
                            }
                            if (DTsqlFact.Rows[j1]["Maintenance_Factor_No"].ToString() == "P3")
                            {
                                Year_Limit1[3] = int.Parse(DTsqlFact.Rows[j1]["Maintenance_Factor_Value"].ToString());///
                            }
                            if (DTsqlFact.Rows[j1]["Maintenance_Factor_No"].ToString() == "P4")
                            {
                                Year_Limit1[4] = int.Parse(DTsqlFact.Rows[j1]["Maintenance_Factor_Value"].ToString());///
                            }


                        }
                        //cyear = Year(Date)
                        string Current_Section_No1 = DTsql11.Rows[i]["section_no"].ToString();
                        string Current_Road_Class1 = DTsql11.Rows[i]["road_class"].ToString();
                        int Next_Survey_Year1 = 0;
                        ////section details
                        var GetDetails = cd.GetData("Select * from Section_Details  where Section_No = '" + Current_Section_No1 + "'");
                        ///exec sqldetails
                        DataTable DTsqlDetails = (DataTable)GetDetails;
                        string Previous_Survey_Year = DTsqlDetails.Rows[0]["survey_date"].ToString();

                        if (Current_Road_Class1 == "1")
                        {
                            Next_Survey_Year1 = int.Parse(DateTime.Parse(Previous_Survey_Year).Year.ToString()) + Year_Limit1[1];
                        }
                        else if (Current_Road_Class1 == "2")
                        {
                            Next_Survey_Year1 = int.Parse(DateTime.Parse(Previous_Survey_Year).Year.ToString()) + Year_Limit1[2];
                        }
                        else if (Current_Road_Class1 == "3")
                        {
                            Next_Survey_Year1 = int.Parse(DateTime.Parse(Previous_Survey_Year).Year.ToString()) + Year_Limit1[3];
                        }
                        else if (Current_Road_Class1 == "4")
                        {
                            Next_Survey_Year1 = int.Parse(DateTime.Parse(Previous_Survey_Year).Year.ToString()) + Year_Limit1[4];
                        }
                        else if (Current_Road_Class1 == "5")
                        {
                            Next_Survey_Year1 = int.Parse(DateTime.Parse(Previous_Survey_Year).Year.ToString()) + Year_Limit1[5];
                        }


                        int Sql_temp_insert = connection.Execute("Insert into Pavement_Prediction  (SECTION_NO,Previous_Survey_Year, Next_Survey_Year, Road_Class)Values('" + Current_Section_No1 + "'," + DateTime.Parse(Previous_Survey_Year).Year.ToString() + "," + Next_Survey_Year1 + "," + Current_Road_Class1 + ")");
                        ///exec sql_temp

                        ///end

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
    }
}