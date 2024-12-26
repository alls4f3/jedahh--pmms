
namespace PMMS.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[UserGroups]")]
    [DisplayName("User Groups"), InstanceName("User Groups")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class UserGroupsRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Group Id"), Identity]
        public Int32? UserGroupId
        {
            get { return Fields.UserGroupId[this]; }
            set { Fields.UserGroupId[this] = value; }
        }

        [DisplayName("User Group Name"), Size(50), QuickSearch]
        public String UserGroupName
        {
            get { return Fields.UserGroupName[this]; }
            set { Fields.UserGroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserGroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserGroupsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserGroupId;
            public StringField UserGroupName;
        }
    }
}
