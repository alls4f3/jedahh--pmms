
using Serenity.Extensibility;
using System.ComponentModel;

namespace PMMS.Northwind
{
    [NestedPermissionKeys]
    [DisplayName("Related Data")]
    public class PermissionKeys
    {
        [DisplayName("Inbox")]
        public class Customer
        {
            //[ImplicitPermission(General), ImplicitPermission(View)]
            //public const string Delete = "Northwind:Customer:Delete";
            //public const string DeleteOrder = "Northwind:Customer:DeleteOrder";
            //[Description("Create/Update")]
            ////[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            //public const string Modify = "Northwind:Customer:Modify";
            //public const string View = "Northwind:Customer:View";
            //public const string ManageAll = "Northwind:Customer:ManageAll";




        }


        [DisplayName("Apps")]
        public class Apps
        {
          
            public const string DataEntry = "Apps:Data:DataEntry";
            public const string Computations = "Apps:Data:Computations";
            public const string Browser = "Apps:Data:Browser";
            public const string FileManager = "Apps:Data:FileManager";
            
            public const string Reports = "Apps:Data:Reports";
            public const string SystemReports = "Apps:Data:SystemReports";
            public const string Workflow = "Apps:Data:Workflow";
            public const string WorkflowProjectItem = "Apps:Data:WorkflowProjectItem";
            public const string WorkflowSkipHafria = "Apps:Data:WorkflowSkipHafria";
            public const string WorkflowOld = "Apps:Data:WorkflowOld";
            public const string WorkflowEdit= "Apps:Data:WorkFlowEdit";
            public const string WorkflowCreate= "Apps:Data:WorkflowCreate";
            public const string WorkflowAdmin = "Apps:Data:admin";
            public const string WorkflowExtQty= "Apps:Data:WorkfEXTQTY";
            public const string WorkflowPlannedQty = "Apps:Data:WorkfPlannedQTY";
            public const string ProjectItem = "Apps:Data:ProjectItem";
            public const string ProjectItemApproval = "Apps:Data:ProjectItemApproval";
            public const string QaApproval = "Apps:Data:QaApproval";

            public const string WorkflowAttachments1 = "Apps:Data:WorkflowAttachments1";
            public const string WorkflowAttachments2 = "Apps:Data:WorkflowAttachments2";
            public const string WorkFlowSkipHafria = "Apps:Data:WorkFlowSkipHafria";
            public const string WorkFlowSkipStreet = "Apps:Data:WorkFlowSkipStreet";
            public const string Parameters = "Apps:Data:Parameters";
            public const string Configrations = "Apps:Data:Configrations";
            public const string GIS = "Apps:Data:GIS";
            public const string DashBoards = "Apps:Data:DashBoardsView";
            public const string Assets = "Apps:Data:Assets";
            public const string Distortion = "Apps:Data:Distortion";
            public const string AssetsEngineer = "Apps:Data:Engineer";
            public const string ImportDataEntry = "Apps:Data:ImportDataEntry";
            //public const string Archive = "Apps:Data:Archive";
            //public const string WorkOrder = "Apps:Data:WorkOrder";
            public const string RelatedData = "Apps:Data:General";
            public const string PowerBi = "Apps:Data:PowerBi";
            public const string DashBoardCreator = "Apps:Data:DashBoardCreator";
            public const string ReportsCreator = "Apps:Data:ReportsCreator";
            public const string GISCreator = "Apps:Data:GISCreator";
            public const string WorkFlowConfiguration = "Apps:Data:WorkFlowConfiguration";




        }

        //[Description("[General]")]
        //public const string General = "Apps:Data:General";


        //[Description("[External User]")]
        //public const string ExtUser = "Apps:Data:General";
        //public const string CustomReports = "Northwind:CustomReports";

    }
}
