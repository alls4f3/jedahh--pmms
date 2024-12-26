
namespace PMMS.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.WorkOrderRow;
    using System.Linq;
    using Serenity.Web;
    using PMMS.Membership;
    using System.Web;
    using static PMMS.Apps.Workflow.WorkflowController;
    using System.Collections.Generic;
    using System.Web.Configuration;
    using PMMS.Northwind;

    public class WorkOrderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            var Department = "";
            bool Hafria = false;
          

            try
            {
                Hafria = Convert.ToBoolean(request.Entity.IsLicReq);

            }
            catch (Exception)
            {

              
            }

            

            using (var connection2 = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
         


                var GetAll = connection2.Query<UserTypeLocation>("select isnull(dept_no,-2) as UserType from projects where ProjectId='" + request.Entity.RefId + "'");
                if (GetAll.ToList().Count > 0)
                {
                    Department = GetAll.ToList()[0].UserType.ToString();
                }
              

            }


            //if (request.Entity.Remark2.ToString() != "1" || request.Entity.Remark2.ToString() != "2" || request.Entity.Remark2.ToString() != "3")
            //{
            //    throw new ValidationError("Please select your workflow action");

            //}

            if (request.Entity.Remark3=="")
            {
                throw new ValidationError("Please add your comment to proccess the workflow");

            }

            if (request.Entity.WarrantyStartDate >= request.Entity.WarrantyEndDate)
            {
                throw new ValidationError("Warranty StartDate cannot be great or eqaul Warranty EndDate");

            }

            if (request.Entity.DateOfOrderWork >= request.Entity.WorkorderEndDate)
            {
                throw new ValidationError("Workorder StartDate cannot be great or eqaul Workorder EndDate");

            }


            if (request.Entity.WarrantyEndDate <= request.Entity.WorkorderEndDate)
            {
                throw new ValidationError("Warranty EndDate must be great than the Work order endEate");

            }

            if (request.Entity.WarrantyStartDate <= request.Entity.WorkorderEndDate)
            {
                throw new ValidationError("Warranty Start date must be great than the Work order endEate");

            }

            if (request.Entity.DateOfOrderWork <= DateTime.Now.AddDays(-3))
            {
                throw new ValidationError("work order date must be in the future or today");

            }

            if (request.Entity.WorkorderEndDate <= DateTime.Now.AddDays(1))
            {
                throw new ValidationError("work order end date must be in the future(+1 days at least)");

            }


            string sec = request.Entity.WorkorderSection;
            request.Entity.Status = "Inpogress";
            request.Entity.WorkflowStage = "1";
            request.Entity.workflowStagename = "New WorkFlow Created";
            request.Entity.CreatedDate = DateTime.Now;
            request.Entity.LastUpdate = DateTime.Now;
            request.Entity.DepId = Department;
            // workflow container
            request.Entity.Remark2 = "";
           string comment= request.Entity.Remark3 ;
            string sign = request.Entity.signature;

            request.Entity.Remark3 = "";

            var data = new MySaveHandler().Process(uow, request, SaveRequestType.Create);


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            var queryParameters = new DynamicParameters();
            string userId = Authorization.UserId.ToString();
            queryParameters.Add("@ItemId", data.EntityId.ToString());
            queryParameters.Add("@Action", request.Entity.workflowStagename);
            queryParameters.Add("@ActionBy", userId);
            queryParameters.Add("@Comment", comment);
            queryParameters.Add("@ActionData", DateTime.Now);
            queryParameters.Add("@ActionStaus", "1");
            queryParameters.Add("@UserType", "1");
            queryParameters.Add("@Sign", sign);

            connection.Execute("INSERT INTO WorkorderFlow ([ItemId] ,[Action] ,[ActionBy] ,[Comment] ,[ActionData],ActionStaus,UserType,Sign) VALUES (@ItemId, @Action ,@ActionBy ,@Comment ,@ActionData,@ActionStaus,@UserType,@Sign)", queryParameters);

            // 
            var numberOfRoad = request.Entity.WorkorderRoad.Split(',').ToList();

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
                    if (Hafria == false)
                    {

                   
                   
                    var queryParameters2 = new DynamicParameters();
                    var GetCurrent = connection.Query<PMMS.Northwind.ItemSelect>("select   roadid as Id from roads where road_no='" + item + "' and AREA_NO='"+ request.Entity.WorkorderArea+ "' and CITY_NO='"+ request.Entity.WorkorderCity + "' and ZONE_NO='"+ request.Entity.WorkorderZone + "'").ToList();
                    streetid = GetCurrent[0].Id;

                    string SDate = request.Entity.DateOfOrderWork.Value.ToString("dd/MM/yyyy");
                    string Edate = request.Entity.WorkorderEndDate.Value.ToString("dd/MM/yyyy");
                    queryParameters2.Add("@CmdContent", getInsertHafria(data.EntityId.ToString()+num.ToString(),data.EntityId.ToString(), streetid, Tablename, ColName, streetid, SDate, Edate));
                    queryParameters2.Add("@WorkOrderId", data.EntityId.ToString());
                    queryParameters2.Add("@IsDone", "0");
                    connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);

                    var queryParameters3 = new DynamicParameters();

                    queryParameters3.Add("@CmdContent", getInsertHafriaNasq(data.EntityId.ToString() + num.ToString(), data.EntityId.ToString(), streetid, Tablename, ColName, streetid, SDate, Edate));
                    queryParameters3.Add("@WorkOrderId", data.EntityId.ToString());
                    queryParameters3.Add("@IsDone", "0");
                    connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters3);

                    }

                    num++;
                }


            }
            else
            {
                var queryParameters2 = new DynamicParameters();
                string Tablename = "";
                string ColName = "";
                string streetid = "";
                string SDate = request.Entity.DateOfOrderWork.Value.ToString("dd/MM/yyyy");
                string Edate = request.Entity.WorkorderEndDate.Value.ToString("dd/MM/yyyy");
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
                if (Hafria == false)
                {
                    queryParameters2.Add("@CmdContent", getInsertHafria(data.EntityId.ToString(), data.EntityId.ToString(), sec.Split('-')[1], Tablename, ColName, streetid, SDate, Edate));
                    queryParameters2.Add("@WorkOrderId", data.EntityId.ToString());
                    queryParameters2.Add("@IsDone", "0");
                    connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters2);



                    var queryParameters3 = new DynamicParameters();
                    queryParameters3.Add("@CmdContent", getInsertHafriaNasq(data.EntityId.ToString(), data.EntityId.ToString(), sec.Split('-')[1], Tablename, ColName, streetid, SDate, Edate));

                    queryParameters3.Add("@WorkOrderId", data.EntityId.ToString());
                    queryParameters3.Add("@IsDone", "0");
                    connection.Execute("INSERT INTO WorkflowCMD (CmdContent,WorkOrderId,IsDone) VALUES (@CmdContent, @WorkOrderId ,@IsDone)", queryParameters3);
                }
            }


            return data;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {


            if (request.Entity.Remark3 == "")
            {
                throw new ValidationError("Please add your comment to proccess the workflow");

            }



                return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
            


        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {

         

            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {


            return new MyListHandler().Process(connection, request);
        }
        public string GetUserType()
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string userId = Authorization.UserId.ToString();

                var GetAll = connection.Query<UserTypeLocation>("select isnull(workflowusertype,-2) as UserType from users where userid=" + userId + "");


                return GetAll.ToList()[0].UserType.ToString();
            }

           

        }

        public bool CanUpdate(string workorder)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {

                string userId = Authorization.UserId.ToString();
                
                List<string> stages = new List<string>();
                var GetAll = connection.Query<UserTypeLocation>(@"select WorkOrder.[WorkflowStage]  as UserType  from WorkOrder where  WorkOrderId='" + workorder + @"' and WorkOrder.[WorkflowStage]  in (
select stagekey as UserType from [dbo].[WorkFlow_Stages] where DepId=WorkOrder.DepId and  UserType=(select WorkFlowUserType from users where userid='" + userId + @"')

)");
                if (GetAll.ToList().Count > 0)
                {

                    return true;


                }
                else
                {
                    return false;

                }
            }

          
        }

     
        public static string GetEmail(string Action,string WorkOrder)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var queryParameters = new DynamicParameters();

                queryParameters.Add("@Wid", WorkOrder);
                queryParameters.Add("@stageKey", Action);

                var GetAll = connection.Query<QueryItem>(@"select case when [WorkFlow_Stages].UserType = '3' then ( select Users.email from Users where Users.userid = ( select [ProjectUser] from [dbo].[Projects] where projectid = ( select [RefId] from [dbo].[WorkOrder] where [WorkOrder].[WorkOrderId] = @Wid ) ) ) when [WorkFlow_Stages].UserType = '7' then ( select Users.email from Users where Users.userid = ( select [ContractorUser] from [dbo].[Projects] where projectid = ( select [RefId] from [dbo].[WorkOrder] where [WorkOrder].[WorkOrderId] = @Wid ) ) ) when [WorkFlow_Stages].UserType = '5' then case when (select Projects.[DEPT_NO] from Projects where ProjectId=(select refid from WorkOrder where workorderid=@Wid) )='6581' then ( SELECT STRING_AGG(Email, ',') AS Result FROM users where users.UserId='106' ) else ( SELECT STRING_AGG(Email, ',') AS Result FROM users where users.WorkFlowUserType = '5' and users.WorkFlowDirection = ( select WorkOrder.AssignTo from WorkOrder where WorkOrder.WorkOrderId = @Wid ) )end else ( SELECT STRING_AGG(Email, ',') AS Result FROM users where users.WorkFlowUserType = [WorkFlow_Stages].UserType and departmentid = (select Projects.[DEPT_NO] from Projects where ProjectId=(select refid from WorkOrder where workorderid=@Wid)) ) end as text1 from [dbo].[WorkFlow_Stages] where [StageKey] = @stageKey and DepId=(select DepId from workorder where workorderid=@Wid)", queryParameters);
              //  var GetAll = connection.Query<QueryItem>(@"select case when [WorkFlow_Stages].UserType ='3' then (select Users.email from Users where Users.userid =( select [ProjectUser] from [dbo].[Projects] where projectid=(select [RefId] from [dbo].[WorkOrder] where [WorkOrder].[WorkOrderId]=@Wid) )) when [WorkFlow_Stages].UserType ='7' then (select Users.email from Users where Users.userid =( select [ContractorUser]  from [dbo].[CONTRACTORS] where [CONTRACTORS].[SUP_No]=( select [SUP_NO] from [dbo].[Projects] where projectid=(select [RefId] from [dbo].[WorkOrder] where [WorkOrder].[WorkOrderId]=@Wid)) )) when [WorkFlow_Stages].UserType ='5'  then (SELECT STRING_AGG(Email, ',') AS Result FROM users where users.WorkFlowUserType='5' and  users.WorkFlowDirection=( select WorkOrder.AssignTo from WorkOrder where WorkOrder.WorkOrderId=@Wid ) ) else (SELECT STRING_AGG(Email, ',') AS Result FROM users where users.WorkFlowUserType= [WorkFlow_Stages].UserType) end as text1 from [dbo].[WorkFlow_Stages]  where [StageKey]=@stageKey", queryParameters);

                if (GetAll.ToList().Count > 0)
                {

                    return GetAll.ToList()[0].text1.ToString();


                }
                else
                {
                    return "";

                }
            }

           
           
        }


        public static string GetEmailOnReject(string Action, string WorkOrder)



        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var queryParameters = new DynamicParameters();

                queryParameters.Add("@Wid", WorkOrder);

                var GetAll = connection.Query<QueryItem>(@"


SELECT STRING_AGG(Email, ',') AS  text1 FROM users where users.[UserId]

in (
select ActionBy  from WorkorderFlow where WorkorderFlow.itemid=@Wid

)



", queryParameters);

                if (GetAll.ToList().Count > 0)
                {

                    return GetAll.ToList()[0].text1.ToString();


                }
                else
                {
                    return "";

                }


            }




        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {

            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);

                if (Authorization.HasPermission(PermissionKeys.Apps.WorkflowAdmin))
                {

                }
                else
                {
                    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                    {
                        string userId = Authorization.UserId.ToString();
        
                    
                        var GetAll = connection.Query<UserTypeLocation>("select isnull(workflowusertype,-2) as UserType,isnull(DepartmentId,-2)  as Location from users where userid=" + userId + "");
                        string UserType = GetAll.ToList()[0].UserType.ToString();
                        string currentDep = GetAll.ToList()[0].Location.ToString();
                        string addQuery = "";

                        if (UserType == "3")
                        {
                            addQuery = " and RefId in (" + "select projectid as UserType from projects where projects.ProjectUser='" + userId + "')";

                        }
                        else if (UserType == "7")
                        {
                            addQuery = " and RefId in (" + "select projectid as UserType from projects where projects.ContractorUser='" + userId + "')";


                            // addQuery = "  and RefId in (" + "select projectid as UserType from projects where projects.SUP_NO in ( select CONTRACTORS.SUP_NO from CONTRACTORS where CONTRACTORS.contractoruser='" + userId + "'))";

                        }

                        // Director Munc
                        else if (UserType == "5")
                        {
                            addQuery = "  and AssignTo  in (" + "select isnull(users.WorkFlowDirection,-2) as UserType from users where userid='" + userId + "')";

                        }

                        if (UserType != "7" )
                        {

                           
                                addQuery = addQuery + "   and RefId in (select projectid as UserType from projects where projects.DEPT_NO in (select users.DepartmentId from users where users.userid='" + userId + "'))";
                            
                        }
                        var u = MyRow.Fields;

                        //addQuery = addQuery + "  and DepId='" + currentDep + "'";

                        query.Where(@"((WorkflowStage in (select stagekey as UserType from [dbo].[WorkFlow_Stages] where DepId='"+currentDep+@"' and UserType=(select isnull(workflowusertype,-2) 

from users where userid=" + userId + ")) ) or WorkOrderId in (select WorkOrderId as UserType from workorder where  WorkOrderId in ( select ItemId from WorkorderFlow where usertype=(select isnull(users.WorkFlowUserType,-2)    from users where UserId='" + userId + @"'))) ) " + addQuery);
                    }



                }



            }


        }


        public string getInsertHafria(string ObjectId,string workorderId,string ItemId,string SectionOrStreet,string Col,string StreetId,String StartDate,string EndDate) {
            
           // return @"INSERT INTO FIRST_NOBUFFER_HAFRIAT (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '999" + ObjectId + "' ,'999" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'"+StartDate+"' ,'"+StreetId+"' ,N'' ,'' ,'' ,'' ,'"+EndDate+ "' ,'1',SHAPE ,'999" + workorderId + "'   from   " + SectionOrStreet + " where "+ Col + "='"+ ItemId + "'";

            // return @"INSERT INTO HAFRIAT_FINAL_PMMS (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '999" + ObjectId + "' ,'999" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'"+StartDate+"' ,'"+StreetId+"' ,N'' ,'' ,'' ,'' ,'"+EndDate+ "' ,'1',SHAPE ,'999" + workorderId + "'   from   " + SectionOrStreet + " where "+ Col + "='"+ ItemId + "'";
            return @"INSERT INTO HAFRIAT_FINAL_PMMS (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '" + ObjectId + "' ,'" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'"+StartDate+"' ,'"+StreetId+"' ,N'' ,'' ,'' ,'' ,'"+EndDate+ "' ,'1',SHAPE ,'" + workorderId + "'   from   " + SectionOrStreet + " where "+ Col + "='"+ ItemId + "'";
        }


        public string getInsertHafriaNasq(string ObjectId, string workorderId, string ItemId, string SectionOrStreet, string Col, string StreetId, String StartDate, string EndDate)
        {

            // return @"INSERT INTO FIRST_NOBUFFER_HAFRIAT (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '999" + ObjectId + "' ,'999" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'"+StartDate+"' ,'"+StreetId+"' ,N'' ,'' ,'' ,'' ,'"+EndDate+ "' ,'1',SHAPE ,'999" + workorderId + "'   from   " + SectionOrStreet + " where "+ Col + "='"+ ItemId + "'";

            return @"INSERT INTO HAFRIAT_FINAL_PMMS_Nassag (OBJECTID, ROAD_JOB_ID ,MUNICIPALITY ,MUNICIPALITY_ID ,DISTRICT ,DISTRICT_ID ,STATUS_CODE ,INITIAL_DATE ,DEPT_NAME ,DEPT_ID ,START_ROAD_JOB_DATE ,STREET_ID ,CONT_NAME ,CONT_ID ,ORDER_ID ,DURATION_ROAD_DATE ,END_ROAD_JOB_DATE,IS_ACTIVE ,SHAPE,DUBLICATE ) select '" + ObjectId + "' ,'" + workorderId + "' ,'01' ,'1' ,'' ,'' ,'RJI' ,'' ,'' ,'' ,'" + StartDate + "' ,'" + StreetId + "' ,N'' ,'' ,'' ,'' ,'" + EndDate + "' ,'1',SHAPE ,'" + workorderId + "'   from   " + SectionOrStreet + " where " + Col + "='" + ItemId + "'";
        }
        private class MyListHandler : ListRequestHandler<MyRow> {

          
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);

                if ( Authorization.HasPermission(PermissionKeys.Apps.WorkflowAdmin))
                {
                  
                }
                else
                {
                    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                    {
                        string userId = Authorization.UserId.ToString();

                        var GetAll = connection.Query<UserTypeLocation>("select isnull(workflowusertype,-2) as UserType,isnull(DepartmentId,-2)  as Location from users where userid=" + userId + "");
                        string UserType = GetAll.ToList()[0].UserType.ToString();
                        string currentDep = GetAll.ToList()[0].Location.ToString();

                        string addQuery = "";

                        if (UserType == "3")
                        {
                            addQuery = " and RefId in (" + "select projectid as UserType from projects where projects.ProjectUser='" + userId + "')";

                        }
                        else if (UserType == "7")
                        {

                            addQuery = " and RefId in (" + "select projectid as UserType from projects where projects.ContractorUser='" + userId + "')";

                           // addQuery = "  and RefId in (" + "select projectid as UserType from projects where projects.SUP_NO in ( select CONTRACTORS.SUP_NO from CONTRACTORS where CONTRACTORS.contractoruser='" + userId + "'))";

                        }

                        // Director Munc
                        else if (UserType == "5")
                        {

                            addQuery = "  and AssignTo  in (" + "select isnull(users.WorkFlowDirection,-2) as UserType from users where userid='" + userId + "')";

                        }
                        if (UserType != "7")
                        {
                           
                                addQuery = addQuery + "   and RefId in (select projectid as UserType from projects where projects.DEPT_NO in (select users.DepartmentId from users where users.userid='" + userId + "'))";
                            
                        }
                        //addQuery = addQuery + "  and DepId='" + currentDep + "'";
                        var u = MyRow.Fields;

                        query.Where(@"((WorkflowStage in (select stagekey as UserType from [dbo].[WorkFlow_Stages] where DepId='" + currentDep + @"' and UserType=(select isnull(workflowusertype,-2) 

from users where userid=" + userId + ")) ) or WorkOrderId in (select WorkOrderId as UserType from workorder where WorkOrderId in ( select ItemId from WorkorderFlow where usertype=(select isnull(users.WorkFlowUserType,-2)    from users where UserId='" + userId + @"'))) ) " + addQuery);
                    }

                 
                
                }



            }






        }
    }
}