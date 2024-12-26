
namespace PMMS.BI.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BI"), TableName("[dbo].[CustomDashboardsScripts]")]
    [DisplayName("Custom Dashboards Scripts"), InstanceName("Custom Dashboards Scripts")]
    [ReadPermission(PermissionKeys.Apps.DashBoardCreator)]
    [ModifyPermission(PermissionKeys.Apps.DashBoardCreator)]
    public sealed class CustomDashboardsScriptsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Script Id"), Identity]
        public Int32? ScriptId
        {
            get { return Fields.ScriptId[this]; }
            set { Fields.ScriptId[this] = value; }
        }

        [DisplayName("Page Id"), ForeignKey(typeof(CustomDashboardsRow)), LeftJoin("o")]
        public Int32? PageId
        {
            get { return Fields.PageId[this]; }
            set { Fields.PageId[this] = value; }
        }

        [DisplayName("Script Name"), NotNull, QuickSearch]
        public String ScriptName
        {
            get { return Fields.ScriptName[this]; }
            set { Fields.ScriptName[this] = value; }
        }

        [DisplayName("Script Api"), Column("ScriptAPI"), NotNull]
        public String ScriptApi
        {
            get { return Fields.ScriptApi[this]; }
            set { Fields.ScriptApi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ScriptId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ScriptName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomDashboardsScriptsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScriptId;
            public Int32Field PageId;
            public StringField ScriptName;
            public StringField ScriptApi;
        }
    }
}
