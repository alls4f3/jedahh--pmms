
namespace PMMS.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LeftJoin("c", "WorkFlowUserType", "T0.[WorkFlowUserType]=c.[UserTypeId]")]
    [LookupScript(Permission =PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public sealed class UserRow : LoggingRow, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [LookupEditor(typeof(PMMS.Administration.Entities.WorkFlowUserTypeRow))]
        public Int32? WorkFlowUserType
        {
            get { return Fields.WorkFlowUserType[this]; }
            set { Fields.WorkFlowUserType[this] = value; }
        }


        [LookupEditor(typeof(PMMS.Administration.Entities.UserGroupsRow), Multiple = true)]
        [DisplayName("User Group")]

        public Int32? UserGroup
        {
            get { return Fields.UserGroup[this]; }
            set { Fields.UserGroup[this] = value; }
        }
        


        [LookupEditor(typeof(PMMS.Default.Entities.DepartmentRow))]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }



        [LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook))]

        public string WorkFlowDirection
        {
            get { return Fields.WorkFlowDirection[this]; }
            set { Fields.WorkFlowDirection[this] = value; }
        }




        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }
        [DisplayName("User Mobile")]
        [MaskedEditor(Mask = "999-99-9999999")]
        public string UserMobile
        {
            get { return Fields.UserMobile[this]; }
            set { Fields.UserMobile[this] = value; }
        }

        [DisplayName("User Type")]
        [Expression("(c.[UserTypeName] )")]
        public string UserTypeName
        {
            get { return Fields.UserTypeName[this]; }
            set { Fields.UserTypeName[this] = value; }
        }

        [DisplayName("SSO"), Size(15)]
        public String SSO
        {
            get { return Fields.SSO[this]; }
            set { Fields.SSO[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField UserMobile;
            public StringField Email;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;

            public StringField Password;
            public StringField PasswordConfirm;
            public Int32Field WorkFlowUserType;
            public StringField WorkFlowDirection;
            public StringField UserTypeName;
            public Int32Field DepartmentId;
            public Int32Field UserGroup;

            
            public StringField SSO;
            

        }
    }
}