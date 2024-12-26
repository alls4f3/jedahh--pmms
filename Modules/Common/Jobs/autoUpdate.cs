using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;

using System.Linq;
using Serenity.Web;
using PMMS.Membership;
using System.Web;

using System.Collections.Generic;
using System.Web.Configuration;
using PMMS.Northwind;
using static PMMS.Apps.Workflow.WorkflowController;
using PMMS.Default.Repositories;
using PMMS.Common.Helpers;

namespace AmtarApp.Modules.Common
{
    public class autoUpdate
    {


        public string CUserId() {
            return "97";
        }

        public string CUserIdApproveel()
        {
            return "98";
        }
        public void MoveFromHafriaApproval()
        {
            List<MyRequestUserType> ut = new List<MyRequestUserType>();
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var AllItems = connection.Query<MyRequestUserType>("select DepartmentId as DepId from Department");
                foreach (var item in AllItems.ToList()) 
                {
                    ut.Add(new MyRequestUserType() { DepId = item.DepId });
                }
            }

            foreach (var item in ut)
            {


//                using (var connection2 = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
//                {
//                    connection2.Execute(@"

//update WorkOrder set STATUS_CODE=scode 
	
			
//			FROM workorder join workordercode on workordercode.ROAD_JOB_ID=convert(nvarchar(max), '999')+ convert(nvarchar(max), WorkOrderId)
			
//			where workflowstage in ( select StageKey from WorkFlow_Stages where usertype='16' and WorkFlow_Stages.Depid='" + item.DepId + @"' )

// and WorkOrder.Depid='" + item.DepId + @"'
//");

//                }




                using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                {



                    var AllItems = connection.Query<MyRequest>(@"  

 select WorkOrderId ,
            
          
             workflowStagename ,
             WorkflowStage ,
             Status ,
            LastUpdate,
			
			
			case
			 when [STATUS_CODE] is null  then N'3' 
			when [STATUS_CODE]='RJOP' then N'2' 
			when [STATUS_CODE]='RJPP' then N'2' 
			when [STATUS_CODE]='RJOR' then N'1' 
			when [STATUS_CODE]='RJOB' then N'1' 
			when [STATUS_CODE]='RJI' then N'3' 


			else
			N'3' end 

			
 as Remark2,


		
			case when [STATUS_CODE]='RJOP' then N'There is a request for a drilling license .'
			when [STATUS_CODE]='RJPP' then N'Existing drilling license.' 
			when [STATUS_CODE]='RJOR' then N'ready to publish . ' 
			when [STATUS_CODE]='RJOB' then N'ready to publish and block .' 
			else
			N'No Update from Hafria System'  end 

			
        as Remark3
,DepId as Department
			from workorder

			
			where
		
			workflowstage in (
			
			select StageKey from WorkFlow_Stages where usertype='16' and depid='"+item.DepId+ @"'
			)
and workorder.DepId='" + item.DepId + @"'

			
").ToList();
                    foreach (var MyRequest in AllItems)
                    {


                        // var MyRequest = connection.Query<MyRequest>("select WorkflowStage as Id from WorkOrder where workorderid=" + item.WorkOrderId.ToString()).ToList()[0];


                        var crrentName = MyRequest.workflowStagename;

                        var GetCurrentStatus = connection.Query<PMMS.Northwind.ItemSelect>("select WorkflowStage as Id from WorkOrder where workorderid=" + MyRequest.WorkOrderId.ToString());
                        var GetCurrentStatusItem = from e in GetCurrentStatus

                                                   select new
                                                   {
                                                       next = e.Id,

                                                   };


                        if (GetCurrentStatusItem.ToList()[0].next == "0" || GetCurrentStatusItem.ToList()[0].next == "-1")
                        {

                            //

                        }
                        else
                        {
                            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select onapprovego as Id,onrejectgo as Name,(select stagename from WorkFlow_Stages where StageKey=st.onrejectgo  and DepId='" + MyRequest.Department + "') as itemstatus, (select stagename from WorkFlow_Stages where StageKey=st.onapprovego and DepId='" + MyRequest.Department + "'  ) as Text ,UserType as ReportsTo from WorkFlow_Stages st where  DepId='" + MyRequest.Department + "'  and StageKey=(select WorkflowStage from WorkOrder where workorderid=" + MyRequest.WorkOrderId.ToString() + ")");


                            string ActionType = "";
                            var Cat = from e in GetAll

                                      select new
                                      {
                                          nextApprove = e.Id,
                                          nextReject = e.Name,
                                          nextRejectname = e.itemstatus,
                                          nextName = e.Text,
                                          repprtTo = e.ReportsTo
                                      };


                            var next = Cat.ToList()[0].nextApprove;
                            var nextName = Cat.ToList()[0].nextName;
                            var nextReject = Cat.ToList()[0].nextReject;
                            var nextRejectname = Cat.ToList()[0].nextRejectname;
                            var repprtTo = Cat.ToList()[0].repprtTo.ToString();
                            string ActionApproved = MyRequest.Remark2;



                            string ActionTake = "";
                            // Keep saving
                            if (MyRequest.Remark2 == "3")
                            {
                                var queryParameters = new DynamicParameters();
                                string userId = CUserId().ToString();
                                queryParameters.Add("@ItemId", MyRequest.WorkOrderId);
                                queryParameters.Add("@Action", "Update the document");
                                queryParameters.Add("@ActionBy", userId);
                                queryParameters.Add("@Comment", MyRequest.Remark3);
                                queryParameters.Add("@ActionData", DateTime.Now);
                                queryParameters.Add("@ActionStaus", MyRequest.Remark2);
                                queryParameters.Add("@UserType", GetUserType());

                                connection.Execute("INSERT INTO WorkorderFlow ([ItemId] ,[Action] ,[ActionBy] ,[Comment] ,[ActionData],ActionStaus,UserType) VALUES (@ItemId, @Action ,@ActionBy ,@Comment ,@ActionData,@ActionStaus,@UserType)", queryParameters);



                                MyRequest.Remark2 = "";
                                MyRequest.Remark3 = "";


                            }
                            else
                            {
                                if (MyRequest.Remark2 == "1")
                                {
                                    ActionType = "Approved";
                                    // handel the staus for approved request


                                    if (next != "0")
                                    {
                                        MyRequest.Status = "Inpogress";
                                        MyRequest.WorkflowStage = next;
                                        MyRequest.workflowStagename = nextName;
                                        MyRequest.LastUpdate = DateTime.Now;

                                    }
                                    else
                                    {
                                        MyRequest.Status = "Done.Approved";
                                        MyRequest.WorkflowStage = "0";
                                        MyRequest.workflowStagename = "تمت مع الموافقة";
                                        MyRequest.LastUpdate = DateTime.Now;


                                    }
                                    ActionTake = next;
                                }
                                else
                                {
                                    ActionType = "Rejected";


                                    if (nextReject != "0")
                                    {
                                        MyRequest.Status = "Inpogress";
                                        MyRequest.WorkflowStage = nextReject;
                                        MyRequest.workflowStagename = nextRejectname;
                                        MyRequest.LastUpdate = DateTime.Now;
                                        ActionTake = "-1";
                                    }
                                    else
                                    {
                                        MyRequest.Status = "Done.Reject";
                                        MyRequest.WorkflowStage = "-1";
                                        MyRequest.LastUpdate = DateTime.Now;
                                        ActionTake = "-1";

                                    }





                                }


                                // insert the logs 
                                var queryParameters = new DynamicParameters();
                                string userId = CUserId().ToString();
                                string userIdApproval = CUserIdApproveel().ToString();

                                queryParameters.Add("@ItemId", MyRequest.WorkOrderId);
                                queryParameters.Add("@Action", MyRequest.workflowStagename);
                                queryParameters.Add("@ActionBy", userIdApproval);
                                queryParameters.Add("@Comment", MyRequest.Remark3);
                                queryParameters.Add("@ActionData", DateTime.Now);
                                queryParameters.Add("@ActionStaus", MyRequest.Remark2);
                                queryParameters.Add("@UserType", repprtTo);
                                queryParameters.Add("@ActionFrom", "System");
                                connection.Execute("INSERT INTO WorkorderFlow ([ItemId] ,[Action] ,[ActionBy] ,[Comment] ,[ActionData],ActionStaus,UserType,ActionFrom) VALUES (@ItemId, @Action ,@ActionBy ,@Comment ,@ActionData,@ActionStaus,@UserType,@ActionFrom)", queryParameters);



                                MyRequest.Remark2 = "";
                                MyRequest.Remark3 = "";







                                var emailModel = new ActivateEmailModel();
                                emailModel.Username = MyRequest.workflowStagename;
                                emailModel.DisplayName = MyRequest.workflowStagename;
                                emailModel.ActivateLink = WebConfigurationManager.AppSettings["WorkOrderURL"];

                                AmtarApp.Modules.Common.Email.EmailCustom mail = new AmtarApp.Modules.Common.Email.EmailCustom();

                                string id = MyRequest.WorkOrderId.ToString();

                                string CCEmail = WebConfigurationManager.AppSettings["CCEmail"];

                                if (ActionTake == "-1")
                                {

                                    SQLHelper sq = new SQLHelper();
                                    var RJ = sq.RejectHafria(id);
                                    connection.Execute(RJ.SQL, RJ.para);

                                    var emailBody = TemplateHelper.RenderTemplate("~/Modules/Membership/Account/SignUp/WorkflowUpdate2.cshtml", emailModel);

                                    // reject
                                    mail.sendEmail(WorkOrderRepository.GetEmailOnReject(ActionTake, id), CCEmail, emailBody, " تنبية من نظام راصف امانه جدة  - امر عمل رقم " + MyRequest.WorkOrderId.ToString());

                                }
                                else
                                {
                                    var emailBody = TemplateHelper.RenderTemplate("~/Modules/Membership/Account/SignUp/WorkflowUpdate.cshtml", emailModel);

                                    // approved
                                    mail.sendEmail(WorkOrderRepository.GetEmail(ActionTake, id), CCEmail, emailBody, " تنبية من نظام راصف امانه جدة  - امر عمل رقم " + MyRequest.WorkOrderId.ToString());

                                }


                                var queryParametersupdate = new DynamicParameters();
                                queryParametersupdate.Add("@Remark2", MyRequest.Remark2);
                                queryParametersupdate.Add("@Remark3", MyRequest.Remark3);
                                queryParametersupdate.Add("@workflowStagename", MyRequest.workflowStagename);
                                queryParametersupdate.Add("@WorkflowStage", MyRequest.WorkflowStage);
                                queryParametersupdate.Add("@Status", MyRequest.Status);
                                queryParametersupdate.Add("@LastUpdate", MyRequest.LastUpdate);
                                queryParametersupdate.Add("@WorkOrderId", MyRequest.WorkOrderId);

                                connection.Execute("update workorder set Remark2=@Remark2,Remark3=@Remark3,workflowStagename=@workflowStagename,WorkflowStage=@WorkflowStage,Status=@Status,LastUpdate=@LastUpdate where WorkOrderId=@WorkOrderId", queryParametersupdate);



                                if (ActionApproved == "1")
                                {
                                    string actualDate = DateTime.Now.AddYears(1).ToString("dd/MM/yyyy");
                                    string sql = string.Format(@"UPDATE HAFRIA_JOBS SET STATUS_CODE='RJOB',END_ROAD_JOB_DATE='{0}' where ROAD_JOB_ID ='{1}'", actualDate, "999" + MyRequest.WorkOrderId.ToString());

                                    var queryParameters2 = new DynamicParameters();

                                    queryParameters2.Add("@CmdContent", sql);
                                    queryParameters2.Add("@WorkOrderId", MyRequest.WorkOrderId.ToString());
                                    queryParameters2.Add("@IsDone", "0");
                                   connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);

                                }
                            }

                            // co
                        }


                    }




                }
            }
           


        }

        public void ReCreateHafria()
        {






            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                var AllItems = connection.Query<MyRequest2>(@"

   select WorkOrderId ,
          WorkorderEndDate, 
           DateOfOrderWork ,
           WorkorderSection ,
WorkorderArea,
WorkorderCity,
WorkorderZone,
WorkorderRoad
		   from workorder

		   where WorkOrderId not in (
		   select WorkflowCMD.[WorkOrderId] from WorkflowCMD
		   )and workordersection<>'-1'

			
").ToList();
                foreach (var MyRequest in AllItems)
                {

                    //var numberOfRoad = request.Entity.WorkorderRoad.Split(',').ToList();
                    var numberOfRoad = MyRequest.WorkorderRoad.Split(',').ToList();

                    if (numberOfRoad.Count > 1)
                    {
                        string Tablename = "";
                        string ColName = "";
                        string streetid = "";
                        Tablename = "streets";
                        ColName = "street_id";
                        foreach (var item in numberOfRoad)
                        {
                            int num = 1;

                            var queryParameters2 = new DynamicParameters();
                            var GetCurrent = connection.Query<PMMS.Northwind.ItemSelect>("select   roadid as Id from roads where road_no='" + item + "' and AREA_NO='" + MyRequest.WorkorderArea + "' and CITY_NO='" + MyRequest.WorkorderCity + "' and ZONE_NO='" + MyRequest.WorkorderZone + "'").ToList();
                            streetid = GetCurrent[0].Id;

                            string SDate = MyRequest.DateOfOrderWork.ToString("dd/MM/yyyy");
                            string Edate = MyRequest.WorkorderEndDate.ToString("dd/MM/yyyy");
                            queryParameters2.Add("@CmdContent", getInsertHafria(MyRequest.WorkOrderId.ToString() + num.ToString(), MyRequest.WorkOrderId.ToString(), streetid, Tablename, ColName, streetid, SDate, Edate));
                            queryParameters2.Add("@WorkOrderId", MyRequest.WorkOrderId.ToString());
                            queryParameters2.Add("@IsDone", "0");
                            connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);
                            num++;
                        }


                    }
                    else
                    {
                        string sec = MyRequest.WorkorderSection;
                        var queryParameters2 = new DynamicParameters();
                        string Tablename = "";
                        string ColName = "";
                        string streetid = "";
                        string SDate = MyRequest.DateOfOrderWork.ToString("dd/MM/yyyy");
                        string Edate = MyRequest.WorkorderEndDate.ToString("dd/MM/yyyy");
                        if (sec.Split('-')[0].Contains("8888"))
                        {
                            var GetCurrent = connection.Query<PMMS.Northwind.ItemSelect>("select top 1 streetid as Id from SECTIONS where sectionid='" + sec.Split('-')[1] + "'").ToList();

                            Tablename = "sections";
                            ColName = "Section_Id";
                            streetid = GetCurrent[0].Id;
                        }
                        else
                        {
                            Tablename = "streets";
                            ColName = "street_id";
                            streetid = sec.Split('-')[1];

                        }

                        queryParameters2.Add("@CmdContent", getInsertHafria(MyRequest.WorkOrderId.ToString(),MyRequest.WorkOrderId.ToString(), sec.Split('-')[1], Tablename, ColName, streetid, SDate, Edate));
                        queryParameters2.Add("@WorkOrderId", MyRequest.WorkOrderId.ToString());
                        queryParameters2.Add("@IsDone", "0");
                        connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);

                    }








                }




            }


        }




        public string getInsertHafria(string ObjectId, string workorderId, string ItemId, string SectionOrStreet, string Col, string StreetId, String StartDate, string EndDate)
        {

            // return @"INSERT INTO FIRST_NOBUFFER_HAFRIAT (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '999" + ObjectId + "' ,'999" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'"+StartDate+"' ,'"+StreetId+"' ,N'' ,'' ,'' ,'' ,'"+EndDate+ "' ,'1',SHAPE ,'999" + workorderId + "'   from   " + SectionOrStreet + " where "+ Col + "='"+ ItemId + "'";

            return @"INSERT INTO HAFRIAT_FINAL_PMMS (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '999" + ObjectId + "' ,'999" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'" + StartDate + "' ,'" + StreetId + "' ,N'' ,'' ,'' ,'' ,'" + EndDate + "' ,'1',SHAPE ,'999" + workorderId + "'   from   " + SectionOrStreet + " where " + Col + "='" + ItemId + "'";
        }

        public class MyRequest
        {
            public string WorkOrderId { get; set; }
            public string Remark2 { get; set; }
            public string Remark3 { get; set; }
            public string workflowStagename { get; set; }
            public string WorkflowStage { get; set; }
            public string Status { get; set; }
            public string Department { get; set; }
            public DateTime LastUpdate { get; set; }

        }


        public class MyRequest2
        {
            public string WorkOrderId { get; set; }
            public DateTime WorkorderEndDate { get; set; }
            public DateTime DateOfOrderWork { get; set; }
            public string WorkorderSection { get; set; }
            public string WorkorderRoad { get; set; }
            public string WorkorderArea { get; set; }
            public string WorkorderCity { get; set; }
            public string WorkorderZone { get; set; }

            


        }
        public class MyRequestUserType
        {
            public string DepId { get; set; }
        }
        public string GetUserType()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string userId = CUserId().ToString();

                var GetAll = connection.Query<UserTypeLocation>("select isnull(workflowusertype,-2) as UserType from users where userid=" + userId + "");


                return GetAll.ToList()[0].UserType.ToString();
            }



        }

    }
}