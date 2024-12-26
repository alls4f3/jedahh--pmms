
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using PMMS.Northwind;

    [FormScript("Default.WorkOrder")]
    [BasedOnRow(typeof(Entities.WorkOrderRow), CheckNames = true)]
    public class WorkOrderForm
    {

        [Tab("General")]

        [Category("Item Information"),ReadOnly(true)]
        [HalfWidth]
        public string SeqN { get; set; }

      
        [HalfWidth]
        public Int32 emergency { get; set; }


        [Category("Section Information")]
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


        //[HalfWidth]

        //public string GISPickUP { get; set; }
        

        [HalfWidth]
        [Hidden]
        public string LaneNoTemplate { get; set; }

        [Hidden]
       
        public string WorkorderSection { get; set; }


        [Hidden]
       
        public string WorkorderLane { get; set; }

        [Hidden]
       
        public string WorkorderRoad { get; set; }


        [Hidden]
       
        public string WorkorderArea { get; set; }


        [Hidden]
       
        public string WorkorderZone { get; set; }


        [Hidden]
       
        public string WorkorderCity { get; set; }

       



        [Category("Feature/Section Information")]

        public string LaneTemplate { get; set; }
        public string MultiSectionTemplate { get; set; }

        

        [Category("Order")]


        [HalfWidth]

        public DateTime DateOfOrderWork { get; set; }
       
        [HalfWidth]

        public DateTime WorkorderEndDate { get; set; }
       
        [HalfWidth]

        public DateTime WorkorderRenewDate { get; set; }


        [HalfWidth]

        public bool? IsLicReq { get; set; }


        [HalfWidth]

        public bool? SkipStreet { get; set; }

        [Category("Information")]
       
        [HalfWidth]

        public string AssignTo { get; set; }
       
        [HalfWidth]

        public Int32 RefId { get; set; }

        //public String ProjectName { get; set; }
        //public String ContractName { get; set; }

       
        [HalfWidth]

        public String ProjectLocation { get; set; }

        [HalfWidth]
        [Hidden]
        public String WorkorderStartDate { get; set; }

        [HalfWidth]
        [Hidden]

        public String WorkDuration { get; set; }


        [Category("Warranty")]
        
        [HalfWidth]
       

        public Int32 YearsOfLife { get; set; }
        [HalfWidth]
       

        public DateTime WarrantyStartDate { get; set; }
        [HalfWidth]
       

        public DateTime WarrantyEndDate { get; set; }
       





        [Category("Additional info")]
        [WorkOrderBugEditor]
      
       
        public List<Entities.WorkOrderBugRow> WorkOrderBug { get; set; }

        [WorkOrderFixEditor]
     

        public List<Entities.WorkOrderFixRow> WorkOrderFix { get; set; }

        [WorkorderBoqItemEditor]
    
       

        public List<Entities.WorkorderBoqItemRow> WorkorderBoqItem { get; set; }
        

        [TextAreaEditor(Cols = 1, Rows = 4)]
       

        public String WorkorderNotes { get; set; }

        //[Category("Workflow information")]
        //public String ActionTemaple { get; set; }
        public String Remark2 { get; set; }



        //[DisplayName("Comment")]
        //[TextAreaEditor(Cols = 1, Rows = 4)]
        public String Remark3 { get; set; }
        public String signature { get; set; }

        







        [Tab("Attachments")]

        [Category("Attachments")]
        [HalfWidth]
   

        public String Doc1 { get; set; }
       
        [HalfWidth]
        public String Doc2 { get; set; }
       
        [HalfWidth]
        public String Doc3 { get; set; }
    
        [HalfWidth]
        public String Doc4 { get; set; }
       
        [HalfWidth]
        public String DocImageMap { get; set; }
       
        [HalfWidth]
        public String DocImageMapKey { get; set; }

        

   
     

        public String Remark1 { get; set; }

      
        public String DocOther1 { get; set; }

        [Category("Contractor Attachments")]


        [HalfWidth]
        public String Doc5 { get; set; }

        [HalfWidth]
        public String Doc6 { get; set; }

        [HalfWidth]
        public String Doc7 { get; set; }
        [HalfWidth]
        public String Doc8 { get; set; }
     
        public String DocOther2 { get; set; }

        [Tab("Workflow History")]
        [Category("Follow up Workflow History")]

        public String WorkflowHis { get; set; }

        [Tab("Workflow Integration")]
        [Category("Follow up HF")]

        public String HafriaTemplate { get; set; }


        [Hidden]
        public String protem { get; set; }



        [Tab("Map View")]

        [Category("Locations")]

        public String MyMapLocation { get; set; }


        //public String DocImageMap { get; set; }
        //public String Remark2 { get; set; }
        //public String Remark3 { get; set; }
        //public String Remark4 { get; set; }
        //public DateTime RemarkDate1 { get; set; }
        //public DateTime RemarkDate2 { get; set; }
        //public DateTime RemarkDate3 { get; set; }
    }
}