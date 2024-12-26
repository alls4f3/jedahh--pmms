
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[FEATURES]")]
    [DisplayName("Features"), InstanceName("Features")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class FeaturesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Feature No"), Column("FEATURE_NO"), Size(2), PrimaryKey, QuickSearch]
        public String FeatureNo
        {
            get { return Fields.FeatureNo[this]; }
            set { Fields.FeatureNo[this] = value; }
        }

        [DisplayName("Feature Short Name"), Column("FEATURE_SHORT_NAME"), Size(7)]
        public String FeatureShortName
        {
            get { return Fields.FeatureShortName[this]; }
            set { Fields.FeatureShortName[this] = value; }
        }

        [DisplayName("Feature Description"), Column("FEATURE_DESCRIPTION"), Size(90), NotNull]
        public String FeatureDescription
        {
            get { return Fields.FeatureDescription[this]; }
            set { Fields.FeatureDescription[this] = value; }
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
            get { return Fields.FeatureNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeaturesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField FeatureNo;
            public StringField FeatureShortName;
            public StringField FeatureDescription;
            public Int32Field ItemId;
        }
    }
}
