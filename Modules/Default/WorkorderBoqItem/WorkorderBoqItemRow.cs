
namespace PMMS.Default.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[workorderBOQItem]")]
    [DisplayName("Workorder Boq Item"), InstanceName("Workorder Boq Item")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [InsertPermission(PermissionKeys.Apps.WorkflowProjectItem)]
    [ModifyPermission(PermissionKeys.Apps.WorkflowProjectItem)]

    public sealed class WorkorderBoqItemRow : Row, IIdRow, INameRow
    {
        [DisplayName("B Item Id"), Identity]
        public Int32? BItemId
        {
            get { return Fields.BItemId[this]; }
            set { Fields.BItemId[this] = value; }
        }

        [DisplayName("Itm Code"), Column("ITM_CODE"), Size(255), QuickSearch]
        public String ItmCode
        {
            get { return Fields.ItmCode[this]; }
            set { Fields.ItmCode[this] = value; }
        }

        [DisplayName("Itm Seq"), Column("ITM_SEQ")]
        public Double? ItmSeq
        {
            get { return Fields.ItmSeq[this]; }
            set { Fields.ItmSeq[this] = value; }
        }

        [DisplayName("Itm Desc"), Column("ITM_DESC")]
        //[LookupEditor(typeof(PMMS.Northwind.Lookups.ProjectLook))]
        public String ItmDesc
        {
            get { return Fields.ItmDesc[this]; }
            set { Fields.ItmDesc[this] = value; }
        }

        [DisplayName("Contract Id"), Column("CONTRACT_ID")]
        public Double? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Unit"), Column("UNIT"), Size(255)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Qty"), Column("QTY")]
        public Double? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Woid")]
        public Int32? Woid
        {
            get { return Fields.Woid[this]; }
            set { Fields.Woid[this] = value; }
        }

        [DisplayName("Exec Qty"), Column("EXEC_QTY")]
        public Double? ExecQty
        {
            get { return Fields.ExecQty[this]; }
            set { Fields.ExecQty[this] = value; }
        }

        [DisplayName("Planned QTY "), Column("Planned_QTY")]
        public Double? Planned_QTY
        {
            get { return Fields.Planned_QTY[this]; }
            set { Fields.Planned_QTY[this] = value; }
        }

        [DisplayName("Prev Exec Qty"), Column("Prev_EXEC_QTY")]
        public Double? Prev_EXEC_QTY
        {
            get { return Fields.Prev_EXEC_QTY[this]; }
            set { Fields.Prev_EXEC_QTY[this] = value; }
        }


        [DisplayName("Remainder"), Column("REMAINDER")]
        public Double? REMAINDER
        {
            get { return Fields.REMAINDER[this]; }
            set { Fields.REMAINDER[this] = value; }
        }


        [DisplayName("InvoiceStartDate"), Column("InvoiceStartDate")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]

        public DateTime? InvoiceStartDate
        {
            get { return Fields.InvoiceStartDate[this]; }
            set { Fields.InvoiceStartDate[this] = value; }
        }


        [DisplayName("InvoiceEndDate"), Column("InvoiceEndDate")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]

        public DateTime? InvoiceEndDate
        {
            get { return Fields.InvoiceEndDate[this]; }
            set { Fields.InvoiceEndDate[this] = value; }
        }


        [DisplayName("RealInvoiceStartDate"), Column("RealInvoiceStartDate")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]
        public DateTime? RealInvoiceStartDate
        {
            get { return Fields.RealInvoiceStartDate[this]; }
            set { Fields.RealInvoiceStartDate[this] = value; }
        }


        [DisplayName("RealInvoiceEndDate"), Column("RealInvoiceEndDate")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]

        public DateTime? RealInvoiceEndDate
        {
            get { return Fields.RealInvoiceEndDate[this]; }
            set { Fields.RealInvoiceEndDate[this] = value; }
        }

        [DisplayName("ItemStatus"), Column("ItemStatus"), ForeignKey(typeof(WorkorderItemStatusRow)), LeftJoin("p")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.WorkorderItemStatus))]

        public int? ItemStatus
        {
            get { return Fields.ItemStatus[this]; }
            set { Fields.ItemStatus[this] = value; }
        }


        [DisplayName("Comment"), Column("Comment")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]

        public string Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("InvoiceNumber"), Column("InvoiceNumber")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItem)]

        public string InvoiceNumber
        {
            get { return Fields.InvoiceNumber[this]; }
            set { Fields.InvoiceNumber[this] = value; }
        }



        [DisplayName("Status")]
        [Origin("p", "ItemName"), MinSelectLevel(SelectLevel.List)]

        public string Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("QaComment")]
        [UpdatePermission(PermissionKeys.Apps.QaApproval)]

        public string QaComment
        {
            get { return Fields.QaComment[this]; }
            set { Fields.QaComment[this] = value; }
        }

        [DisplayName("QaApproved")]
        [UpdatePermission(PermissionKeys.Apps.QaApproval)]

        public bool? QaApproved
        {
            get { return Fields.QaApproved[this]; }
            set { Fields.QaApproved[this] = value; }
        }

        [DisplayName("IsApproved")]
        [UpdatePermission(PermissionKeys.Apps.ProjectItemApproval)]

        public bool? IsApproved
        {
            get { return Fields.IsApproved[this]; }
            set { Fields.IsApproved[this] = value; }
        }

   

        [DisplayName("<span style='color:red'>*</span>Item")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='itemBqSelect' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string ItemDescTemplate
        {
            get { return Fields.ItemDescTemplate[this]; }
            set { Fields.ItemDescTemplate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItmCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkorderBoqItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BItemId;

            
                
                
            public StringField QaComment;
            public BooleanField QaApproved;
            public BooleanField IsApproved;

            public StringField ItmCode;
            public StringField ItemDescTemplate;
            public DoubleField ItmSeq;
            public StringField ItmDesc;
            public DoubleField ContractId;
            public StringField Unit;
            public DoubleField Qty;
            public Int32Field Woid;
            public DoubleField ExecQty;
            public DoubleField Planned_QTY;
            
            public DoubleField Prev_EXEC_QTY;
            public DoubleField REMAINDER;
            public DateTimeField InvoiceStartDate;
            public DateTimeField InvoiceEndDate;
            public DateTimeField RealInvoiceStartDate;
            public DateTimeField RealInvoiceEndDate;
            public Int32Field ItemStatus;
            public StringField Status;
            public StringField Comment;
            public StringField InvoiceNumber;
            




        }
    }
}
