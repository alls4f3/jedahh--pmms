
namespace PMMS.EAM.Entities
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetsSurvey]")]
    [DisplayName("Assets Survey"), InstanceName("Assets Survey")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]
    public sealed class AssetsSurveyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Itemsuid"), Identity]
        public Int64? Itemsuid
        {
            get { return Fields.Itemsuid[this]; }
            set { Fields.Itemsuid[this] = value; }
        }

        [DisplayName("Assets Id"),Hidden]

        public Int64? AssetsId
        {
            get { return Fields.AssetsId[this]; }
            set { Fields.AssetsId[this] = value; }
        }

        [DisplayName("Survay Date")]
        public DateTime? SurvayDate
        {
            get { return Fields.SurvayDate[this]; }
            set { Fields.SurvayDate[this] = value; }
        }

        [DisplayName("Survay Dec"), Size(50), QuickSearch]
        public String SurvayDec
        {
            get { return Fields.SurvayDec[this]; }
            set { Fields.SurvayDec[this] = value; }
        }

        [DisplayName("Survay By"), Size(50)]
        public String SurvayBy
        {
            get { return Fields.SurvayBy[this]; }
            set { Fields.SurvayBy[this] = value; }
        }
        [ReadOnly(true)]

        [DisplayName("Survay Result"), Size(50)]
        public String SurvayResult
        {
            get { return Fields.SurvayResult[this]; }
            set { Fields.SurvayResult[this] = value; }
        }
        [ReadOnly(true)]
        [DisplayName("Survay Rank")]
        public Int32? SurvayRank
        {
            get { return Fields.SurvayRank[this]; }
            set { Fields.SurvayRank[this] = value; }
        }

        [DisplayName("Survay Number")]
        public Int16? SurvayNumber
        {
            get { return Fields.SurvayNumber[this]; }
            set { Fields.SurvayNumber[this] = value; }
        }

        [DisplayName("Attachments")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]

        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Itemsuid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SurvayDec; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetsSurveyRow()
            : base(Fields)
        {
        }
        [DisplayName("Custom Attr"), MasterDetailRelation(foreignKey: "Itemsuidref")]
        public List<Entities.AssetsSurveyDistressRow> AssetsSurveyDistress
        {
            get { return Fields.AssetsSurveyDistress[this]; }
            set { Fields.AssetsSurveyDistress[this] = value; }
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Itemsuid;
            public Int64Field AssetsId;
            public DateTimeField SurvayDate;
            public StringField SurvayDec;
            public StringField SurvayBy;
            public StringField Attachments;
            public StringField SurvayResult;
            public Int32Field SurvayRank;
            public Int16Field SurvayNumber;
            public RowListField<AssetsSurveyDistressRow> AssetsSurveyDistress;

        }
    }
}
