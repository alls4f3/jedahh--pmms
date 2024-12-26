
namespace PMMS.Default.Entities
{
    using PMMS.Modules.Common.BaseClass;
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WorkOrder]")]
    [DisplayName("Work Order"), InstanceName("Work Order")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    [DeletePermission(PermissionKeys.Apps.RelatedData)]
    [InsertPermission(PermissionKeys.Apps.RelatedData)]
    [LeftJoin("c", "Projects", "T0.[RefId]=c.[ProjectId]")]
    [LeftJoin("c2", "Department", "T0.[depid]=c2.[DepartmentId]")]



    public sealed class WorkOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Work Order Id"), Identity]
       
        public Int32? WorkOrderId
        {
            get { return Fields.WorkOrderId[this]; }
            set { Fields.WorkOrderId[this] = value; }
        }

        [DisplayName("Project Name"), QuickSearch]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("Contract Name")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public String ContractName
        {
            get { return Fields.ContractName[this]; }
            set { Fields.ContractName[this] = value; }
        }

        [DisplayName("Site location"),Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public String ProjectLocation
        {
            get { return Fields.ProjectLocation[this]; }
            set { Fields.ProjectLocation[this] = value; }
        }



        [DisplayName("Work Order Date  "), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowEdit)]

        public DateTime? DateOfOrderWork
        {
            get { return Fields.DateOfOrderWork[this]; }
            set { Fields.DateOfOrderWork[this] = value; }
        }

        [DisplayName("Work Duration"), Required(true),DefaultValue("بعد استكمال تصاريح العمل مباشرة")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public String WorkDuration
        {
            get { return Fields.WorkDuration[this]; }
            set { Fields.WorkDuration[this] = value; }
        }

        [DisplayName("Work Order Start Date"), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]


        public string WorkorderStartDate
        {
            get { return Fields.WorkorderStartDate[this]; }
            set { Fields.WorkorderStartDate[this] = value; }
        }

        [DisplayName("Work Order End Date"), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowEdit)]

        public DateTime? WorkorderEndDate
        {
            get { return Fields.WorkorderEndDate[this]; }
            set { Fields.WorkorderEndDate[this] = value; }
        }

        [DisplayName("Work Order Renew Date"), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowEdit)]
        public DateTime? WorkorderRenewDate
        {
            get { return Fields.WorkorderRenewDate[this]; }
            set { Fields.WorkorderRenewDate[this] = value; }
        }

        [DisplayName("Work Order Notes"),DefaultValue("على المقاول القيام بعمل الرفع المساحى ودراسة تصريف مياه الأمطار قبل البدء فى التنفيذ")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public String WorkorderNotes
        {
            get { return Fields.WorkorderNotes[this]; }
            set { Fields.WorkorderNotes[this] = value; }
        }






        [DisplayName("Doc1")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        public String Doc1
        {
            get { return Fields.Doc1[this]; }
            set { Fields.Doc1[this] = value; }
        }


        [DisplayName("Doc2")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        public String Doc2
        {
            get { return Fields.Doc2[this]; }
            set { Fields.Doc2[this] = value; }
        }

        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        [DisplayName("Doc3")]
        public String Doc3
        {
            get { return Fields.Doc3[this]; }
            set { Fields.Doc3[this] = value; }
        }
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        [DisplayName("Doc4")]
        public String Doc4
        {
            get { return Fields.Doc4[this]; }
            set { Fields.Doc4[this] = value; }
        }

        [DisplayName("Doc Image Map")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        public String DocImageMap
        {
            get { return Fields.DocImageMap[this]; }
            set { Fields.DocImageMap[this] = value; }
        }




        [DisplayName("Map key")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]

        public String DocImageMapKey
        {
            get { return Fields.DocImageMapKey[this]; }
            set { Fields.DocImageMapKey[this] = value; }
        }

        [DisplayName("Contractor Doc 1")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments2)]

        public String Doc5
        {
            get { return Fields.Doc5[this]; }
            set { Fields.Doc5[this] = value; }
        }


        [DisplayName("ContractorDoc 2")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments2)]

        public String Doc6
        {
            get { return Fields.Doc6[this]; }
            set { Fields.Doc6[this] = value; }
        }


        [DisplayName("Contractor Doc 3")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments2)]

        public String Doc7
        {
            get { return Fields.Doc7[this]; }
            set { Fields.Doc7[this] = value; }
        }


        [DisplayName("Contractor Doc 4")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments2)]

        public String Doc8
        {
            get { return Fields.Doc8[this]; }
            set { Fields.Doc8[this] = value; }
        }
      
        [MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments2)]
        [DisplayName("Contractor Archive")]

        public String DocOther2
        {
            get { return Fields.DocOther2[this]; }
            set { Fields.DocOther2[this] = value; }
        }

        [DisplayName("Archive")]

        [MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAttachments1)]
        public String DocOther1
        {
            get { return Fields.DocOther1[this]; }
            set { Fields.DocOther1[this] = value; }
        }

        

        [DisplayName("Action")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='ActionId' style='width: 100%;'> <option value='1'>Approve and forward</option> <option value='2'>Reject</option> <option value='3'>Keep saving</option> </select>")]
        [Expression("(T0.[Remark1])")]
        public string ActionTemaple
        {
            get { return Fields.ActionTemaple[this]; }
            set { Fields.ActionTemaple[this] = value; }
        }



        [DisplayName("Workflow History")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<table class=' table table-bordered' style='width:100%; background-color:#607D8B;'> <thead class='thead-dark'> <tr> <th>Time Stamp</th><th>Workflow Action From </th>  <th>Workflow Action To</th> <th>Action By</th> <th>Comment</th> </tr> </thead> <tbody id='bodyWorkflowD3'> </tbody> </table>")]
        [Expression("(T0.[Remark1])")]
        public string WorkflowHis
        {
            get { return Fields.WorkflowHis[this]; }
            set { Fields.WorkflowHis[this] = value; }
        }

        [DisplayName("Remark1"), Column("remark1")]
        public String Remark1
        {
            get { return Fields.Remark1[this]; }
            set { Fields.Remark1[this] = value; }
        }

        [DisplayName("Remark2"), Column("remark2")]
        public String Remark2
        {
            get { return Fields.Remark2[this]; }
            set { Fields.Remark2[this] = value; }
        }

      
        [DisplayName("Skip Hafria"),HideOnUpdate]
        [InsertPermission(PermissionKeys.Apps.WorkFlowSkipHafria)]
        public bool? IsLicReq
        {
            get { return Fields.IsLicReq[this]; }
            set { Fields.IsLicReq[this] = value; }
        }

        [DisplayName("Skip Street"),HideOnInsert]
        [InsertPermission(PermissionKeys.Apps.WorkFlowSkipStreet)]
        [UpdatePermission(PermissionKeys.Apps.WorkFlowSkipStreet)]
        public bool? SkipStreet
        {
            get { return Fields.SkipStreet[this]; }
            set { Fields.SkipStreet[this] = value; }
        }

        [DisplayName("Remark3"), Column("remark3")]
        public String Remark3
        {
            get { return Fields.Remark3[this]; }
            set { Fields.Remark3[this] = value; }
        }

        [DisplayName("Remark4"), Column("remark4")]
        public String Remark4
        {
            get { return Fields.Remark4[this]; }
            set { Fields.Remark4[this] = value; }
        }

        [DisplayName("Remark Date1"), Column("remarkDate1")]
        public DateTime? RemarkDate1
        {
            get { return Fields.RemarkDate1[this]; }
            set { Fields.RemarkDate1[this] = value; }
        }

        [DisplayName("Remark Date2"), Column("remarkDate2")]
        public DateTime? RemarkDate2
        {
            get { return Fields.RemarkDate2[this]; }
            set { Fields.RemarkDate2[this] = value; }
        }

        [DisplayName("Remark Date3"), Column("remarkDate3")]
        public DateTime? RemarkDate3
        {
            get { return Fields.RemarkDate3[this]; }
            set { Fields.RemarkDate3[this] = value; }
        }



        [DisplayName("DetailsHowToFix"), MasterDetailRelation(foreignKey: "WorkOrderId")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public List<WorkOrderFixRow> WorkOrderFix
        {
            get { return Fields.WorkOrderFix[this]; }
            set { Fields.WorkOrderFix[this] = value; }
        }


        [DisplayName("DetailsHowToFix"), MasterDetailRelation(foreignKey: "Woid")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public List<WorkorderBoqItemRow> WorkorderBoqItem
        {
            get { return Fields.WorkorderBoqItem[this]; }
            set { Fields.WorkorderBoqItem[this] = value; }
        }



        

        [DisplayName("Project Ref"),Required(true)]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ProjectLook))]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public Int32? RefId
        {
            get { return Fields.RefId[this]; }
            set { Fields.RefId[this] = value; }
        }



        [DisplayName("emergency"), Required(true)]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.EmrgLook))]
        [Updatable(false)]

        public Int32? emergency
        {
            get { return Fields.emergency[this]; }
            set { Fields.emergency[this] = value; }
        }


        [DisplayName("Assign To"), Required(true)]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook))]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public string AssignTo
        {
            get { return Fields.AssignTo[this]; }
            set { Fields.AssignTo[this] = value; }
        }

        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }


        public DateTime? LastUpdate
        {
            get { return Fields.LastUpdate[this]; }
            set { Fields.LastUpdate[this] = value; }
        }


        [DisplayName("Status")]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }


        [DisplayName("WorkflowStage")]
        public String WorkflowStage
        {
            get { return Fields.WorkflowStage[this]; }
            set { Fields.WorkflowStage[this] = value; }
        }

        [DisplayName("workflowStagename")]
        public String workflowStagename
        {
            get { return Fields.workflowStagename[this]; }
            set { Fields.workflowStagename[this] = value; }
        }





        [DisplayName("DepartmentName")]
        [Expression("(c2.[DepartmentName] )")]
        public string DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }



        [DisplayName("Project")]
        [Expression("(c.[ProjectName] )")]
        public string Project
        {
            get { return Fields.Project[this]; }
            set { Fields.Project[this] = value; }
        }

        [DisplayName("Contractor")]
        [Expression("(c.[ContractorName] )")]
        public string Contractor
        {
            get { return Fields.Contractor[this]; }
            set { Fields.Contractor[this] = value; }
        }



        [DisplayName("ProjectStart")]
        [Expression("(c.proj_start_date )")]
        public int? ProjectStart
        {
            get { return Fields.ProjectStart[this]; }
            set { Fields.ProjectStart[this] = value; }
        }

        [DisplayName("<span style='color:red'>*</span>Section No ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='SectionID' style='width: 100%;'>  </select>")]
        [NotMapped]
        public string SectionNoTemplate
        {
            get { return Fields.SectionNoTemplate[this]; }
            set { Fields.SectionNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>GISPickUP")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<button type='button' id='Gisbtn'>Select</button>")]
        [NotMapped]
        public string GISPickUP
        {
            get { return Fields.GISPickUP[this]; }
            set { Fields.GISPickUP[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>Road No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='RoadID' class='mslectmany' multiple>  </select>")]
        [NotMapped]
        public string RoadNoTemplate 
        {
            get { return Fields.RoadNoTemplate[this]; }
            set { Fields.RoadNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>Area No ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='area' style='width: 100%;'>  </select>")]
        [NotMapped]
        public string AreaNoTemplate
        {
            get { return Fields.AreaNoTemplate[this]; }
            set { Fields.AreaNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span> Zone No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='zoneSelect' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string ZoneNoTemplate
        {
            get { return Fields.ZoneNoTemplate[this]; }
            set { Fields.ZoneNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>City No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='citySelect' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string CityNoTemplate
        {
            get { return Fields.CityNoTemplate[this]; }
            set { Fields.CityNoTemplate[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>City No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='protem' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string protem
        {
            get { return Fields.protem[this]; }
            set { Fields.protem[this] = value; }
        }

        [DisplayName("<span style='color:red'>*</span>Lane")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='LaneTemplate'>  </div>")]
        [NotMapped]

        public string LaneTemplate
        {
            get { return Fields.LaneTemplate[this]; }
            set { Fields.LaneTemplate[this] = value; }
        }


        [DisplayName("Hafria Integration")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='HafriaTemplate'>  </div>")]
        [NotMapped]

        public string HafriaTemplate
        {
            get { return Fields.HafriaTemplate[this]; }
            set { Fields.HafriaTemplate[this] = value; }
        }


        public string WorkorderSection
        {
            get { return Fields.WorkorderSection[this]; }
            set { Fields.WorkorderSection[this] = value; }
        }

        public string WorkorderRoad
        {
            get { return Fields.WorkorderRoad[this]; }
            set { Fields.WorkorderRoad[this] = value; }
        }


        public string WorkorderArea
        {
            get { return Fields.WorkorderArea[this]; }
            set { Fields.WorkorderArea[this] = value; }
        }


        public string WorkorderZone
        {
            get { return Fields.WorkorderZone[this]; }
            set { Fields.WorkorderZone[this] = value; }
        }

        public string WorkorderCity
        {
            get { return Fields.WorkorderCity[this]; }
            set { Fields.WorkorderCity[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>Feature")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='FeatureID' multiple='multiple' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string LaneNoTemplate
        {
            get { return Fields.LaneNoTemplate[this]; }
            set { Fields.LaneNoTemplate[this] = value; }
        }





        [DisplayName("<span style='color:red'></span>")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='mapviwerAll'><div id='mapviwer'></div></div>")]
        [NotMapped]

        public string MyMapLocation
        {
            get { return Fields.MyMapLocation[this]; }
            set { Fields.MyMapLocation[this] = value; }
        }


        [DisplayName("signature"),Hidden]
        [NotMapped]

        public string signature
        {
            get { return Fields.signature[this]; }
            set { Fields.signature[this] = value; }
        }


        public string WorkorderLane
        {
            get { return Fields.WorkorderLane[this]; }
            set { Fields.WorkorderLane[this] = value; }
        }

        //        WorkOrderLocation 
        //WorkorderCity   
        //WorkorderZone  
        //WorkorderArea   
        //WorkorderRoad 
        //WorkorderSection   

        [DisplayName("Years Of Life")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public Int32? YearsOfLife
        {
            get { return Fields.YearsOfLife[this]; }
            set { Fields.YearsOfLife[this] = value; }
        }

        [DisplayName("Warranty Start Date"), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public DateTime? WarrantyStartDate
        {
            get { return Fields.WarrantyStartDate[this]; }
            set { Fields.WarrantyStartDate[this] = value; }
        }

        [DisplayName("Warranty End Date"), Required(true)]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public DateTime? WarrantyEndDate
        {
            get { return Fields.WarrantyEndDate[this]; }
            set { Fields.WarrantyEndDate[this] = value; }
        }

        [DisplayName("Work Order Id"),Updatable(false),HideOnInsert(true)]
        public string SeqN
        {
            get { return Fields.SeqN[this]; }
            set { Fields.SeqN[this] = value; }
        }


        [DisplayName("What is the equipment"), MasterDetailRelation(foreignKey: "WorkOrderId")]
        [UpdatePermission(PermissionKeys.Apps.WorkflowAdmin)]

        public List<WorkOrderBugRow> WorkOrderBug
        {
            get { return Fields.WorkOrderBug[this]; }
            set { Fields.WorkOrderBug[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>Sections")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='MultiSectionTemplate'>  </div>")]
        [NotMapped]

        public string MultiSectionTemplate
        {
            get { return Fields.LaneTemplate[this]; }
            set { Fields.LaneTemplate[this] = value; }
        }


        [DisplayName("Street")]
        public string DisplayStreet
        {
            get { return Fields.DisplayStreet[this]; }
            set { Fields.DisplayStreet[this] = value; }
        }


        [DisplayName("Zone")]
        public string DisplayZone
        {
            get { return Fields.DisplayZone[this]; }
            set { Fields.DisplayZone[this] = value; }
        }

        [DisplayName("Area")]
        public string DisplayArea
        {
            get { return Fields.DisplayArea[this]; }
            set { Fields.DisplayArea[this] = value; }
        }




        [DisplayName("City")]
        public string DisplayCity
        {
            get { return Fields.DisplayCity[this]; }
            set { Fields.DisplayCity[this] = value; }
        }



        [DisplayName("Section")]
        public string DisplaySection
        {
            get { return Fields.DisplaySection[this]; }
            set { Fields.DisplaySection[this] = value; }
        }

    



        [DisplayName("DepId")]
        public String DepId
        {
            get { return Fields.DepId[this]; }
            set { Fields.DepId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WorkOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProjectName; }
        }







        public static readonly RowFields Fields = new RowFields().Init();

        public WorkOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WorkOrderId;
            public StringField ProjectName;
            public StringField protem;
            public StringField DepId;
            

            public StringField signature;
            public StringField ContractName;
            public StringField ProjectLocation;
            public DateTimeField DateOfOrderWork;
            public StringField WorkDuration;
            public StringField WorkorderStartDate;
            public DateTimeField WorkorderEndDate;
            public DateTimeField WorkorderRenewDate;
            public StringField WorkorderNotes;
            public StringField ActionTemaple;
            public StringField WorkflowHis;

            public BooleanField IsLicReq;
            public BooleanField SkipStreet;
            public StringField Status;
            public StringField WorkflowStage;
            public StringField workflowStagename;


            public DateTimeField CreatedDate;
            public DateTimeField LastUpdate;

            
            public StringField Doc1;
            public StringField Doc2;
            public StringField Doc3;
            public StringField Doc4;
            public StringField Doc5;
            public StringField Doc6;
            public StringField Doc7;
            public StringField Doc8;
            public StringField DocImageMap;
            public StringField DocImageMapKey;
            
            public StringField Remark1;
            public StringField Remark2;
            public StringField Remark3;
            public StringField Remark4;
            public DateTimeField RemarkDate1;
            public DateTimeField RemarkDate2;
            public DateTimeField RemarkDate3;
            public Int32Field RefId;
            public StringField AssignTo;
            
            public StringField Project;
            public StringField DepartmentName;


            
            public StringField Contractor;
            public Int32Field ProjectStart;
            


            public RowListField<WorkOrderFixRow> WorkOrderFix;
            public RowListField<WorkOrderBugRow> WorkOrderBug;
            public RowListField<WorkorderBoqItemRow> WorkorderBoqItem;

            
            public StringField AreaNoTemplate;
            public StringField CityNoTemplate;
            public StringField ZoneNoTemplate;
            public StringField RoadNoTemplate;
            public StringField SectionNoTemplate;
            public StringField LaneNoTemplate;
            public StringField MyMapLocation;
            
            public StringField GISPickUP;

            public StringField WorkorderCity;
            public StringField WorkorderZone;
            public StringField WorkorderArea;
            public StringField WorkorderRoad;
            public StringField WorkorderSection;
            public StringField WorkorderLane;
            public StringField DocOther2;
            public StringField DocOther1;


            public StringField LaneTemplate;
            public StringField HafriaTemplate;
            
            public StringField SeqN;

            public StringField MultiSectionTemplate;


            
            public Int32Field emergency;
            public Int32Field YearsOfLife;
            public DateTimeField WarrantyStartDate;
            public DateTimeField WarrantyEndDate;

            public StringField DisplayStreet;
            public StringField DisplayZone;
            public StringField DisplayArea;
            public StringField DisplayCity;
            public StringField DisplaySection;


            


 
  

        }
    }


   
}
