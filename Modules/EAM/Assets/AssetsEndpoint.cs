
namespace PMMS.EAM.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.AssetsRepository;
    using MyRow = Entities.AssetsRow;

    [RoutePrefix("Services/EAM/Assets"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AssetsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.AssetsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Assests" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }



        public JsonResult AddSample(string ItemId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                string sample = "";




                var GetSampleNo = connection.Query<PMMS.Northwind.ItemSelect>("select top 1 [SurvayNumber] + 1  as Text from [dbo].[AssetsSurvey] where AssetsId='" + ItemId + "' order by [SurvayNumber] desc");

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

                queryParameters.Add("@SECTION_NO", ItemId);
                queryParameters.Add("@SAMPLE_NO", sample);

                queryParameters.Add("@CBY", userId);
                queryParameters.Add("@CDATE", DateTime.Now);




                connection.Execute("insert into [dbo].[AssetsSurvey]( [AssetsId], [SurvayNumber],CBY,CDATE ) values ( @SECTION_NO, @SAMPLE_NO,@CBY,@CDATE)", queryParameters);


                return Json(sample, JsonRequestBehavior.AllowGet);
            }
         
         


        }
        public JsonResult GetDistress(string ItemId)
        {


            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {


                var GetAll = connection.Query<Distress_Samples>("Select [Itemsuid] as SAMPLE_id,[SurvayNumber] as SAMPLE_NO from [AssetsSurvey]  where  [AssetsId] = '" + ItemId + "'");


                return Json(GetAll.ToList(), JsonRequestBehavior.AllowGet);


            }
        }
        public JsonResult DeleteSample(string ItemId)
        {

            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            {
                var queryParameters = new DynamicParameters();
                queryParameters.Add("@SECTION_NO", ItemId);
                //queryParameters.Add("@SAMPLE_NO", ItemId2);


                connection.Execute("delete from [AssetsSurvey]  where [Itemsuid] = @SECTION_NO", queryParameters);


                return Json("done", JsonRequestBehavior.AllowGet);

            }




        }


        public class Distress_Samples
        {

            
            public string SAMPLE_NO { get; set; }
            public string SAMPLE_id { get; set; }

        }
    }
}
