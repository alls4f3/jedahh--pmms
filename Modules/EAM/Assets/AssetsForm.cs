
//namespace PMMS.EAM.Forms
//{
//    using Serenity;
//    using Serenity.ComponentModel;
//    using Serenity.Data;
//    using System;
//    using System.ComponentModel;
//    using System.Collections.Generic;
//    using System.IO;
//    using PMMS.Northwind;

//    [FormScript("EAM.Assets")]
//    [BasedOnRow(typeof(Entities.AssetsRow), CheckNames = false)]
//    public class AssetsForm
//    {



//        [Tab("General Information")]


//        [Category("GIS Integration")]
//        [HalfWidth]
//        [Hidden]

//        public String AssetCity { get; set; }
//        [HalfWidth]
//        [Hidden]

//        public String AssetZone { get; set; }
//        [HalfWidth]
//        [Hidden]

//        public String AssetsAreaId { get; set; }
//        [HalfWidth]
//        [Hidden]

//        public String AssetRoad { get; set; }
//        [HalfWidth]
//        [Hidden]
//        public String AssetSection { get; set; }


//        [HalfWidth]
//        public string CityNoTemplate { get; set; }
//        [HalfWidth]

//        public string ZoneNoTemplate { get; set; }
//        [HalfWidth]

//        public string AreaNoTemplate { get; set; }
//        [HalfWidth]

//        public string RoadNoTemplate { get; set; }
//        [HalfWidth]

//        public string SectionNoTemplate { get; set; }

//        //[HalfWidth]
//        //public Int32 AssetType { get; set; }


//        [HalfWidth]
//        [DisplayName("Feature")]

//        public Int32 AssetCategory { get; set; }
//        [HalfWidth]

//        public Int32 AssetSubCategory { get; set; }

//        [HalfWidth]

//        public Int32 AssetStatus { get; set; }



//        //[Category("Basic Information")]
//        //[HalfWidth]

//        //public String AsseName { get; set; }
//        //[HalfWidth]
//        //public String AssetBarcode { get; set; }
//        //[HalfWidth]

//        //public String AssetSerial { get; set; }




//        //[HalfWidth]

//        //public Int32 AssetLocation { get; set; }



//        //[HalfWidth]

//        //public Int32 AssetParent { get; set; }











//        //[Category("Assets Classifcation")]

//        //[HalfWidth]

//        //public Int32 AssetClass { get; set; }




//        //public String AssetClassDescription { get; set; }

//        [Category("Assets Asignment")]
//        [HalfWidth]

//        public Int32 AssetProject { get; set; }
//        [HalfWidth]

//        public Int32 AssetContractor { get; set; }
//        //[HalfWidth]

//        //public Int32 AssetInspector { get; set; }



//        //public DateTime AssetStartDate { get; set; }
//        //public DateTime AssetEndDate { get; set; }





//        //  



//        [Category("Assets Installtion")]

//        [HalfWidth]

//        public DateTime InstallDate { get; set; }
//        [HalfWidth]

//        public DateTime InstallAccetpedDate { get; set; }


//        //[Category("Assets Maintenance")]
//        //[HalfWidth]

//        //public Int32 MaintSubSet { get; set; }
//        //[HalfWidth]

//        //public Int32 MaintCondation { get; set; }
//        //[HalfWidth]

//        //public Int32 MaintCrit { get; set; }
//        //[HalfWidth]

//        //public DateTime MaintLastCheckDate { get; set; }

//        //[HalfWidth]

//        //public Double AssetPower { get; set; }
//        //[HalfWidth]

//        //public Double MaintPowerConsumption { get; set; }

//        //[HalfWidth]

//        //public Int32 AssetServiceStatus { get; set; }



//        // 

//        [Category("Assets Inventory")]
//        [HalfWidth]

//        public Double PurchasePrice { get; set; }
//        [HalfWidth]

//        public Int32 YearsOfLife { get; set; }
//        [HalfWidth]

//        public DateTime WarrantyStartDate { get; set; }
//        [HalfWidth]

//        public DateTime WarrantyEndDate { get; set; }
//        [HalfWidth]

//        public Double AssetQty { get; set; }




//        [Category("Assets Dimansion")]
//        [HalfWidth]

//        public Double AssetWidth { get; set; }
//        [HalfWidth]

//        public Double AssetHight { get; set; }
//        [HalfWidth]

//        public Double AssetArea { get; set; }
//        [HalfWidth]

//        public Int32 AssetDimansion { get; set; }
//        [HalfWidth]

//        public Double AssetWeight { get; set; }
//        //[HalfWidth]

//        //public Int32 AssetVendor { get; set; }

//        [HalfWidth]

//        public String AssetMaunfacture { get; set; }








//        [Tab("Assets Measurement")]
//        //[HalfWidth]

//        public string Samples { get; set; }
//        public string SamplesDiv { get; set; }


//        [Tab("Depreciation management")]

//        [Category("Assets Deprecation")]
//        [HalfWidth]

//        public Boolean AssetAutoDepc { get; set; }
//        //[HalfWidth]

//        //public String AssetDepcMethod { get; set; }
//        [HalfWidth]

//        public Int32 AssetDepcInMonth { get; set; }
//        [HalfWidth]
//        [MaxLength(2)]
//        public Int32 AssetDepcPrec { get; set; }
//        [HalfWidth]
//        [DisplayName("From Date")]
//        public DateTime AssetDepcDate { get; set; }
//        //[HalfWidth]

//        //public Int32 AssetDepcStatus { get; set; }


//        [Tab("Custom Attr")]

//        [AssetCustAttrEditorAttribute]

//        public List<Entities.AssetCustAttrRow> CustomAttr { get; set; }


//        [Tab("Attachments")]

//        [Category("Attachments")]



//        public String Attachments { get; set; }


//    }
//}











namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using PMMS.Northwind;

    [FormScript("EAM.Assets")]
    [BasedOnRow(typeof(Entities.AssetsRow), CheckNames = false)]
    public class AssetsForm
    {



        [Tab("General Information")]


        [Category("Basic Information")]
        [HalfWidth]

        public String AsseName { get; set; }
        [HalfWidth]
        public String AssetBarcode { get; set; }
        [HalfWidth]

        public String AssetSerial { get; set; }





        [HalfWidth]

        public Int32 AssetParent { get; set; }








      


        [Category("Location")]

        [HalfWidth]

        public Int32 AssetLocation { get; set; }
        [HalfWidth]

        public Int32 AssetBuilding { get; set; }

        [HalfWidth]

        public Int32 FloorNumber { get; set; }

        [HalfWidth]

        public Int32 RoomNumber { get; set; }

        [HalfWidth]

        public Int32 NearBy { get; set; }




        [Category("Asset Category")]
        [HalfWidth]
        public Int32 AssetType { get; set; }


        [HalfWidth]
     
        public Int32 AssetCategory { get; set; }
        [HalfWidth]

        public Int32 AssetSubCategory { get; set; }


        [HalfWidth]

        public Int32 AssetSubCategoryLevel { get; set; }



        [HalfWidth]

        public Int32 AssetStatus { get; set; }



        [Category("Assets Classifcation")]

        [HalfWidth]

        [Hidden]
        public Int32 AssetClass { get; set; }
        public String AssetsClass { get; set; }



        public String AssetClassDescription { get; set; }

        [Category("Assets Asignment")]
        [HalfWidth]

        public Int32 AssetProject { get; set; }
        [HalfWidth]

        public Int32 AssetContractor { get; set; }
        [HalfWidth]

        public Int32 AssetInspector { get; set; }

        [HalfWidth]

        public DateTime AssetStartDate { get; set; }
        [HalfWidth]
        public DateTime AssetEndDate { get; set; }





        //  



        [Category("Assets Installtion")]

        [HalfWidth]

        public DateTime InstallDate { get; set; }
        [HalfWidth]

        public DateTime InstallAccetpedDate { get; set; }



        [Category("Assets Inventory")]
        [HalfWidth]

        public Double PurchasePrice { get; set; }
        [HalfWidth]

        public Int32 YearsOfLife { get; set; }
        [HalfWidth]

        public DateTime WarrantyStartDate { get; set; }
        [HalfWidth]

        public DateTime WarrantyEndDate { get; set; }
        [HalfWidth]

        public Double AssetQty { get; set; }
        [HalfWidth]
        public Double AssetPreventQTY { get; set; }
        [HalfWidth]
        public Double AssetOrderQTY { get; set; }

        [HalfWidth]
        public Double AssetMaintQTY { get; set; }



        [Category("Assets Dimansion")]
        [HalfWidth]

        public Double AssetWidth { get; set; }
        [HalfWidth]

        public Double AssetHight { get; set; }
        [HalfWidth]

        public Double AssetArea { get; set; }
        [HalfWidth]

        public Int32 AssetDimansion { get; set; }
        [HalfWidth]

        public Double AssetWeight { get; set; }
        //[HalfWidth]

        //public Int32 AssetVendor { get; set; }

        [HalfWidth]

        public String AssetMaunfacture { get; set; }


        [Category("Internet of things")]
        public String IOTDevice { get; set; }





        [Tab("Assets Measurement")]
        //[HalfWidth]

        public string Samples { get; set; }
        public string SamplesDiv { get; set; }


        [Tab("Depreciation management")]

        [Category("Assets Deprecation")]
        [HalfWidth]

        public Boolean AssetAutoDepc { get; set; }
        //[HalfWidth]

        //public String AssetDepcMethod { get; set; }
        [HalfWidth]

        public Int32 AssetDepcInMonth { get; set; }
        [HalfWidth]
        [MaxLength(2)]
        public Int32 AssetDepcPrec { get; set; }
        [HalfWidth]
       
        public DateTime AssetDepcDate { get; set; }
        //[HalfWidth]

        //public Int32 AssetDepcStatus { get; set; }


        [Tab("Custom Attr")]

        [AssetCustAttrEditorAttribute]

        public List<Entities.AssetCustAttrRow> CustomAttr { get; set; }


        [Tab("Attachments")]

        [Category("Attachments")]



        public String Attachments { get; set; }



        [Tab("Maintenance")]
        [Category("Assets Maintenance")]
        [HalfWidth]

        public Int32 MaintSubSet { get; set; }
        [HalfWidth]

        public Int32 MaintCondation { get; set; }
        [HalfWidth]

        public Int32 MaintCrit { get; set; }
        [HalfWidth]

        public DateTime MaintLastCheckDate { get; set; }

        [HalfWidth]

        public Double AssetPower { get; set; }
        [HalfWidth]

        public Double MaintPowerConsumption { get; set; }

        [HalfWidth]

        public Int32 AssetServiceStatus { get; set; }


        [Tab("Clone Options")]
        public string Copyfrom { get; set; }

        



    }
}