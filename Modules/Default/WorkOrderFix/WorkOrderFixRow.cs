
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WorkOrderFix]")]
    [DisplayName("Work Order Fix"), InstanceName("Work Order Fix")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class WorkOrderFixRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Fix Id"), Column("ItemFixID"), Identity]
        public Int32? ItemFixId
        {
            get { return Fields.ItemFixId[this]; }
            set { Fields.ItemFixId[this] = value; }
        }


        [DisplayName("Item Fix Name"), QuickSearch]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.FixLook))]
        public String ItemFixName
        {
            get { return Fields.ItemFixName[this]; }
            set { Fields.ItemFixName[this] = value; }
        }

        [DisplayName("Work Order Id") ,ForeignKey(typeof(WorkOrderRow)), LeftJoin("o"), Updatable(false)]
        public Int32? WorkOrderId
        {
            get { return Fields.WorkOrderId[this]; }
            set { Fields.WorkOrderId[this] = value; }
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
        IIdField IIdRow.IdField
        {
            get { return Fields.ItemFixId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemFixName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkOrderFixRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemFixId;
            public StringField ItemFixName;
            public Int32Field WorkOrderId;

            public StringField EqNumber;
            public StringField Notes;
        }
    }
}
