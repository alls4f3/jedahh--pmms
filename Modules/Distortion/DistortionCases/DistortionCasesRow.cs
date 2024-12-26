
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

    [ConnectionKey("Default"), Module("Distortion"), TableName("[dbo].[DistortionCases]")]
    [DisplayName("Distortion Cases"), InstanceName("Distortion Cases")]
    [LeftJoin("DistortionCategory", "DistortionCategory", "T0.[ItemCategory]=DistortionCategory.[ItemId]")]
    [LeftJoin("DistortionSubCategory", "DistortionSubCategory", "T0.[ItemSubCategory]=DistortionSubCategory.[ItemId]")]
    [LeftJoin("DistortionStatus", "DistortionStatus", "T0.[CaseStatus]=DistortionStatus.[ItemId]")]
    [LeftJoin("SECTIONS", "SECTIONS", "RIGHT(T0.[AssetSection], LEN(T0.[AssetSection]) - 6)=SECTIONS.[SectionId]  and left(T0.[AssetSection],5)='88888'")]
    [LeftJoin("ROADS", "ROADS", "RIGHT(T0.[AssetSection], LEN(T0.[AssetSection]) - 6)=ROADS.[roadid]  and left(T0.[AssetSection],5)='99999'")]

    [ReadPermission(PermissionKeys.Apps.Distortion)]
    [ModifyPermission(PermissionKeys.Apps.Distortion)]
    [InsertPermission(PermissionKeys.Apps.Distortion)]
    public sealed class DistortionCasesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int64? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Item Category")]
        [LookupEditor(typeof(PMMS.Distortion.Entities.DistortionCategoryRow))]

        public Int32? ItemCategory
        {
            get { return Fields.ItemCategory[this]; }
            set { Fields.ItemCategory[this] = value; }
        }

        [DisplayName("Item Sub Category")]
        [LookupEditor(typeof(PMMS.Distortion.Entities.DistortionSubCategoryRow), CascadeFrom = "ItemCategory", CascadeField = "ParentId")]

        public Int32? ItemSubCategory
        {
            get { return Fields.ItemSubCategory[this]; }
            set { Fields.ItemSubCategory[this] = value; }
        }

        [DisplayName("Asset City"), Size(50)]
        public String AssetCity
        {
            get { return Fields.AssetCity[this]; }
            set { Fields.AssetCity[this] = value; }
        }

        [DisplayName("Asset Zone"), Size(50)]
        public String AssetZone
        {
            get { return Fields.AssetZone[this]; }
            set { Fields.AssetZone[this] = value; }
        }

        [DisplayName("Assets Area Id"), Size(50)]
        public String AssetsAreaId
        {
            get { return Fields.AssetsAreaId[this]; }
            set { Fields.AssetsAreaId[this] = value; }
        }

        [DisplayName("Asset Road"), Size(50)]
        public String AssetRoad
        {
            get { return Fields.AssetRoad[this]; }
            set { Fields.AssetRoad[this] = value; }
        }

        [DisplayName("Asset Section"), Size(50)]
        public String AssetSection
        {
            get { return Fields.AssetSection[this]; }
            set { Fields.AssetSection[this] = value; }
        }

        [DisplayName("Item Qty"), Column("ItemQTY")]
        public Double? ItemQty
        {
            get { return Fields.ItemQty[this]; }
            set { Fields.ItemQty[this] = value; }
        }

        [DisplayName("Item Images")]
        [MultipleImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        public String ItemImages
        {
            get { return Fields.ItemImages[this]; }
            set { Fields.ItemImages[this] = value; }
        }

        [DisplayName("Item Doc")]
        public String ItemDoc
        {
            get { return Fields.ItemDoc[this]; }
            set { Fields.ItemDoc[this] = value; }
        }

        [DisplayName("Item Lat Long"), Size(150)]
        public String ItemLatLong
        {
            get { return Fields.ItemLatLong[this]; }
            set { Fields.ItemLatLong[this] = value; }
        }

        [DisplayName("Attachments")]
        [MultipleImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Case Date")]
        public DateTime? CaseDate
        {
            get { return Fields.CaseDate[this]; }
            set { Fields.CaseDate[this] = value; }
        }

        [DisplayName("Nearby"), Size(150)]
        public String CaseAdress
        {
            get { return Fields.CaseAdress[this]; }
            set { Fields.CaseAdress[this] = value; }
        }

        [DisplayName("Case Amount")]
        public Double? CaseAmount
        {
            get { return Fields.CaseAmount[this]; }
            set { Fields.CaseAmount[this] = value; }
        }

        [DisplayName("Case Desc")]
        public String CaseDesc
        {
            get { return Fields.CaseDesc[this]; }
            set { Fields.CaseDesc[this] = value; }
        }

        [DisplayName("Case Solution")]
        public String CaseSolution
        {
            get { return Fields.CaseSolution[this]; }
            set { Fields.CaseSolution[this] = value; }
        }

        [DisplayName("Case Status")]
        [LookupEditor(typeof(PMMS.Distortion.Entities.DistortionStatusRow))]

        public Int32? CaseStatus
        {
            get { return Fields.CaseStatus[this]; }
            set { Fields.CaseStatus[this] = value; }
        }

        [DisplayName("Item Images After")]
        [MultipleImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]

        public String ItemImagesAfter
        {
            get { return Fields.ItemImagesAfter[this]; }
            set { Fields.ItemImagesAfter[this] = value; }
        }

        [DisplayName("<span style='color:red'>*</span>Section No ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='SectionID' style='width: 100%;'>  </select>")]
        [NotMapped]
        public string SectionNoTemplate
        {
            get { return Fields.SectionNoTemplate[this]; }
            set { Fields.SectionNoTemplate[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>Road No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='RoadID' style='width: 100%;'>  </select>")]
        [NotMapped]
        public string RoadNoTemplate
        {
            get { return Fields.RoadNoTemplate[this]; }
            set { Fields.RoadNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>Area No ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='area' style='width: 100%;'>  </select>")]
        [NotMapped]
        public string AreaNoTemplate
        {
            get { return Fields.AreaNoTemplate[this]; }
            set { Fields.AreaNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span> Zone No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='zoneSelect' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string ZoneNoTemplate
        {
            get { return Fields.ZoneNoTemplate[this]; }
            set { Fields.ZoneNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>City No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='citySelect' style='width: 100%;'>  </select>")]
        [NotMapped]

        public string CityNoTemplate
        {
            get { return Fields.CityNoTemplate[this]; }
            set { Fields.CityNoTemplate[this] = value; }
        }



        [Expression("DistortionCategory.[ItemName]")]
        public string AssetCategoryName
        {
            get { return Fields.AssetCategoryName[this]; }
            set { Fields.AssetCategoryName[this] = value; }
        }


        [Expression("DistortionSubCategory.[ItemName]")]
        public string AssetSubCategoryName
        {
            get { return Fields.AssetSubCategoryName[this]; }
            set { Fields.AssetSubCategoryName[this] = value; }
        }


       

        [Expression("DistortionStatus.[ItemName]")]
        public string AssetStatusName
        {
            get { return Fields.AssetStatusName[this]; }
            set { Fields.AssetStatusName[this] = value; }
        }


       

        [Expression("SECTIONS.[SECTION_NO]")]
        public string SectionName
        {
            get { return Fields.SectionName[this]; }
            set { Fields.SectionName[this] = value; }
        }

        [Expression("ROADS.CITY_NO + ROADS.ZONE_NO + ROADS.AREA_NO + ROADS.ROAD_NO")]
        public string StreetNumber
        {
            get { return Fields.StreetNumber[this]; }
            set { Fields.StreetNumber[this] = value; }
        }

        [Expression("isnull(ROADS.CITY_NO,SECTIONS.CITY_NO)")]
        public string city_no
        {
            get { return Fields.city_no[this]; }
            set { Fields.city_no[this] = value; }
        }


        [Expression("isnull(ROADS.ZONE_NO,SECTIONS.ZONE_NO)")]
        public string ZONE_NO
        {
            get { return Fields.ZONE_NO[this]; }
            set { Fields.ZONE_NO[this] = value; }
        }



        [Expression("isnull(ROADS.AREA_NO,SECTIONS.AREA_NO)")]
        public string AREA_NO
        {
            get { return Fields.AREA_NO[this]; }
            set { Fields.AREA_NO[this] = value; }
        }

        [Expression("isnull(ROADS.ROAD_NO,SECTIONS.ROAD_NO)")]
        public string ROAD_NO
        {
            get { return Fields.ROAD_NO[this]; }
            set { Fields.ROAD_NO[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistortionCasesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ItemId;
            public StringField ItemName;
            public Int32Field ItemCategory;
            public Int32Field ItemSubCategory;
            public StringField AssetCity;
            public StringField AssetZone;
            public StringField AssetsAreaId;
            public StringField AssetRoad;
            public StringField AssetSection;
            public DoubleField ItemQty;
            public StringField ItemImages;
            public StringField ItemDoc;
            public StringField ItemLatLong;
            public StringField Attachments;
            public DateTimeField CaseDate;
            public StringField CaseAdress;
            public DoubleField CaseAmount;
            public StringField CaseDesc;
            public StringField CaseSolution;
            public Int32Field CaseStatus;
            public StringField ItemImagesAfter;

            public StringField AreaNoTemplate;
            public StringField CityNoTemplate;
            public StringField ZoneNoTemplate;
            public StringField RoadNoTemplate;
            public StringField SectionNoTemplate;


            public StringField AssetSubCategoryName;
            public StringField AssetCategoryName;
           
            public StringField AssetStatusName;
            public StringField SectionName;
            public StringField StreetNumber;
            public StringField ZONE_NO;
            public StringField AREA_NO;
            public StringField city_no;
            public StringField ROAD_NO;
        }
    }
}
