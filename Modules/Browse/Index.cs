
namespace PMMS.Apps.Browse
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;

    [RoutePrefix("Apps/Browse"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Browser)]
    public class BrowseController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.PMMS.Apps.Browse);
        }

        [HttpPost]
        public ActionResult GetData( string Section,string road)
        {
            

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();



            string query = @"
select substring(sd.section_no, 11, 3) secno
	,sd.section_no secnum
	,substring(sd.section_no, 14, 2) dir
	,substring(sd.section_no, 16, 2) ftr
	,contractor_no
	,sd.utility_cuts
	,sd.survey_date
	,sd.water_ponding
	,pc.section_PCI
	,pc.Distress_summary
	,pc.Section_Rating
	,pc.Maintenance_Cost
	,pc.Distress_Condition_Before
	,pc.Distress_Condition_After
from section_details sd
LEFT OUTER JOIN pavement_condition pc on sd.Section_No = pc.Section_No
where sd.section_no like '" + Section + "%' order by sd.section_no asc";

            string query1 = @"select substring(sd.section_no, 11, 3) secno
	,sd.section_no secnum
	,substring(sd.section_no, 14, 2) dir
	,substring(sd.section_no, 16, 2) ftr
	,contractor_no
	,sd.utility_cuts
	,sd.survey_date
	,sd.water_ponding
	,pc.section_PCI
	,pc.Distress_summary
	,pc.Section_Rating
	,pc.Maintenance_Cost
	,pc.Distress_Condition_Before
	,pc.Distress_Condition_After
from section_details sd
LEFT OUTER JOIN pavement_condition pc on sd.Section_No = pc.Section_No
where sd.section_no like '" + Section + "%' and sd.road_class = '" + road + "' order by sd.section_no asc";

            string resu = query;

            if (road !="0")
            {
                resu = query1;
            }
            var GetAll = connection.Query<ListDataSection>(resu);


            JsonResult result = Json(GetAll.ToList());
            result.MaxJsonLength = 86753099;

            return result;



        }

        [HttpPost]
        public ActionResult GetData2(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            
            var GetAll = connection.Query<SectionObjects>("Select * from Section_Objects where Section_No like '"+Section+"%' order by section_no asc");


            JsonResult result = Json(GetAll.ToList());
            result.MaxJsonLength = 86753099;

            return result;



        }


        public JsonResult GetSubData(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<subItem>("Select * from Distress_Samples where Section_No = '"+ Section + "'");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }


        public class ListDataSection
        {

            public string secno { get; set; }
            public string secnum { get; set; }
            public string dir { get; set; }
            public string ftr { get; set; }
            public string contractor_no { get; set; }
            public string utility_cuts { get; set; }
            public string survey_date { get; set; }
            public string water_ponding { get; set; }
            public string section_PCI { get; set; }
            public string Distress_summary { get; set; }
            public string Section_Rating { get; set; }
            public string Maintenance_Cost { get; set; }
            public string Distress_Condition_Before { get; set; }
            public string Distress_Condition_After { get; set; }

        }

        public class subItem
        {


            public string SECTION_NO { get; set; }
            public string SAMPLE_NO { get; set; }
            public string SAMPLE_SURVEY_NO { get; set; }
            public string SAMPLE_AREA { get; set; }
            public string DISTRESS_0 { get; set; }
            public string DISTRESS_1 { get; set; }
            public string DISTRESS_2 { get; set; }
            public string DISTRESS_3 { get; set; }
            public string DISTRESS_4 { get; set; }
            public string DISTRESS_5 { get; set; }
            public string DISTRESS_6 { get; set; }
            public string DISTRESS_7 { get; set; }
            public string DISTRESS_8 { get; set; }
            public string DISTRESS_9 { get; set; }
            public string SEVERITY_0 { get; set; }
            public string SEVERITY_1 { get; set; }
            public string SEVERITY_2 { get; set; }
            public string SEVERITY_3 { get; set; }
            public string SEVERITY_4 { get; set; }
            public string SEVERITY_5 { get; set; }
            public string SEVERITY_6 { get; set; }
            public string SEVERITY_7 { get; set; }
            public string SEVERITY_8 { get; set; }
            public string SEVERITY_9 { get; set; }
            public string QUANTITY_0 { get; set; }
            public string QUANTITY_1 { get; set; }
            public string QUANTITY_2 { get; set; }
            public string QUANTITY_3 { get; set; }
            public string QUANTITY_4 { get; set; }
            public string QUANTITY_5 { get; set; }
            public string QUANTITY_6 { get; set; }
            public string QUANTITY_7 { get; set; }
            public string QUANTITY_8 { get; set; }
            public string QUANTITY_9 { get; set; }
            public string TOTAL_DEDUCT_VALUE { get; set; }
            public string COMPUTED_DEDUCT_VALUE { get; set; }
            public string SAMPLE_PCI { get; set; }
            public string DISTRESS_10 { get; set; }
            public string DISTRESS_11 { get; set; }
            public string DISTRESS_12 { get; set; }
            public string DISTRESS_13 { get; set; }
            public string DISTRESS_14 { get; set; }
            public string DISTRESS_15 { get; set; }
            public string DISTRESS_16 { get; set; }
            public string DISTRESS_17 { get; set; }
            public string DISTRESS_18 { get; set; }
            public string DISTRESS_19 { get; set; }
            public string SEVERITY_10 { get; set; }
            public string SEVERITY_11 { get; set; }
            public string SEVERITY_12 { get; set; }
            public string SEVERITY_13 { get; set; }
            public string SEVERITY_14 { get; set; }
            public string SEVERITY_15 { get; set; }
            public string SEVERITY_16 { get; set; }
            public string SEVERITY_17 { get; set; }
            public string SEVERITY_18 { get; set; }
            public string SEVERITY_19 { get; set; }
            public string QUANTITY_10 { get; set; }
            public string QUANTITY_11 { get; set; }
            public string QUANTITY_12 { get; set; }
            public string QUANTITY_13 { get; set; }
            public string QUANTITY_14 { get; set; }
            public string QUANTITY_15 { get; set; }
            public string QUANTITY_16 { get; set; }
            public string QUANTITY_17 { get; set; }
            public string QUANTITY_18 { get; set; }
            public string QUANTITY_19 { get; set; }

        }


        public class SectionObjects
        {
            public string SECTION_LENGTH { get; set; }
            public string SECTION_WIDTH { get; set; }
            public string SECTION_NO { get; set; }
            public string KERBSTONE_TYPE { get; set; }
            public string PAVING_TYPE { get; set; }
            public string CONTRACTOR_NO { get; set; }
            public string CONSTRUCTION_DATE { get; set; }
            public string SURVEY_DATE { get; set; }

        }
    }



}
