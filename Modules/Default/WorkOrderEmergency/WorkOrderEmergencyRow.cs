
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WorkOrderEmergency]")]
    [DisplayName("Work Order Emergency"), InstanceName("Work Order Emergency")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.WorkflowAdmin)]
    [DeletePermission(PermissionKeys.Apps.WorkflowAdmin)]
    [InsertPermission(PermissionKeys.Apps.WorkflowAdmin)]
    public sealed class WorkOrderEmergencyRow : Row, IIdRow, INameRow
    {
        [DisplayName("E Id"), PrimaryKey]
        public Int32? EId
        {
            get { return Fields.EId[this]; }
            set { Fields.EId[this] = value; }
        }

        [DisplayName("Ename"), Size(50), QuickSearch]
        public String Ename
        {
            get { return Fields.Ename[this]; }
            set { Fields.Ename[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Ename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkOrderEmergencyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EId;
            public StringField Ename;
        }
    }
}
