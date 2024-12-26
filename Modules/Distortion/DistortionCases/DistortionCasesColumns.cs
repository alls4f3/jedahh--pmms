
namespace PMMS.Distortion.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Distortion.DistortionCases")]
    [BasedOnRow(typeof(Entities.DistortionCasesRow), CheckNames = true)]
    public class DistortionCasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public Int32 ItemCategory { get; set; }
        public Int32 ItemSubCategory { get; set; }
        public String AssetCity { get; set; }
        public String AssetZone { get; set; }
        public String AssetsAreaId { get; set; }
        public String AssetRoad { get; set; }
        public String AssetSection { get; set; }
        public Double ItemQty { get; set; }
        public String ItemImages { get; set; }
        public String ItemDoc { get; set; }
        public String ItemLatLong { get; set; }
        public String Attachments { get; set; }
        public DateTime CaseDate { get; set; }
        public String CaseAdress { get; set; }
        public Double CaseAmount { get; set; }
        public String CaseDesc { get; set; }
        public String CaseSolution { get; set; }
        public Int32 CaseStatus { get; set; }
        public String ItemImagesAfter { get; set; }



     
        public String AssetStatusName { get; set; }
      
        public String AssetSubCategoryName { get; set; }
        public String AssetCategoryName { get; set; }
       
        public String SectionName { get; set; }
        public String StreetNumber { get; set; }
        public String ZONE_NO { get; set; }
        public String AREA_NO { get; set; }
        public String city_no { get; set; }
        public String ROAD_NO { get; set; }


    }
}