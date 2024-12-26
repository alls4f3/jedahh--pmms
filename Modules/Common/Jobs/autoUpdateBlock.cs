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
    public class autoUpdateBlock
    {


        public string CUserId() {
            return "98";
        }
        public void Block()
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
                using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                {

                    var AllItems = connection.Query<MyRequest>(@"  select WorkOrderId
	,workflowStagename
	,WorkflowStage
	,Status
	,LastUpdate
	,isnull((select Status from WorkOrderNassseq where WorkOrderNassseq.workorderid=workorder.WorkOrderId ), '3') as Remark2
	,isnull((select StatusName from WorkOrderNassseq where WorkOrderNassseq.workorderid=workorder.WorkOrderId ), 'No Update from Hafria System - Hafria should be created first') as Remark3
	,DepId as Department
from workorder
where workflowstage in (
		select StageKey
		from WorkFlow_Stages
		where usertype = '18'
			and WorkFlow_Stages.Depid = '" + item.DepId + @"'
		)
	and WorkOrder.Depid='" + item.DepId + @"'



			
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
                        //    var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select onapprovego as Id,onrejectgo as Name, (select stagename from WorkFlow_Stages where StageKey=st.onapprovego) as Text ,UserType as ReportsTo from WorkFlow_Stages st where StageKey=(select WorkflowStage from WorkOrder where workorderid=" + MyRequest.WorkOrderId.ToString() + ")");
                            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("select onapprovego as Id,onrejectgo as Name,(select stagename from WorkFlow_Stages where StageKey=st.onrejectgo  and DepId='" + MyRequest.Department + "') as itemstatus, (select stagename from WorkFlow_Stages where StageKey=st.onapprovego and DepId='" + MyRequest.Department + "'  ) as Text ,UserType as ReportsTo from WorkFlow_Stages st where  DepId='" + MyRequest.Department + "'  and StageKey=(select WorkflowStage from WorkOrder where workorderid=" + MyRequest.WorkOrderId.ToString() + ")");


                            string ActionType = "";
                            var Cat = from e in GetAll

                                      select new
                                      {
                                          nextApprove = e.Id,
                                          nextReject = e.Name,
                                          nextName = e.Text,
                                          repprtTo = e.ReportsTo
                                      };


                            var next = Cat.ToList()[0].nextApprove;
                            var nextName = Cat.ToList()[0].nextName;
                            var nextReject = Cat.ToList()[0].nextReject;
                            var repprtTo = Cat.ToList()[0].repprtTo.ToString();




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
                                        MyRequest.workflowStagename = nextName;
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
                                queryParameters.Add("@ItemId", MyRequest.WorkOrderId);
                                queryParameters.Add("@Action", MyRequest.workflowStagename);
                                queryParameters.Add("@ActionBy", userId);
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
                                    var RJ = sq.RejectHafria(MyRequest.WorkOrderId.ToString());
                                    connection.Execute(RJ.SQL, RJ.para);




                                    var emailBody = TemplateHelper.RenderTemplate("~/Modules/Membership/Account/SignUp/WorkflowUpdate2.cshtml", emailModel);

                                    // reject
                                    mail.sendEmail(WorkOrderRepository.GetEmailOnReject(ActionTake, id), CCEmail, emailBody, " تنبية من نظام راصف امانه جدة  - امر عمل رقم " + MyRequest.WorkOrderId.ToString());

                                }
                                else
                                {
                                    string actualDate = DateTime.Now.AddYears(1).ToString("dd/MM/yyyy");
                                    string sql = string.Format(@"UPDATE HAFRIA_JOBS SET STATUS_CODE='RJOB',END_ROAD_JOB_DATE='{0}' where ROAD_JOB_ID ='{1}'", actualDate, "999" + MyRequest.WorkOrderId.ToString());

                                    var queryParameters2 = new DynamicParameters();

                                    queryParameters2.Add("@CmdContent", sql);
                                    queryParameters2.Add("@WorkOrderId", MyRequest.WorkOrderId.ToString());
                                    queryParameters2.Add("@IsDone", "0");
                                    connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);


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




                            }

                            // co
                        }


                    }




                }

            }

               


        }

        public class MyRequestUserType
        {
            public string DepId { get; set; }
        }
        public class MyRequest
        {
            public string WorkOrderId { get; set; }
            public string Remark2 { get; set; }
            public string Remark3 { get; set; }
            public string workflowStagename { get; set; }
            public string WorkflowStage { get; set; }
            public string Status { get; set; }
            public DateTime LastUpdate { get; set; }

            public string Department { get; set; }


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