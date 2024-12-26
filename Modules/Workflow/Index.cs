
namespace PMMS.Apps.Workflow
{
    using Kendo.Mvc.UI;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System.Linq;
    using System.Web.Mvc;
    [RoutePrefix("Apps/Workflow"), Route("{action=index}")]
    [PageAuthorize(typeof(PMMS.Default.Entities.AreasRow))]
    public class WorkflowController : Controller
    {
        public ActionResult Index()
        {
         
            return null;
        }
        public JsonResult role()
        {
            return Json(  GetContractNumber(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Refresh_Inbox(string k3,string CURSEL)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            string SQL_I="";
            string CUR_USER_ROLE = getUserRole();
            string cno = GetContractNumber();
           
           

            if (CUR_USER_ROLE == "EPPMS_PROJECT_ENGINEER")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events, wf_messages where mid=wf_type and section_no like '" + CURSEL + "%' and WF_Type in ('PD2PE','SY2PE','GD2PE') and WF_Token = 1 order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('PD2PE','SY2PE','GD2PE') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_PROJECT_DIRECTOR")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events, wf_messages where mid=wf_type and section_no like '" + CURSEL + "%' and WF_Type in ('MD2PD','PE2PD') and WF_Token = 1 order by section_no asc ";
                }
                else
                {
                    // SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " _
                    // & " from wf_events wf, section_details sd where mid=wf_type and wf.section_no like '" & CURSEL _
                    // & "%' and WF_Type in ('MD2PD','PE2PD') and WF_Token = 1 and sd.Section_No=wf.Section_No and sd.road_class =" & k3 & " order by wf.section_no asc "
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('MD2PD','PE2PD') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_MAINTENANCE_DIRECTOR")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co  " + "from wf_events, wf_messages where mid = wf_type and section_no like '" + CURSEL + "%' and WF_Token = 1 and WF_Type in ('GD2MD','PD2MD','SE2MD') order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('GD2MD','PD2MD','SE2MD') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_GENERAL_DIRECTOR")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co  " + "from wf_events, wf_messages where mid = wf_type and section_no like '" + CURSEL + "%' and WF_Token = 1 and WF_Type in ('CO2GD','MD2GD','MD2GD2') order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('CO2GD','MD2GD','MD2GD2') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_CONTRACTOR")
            {

                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select distinct mid, wf.time_stamp ts, wf.section_no secno, wf.actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_mr_data wf1,wf_messages where mid=wf_type and wf.section_no = wf1.section_no and wf.section_no like '" + CURSEL + "%'  and WF_Token = 1 and WF_Type in ('QE2CO','GD2CO','SE2CO') and wf1.contractor='" + cno + "' order by wf.section_no asc ";
                }
                else
                {
                    SQL_I = "select distinct mid, wf.time_stamp ts, wf.section_no secno, wf.actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf,wf_mr_data wf1, wf_messages, section_details sd where mid=wf_type and and wf.section_no = wf1.section_no and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('QE2CO','GD2CO','SE2CO') and WF_Token = 1 and sd.road_class =" + k3 + "  and wf1.contractor='" + cno + "' order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_QUALITY_ENGINEER")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events,  wf_messages where mid=wf_type and section_no like '" + CURSEL + "%'  and WF_Token = 1 and WF_Type in ('CO2QE', 'LE2QE')  order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('CO2QE', 'LE2QE') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_LAB_ENGINEER")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events, wf_messages where mid=wf_type and section_no like '" + CURSEL + "%' and WF_Type in ('QE2LE') and WF_Token = 1 order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('QE2LE') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_SUPERVISING_ENGINEER")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events, wf_messages where mid=wf_type and section_no like '" + CURSEL + "%' and WF_Type in ('MD2SE','QE2SE') and WF_Token = 1 order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('MD2SE','QE2SE') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }
            }
            else if (CUR_USER_ROLE == "EPPMS_SYSTEM_ADMINISTRATOR")
            {
                if (k3 == "" | k3 == "0")
                {
                    SQL_I = "select mid, time_stamp ts, section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events, wf_messages where mid=wf_type and section_no like '" + CURSEL + "%' and WF_Type in ('PE2SA') and WF_Token = 1 order by section_no asc ";
                }
                else
                {
                    SQL_I = "select mid, time_stamp ts, wf.section_no secno, actor_name + ' : '+ role_name an, msg_text1 acdsc, msg_text2 co " + "from wf_events wf, wf_messages, section_details sd where mid=wf_type and wf.section_no like '" + CURSEL + "%' and sd.Section_No=wf.Section_No and WF_Type in ('PE2SA') and WF_Token = 1 and sd.road_class =" + k3 + " order by wf.section_no asc ";
                }



            }

            var GetAll = connection.Query<InboxData>(SQL_I);

         
            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);

        }


        public JsonResult Inbox_History(string Section)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            string SQL_I = "select time_stamp as ts ,section_no as secno ,actor_name as  an ,msg_text1 as acdsc ,msg_text2 as co from wf_events ,wf_messages where mid = wf_type and section_no = '"+Section+"'  order by substring(time_stamp, 7, 4) desc ,substring(time_stamp, 4, 2) desc ,substring(time_stamp, 1, 2) desc ,substring(time_stamp, 14, 7) desc";
          

            var GetAll = connection.Query<InboxData>(SQL_I);


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);

        }


        public JsonResult GetData(string k3,string chh,string CURSEL,string grid)
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            string sql = "";
            string sqlf = "";
       
            if (((k3 == "") || (k3 == "0")))
            {
                if (((chh == "") || (chh == "0")))
                {

                    sql = @"select top 200  sd.section_no secno ,substring(sd.section_no, 14, 2) dir ,road_name rn ,substring(sd.section_no, 16, 2) ftr ,contractor_no ,sd.utility_cuts ,sd.survey_date ,sd.water_ponding ,pc.section_PCI ,pc.Distress_summary ,pc.Section_Rating ,pc.Maintenance_Cost ,pc.Distress_Condition_Before ,pc.Distress_Condition_After from roads ,section_details sd ,pavement_condition pc where pc.section_no = sd.section_no and sd.section_no like '" + CURSEL + "%'" + " and not exists ( select * from wf_events wf where sd.section_no = wf.section_no and not exists ( select * from wf_events wf1 where wf1.section_no = wf.section_no and wf_type = 'PE2SY' and wf_token = 1 ) ) and city_no = substring(sd.section_no, 1, 2) and zone_no = substring(sd.section_no, 3, 2) and area_no = substring(sd.section_no, 5, 3) and road_no =substring(sd.section_no, 8, 3) order by sd.section_no asc";

                    sqlf = @"select top 200  sd.section_no secno ,substring(sd.section_no, 14, 2) dir ,road_name rn ,substring(sd.section_no, 16, 2) ftr ,contractor_no ,sd.utility_cuts ,sd.survey_date ,sd.water_ponding ,pc.section_PCI ,pc.Distress_summary ,pc.Section_Rating ,pc.Maintenance_Cost ,pc.Distress_Condition_Before ,pc.Distress_Condition_After from roads ,section_details sd ,pavement_condition pc where pc.section_no = sd.section_no and sd.section_no like  '" + CURSEL + "%'" + "and exists ( select * from wf_events wf where sd.section_no = wf.section_no and not exists ( select * from wf_events wf1 where ( wf1.section_no = wf.section_no and wf_type = 'PE2SY' and wf_token = 1 ) ) ) and city_no = substring(sd.section_no, 1, 2) and zone_no = substring(sd.section_no, 3, 2) and area_no = substring(sd.section_no, 5, 3) and road_no = substring(sd.section_no, 8, 3) order by sd.section_no asc";



                }
                else if ((int.Parse(chh) == 9))
                {
                    sql = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, road_name rn, substring(sd.section_no,16,2) f" +
                    "tr, contractor_no,  sd.survey_date,  pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from roads, section_Objects sd, pavement_condition pc where pc.section_no" +
                    " = sd.section_no and sd.section_no like \'"
                                + (CURSEL + ("%\'" + ("and not exists (select * from wf_events wf where sd.section_no = wf.section_no and not exists (select" +
                                " * from wf_events wf1 where wf1.section_no = wf.section_no and  wf_type = \'PE2SY\' and wf_token = 1))" +
                                " " + "and city_no = to_number(substring(sd.section_no,1,2)) and  zone_no = to_number(substring(sd.section_no,3,2)" +
                                ") and area_no = to_number(substring(sd.section_no,5,3)) and road_no = to_number(substring(sd.section_no,8," +
                                "3)) order by sd.section_no asc "))))));
                    sqlf = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, road_name rn, substring(sd.section_no,16,2) f" +
                    "tr, contractor_no,  sd.survey_date,  pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from roads, section_Objects sd, pavement_condition pc where pc.section_no" +
                    " = sd.section_no and sd.section_no like \'"
                                + (CURSEL + ("%\' " + ("and exists (select * from wf_events wf where sd.section_no = wf.section_no and not exists (select * f" +
                                "rom wf_events wf1 where (wf1.section_no = wf.section_no and  wf_type = \'PE2SY\' and wf_token = 1))) " + "and city_no = to_number(substring(sd.section_no,1,2)) and  zone_no = to_number(substring(sd.section_no,3,2)" +
                                ") and area_no = to_number(substring(sd.section_no,5,3)) and road_no = to_number(substring(sd.section_no,8," +
                                "3)) order by sd.section_no asc "))))));
                }

            }

            else
            {
                if ((int.Parse(chh) != 9))
                {
                    sql = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, substring(sd.section_no,16,2) ftr, contractor" +
                    "_no,  sd.utility_cuts,sd.survey_date, sd.water_ponding, pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from section_details sd left outer join pavement_condition pc on " + ("sd.Section_No=pc.Section_No where sd.section_no like \'"
                                + (CURSEL + ("%\' and sd.road_class ="
                                + (k3 + "  order by sd.section_no asc ")))))));
                    sqlf = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, road_name rn, substring(sd.section_no,16,2) f" +
                    "tr, contractor_no, sd.utility_cuts, sd.survey_date, sd.water_ponding, pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from roads, section_details sd, pavement_condition pc where pc.section_no" +
                    " = sd.section_no and sd.section_no like \'"
                                + (CURSEL + ("%\' " + ("and exists (select * from wf_events wf where sd.section_no = wf.section_no and not exists (select * f" +
                                "rom wf_events wf1 where wf1.section_no = wf.section_no and  wf_type = \'PE2SY\' and wf_token = 1)) " + "and city_no = to_number(substring(sd.section_no,1,2)) and  zone_no = to_number(substring(sd.section_no,3,2)" +
                                ") and area_no = to_number(substring(sd.section_no,5,3)) and road_no = to_number(substring(sd.section_no,8," +
                                "3)) order by sd.section_no asc "))))));
                }
                else if ((int.Parse(chh) == 9))
                {
                    sql = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, substring(sd.section_no,16,2) ftr, contractor" +
                    "_no,  sd.survey_date,  pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from section_Objects sd left outer join pavement_condition pc on " + ("sd.Section_No=pc.Section_No where sd.section_no like \'"
                                + (CURSEL + ("%\' and sd.road_class ="
                                + (k3 + "  order by sd.section_no asc ")))))));
                    sqlf = ("select top 200  sd.section_no secno,substring(sd.section_no,14,2) dir, road_name rn, substring(sd.section_no,16,2) f" +
                    "tr, contractor_no,  sd.survey_date,  pc.section_PCI, " + ("pc.Distress_summary, pc.Section_Rating, pc.Maintenance_Cost, pc.Distress_Condition_Before, " + ("pc.Distress_Condition_After from roads, section_Objects sd, pavement_condition pc where pc.section_no" +
                    " = sd.section_no and sd.section_no like \'"
                                + (CURSEL + ("%\' " + ("and exists (select * from wf_events wf where sd.section_no = wf.section_no and not exists (select * f" +
                                "rom wf_events wf1 where wf1.section_no = wf.section_no and  wf_type = \'PE2SY\' and wf_token = 1)) " + "and city_no = to_number(substring(sd.section_no,1,2)) and  zone_no = to_number(substring(sd.section_no,3,2)" +
                                ") and area_no = to_number(substring(sd.section_no,5,3)) and road_no = to_number(substring(sd.section_no,8," +
                                "3)) order by sd.section_no asc "))))));
                }
            }

            if (grid == "1") {
                var GetAll = connection.Query<WorkflowData>(sql);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }
            else
            {
                var GetAll = connection.Query<WorkflowData>(sqlf);


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);
            }

           
           
        }

        string getUserRole() {

//EPPMS_PROJECT_ENGINEER
//EPPMS_PROJECT_DIRECTOR
//EPPMS_MAINTENANCE_DIRECTOR
//EPPMS_GENERAL_DIRECTOR
//EPPMS_CONTRACTOR
//EPPMS_QUALITY_ENGINEER
//EPPMS_LAB_ENGINEER
//EPPMS_SUPERVISING_ENGINEER
//EPPMS_SYSTEM_ADMINISTRATOR
            string CurrentPermission = "None";
            if (UserInRole("PROJECT_ENGINEER"))
            {
                CurrentPermission = "PROJECT_ENGINEER";
            }
            else if (UserInRole("PROJECT_DIRECTOR"))
            {
                CurrentPermission = "PROJECT_DIRECTOR";
            }

            else if (UserInRole("MAINTENANCE_DIRECTOR"))
            {
                CurrentPermission = "MAINTENANCE_DIRECTOR";
            }


            else if (UserInRole("GENERAL_DIRECTOR"))
            {
                CurrentPermission = "GENERAL_DIRECTOR";
            }


            else if (UserInRole("CONTRACTOR"))
            {
                CurrentPermission = "CONTRACTOR";
            }


            else if (UserInRole("QUALITY_ENGINEER"))
            {
                CurrentPermission = "QUALITY_ENGINEER";
            }


            else if (UserInRole("LAB_ENGINEER"))
            {
                CurrentPermission = "LAB_ENGINEER";
            }

            else if (UserInRole("SUPERVISING_ENGINEER"))
            {
                CurrentPermission = "SUPERVISING_ENGINEER";
            }

            else if (UserInRole("SYSTEM_ADMINISTRATOR"))
            {
                CurrentPermission = "SYSTEM_ADMINISTRATOR";
            }

            
           // return "EPPMS_" + CurrentPermission;
            return "EPPMS_" + "PROJECT_ENGINEER";
        }

        public string GetContractNumber()
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            string userId = Authorization.UserId.ToString();
            var GetAll = connection.Query<Contractor>("select [CONTRACTOR_NO] from users as u join [dbo].[CONTRACTORS] as c on u.email=c.email and u.userid="+ userId);
            if (GetAll.ToList().Count > 0)
            {
                return GetAll.ToList()[0].CONTRACTOR_NO;
             //   return true;
            }
            else
            {
                return "-1";
            }
        }
        public bool UserInRole(string role)
        {
            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            string userId = Authorization.UserId.ToString();
            var GetAll = connection.Query("select * from [dbo].[UserRoles] as us left join  [dbo].[Roles] as r on us.RoleId=r.RoleId where us.UserId='"+ userId + "' and r.RoleName='"+role+"'");
            if (GetAll.ToList().Count > 0)
            {
                return true;
            }
            else
            {
                return false;

            }
        }
        public class Contractor
        {
            public string CONTRACTOR_NO {get;set;}
        }


        public class UserTypeLocation
        {
            public string UserType { get; set; }
            public string Location { get; set; }

        }


        public class QueryItem
        {
            public string text1 { get; set; }
            public string text2 { get; set; }

        }
        public class InboxData
        {

            public string mid { get; set; }
            public string ts { get; set; }
            public string secno { get; set; }

            public string an { get; set; }
            public string acdsc { get; set; }
            public string co { get; set; }
        }

        public class WorkflowData
        {
            public string secno { get; set; }
            public string dir { get; set; }
            public string rn { get; set; }
            public string ftr { get; set; }
            public string contractor_no { get; set; }

            public string utility_cuts { get; set; }
            public string survey_date { get; set; }
            public string water_ponding { get; set; }
            public string section_PCI { get; set; }
            public string Distress_summary { get; set; }


            public string Section_Rating { get; set; }
            public string Maintenance_Cost { get; set; }
            public string Distress_Condition_Before { get; set; }
            public string Distress_Condition_After { get; set; }
            
        }

    }
}
