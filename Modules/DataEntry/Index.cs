
namespace PMMS.Apps.DataEntry
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using System.Collections.Generic;
    using System;
    using PMMS.Northwind;
    using Serenity;
    using System.Data;
    using System.Data.SqlClient;
    using System.Configuration;

    [RoutePrefix("Apps/DataEntry"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.DataEntry)]
    public class DataEntryController : Controller
    {
        public ActionResult Index()
        {
       
            if (ConfigurationManager.AppSettings.Get("EnableDefault") == "1")
            {
                return View(MVC.Views.PMMS.Apps.DataEntryDefault);

            }
            else
            {
                return View(MVC.Views.PMMS.Apps.DataEntry);

            }
        }



        public JsonResult GetSectionData(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<SectionsDetails>(@"SELECT  [SECTION_NO] , FORMAT (SURVEY_DATE, 'yyyy-MM-dd') as SURVEY_DATE , 
FORMAT (CONSTRUCTION_DATE, 'yyyy-MM-dd') as CONSTRUCTION_DATE ,[ASPHALTIC_LAYER_THICKNESS] ,[BASE_LAYER_THICKNESS] ,
[SUB_BASE] ,[SUB_GRADE] ,[AVERAGE_DAILY_TRAFFIC] ,[TRUCKS_PERCENTAGE] ,[TOTAL_SAMPLES] ,[SAMPLES_SURVEYED] ,[IS_USED_BY_VIP] ,
[IS_PASSING_THRO_CBD] ,[IS_NEAR_OFF_PUBLIC_BUILD] ,[HAS_ALTERNATE_ROAD] ,[WATER_PONDING] ,[UTILITY_CUTS] ,[SECTION_LENGTH] ,[SECTION_WIDTH] ,
[SECTION_AREA] ,[CONTRACTOR_NO] ,[ROAD_CLASS],distortion,call940,digs,Locatian,Infrastructure,SubClass,(select top 1 roadcategory from ROADS where roads.roadid=SECTION_DETAILS.streetid) as RoadCategory	 FROM SECTION_DETAILS  where Section_No= '" + Section + "'");
            

            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }


        public JsonResult CalaSaveSectionData(string width, string lenght)
        {

            var PCI = new PavePixel.PCI.PCI();

            return Json(PCI.CalaSaveSectionData(width, lenght), JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveSectionData(SectionsDetails Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from SECTION_DETAILS where SECTION_NO='" +Section.SECTION_NO +"'");



            if (Section.SECTION_NO == "")
            {

                return Json("No Secction", JsonRequestBehavior.AllowGet);
            }


            if (Section.SECTION_WIDTH == null) { Section.SECTION_WIDTH = "0"; }else { if (Section.SECTION_WIDTH == "" ){ Section.SECTION_WIDTH = "0"; } }
            if (Section.SECTION_LENGTH == null) { Section.SECTION_LENGTH = "0"; }else { if (Section.SECTION_LENGTH == "" ){ Section.SECTION_LENGTH = "0"; } }
           

            double k1;
            int n1;
            // int n2;

            k1 = System.Convert.ToDouble(Section.SECTION_WIDTH) * System.Convert.ToDouble(Section.SECTION_LENGTH);
            Section.SECTION_AREA = k1.ToString();
            n1 = Round_Integer(Round_Decimal(k1 / (double)300, 2));
            Section.TOTAL_SAMPLES = n1.ToString();


            if (GetAll.ToList().Count==0)
            {
              

                var queryParameters = new DynamicParameters();

                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@SURVEY_DATE", Section.SURVEY_DATE);
                queryParameters.Add("@CONSTRUCTION_DATE", Section.CONSTRUCTION_DATE);
                queryParameters.Add("@ASPHALTIC_LAYER_THICKNESS", Section.ASPHALTIC_LAYER_THICKNESS);
                queryParameters.Add("@BASE_LAYER_THICKNESS", Section.BASE_LAYER_THICKNESS);
                queryParameters.Add("@SUB_BASE", Section.SUB_BASE);
                queryParameters.Add("@SUB_GRADE", Section.SUB_GRADE);
                queryParameters.Add("@AVERAGE_DAILY_TRAFFIC", Section.AVERAGE_DAILY_TRAFFIC);
                queryParameters.Add("@TRUCKS_PERCENTAGE", Section.TRUCKS_PERCENTAGE);
                queryParameters.Add("@TOTAL_SAMPLES", Section.TOTAL_SAMPLES);
                queryParameters.Add("@SAMPLES_SURVEYED", Section.SAMPLES_SURVEYED);
                queryParameters.Add("@IS_USED_BY_VIP", Section.IS_USED_BY_VIP);
                queryParameters.Add("@IS_PASSING_THRO_CBD", Section.IS_PASSING_THRO_CBD);
                queryParameters.Add("@IS_NEAR_OFF_PUBLIC_BUILD", Section.IS_NEAR_OFF_PUBLIC_BUILD);
                queryParameters.Add("@HAS_ALTERNATE_ROAD", Section.HAS_ALTERNATE_ROAD);
                queryParameters.Add("@WATER_PONDING", Section.WATER_PONDING);
                queryParameters.Add("@UTILITY_CUTS", Section.UTILITY_CUTS);
                queryParameters.Add("@SECTION_LENGTH", Section.SECTION_LENGTH);
                queryParameters.Add("@SECTION_WIDTH", Section.SECTION_WIDTH);
                queryParameters.Add("@SECTION_AREA", Section.SECTION_AREA);
                queryParameters.Add("@CONTRACTOR_NO", Section.CONTRACTOR_NO);
                queryParameters.Add("@ROAD_CLASS", Section.ROAD_CLASS);
                queryParameters.Add("@distortion", Section.distortion);
                queryParameters.Add("@call940", Section.call940);
                queryParameters.Add("@digs", Section.digs);
                queryParameters.Add("@Locatian", Section.Locatian);
                queryParameters.Add("@Infrastructure", Section.Infrastructure);
                queryParameters.Add("@SubClass", Section.SubClass);

                

                connection.Execute("INSERT INTO [dbo].[SECTION_DETAILS] ([SECTION_NO] ,[SURVEY_DATE] ,[CONSTRUCTION_DATE] ,[ASPHALTIC_LAYER_THICKNESS] ,[BASE_LAYER_THICKNESS] ,[SUB_BASE] ,[SUB_GRADE] ,[AVERAGE_DAILY_TRAFFIC] ,[TRUCKS_PERCENTAGE] ,[TOTAL_SAMPLES] ,[SAMPLES_SURVEYED] ,[IS_USED_BY_VIP] ,[IS_PASSING_THRO_CBD] ,[IS_NEAR_OFF_PUBLIC_BUILD] ,[HAS_ALTERNATE_ROAD] ,[WATER_PONDING] ,[UTILITY_CUTS] ,[SECTION_LENGTH] ,[SECTION_WIDTH] ,[SECTION_AREA] ,[CONTRACTOR_NO] ,[ROAD_CLASS],distortion,call940,digs,Locatian,Infrastructure,SubClass,streetid,IsSecond) VALUES (@SECTION_NO ,@SURVEY_DATE ,@CONSTRUCTION_DATE ,@ASPHALTIC_LAYER_THICKNESS ,@BASE_LAYER_THICKNESS ,@SUB_BASE ,@SUB_GRADE ,@AVERAGE_DAILY_TRAFFIC ,@TRUCKS_PERCENTAGE ,@TOTAL_SAMPLES ,@SAMPLES_SURVEYED ,@IS_USED_BY_VIP ,@IS_PASSING_THRO_CBD ,@IS_NEAR_OFF_PUBLIC_BUILD ,@HAS_ALTERNATE_ROAD ,@WATER_PONDING ,@UTILITY_CUTS ,@SECTION_LENGTH ,@SECTION_WIDTH ,@SECTION_AREA ,@CONTRACTOR_NO ,@ROAD_CLASS,@distortion,@call940,@digs,@Locatian,@Infrastructure,@SubClass,(select convert(bigint,streetid) from sections where SECTION_NO=LEFT(@SECTION_NO, LEN(@SECTION_NO)-4))	,'1')", queryParameters);

                var queryParameters2 = new DynamicParameters();
                queryParameters2.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters2.Add("@roadcategory", Section.RoadCategory);

                connection.Execute("update roads set roadcategory=@roadcategory where roadid=(select convert(bigint,streetid) from sections where SECTION_NO=LEFT(@SECTION_NO, LEN(@SECTION_NO)-4))", queryParameters2);


            }
            else
            {


                var queryParameters = new DynamicParameters();

                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@SURVEY_DATE", Section.SURVEY_DATE);
                queryParameters.Add("@CONSTRUCTION_DATE", Section.CONSTRUCTION_DATE);
                queryParameters.Add("@ASPHALTIC_LAYER_THICKNESS", Section.ASPHALTIC_LAYER_THICKNESS);
                queryParameters.Add("@BASE_LAYER_THICKNESS", Section.BASE_LAYER_THICKNESS);
                queryParameters.Add("@SUB_BASE", Section.SUB_BASE);
                queryParameters.Add("@SUB_GRADE", Section.SUB_GRADE);
                queryParameters.Add("@AVERAGE_DAILY_TRAFFIC", Section.AVERAGE_DAILY_TRAFFIC);
                queryParameters.Add("@TRUCKS_PERCENTAGE", Section.TRUCKS_PERCENTAGE);
                queryParameters.Add("@TOTAL_SAMPLES", Section.TOTAL_SAMPLES);
                queryParameters.Add("@SAMPLES_SURVEYED", Section.SAMPLES_SURVEYED);
                queryParameters.Add("@IS_USED_BY_VIP", Section.IS_USED_BY_VIP);
                queryParameters.Add("@IS_PASSING_THRO_CBD", Section.IS_PASSING_THRO_CBD);
                queryParameters.Add("@IS_NEAR_OFF_PUBLIC_BUILD", Section.IS_NEAR_OFF_PUBLIC_BUILD);
                queryParameters.Add("@HAS_ALTERNATE_ROAD", Section.HAS_ALTERNATE_ROAD);
                queryParameters.Add("@WATER_PONDING", Section.WATER_PONDING);
                queryParameters.Add("@UTILITY_CUTS", Section.UTILITY_CUTS);
                queryParameters.Add("@SECTION_LENGTH", Section.SECTION_LENGTH);
                queryParameters.Add("@SECTION_WIDTH", Section.SECTION_WIDTH);
                queryParameters.Add("@SECTION_AREA", Section.SECTION_AREA);
                queryParameters.Add("@CONTRACTOR_NO", Section.CONTRACTOR_NO);
                queryParameters.Add("@ROAD_CLASS", Section.ROAD_CLASS);
                queryParameters.Add("@distortion", Section.distortion);
                queryParameters.Add("@call940", Section.call940);
                queryParameters.Add("@digs", Section.digs);
                queryParameters.Add("@Locatian", Section.Locatian);
                queryParameters.Add("@Infrastructure", Section.Infrastructure);
                queryParameters.Add("@SubClass", Section.SubClass);

                connection.Execute("UPDATE [dbo].[SECTION_DETAILS] SET [SURVEY_DATE] =@SURVEY_DATE ,[CONSTRUCTION_DATE] =@CONSTRUCTION_DATE ,[ASPHALTIC_LAYER_THICKNESS] =@ASPHALTIC_LAYER_THICKNESS ,[BASE_LAYER_THICKNESS] =@BASE_LAYER_THICKNESS ,[SUB_BASE] =@SUB_BASE ,[SUB_GRADE] =@SUB_GRADE ,[AVERAGE_DAILY_TRAFFIC] =@AVERAGE_DAILY_TRAFFIC ,[TRUCKS_PERCENTAGE] =@TRUCKS_PERCENTAGE ,[TOTAL_SAMPLES] =@TOTAL_SAMPLES ,[SAMPLES_SURVEYED] =@SAMPLES_SURVEYED ,[IS_USED_BY_VIP] =@IS_USED_BY_VIP ,[IS_PASSING_THRO_CBD] =@IS_PASSING_THRO_CBD ,[IS_NEAR_OFF_PUBLIC_BUILD] =@IS_NEAR_OFF_PUBLIC_BUILD ,[HAS_ALTERNATE_ROAD] =@HAS_ALTERNATE_ROAD ,[WATER_PONDING] =@WATER_PONDING ,[UTILITY_CUTS] =@UTILITY_CUTS ,[SECTION_LENGTH] =@SECTION_LENGTH ,[SECTION_WIDTH] =@SECTION_WIDTH ,[SECTION_AREA] =@SECTION_AREA ,[CONTRACTOR_NO] =@CONTRACTOR_NO ,[ROAD_CLASS] =@ROAD_CLASS,distortion=@distortion,call940=@call940,digs=@digs,Locatian=@Locatian,Infrastructure=@Infrastructure,SubClass=@SubClass	 WHERE SECTION_NO =@SECTION_NO", queryParameters);

                var queryParameters2 = new DynamicParameters();
                queryParameters2.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters2.Add("@roadcategory", Section.RoadCategory);

                connection.Execute("update roads set roadcategory=@roadcategory where roadid=(select convert(bigint,streetid) from sections where SECTION_NO=LEFT(@SECTION_NO, LEN(@SECTION_NO)-4))", queryParameters2);


            }









            return Json("done", JsonRequestBehavior.AllowGet);



        }



        public JsonResult SaveSectionObject(SectionObjects Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from SECTION_OBJECTS where SECTION_NO='" + Section.SECTION_NO + "'");


            if (Section.SECTION_NO == "")
            {

                return Json("No Secction", JsonRequestBehavior.AllowGet);
            }


            if (GetAll.ToList().Count == 0)
            {


                var queryParameters = new DynamicParameters();
                queryParameters.Add("@SECTION_LENGTH", Section.SECTION_LENGTH);
                queryParameters.Add("@SECTION_WIDTH", Section.SECTION_WIDTH);
                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@KERBSTONE_TYPE", Section.KERBSTONE_TYPE);
                queryParameters.Add("@PAVING_TYPE", Section.PAVING_TYPE);
                queryParameters.Add("@CONTRACTOR_NO", Section.CONTRACTOR_NO);
                queryParameters.Add("@CONSTRUCTION_DATE", Section.CONSTRUCTION_DATE);
                queryParameters.Add("@SURVEY_DATE", Section.SURVEY_DATE);



                connection.Execute("INSERT INTO [dbo].[SECTION_OBJECTS] ([SECTION_LENGTH] ,[SECTION_WIDTH] ,[SECTION_NO] ,[KERBSTONE_TYPE] ,[PAVING_TYPE] ,[CONTRACTOR_NO] ,[CONSTRUCTION_DATE] ,[SURVEY_DATE]) VALUES (@SECTION_LENGTH ,@SECTION_WIDTH ,@SECTION_NO ,@KERBSTONE_TYPE ,@PAVING_TYPE ,@CONTRACTOR_NO ,@CONSTRUCTION_DATE ,@SURVEY_DATE)", queryParameters);

            }
            else
            {
                var queryParameters = new DynamicParameters();
                queryParameters.Add("@SECTION_LENGTH", Section.SECTION_LENGTH);
                queryParameters.Add("@SECTION_WIDTH", Section.SECTION_WIDTH);
                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@KERBSTONE_TYPE", Section.KERBSTONE_TYPE);
                queryParameters.Add("@PAVING_TYPE", Section.PAVING_TYPE);
                queryParameters.Add("@CONTRACTOR_NO", Section.CONTRACTOR_NO);
                queryParameters.Add("@CONSTRUCTION_DATE", Section.CONSTRUCTION_DATE);
                queryParameters.Add("@SURVEY_DATE", Section.SURVEY_DATE);

                connection.Execute("UPDATE [dbo].[SECTION_OBJECTS] SET SECTION_LENGTH=@SECTION_LENGTH,[SECTION_WIDTH] = @SECTION_WIDTH  ,[KERBSTONE_TYPE] = @KERBSTONE_TYPE ,[PAVING_TYPE] = @PAVING_TYPE ,[CONTRACTOR_NO] = @CONTRACTOR_NO ,[CONSTRUCTION_DATE] = @CONSTRUCTION_DATE ,[SURVEY_DATE] = @SURVEY_DATE WHERE  SECTION_NO =@SECTION_NO", queryParameters);
            }

            return Json("done", JsonRequestBehavior.AllowGet);


        }


        public JsonResult SaveEQUIPMENT(EQUIPMENT Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from EQUIPMENT where SECTION_NO='" + Section.SECTION_NO + "'");


            if (Section.SECTION_NO == "")
            {

                return Json("No Secction", JsonRequestBehavior.AllowGet);
            }


            if (GetAll.ToList().Count == 0)
            {


                var queryParameters = new DynamicParameters();
                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@DEFLECTION_EQUIPMENT", Section.DEFLECTION_EQUIPMENT);
                queryParameters.Add("@APPLIED_LOAD", Section.APPLIED_LOAD);
                queryParameters.Add("@DEFLECTION_MEASURE_0", Section.DEFLECTION_MEASURE_0);
                queryParameters.Add("@DEFLECTION_MEASURE_1", Section.DEFLECTION_MEASURE_1);
                queryParameters.Add("@DEFLECTION_MEASURE_2", Section.DEFLECTION_MEASURE_2);
                queryParameters.Add("@DEFLECTION_MEASURE_3", Section.DEFLECTION_MEASURE_3);
                queryParameters.Add("@DEFLECTION_MEASURE_4", Section.DEFLECTION_MEASURE_4);
                queryParameters.Add("@DEFLECTION_MEASURE_5", Section.DEFLECTION_MEASURE_5);
                queryParameters.Add("@DEFLECTION_MEASURE_6", Section.DEFLECTION_MEASURE_6);
                queryParameters.Add("@ROUGHNESS_EQUIPMENT", Section.ROUGHNESS_EQUIPMENT);
                queryParameters.Add("@AVERAGE_ROUGHNESS", Section.AVERAGE_ROUGHNESS);
                queryParameters.Add("@SKID_EQUIPMENT", Section.SKID_EQUIPMENT);
                queryParameters.Add("@AVERAGE_SKID_WET", Section.AVERAGE_SKID_WET);
                queryParameters.Add("@AVERAGE_SKID_DRY", Section.AVERAGE_SKID_DRY);


                connection.Execute("INSERT INTO [dbo].[EQUIPMENT] ([SECTION_NO] ,[DEFLECTION_EQUIPMENT] ,[APPLIED_LOAD] ,[DEFLECTION_MEASURE_0] ,[DEFLECTION_MEASURE_1] ,[DEFLECTION_MEASURE_2] ,[DEFLECTION_MEASURE_3] ,[DEFLECTION_MEASURE_4] ,[DEFLECTION_MEASURE_5] ,[DEFLECTION_MEASURE_6] ,[ROUGHNESS_EQUIPMENT] ,[AVERAGE_ROUGHNESS] ,[SKID_EQUIPMENT] ,[AVERAGE_SKID_WET] ,[AVERAGE_SKID_DRY]) VALUES (@SECTION_NO ,@DEFLECTION_EQUIPMENT ,@APPLIED_LOAD ,@DEFLECTION_MEASURE_0 ,@DEFLECTION_MEASURE_1 ,@DEFLECTION_MEASURE_2 ,@DEFLECTION_MEASURE_3 ,@DEFLECTION_MEASURE_4 ,@DEFLECTION_MEASURE_5 ,@DEFLECTION_MEASURE_6 ,@ROUGHNESS_EQUIPMENT ,@AVERAGE_ROUGHNESS ,@SKID_EQUIPMENT ,@AVERAGE_SKID_WET ,@AVERAGE_SKID_DRY )", queryParameters);


            }
            else
            {
                var queryParameters = new DynamicParameters();

                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@DEFLECTION_EQUIPMENT", Section.DEFLECTION_EQUIPMENT);
                queryParameters.Add("@APPLIED_LOAD", Section.APPLIED_LOAD);
                queryParameters.Add("@DEFLECTION_MEASURE_0", Section.DEFLECTION_MEASURE_0);
                queryParameters.Add("@DEFLECTION_MEASURE_1", Section.DEFLECTION_MEASURE_1);
                queryParameters.Add("@DEFLECTION_MEASURE_2", Section.DEFLECTION_MEASURE_2);
                queryParameters.Add("@DEFLECTION_MEASURE_3", Section.DEFLECTION_MEASURE_3);
                queryParameters.Add("@DEFLECTION_MEASURE_4", Section.DEFLECTION_MEASURE_4);
                queryParameters.Add("@DEFLECTION_MEASURE_5", Section.DEFLECTION_MEASURE_5);
                queryParameters.Add("@DEFLECTION_MEASURE_6", Section.DEFLECTION_MEASURE_6);
                queryParameters.Add("@ROUGHNESS_EQUIPMENT", Section.ROUGHNESS_EQUIPMENT);
                queryParameters.Add("@AVERAGE_ROUGHNESS", Section.AVERAGE_ROUGHNESS);
                queryParameters.Add("@SKID_EQUIPMENT", Section.SKID_EQUIPMENT);
                queryParameters.Add("@AVERAGE_SKID_WET", Section.AVERAGE_SKID_WET);
                queryParameters.Add("@AVERAGE_SKID_DRY", Section.AVERAGE_SKID_DRY);

                connection.Execute("UPDATE [dbo].[EQUIPMENT] SET [DEFLECTION_EQUIPMENT] = @DEFLECTION_EQUIPMENT ,[APPLIED_LOAD] = @APPLIED_LOAD ,[DEFLECTION_MEASURE_0] = @DEFLECTION_MEASURE_0 ,[DEFLECTION_MEASURE_1] = @DEFLECTION_MEASURE_1 ,[DEFLECTION_MEASURE_2] = @DEFLECTION_MEASURE_2 ,[DEFLECTION_MEASURE_3] = @DEFLECTION_MEASURE_3 ,[DEFLECTION_MEASURE_4] = @DEFLECTION_MEASURE_4 ,[DEFLECTION_MEASURE_5] = @DEFLECTION_MEASURE_5 ,[DEFLECTION_MEASURE_6] = @DEFLECTION_MEASURE_6 ,[ROUGHNESS_EQUIPMENT] = @ROUGHNESS_EQUIPMENT ,[AVERAGE_ROUGHNESS] = @AVERAGE_ROUGHNESS ,[SKID_EQUIPMENT] = @SKID_EQUIPMENT ,[AVERAGE_SKID_WET] = @AVERAGE_SKID_WET ,[AVERAGE_SKID_DRY] = @AVERAGE_SKID_DRY WHERE  SECTION_NO =@SECTION_NO", queryParameters);
            }

            return Json("done", JsonRequestBehavior.AllowGet);


        }



        public JsonResult AddSample(string SECTION_NO,string SAMPLE_SURVEY_NO, string SAMPLE_AREA)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from SECTION_DETAILS where SECTION_NO='" + SECTION_NO + "'");
            string sample = "";


            if (SECTION_NO == "")
            {

                return Json("0", JsonRequestBehavior.AllowGet);
            }


            if (GetAll.ToList().Count == 0)
            {




                return Json("0", JsonRequestBehavior.AllowGet);



            }
            else
            {

                var GetSampleNo = connection.Query<PMMS.Northwind.ItemSelect>("select top 1 [SAMPLE_NO] + 1  as Text from [dbo].[DISTRESS_SAMPLES] where SECTION_NO='"+SECTION_NO +"' order by [SAMPLE_NO] desc");

                if (GetSampleNo.ToList().Count == 0)
                {

                    sample = "1";
                }
                else
                {
                    sample = GetSampleNo.ToList()[0].Text;
                }


                    var queryParameters = new DynamicParameters();
                string userId = Authorization.UserId.ToString();

                queryParameters.Add("@SECTION_NO", SECTION_NO);
                queryParameters.Add("@SAMPLE_NO", sample);
                queryParameters.Add("@SAMPLE_SURVEY_NO", SAMPLE_SURVEY_NO);
                queryParameters.Add("@SAMPLE_AREA", SAMPLE_AREA);
                queryParameters.Add("@CBY", userId);
                queryParameters.Add("@CDATE", DateTime.Now);



                if (ConfigurationManager.AppSettings.Get("EnableDefault") == "1")
                {
                    connection.Execute("insert into [dbo].[DISTRESS_SAMPLES]( [SECTION_NO], [SAMPLE_NO], [SAMPLE_SURVEY_NO], [SAMPLE_AREA],LaneId,StreetId,CBY,CDATE ) values ( @SECTION_NO, @SAMPLE_NO, @SAMPLE_SURVEY_NO, @SAMPLE_AREA ,(select convert(bigint,LaneId) from SECTION_DETAILS where SECTION_NO=@SECTION_NO),(select convert(bigint,streetid) from sections where SECTION_NO=LEFT(@SECTION_NO, LEN(@SECTION_NO)-4)),@CBY,@CDATE)", queryParameters);

                }
                else
                {
                    connection.Execute("insert into [dbo].[DISTRESS_SAMPLES]( [SECTION_NO], [SAMPLE_NO], [SAMPLE_SURVEY_NO], [SAMPLE_AREA],LaneId,StreetId,CBY,CDATE ) values ( @SECTION_NO, @SAMPLE_NO, @SAMPLE_SURVEY_NO, @SAMPLE_AREA ,(select convert(bigint,LaneId) from SECTION_DETAILS where SECTION_NO=@SECTION_NO),(select convert(bigint,streetid) from SECTION_DETAILS where SECTION_NO=@SECTION_NO),@CBY,@CDATE)", queryParameters);

                }


            }

            return Json( sample, JsonRequestBehavior.AllowGet);


        }





        public JsonResult AddSampleObject(string SECTION_NO, string SAMPLE_AREA)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from SECTION_OBJECTS where SECTION_NO='" + SECTION_NO + "'");
            string sample = "";


            if (SECTION_NO == "")
            {

                return Json("0", JsonRequestBehavior.AllowGet);
            }


            if (GetAll.ToList().Count == 0)
            {




                return Json("0", JsonRequestBehavior.AllowGet);



            }
            else
            {

                var GetSampleNo = connection.Query<PMMS.Northwind.ItemSelect>("select top 1 [SAMPLE_NO] + 1  as Text from [dbo].[DISTRESS_SAMPLES] where SECTION_NO='" + SECTION_NO + "' order by [SAMPLE_NO] desc");

                if (GetSampleNo.ToList().Count == 0)
                {

                    sample = "1";
                }
                else
                {
                    return Json("0", JsonRequestBehavior.AllowGet);
                }


                var queryParameters = new DynamicParameters();

                queryParameters.Add("@SECTION_NO", SECTION_NO);
                queryParameters.Add("@SAMPLE_NO", sample);
                queryParameters.Add("@SAMPLE_SURVEY_NO", "1");
                queryParameters.Add("@SAMPLE_AREA", SAMPLE_AREA);




                connection.Execute("insert into [dbo].[DISTRESS_SAMPLES]( [SECTION_NO], [SAMPLE_NO], [SAMPLE_SURVEY_NO], [SAMPLE_AREA] ) values ( @SECTION_NO, @SAMPLE_NO, @SAMPLE_SURVEY_NO, @SAMPLE_AREA )", queryParameters);
            }

            return Json("done", JsonRequestBehavior.AllowGet);


        }



        public JsonResult DeleteSample(string SECTION_NO, string SampleID)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

            var queryParameters = new DynamicParameters();
               queryParameters.Add("@SECTION_NO", SECTION_NO);
                queryParameters.Add("@SAMPLE_NO", SampleID);
              

                connection.Execute("delete from[DISTRESS_SAMPLES]  where [SECTION_NO] = @SECTION_NO and[SAMPLE_NO] = @SAMPLE_NO", queryParameters);
            

            return Json("done", JsonRequestBehavior.AllowGet);


        }


        public JsonResult SaveSample(Distress_Samples Section)
        {
            string userId = Authorization.UserId.ToString();


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
          
                var queryParameters = new DynamicParameters();


            queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
            queryParameters.Add("@SAMPLE_NO", Section.SAMPLE_NO);
            queryParameters.Add("@SAMPLE_SURVEY_NO", Section.SAMPLE_SURVEY_NO);
            queryParameters.Add("@SAMPLE_AREA", Section.SAMPLE_AREA);
            queryParameters.Add("@DISTRESS_0", Section.DISTRESS_0);
            queryParameters.Add("@DISTRESS_1", Section.DISTRESS_1);
            queryParameters.Add("@DISTRESS_2", Section.DISTRESS_2);
            queryParameters.Add("@DISTRESS_3", Section.DISTRESS_3);
            queryParameters.Add("@DISTRESS_4", Section.DISTRESS_4);
            queryParameters.Add("@DISTRESS_5", Section.DISTRESS_5);

            queryParameters.Add("@DISTRESS_6", Section.DISTRESS_6);
            queryParameters.Add("@DISTRESS_7", Section.DISTRESS_7);
            queryParameters.Add("@DISTRESS_8", Section.DISTRESS_8);
            queryParameters.Add("@DISTRESS_9", Section.DISTRESS_9);
            queryParameters.Add("@SEVERITY_0", Section.SEVERITY_0);
            queryParameters.Add("@SEVERITY_1", Section.SEVERITY_1);
            queryParameters.Add("@SEVERITY_2", Section.SEVERITY_2);
            queryParameters.Add("@SEVERITY_3", Section.SEVERITY_3);


            queryParameters.Add("@SEVERITY_4", Section.SEVERITY_4);
            queryParameters.Add("@SEVERITY_5", Section.SEVERITY_5);
            queryParameters.Add("@SEVERITY_6", Section.SEVERITY_6);
            queryParameters.Add("@SEVERITY_7", Section.SEVERITY_7);
            queryParameters.Add("@SEVERITY_8", Section.SEVERITY_8);
            queryParameters.Add("@SEVERITY_9", Section.SEVERITY_9);
            queryParameters.Add("@QUANTITY_0", Section.QUANTITY_0);


            queryParameters.Add("@QUANTITY_1", Section.QUANTITY_1);
            queryParameters.Add("@QUANTITY_2", Section.QUANTITY_2);
            queryParameters.Add("@QUANTITY_3", Section.QUANTITY_3);
            queryParameters.Add("@QUANTITY_4", Section.QUANTITY_4);
            queryParameters.Add("@QUANTITY_5", Section.QUANTITY_5);
            queryParameters.Add("@QUANTITY_6", Section.QUANTITY_6);
            queryParameters.Add("@QUANTITY_7", Section.QUANTITY_7);
            queryParameters.Add("@QUANTITY_8", Section.QUANTITY_8);
            queryParameters.Add("@QUANTITY_9", Section.QUANTITY_9);


            queryParameters.Add("@TOTAL_DEDUCT_VALUE", Section.TOTAL_DEDUCT_VALUE);
            queryParameters.Add("@COMPUTED_DEDUCT_VALUE", Section.COMPUTED_DEDUCT_VALUE);
            queryParameters.Add("@SAMPLE_PCI", Section.SAMPLE_PCI);
            queryParameters.Add("@DISTRESS_10", Section.DISTRESS_10);
            queryParameters.Add("@DISTRESS_11", Section.DISTRESS_11);
            queryParameters.Add("@DISTRESS_12", Section.DISTRESS_12);
            queryParameters.Add("@DISTRESS_13", Section.DISTRESS_13);
            queryParameters.Add("@DISTRESS_14", Section.DISTRESS_14);
            queryParameters.Add("@DISTRESS_15", Section.DISTRESS_15);
            queryParameters.Add("@DISTRESS_16", Section.DISTRESS_16);


            queryParameters.Add("@DISTRESS_17", Section.DISTRESS_17);
            queryParameters.Add("@DISTRESS_18", Section.DISTRESS_18);
            queryParameters.Add("@DISTRESS_19", Section.DISTRESS_19);
            queryParameters.Add("@SEVERITY_10", Section.SEVERITY_10);
            queryParameters.Add("@SEVERITY_11", Section.SEVERITY_11);
            queryParameters.Add("@SEVERITY_12", Section.SEVERITY_12);
            queryParameters.Add("@SEVERITY_13", Section.SEVERITY_13);
            queryParameters.Add("@SEVERITY_14", Section.SEVERITY_14);

            queryParameters.Add("@SEVERITY_15", Section.SEVERITY_15);
            queryParameters.Add("@SEVERITY_16", Section.SEVERITY_16);
            queryParameters.Add("@SEVERITY_17", Section.SEVERITY_17);
            queryParameters.Add("@SEVERITY_18", Section.SEVERITY_18);
            queryParameters.Add("@SEVERITY_19", Section.SEVERITY_19);
            queryParameters.Add("@QUANTITY_10", Section.QUANTITY_10);
            queryParameters.Add("@QUANTITY_11", Section.QUANTITY_11);
            queryParameters.Add("@QUANTITY_12", Section.QUANTITY_12);
            queryParameters.Add("@QUANTITY_13", Section.QUANTITY_13);
            queryParameters.Add("@QUANTITY_14", Section.QUANTITY_14);
            queryParameters.Add("@QUANTITY_15", Section.QUANTITY_15);
            queryParameters.Add("@QUANTITY_16", Section.QUANTITY_16);
            queryParameters.Add("@QUANTITY_17", Section.QUANTITY_17);
            queryParameters.Add("@QUANTITY_18", Section.QUANTITY_18);
            queryParameters.Add("@QUANTITY_19", Section.QUANTITY_19);
            queryParameters.Add("@ReadingFWD", Section.ReadingFWD);
            queryParameters.Add("@ReadingIRI", Section.ReadingIRI);
            queryParameters.Add("@ReadingSKID", Section.ReadingSKID);
            queryParameters.Add("@SurveyDate", Section.SurveyDate);

            queryParameters.Add("@CHBY", userId);
            queryParameters.Add("@CHDATE", DateTime.Now);

            queryParameters.Add("@GroupSurvey", Section.GroupSurvey);

            connection.Execute("UPDATE dbo.DISTRESS_SAMPLES SET SAMPLE_SURVEY_NO =@SAMPLE_SURVEY_NO ,SAMPLE_AREA =@SAMPLE_AREA ,DISTRESS_0 =@DISTRESS_0 ,DISTRESS_1 =@DISTRESS_1 ,DISTRESS_2 =@DISTRESS_2 ,DISTRESS_3 =@DISTRESS_3 ,DISTRESS_4 =@DISTRESS_4 ,DISTRESS_5 =@DISTRESS_5 ,DISTRESS_6 =@DISTRESS_6 ,DISTRESS_7 =@DISTRESS_7 ,DISTRESS_8 =@DISTRESS_8 ,DISTRESS_9 =@DISTRESS_9 ,SEVERITY_0 =@SEVERITY_0 ,SEVERITY_1 =@SEVERITY_1 ,SEVERITY_2 =@SEVERITY_2 ,SEVERITY_3 =@SEVERITY_3 ,SEVERITY_4 =@SEVERITY_4 ,SEVERITY_5 =@SEVERITY_5 ,SEVERITY_6 =@SEVERITY_6 ,SEVERITY_7 =@SEVERITY_7 ,SEVERITY_8 =@SEVERITY_8 ,SEVERITY_9 =@SEVERITY_9 ,QUANTITY_0 =@QUANTITY_0 ,QUANTITY_1 =@QUANTITY_1 ,QUANTITY_2 =@QUANTITY_2 ,QUANTITY_3 =@QUANTITY_3 ,QUANTITY_4 =@QUANTITY_4 ,QUANTITY_5 =@QUANTITY_5 ,QUANTITY_6 =@QUANTITY_6 ,QUANTITY_7 =@QUANTITY_7 ,QUANTITY_8 =@QUANTITY_8 ,QUANTITY_9 =@QUANTITY_9 ,TOTAL_DEDUCT_VALUE =@TOTAL_DEDUCT_VALUE ,COMPUTED_DEDUCT_VALUE =@COMPUTED_DEDUCT_VALUE ,SAMPLE_PCI =@SAMPLE_PCI ,DISTRESS_10 =@DISTRESS_10 ,DISTRESS_11 =@DISTRESS_11 ,DISTRESS_12 =@DISTRESS_12 ,DISTRESS_13 =@DISTRESS_13 ,DISTRESS_14 =@DISTRESS_14 ,DISTRESS_15 =@DISTRESS_15 ,DISTRESS_16 =@DISTRESS_16 ,DISTRESS_17 =@DISTRESS_17 ,DISTRESS_18 =@DISTRESS_18 ,DISTRESS_19 =@DISTRESS_19 ,SEVERITY_10 =@SEVERITY_10 ,SEVERITY_11 =@SEVERITY_11 ,SEVERITY_12 =@SEVERITY_12 ,SEVERITY_13 =@SEVERITY_13 ,SEVERITY_14 =@SEVERITY_14 ,SEVERITY_15 =@SEVERITY_15 ,SEVERITY_16 =@SEVERITY_16 ,SEVERITY_17 =@SEVERITY_17 ,SEVERITY_18 =@SEVERITY_18 ,SEVERITY_19 =@SEVERITY_19 ,QUANTITY_10 =@QUANTITY_10 ,QUANTITY_11 =@QUANTITY_11 ,QUANTITY_12 =@QUANTITY_12 ,QUANTITY_13 =@QUANTITY_13 ,QUANTITY_14 =@QUANTITY_14 ,QUANTITY_15 =@QUANTITY_15 ,QUANTITY_16 =@QUANTITY_16 ,QUANTITY_17 =@QUANTITY_17 ,QUANTITY_18 =@QUANTITY_18 ,QUANTITY_19 =@QUANTITY_19, SurveyDate=@SurveyDate,ReadingSKID=@ReadingSKID,ReadingIRI=@ReadingIRI,ReadingFWD=@ReadingFWD,CHBY=@CHBY,CHDATE=@CHDATE,GroupSurvey=@GroupSurvey WHERE SECTION_NO =@SECTION_NO  and SAMPLE_NO =@SAMPLE_NO", queryParameters);
            

            return Json("done", JsonRequestBehavior.AllowGet);


        }


        public JsonResult SaveSpecialTreatmen(Special_Treatmen Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>("Select SECTION_NO as Id from SPECIAL_TREATMENT_SECTIONS where SECTION_NO='" + Section.SECTION_NO + "'  and SPECIAL_TREATMENT_NO='"+Section.SPECIAL_TREATMENT_NO+"'");


            if (Section.SECTION_NO == "")
            {

                return Json("No Secction", JsonRequestBehavior.AllowGet);
            }


            if (GetAll.ToList().Count == 0)
            {


                var queryParameters = new DynamicParameters();

                queryParameters.Add("@SECTION_NO", Section.SECTION_NO);
                queryParameters.Add("@SPECIAL_TREATMENT_NO", Section.SPECIAL_TREATMENT_NO);
                queryParameters.Add("@SPECIAL_TREATMENT_QUANTITY", Section.SPECIAL_TREATMENT_QUANTITY);

      

                connection.Execute("INSERT INTO [dbo].[SPECIAL_TREATMENT_SECTIONS] ([SECTION_NO] ,[SPECIAL_TREATMENT_NO] ,[SPECIAL_TREATMENT_QUANTITY]) VALUES (@SECTION_NO ,@SPECIAL_TREATMENT_NO ,@SPECIAL_TREATMENT_QUANTITY)", queryParameters);

            }
            else
            {
                return Json("The item is alreedy exsits", JsonRequestBehavior.AllowGet);

            }

            return Json("done", JsonRequestBehavior.AllowGet);


        }


        public JsonResult DeleteSpecialTreatmen(Special_Treatmen Section)
        {



            if (Section.SECTION_NO == "")
            {

                return Json("No Secction", JsonRequestBehavior.AllowGet);
            }


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            connection.Execute("Delete from SPECIAL_TREATMENT_SECTIONS where SECTION_NO='" + Section.SECTION_NO + "'  and SPECIAL_TREATMENT_NO='" + Section.SPECIAL_TREATMENT_NO + "'");


           


            

            return Json("done", JsonRequestBehavior.AllowGet);


        }


        public JsonResult GetSectionObjectsData(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<SectionObjects>(@"SELECT  [SECTION_LENGTH]
	,[SECTION_WIDTH]
	,[SECTION_NO]
	,[KERBSTONE_TYPE]
	,[PAVING_TYPE]
	,[CONTRACTOR_NO]
	,FORMAT (CONSTRUCTION_DATE, 'yyyy-MM-dd') as CONSTRUCTION_DATE
	,FORMAT (SURVEY_DATE, 'yyyy-MM-dd') as SURVEY_DATE
	
FROM [dbo].[SECTION_OBJECTS]

 where Section_No ='" + Section + "'");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }


        public JsonResult GetEqu(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<EQUIPMENT>(@"Select * from Equipment where Section_no  ='" + Section + "'");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }


        public JsonResult GetTreatment(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

         

            var GetAll = connection.Query<Special_Treatmen>(@"Select 

ST.SECTION_NO,
ST.SPECIAL_TREATMENT_NO,
ST.SPECIAL_TREATMENT_QUANTITY,
SP.SPECIAL_TREATMENT_DESCRIPTION

 from Special_Treatment_Sections st

left join SPECIAL_TREATMENT sp
on st.SPECIAL_TREATMENT_NO=sp.SPECIAL_TREATMENT_NO


 Where ST.Section_No ='"+Section+@"'  AND SP.SP_TYPE='p'
 
 order by ST.Special_Treatment_No asc");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }



        public JsonResult GetDistress(string Section)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<Distress_Samples>("Select * from Distress_Samples  where IsOld is null and  Section_No = '" + Section + "'");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }


        public JsonResult GetDistressSample(string Section,string SAMPLE_NO)
        {


            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            var GetAll = connection.Query<Distress_Samples>("Select * from Distress_Samples where IsOld is null and Section_No = '" + Section + "' and SAMPLE_NO='"+ SAMPLE_NO + "'");


            return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);



        }

  


        public double Round_Decimal(double number, int places)
        {


           return Math.Round(number, places);
    //        double X;
    //        int k, n;


    //        k = Convert.ToInt32(number);
    //        X = number - k;
    //        n = Convert.ToInt32(X * Math.Pow(10, (places + 1)));
    //        if ((n % (Math.Pow(10, places))) >= 5)
    //        {
    //            n = Convert.ToInt32(n / (double)10) + 1;
    //            X = n / (Math.Pow(10, (places)));
    //}
    //        else
    //        {
    //            n = Convert.ToInt32(n / (double)10);
    //            X = n / (Math.Pow(10, places));

    //}

           
    //        return k + X;
        }


        public int Round_Integer(double number)
        {
            double X;
            int k, n;
            // on error GoTo Sub_Error

            k = Convert.ToInt32(number);
            X = number - k;
            if (X > 0)
                k = k + 1;
            return k;
        }



        public JsonResult dedcal(double area,double QT, int dts, double Dis_k,string sev,string current)
        {

       

            var PCI = new PavePixel.PCI.PCI();

            return Json(PCI.dedcal( area,  QT,  dts,  Dis_k,  sev,  current), JsonRequestBehavior.AllowGet);
        }

       


        public JsonResult cdvcal(double sumobj, int dctcnt,double IRI ,double Skid ,double Fwd)
        {

            var PCI = new PavePixel.PCI.PCI();
            return Json(PCI.cdvcal(sumobj, dctcnt, IRI, Skid, Fwd), JsonRequestBehavior.AllowGet);
        }


    







        public class Devals
        {
            public string Density { get; set; }
            public string current { get; set; }
            public string Deduct_Value  { get; set; }
            public string TotalDeductValue { get; set; }
            public string ComputedDeductValue { get; set; }
            public string SamplePCI  { get; set; }
            public string Rating { get; set; }

        }
        public class SectionsDetails
        {


        public string SECTION_NO     { get; set; }
        public string SURVEY_DATE { get; set; }
        public string CONSTRUCTION_DATE { get; set; }
        public string ASPHALTIC_LAYER_THICKNESS { get; set; }
        public string BASE_LAYER_THICKNESS { get; set; }
        public string SUB_BASE { get; set; }
        public string SUB_GRADE { get; set; }
        public string AVERAGE_DAILY_TRAFFIC { get; set; }
        public string TRUCKS_PERCENTAGE { get; set; }
        public string TOTAL_SAMPLES { get; set; }
        public string SAMPLES_SURVEYED { get; set; }
        public string IS_USED_BY_VIP { get; set; }
        public string IS_PASSING_THRO_CBD { get; set; }
        public string IS_NEAR_OFF_PUBLIC_BUILD { get; set; }
        public string HAS_ALTERNATE_ROAD { get; set; }
        public string WATER_PONDING { get; set; }
        public string UTILITY_CUTS { get; set; }
        public string SECTION_LENGTH { get; set; }
        public string SECTION_WIDTH { get; set; }
        public string SECTION_AREA { get; set; }
        public string CONTRACTOR_NO { get; set; }
        public string ROAD_CLASS { get; set; }
        public string distortion { get; set; }
        public string call940 { get; set; }
        public string digs { get; set; }
        public string Locatian { get; set; }
        public string Infrastructure { get; set; }
        public string SubClass { get; set; }
        public string RoadCategory { get; set; }

            
        }


        public class Special_Treatmen
        {
            public string SECTION_NO { get; set; }
            public string SPECIAL_TREATMENT_NO { get; set; }
            public string SPECIAL_TREATMENT_QUANTITY { get; set; }
            public string SPECIAL_TREATMENT_DESCRIPTION { get; set; }
       

        }



        public class Distress_Samples
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
            public string SurveyDate { get; set; }
            public string ReadingSKID { get; set; }
            public string ReadingIRI { get; set; }
            public string ReadingFWD { get; set; }
            public string GroupSurvey { get; set; }


            

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










        public class EQUIPMENT
        {
            public string SECTION_NO { get; set; }
            public string DEFLECTION_EQUIPMENT { get; set; }
            public string APPLIED_LOAD { get; set; }
            public string DEFLECTION_MEASURE_0 { get; set; }
            public string DEFLECTION_MEASURE_1 { get; set; }
            public string DEFLECTION_MEASURE_2 { get; set; }
            public string DEFLECTION_MEASURE_3 { get; set; }
            public string DEFLECTION_MEASURE_4 { get; set; }
            public string DEFLECTION_MEASURE_5 { get; set; }
            public string DEFLECTION_MEASURE_6 { get; set; }
            public string ROUGHNESS_EQUIPMENT { get; set; }
            public string AVERAGE_ROUGHNESS { get; set; }
            public string SKID_EQUIPMENT { get; set; }
            public string AVERAGE_SKID_WET { get; set; }
            public string AVERAGE_SKID_DRY { get; set; }
        }


    }
}
