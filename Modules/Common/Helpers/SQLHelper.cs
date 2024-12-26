using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PMMS.Common.Helpers
{
    public class SQLHelper
    {

        public HafriaRejectItem RejectHafria(string name)
        {
            string actualDate = DateTime.Now.AddYears(-5).ToString("dd/MM/yyyy");
            string sql = string.Format(@"UPDATE HAFRIA_JOBS SET STATUS_CODE='RJOB',END_ROAD_JOB_DATE='{0}' where ROAD_JOB_ID ='{1}'", actualDate, "" + name);

            var queryParameters2 = new DynamicParameters();

            queryParameters2.Add("@CmdContent", sql);
            queryParameters2.Add("@WorkOrderId", name);
            queryParameters2.Add("@IsDone", "0");

            HafriaRejectItem HF = new HafriaRejectItem();
            HF.SQL = "INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)";
            HF.para = queryParameters2;

            return HF;
        }

        public class HafriaRejectItem
        {
            public DynamicParameters para { get; set; }
            public string SQL { get; set; }

        }


        public DataTable GetData(string command)
        {
            DataTable ds = new DataTable();

            SqlCommand cmd = new SqlCommand();


            using (SqlConnection sqlCon = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString))
            {
                cmd.Connection = sqlCon;
                cmd.CommandType = CommandType.Text;
                cmd.CommandText = command;
                SqlDataAdapter adap = new SqlDataAdapter(cmd);
                adap.Fill(ds);
            };

            return ds;
        }


        public DataTable GetDataFromTable(DataTable dt,string Exp)
        {

            DataTable newTb = new DataTable();
            DataRow[] rows = dt.Select(Exp);
            if (rows.Length > 0)
            {
                newTb = rows.CopyToDataTable();
            }

            return newTb;
        }



        public DataTable ExecuteCommand(string CommandName, CommandType cmdType)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);

            SqlCommand cmd = null;
            DataTable table = new DataTable();

            cmd = con.CreateCommand();

            cmd.CommandType = cmdType;
            cmd.CommandText = CommandName;

            try
            {
                con.Open();

                SqlDataAdapter da = null;
                using (da = new SqlDataAdapter(cmd))
                {
                    da.Fill(table);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                cmd.Dispose();
                cmd = null;
                con.Close();
            }

            return table;
        }

        public DataTable ExecuteCommand(string CommandName,
                         CommandType cmdType, SqlParameter[] param)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);

            SqlCommand cmd = null;
            DataTable table = new DataTable();

            cmd = con.CreateCommand();

            cmd.CommandType = cmdType;
            cmd.CommandText = CommandName;
            cmd.Parameters.AddRange(param);

            try
            {
                con.Open();

                SqlDataAdapter da = null;
                using (da = new SqlDataAdapter(cmd))
                {
                    da.Fill(table);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                cmd.Dispose();
                cmd = null;
                con.Close();
            }

            return table;
        }






        public bool ExecuteNonQuery(string CommandName, CommandType cmdType, SqlParameter[] pars)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            SqlCommand cmd = null;
            int res = 0;

            cmd = con.CreateCommand();

            cmd.CommandType = cmdType;
            cmd.CommandText = CommandName;
            cmd.Parameters.AddRange(pars);

            try
            {
                con.Open();

                res = cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                cmd.Dispose();
                cmd = null;
                con.Close();
            }

            if (res >= 1)
            {
                return true;
            }
            return false;
        }


        public bool ExecuteNonQuery(string CommandName)
        {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            SqlCommand cmd = null;
            int res = 0;

            cmd = con.CreateCommand();

            cmd.CommandType = CommandType.Text;
            cmd.CommandText = CommandName;
         

            try
            {
                con.Open();

                res = cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                cmd.Dispose();
                cmd = null;
                con.Close();
            }

            if (res >= 1)
            {
                return true;
            }
            return false;
        }
    }
}