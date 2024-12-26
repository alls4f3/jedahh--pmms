using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using System.Web.Mvc;
using System.Diagnostics;
//using System.Linq;


namespace AmtarApp.Modules.Computations
{
    public class Maintenance_Cost_Calculations
    {

        public string Maintenance_Cost_Calc(string contractor_no, string zone, string area, string City)
        {
            try
            {

                contractor_no = "1";
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
                PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
                string result = "";
                string Severity_Value = "";
                string MR_Value = "";
                int RsIdx = 0;
                bool O_Type;
                DataTable dt = new DataTable();
                if (City != "" && area != "" && zone != "" || contractor_no != "")
                {
                    var GetAll13 = cd.GetData("Select * from Section_Details where section_no IN ( SELECT Pavement_Condition.SECTION_NO FROM Pavement_Condition)");

                   // var GetAll13 = cd.GetData("Select * from Section_Details where  section_no='01010100150103'");
                    dt = (DataTable)GetAll13;

                    var AllGonfig = cd.GetData("Select * from Maintenance_Factors ");/// & "'" & Current_MR_Section_No & "'
                    DataTable AllGonfigTb = (DataTable)AllGonfig;


                    var sqlMCAll = cd.GetData("Select * from Contractor_Maintenance_Cost Where  Contractor_No ='1'");
                    ///EXEC SQLMC
                    DataTable dtSqlMcAll = (DataTable)sqlMCAll;

                    double[] EqpM = new double[15];

                    for (int SE = 0; SE < dt.Rows.Count; SE++)
                    {
                       // SE = 5;
                        ///load MR factor
                        for (int i = 1; i <= 6; i++)
                        {
                            string Maintenance_Factor_No = "A" + i;
                            //  var GetAll3 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Maintenance_Factor_No + "'");/// & "'" & Current_MR_Section_No & "'
                             var GetAll3 = cd.GetDataFromTable(AllGonfigTb, "Maintenance_Factor_No = '" + Maintenance_Factor_No + "'");/// & "'" & Current_MR_Section_No & "'
                            DataTable dtTest = (DataTable)GetAll3;
                            if (dtTest.Rows.Count > 0)
                            {
                                EqpM[i] = double.Parse(dtTest.Rows[0]["Maintenance_Factor_Value"].ToString());
                            }
                            ////EqpM(k) = Val(Current_RSM1![Maintenance_Factor_Value])
                        }

                     
                        double[] MainR = new double[15];///LocalR
                        double[] LocalR = new double[15];///
                        double[] UtilityR = new double[15];///MainV
                        double[] MainV = new double[15];///LocalV
                        double[] LocalV = new double[15];///UtilityV
                        double[] UtilityV = new double[15];///UtilityV
                        for (int J = 11; J >= 0; J--)
                        {
                            int nu = 11 - J;
                            string Current_MR_Section_No2 = "MC2" + nu;
                            var sql2 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No2 + "'");
                            DataTable DTsql2 = (DataTable)sql2;
                            if (DTsql2.Rows.Count > 0)
                            {
                                MainR[J] = double.Parse(DTsql2.Rows[0]["Maintenance_Factor_Value"].ToString());
                            }
                            ///MainR(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            string Current_MR_Section_No3 = "MC3" + nu;
                            var sql3 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No3 + "'");
                            ///exec sql4
                            DataTable DTsql3 = (DataTable)sql3;
                            if (DTsql3.Rows.Count > 0)
                            {
                                LocalR[J] = double.Parse(DTsql3.Rows[0]["Maintenance_Factor_Value"].ToString());
                                ///LocalR(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            }

                            string Current_MR_Section_No6 = "MC6" + nu;
                            var sql6 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No6 + "'");
                            DataTable DTsql6 = (DataTable)sql6;
                            if (DTsql6.Rows.Count > 0)
                            {
                                UtilityR[J] = double.Parse(DTsql6.Rows[0]["Maintenance_Factor_Value"].ToString());
                                ////exec sql5
                                /// UtilityR(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            }

                            string Current_MR_Section_No4 = "MC4" + nu;
                            var sql4 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No4 + "'");
                            DataTable DTsql4 = (DataTable)sql4;
                            if (DTsql4.Rows.Count > 0)
                            {
                                MainV[J] = double.Parse(DTsql4.Rows[0]["Maintenance_Factor_Value"].ToString());
                                ///exec sql6
                                /// MainV(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            }
                            string Current_MR_Section_No5 = "MC5" + nu;
                            var sql5 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No5 + "'");
                            DataTable DTsql5 = (DataTable)sql5;
                            if (DTsql5.Rows.Count > 0)
                            {
                                LocalV[J] = double.Parse(DTsql5.Rows[0]["Maintenance_Factor_Value"].ToString());
                                ///exec sql7
                                /// LocalV(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            }
                            string Current_MR_Section_No7 = "MC7" + nu;
                            var sql7 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No7 + "'");
                            DataTable DTsql7 = (DataTable)sql7;
                            if (DTsql7.Rows.Count > 0)
                            {
                                UtilityV[J] = double.Parse(DTsql7.Rows[0]["Maintenance_Factor_Value"].ToString());
                                ///exec sql7
                                /// UtilityV(j) = Val(Current_RSM1![Maintenance_Factor_Value])
                            }
                        }

                        /////notes execute

                        int Sql_temp1 = connection.Execute("Update Pavement_Condition Set Maintenance_Cost = NULL, Maintenance_Priority = Null,Distress_Condition_Before = Null, Distress_Condition_After = Null,Special_Treatment_Cost = Null,Special_Treatment_Type = Null,Special_Treatment_Description = Null WHERE Section_No ='" + dt.Rows[SE]["Section_No"].ToString() + "'");
                        /////exec sql_temp
                        int Sql_tempDel = connection.Execute("Delete from Detail_MR_Data WHERE Section_No ='" + dt.Rows[SE]["Section_No"].ToString() + "'");
                        /// exec sql_tempDel


                        // Get All Config Value then reset the pavement and remove the MR data


                        var sqlPCI = cd.GetData("Select * from Pavement_Condition where Section_No = '" + dt.Rows[SE]["Section_No"].ToString() + "'");
                        ///EXEC sqlpci
                        DataTable dtPCI = (DataTable)sqlPCI;
                        string Current_Contractor_No = contractor_no;
                        if (dtPCI.Rows.Count > 0)////dtPCI.Rows.Count <= 0
                        {
                            for (int i = 0; i < dtPCI.Rows.Count; i++)
                            {
                                if (dtPCI.Rows[i]["Section_PCI"].ToString() != null)
                                {


                                    double Current_Riding_Quality_Value = 0;
                                    double Current_Safety_Condition_Value = 0;
                                    int Previous_Contractor_No1 = 0;
                                    double[] MR_Cost1 = new double[53]; //new double[15];

                                    double section_area = double.Parse(dt.Rows[SE]["section_area"].ToString()); //double.Parse(dtPCI.Rows[i]["section_area"].ToString());
                                    string road_class1 = dtPCI.Rows[i]["road_class"].ToString();

                                   

                                    if (Previous_Contractor_No1 != int.Parse(Current_Contractor_No))
                                    {
                                        int y = 0;
                                        for (int K = 1; K <= 45; K++)
                                        {

                                            var sqlMC = cd.GetDataFromTable(sqlMCAll, "Maintenance_Cost_ID = '" + K + "'");
                                            ///EXEC SQLMC
                                            DataTable dtSqlMc = (DataTable)sqlMC;
                                            MR_Cost1[y] = double.Parse(dtSqlMc.Rows[0]["Maintenance_Cost_Value"].ToString());// double.Parse(dtSqlMc.Rows[K]["Maintenance_Cost_Value"].ToString());
                                            y++;
                                        }
                                        //int J = K - 1;
                                        int y1 = 0;
                                        for (int KK = 1; KK <= 8; KK++)
                                        {

                                            var sqlK = cd.GetDataFromTable(sqlMCAll,"Maintenance_Cost_ID ='" + KK + "m'");
                                            ///exec sqlk
                                            DataTable dtSqlk = (DataTable)sqlK;
                                            if (dtSqlk.Rows.Count > 0)
                                            {
                                                MR_Cost1[y1 + y] = double.Parse(dtSqlk.Rows[0]["Maintenance_Cost_Value"].ToString());
                                                // MR_Cost1[i + y1] = double.Parse(dtSqlk.Rows[0]["Maintenance_Cost_Value"].ToString()); //double.Parse(dtSqlk.Rows[y]["Maintenance_Cost_Value"].ToString());
                                                ///MR_Cost(j + k) = Val(Current_RSM!Maintenance_Cost_Value)
                                            }
                                            y1++;
                                        }

                                        //'processing pavement special treatment for the current section
                                        string[] SP_TRT1 = new string[3];
                                        double[] SP_QTY1 = new double[3];
                                        double[] SP_CST1 = new double[3];


                                        //double Total_Cost = 0;
                                        double SP_DET1 = 0;
                                        double spflag1 = 0;
                                        double addcost1 = 0;
                                        string tstr1 = "";
                                        string Ttype1 = "";
                                        double unitcost1 = 0;
                                        string Current_Special_Treatment_No = "";
                                        double Current_Special_Treatment_Cost1 = 0;
                                        double Current_Maintenance_Cost = 0;
                                        string Current_Special_Treatment_Type1 = "";
                                        var SQLSPT4 = cd.GetData("Select * from Special_Treatment_Sections Where Section_No = '" + dt.Rows[SE]["Section_No"].ToString() + "'");
                                        ///exec sql4
                                        DataTable dtSPT4 = (DataTable)SQLSPT4;
                                        for (int SQLSPT41 = 0; SQLSPT41 < dtSPT4.Rows.Count; SQLSPT41++)
                                        {
                                            var SQLSPT5 = cd.GetData("Select * from Contractor_Special_Treatment Where Special_Treatment_No = '" + dtSPT4.Rows[SQLSPT41]["Special_Treatment_No"].ToString() + "' and Contractor_No =" + Current_Contractor_No + "");
                                            ///exec sqlspt5
                                            DataTable dtSPT5 = (DataTable)SQLSPT5;
                                            for (int SQLSPT51 = 0; SQLSPT51 < dtSPT5.Rows.Count; SQLSPT51++)
                                            {
                                                if (dtSPT5.Rows.Count > 0)
                                                {
                                                    unitcost1 = double.Parse(dtSPT5.Rows[SQLSPT51]["Special_Treatment_Value"].ToString());
                                                    Current_Special_Treatment_No = Two_Digit(dtSPT5.Rows[SQLSPT51]["Special_Treatment_No"].ToString()); //Two_Digit(dtSPT5.Rows[SQLSPT41]["Special_Treatment_No"].ToString());
                                                    if (Current_Special_Treatment_No == "01" || Current_Special_Treatment_No == "02" ||
                                                        Current_Special_Treatment_No == "03" || Current_Special_Treatment_No == "04" ||
                                                        Current_Special_Treatment_No == "05" || Current_Special_Treatment_No == "06" ||
                                                        Current_Special_Treatment_No == "07" || Current_Special_Treatment_No == "08" ||
                                                        Current_Special_Treatment_No == "09" || Current_Special_Treatment_No == "10")
                                                    {
                                                        /////////////////////START NEW

                                                        ///END  NEW
                                                        addcost1 = double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString()) * unitcost1;
                                                        Ttype1 = dtSPT5.Rows[SQLSPT51]["Special_Treatment_No"].ToString();
                                                        //string Tdesc = dtSPT5.Rows[SQLSPT41]["Special_Treatment_Description"].ToString();
                                                        /// tdesc = Current_RSMT5![Special_Treatment_Description];

                                                        SP_TRT1[SQLSPT51] = dtSPT4.Rows[SQLSPT41]["Special_Treatment_No"].ToString();
                                                        string sp_qt = dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString();
                                                        SP_QTY1[SQLSPT51] = double.Parse(sp_qt);
                                                        SP_CST1[SQLSPT51] = double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString()) * unitcost1;
                                                        SP_DET1 = SP_DET1 + 1;
                                                        ////skiptstep
                                                        if (spflag1 == 1)
                                                        {
                                                            Current_Special_Treatment_Cost1 = addcost1;
                                                            Current_Maintenance_Cost = 0;
                                                            if (int.Parse(Ttype1) > 0 && int.Parse(Ttype1) < 10)
                                                            {
                                                                Current_Special_Treatment_Type1 = "0" + Ttype1;
                                                            }
                                                            else
                                                            {
                                                                Current_Special_Treatment_Type1 = Ttype1;
                                                            }
                                                        }
                                                        ////total_cost

                                                    }
                                                    spflag1 = 2;
                                                    addcost1 = addcost1 + double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString()) * unitcost1; //double.Parse(dtSPT5.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString()) * unitcost1;
                                                    if (double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_No"].ToString()) > 0 && double.Parse(dtSPT5.Rows[SQLSPT51]["Special_Treatment_No"].ToString()) <= 9)
                                                    {
                                                        tstr1 = tstr1 + "0" + dtSPT4.Rows[SQLSPT41]["Special_Treatment_No"].ToString() + " ";
                                                        SP_TRT1[SQLSPT51] = tstr1;
                                                    }
                                                    else
                                                    {
                                                        tstr1 = tstr1 + dtSPT4.Rows[SQLSPT41]["Special_Treatment_No"].ToString() + " ";
                                                        SP_TRT1[SQLSPT51] = tstr1;
                                                    }
                                                    SP_QTY1[SQLSPT51] = double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString());
                                                    SP_CST1[SQLSPT51] = double.Parse(dtSPT4.Rows[SQLSPT41]["Special_Treatment_Quantity"].ToString()) * unitcost1;

                                                    //spflag = 2
                                                    //addcost = addcost + CDbl(Current_RSMT4![Special_Treatment_Quantity]) * CDbl(unitcost)
                                                    //If CLng(Current_RSMT4![Special_Treatment_No]) > 0 And CLng(Current_RSMT4![Special_Treatment_No]) <= 9 Then
                                                    //    tstr = tstr & "0" & CLng(Current_RSMT4![Special_Treatment_No]) & " "
                                                    //    SP_TRT(SP_DET) = tstr
                                                    //Else
                                                    //    tstr = tstr & Current_RSMT4![Special_Treatment_No] & " "
                                                    //    SP_TRT(SP_DET) = tstr
                                                    //End If
                                                    //SP_QTY(SP_DET) = Current_RSMT4![Special_Treatment_Quantity]
                                                    //SP_CST(SP_DET) = CDbl(Current_RSMT4![Special_Treatment_Quantity]) * CDbl(unitcost)
                                                }
                                            }

                                            //                                    unitcost = 0
                                            //            If Current_RSMT5.RecordCount <> 0 Then unitcost = Current_RSMT5![Special_Treatment_Value]
                                            //            Current_Special_Treatment_No = Two_Digit(Current_RSMT4![Special_Treatment_No])
                                            //            If(Current_Special_Treatment_No = "01" Or Current_Special_Treatment_No = "02" Or _
                                            //                Current_Special_Treatment_No = "03" Or Current_Special_Treatment_No = "04" Or _
                                            //                Current_Special_Treatment_No = "05" Or Current_Special_Treatment_No = "06" Or _
                                            //                Current_Special_Treatment_No = "07" Or Current_Special_Treatment_No = "08" Or _
                                            //                Current_Special_Treatment_No = "09" Or Current_Special_Treatment_No = "10") Then
                                            //                addcost = CDbl(Current_RSMT4![Special_Treatment_Quantity]) * CDbl(unitcost)
                                            //                Ttype = Current_RSMT4![Special_Treatment_No]
                                            //'                tdesc = Current_RSMT5![Special_Treatment_Description]
                                            //spflag = 1
                                            //    SP_TRT(SP_DET) = Current_RSMT4![Special_Treatment_No]
                                            //    SP_QTY(SP_DET) = Current_RSMT4![Special_Treatment_Quantity]
                                            //    SP_CST(SP_DET) = CDbl(Current_RSMT4![Special_Treatment_Quantity]) * CDbl(unitcost)
                                            //    SP_DET = SP_DET + 1
                                            //    DAL.RecordSet_Close(RsIdx5)
                                        }
                                        /*****************************/
                                        //'processing pavement distress costs and overriding M&R treatments
                                        bool dstmflag1 = false;
                                        bool dstlflag1 = false;
                                        bool dsthqflag1 = false;
                                        bool dstmqflag1 = false;
                                        bool dstlqflag1 = false;
                                        bool dsthflag1 = false;

                                        // double Current_Maintenance_Cost = 0;
                                        string Suggested_MR1 = "";
                                        double[] MR1 = new double[16];///new double[15];
                                        double[,] MR_Cost_Matrix = new double[15, 2];
                                        double[] Section_Type = new double[15];
                                        double[] Density = new double[15];
                                        double[] MR_Cost_Ovrd1 = new double[15];
                                        for (int CMC = 0; CMC < 15; CMC++)
                                        {
                                            MR1[CMC] = 0;
                                            MR_Cost_Matrix[CMC, 1] = 0;
                                            // MR_Cost_Matrix[CMC, 2] = 0;
                                            //Section_Type[CMC] = 0;
                                            Density[CMC] = 0;
                                            MR_Cost_Ovrd1[CMC] = 0;
                                        }

                                    //    var sqlDSA = cd.GetData("Select * from Distress_Samples Where Section_No = '" + dt.Rows[SE]["Section_No"].ToString() + "' ");


                                        var sqlDSA = cd.GetData("Select * from Distress_Samples c1 Where Section_No = '" + dt.Rows[SE]["Section_No"].ToString() + "'  and SAMPLE_NO = (SELECT MAX(SAMPLE_NO) FROM Distress_Samples c2 where c2.Section_No=c1.Section_No  and Sample_PCI is not null)");
                                        ///EXEC SQLDSA
                                        DataTable dtDSA = (DataTable)sqlDSA;
                                        double Sum_Sample_Area1 = 0;
                                        int c = 0;
                                        while (c < dtDSA.Rows.Count)
                                        {

                                            Sum_Sample_Area1 = Sum_Sample_Area1 + double.Parse(dtDSA.Rows[c]["Sample_Area"].ToString());
                                            c++;
                                        }
                                        ///  for (int DA = 0; DA < 19; DA++)
                                        double Distress_Sum1 = 0;
                                        double Average_Distress1 = 0;
                                        double distress_count1 = 0;
                                        string Current_Severity1 = "";
                                        int DA = 0;
                                        double Road_Class_Value1 = 0;
                                        while (DA < dtDSA.Rows.Count)
                                        {
                                            for (int Current_Distress1 = 0; Current_Distress1 <= 19; Current_Distress1++)
                                            {

                                                /* For k = 1 To 3
                                                    If k = 1 Then Current_Severity = "L"
                                                    If k = 2 Then Current_Severity = "M"
                                                    If k = 3 Then Current_Severity = "H"*/
                                                for (int k11 = 1; k11 < 3; k11++)
                                                {
                                                    if (k11 == 1)
                                                        Current_Severity1 = "L";
                                                    if (k11 == 2)
                                                        Current_Severity1 = "M";
                                                    if (k11 == 3)
                                                        Current_Severity1 = "H";

                                                    if (dtDSA.Rows[DA]["Distress_0"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_0"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_0"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_1"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_1"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_1"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_2"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_2"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_2"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_3"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_3"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_3"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_4"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_4"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_4"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_5"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_5"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_5"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_6"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_6"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_6"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_7"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_7"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_7"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_8"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_8"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_8"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_9"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_9"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_9"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_10"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_10"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_10"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_11"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_11"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_11"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_12"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_12"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_12"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_13"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_13"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_13"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_14"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_14"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_14"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_15"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_15"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_15"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_16"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_16"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_16"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_17"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_17"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_17"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_18"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_18"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_18"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }
                                                    if (dtDSA.Rows[DA]["Distress_19"].ToString() == Current_Distress1.ToString() && dtDSA.Rows[DA]["Severity_19"].ToString() == Current_Severity1)
                                                    {
                                                        distress_count1 = distress_count1 + 1;
                                                        Distress_Sum1 = Distress_Sum1 + double.Parse(dtDSA.Rows[DA]["Quantity_19"].ToString());// CDbl(Current_RSM![Quantity_0])
                                                    }

                                                }

                                                string Current_Density_Severity1 = "";

                                                if (distress_count1 > 0)
                                                {
                                                    if (Sum_Sample_Area1 > 0)
                                                    {
                                                        Average_Distress1 = Distress_Sum1 * 100 / Sum_Sample_Area1;
                                                        if (Average_Distress1 >= 61 && Average_Distress1 <= 100)
                                                        {
                                                            Current_Density_Severity1 = "V";
                                                        }
                                                        else if (Average_Distress1 >= 31 && Average_Distress1 < 61)
                                                        {
                                                            Current_Density_Severity1 = "H";
                                                        }
                                                        else if (Average_Distress1 >= 11 && Average_Distress1 < 31)
                                                        {
                                                            Current_Density_Severity1 = "M";
                                                        }
                                                        else
                                                        {
                                                            Current_Density_Severity1 = "L";
                                                        }

                                                    }

                                                    // Safety Level
                                                    string MR_Value1 = Current_Distress1.ToString();
                                                    // string MR_Value1 = DA.ToString();
                                                    if (Current_Severity1 == "H" & (Current_Distress1 == 4 || Current_Distress1 == 5 || Current_Distress1 == 6 || Current_Distress1 == 9 || Current_Distress1 == 15 || Current_Distress1 == 18 || Current_Distress1 == 19))
                                                        dsthflag1 = true;
                                                    if (Current_Severity1 == "M" & (Current_Distress1 == 4 || Current_Distress1 == 5 || Current_Distress1 == 6 || Current_Distress1 == 9 || Current_Distress1 == 15 || Current_Distress1 == 18 || Current_Distress1 == 19))
                                                        dstmflag1 = true;
                                                    if (Current_Severity1 == "L" & (Current_Distress1 == 4 || Current_Distress1 == 5 || Current_Distress1 == 6 || Current_Distress1 == 9 || Current_Distress1 == 15 || Current_Distress1 == 18 || Current_Distress1 == 19))
                                                        dstlflag1 = true;
                                                    if (((Current_Severity1 == "H") & (Current_Distress1 == 2 || Current_Distress1 == 9 || Current_Distress1 == 11 || Current_Distress1 == 13 || Current_Distress1 == 15)) || (Current_Severity1 == "X" & Current_Distress1 == 12))
                                                        dsthqflag1 = true;
                                                    if ((Current_Severity1 == "M" & (Current_Distress1 == 2 || Current_Distress1 == 9 || Current_Distress1 == 11 || Current_Distress1 == 13 || Current_Distress1 == 15)))
                                                        dstmqflag1 = true;
                                                    if ((Current_Severity1 == "L" & (Current_Distress1 == 2 || Current_Distress1 == 9 || Current_Distress1 == 11 || Current_Distress1 == 13 || Current_Distress1 == 15)))
                                                        dstlqflag1 = true;

                                                    double Average_Area1 = 0;

                                                    if (Current_Distress1 >= 1 && Current_Distress1 < 10)
                                                        MR_Value1 = "0" + System.Convert.ToString(Current_Distress1);
                                                    Severity_Value = Current_Severity1 + Current_Density_Severity1;
                                                    // If Current_Distress = 12 Then Severity_Value = "L" & Current_Density_Severity
                                                    string Suggested_MR_S1 = Calculate_MR(Severity_Value, MR_Value1);
                                                    Suggested_MR1 = Suggested_MR_S1;
                                                    if (int.Parse(Suggested_MR1) < 10)
                                                        Suggested_MR1 = "0" + System.Convert.ToString(Suggested_MR1);
                                                    Average_Area1 = (Average_Distress1 * section_area) / (double)100;

                                                    /////
                                                    string New_MR1 = Suggested_MR1;

                                                    double New_MR_Val1 = 0;
                                                    double cost1 = 0;
                                                    double[] det_mr1 = new double[15];
                                                    double[] det_mr12 = new double[15];
                                                    //double[] det_mr2 = new double[15];

                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) == 5)
                                                    {
                                                        Road_Class_Value1 = 3;
                                                    }
                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) <= 4)
                                                    {
                                                        Road_Class_Value1 = 2;
                                                    }
                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) <= 2)
                                                    {
                                                        Road_Class_Value1 = 1;
                                                    }

                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) == 2)
                                                    {
                                                        if (Suggested_MR1 == "08" || Suggested_MR1 == "09")
                                                        {
                                                            New_MR1 = "10";
                                                        }
                                                        if (Suggested_MR1 == "13")
                                                        {
                                                            New_MR1 = "12";
                                                        }
                                                    }
                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) == 3)
                                                    {
                                                        if (Suggested_MR1 == "07" || Suggested_MR1 == "08" || Suggested_MR1 == "09")
                                                        {
                                                            New_MR1 = "10";
                                                        }
                                                        if (Suggested_MR1 == "11" || Suggested_MR1 == "12" || Suggested_MR1 == "13")
                                                        {
                                                            New_MR1 = "14";
                                                        }
                                                    }

                                                    if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) == 1)
                                                    {
                                                        New_MR_Val1 = (int.Parse(New_MR1) - 1) * 3 + 1;

                                                    }
                                                    else if (int.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString()) == 2)
                                                    {
                                                        New_MR_Val1 = (int.Parse(New_MR1) - 1) * 3 + 2;

                                                    }
                                                    else
                                                    {
                                                        New_MR_Val1 = (int.Parse(New_MR1) - 1) * 3 + 3;

                                                    }

                                                    /// cost1 = MR_Cost(New_MR_Val1);
                                                    cost1 = MR_Cost1[int.Parse(New_MR_Val1.ToString())];
                                                    MR1[int.Parse(Suggested_MR_S1)] = 1;

                                                    try
                                                    {
                                                        Section_Type[int.Parse(Suggested_MR_S1)] = double.Parse(dt.Rows[SE]["ROAD_CLASS"].ToString());
                                                        // Section_Type[int.Parse(Suggested_MR_S1)] = double.Parse(road_class1);
                                                        MR_Cost_Matrix[int.Parse(Suggested_MR_S1), 1] = section_area * cost1;
                                                        //MR_Cost_Matrix[int.Parse(Suggested_MR_S1), 2] = section_area * cost1;
                                                        det_mr12[int.Parse(Suggested_MR_S1)] = section_area;
                                                    }
                                                    catch (Exception ex) { }

                                                    ///Distress_Temp = CStr(Current_Distress)
                                                    //If Current_Distress <= 9 Then Distress_Temp = "0" & CStr(Current_Distress)
                                                    //Current_Maintenance_Cost = Average_Area * cost
                                                    string Distress_Temp1 = "";
                                                    Distress_Temp1 = DA.ToString();
                                                    if (Current_Distress1 <= 9)
                                                    {
                                                        Distress_Temp1 = "0" + DA.ToString();

                                                        Current_Maintenance_Cost = Average_Area1 * cost1;
                                                        MR_Cost_Matrix[int.Parse(Suggested_MR_S1), 1] = MR_Cost_Matrix[int.Parse(Suggested_MR_S1), 1] + Average_Area1 * cost1;
                                                        det_mr1[int.Parse(Suggested_MR_S1)] = det_mr1[int.Parse(Suggested_MR_S1)] + Average_Area1 * cost1;
                                                        Density[int.Parse(Suggested_MR_S1)] = Average_Distress1 + Density[int.Parse(Suggested_MR_S1)];
                                                        Average_Distress1 = Math.Round(Average_Distress1, 2);
                                                    }
                                                }


                                               

                                            }
                                            DA++;
                                        }
                                        double Total_Cost1 = 0;
                                        string temp_string12 = "";
                                        string stj2 = "";
                                        string Current_Distress_Condition_Before = "";
                                        for (int j12 = 0; j12 < 15; j12++)
                                        {
                                            if (MR1[j12] == 1)
                                            {
                                                if (j12 > 0 && j12 <= 9)
                                                {
                                                    stj2 = "0" + j12;
                                                }
                                                else
                                                {
                                                    stj2 = j12.ToString();
                                                }
                                                temp_string12 = temp_string12 + stj2 + " ";
                                                Total_Cost1 = Total_Cost1 + MR_Cost_Matrix[j12, 1];
                                            }
                                        }
                                        Current_Distress_Condition_Before = temp_string12;
                                        double[] S_Type1 = new double[15];
                                       //Budget_Planning_Calculations BuCal = new Budget_Planning_Calculations();
                                       //string SetMandR1 = BuCal.SetMandR(MR1, Section_Type, Density, MR_Cost_Ovrd1, S_Type1, dt.Rows[SE]["Section_No"].ToString());
                                        double[] DET_MR = new double[15];

                                        double[] DET_QTY1 = new double[15];
                                        double[] DET_COST1 = new double[15];
                                        double DET_TC1 = 0;
                                        bool MR_F1 = false;
                                        int DET_K1 = 0;

                                        for (int j2 = 0; j2 < 15; j2++)
                                        {
                                            DET_COST1[j2] = 0;
                                            MR_F1 = false;
                                            if (MR1[j2] == 1)
                                            {
                                                if (j2 > 0 && j2 <= 9)
                                                {
                                                    stj2 = "0" + j2.ToString();

                                                }
                                                else
                                                {
                                                    stj2 = j2.ToString();
                                                }
                                                if (j2 != 1)
                                                {
                                                    DET_K1 = DET_K1 + 1;
                                                    DET_MR[DET_K1 - 1] = double.Parse(stj2);
                                                    MR_F1 = true;
                                                    temp_string12 = temp_string12 + stj2 + "-";

                                                }
                                                if (MR_Cost_Ovrd1[j2] == double.Parse("0"))
                                                {
                                                    Total_Cost1 = Total_Cost1 + MR_Cost_Matrix[j2, 1];
                                                    if (j2 != 1)
                                                    {
                                                        if (MR_F1)
                                                        {
                                                            DET_COST1[DET_K1 - 1] = double.Parse(MR_Cost_Matrix[j2, 1].ToString());

                                                        }

                                                    }
                                                    else
                                                    {
                                                        if (MR_Cost_Matrix[j2, 1] != 0) //if (MR_Cost_Matrix[j2, 2] != 0)
                                                        {
                                                            Total_Cost1 = Total_Cost1 + MR_Cost_Matrix[j2, 1];
                                                            //Total_Cost1 = Total_Cost1 + MR_Cost_Matrix[j2, 2];
                                                            if (j2 != 1)
                                                            {
                                                                if (MR_F1)
                                                                {
                                                                    DET_COST1[DET_K1 - 1] = double.Parse(MR_Cost_Matrix[j2, 1].ToString());
                                                                    // DET_COST1[DET_K1 - 1] = double.Parse(MR_Cost_Matrix[j2, 2].ToString());
                                                                }
                                                            }
                                                            else
                                                            {
                                                                int j21 = j2;
                                                                if (S_Type1[j2] == 1)
                                                                {
                                                                    if (j2 == 5)
                                                                    {
                                                                        j21 = 13;
                                                                    }
                                                                    else if (j2 == 6)
                                                                    {
                                                                        j21 = 14;
                                                                    }
                                                                    else if (j2 == 12)
                                                                    {
                                                                        j21 = 15;
                                                                    }
                                                                    double jk1 = 0;
                                                                    if (Road_Class_Value1 == 1)
                                                                    {
                                                                        jk1 = (j21 - 1) * 3;
                                                                    }
                                                                    else if (Road_Class_Value1 == 2)
                                                                    {
                                                                        jk1 = (j21 - 1) * 3 + 1;
                                                                    }
                                                                    else
                                                                    {
                                                                        jk1 = (j21 - 1) * 3 + 2;
                                                                    }
                                                                    Total_Cost1 = Total_Cost1 + section_area * MR_Cost1[int.Parse(jk1.ToString())];
                                                                    if (jk1 != 1)
                                                                    {
                                                                        if (MR_F1)
                                                                        {
                                                                            DET_COST1[DET_K1 - 1] = double.Parse((section_area * MR_Cost1[int.Parse(jk1.ToString())]).ToString());

                                                                        }
                                                                    }

                                                                    ///////////
                                                                    if (DET_K1 != 0)
                                                                    {
                                                                        if (Road_Class_Value1 == 1)
                                                                        {
                                                                            jk1 = (DET_MR[DET_K1 - 1] - 1) * 3 + 1;
                                                                        }
                                                                        else if (Road_Class_Value1 == 2)
                                                                        {
                                                                            jk1 = (DET_MR[DET_K1 - 1] - 1) * 3 + 2;
                                                                        }
                                                                        else
                                                                        {
                                                                            jk1 = (DET_MR[DET_K1 - 1] - 1) * 3 + 3;
                                                                        }

                                                                        if (MR_F1 && MR_Cost1[int.Parse(jk1.ToString())] != 0)
                                                                        {
                                                                            DET_QTY1[DET_K1 - 1] = double.Parse((DET_COST1[DET_K1 - 1] / MR_Cost1[int.Parse(jk1.ToString())]).ToString());
                                                                        }
                                                                    }
                                                                    //////

                                                                }

                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }
                                        ////end for
                                        if (temp_string12 != "")
                                        {

                                        }
                                        else
                                        {
                                            temp_string12 = "01";
                                        }
                                        string Current_Distress_Condition_After1 = temp_string12;

                                        Current_Maintenance_Cost = Total_Cost1;

                                        // double Current_Special_Treatment_Cost1 = addcost1;
                                        //string  Current_Special_Treatment_Type1 = tstr1;
                                        double Riding_Quality_Value1 = 0;
                                        var sql111 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = 'F1'");
                                        DataTable dtSql111 = (DataTable)sql111;
                                        if (dtSql111.Rows.Count > 0)
                                        {
                                            if (dtSql111.Rows[0]["Maintenance_Factor_Value"].ToString() == "Y")
                                            {
                                                var sql112 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = 'A2'");
                                                DataTable dtsql112 = (DataTable)sql112;
                                                if (dtsql112.Rows.Count > 0)
                                                {
                                                    double pr1 = double.Parse(dtsql112.Rows[0]["Maintenance_Factor_Value"].ToString());
                                                    Riding_Quality_Value1 = 100 * pr1 / pr1;////incorrect formula

                                                }
                                            }
                                            else
                                            {
                                                string sql113 = "";
                                                if (dsthflag1)
                                                {
                                                    sql113 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'Q1'";
                                                }
                                                else if (dstmflag1)
                                                {
                                                    sql113 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'Q2'";
                                                }
                                                else if (dstlflag1)
                                                {
                                                    sql113 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'Q3'";
                                                }
                                                else
                                                {
                                                    sql113 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'Q4'";
                                                }
                                                ///exec  string sql113
                                                var getAll3 = cd.GetData(sql113);
                                                DataTable dtsql113 = (DataTable)getAll3;
                                                if (dtsql113.Rows.Count > 0)
                                                {
                                                    Riding_Quality_Value1 = double.Parse(dtsql113.Rows[0]["Maintenance_Factor_Value"].ToString());
                                                }
                                            }
                                            //////edit
                                            /// }
                                        }
                                        /////

                                        Current_Riding_Quality_Value = Riding_Quality_Value1;
                                        //' computing safety condition value for current section
                                        double Safety_Condition_Value1 = 0;
                                        var sql114 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = 'F2'");
                                        ////exec
                                        DataTable dtsql114 = (DataTable)sql114;
                                        if (dtsql114.Rows.Count > 0)
                                        {
                                            if (dtsql114.Rows[0]["Maintenance_Factor_Value"].ToString() == "Y")
                                            {
                                                var sql115 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = 'A3'");
                                                ///exec sql115
                                                DataTable dtsql115 = (DataTable)sql115;
                                                double pr1 = 0;
                                                if (dtsql115.Rows.Count > 0)
                                                {
                                                    pr1 = double.Parse(dtsql115.Rows[0]["Maintenance_Factor_Value"].ToString());
                                                    Safety_Condition_Value1 = 100 - pr1;

                                                }
                                                else
                                                {
                                                    string sql116 = "";
                                                    if (dsthqflag1)
                                                    {
                                                        sql116 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'S1'";

                                                    }
                                                    else if (dstmqflag1)
                                                    {
                                                        sql116 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'S2'";
                                                    }
                                                    else if (dstlqflag1)
                                                    {
                                                        sql116 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'S3'";
                                                    }
                                                    else
                                                    {
                                                        sql116 = "Select * from Maintenance_Factors Where Maintenance_Factor_No = 'S4'";
                                                    }
                                                    ///exec sql116
                                                    var getAll6 = cd.GetData(sql116);
                                                    DataTable dtsql116 = new DataTable();
                                                    if (dtsql116.Rows.Count > 0)
                                                    {
                                                        Safety_Condition_Value1 = double.Parse(dtsql116.Rows[0]["Maintenance_Factor_Value"].ToString());

                                                    }
                                                }

                                                ///////////////edit
                                            }
                                        }
                                        /////
                                        Current_Safety_Condition_Value = Safety_Condition_Value1;
                                        /// GoTo Record_Update
                                        int Sql_tempF = connection.Execute("Update Pavement_Condition Set Safety_Condition_Value = " + Current_Safety_Condition_Value + ", Distress_Condition_Before ='" + Current_Distress_Condition_Before + "', Distress_Condition_After ='" + Current_Distress_Condition_After1 + "', Maintenance_Cost ='" + Current_Maintenance_Cost + "', Special_Treatment_Cost ='" + Current_Special_Treatment_Cost1 + "', Special_Treatment_Type ='" + Current_Special_Treatment_Type1 + "', Riding_Quality_Value ='" + Current_Riding_Quality_Value + "' " +
                                            "WHERE Section_No ='" + dt.Rows[SE]["Section_No"].ToString() + "'");
                                        ///exec sql_tempf
                                        if (DET_K1 == 5)
                                        {
                                            if (SP_DET1 == 0)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO, DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_MR5,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_QTY5,DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_COST5, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_MR[4] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + DET_QTY1[4] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + DET_COST1[4] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 1)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO, DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_MR5,DET_SP1, DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_QTY5,DET_SPQTY1, DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_COST5,DET_SPCOST1, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_MR[4] + "," + SP_TRT1[0] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + DET_QTY1[4] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + DET_COST1[4] + "," + SP_CST1[0] + "," + DET_TC1 + ")");


                                            }
                                            else if (SP_DET1 == 2)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_MR5,DET_SP1,DET_SP2,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_QTY5,DET_SPQTY1,DET_SPQTY2 ,DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_COST5,DET_SPCOST1,DET_SPCOST2, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_MR[4] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + DET_QTY1[4] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + DET_COST1[4] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 3)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_MR5,DET_SP1,DET_SP2,DET_SP3, DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_QTY5,DET_SPQTY1,DET_SPQTY2,DET_SPQTY3, DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_COST5,DET_SPCOST1,DET_SPCOST2,DET_SPCOST3, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_MR[4] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + DET_QTY1[4] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + SP_QTY1[2] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + DET_COST1[4] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + SP_CST1[2] + "," + DET_TC1 + ")");

                                            }
                                            //EXEC sql_tempF1
                                        }
                                        else if (DET_K1 == 4)
                                        {
                                            if (SP_DET1 == 0)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_COST1,DET_COST2,DET_COST3,DET_COST4, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 1)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_SP1, DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_SPQTY1, DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_SPCOST1, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + SP_TRT1[0] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + SP_CST1[0] + "," + DET_TC1 + ")");

                                            }
                                            else if (SP_DET1 == 2)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_SP1,DET_SP2,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_SPQTY1,DET_SPQTY2 ,DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_SPCOST1,DET_SPCOST2, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 3)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_SP1,DET_SP2,DET_SP3, DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_SPQTY1,DET_SPQTY2,DET_SPQTY3, DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_SPCOST1,DET_SPCOST2,DET_SPCOST3, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_QTY1[3] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + SP_QTY1[2] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_COST1[3] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + SP_CST1[2] + "," + DET_TC1 + ")");
                                            }
                                            ////EXEC SQL_TEMPF1

                                        }
                                        else if (DET_K1 == 3)
                                        {
                                            if (SP_DET1 == 0)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_QTY1,DET_QTY2,DET_QTY3,DET_COST1,DET_COST2,DET_COST3, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 1)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_SP1, DET_QTY1,DET_QTY2,DET_QTY3,DET_SPQTY1, DET_COST1,DET_COST2,DET_COST3,DET_SPCOST1, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + SP_TRT1[0] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + SP_CST1[0] + "," + DET_TC1 + ")");

                                            }
                                            else if (SP_DET1 == 2)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_SP1,DET_SP2,DET_QTY1,DET_QTY2,DET_QTY3,DET_SPQTY1,DET_SPQTY2 ,DET_COST1,DET_COST2,DET_COST3,DET_SPCOST1,DET_SPCOST2, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 3)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_SP1,DET_SP2,DET_SP3, DET_QTY1,DET_QTY2,DET_SPQTY1,DET_SPQTY2,DET_SPQTY3, DET_COST1,DET_COST2,DET_SPCOST1,DET_SPCOST2,DET_SPCOST3, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_QTY1[2] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + SP_QTY1[2] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_COST1[2] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + SP_CST1[2] + "," + DET_TC1 + ")");
                                            }
                                            //////exec sql_tempF1

                                        }
                                        else if (DET_K1 == 2)
                                        {
                                            if (SP_DET1 == 0)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_QTY1,DET_QTY2,DET_COST1,DET_COST2, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 1)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_SP1, DET_QTY1,DET_QTY2,DET_SPQTY1, DET_COST1,DET_COST2,DET_SPCOST1, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + SP_TRT1[0] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + SP_CST1[0] + "," + DET_TC1 + ")");

                                            }
                                            else if (SP_DET1 == 2)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_SP1,DET_SP2,DET_QTY1,DET_QTY2,DET_SPQTY1,DET_SPQTY2 ,DET_COST1,DET_COST2,DET_SPCOST1,DET_SPCOST2, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 3)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_SP1,DET_SP2,DET_SP3, DET_QTY1,DET_QTY2,DET_SPQTY1,DET_SPQTY2,DET_SPQTY3, DET_COST1,DET_COST2,DET_SPCOST1,DET_SPCOST2,DET_SPCOST3, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_MR[1] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + DET_QTY1[1] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + SP_QTY1[2] + "," + DET_COST1[0] + "," + DET_COST1[1] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + SP_CST1[2] + "," + DET_TC1 + ")");
                                            }
                                            ////exec sql_tempF1
                                        }////
                                        else if (DET_K1 == 1)
                                        {
                                            if (SP_DET1 == 0)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_QTY1,DET_COST1, DET_COST )values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + DET_QTY1[0] + "," + DET_COST1[0] + "," + DET_TC1 + ")");

                                            }
                                            else if (SP_DET1 == 1)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_SP1, DET_QTY1,DET_SPQTY1, DET_COST1,DET_SPCOST1, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + SP_TRT1[0] + "," + DET_QTY1[0] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + SP_CST1[0] + "," + DET_TC1 + ")");

                                            }
                                            else if (SP_DET1 == 2)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_SP1,DET_SP2,DET_QTY1,DET_SPQTY1,DET_SPQTY2 ,DET_COST1,DET_SPCOST1,DET_SPCOST2, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + SP_QTY1[0] + "," + DET_COST1[0] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + DET_TC1 + ")");
                                            }
                                            else if (SP_DET1 == 3)
                                            {
                                                int Sql_tempF1 = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_SP1,DET_SP2,DET_SP3, DET_QTY1,DET_SPQTY1,DET_SPQTY2,DET_SPQTY3, DET_COST1,DET_SPCOST1,DET_SPCOST2,DET_SPCOST3, DET_COST ) values ('" + dt.Rows[SE]["Section_No"].ToString() + "'," + DET_MR[0] + "," + SP_TRT1[0] + "," + SP_TRT1[1] + "," + SP_TRT1[2] + "," + DET_QTY1[0] + "," + SP_QTY1[0] + "," + SP_QTY1[1] + "," + SP_QTY1[2] + "," + DET_COST1[0] + "," + SP_CST1[0] + "," + SP_CST1[1] + "," + SP_CST1[2] + "," + DET_TC1 + ")");
                                            }
                                            ////exec sql_tempF1
                                        }///////end if det_k1
                                         ///
                                        Previous_Contractor_No1 = int.Parse(Current_Contractor_No);
                                        /////  }

                                        ////  }

                                        //////////////////////////////////////////////
                                        //      }
                                        //  }




                                    }
                                }
                                else
                                {
                                    result = "M&R Computations aborted. Please run Section PCI Calculation first. secno " + i;
                                }

                            }
                        }
                        else
                        {
                            result = "M&R Computations aborted. Please run Section PCI Calculation first.";
                        }

                    }
                }

                else
                {
                    result = "please choose city / area/zone or contractor";
                }

            

                //'********************************************
                //'processing sidewalks/median costs
                //'********************************************
                int[] MRO1 = new int[8];
                int[] MRQ1 = new int[8];
                int[] MRD1 = new int[8];
                int[] MRC1 = new int[8];
                double[] SW_Med_Range1 = new double[9];
                double[] SW_Med_MR1 = new double[9];
                int[] SW_Med_Ftr1 = new int[4];
                int[] SW_Med_Cost1 = new int[4];
                int[] SW_Med_SPCost1 = new int[4];
                bool swmflag1 = false;
                int Distress_No1 = 0;
                int Previous_Contractor_No2 = -1;

                //                    Dim MRO(8) As Integer, MRQ(8) As Single, MRD(8) As Single, MRC(8) As Single
                //Dim SW_Med_Range(9) As Long, SW_Med_MR(9) As Integer
                //Dim SW_Med_Ftr(4) As Integer, SW_Med_Cost(4) As Single, SW_Med_SPCost(4) As Single, swmflag As Boolean, Distress_No As Integer
                //Previous_Contractor_No = -1
              
                // By Belal
                
                //if (City != "" && area != "" && zone != "" || contractor_no != "")
                //{
                //    if (contractor_no != "")
                //    {
                //        if (contractor_no.Length == 1)
                //        {
                //            contractor_no = "0" + contractor_no;
                //        }

                //        var GetAll3 = cd.GetData("Select * from Section_Objects where contractor_no = " + contractor_no + " order by Section_No asc");
                //        dt = (DataTable)GetAll3;
                //    }
                //    else if (City != "" && zone == "" && area == "")
                //    {
                //        if (City.Length == 1)
                //        {
                //            City = "0" + City;
                //        }
                //        var GetAll3 = connection.Query<PMMS.Northwind.ItemSelect>("Select * from Section_Objects where substr(section_no,1,2)= '" + City + "' order by Section_No asc");
                //        dt = (DataTable)GetAll3;

                //    }
                //    else if (City != "" && zone != "" && area == "")
                //    {
                //        if (City.Length == 1)
                //        {
                //            City = "0" + City;
                //        }
                //        if (zone.Length == 1)
                //        {
                //            zone = "0" + zone;

                //        }

                //        var GetAll3 = connection.Query<PMMS.Northwind.ItemSelect>("Select * from Section_Objects where substr(section_no,1,4)= '" + City + zone + "' order by Section_No asc");
                //        dt = (DataTable)GetAll3;

                //    }
                //    else if (City != "" && zone != "" && area != "")
                //    {
                //        if (City.Length == 1)
                //        {
                //            City = "0" + City;
                //        }
                //        if (zone.Length == 1)
                //        {
                //            zone = "0" + zone;
                //        }
                //        if (area.Length == 1)
                //        {
                //            area = "00" + area;
                //        }
                //        else if (area.Length == 2)
                //        {
                //            area = "0" + area;
                //        }
                //        var GetAll3 = connection.Query<PMMS.Northwind.ItemSelect>("Select * from Section_Objects where substr(section_no,1,7)= '" + City + zone + area + "' order by Section_No asc");
                //        dt = (DataTable)GetAll3;
                //    }

                //    for (int SEW = 0; SEW < dt.Rows.Count; SEW++)
                //    {


                //        /////for
                //        for (int s = 0; s < 8; s++)
                //        {
                //            string Current_MR_Section_No = "MC8" + s;
                //            var GetAll3 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No + "'");/// & "'" & Current_MR_Section_No & "'
                //            DataTable dtTest = (DataTable)GetAll3;
                //            if (dtTest.Rows.Count > 0)
                //            {
                //                SW_Med_Range1[9 - s] = double.Parse(dtTest.Rows[s]["Maintenance_Factor_Value"].ToString());
                //            }
                //            Current_MR_Section_No = "MC9" + s;
                //            var GetAll9 = cd.GetDataFromTable(AllGonfigTb, " Maintenance_Factor_No = '" + Current_MR_Section_No + "'");/// & "'" & Current_MR_Section_No & "'
                //            DataTable dtTest9 = (DataTable)GetAll3;
                //            if (dtTest9.Rows.Count > 0)
                //            {
                //                SW_Med_MR1[9 - s] = double.Parse(dtTest9.Rows[s]["Maintenance_Factor_Value"].ToString());
                //            }

                //        }

                //        for (int ksw = 1; ksw < 8; ksw++)
                //        {
                //            MRO1[ksw] = 0;
                //            MRO1[ksw] = 0;
                //            MRD1[ksw] = 0;
                //            MRC1[ksw] = 0;
                //        }
                //        string Current_Section_No = dt.Rows[SEW]["section_no"].ToString();
                //        double[] MR_Cost = new double[8];
                //        string Current_Contractor_No = contractor_no;


                //        int Sql_tempSew = connection.Execute("Update Pavement_Condition Set Maintenance_Cost = NULL, Maintenance_Priority = Null,Distress_Condition_Before = Null, Distress_Condition_After = Null,Special_Treatment_Cost = Null, Special_Treatment_Type = Null,Special_Treatment_Description = Null WHERE Section_No ='" + Current_Section_No + "'");
                //        int Sql_tempsew1 = connection.Execute("Delete from Detail_MR_Data WHERE Section_No ='" + Current_Section_No + "'");

                //        int ks = 0;
                //        var sql = cd.GetData("Select * from Pavement_Condition where Section_No = '" + Current_Section_No + "'");
                //        DataTable dt_pc = (DataTable)sql;
                //        if (dt_pc.Rows.Count > 0)
                //        {
                //            for (int i = 0; i < dt_pc.Rows.Count; i++)
                //            {
                //                if (Previous_Contractor_No2 != int.Parse(Current_Contractor_No))
                //                {
                //                    for (int ksw2 = 1; ksw2 < 8; ksw2++)
                //                    {
                //                        var sqlksw2 = cd.GetData("Select * from Contractor_Maintenance_Cost Where Maintenance_Cost_ID = '" + ksw2 + "m' and Contractor_No = " + Current_Contractor_No + "");
                //                        DataTable dtsqlksw2 = (DataTable)sqlksw2;
                //                        MR_Cost[ksw2] = double.Parse(dtsqlksw2.Rows[0]["Maintenance_Cost_Value"].ToString());
                //                    }

                //                }

                //                string Current_Distress_Condition_Before = "";
                //                double Distress_SumSW = 0;
                //                int Sel_MR1;
                //                var SQL11 = cd.GetData("Select * from Distress_Samples Where Section_No = '" + Current_Section_No + "'");
                //                DataTable dtSQL11 = (DataTable)SQL11;
                //                if (dtSQL11.Rows.Count == 1)
                //                {
                //                    int distress_countSW = 0;
                //                    for (int Current_DistressSW = 1; Current_DistressSW < 6; Current_DistressSW++)
                //                    {
                //                        if (dtSQL11.Rows[Current_DistressSW]["Distress_0"].ToString() != "")
                //                        {
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_0"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_0"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_1"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_1"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_2"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_2"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_3"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_3"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_4"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_4"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_5"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_5"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_6"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_6"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_7"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_7"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_8"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_8"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_9"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_9"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_10"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_10"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_11"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_11"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_12"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_12"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_13"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_13"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_14"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_14"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_15"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_15"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_16"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_16"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_17"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_17"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_18"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_18"].ToString());
                //                            }
                //                            if (dtSQL11.Rows[Current_DistressSW]["Distress_19"].ToString() == Current_DistressSW.ToString())
                //                            {
                //                                distress_countSW = distress_countSW + 1;
                //                                Distress_SumSW = Distress_SumSW + double.Parse(dtSQL11.Rows[Current_DistressSW]["Quantity_19"].ToString());
                //                            }
                //                            /// int Sel_MR;
                //                            double ObjDenSW = 0;
                //                            if (distress_countSW > 0)
                //                            {

                //                                Sel_MR1 = 0;
                //                                if (Current_DistressSW == 1 || Current_DistressSW == 2 || Current_DistressSW == 4)
                //                                {
                //                                    ObjDenSW = Distress_SumSW / (double.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString()) * double.Parse(dt.Rows[SEW]["SECTION_WIDTH"].ToString())) * 100;
                //                                }
                //                                else
                //                                {
                //                                    ObjDenSW = Distress_SumSW / (double.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString())) * 100;
                //                                }

                //                                if (ObjDenSW <= 10)
                //                                {
                //                                    if (Current_DistressSW == 1)
                //                                    {
                //                                        Sel_MR1 = 1;
                //                                    }
                //                                    else if (Current_DistressSW == 2)
                //                                    {
                //                                        Sel_MR1 = 7;
                //                                    }
                //                                    else if (Current_DistressSW == 3)
                //                                    {
                //                                        Sel_MR1 = 1;
                //                                    }
                //                                    else if (Current_DistressSW == 4)
                //                                    {
                //                                        Sel_MR1 = 7;
                //                                    }
                //                                    else if (Current_DistressSW == 5)
                //                                    {
                //                                        Sel_MR1 = 4;
                //                                    }
                //                                    else if (Current_DistressSW == 6)
                //                                    {
                //                                        Sel_MR1 = 4;
                //                                    }

                //                                }
                //                                else if (ObjDenSW > 10 && ObjDenSW <= 60)
                //                                {
                //                                    if (Current_DistressSW == 1)
                //                                    {
                //                                        Sel_MR1 = 7;
                //                                    }
                //                                    else if (Current_DistressSW == 2)
                //                                    {
                //                                        Sel_MR1 = 8;
                //                                    }
                //                                    else if (Current_DistressSW == 3)
                //                                    {
                //                                        Sel_MR1 = 1;
                //                                    }
                //                                    else if (Current_DistressSW == 4)
                //                                    {
                //                                        Sel_MR1 = 7;
                //                                    }
                //                                    else if (Current_DistressSW == 5)
                //                                    {
                //                                        Sel_MR1 = 5;
                //                                    }
                //                                    else if (Current_DistressSW == 6)
                //                                    {
                //                                        Sel_MR1 = 4;
                //                                    }

                //                                }
                //                                else if (ObjDenSW > 60)
                //                                {
                //                                    if (Current_DistressSW == 1)
                //                                    {
                //                                        Sel_MR1 = 8;
                //                                    }
                //                                    else if (Current_DistressSW == 2)
                //                                    {
                //                                        Sel_MR1 = 8;
                //                                    }
                //                                    else if (Current_DistressSW == 3)
                //                                    {
                //                                        Sel_MR1 = 6;
                //                                    }
                //                                    else if (Current_DistressSW == 4)
                //                                    {
                //                                        Sel_MR1 = 8;
                //                                    }
                //                                    else if (Current_DistressSW == 5)
                //                                    {
                //                                        Sel_MR1 = 5;
                //                                    }
                //                                    else if (Current_DistressSW == 6)
                //                                    {
                //                                        Sel_MR1 = 5;
                //                                    }
                //                                }
                //                                double MR_QTY = 0;
                //                                MRO1[Sel_MR1] = 1;
                //                                MRQ1[Sel_MR1] = MRQ1[Sel_MR1] + int.Parse(Distress_SumSW.ToString());
                //                                if (Current_DistressSW == 1 || Current_DistressSW == 2 || Current_DistressSW == 4)
                //                                {
                //                                    MR_QTY = double.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString()) * double.Parse(dt.Rows[SEW]["SECTION_WIDTH"].ToString());
                //                                    if (MRQ1[Sel_MR1] > MR_QTY)
                //                                    {
                //                                        MRQ1[Sel_MR1] = int.Parse(MR_QTY.ToString());
                //                                    }
                //                                }
                //                                else
                //                                {
                //                                    MR_QTY = double.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString());
                //                                    if (MRQ1[Sel_MR1] > MR_QTY)
                //                                    {
                //                                        MRQ1[Sel_MR1] = int.Parse(MR_QTY.ToString());

                //                                    }
                //                                    MRD1[Sel_MR1] = MRQ1[Sel_MR1] / int.Parse(MR_QTY.ToString()) * 100;
                //                                    Current_Distress_Condition_Before = Current_Distress_Condition_Before + "0" + Sel_MR1 + " ";
                //                                }
                //                                distress_countSW = 0;
                //                            }
                //                        }
                //                    }/////end distress

                //                    bool Pass = true;
                //                    while (Pass != false)
                //                    {
                //                        Pass = false;
                //                        if (MRO1[1] == 1 && MRO1[2] == 1 || MRO1[5] == 1 || MRO1[6] == 1 || MRO1[7] == 1 || MRO1[8] == 1)
                //                        {
                //                            MRO1[1] = 0;
                //                            Pass = true;
                //                            ////goto nextitr                                           
                //                        }
                //                        if (MRO1[2] == 1 && (MRO1[3] == 1 || MRO1[7] == 1 || MRO1[8] == 1))
                //                        {
                //                            MRO1[2] = 0;
                //                            Pass = true;
                //                            ///goto nextitr

                //                        }
                //                        if (MRO1[3] == 1 && (MRO1[7] == 1 || MRO1[8] == 1))
                //                        {
                //                            MRO1[3] = 0;
                //                            Pass = true;
                //                            ///goto nextitr
                //                        }
                //                        if (MRO1[4] == 1 && MRO1[5] == 1)
                //                        {
                //                            MRO1[4] = 0;
                //                            Pass = true;
                //                            ///go to nextitr
                //                        }
                //                        if (MRO1[7] == 1 && MRO1[8] == 1)
                //                        {
                //                            MRO1[7] = 0;
                //                            Pass = true;
                //                            ///go to nextitr
                //                        }

                //                        /////////////go to nextitr

                //                        for (int KFS = 2; KFS < 8; KFS++)
                //                        {
                //                            if (MRO1[KFS] == 1)
                //                            {
                //                                if (MRD1[KFS] > SW_Med_Range1[KFS])
                //                                {
                //                                    Sel_MR1 = int.Parse(SW_Med_MR1[KFS].ToString());
                //                                    if (Sel_MR1 != KFS)
                //                                    {
                //                                        MRO1[KFS] = 0;
                //                                        MRO1[Sel_MR1] = 1;
                //                                    }
                //                                    if (Sel_MR1 == 2 || Sel_MR1 == 3 || Sel_MR1 == 7 || Sel_MR1 == 8)
                //                                    {
                //                                        MRQ1[KFS] = int.Parse((double.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString()) * double.Parse(dt.Rows[SEW]["SECTION_WIDTH"].ToString())).ToString());

                //                                    }
                //                                    else
                //                                    {
                //                                        MRQ1[KFS] = int.Parse(dt.Rows[SEW]["SECTION_LENGTH"].ToString());
                //                                    }
                //                                }
                //                            }
                //                            //////////
                //                        }//////////end for
                //                        string Current_Distress_Condition_AfterSW = "";
                //                        double Current_Maintenance_Cost = 0;
                //                        int k1 = 0;
                //                        int DET_TC = 0;
                //                        string[] DET_MR = new string[15];
                //                        int[] DET_QTY = new int[15];
                //                        double[] DET_COST = new double[15];
                //                        int DET_K1 = 0;

                //                        for (int KFS2 = 2; KFS2 < 8; KFS2++)
                //                        {
                //                            if (MRO1[KFS2] == 1)
                //                            {
                //                                Current_Distress_Condition_AfterSW = Current_Distress_Condition_AfterSW + "0" + KFS2 + " ";
                //                                Current_Maintenance_Cost = Current_Maintenance_Cost + MRQ1[KFS2] * MR_Cost[KFS2];
                //                                DET_MR[k1] = "0" + KFS2;
                //                                DET_QTY[k1] = MRQ1[KFS2];
                //                                DET_COST[k1] = MRQ1[KFS2] * MR_Cost[KFS2];
                //                                DET_TC = DET_TC + int.Parse(DET_COST[k1].ToString());
                //                                k1 = k1 + 1;
                //                            }
                //                        }
                //                        DET_K1 = k1;
                //                        int Sql_tempFF = connection.Execute("Update Pavement_Condition Set Distress_Condition_Before ='" + Current_Distress_Condition_Before + "', Distress_Condition_After ='" + Current_Distress_Condition_AfterSW + "', Maintenance_Cost ='" + Current_Maintenance_Cost + "' WHERE Section_No =" + Current_Section_No + "");
                //                        if (DET_K1 == 5)
                //                        {
                //                            int Sql_tempFFs = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO, DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_MR5,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_QTY5,DET_COST1,DET_COST2,DET_COST3,DET_COST4,DET_COST5, DET_COST ) values ('" + Current_Section_No + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_MR[4] + "," + DET_QTY[0] + "," + DET_QTY[1] + "," + DET_QTY[2] + "," + DET_QTY[3] + "," + DET_QTY[4] + "," + DET_COST[0] + "," + DET_COST[1] + "," + DET_COST[2] + "," + DET_COST[3] + "," + DET_COST[4] + "," + DET_TC + ")");

                //                        }
                //                        else if (DET_K1 == 4)
                //                        {
                //                            int Sql_tempFFs = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_MR4,DET_QTY1,DET_QTY2,DET_QTY3,DET_QTY4,DET_COST1,DET_COST2,DET_COST3,DET_COST4, DET_COST ) values ('" + Current_Section_No + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_MR[3] + "," + DET_QTY[0] + "," + DET_QTY[1] + "," + DET_QTY[2] + "," + DET_QTY[3] + "," + DET_COST[0] + "," + DET_COST[1] + "," + DET_COST[2] + "," + DET_COST[3] + "," + DET_TC + ")");
                //                        }
                //                        else if (DET_K1 == 3)
                //                        {
                //                            int Sql_tempFFs = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_MR3,DET_QTY1,DET_QTY2,DET_QTY3,DET_COST1,DET_COST2,DET_COST3, DET_COST ) values ('" + Current_Section_No + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_MR[2] + "," + DET_QTY[0] + "," + DET_QTY[1] + "," + DET_QTY[2] + "," + DET_COST[0] + "," + DET_COST[1] + "," + DET_COST[2] + "," + DET_TC + ")");
                //                        }
                //                        else if (DET_K1 == 2)
                //                        {
                //                            int Sql_tempFFs = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_MR2,DET_QTY1,DET_QTY2,DET_COST1,DET_COST2, DET_COST ) values ('" + Current_Section_No + "'," + DET_MR[0] + "," + DET_MR[1] + "," + DET_QTY[0] + "," + DET_QTY[1] + "," + DET_COST[0] + "," + DET_COST[1] + "," + DET_TC + ")");

                //                        }
                //                        else if (DET_K1 == 1)
                //                        {
                //                            int Sql_tempFFs = connection.Execute("Insert into DETAIL_MR_DATA (SECTION_NO,DET_MR1,DET_QTY1,DET_COST1, DET_COST ) values ('" + Current_Section_No + "'," + DET_MR[0] + "," + DET_QTY[0] + "," + DET_COST[0] + "," + DET_TC + ")");
                //                        }

                //                        /////end go
                //                        result = "Maintenance Cost Computations Completed Successfully." + DateTime.Now;
                //                    }


                //                }







                //            }
                //        }
                //        else
                //        {
                //            result = "M&R Computations aborted. Please run Section PCI Calculation first.";
                //        }
                //    }
                //    ///end for


                //}
                //else
                //{
                //    result = "choose city & zone & area & contractor no S";
                //}


                // End By Belal


                //'********************************************
                //'End processing sidewalks/median costs
                //'********************************************
                return result;
            }
            catch (Exception ex)
            {

                var st = new StackTrace(ex, true);
                // Get the top stack frame
                var frame = st.GetFrame(0);
                // Get the line number from the stack frame
                var line = frame.GetFileLineNumber();
                return "there are problem : " + ex.Message + line.ToString();
            }
        }

        public string Calculate_MR(string Severity_Value, string MR_Value)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();
            string selmr = "0";
            /////////////////////////////////
            string sql = "Select * from Maintenance_Selection Where Maintenance_Selection_No = '" + MR_Value + "'";
            ////exec sql
            DataTable dt = cd.GetData(sql);// new DataTable();
            if (dt.Rows.Count > 0)
            {
                if (Severity_Value == "LL")
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


            return selmr;
        }

        public string Distress_Catenate(string[] Distress_Array, int k, string Dststr)
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
                    Temp_Sort_Array[j] = int.Parse(Distress_Array[M]);
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

        public string Two_Digit(string str) {
            
                if (str.Length == 1)
                    str = "0" + str;
                else
                    str = str;

            return str;
            }
    }
}