
namespace PMMS.Distortion.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Distortion"), TableName("[dbo].[ContentHub]")]
    [DisplayName("Content Hub"), InstanceName("Content Hub")]
    [ReadPermission(PermissionKeys.Apps.Distortion)]
    [ModifyPermission(PermissionKeys.Apps.Distortion)]
    [InsertPermission(PermissionKeys.Apps.Distortion)]
    
    public sealed class ContentHubRow : Row, IIdRow, INameRow
    {
        [DisplayName("Img Col Id"), Identity]
        public Int64? ImgColId
        {
            get { return Fields.ImgColId[this]; }
            set { Fields.ImgColId[this] = value; }
        }

        [DisplayName("Img Col Note"), QuickSearch]
        public String ImgColNote
        {
            get { return Fields.ImgColNote[this]; }
            set { Fields.ImgColNote[this] = value; }
        }
      
        [MultipleImageUploadEditor(FilenameFormat = "Distortion/Hub/|CollCateegory|/~", AllowNonImage = false)]

        [DisplayName("Image Col Path")]
        public String ImageColPath
        {
            get { return Fields.ImageColPath[this]; }
            set { Fields.ImageColPath[this] = value; }
        }

        [DisplayName("Image Lat"), Size(50), HideOnInsert]
        public String ImageLat
        {
            get { return Fields.ImageLat[this]; }
            set { Fields.ImageLat[this] = value; }
        }

        [DisplayName("Image Long"), Size(50),HideOnInsert]
        public String ImageLong
        {
            get { return Fields.ImageLong[this]; }
            set { Fields.ImageLong[this] = value; }
        }

        [DisplayName("Coll Cateegory"),Required]
        [LookupEditor(typeof(PMMS.Distortion.Entities.ContentHubCategoryRow))]
        public Int32? CollCateegory
        {
            get { return Fields.CollCateegory[this]; }
            set { Fields.CollCateegory[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImgColId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ImgColNote; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContentHubRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ImgColId;
            public StringField ImgColNote;
            public StringField ImageColPath;
            public StringField ImageLat;
            public StringField ImageLong;
            public Int32Field CollCateegory;
        }
    }
}
