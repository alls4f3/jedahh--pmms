
namespace PMMS.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using static PMMS.Apps.Workflow.WorkflowController;
    using MyRepository = Repositories.WorkOrderRepository;
    using MyRow = Entities.WorkOrderRow;
    using System.Collections;
    using System.Collections.Generic;
    using PMMS.Northwind;
    using System;

    [RoutePrefix("Services/Default/WorkOrder"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class WorkOrderController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {


            if (Authorization.HasPermission(PermissionKeys.Apps.WorkflowEdit) || Authorization.HasPermission(PermissionKeys.Apps.WorkflowCreate))
            {
                string joined = "";
                using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                {
                    var numberOfRoad = request.Entity.WorkorderRoad.Split(',').ToList();

                    if (numberOfRoad.Count > 1)
                    {
                        var GetAll2 = connection.Query<UserTypeLocation>("select DEPT_NO as UserType from projects where DEPT_NO in (select Users.DepartmentId from Users where userid='" + Authorization.UserId.ToString() + "') and ProjectId='" + request.Entity.RefId.ToString() + "'");
                        if (GetAll2.ToList().Count == 0)
                        {
                            throw new ValidationError("You cannot create workflow in this project it's related to another department");

                        }

                        if (request.Entity.WorkorderLane=="" || request.Entity.WorkorderLane=="0")
                        {
                            throw new ValidationError("You must select your lane work type");

                        }

                        string v = "";
                          foreach (var item in numberOfRoad)
                        {
                           
                            v = v + "'" + item + "'" + ",";
                        }
                          v= v.Remove(v.Length - 1, 1);

                        var varopens = connection.Query<PMMS.Northwind.ItemSelect>("select roadnumber as Id from WorkOrderLane join WorkOrder on WorkOrder.workorderid=WorkOrderLane.woid and ActionId='" + request.Entity.WorkorderLane+"' and WorkflowStage not in ('0','-1') and WorkOrderLane.roadnumber in ("+ v + ") and WorkOrderLane.regnumber='"+request.Entity.WorkorderArea+"'").ToList();


                        if (varopens.Count > 0)
                        {
                            string roads = "";
                            foreach (var item in varopens)
                            {
                                roads = roads  + item.Id.ToString() + " ,";
                            }

                            throw new ValidationError("this roads has open workflow :- " + roads);

                        }

                        var varopens2 = connection.Query<PMMS.Northwind.ItemSelect>("select WorkOrder.WorkOrderId as Id from WorkOrderLane join WorkOrder on WorkOrder.workorderid=WorkOrderLane.woid and ActionId='" + request.Entity.WorkorderLane + "' and WorkflowStage  in ('0')  and WarrantyEndDate > GETDATE() and WorkOrderLane.roadnumber in (" + v + ") and WorkOrderLane.regnumber='" + request.Entity.WorkorderArea + "'").ToList();


                        if (varopens2.Count > 0)
                        {
                           
                            IList<string> strings = new List<string>();
                            foreach (var itemb in varopens2.ToList())
                            {
                                strings.Add(itemb.Id);
                            }
                            joined = string.Join(",", strings);
                            throw new ValidationError("this roads has warranty not expired on order:- " + joined);

                        }

                        var CurrentSeq = connection.Query<PMMS.Northwind.ItemSelect>("select top 1    'WO-' + right(Projects.DEPT_NO,2) + '-' +convert(nvarchar(max),   RIGHT(SeqN, LEN(SeqN) - 6) + 1) as  Id from workorder join Projects on workorder.refid=Projects.projectid and Projects.DEPT_NO in ( select projects2.DEPT_NO from projects as projects2  where projects2.projectid='" + request.Entity.RefId.ToString() + "') and workorder.workordersection<>'-1' order by RIGHT(SeqN, LEN(SeqN) - 6) desc").ToList();
                        string SeqName = "";

                        if (CurrentSeq.Count > 0)
                        {
                            SeqName = CurrentSeq[0].Id.ToString();
                        }
                        else
                        {
                            var CurrentSeq2 = connection.Query<PMMS.Northwind.ItemSelect>("select case when DEPT_NO='6581' then 'WO-' + right(Projects.DEPT_NO,2) + '-200000' else 'WO-' + right(Projects.DEPT_NO,2) + '-16000' end as  Id from Projects where projectid='" + request.Entity.RefId.ToString() + "'").ToList();
                            SeqName = CurrentSeq2[0].Id.ToString();
                        }
                        var sec = request.Entity.WorkorderCity;
                        var road = request.Entity.WorkorderRoad;
                        var reg = request.Entity.WorkorderArea;
                        var Lane = request.Entity.WorkorderLane;

                       
                        request.Entity.WorkorderSection = "0-0";
                        request.Entity.SeqN = SeqName;
                         var data = new MyRepository().Create(uow, request);
                       
                        string Id = data.EntityId.ToString();
                       


                        foreach (var item in numberOfRoad)
                        {
                            var queryParameters2 = new DynamicParameters();
                            queryParameters2.Add("@WoId", Id);
                            queryParameters2.Add("@LaneId", "01");
                            queryParameters2.Add("@ActionId", Lane);

                            queryParameters2.Add("@roadnumber", item);
                            queryParameters2.Add("@sectionNu", sec);
                            
                            queryParameters2.Add("@regnumber", reg);


                            connection.Execute("INSERT INTO WorkOrderLane (WoId,LaneId,ActionId,roadnumber,regnumber,sectionNu) VALUES (@WoId, @LaneId ,@ActionId,@roadnumber,@regnumber,@sectionNu)", queryParameters2);

                        }



                        return data;

                    }
                    else
                    {
                        //request.Entity.WorkorderSection = request.Entity.WorkorderSection.Split('-')[0].Trim().ToString();
                        if (request.Entity.WorkorderLane.ToString().Trim() == "")
                        {

                            throw new ValidationError("All Work order Must have at least one Lane");

                        }
                        else if (request.Entity.WorkorderLane.ToString().Trim() == ",")
                        {
                            throw new ValidationError("All Work order Must have at least one Lane");

                        }
                        else
                        {

                            var Lane = request.Entity.WorkorderLane;
                            var sec = request.Entity.WorkorderSection;
                            var road = request.Entity.WorkorderRoad;
                            var reg = request.Entity.WorkorderArea;
                            bool IsOpen = false;
                            bool IsOpenWar = false;
                            string LatestLane = "";
                            int Lanes = 0;
                            foreach (var item in Lane.ToString().Split(','))
                            {
                                if (item.ToString().Trim() != "")
                                {
                                    var GetAll = connection.Query<UserTypeLocation>(@"SELECT WorkflowStage as UserType ,WorkorderSection as Location 
FROM [dbo].[WorkOrder] 
join [dbo].[WorkOrderLane] on [WorkOrder].WorkOrderId=[WorkOrderLane].WoId
where
 [WorkOrderLane].LaneId='" + item.ToString().Split('-')[2] + @"'
and [WorkOrderLane].ActionId='" + item.ToString().Split('-')[0] + @"'
 and WorkorderSection='" + request.Entity.WorkorderSection + @"' and WorkflowStage not in ('0','-1') and [WorkOrderLane].ActionId <>'0'");


                                    var GetAllWar = connection.Query<UserTypeLocation>(@"SELECT WorkOrder.WorkOrderId as UserType ,WorkorderSection as Location 
FROM [dbo].[WorkOrder] 
join [dbo].[WorkOrderLane] on [WorkOrder].WorkOrderId=[WorkOrderLane].WoId
where
 [WorkOrderLane].LaneId='" + item.ToString().Split('-')[2] + @"'
and [WorkOrderLane].ActionId='" + item.ToString().Split('-')[0] + @"'
 and WorkorderSection='" + request.Entity.WorkorderSection + @"' and WorkflowStage  in ('0') and WarrantyEndDate > GETDATE() and [WorkOrderLane].ActionId <>'0'");


                                    if (GetAllWar.ToList().Count > 0)
                                    {
                                        IsOpenWar = true;
                                        IList<string> strings = new List<string>();
                                        foreach (var itemb in GetAllWar.ToList())
                                        {
                                            strings.Add(itemb.UserType);
                                        }
                                         joined = string.Join(",", strings);

                                        break;
                                    }
                                    if (GetAll.ToList().Count > 0)
                                    {
                                        IsOpen = true;
                                        LatestLane = item.ToString().Split('-')[2].ToString();
                                        break;
                                    }
                                    if (item.ToString().Split('-')[0].ToString().Trim() != "0")
                                    {
                                        Lanes++;
                                    }


                                }
                            }
                            var GetAll2 = connection.Query<UserTypeLocation>("select DEPT_NO as UserType from projects where DEPT_NO in (select Users.DepartmentId from Users where userid='" + Authorization.UserId.ToString() + "') and ProjectId='" + request.Entity.RefId.ToString() + "'");
                            if (IsOpen == true)
                            {
                                throw new ValidationError("This section has open workflow lane item :- " + LatestLane);

                            }
                            else if (IsOpenWar == true)
                            {
                             
                                throw new ValidationError("This section has open warranty on order item :- " + joined);


                            }
                            else if (Lanes == 0)
                            {
                                throw new ValidationError("At least one lane Must has Work type");

                            }

                            else if (GetAll2.ToList().Count == 0)
                            {
                                throw new ValidationError("You cannot create workflow in this project it's related to another department");

                            }
                            else
                            {



                                if (request.Entity.WorkorderLane.ToString().Trim() == "")
                                {

                                    throw new ValidationError("All Work order Must have at least one Lane");

                                }
                                else if (request.Entity.WorkorderLane.ToString().Trim() == ",")
                                {
                                    throw new ValidationError("All Work order Must have at least one Lane");

                                }
                                else
                                {


                                    var CurrentSeq = connection.Query<PMMS.Northwind.ItemSelect>("select top 1    'WO-' + right(Projects.DEPT_NO,2) + '-' +convert(nvarchar(max),   RIGHT(SeqN, LEN(SeqN) - 6) + 1) as  Id from workorder join Projects on workorder.refid=Projects.projectid and Projects.DEPT_NO in ( select projects2.DEPT_NO from projects as projects2  where projects2.projectid='" + request.Entity.RefId.ToString() + "') and workorder.workordersection<>'-1' order by RIGHT(SeqN, LEN(SeqN) - 6) desc").ToList();
                                    string SeqName = "";

                                    if (CurrentSeq.Count > 0)
                                    {
                                        SeqName = CurrentSeq[0].Id.ToString();
                                    }
                                    else
                                    {
                                        var CurrentSeq2 = connection.Query<PMMS.Northwind.ItemSelect>("select case when DEPT_NO='6581' then 'WO-' + right(Projects.DEPT_NO,2) + '-200000' else 'WO-' + right(Projects.DEPT_NO,2) + '-16000' end as  Id from Projects where projectid='" + request.Entity.RefId.ToString() + "'").ToList();
                                        SeqName = CurrentSeq2[0].Id.ToString();
                                    }

                                    request.Entity.SeqN = SeqName;
                                     var data = new MyRepository().Create(uow, request);
                                    string Id = data.EntityId.ToString();
                                  
                                    foreach (var item in Lane.ToString().Split(','))
                                    {
                                        if (item.ToString().Trim() != "")
                                        {
                                            if (item.ToString().Split('-')[0].ToString().Trim() != "0")
                                            {
                                                var queryParameters2 = new DynamicParameters();
                                                queryParameters2.Add("@WoId", Id);
                                                queryParameters2.Add("@LaneId", item.ToString().Split('-')[2]);
                                                queryParameters2.Add("@ActionId", item.ToString().Split('-')[0]);
                                      
                                                queryParameters2.Add("@roadnumber", road);
                                                queryParameters2.Add("@sectionNu", sec);
                                                queryParameters2.Add("@regnumber",reg);

                                                connection.Execute("INSERT INTO WorkOrderLane (WoId,LaneId,ActionId,roadnumber,regnumber,sectionNu) VALUES (@WoId, @LaneId ,@ActionId,@roadnumber,@regnumber,@sectionNu)", queryParameters2);

                                               // connection.Execute("INSERT INTO WorkOrderLane (WoId,LaneId,ActionId) VALUES (@WoId, @LaneId ,@ActionId)", queryParameters2);

                                            }


                                        }
                                    }
 return data;
                                
                                }


                            }
                           

                        }
                    }


                    
                }


             
            }
         
            
            else
            {
                throw new ValidationError("You cann't create new workflow/no access");

            }

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            if (request.Entity.WorkorderSection == "-1")
            {
                throw new ValidationError("You cann't update this doocument. it's closed");
            }
            else
            {
                return new MyRepository().Update(uow, request);

            }


        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

           

                if (Authorization.HasPermission(PermissionKeys.Apps.WorkflowAdmin))
            {
                using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                {

                    var AllItems = connection.Query<MyRow>("select * from workorder where workorderid='"+request.EntityId.ToString()+"'").ToList();
                    if (AllItems[0].WorkorderSection == "-1")
                    {
                        throw new ValidationError("You cann't delete this doocument. it's closed");
                    }
                    else
                    {
                        connection.Execute("delete from [WorkOrderFix] where [WorkOrderId]=" + request.EntityId);
                        connection.Execute("delete from [WorkOrderBug] where [WorkOrderId]=" + request.EntityId);
                        connection.Execute("delete from [workorderBOQItem] where [Woid]=" + request.EntityId);
                        connection.Execute("delete from WorkorderFlow where ItemId=" + request.EntityId);

                       


                        PMMS.Common.Helpers.SQLHelper sq = new Common.Helpers.SQLHelper();
                        var RJ=sq.RejectHafria(request.EntityId.ToString());
                        connection.Execute(RJ.SQL,RJ.para);

                    }



                }
                return new MyRepository().Delete(uow, request);


            }
            else
            {
                throw new ValidationError("You cann't delete this item /no access");
               
            }

           
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            //if (Authorization.HasPermission(PermissionKeys.Apps.WorkflowAdmin))
            //{
            //    return new MyRepository().Retrieve(connection, request);
            //}
            //else
            //{
            //    var ca = (new Criteria("WorkflowStage").In(GetUserStage()) || new Criteria("WorkOrderId").In(GetPrevTask()));
            //    // Project Eng
            //    if (GetUserType() == "3")
            //    {
            //        ca &= (new Criteria("RefId").In(GetUserProject()));

            //    }

            //    // Contractor
            //    else if (GetUserType() == "7")
            //    {
            //        ca &= (new Criteria("RefId").In(GetContractProject()));

            //    }

            //    // Director Munc
            //    else if (GetUserType() == "5")
            //    {
            //        ca &= (new Criteria("AssignTo").In(GetUserLocation()));

            //    }

            //    ca &= (new Criteria("WorkOrderId") == request.EntityId.ToString());

            //    var entity = new MyRepository().List(connection, new ListRequest
            //    {
            //        Criteria = ca,
            //        Take = 1
            //    }).Entities.ToList();

            //    if (entity.Count > 0)
            //    {
            //        return new MyRepository().Retrieve(connection, request);

            //    }
            //    else
            //    {
            //        throw new ValidationError("Not item found");
            //    }

            //}
            return new MyRepository().Retrieve(connection, request);

        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {




         //   request.Criteria &= (new Criteria("WorkflowStage").In(GetUserStage()) || new Criteria("WorkOrderId").In(GetPrevTask()));

            // Project Eng
            //if (GetUserType() == "3")
            //{
            //    request.Criteria &= (new Criteria("RefId").In(GetUserProject()));

            //}

            //// Contractor
            //else if (GetUserType() == "7")
            //{
            //    request.Criteria &= (new Criteria("RefId").In(GetContractProject()));

            //}

            //// Director Munc
            //else if (GetUserType() == "5")
            //{
            //    request.Criteria &= (new Criteria("AssignTo").In(GetUserLocation()));

            //}

            

        

            //  request.Criteria.InStatement(new Criteria("WorkflowStage").In(GetUserStage()) || new Criteria("WorkOrderId").In(GetPrevTask()));



            return new MyRepository().List(connection, request);
        }


        public bool UserInRole(string role)
        {
            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string userId = Authorization.UserId.ToString();
                var GetAll = connection.Query("select * from [dbo].[UserRoles] as us left join  [dbo].[Roles] as r on us.RoleId=r.RoleId where us.UserId='" + userId + "' and r.RoleName='" + role + "'");
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


        //public string GetContractNumber()
        //{
        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
        //        string userId = Authorization.UserId.ToString();
        //        var GetAll = connection.Query<Contractor>("select [CONTRACTOR_NO] from users as u join [dbo].[CONTRACTORS] as c on u.email=c.email and u.userid=" + userId);
        //        if (GetAll.ToList().Count > 0)
        //        {
        //            return GetAll.ToList()[0].CONTRACTOR_NO;
        //            //   return true;
        //        }
        //        else
        //        {
        //            return "-1";
        //        }
        //    }

          
        
        //}

        //public List<string> GetUserStage()
        //{
        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
              
        //        string userId = Authorization.UserId.ToString();
        //        List<string> stages = new List<string>();
        //        var GetAll = connection.Query<UserTypeLocation>("select stagekey as UserType from [dbo].[WorkFlow_Stages] where UserType=(select WorkFlowUserType from users where userid=" + userId + ")");
        //        if (GetAll.ToList().Count > 0)
        //        {

        //            //   return true;
        //            foreach (var item in GetAll)
        //            {
        //                stages.Add(item.UserType);

        //            }


        //        }
        //        else
        //        {
        //            stages.Add("-9");
        //        }


        //        return stages;

        //    }

        
           
        //}


        //public List<string> GetPrevTask()
        //{
        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {

        //        string userId = Authorization.UserId.ToString();
        //        List<string> stages = new List<string>();
        //        var GetAll = connection.Query<UserTypeLocation>("select WorkOrderId as UserType from workorder where WorkOrderId in ( select ItemId from WorkorderFlow where usertype=(select users.WorkFlowUserType from users where UserId=" + userId + ") )");
        //        if (GetAll.ToList().Count > 0)
        //        {

        //            //   return true;
        //            foreach (var item in GetAll.ToList())
        //            {
        //                stages.Add(item.UserType);

        //            }

        //        }
        //        else
        //        {
        //            stages.Add("-9");
        //        }

        //        return stages;
        //    }

          

        //}



        //public List<string> GetUserProject()
        //{

        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
        //        string userId = Authorization.UserId.ToString();
        //        List<string> stages = new List<string>();
        //        var GetAll = connection.Query<UserTypeLocation>("select projectid as UserType from projects where projects.ProjectUser=" + userId + "");
        //        if (GetAll.ToList().Count > 0)
        //        {

        //            //   return true;

        //            foreach (var item in GetAll)
        //            {
        //                stages.Add(item.UserType);

        //            }

        //        }
        //        else
        //        {
        //            stages.Add("-9");
        //        }


        //        return stages;
        //    }

          
         

        //}


        //public List<string> GetContractProject()
        //{
        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
        //        string userId = Authorization.UserId.ToString();
        //        List<string> stages = new List<string>();
        //        var GetAll = connection.Query<UserTypeLocation>("select projectid as UserType from projects where projects.SUP_NO in ( select CONTRACTORS.SUP_NO from CONTRACTORS where CONTRACTORS.contractoruser=" + userId + ")");
        //        if (GetAll.ToList().Count > 0)
        //        {

        //            //   return true;
        //            foreach (var item in GetAll)
        //            {
        //                stages.Add(item.UserType);

        //            }

        //        }
        //        else
        //        {
        //            stages.Add("-9");
        //        }


        //        return stages;
        //    }

          
          

        //}


        //public string GetUserType()
        //{
        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
        //        string userId = Authorization.UserId.ToString();

        //        var GetAll = connection.Query<UserTypeLocation>("select isnull(workflowusertype,-2) as UserType from users where userid=" + userId + "");


        //        return GetAll.ToList()[0].UserType.ToString();
        //    }
        
        

        //}


        //public string GetUserLocation()
        //{

        //    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
        //    {
        //        string userId = Authorization.UserId.ToString();

        //        var GetAll = connection.Query<UserTypeLocation>("select isnull(users.WorkFlowDirection,-2) as UserType from users where userid=" + userId + "");


        //        return GetAll.ToList()[0].UserType.ToString();
        //    }
          
           

        //}

    }
}
