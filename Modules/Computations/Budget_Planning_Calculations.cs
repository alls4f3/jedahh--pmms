using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AmtarApp.Modules.Computations
{
    public class Budget_Planning_Calculations
    {
        public string Budget_Planning_Cal(string contractor_no, string zone, string area, string City,int Prediction_Year1,int Prediction_Month1)
        {
            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                //var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
                //////////////////////
                string Severity_Value = "";
                string MR_Value = "";
                double[] BP_Array1 = new double[10];
                double[] BP_Array2 = new double[13];
                double[] BP_Array3 = new double[13];
                double[] BP_Array4 = new double[13];
                string[] BP_Array5 = new string[7];
                double[] BP_Array6 = new double[7];
                double Prediction_Min1 = 0, Prediction_Max = 0;
                double Predicted_PCI = 0;
                string Current_MR_Section_No1 = "";

                DataTable DTsql11 = new DataTable();

                if ((City != "0" && area != "0" && zone != "0") || contractor_no != "0")
                {
                    if (contractor_no != "")
                    {
                        if (contractor_no.Length == 1)
                        {
                            contractor_no = "0" + contractor_no;
                        }

                        // var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");
                        DTsql11 = cd.GetData("Select * from Section_Details where contractor_no = " + contractor_no + " order by Section_No asc");                    //(DataTable)GetAll;
                    }

                    else if (City != "" && zone == "" && area == "")
                    {
                        if (City.Length == 1)
                        {
                            City = "0" + City;
                        }
                        DTsql11 = cd.GetData("Select * from Section_Details where substring(section_no,1,2)= '" + City + "' order by Section_No asc");
                        // DTsql11 = (DataTable)GetAll;

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

                        DTsql11 = cd.GetData("Select * from Section_Details where substring(section_no,1,4)= '" + City + zone + "' order by Section_No asc");
                        // DTsql11 = (DataTable)GetAll;

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
                        DTsql11 = cd.GetData("Select * from Section_Details where substring(section_no,1,7)= '" + City + zone + area + "' order by Section_No asc");
                        //DTsql11 = (DataTable)GetAll;
                    }
                    ////exec sql11
                    // DataTable DTsql11 = new DataTable();
                    for (int i = 0; i < DTsql11.Rows.Count; i++)
                    {
                        //i = 2;///////test
                        if ((Prediction_Year1 > 1900 && Prediction_Year1 < 2100) || (Prediction_Month1 >= 1 && Prediction_Month1 <= 12))
                        {
                            /////////
                            for (int k1 = 1; k1 < 9; k1++)
                            {
                                Current_MR_Section_No1 = "BR" + k1;
                                var GetFact = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact = (DataTable)GetFact;
                                BP_Array1[k1] = double.Parse(DTsqlfact.Rows[0]["Maintenance_Factor_Value"].ToString());
                            }
                            for (int k1 = 1; k1 <= 6; k1++)
                            {
                                Current_MR_Section_No1 = "BC" + k1;
                                var GetFact = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact = (DataTable)GetFact;
                                BP_Array6[k1] = double.Parse(DTsqlfact.Rows[0]["Maintenance_Factor_Value"].ToString());

                                Current_MR_Section_No1 = "BT" + k1;
                                var Getfact2 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact2 = (DataTable)Getfact2;
                                BP_Array5[k1] = DTsqlfact2.Rows[0]["Maintenance_Factor_Value"].ToString();// double.Parse(DTsqlfact2.Rows[0]["Maintenance_Factor_Value"].ToString());

                            }

                            for (int k1 = 1; k1 <= 12; k1++)
                            {
                                Current_MR_Section_No1 = "BM" + k1;
                                var GetFact = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact = (DataTable)GetFact;
                                BP_Array3[k1] = double.Parse(DTsqlfact.Rows[0]["Maintenance_Factor_Value"].ToString());

                                Current_MR_Section_No1 = "BL" + k1;
                                var GetFact2 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact2 = (DataTable)GetFact2;
                                BP_Array2[k1] = double.Parse(DTsqlfact2.Rows[0]["Maintenance_Factor_Value"].ToString());

                                Current_MR_Section_No1 = "BS" + k1;
                                var GetFact3 = cd.GetData("Select * from Maintenance_Factors Where Maintenance_Factor_No = '" + Current_MR_Section_No1 + "'");
                                ////exec sqlfact
                                DataTable DTsqlfact3 = (DataTable)GetFact3;
                                BP_Array4[k1] = double.Parse(DTsqlfact2.Rows[0]["Maintenance_Factor_Value"].ToString());
                            }
                            string Current_Section_No1 = DTsql11.Rows[i]["section_no"].ToString();
                            string Current_Section_Area1 = DTsql11.Rows[i]["section_area"].ToString();
                            string road_class1 = DTsql11.Rows[i]["road_class"].ToString();
                            string Current_Year = DTsql11.Rows[i]["survey_date"].ToString();

                            double a = 0;
                            double b = 0;
                            double c = 0;

                            //test//  int Sql_temp3UP = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = NULL, Predicted_Distress_Type = Null,Predicted_Maintenance_Cost = Null, Predicted_Year = Null, Predicted_Month = Null Where Section_No ='" + Current_Section_No1 + "'");

                            ////exec sqlup
                            var GetAllT = cd.GetData("Select * from Pavement_Condition where Section_No like '" + Current_Section_No1 + "'");
                            ///EXEC sql                   
                            DataTable DTsqlT = (DataTable)GetAllT;
                            double Section_PCI = double.Parse(DTsqlT.Rows[0]["Section_PCI"].ToString());////Section_PCI
                            if (DTsqlT.Rows.Count > 0)
                            {
                                if (road_class1 == "1" || road_class1 == "2")
                                {
                                    a = BP_Array1[1];
                                    b = BP_Array1[2];
                                    c = BP_Array1[3];

                                }
                                else if (road_class1 == "3")
                                {
                                    a = BP_Array1[4];
                                    b = BP_Array1[5];
                                    c = BP_Array1[6];
                                }
                                else
                                {
                                    a = BP_Array1[7];
                                    b = BP_Array1[8];
                                    c = BP_Array1[9];

                                }

                                double xx = Math.Pow(a, 2);
                                double yy = Math.Pow(6, 0.5);
                                double zz = 4 * b * (100 - Section_PCI);
                                double vv = xx - zz;
                                double ww = Math.Pow(vv, 0.5);
                                double ff = -a - ww;
                                double tt = 2 * b;
                                //double Current_Temp1 = (-a - (a ^ 2 - 4 * b * (100 - Section_PCI)) ^ 0.5) / (2 * b);
                                double Current_Temp1 = (-a - Math.Pow((Math.Pow(a, 2) - 4 * b * (100 - Section_PCI)), 0.5)) / (double)(2 * b);
                                double Current_Temp2 = Current_Temp1 + Prediction_Year1 - double.Parse(DateTime.Parse(Current_Year).Year.ToString());
                                double Predicted_PCI1 = a * Current_Temp2 + b * Math.Pow(Current_Temp2, 2) + 100;
                                if (Predicted_PCI1 < 0)
                                {
                                    Predicted_PCI1 = 0;
                                }
                                if (road_class1 == "1" || road_class1 == "2")
                                {
                                    Prediction_Min1 = BP_Array3[1];
                                    Prediction_Max = BP_Array3[2];

                                    /// }
                                    if (Predicted_PCI1 <= Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[1];
                                        string Predicted_Distress_Type = BP_Array5[1];


                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }

                                    Prediction_Min1 = BP_Array3[3];
                                    Prediction_Max = BP_Array3[4];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[2];
                                        string Predicted_Distress_Type = BP_Array5[2];
                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array3[5];
                                    Prediction_Max = BP_Array3[6];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[3];
                                        string Predicted_Distress_Type = BP_Array5[3];
                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array3[7];
                                    Prediction_Max = BP_Array3[8];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[4];
                                        string Predicted_Distress_Type = BP_Array5[4];
                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array3[9];
                                    Prediction_Max = BP_Array3[10];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[5];
                                        string Predicted_Distress_Type = BP_Array5[5];
                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array3[11];
                                    Prediction_Max = BP_Array3[12];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost1 = BP_Array6[6];
                                        string Predicted_Distress_Type = BP_Array5[6];
                                        double Current_Predicted_Maintenance_Cost = pcost1 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }

                                    double pcost2 = BP_Array6[1];
                                    string Predicted_Distress_Type1 = BP_Array5[1];
                                }
                                else if (road_class1 == "C")
                                {
                                    Prediction_Min1 = BP_Array2[1];
                                    Prediction_Max = BP_Array2[2];
                                    ///}
                                    if (Predicted_PCI1 <= Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[1];
                                        string Predicted_Distress_Type1 = BP_Array5[1];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array2[3];
                                    Prediction_Max = BP_Array2[4];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[2];
                                        string Predicted_Distress_Type1 = BP_Array5[2];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array2[5];
                                    Prediction_Max = BP_Array2[6];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[3];
                                        string Predicted_Distress_Type1 = BP_Array5[3];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }

                                    Prediction_Min1 = BP_Array2[7];
                                    Prediction_Max = BP_Array2[8];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[4];
                                        string Predicted_Distress_Type1 = BP_Array5[4];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array2[9];
                                    Prediction_Max = BP_Array2[10];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[5];
                                        string Predicted_Distress_Type1 = BP_Array5[5];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }

                                    Prediction_Min1 = BP_Array2[11];
                                    Prediction_Max = BP_Array2[12];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        double pcost2 = BP_Array6[6];
                                        string Predicted_Distress_Type1 = BP_Array5[6];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    // double pcost2 = BP_Array6[1];
                                    // string Predicted_Distress_Type1 = BP_Array5[1];
                                }
                                else
                                {

                                    Prediction_Min1 = BP_Array4[1];
                                    Prediction_Max = BP_Array4[2];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        //double  pcost2 = BP_Array6[1];
                                        // string Predicted_Distress_Type1 = BP_Array5[1];
                                        double pcost2 = BP_Array6[0];
                                        string Predicted_Distress_Type1 = BP_Array5[0];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array4[3];
                                    Prediction_Max = BP_Array4[4];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        // double pcost2 = BP_Array6[2];
                                        //string  Predicted_Distress_Type1 = BP_Array5[2];
                                        double pcost2 = BP_Array6[1];
                                        string Predicted_Distress_Type1 = BP_Array5[1];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array4[5];
                                    Prediction_Max = BP_Array4[6];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        //double pcost2 = BP_Array6[3];
                                        //string Predicted_Distress_Type1 = BP_Array5[3];
                                        double pcost2 = BP_Array6[2];
                                        string Predicted_Distress_Type1 = BP_Array5[2];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp3 = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array4[7];
                                    Prediction_Max = BP_Array4[8];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        //double  pcost2 = BP_Array6[4];
                                        // string Predicted_Distress_Type1 = BP_Array5[4];
                                        double pcost2 = BP_Array6[3];
                                        string Predicted_Distress_Type1 = BP_Array5[3];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array4[9];
                                    Prediction_Max = BP_Array4[10];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        //double  pcost2 = BP_Array6[5];
                                        //string  Predicted_Distress_Type1 = BP_Array5[5];
                                        double pcost2 = BP_Array6[4];
                                        string Predicted_Distress_Type1 = BP_Array5[4];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    Prediction_Min1 = BP_Array4[11];
                                    Prediction_Max = BP_Array4[12];
                                    if (Predicted_PCI1 < Prediction_Max && Predicted_PCI1 >= Prediction_Min1)
                                    {
                                        // double pcost2 = BP_Array6[6];
                                        //string  Predicted_Distress_Type1 = BP_Array5[6];
                                        double pcost2 = BP_Array6[5];
                                        string Predicted_Distress_Type1 = BP_Array5[5];
                                        double Current_Predicted_Maintenance_Cost = pcost2 * double.Parse(Current_Section_Area1);
                                        int Sql_temp = connection.Execute("Update Pavement_Prediction Set Predicted_PCI = " + Predicted_PCI1 + ", Predicted_Year =" + Prediction_Year1 + ", Predicted_Month =" + Prediction_Month1 + ", Predicted_Distress_Type ='" + Predicted_Distress_Type1 + "', Predicted_Maintenance_Cost =" + Current_Predicted_Maintenance_Cost + " WHERE Section_No ='" + Current_Section_No1 + "'");
                                        ///exec sql_temp
                                    }
                                    // pcost2 = BP_Array6[1];
                                    // Predicted_Distress_Type1 = BP_Array5[1];

                                    int Sql_tempF = connection.Execute("Update Maintenance_Factors  Set  Maintenance_Factor_Value =" + Prediction_Year1 + " Where Maintenance_Factor_No='BY'");

                                }
                                ////Exec temp
                                return "Budget Planning computations completed succesfully";
                            }
                            else
                            {
                                return "Budget Planning Computations Aborted. Please run Average PCI Calculation first.";
                            }




                        }
                        else
                        {
                            return "year or month is not correct";
                        }
                    }
                }
                else
                {

                    return "choose city/area/zone or contractor";
                }


                //            Public Sub Budget_Planning_Calculations()
                //Dim Severity_Value As String, MR_Value As String
                //Dim BP_Array1(10), BP_Array2(13), BP_Array3(13), BP_Array4(13), Prediction_Min, Prediction_Max As Double
                //Dim BP_Array5(7) As String, BP_Array6(7) As Double
                //Dim Predicted_PCI As Double

                //            Dim Current_RSM1 As ADODB.Recordset
                //Dim Current_RSM2 As ADODB.Recordset
                //Dim Current_RS1 As ADODB.Recordset
                //Dim Current_RS2 As ADODB.Recordset
                //Dim Current_RS4 As ADODB.Recordset
                //Dim Current_RSMT As ADODB.Recordset

                //''on error GoTo Err_Msg
                //If Not C_Err_Code Then

                //'DAL.Class_Initialize
                //'DataCon = DAL.Database_Is_Open
                //'If Not DataCon Then
                //'    DataCon = DAL.Database_Open(PPLOraSvc, PPLOraUser, PPLOraPwd)
                //'End If
                //Dim RsIdx As Integer
                //If SelCom(0) = 0 And SelCom(1) = 0 And SelCom(2) = 0 And SelCom(3) = 0 Then
                // MsgBox " Select City/Area/Road or Contractor for Cost Computations!"
                // C_Err_Code = True
                // kx = SendMessage(ComboComputation(0).hwnd, CB_SHOWDROPDOWN, True, 0 &)
                // GoTo sub_quit1
                //End If

                //If SelCom(3) <> 1 Then
                // k0 = ComboComputation(0).ItemData(ComboComputation(0).ListIndex)
                // If Len(k0) = 1 Then k0 = "0" & k0
                //End If
                //If SelCom(3) = 1 Then
                // kc = ComboComputation(3).ItemData(ComboComputation(3).ListIndex)
                // sql = "Select * from Section_Details where contractor_no = " & kc & " order by Section_No asc"
                // RsIdx1 = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RS1 = DAL.DataSource(RsIdx1)
                //ElseIf SelCom(0) = 1 And SelCom(1) = 0 And SelCom(2) = 0 Then
                // sql = "Select * from Section_Details where substr(section_no,1,2)= '" & k0 & "' order by Section_No asc"
                // RsIdx1 = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RS1 = DAL.DataSource(RsIdx1)
                //ElseIf SelCom(0) = 1 And SelCom(1) = 1 And SelCom(2) = 0 Then
                // k1 = ComboComputation(1).ItemData(ComboComputation(1).ListIndex)
                // If Len(k1) = 1 Then k1 = "0" & k1
                // sql = "Select * from Section_Details where substr(section_no,1,4)= '" & k0 & k1 & "' order by Section_No asc"
                // RsIdx1 = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RS1 = DAL.DataSource(RsIdx1)
                //Else
                // k1 = ComboComputation(1).ItemData(ComboComputation(1).ListIndex)
                // If Len(k1) = 1 Then k1 = "0" & k1
                // k2 = ComboComputation(2).ItemData(ComboComputation(2).ListIndex)
                // If Len(k2) = 1 Then k2 = "00" & k2
                // If Len(k2) = 2 Then k2 = "0" & k2
                // sql = "Select * from Section_Details where substr(section_no,1,7)= '" & k0 & k1 & k2 & "' order by Section_No asc"
                // RsIdx1 = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RS1 = DAL.DataSource(RsIdx1)
                //End If

                //If Not NoMsg Then
                // If MsgBox("Starting Budget Planning Calculations. This process takes several minutes!", 36, Me.Caption) = 7 Then
                //   GoTo sub_quit
                // End If
                //End If
                //'SetHourglass
                //msg = "Prediction of Pavement"
                //Pmpt = "Enter the Year for Prediction of Pavement:"
                //k = Year(Now) + 2
                //Repeat_Year:
                //            k = InputBox(Pmpt, msg, k)
                // If Not IsNumeric(k) Then
                //  If k = "" Then Exit Sub
                //  Pmpt = "Year  value  not  numeric! Enter again:"
                //  GoTo Repeat_Year
                //End If
                //Prediction_Year = CLng(k)

                //msg = "Prediction of Pavement"
                //Pmpt = "Enter the Month for Prediction of Pavement (Numeric Value 1 to 12):"
                //k = Month(Now)
                //Repeat_Month:
                //            k = InputBox(Pmpt, msg, k)
                //If Not IsNumeric(k) Then
                // If k = "" Then Exit Sub
                //  Pmpt = "Month  value  not  Correct! Enter again:"
                //  GoTo Repeat_Year
                //End If

                //Prediction_Month = CLng(k)

                //If Prediction_Year <= 1900 Or Prediction_Year >= 2100 Then
                // Pmpt = "Year  value  incorrect! Enter four digit year. Enter again:"
                // GoTo Repeat_Year
                //End If
                //If Prediction_Month <= 0 Or Prediction_Month >= 13 Then
                // Pmpt = "Month  value  incorrect! Enter value between 1 & 12:"
                // GoTo Repeat_Month
                //End If

                //'BDPLst1.AddItem "++ Starting Budget Planning Computations for Year: " & Prediction_Year & "  ++ "
                //'SetHourglass
                //Err_Code = 0


                //For k = 1 To 9
                // Current_MR_Section_No = "BR" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array1(k) = CDbl(Current_RSMT![Maintenance_Factor_Value])
                //Next k
                //DAL.RecordSet_Close(RsIdx)

                //For k = 1 To 6

                // Current_MR_Section_No = "BC" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array6(k) = CDbl(Current_RSMT("Maintenance_Factor_Value"))
                // DAL.RecordSet_Close(RsIdx)


                // Current_MR_Section_No = "BT" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array5(k) = Current_RSMT("Maintenance_Factor_Value")
                // DAL.RecordSet_Close(RsIdx)

                //Next k

                //For k = 1 To 12

                // Current_MR_Section_No = "BM" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array3(k) = CDbl(Current_RSMT("Maintenance_Factor_Value"))
                // DAL.RecordSet_Close(RsIdx)

                // Current_MR_Section_No = "BL" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array2(k) = CDbl(Current_RSMT("Maintenance_Factor_Value"))
                // DAL.RecordSet_Close(RsIdx)


                // Current_MR_Section_No = "BS" & CStr(k)
                // sql = "Select * from Maintenance_Factors Where Maintenance_Factor_No = " & "'" & Current_MR_Section_No & "'"
                // RsIdx = DAL.RecordSet_Open(sql, adLockReadOnly)
                // Set Current_RSMT = DAL.DataSource(RsIdx)
                // BP_Array4(k) = CDbl(Current_RSMT("Maintenance_Factor_Value"))
                // DAL.RecordSet_Close(RsIdx)

                //Next k

                //If Not Current_RS1.EOF Then
                //  PCI_Bar.Value = 0
                //  PCI_Bar.Text = "Status: Computing Budget Planning! Please Wait..."
                //  PCI_Bar.Min = 0
                //  PCI_Bar.Max = Current_RS1.RecordCount
                // Do Until Current_RS1.EOF
                //  Current_Section_No = Current_RS1![section_no]
                //  PCI_Bar.Value = PCI_Bar.Value + 1
                //  DAL.Execute_SQL("Update Pavement_Prediction Set Predicted_PCI = NULL, Predicted_Distress_Type = Null," & _
                //                 "Predicted_Maintenance_Cost = Null, Predicted_Year = Null, Predicted_Month = Null Where Section_No ='" & Current_Section_No & "'")

                //  sql = "Select * from Pavement_Condition where Section_No like '" & Current_Section_No & "'"
                //  RsIdx4 = DAL.RecordSet_Open(sql, adLockReadOnly)
                //  Set Current_RS4 = DAL.DataSource(RsIdx4)
                //  If Not Current_RS4.EOF Then
                //  Current_RS4.MoveFirst
                //  Do Until Current_RS4.EOF
                //   Current_Section_No = Current_RS4![section_no]
                //   sql = "Select * from Section_Details  where Section_No = '" & Current_Section_No & "'"
                //   RsIdx2 = DAL.RecordSet_Open(sql, adLockReadOnly)
                //   Set Current_RS2 = DAL.DataSource(RsIdx2)

                //   If Current_RS1.EOF Then
                //     MsgBox "Budget Planning Computations Aborted. Please run Average PCI Calculation first. "
                //     C_Err_Code = True
                //     GoTo sub_quit
                //   End If
                //   Current_Section_No = Current_RS1![section_no]
                //   Current_Section_Area = Current_RS1![section_area]
                //'   BDPLst1.AddItem "** Processing Prediction for Section: " & Current_RS1![Section_No] & "   **"
                //   road_class = Current_RS1!road_class
                //   Current_Year = Year(Current_RS2!survey_date)
                //'   BDPLst1.AddItem " Last Survey Year: " & Current_Year & "     Road Class: " & Current_RS1!Road_Class
                //If road_class = 1 Or road_class = 2 Then
                // a = BP_Array1(1)
                // b = BP_Array1(2)
                // C = BP_Array1(3)
                //ElseIf road_class = 3 Then
                // a = BP_Array1(4)
                // b = BP_Array1(5)
                // C = BP_Array1(6)
                //Else
                // a = BP_Array1(7)
                // b = BP_Array1(8)
                // C = BP_Array1(9)
                //End If
                //Current_Temp1 = (-a - (a ^ 2 - 4 * b * (100 - Current_RS4!Section_PCI)) ^ 0.5) / (2 * b)
                //Current_Temp2 = Current_Temp1 + Prediction_Year - Current_Year
                //Predicted_PCI = a * Current_Temp2 + b * Current_Temp2 ^ 2 + 100
                //If Predicted_PCI< 0 Then Predicted_PCI = 0
                //If road_class = 1 Or road_class = 2 Then
                // Prediction_Min = BP_Array3(1)
                // Prediction_Max = BP_Array3(2)
                // If Predicted_PCI <= Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //   pcost = BP_Array6(1)
                //   Predicted_Distress_Type = BP_Array5(1)
                //   GoTo pdone
                // End If
                // Prediction_Min = BP_Array3(3)
                // Prediction_Max = BP_Array3(4)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(2)
                //  Predicted_Distress_Type = BP_Array5(2)
                //  GoTo pdone
                //End If
                //Prediction_Min = BP_Array3(5)
                //Prediction_Max = BP_Array3(6)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(3)
                //  Predicted_Distress_Type = BP_Array5(3)
                //  GoTo pdone
                //End If
                // Prediction_Min = BP_Array3(7)
                // Prediction_Max = BP_Array3(8)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(4)
                //   Predicted_Distress_Type = BP_Array5(4)
                //   GoTo pdone
                // End If
                // Prediction_Min = BP_Array3(9)
                // Prediction_Max = BP_Array3(10)
                // If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(5)
                //   Predicted_Distress_Type = BP_Array5(5)
                //   GoTo pdone
                // End If
                //Prediction_Min = BP_Array3(11)
                //Prediction_Max = BP_Array3(12)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(6)
                //  Predicted_Distress_Type = BP_Array5(6)
                //  GoTo pdone
                //End If
                // pcost = BP_Array6(1)
                // Predicted_Distress_Type = BP_Array5(1)
                //ElseIf UCase(road_class) = "C" Then
                // Prediction_Min = BP_Array2(1)
                // Prediction_Max = BP_Array2(2)
                // If Predicted_PCI <= Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //   pcost = BP_Array6(1)
                //   Predicted_Distress_Type = BP_Array5(1)
                //   GoTo pdone
                //// End If
                // Prediction_Min = BP_Array2(3)
                // Prediction_Max = BP_Array2(4)
                // If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(2)
                //   Predicted_Distress_Type = BP_Array5(2)
                //   GoTo pdone
                // End If
                // Prediction_Min = BP_Array2(5)
                // Prediction_Max = BP_Array2(6)
                // If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(3)
                //   Predicted_Distress_Type = BP_Array5(3)
                //   GoTo pdone
                // End If
                //Prediction_Min = BP_Array2(7)
                //Prediction_Max = BP_Array2(8)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(4)
                //  Predicted_Distress_Type = BP_Array5(4)
                //  GoTo pdone
                //End If
                //Prediction_Min = BP_Array2(9)
                //Prediction_Max = BP_Array2(10)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(5)
                //  Predicted_Distress_Type = BP_Array5(5)
                //  GoTo pdone
                //End If
                // Prediction_Min = BP_Array2(11)
                // Prediction_Max = BP_Array2(12)
                // If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(6)
                //   Predicted_Distress_Type = BP_Array5(6)
                //   GoTo pdone
                // End If
                // pcost = BP_Array6(1)
                // Predicted_Distress_Type = BP_Array5(1)
                //Else
                // Prediction_Min = BP_Array4(1)
                // Prediction_Max = BP_Array4(2)
                // If Predicted_PCI <= Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //   pcost = BP_Array6(1)
                //   Predicted_Distress_Type = BP_Array5(1)
                //   GoTo pdone
                // End If
                //Prediction_Min = BP_Array4(3)
                //Prediction_Max = BP_Array4(4)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(2)
                //  Predicted_Distress_Type = BP_Array5(2)
                //  GoTo pdone
                //End If
                //Prediction_Min = BP_Array4(5)
                //Prediction_Max = BP_Array4(6)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(3)
                //  Predicted_Distress_Type = BP_Array5(3)
                //  GoTo pdone
                //End If
                //Prediction_Min = BP_Array4(7)
                //Prediction_Max = BP_Array4(8)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(4)
                //  Predicted_Distress_Type = BP_Array5(4)
                //  GoTo pdone
                //End If
                //Prediction_Min = BP_Array4(9)
                //Prediction_Max = BP_Array4(10)
                //If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                //pcost = BP_Array6(5)
                //  Predicted_Distress_Type = BP_Array5(5)
                //  GoTo pdone
                //End If
                // Prediction_Min = BP_Array4(11)
                // Prediction_Max = BP_Array4(12)
                // If Predicted_PCI<Prediction_Max And Predicted_PCI >= Prediction_Min Then
                // pcost = BP_Array6(6)
                //   Predicted_Distress_Type = BP_Array5(6)
                //   GoTo pdone
                // End If
                // pcost = BP_Array6(1)
                // Predicted_Distress_Type = BP_Array5(1)
                //End If
                //   Temp_Do_Events = DoEvents()
                //pdone:

                //            ''    BDPLst1.AddItem "    Predicted PCI: " & Format(Predicted_PCI, "00.00")
                //'    BDPLst1.AddItem "Treatment:  " & Predicted_Distress_Type & "    Unit Cost:   " & pcost & "    Total Cost: " & CStr(pcost * CLng(Current_Section_Area))


                //    Current_Predicted_Maintenance_Cost = pcost * CLng(Current_RS1!section_area)
                //    Sql_temp = "Update Pavement_Prediction Set Predicted_PCI = " & Predicted_PCI & _
                //              ", Predicted_Year =" & Prediction_Year & ", Predicted_Month =" & Prediction_Month & ", Predicted_Distress_Type ='" & Predicted_Distress_Type & "'," & _
                //             " Predicted_Maintenance_Cost =" & Current_Predicted_Maintenance_Cost & " WHERE Section_No ='" & Current_Section_No & "'"
                //    DAL.Execute_SQL(Sql_temp)


                //Next_PID:
                //            Current_RS4.MoveNext


                //' ProgressBar.SetProgress iMin, xpb1, xpb2, xpb3, xpb4, xpb5, xpb6
                //' iMin = iMin + 1

                // DAL.RecordSet_Close(RsIdx2)
                // Loop
                //End If
                // Current_RS1.MoveNext
                // DAL.RecordSet_Close(RsIdx4)
                //Loop
                //DAL.RecordSet_Close(RsIdx1)

                //Sql_temp = "Update Maintenance_Factors  Set  Maintenance_Factor_Value =" & Prediction_Year & _
                //           " Where Maintenance_Factor_No='BY'"
                //DAL.Execute_SQL(Sql_temp)

                //End If
                //GoTo sub_quit
                //Sub_Error:
                //            MsgBox "Report System Error - " & Err.number & ": " & Err.Description & " in Location MenuForm_7"

                //sub_quit:
                //            If Not NoMsg Then
                // If Err_Code = 1 Then
                //  MsgBox "Budget Planning computations failed. Please run Pre-Computation Check! Necessary section field values are not entered!"
                //  C_Err_Code = True
                // Else
                //  MsgBox "Budget Planning computations completed succesfully. ++ " & Now
                // End If
                //Else
                // If Not C_Err_Code Then
                //  MsgBox "All computations completed succesfully. ++ " & Now
                // End If
                //End If
                //PCI_Bar.Value = 0
                //PCI_Bar.Text = "Status: No Computations Running Currently! Last Computation Run: Budget Planning"
                //Exit Sub
                //Err_Msg:
                //            Err_Code = 1
                // GoTo Next_PID
                //Else
                //   MsgBox "Some computations failed. Please run again!"
                //End If
                //sub_quit1:
                //            PCI_Bar.Value = 0
                //PCI_Bar.Text = "Status: No Computations Running Currently! Last Computation Run: Budget Planning"
                //  End Sub



                /********************************************************
    Sub SetMandR(MR, Section_Type, Density, MR_Cost_Ovrd, S_Type, SecNo)
    Dim gflag As Boolean
    If MR(5) = 1 And MR(6) = 1 Then
        If Section_Type(5) = 1 Then
         If MainR(0) <> "-" Then
           If Density(5) + Density(6) > MainR(0) Then
              MR(5) = 0
              MR(6) = 0
              MR(MainV(0)) = 1
              S_Type(MainV(0)) = 1
              MR_Cost_Ovrd(MainV(0)) = 1
              gflag = True
           End If
        End If
        End If
        If Section_Type(5) = 2 Then
         If LocalR(0) <> "-" Then
           If Density(5) + Density(6) > LocalR(0) Then
              MR(5) = 0
              MR(6) = 0
              MR(LocalV(0)) = 1
              S_Type(LocalV(0)) = 1
              MR_Cost_Ovrd(LocalV(0)) = 1
              gflag = True
           End If
        End If
        End If
        If Section_Type(5) = 3 Then
         If UtilityR(0) <> "-" Then
           If Density(5) + Density(6) > UtilityR(0) Then
              MR(5) = 0
              MR(6) = 0
              MR(UtilityV(0)) = 1
              S_Type(UtilityV(0)) = 1
              MR_Cost_Ovrd(UtilityV(0)) = 1
              gflag = True
           End If
        End If
        End If                                    *****
    ElseIf MR(5) = 1 Then
        If Section_Type(5) = 1 Then
         If MainR(1) <> "-" Then
           If Density(5) > MainR(1) Then
              MR(5) = 0
              MR(MainV(1)) = 1
              S_Type(MainV(1)) = 1
              MR_Cost_Ovrd(MainV(1)) = 1
              gflag = True
           End If
        End If
        End If
        If Section_Type(5) = 2 Then
         If LocalR(1) <> "-" Then
           If Density(5) > LocalR(1) Then
              MR(5) = 0
              MR(LocalV(1)) = 1
              S_Type(LocalV(1)) = 1
              MR_Cost_Ovrd(LocalV(1)) = 1
              gflag = True
           End If
        End If
        End If
        If Section_Type(5) = 3 Then
         If UtilityR(1) <> "-" Then
           If Density(5) > UtilityR(1) Then
              MR(5) = 0
              MR(UtilityV(1)) = 1
              S_Type(UtilityV(1)) = 1
              MR_Cost_Ovrd(UtilityV(1)) = 1
              gflag = True
           End If
        End If
        End If
    ElseIf MR(6) = 1 Then
        If Section_Type(6) = 1 Then
         If MainR(2) <> "-" Then
           If Density(6) > MainR(2) Then
              MR(6) = 0
              MR(MainV(2)) = 1
              S_Type(MainV(2)) = 1
              MR_Cost_Ovrd(MainV(2)) = 1
              gflag = True
           End If
         End If
        End If
        If Section_Type(6) = 2 Then
         If LocalR(2) <> "-" Then
           If Density(6) > LocalR(2) Then
              MR(6) = 0
              MR(LocalV(2)) = 1
              S_Type(LocalV(2)) = 1
              MR_Cost_Ovrd(LocalV(2)) = 1
              gflag = True
           End If
         End If
         End If
        If Section_Type(6) = 3 Then
         If UtilityR(2) <> "-" Then
           If Density(5) > UtilityR(2) Then
              MR(6) = 0
              MR(UtilityV(2)) = 1
              S_Type(UtilityV(2)) = 1
              MR_Cost_Ovrd(UtilityV(2)) = 1
              gflag = True
           End If
         End If
        End If
    End If
    For j = 15 To 7 Step - 1                 *******************************
     If MR(j) = 1 Then
        If Section_Type(j) = 1 Then
         If MainR(j - 4) <> "-" Then
           If Density(j) > MainR(j - 4) Then
              MR(j) = 0
              MR(MainV(j - 4)) = 1
              S_Type(MainV(j - 4)) = 1
              MR_Cost_Ovrd(MainV(j - 4)) = 1
              gflag = True
           End If
         End If
        End If                           *************************************
        If Section_Type(j) = 2 Then
         If LocalR(j - 4) <> "-" Then
           If Density(j) > LocalR(j - 4) Then
              MR(j) = 0
              MR(LocalV(j - 4)) = 1
              S_Type(LocalV(j - 4)) = 1
              MR_Cost_Ovrd(LocalV(j - 4)) = 1
              gflag = True
           End If
         End If
        End If
        If Section_Type(j) = 3 Then
         If UtilityR(j - 4) <> "-" Then
           If Density(j) > UtilityR(j - 4) Then
              MR(j) = 0
              MR(UtilityV(j - 4)) = 1
              S_Type(UtilityV(j - 4)) = 1
              MR_Cost_Ovrd(UtilityV(j - 4)) = 1
              gflag = True
           End If
         End If
        End If
     End If
    Next j                                 *********************************

    sql = "Select * from Equipment where section_no= '" & SecNo & "'"
    RsIdxO = DAL.RecordSet_Open(sql, adLockReadOnly)
    Set Current_RSO = DAL.DataSource(RsIdxO)
    If Not Current_RSO.EOF Then
     If Current_RSO!DEFLECTION_MEASURE_0 <> "" Then MaxDef = Current_RSO!DEFLECTION_MEASURE_0
     If Current_RSO!DEFLECTION_MEASURE_1 <> "" Then
      If Current_RSO!DEFLECTION_MEASURE_1 > MaxDef Then MaxDef = Current_RSO!DEFLECTION_MEASURE_1
     End If
     If Current_RSO!DEFLECTION_MEASURE_2 <> "" Then
      If Current_RSO!DEFLECTION_MEASURE_2 > MaxDef Then MaxDef = Current_RSO!DEFLECTION_MEASURE_2
     End If
     If Current_RSO!DEFLECTION_MEASURE_3 <> "" Then
      If Current_RSO!DEFLECTION_MEASURE_3 > MaxDef Then MaxDef = Current_RSO!DEFLECTION_MEASURE_3
     End If
     If Current_RSO!DEFLECTION_MEASURE_4 <> "" Then
      If Current_RSO!DEFLECTION_MEASURE_4 > MaxDef Then MaxDef = Current_RSO!DEFLECTION_MEASURE_4
     End If
     If Current_RSO!DEFLECTION_MEASURE_5 <> "" Then
      If Current_RSO!DEFLECTION_MEASURE_5 > MaxDef Then MaxDef = Current_RSO!DEFLECTION_MEASURE_5
     End If                                                   *************************************
     If MaxDef > EqpM(1) Then
      MR(CInt(EqpM(4))) = 1
     End If
     If Current_RSO!AVERAGE_ROUGHNESS <> "" Then
      If Current_RSO!AVERAGE_ROUGHNESS > EqpM(2) Then MR(CInt(EqpM(5))) = 1
     End If
     If Current_RSO!AVERAGE_SKID_WET <> "" Then
      If Current_RSO!AVERAGE_SKID_WET > EqpM(3) Then MR(CInt(EqpM(6))) = 1
     End If
    End If
    DAL.RecordSet_Close(RsIdxO)
                                                                ***********************************************
    pass = True
    Do Until Not pass
      pass = False
      If MR(1) = 1 And(MR(2) = 1 Or MR(3) = 1 Or MR(4) = 1 Or MR(5) = 1 Or MR(6) = 1 Or MR(7) = 1 Or MR(8) = 1 Or MR(9) = 1 Or MR(10) = 1 _
        Or MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(1) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(2) = 1 And(MR(3) = 1 Or MR(4) = 1 Or MR(5) = 1 Or MR(6) = 1 Or MR(7) = 1 Or MR(8) = 1 Or MR(9) = 1 Or MR(10) = 1 _
        Or MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(2) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(3) = 1 And(MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(3) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(4) = 1 And(MR(5) = 1 Or MR(6) = 1 Or MR(7) = 1 Or MR(8) = 1 Or MR(9) = 1 Or MR(10) = 1 _
           Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(4) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(5) = 1 And(MR(6) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(5) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(6) = 1 And(MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(6) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(7) = 1 And(MR(8) = 1 Or MR(9) = 1 Or MR(10) = 1 _
           Or MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(7) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(8) = 1 And(MR(9) = 1 Or MR(10) = 1 Or MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(8) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(9) = 1 And(MR(10) = 1 Or MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(9) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(10) = 1 And(MR(11) = 1 Or MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(10) = 0
         pass = True
         GoTo nextitr
      End If
      If MR(11) = 1 And(MR(12) = 1 Or MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(11) = 0
         pass = True
      End If
      If MR(12) = 1 And(MR(13) = 1 Or MR(14) = 1 Or MR(15) = 1) Then
         MR(12) = 0
         pass = True
      End If
      If MR(13) = 1 And(MR(14) = 1 Or MR(15) = 1) Then
         MR(13) = 0
         pass = True
      End If
      If MR(14) = 1 And MR(15) = 1 Then
         MR(14) = 0
         pass = True
      End If
    nextitr:
                Loop
                *******************************/////
                                                /////////////////////

                return "success finish calculation";
            }
            catch (Exception ex)
            {
                return "there are problem : " + ex.Message;
            }
        }

        public string SetMandR(double[] MR1,double[] SecType, double[] Density, double[] MR_Cost_Ovrd, double[] S_Type,string SecNo)
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            double[] MainR = new double[2];///UtilityR
            int[] MainV = new int[2];///LocalR
            double[] LocalR = new double[2];///MainV
            int[] LocalV = new int[2];///LocalR
            double[] UtilityR = new double[2];///UtilityR
            int[] UtilityV = new int[2];///LocalR
            bool gflag = false;
            if (MR1[5] == 1 && MR1[6] == 1)
            {
                //Dim gflag As Boolean
                //If MR(5) = 1 And MR(6) = 1 Then
                if (SecType[5] == 1)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (MainR[0].ToString() != "-")
                    {
                        if (Density[5] + Density[6] > MainR[0])
                        {
                            MR1[5] = 0;
                            MR1[6] = 0;
                            MR1[MainV[0]] = 1;
                            S_Type[MainV[0]] = 1;
                            MR_Cost_Ovrd[MainV[0]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[5] == 2)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (LocalR[0].ToString() != "-")
                    {
                        if (Density[5] + Density[6] > LocalR[0])
                        {
                            MR1[5] = 0;
                            MR1[6] = 0;
                            MR1[LocalV[0]] = 1;
                            S_Type[LocalV[0]] = 1;
                            MR_Cost_Ovrd[LocalV[0]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[5] == 3)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (UtilityR[0].ToString() != "-")
                    {
                        if (Density[5] + Density[6] > UtilityR[0])
                        {
                            MR1[5] = 0;
                            MR1[6] = 0;
                            MR1[UtilityV[0]] = 1;
                            S_Type[UtilityV[0]] = 1;
                            MR_Cost_Ovrd[UtilityV[0]] = 1;
                            gflag = true;
                        }
                    }
                }


            }
            else if (MR1[5] == 1)
            {
                if (SecType[6] == 1)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (MainR[1].ToString() != "-")
                    {
                        if (Density[5] > MainR[1])
                        {
                            MR1[5] = 0;
                            MR1[MainV[1]] = 1;

                            S_Type[MainV[1]] = 1;
                            MR_Cost_Ovrd[MainV[1]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[6] == 2)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (LocalR[2].ToString() != "-")
                    {
                        if (Density[6] > LocalR[2])
                        {
                            MR1[6] = 0;
                            MR1[LocalV[2]] = 1;

                            S_Type[LocalV[2]] = 1;
                            MR_Cost_Ovrd[LocalV[2]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[6] == 3)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (UtilityR[2].ToString() != "-")
                    {
                        if (Density[5] > UtilityR[2])
                        {
                            MR1[6] = 0;
                            MR1[UtilityV[2]] = 1;

                            S_Type[UtilityV[2]] = 1;
                            MR_Cost_Ovrd[UtilityV[2]] = 1;
                            gflag = true;
                        }
                    }
                }
            }
            else if (MR1[6]==1)
            {
                if (SecType[6] == 1)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (MainR[2].ToString() != "-")
                    {
                        if (Density[6] > MainR[2])
                        {
                            MR1[6] = 0;
                            MR1[MainV[2]] = 1;

                            S_Type[MainV[2]] = 1;
                            MR_Cost_Ovrd[MainV[2]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[6] == 2)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (LocalR[2].ToString() != "-")
                    {
                        if (Density[6] > LocalR[2])
                        {
                            MR1[6] = 0;
                            MR1[LocalV[2]] = 1;

                            S_Type[LocalV[2]] = 1;
                            MR_Cost_Ovrd[LocalV[2]] = 1;
                            gflag = true;
                        }
                    }
                }
                if (SecType[6] == 3)
                {
                    /// If MainR(0) <> "-" Then ??????????????
                    if (UtilityR[2].ToString() != "-")
                    {
                        if (Density[5] > UtilityR[2])
                        {
                            MR1[6] = 0;
                            MR1[UtilityV[2]] = 1;

                            S_Type[UtilityV[2]] = 1;
                            MR_Cost_Ovrd[UtilityV[2]] = 1;
                            gflag = true;
                        }
                    }
                }
            }

            for (int j = 0; j < 7; j++)
            {
                if (MR1[j]==1)
                {
                    if (SecType[j]==1)
                    {
                        if (MainR[j-4].ToString()!="-")
                        {
                            if (Density[j]>MainR[j-4])
                            {
                                MR1[j] = 0;
                                MR1[MainV[j - 4]] = 1;
                                S_Type[MainV[j - 4]] = 1;
                                MR_Cost_Ovrd[MainV[j - 4]] = 1;
                                gflag = true;
                            }
                        }

                    }
                    if (SecType[j] == 2)
                    {
                        if (LocalR[j - 4].ToString() != "-")
                        {
                            if (Density[j] > LocalR[j - 4])
                            {
                                MR1[j] = 0;
                                MR1[LocalV[j - 4]] = 1;
                                S_Type[LocalV[j - 4]] = 1;
                                MR_Cost_Ovrd[LocalV[j - 4]] = 1;
                                gflag = true;
                            }
                        }

                    }
                    if (SecType[j] == 3)
                    {
                        if (UtilityR[j - 4].ToString() != "-")
                        {
                            if (Density[j] > UtilityR[j - 4])
                            {
                                MR1[j] = 0;
                                MR1[UtilityV[j - 4]] = 1;
                                S_Type[UtilityV[j - 4]] = 1;
                                MR_Cost_Ovrd[UtilityV[j - 4]] = 1;
                                gflag = true;
                            }
                        }

                    }
                }
            }

            double MaxDef1 = 0;

            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
            var GetAll = cd.GetData("Select * from Equipment where section_no= '" + SecNo + "'");

            ///exec sql
            DataTable dtsql = (DataTable)GetAll;
            for (int i = 0; i < dtsql.Rows.Count; i++)
            {
                if (dtsql.Rows[i]["DEFLECTION_MEASURE_0"].ToString()!="")
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_0"].ToString());
                }
                if (dtsql.Rows[i]["DEFLECTION_MEASURE_1"].ToString() != ""
                    && double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_1"].ToString()) >MaxDef1)
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_1"].ToString());
                }

                if (dtsql.Rows[i]["DEFLECTION_MEASURE_2"].ToString() != ""
                         && double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_2"].ToString()) > MaxDef1)
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_2"].ToString());
                }
                if (dtsql.Rows[i]["DEFLECTION_MEASURE_3"].ToString() != ""
                        && double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_3"].ToString()) > MaxDef1)
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_3"].ToString());
                }
                if (dtsql.Rows[i]["DEFLECTION_MEASURE_4"].ToString() != ""
                        && double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_4"].ToString()) > MaxDef1)
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_4"].ToString());
                }
                if (dtsql.Rows[i]["DEFLECTION_MEASURE_5"].ToString() != ""
                        && double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_5"].ToString()) > MaxDef1)
                {
                    MaxDef1 = double.Parse(dtsql.Rows[i]["DEFLECTION_MEASURE_5"].ToString());
                }
                int[] EqpM1 = new int[5];////////////////*************?
                if (MaxDef1>EqpM1[1])
                {
                    //int x = EqpM1[4];
                    MR1[EqpM1[4]] = 1;
                }
                double EqpmX = EqpM1[2];
                string xx = dtsql.Rows[i]["AVERAGE_ROUGHNESS"].ToString();
                if (dtsql.Rows[i]["AVERAGE_ROUGHNESS"].ToString()!=""&& double.Parse( dtsql.Rows[i]["AVERAGE_ROUGHNESS"].ToString())> EqpmX)//EqpM1[2])
                {
                    //MR1[EqpM1[5]] = 1;
                    MR1[EqpM1[4]] = 1;
                }
                double eqpm13= EqpM1[3];
                if (dtsql.Rows[i]["AVERAGE_SKID_WET"].ToString() != "" && double.Parse(dtsql.Rows[i]["AVERAGE_SKID_WET"].ToString()) > eqpm13)// EqpM1[3])
                {
                    // MR1[EqpM1[5]] = 1;
                    MR1[EqpM1[4]] = 1;
                }


            }


                return "ok";
        }

    }
}