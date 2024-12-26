
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[Assets]")]
    [DisplayName("Assets"), InstanceName("Assets")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]

    [LeftJoin("AssetType", "AssetType", "T0.[AssetType]=AssetType.[ItemId]")]
    [LeftJoin("AssetCategory", "AssetCategory", "T0.[AssetCategory]=AssetCategory.[ItemId]")]
    [LeftJoin("AssetSubCategory", "AssetSubCategory", "T0.[AssetSubCategory]=AssetSubCategory.[ItemId]")]
    [LeftJoin("AssetSubCategoryLevel", "AssetSubCategoryLevel", "T0.[AssetSubCategoryLevel]=AssetSubCategory.[ItemId]")]

    [LeftJoin("AssetLocation", "AssetLocation", "T0.[AssetLocation]=AssetLocation.[ItemId]")]
    [LeftJoin("AssetStatus", "AssetStatus", "T0.[AssetStatus]=AssetStatus.[ItemId]")]
    [LeftJoin("AssetClass", "AssetClass", "T0.[AssetClass]=AssetClass.[ItemId]")]
    [LeftJoin("AssetBuilding", "AssetBuilding", "T0.[AssetBuilding]=AssetClass.[ItemId]")]
    [LeftJoin("city", "city", "T0.[assetcity]=city.[city_no]")]


    
    [LeftJoin("SECTIONS", "SECTIONS", "RIGHT(T0.[AssetSection], LEN(T0.[AssetSection]) - 6)=SECTIONS.[SectionId]  and left(T0.[AssetSection],5)='88888'") ]
    [LeftJoin("ROADS", "ROADS", "RIGHT(T0.[AssetSection], LEN(T0.[AssetSection]) - 6)=ROADS.[roadid]  and left(T0.[AssetSection],5)='99999'") ]

    [LookupScript]

    public sealed class AssetsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), PrimaryKey,Identity]
        public Int64? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Asse Name"), QuickSearch,Required]
        public String AsseName
        {
            get { return Fields.AsseName[this]; }
            set { Fields.AsseName[this] = value; }
        }



        [DisplayName("FloorNumber")]
        public String FloorNumber
        {
            get { return Fields.FloorNumber[this]; }
            set { Fields.FloorNumber[this] = value; }
        }

        [DisplayName("RoomNumber")]
        public String RoomNumber
        {
            get { return Fields.RoomNumber[this]; }
            set { Fields.RoomNumber[this] = value; }
        }


        [DisplayName("NearBy")]
        public String NearBy
        {
            get { return Fields.NearBy[this]; }
            set { Fields.NearBy[this] = value; }
        }


        [DisplayName("IOTDevice")]
        public String IOTDevice
        {
            get { return Fields.IOTDevice[this]; }
            set { Fields.IOTDevice[this] = value; }
        }



        [DisplayName("Asset Barcode")]
        public String AssetBarcode
        {
            get { return Fields.AssetBarcode[this]; }
            set { Fields.AssetBarcode[this] = value; }
        }

        [DisplayName("Asset Serial")]
        public String AssetSerial
        {
            get { return Fields.AssetSerial[this]; }
            set { Fields.AssetSerial[this] = value; }
        }

        [DisplayName("Asset Type")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetTypeRow))]
        public Int32? AssetType
        {
            get { return Fields.AssetType[this]; }
            set { Fields.AssetType[this] = value; }
        }

        [DisplayName("Asset Category")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetCategoryRow))]

        public Int32? AssetCategory
        {
            get { return Fields.AssetCategory[this]; }
            set { Fields.AssetCategory[this] = value; }
        }

        [DisplayName("Asset Sub Category")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetSubCategoryRow), CascadeFrom = "AssetCategory", CascadeField = "ParentId")]

        public Int32? AssetSubCategory
        {
            get { return Fields.AssetSubCategory[this]; }
            set { Fields.AssetSubCategory[this] = value; }
        }


        [DisplayName("Asset Category Level")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetSubCategoryLevelRow), CascadeFrom = "AssetCategory", CascadeField = "ParentId")]

        public Int32? AssetSubCategoryLevel
        {
            get { return Fields.AssetSubCategoryLevel[this]; }
            set { Fields.AssetSubCategoryLevel[this] = value; }
        }




        [DisplayName("Asset Location")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetLocationRow))]

        public Int32? AssetLocation
        {
            get { return Fields.AssetLocation[this]; }
            set { Fields.AssetLocation[this] = value; }
        }

        [DisplayName("Asset Start Date")]
        public DateTime? AssetStartDate
        {
            get { return Fields.AssetStartDate[this]; }
            set { Fields.AssetStartDate[this] = value; }
        }

        [DisplayName("Asset End Date")]
        public DateTime? AssetEndDate
        {
            get { return Fields.AssetEndDate[this]; }
            set { Fields.AssetEndDate[this] = value; }
        }

        [DisplayName("Asset Maunfacture")]
        public String AssetMaunfacture
        {
            get { return Fields.AssetMaunfacture[this]; }
            set { Fields.AssetMaunfacture[this] = value; }
        }

        [DisplayName("Asset Project")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ProjectLook))]
        public Int32? AssetProject
        {
            get { return Fields.AssetProject[this]; }
            set { Fields.AssetProject[this] = value; }
        }

        [DisplayName("Asset Contractor")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ContractorLook))]

        public Int32? AssetContractor
        {
            get { return Fields.AssetContractor[this]; }
            set { Fields.AssetContractor[this] = value; }
        }

        [DisplayName("Asset Vendor")]
        public Int32? AssetVendor
        {
            get { return Fields.AssetVendor[this]; }
            set { Fields.AssetVendor[this] = value; }
        }

        [DisplayName("Asset Inspector")]
        public Int32? AssetInspector
        {
            get { return Fields.AssetInspector[this]; }
            set { Fields.AssetInspector[this] = value; }
        }

        [DisplayName("Asset Parent")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsRow))]

        public Int32? AssetParent
        {
            get { return Fields.AssetParent[this]; }
            set { Fields.AssetParent[this] = value; }
        }

        [DisplayName("Asset Status")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetStatusRow))]

        public Int32? AssetStatus
        {
            get { return Fields.AssetStatus[this]; }
            set { Fields.AssetStatus[this] = value; }
        }

        [DisplayName("Asset Class")]
        //[LookupEditor(typeof(PMMS.EAM.Entities.AssetClassRow))]

        public Int32? AssetClass
        {
            get { return Fields.AssetClass[this]; }
            set { Fields.AssetClass[this] = value; }
        }


        [DisplayName("Asset Building")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetBuildingRow))]

        public Int32? AssetBuilding
        {
            get { return Fields.AssetBuilding[this]; }
            set { Fields.AssetBuilding[this] = value; }
        }


        

        [DisplayName("Asset Class Description")]
        public String AssetClassDescription
        {
            get { return Fields.AssetClassDescription[this]; }
            set { Fields.AssetClassDescription[this] = value; }
        }

        [DisplayName("Asset Auto Depc")]
        public Boolean? AssetAutoDepc
        {
            get { return Fields.AssetAutoDepc[this]; }
            set { Fields.AssetAutoDepc[this] = value; }
        }

        [DisplayName("Asset Depc Method")]
        public String AssetDepcMethod
        {
            get { return Fields.AssetDepcMethod[this]; }
            set { Fields.AssetDepcMethod[this] = value; }
        }

        [DisplayName("Asset Depc In Month")]
        public Int32? AssetDepcInMonth
        {
            get { return Fields.AssetDepcInMonth[this]; }
            set { Fields.AssetDepcInMonth[this] = value; }
        }

        [DisplayName("Asset Depc Prec")]
        public Int32? AssetDepcPrec
        {
            get { return Fields.AssetDepcPrec[this]; }
            set { Fields.AssetDepcPrec[this] = value; }
        }

        [DisplayName("Asset Depc Date")]
        public DateTime? AssetDepcDate
        {
            get { return Fields.AssetDepcDate[this]; }
            set { Fields.AssetDepcDate[this] = value; }
        }

        [DisplayName("Asset Depc Status")]
        public Int32? AssetDepcStatus
        {
            get { return Fields.AssetDepcStatus[this]; }
            set { Fields.AssetDepcStatus[this] = value; }
        }

        [DisplayName("Install Date")]
        public DateTime? InstallDate
        {
            get { return Fields.InstallDate[this]; }
            set { Fields.InstallDate[this] = value; }
        }

        [DisplayName("Install Accetped Date")]
        public DateTime? InstallAccetpedDate
        {
            get { return Fields.InstallAccetpedDate[this]; }
            set { Fields.InstallAccetpedDate[this] = value; }
        }

        [DisplayName("Purchase Price")]
        public Double? PurchasePrice
        {
            get { return Fields.PurchasePrice[this]; }
            set { Fields.PurchasePrice[this] = value; }
        }

        [DisplayName("Years Of Life")]
        public Int32? YearsOfLife
        {
            get { return Fields.YearsOfLife[this]; }
            set { Fields.YearsOfLife[this] = value; }
        }

        [DisplayName("Warranty Start Date")]
        public DateTime? WarrantyStartDate
        {
            get { return Fields.WarrantyStartDate[this]; }
            set { Fields.WarrantyStartDate[this] = value; }
        }

        [DisplayName("Warranty End Date")]
        public DateTime? WarrantyEndDate
        {
            get { return Fields.WarrantyEndDate[this]; }
            set { Fields.WarrantyEndDate[this] = value; }
        }

        [DisplayName("Maint Sub Set")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsMaintSubSetRow))]

        public Int32? MaintSubSet
        {
            get { return Fields.MaintSubSet[this]; }
            set { Fields.MaintSubSet[this] = value; }
        }

        [DisplayName("Maint Condation")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsMaintCondationRow))]

        public Int32? MaintCondation
        {
            get { return Fields.MaintCondation[this]; }
            set { Fields.MaintCondation[this] = value; }
        }

        [DisplayName("Maint Crit")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsMaintCritRow))]

        public Int32? MaintCrit
        {
            get { return Fields.MaintCrit[this]; }
            set { Fields.MaintCrit[this] = value; }
        }

        [DisplayName("Maint Last Check Date")]
        public DateTime? MaintLastCheckDate
        {
            get { return Fields.MaintLastCheckDate[this]; }
            set { Fields.MaintLastCheckDate[this] = value; }
        }

        [DisplayName("Asset Width")]
        public Double? AssetWidth
        {
            get { return Fields.AssetWidth[this]; }
            set { Fields.AssetWidth[this] = value; }
        }

        [DisplayName("Asset Hight")]
        public Double? AssetHight
        {
            get { return Fields.AssetHight[this]; }
            set { Fields.AssetHight[this] = value; }
        }

        [DisplayName("Asset Area")]
        public Double? AssetArea
        {
            get { return Fields.AssetArea[this]; }
            set { Fields.AssetArea[this] = value; }
        }

        [DisplayName("Asset Dimansion")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetDimansionRow))]

        public Int32? AssetDimansion
        {
            get { return Fields.AssetDimansion[this]; }
            set { Fields.AssetDimansion[this] = value; }
        }

        [DisplayName("Asset Weight")]
        public Double? AssetWeight
        {
            get { return Fields.AssetWeight[this]; }
            set { Fields.AssetWeight[this] = value; }
        }

        [DisplayName("Asset Power")]
        public Double? AssetPower
        {
            get { return Fields.AssetPower[this]; }
            set { Fields.AssetPower[this] = value; }
        }

        [DisplayName("Asset Service Status")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetServiceStatusRow))]

        public Int32? AssetServiceStatus
        {
            get { return Fields.AssetServiceStatus[this]; }
            set { Fields.AssetServiceStatus[this] = value; }
        }

        [DisplayName("Maint Power Consumption")]
        public Double? MaintPowerConsumption
        {
            get { return Fields.MaintPowerConsumption[this]; }
            set { Fields.MaintPowerConsumption[this] = value; }
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

        [DisplayName("Asset Qty"), Column("AssetQTY")]
        public Double? AssetQty
        {
            get { return Fields.AssetQty[this]; }
            set { Fields.AssetQty[this] = value; }
        }

        [DisplayName("Preventive Qty"), Column("AssetPreventQTY")]
        public Double? AssetPreventQTY
        {
            get { return Fields.AssetPreventQTY[this]; }
            set { Fields.AssetPreventQTY[this] = value; }
        }


        [DisplayName("Order QTY"), Column("AssetOrderQTY")]
        public Double? AssetOrderQTY
        {
            get { return Fields.AssetOrderQTY[this]; }
            set { Fields.AssetOrderQTY[this] = value; }
        }


        [DisplayName("Maintenance QTY"), Column("AssetMaintQTY")]
        public Double? AssetMaintQTY
        {
            get { return Fields.AssetMaintQTY[this]; }
            set { Fields.AssetMaintQTY[this] = value; }
        }

        


        [DisplayName("Custom Attr"), MasterDetailRelation(foreignKey: "AssetId")]
        public List<Entities.AssetCustAttrRow> CustomAttr
        {
            get { return Fields.CustomAttr[this]; }
            set { Fields.CustomAttr[this] = value; }
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


        [DisplayName("<span style='color:red'></span>samples")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='samplesSelect' style='width: 80%;'>  </select><input style='padding: 6px; width: 60px; margin-left: 9px;' id='sample_section_save' name='save' type='button' value='Add' class='btn btn-success btn-sm'> <input  id='sample_Object_delete' style='padding: 6px; width: 60px; margin-left: 9px;' class='btn btn-danger btn-sm' type='button' value='Delete'>")]
        [NotMapped]

        public string Samples
        {
            get { return Fields.Samples[this]; }
            set { Fields.Samples[this] = value; }
        }

        [DisplayName("<span style='color:red'></span>surveys")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='sridsample'><div/>")]
        [NotMapped]
        public string SamplesDiv
        {
            get { return Fields.SamplesDiv[this]; }
            set { Fields.SamplesDiv[this] = value; }
        }

        //[LeftJoin("AssetType", "AssetType", "T0.[AssetType]=AssetType.[ItemId]")]
        //[LeftJoin("AssetCategory", "AssetCategory", "T0.[AssetType]=AssetCategory.[ItemId]")]
        //[LeftJoin("AssetSubCategory", "AssetSubCategory", "T0.[AssetSubCategory]=AssetType.[ItemdId]")]
        //[LeftJoin("AssetLocation", "AssetLocation", "T0.[AssetLocation]=AssetLocation.[ItemId]")]

        [Expression("AssetType.[ItemName]"), DisplayName("AssetTypeName")]
        public string AssetTypeName
        {
            get { return Fields.AssetTypeName[this]; }
            set { Fields.AssetTypeName[this] = value; }
        }

        [Expression("AssetCategory.[ItemName]"), DisplayName("AssetCategoryName")]
        public string AssetCategoryName
        {
            get { return Fields.AssetCategoryName[this]; }
            set { Fields.AssetCategoryName[this] = value; }
        }


        [Expression("AssetSubCategory.[ItemName]"), DisplayName("AssetSubCategoryName")]
        public string AssetSubCategoryName
        {
            get { return Fields.AssetSubCategoryName[this]; }
            set { Fields.AssetSubCategoryName[this] = value; }
        }


        [Expression("AssetLocation.[ItemName]"), DisplayName("AssetLocationName")]
        public string AssetLocationName
        {
            get { return Fields.AssetLocationName[this]; }
            set { Fields.AssetLocationName[this] = value; }
        }

        [Expression("AssetStatus.[ItemName]"), DisplayName("AssetStatusName")]
        public string AssetStatusName
        {
            get { return Fields.AssetStatusName[this]; }
            set { Fields.AssetStatusName[this] = value; }
        }


        [Expression("AssetClass.[ItemName]"), DisplayName("AssetClassName")]
        public string AssetClassName
        {
            get { return Fields.AssetClassName[this]; }
            set { Fields.AssetClassName[this] = value; }
        }

        [Expression("SECTIONS.[SECTION_NO]"), DisplayName("SectionName")]
        public string SectionName
        {
            get { return Fields.SectionName[this]; }
            set { Fields.SectionName[this] = value; }
        }

        [Expression("ROADS.CITY_NO + ROADS.ZONE_NO + ROADS.AREA_NO + ROADS.ROAD_NO"),DisplayName("StreetNumber")]
        public string StreetNumber
        {
            get { return Fields.StreetNumber[this]; }
            set { Fields.StreetNumber[this] = value; }
        }

        [Expression("isnull(ROADS.CITY_NO,SECTIONS.CITY_NO)"), DisplayName("city_no")]
        public string city_no
        {
            get { return Fields.city_no[this]; }
            set { Fields.city_no[this] = value; }
        }


        [Expression("isnull(ROADS.ZONE_NO,SECTIONS.ZONE_NO)"), DisplayName("ZONE_NO")]
        public string ZONE_NO
        {
            get { return Fields.ZONE_NO[this]; }
            set { Fields.ZONE_NO[this] = value; }
        }

        [Expression("city.city_name"), DisplayName("city_name")]
        public string city_name
        {
            get { return Fields.city_name[this]; }
            set { Fields.city_name[this] = value; }
        }


        // city

        [Expression("isnull(ROADS.AREA_NO,SECTIONS.AREA_NO)"), DisplayName("AREA_NO")]
        public string AREA_NO
        {
            get { return Fields.AREA_NO[this]; }
            set { Fields.AREA_NO[this] = value; }
        }

        [Expression("isnull(ROADS.ROAD_NO,SECTIONS.ROAD_NO)"), DisplayName("ROAD_NO")]
        public string ROAD_NO
        {
            get { return Fields.ROAD_NO[this]; }
            set { Fields.ROAD_NO[this] = value; }
        }



        [DisplayName("<span style='color:red'>*</span>Assets Tree")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "  <div class='k-rtl demo-section'><input id='kd-place-chooser' /></div>")]
        [NotMapped]

        public string AssetsClass
        {
            get { return Fields.AssetsClass[this]; }
            set { Fields.AssetsClass[this] = value; }
        }


        [DisplayName("Attachments")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]

        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }


        [DisplayName("<span style='color:red'></span>Copy from")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='Copyfrom' style='width: 80%;'>  </select><input style='padding: 6px; width: 60px; margin-left: 9px;' id='Copyfromsave' name='save' type='button' value='Add' class='btn btn-success btn-sm'> <input  id='Copy_delete' style='padding: 6px; width: 60px; margin-left: 9px;' class='btn btn-danger btn-sm' type='button' value='Delete All Childs'>")]
        [NotMapped]

        public string Copyfrom
        {
            get { return Fields.Copyfrom[this]; }
            set { Fields.Copyfrom[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AsseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public RowListField<AssetCustAttrRow> CustomAttr;
            
            public StringField AssetLocationName;
            public StringField AssetClassName;
            public StringField AssetSubCategoryName;
            public StringField AssetCategoryName;
            public StringField AssetTypeName;
            public StringField AssetStatusName;
            public StringField SectionName;
            public StringField StreetNumber;
            public StringField ZONE_NO;
            public StringField AREA_NO;
            public StringField city_no;
            public StringField ROAD_NO;
            public StringField SamplesDiv;
            public StringField Samples;
            public StringField Attachments;

            


            public Int64Field ItemId;
            public StringField AsseName;
            public StringField AssetBarcode;
            public StringField AssetSerial;
            public Int32Field AssetType;
            public Int32Field AssetCategory;
            public Int32Field AssetSubCategory;
            public Int32Field AssetSubCategoryLevel;
            
            public Int32Field AssetLocation;
            public DateTimeField AssetStartDate;
            public DateTimeField AssetEndDate;
            public StringField AssetMaunfacture;
            public Int32Field AssetProject;
            public Int32Field AssetContractor;
            public Int32Field AssetVendor;
            public Int32Field AssetInspector;
            public Int32Field AssetParent;
            public Int32Field AssetStatus;
            public Int32Field AssetClass;
            public Int32Field AssetBuilding;


            public StringField FloorNumber;
            public StringField RoomNumber;
            public StringField NearBy;
            public StringField IOTDevice;
            public StringField AssetsClass;

            
            public StringField AssetClassDescription;
            public BooleanField AssetAutoDepc;
            public StringField AssetDepcMethod;
            public Int32Field AssetDepcInMonth;
            public Int32Field AssetDepcPrec;
            public DateTimeField AssetDepcDate;
            public Int32Field AssetDepcStatus;
            public DateTimeField InstallDate;
            public DateTimeField InstallAccetpedDate;
            public DoubleField PurchasePrice;
            public Int32Field YearsOfLife;
            public DateTimeField WarrantyStartDate;
            public DateTimeField WarrantyEndDate;
            public Int32Field MaintSubSet;
            public Int32Field MaintCondation;
            public Int32Field MaintCrit;
            public DateTimeField MaintLastCheckDate;
            public DoubleField AssetWidth;
            public DoubleField AssetHight;
            public DoubleField AssetArea;
            public Int32Field AssetDimansion;
            public DoubleField AssetWeight;
            public DoubleField AssetPower;
            public Int32Field AssetServiceStatus;
            public DoubleField MaintPowerConsumption;
            public StringField AssetCity;
            public StringField AssetZone;
            public StringField AssetsAreaId;
            public StringField AssetRoad;
            public StringField AssetSection;
            public DoubleField AssetQty;
            public DoubleField AssetOrderQTY;
            public DoubleField AssetPreventQTY;
            public DoubleField AssetMaintQTY;
            

            public StringField AreaNoTemplate;
            public StringField CityNoTemplate;
            public StringField ZoneNoTemplate;
            public StringField RoadNoTemplate;
            public StringField SectionNoTemplate;
            public StringField city_name;
            public StringField Copyfrom;

            

        }
    }
}
