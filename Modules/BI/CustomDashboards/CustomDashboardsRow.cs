
namespace PMMS.BI.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BI"), TableName("[dbo].[CustomDashboards]")]
    [DisplayName("Custom Dashboards"), InstanceName("Custom Dashboards")]
    [ReadPermission(PermissionKeys.Apps.DashBoardCreator)]
    [ModifyPermission(PermissionKeys.Apps.DashBoardCreator)]
    public sealed class CustomDashboardsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Page Id"), Identity]
        public Int32? PageId
        {
            get { return Fields.PageId[this]; }
            set { Fields.PageId[this] = value; }
        }

        [DisplayName("Page Name"), NotNull, QuickSearch]
        public String PageName
        {
            get { return Fields.PageName[this]; }
            set { Fields.PageName[this] = value; }
        }

        [DisplayName("Content")]
        [FileUploadEditor(FilenameFormat = "DashBoardsContent/~", AllowNonImage = true)]

        public String PagePath
        {
            get { return Fields.PagePath[this]; }
            set { Fields.PagePath[this] = value; }
        }

        [DisplayName(" Users")]
        public String PageUsers
        {
            get { return Fields.PageUsers[this]; }
            set { Fields.PageUsers[this] = value; }
        }

        [DisplayName(" Groups")]
        public String PageGroups
        {
            get { return Fields.PageGroups[this]; }
            set { Fields.PageGroups[this] = value; }
        }


        [DisplayName("FolderName"), Column("FolderName"), Size(50)]
        public String FolderName
        {
            get { return Fields.FolderName[this]; }
            set { Fields.FolderName[this] = value; }
        }

        [DisplayName("API"), MasterDetailRelation(foreignKey: "PageId")]
   
        public List<CustomDashboardsScriptsRow> CustomDashboardsScripts
        {
            get { return Fields.CustomDashboardsScripts[this]; }
            set { Fields.CustomDashboardsScripts[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PageName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomDashboardsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PageId;
            public StringField PageName;
            public StringField PagePath;
            public StringField PageUsers;
            public StringField PageGroups;
            public StringField FolderName;

            public RowListField<CustomDashboardsScriptsRow> CustomDashboardsScripts;
        }
    }
}
