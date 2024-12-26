
namespace PMMS.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using Northwind;
    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[WorkFlowUserType]")]
    [DisplayName("Work Flow User Type"), InstanceName("Work Flow User Type")]
    [ReadPermission(PermissionKeys.Apps.WorkFlowConfiguration)]
    [ModifyPermission(PermissionKeys.Apps.WorkFlowConfiguration)]
    [LookupScript]
    public sealed class WorkFlowUserTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Type Id"), Identity]
        public Int32? UserTypeId
        {
            get { return Fields.UserTypeId[this]; }
            set { Fields.UserTypeId[this] = value; }
        }

        [DisplayName("User Type Name"), Size(50), QuickSearch]
        public String UserTypeName
        {
            get { return Fields.UserTypeName[this]; }
            set { Fields.UserTypeName[this] = value; }
        }

        [DisplayName("Assign Type"), Column("assignType")]
        public Int32? AssignType
        {
            get { return Fields.AssignType[this]; }
            set { Fields.AssignType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkFlowUserTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserTypeId;
            public StringField UserTypeName;
            public Int32Field AssignType;
        }
    }
}
