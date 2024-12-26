
namespace PMMS.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Administration"), TableName("[dbo].[AuditLog]")]
    [DisplayName("Audit Log"), InstanceName("Audit Log")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AuditLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Name"), Size(50), NotNull, QuickSearch]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Action"), Size(50), NotNull]
        public String Action
        {
            get { return Fields.Action[this]; }
            set { Fields.Action[this] = value; }
        }

        [DisplayName("Changed On"), NotNull]
        public DateTime? ChangedOn
        {
            get { return Fields.ChangedOn[this]; }
            set { Fields.ChangedOn[this] = value; }
        }

        //[DisplayName("Table Name"), Size(50), NotNull, QuickSearch]
        //public String TableName
        //{
        //    get { return Fields.TableName[this]; }
        //    set { Fields.TableName[this] = value; }
        //}

        [DisplayName("Row Id"), NotNull]
        public Int32? RowId
        {
            get { return Fields.RowId[this]; }
            set { Fields.RowId[this] = value; }
        }

        [DisplayName("Module"), Size(500), QuickSearch]
        public String Module
        {
            get { return Fields.Module[this]; }
            set { Fields.Module[this] = value; }
        }

        [DisplayName("Page"), Size(500)]
        public String Page
        {
            get { return Fields.Page[this]; }
            set { Fields.Page[this] = value; }
        }

        [DisplayName("Changes"), QuickSearch]
        public String Changes
        {
            get { return Fields.Changes[this]; }
            set { Fields.Changes[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuditLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field UserId;
            public StringField UserName;
            public StringField Action;
            public DateTimeField ChangedOn;
            //public StringField TableName;
            public Int32Field RowId;
            public StringField Module;
            public StringField Page;
            public StringField Changes;
        }
    }
}
