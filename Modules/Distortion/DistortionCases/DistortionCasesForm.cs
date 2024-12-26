
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.DistortionCases")]
    [BasedOnRow(typeof(Entities.DistortionCasesRow), CheckNames = true)]
    public class DistortionCasesForm
    {
        [Tab("Case Information")]

        [Category("GIS Integration")]
        [HalfWidth]
        [Hidden]

        public String AssetCity { get; set; }
        [HalfWidth]
        [Hidden]

        public String AssetZone { get; set; }
        [HalfWidth]
        [Hidden]

        public String AssetsAreaId { get; set; }
        [HalfWidth]
        [Hidden]

        public String AssetRoad { get; set; }
        [HalfWidth]
        [Hidden]
        public String AssetSection { get; set; }

        

        [HalfWidth]
        public string CityNoTemplate { get; set; }
        [HalfWidth]

        public string ZoneNoTemplate { get; set; }
        [HalfWidth]

        public string AreaNoTemplate { get; set; }
        [HalfWidth]

        public string RoadNoTemplate { get; set; }
        [HalfWidth]

        public string SectionNoTemplate { get; set; }


        [HalfWidth]
        public String CaseAdress { get; set; }

        [Category("Case Desc"),Required(true)]
        [HalfWidth]
        public String ItemName { get; set; }
        [HalfWidth]
        public Int32 ItemCategory { get; set; }
        [HalfWidth]
        public Int32 ItemSubCategory { get; set; }
        [HalfWidth]
        public Int32 CaseStatus { get; set; }
        [HalfWidth]
        public Double CaseAmount { get; set; }
        [HalfWidth]

        public Double ItemQty { get; set; }

        [HalfWidth]

        public DateTime CaseDate { get; set; }

        [Category("Case Problem")]
        [TextAreaEditor(Cols = 1, Rows = 4)]

        public String CaseDesc { get; set; }


        [Category("Case Resolution")]
        [TextAreaEditor(Cols = 1, Rows = 4)]

        public String CaseSolution { get; set; }

        [Tab("Attachments")]
        [Category("Documents")]
        public String ItemImages { get; set; }

        public String ItemImagesAfter { get; set; }


        public String Attachments { get; set; }
      
       
    }
}