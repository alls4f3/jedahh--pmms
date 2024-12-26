
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WorkOrderBug]")]
    [DisplayName("Work Order equipment"), InstanceName("Work Order equipment")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class WorkOrderBugRow : Row, IIdRow, INameRow
    {
        [DisplayName("equipment id"), Column("ItemBugID"), Identity]
        public Int32? ItemBugId
        {
            get { return Fields.ItemBugId[this]; }
            set { Fields.ItemBugId[this] = value; }
        }

        [DisplayName("equipment Name"), QuickSearch]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.BugLook))]
        public String ItemBugName
        {
            get { return Fields.ItemBugName[this]; }
            set { Fields.ItemBugName[this] = value; }
        }


        [DisplayName("equipment Number"), QuickSearch]
        public String EqNumber
        {
            get { return Fields.EqNumber[this]; }
            set { Fields.EqNumber[this] = value; }
        }

        [DisplayName("Notes"), QuickSearch]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Work Order Id"), ForeignKey(typeof(WorkOrderRow)), LeftJoin("o"), Updatable(false)]
        public Int32? WorkOrderId
        {
            get { return Fields.WorkOrderId[this]; }
            set { Fields.WorkOrderId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemBugId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemBugName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkOrderBugRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemBugId;
            public StringField ItemBugName;
            public Int32Field WorkOrderId;
            public StringField EqNumber;
            public StringField Notes;

        }
    }
}
