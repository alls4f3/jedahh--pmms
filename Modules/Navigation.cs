using Serenity.Navigation;
using MyPages = PMMS.Northwind.Pages;
using Northwind = PMMS.Northwind.Pages;
using MyPages2 = PMMS.Default.Pages;
using MyPages3 = PMMS.Default.Pages;
using MyPages4 = PMMS.EAM.Pages;
using MyPages7 = PMMS.Administration.Pages;

using System.Collections.Generic;
using Serenity.Data;
using Serenity;

[assembly: NavigationMenu(1100, "Pavement", icon: "fa-table")]

[assembly: NavigationLink(1100, "Pavement/Data Entry", typeof(PMMS.Apps.DataEntry.DataEntryController), icon: "fa-credit-card")]
[assembly: NavigationLink(1100, "Pavement/Import Wizard", typeof(MyPages3.ImportWizerdDataController), icon: "fa-credit-card")]
[assembly: NavigationLink(1101, "Pavement/Equipment Files", typeof(MyPages3.ImportWizerdByEqFilesController), icon: "fa-credit-card")]


[assembly: NavigationMenu(2000, "Work Order", icon: "fa-file-text-o")]
[assembly: NavigationLink(2100, "Work Order/Workflow", typeof(MyPages2.WorkOrderController), icon: "fa-credit-card")]
[assembly: NavigationLink(2200, "Work Order/Contractors", typeof(PMMS.Default.Pages.ContractorsController), icon: "fa-credit-card")]
[assembly: NavigationLink(2100, "Work Order/Projects", typeof(MyPages2.ProjectsController), icon: "fa-credit-card")]
[assembly: NavigationLink(2200, "Work Order/Fix List", typeof(PMMS.Default.Pages.FixListController), icon: null)]
[assembly: NavigationLink(2200, "Work Order/Equipment List", typeof(PMMS.Default.Pages.BugsListController), icon: null)]
[assembly: NavigationLink(2201, "Work Order/Project Item Status", typeof(MyPages2.WorkorderItemStatusController), icon: "fa-credit-card")]
[assembly: NavigationLink(2202, "Work Order/Work Order Old", typeof(MyPages2.WorkOrderOldController), icon: null)]



[assembly: NavigationMenu(3097, "EAM", icon: "fa-sitemap")]
[assembly: NavigationLink(3098, "EAM/Assets", typeof(MyPages4.AssetsController), icon: "fa-credit-card")]

[assembly: NavigationMenu(3099, "EAM/Config", icon: "fa-th-large")]
[assembly: NavigationLink(3099, "EAM/Config/Asset Feature", typeof(MyPages4.AssetTypeController), icon: null)]

[assembly: NavigationLink(3099, "EAM/Config/Asset Category", typeof(MyPages4.AssetCategoryController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Sub Category", typeof(MyPages4.AssetSubCategoryController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Sub  Level", typeof(MyPages4.AssetSubCategoryLevelController), icon: null)]

[assembly: NavigationLink(3099, "EAM/Config/Asset Tree", typeof(MyPages4.AssetClassController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Dimansion", typeof(MyPages4.AssetDimansionController), icon: null)]
[assembly: NavigationLink(7099, "EAM/Config/Asset Service Status", typeof(MyPages4.AssetServiceStatusController), icon: null)]
[assembly: NavigationLink(7099, "EAM/Config/Assets Maint Condation", typeof(MyPages4.AssetsMaintCondationController), icon: null)]
[assembly: NavigationLink(7099, "EAM/Config/Assets Maint Crit", typeof(MyPages4.AssetsMaintCritController), icon: null)]
[assembly: NavigationLink(7099, "EAM/Config/Assets Maint Sub Set", typeof(MyPages4.AssetsMaintSubSetController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Status", typeof(MyPages4.AssetStatusController), icon: null)]


[assembly: NavigationLink(3099, "EAM/Config/Asset Location", typeof(MyPages4.AssetLocationController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Building", typeof(MyPages4.AssetBuildingController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Attr", typeof(MyPages4.AssetAttrController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Config/Asset Distress", typeof(MyPages4.AssetDistressController), icon: null)]


[assembly: NavigationMenu(3099, "EAM/Engineer tools", icon: "fa-th-large")]

[assembly: NavigationLink(3099, "EAM/Engineer tools/Sub Calc", typeof(MyPages4.AssetSubCalcController), icon: null)]
[assembly: NavigationLink(3099, "EAM/Engineer tools/Assets Total Calc", typeof(MyPages4.AssetsTotalCalcController), icon: null)]




[assembly: NavigationLink(4100, "Business Intelligence", typeof(PMMS.Common.Pages.ReportsAPIController), icon: "fa-bar-chart")]

[assembly: NavigationMenu(7000, "Parameters", icon: "fa-sliders")]
[assembly: NavigationMenu(7200, "Parameters/M & R", icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/M & R/Cost Matrix", typeof(PMMS.Parameters.MR.CostMatrixController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/M & R/Selection Matrix", typeof(PMMS.Parameters.MR.SelectionMatrixController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/M & R/Special Treatment", typeof(PMMS.Parameters.MR.SpecialTreatmentController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/M & R/Overridding Matrix", typeof(PMMS.Parameters.MR.OverridingMatrixController), icon: "fa-credit-card")]

[assembly: NavigationLink(7200, "Parameters/Priority", typeof(PMMS.Parameters.Priority.RoadClassController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Weight Factor Wt", typeof(PMMS.Parameters.Priority.FactorWeightsController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Immportance Community", typeof(PMMS.Parameters.Priority.ImportanceCommunityController), icon: "fa-credit-card")]

[assembly: NavigationLink(7200, "Parameters/Priority/Calls 940", typeof(PMMS.Parameters.Priority.Call940Controller), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/distortion elements ", typeof(PMMS.Parameters.Priority.distortionController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/digs", typeof(PMMS.Parameters.Priority.digsController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Traffic", typeof(PMMS.Parameters.Priority.TrafficController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Road SubClass", typeof(PMMS.Parameters.Priority.RoadSubClassController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Locatian", typeof(PMMS.Parameters.Priority.locatianController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Infrastructure", typeof(PMMS.Parameters.Priority.InfrastructureController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Road safety( FN )", typeof(PMMS.Parameters.Priority.slipController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Priority/Driving Quality (IRI)", typeof(PMMS.Parameters.Priority.roughnessController), icon: "fa-credit-card")]



[assembly: NavigationLink(7200, "Parameters/Survey", typeof(PMMS.Parameters.Survey.SurveyController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Equipments", typeof(PMMS.Parameters.Equipment.EquipmentController), icon: "fa-credit-card")]
[assembly: NavigationLink(7200, "Parameters/Forecast & Budget Planning", typeof(PMMS.Parameters.Forecast.ForecastController), icon: "fa-credit-card")]



[assembly: NavigationMenu(8000, "Configration", icon: "fa-cogs")]
[assembly: NavigationLink(8200, "Configration/Section", typeof(PMMS.Default.Pages.SectionController), icon: "fa-credit-card")]
[assembly: NavigationLink(8200, "Configration/Roads", typeof(PMMS.Default.Pages.RoadsController), icon: "fa-credit-card")]
[assembly: NavigationLink(8200, "Configration/Direction", typeof(PMMS.Default.Pages.DirectionController), icon: "fa-credit-card")]
[assembly: NavigationLink(8200, "Configration/Feature", typeof(PMMS.Default.Pages.FeaturesController), icon: "fa-credit-card")]
[assembly: NavigationLink(8200, "Configration/Department", typeof(MyPages3.DepartmentController), icon: "fa-credit-card")]



[assembly: NavigationMenu(8300, "Geo provider", icon: "fa-map-o")]

[assembly: NavigationLink(8300, "Geo provider/Gis Layer Connections", typeof(MyPages7.GisLayerConnectionsController), icon: null)]




public class DynamicNavigationSample : INavigationItemSource
{
    public List<NavigationItemAttribute> GetItems()
    {
        var items = new List<NavigationItemAttribute>
            {
                new NavigationMenuAttribute(6100, "GIS", "fa-map-o"),
                new NavigationMenuAttribute(5010, "Dashboard", "fa-pie-chart"),



            };

        // Add product categories as dynamic navigation items for demo purpose
        using (var connection = SqlConnections.NewByKey("Default"))
        {
            var categories = connection.List<PMMS.Administration.Entities.GisLayerConnectionsRow>();
           
            foreach (var category in categories)
            {
                string f = "";

                if (string.IsNullOrEmpty( category.FolderName))
                {
                    f = "";
                }
                else
                {
                     f = category.FolderName + "/";

                }
                if (category.ReportUsers != null)
                {
                    var st = category.ReportUsers.ToString().Split(',');
                    var u = Authorization.UserId.ToString();
                    foreach (var item in st)
                    {
                        if (u == item)
                        {
                            items.Add(new NavigationLinkAttribute(7100,
                                      path: "GIS/" + f + category.GisPageName.Replace("/", "//"),
                                      url: "~/Apps/GIS/display?render=" + category.GisPageId,
                                      permission: "Apps:Data:GIS",
                                      icon: "fa-map-o"));
                            break;
                        }
                    }
                }
              

                

            }
              
        }

        using (var connection = SqlConnections.NewByKey("Default"))
        {
            var categories = connection.List<PMMS.BI.Entities.CustomDashboardsRow>();
            foreach (var category in categories)
            {

                string f = "";

                if (string.IsNullOrEmpty(category.FolderName))
                {
                    f = "";
                }
                else
                {
                    f = category.FolderName + "/";

                }

                items.Add(new NavigationLinkAttribute(5010,
                   path: "Dashboard/"+ f + category.PageName.Replace("/", "//"),
                   url: "~/Apps/BIDashboards?ReportId=" + category.PageId,
                   permission: "Apps:Data:DashBoardsView",
                   icon: "fa-pie-chart"));

            
            }
               
        }

        return items;
    }


}