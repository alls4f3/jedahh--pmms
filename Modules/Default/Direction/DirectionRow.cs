
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[DIRECTION]")]
    [DisplayName("Direction"), InstanceName("Direction")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class DirectionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Direction No"), Column("DIRECTION_NO"), Size(2), PrimaryKey, QuickSearch]
        public String DirectionNo
        {
            get { return Fields.DirectionNo[this]; }
            set { Fields.DirectionNo[this] = value; }
        }

        [DisplayName("Direction Short Name"), Column("DIRECTION_SHORT_NAME"), Size(7)]
        public String DirectionShortName
        {
            get { return Fields.DirectionShortName[this]; }
            set { Fields.DirectionShortName[this] = value; }
        }

        [DisplayName("Direction Description"), Column("DIRECTION_DESCRIPTION"), Size(90), NotNull]
        public String DirectionDescription
        {
            get { return Fields.DirectionDescription[this]; }
            set { Fields.DirectionDescription[this] = value; }
        }

        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DirectionNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DirectionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField DirectionNo;
            public StringField DirectionShortName;
            public StringField DirectionDescription;
            public Int32Field ItemId;
        }
    }
}
