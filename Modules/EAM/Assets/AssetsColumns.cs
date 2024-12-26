
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.Assets")]
    [BasedOnRow(typeof(Entities.AssetsRow), CheckNames = true)]
    public class AssetsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]




        public Int64 ItemId { get; set; }
        [EditLink]
        public String AsseName { get; set; }
        public String city_name { get; set; }

        

        public String AssetClassName { get; set; }
        public String AssetStatusName { get; set; }
        public String AssetLocationName { get; set; }
        public String AssetSubCategoryName { get; set; }
        public String AssetCategoryName { get; set; }
        public String AssetTypeName { get; set; }
        public String SectionName { get; set; }
        public String StreetNumber { get; set; }
        public String ZONE_NO { get; set; }
        public String AREA_NO { get; set; }
        public String city_no { get; set; }
        public String ROAD_NO { get; set; }


        

        public String AssetBarcode { get; set; }
        public String AssetSerial { get; set; }
        public Int32 AssetType { get; set; }
        public Int32 AssetCategory { get; set; }
        public Int32 AssetSubCategory { get; set; }
        public Int32 AssetLocation { get; set; }
        public DateTime AssetStartDate { get; set; }
        public DateTime AssetEndDate { get; set; }
        public String AssetMaunfacture { get; set; }
        public Int32 AssetProject { get; set; }
        public Int32 AssetContractor { get; set; }
        public Int32 AssetVendor { get; set; }
        public Int32 AssetInspector { get; set; }
        public Int32 AssetParent { get; set; }
        public Int32 AssetStatus { get; set; }
        public Int32 AssetClass { get; set; }
        public String AssetClassDescription { get; set; }
        public Boolean AssetAutoDepc { get; set; }
        public String AssetDepcMethod { get; set; }
        public Int32 AssetDepcInMonth { get; set; }
        public Int32 AssetDepcPrec { get; set; }
        public DateTime AssetDepcDate { get; set; }
        public Int32 AssetDepcStatus { get; set; }
        public DateTime InstallDate { get; set; }
        public DateTime InstallAccetpedDate { get; set; }
        public Double PurchasePrice { get; set; }
        public Int32 YearsOfLife { get; set; }
        public DateTime WarrantyStartDate { get; set; }
        public DateTime WarrantyEndDate { get; set; }
        public Int32 MaintSubSet { get; set; }
        public Int32 MaintCondation { get; set; }
        public Int32 MaintCrit { get; set; }
        public DateTime MaintLastCheckDate { get; set; }
        public Double AssetWidth { get; set; }
        public Double AssetHight { get; set; }
        public Double AssetArea { get; set; }
        public Int32 AssetDimansion { get; set; }
        public Double AssetWeight { get; set; }
        public Double AssetPower { get; set; }
        public Int32 AssetServiceStatus { get; set; }
        public Double MaintPowerConsumption { get; set; }
        public String AssetCity { get; set; }
        public String AssetZone { get; set; }
        public String AssetsAreaId { get; set; }
        public String AssetRoad { get; set; }
        public String AssetSection { get; set; }
        public Double AssetQty { get; set; }
    }
}