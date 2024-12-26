
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
    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[CustomReports]")]
    [DisplayName("Custom Reports"), InstanceName("Custom Reports")]
  

    [ReadPermission(PermissionKeys.Apps.ReportsCreator)]
    [ModifyPermission(PermissionKeys.Apps.ReportsCreator)]
    public sealed class CustomReportsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Report Id"), PrimaryKey,Identity]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Report Name"), NotNull, QuickSearch]
        public String ReportName
        {
            get { return Fields.ReportName[this]; }
            set { Fields.ReportName[this] = value; }
        }

        [DisplayName("Report Path")]
        [FileUploadEditor(FilenameFormat = "Reports/~", AllowNonImage = true)]
        public String ReportPath
        {
            get { return Fields.ReportPath[this]; }
            set { Fields.ReportPath[this] = value; }
        }


        [DisplayName("isExcel"), NotNull]
      
        public bool? isExcel
        {
            get { return Fields.isExcel[this]; }
            set { Fields.isExcel[this] = value; }
        }


        [DisplayName("SQL Query")]
        public String sqltxt
        {
            get { return Fields.sqltxt[this]; }
            set { Fields.sqltxt[this] = value; }
        }




        IIdField IIdRow.IdField
        {
            get { return Fields.ReportId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReportName; }
        }



        [DisplayName("Users")]
        public string ReportUsers
        {
            get { return Fields.ReportUsers[this]; }
            set { Fields.ReportUsers[this] = value; }
        }


       
        [DisplayName("Groups")]
        public string ReportGroups
        {
            get { return Fields.ReportGroups[this]; }
            set { Fields.ReportGroups[this] = value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomReportsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReportId;
            public StringField ReportName;
            public StringField ReportPath;
            public StringField ReportUsers;
            public StringField ReportGroups;
            public StringField sqltxt;
            public BooleanField isExcel;

            
        }
    }
}
