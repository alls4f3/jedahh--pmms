
namespace PMMS.Default.Endpoints
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRepository = Repositories.ImportWizerdByEqFilesRepository;
    using MyRow = Entities.ImportWizerdByEqFilesRow;

    [RoutePrefix("Services/Default/ImportWizerdByEqFiles"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ImportWizerdByEqFilesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            List<fileupload> fileupload = JsonConvert.DeserializeObject<List<fileupload>>(request.Entity.ImportUrl);

            if (fileupload.Count == 0)
            {
                throw new ValidationError("Please upload you files");
            }
            foreach (var item in fileupload)
            {

               
                FileInfo fi = new FileInfo(item.OriginalName);

                if (fi.Extension == ".xlsx" || fi.Extension == ".XLSX" || fi.Extension == ".xls" || fi.Extension == ".XLS")
                {

                }
                else
                {
                    throw new ValidationError("Excel xlsx files are allowed ");
                    break;
                }
            }
            string IDREF = System.Guid.NewGuid().ToString();
            request.Entity.FileName = "Import Data : - " + System.DateTime.Now.ToString("yyyy-MM.dd- HH-mm");
            request.Entity.ImportDate = System.DateTime.Now;
            request.Entity.ImportBy = Authorization.UserId.ToString();
            request.Entity.ImportRef = IDREF;
         

            request.Entity.Status = "pending";
            request.Entity.StatusMessage = "Analysis Services will auto detect the the files";

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            throw new ValidationError("Files can not be updated ");
            //return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            //using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
            //{

            //    var AllItems = connection.Query<MyRow>("select * from ImportWizerdByEqFiles where importid='" + request.EntityId.ToString() + "'").ToList();
            //    connection.Execute("delete from DISTRESS_SAMPLES where importref='" + AllItems[0].ImportRef.ToString() + "'");

            //}
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

        public class fileupload
        {
            public string Filename { get; set; }
            public string OriginalName { get; set; }

        }
    }
}
