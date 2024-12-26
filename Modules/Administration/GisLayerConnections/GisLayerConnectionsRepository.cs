
namespace PMMS.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.GisLayerConnectionsRow;

    public class GisLayerConnectionsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            var data= new MySaveHandler().Process(uow, request, SaveRequestType.Create);
           

            return data;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var data = new MySaveHandler().Process(uow, request, SaveRequestType.Update);

           

            return data ;
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void AfterSave()
            {
                base.AfterSave();
                TwoLevelCache.ExpireGroupItems(Administration.Entities.UserPermissionRow.Fields.GenerationKey); TwoLevelCache.Remove("NavigationHelper:NavigationItems");
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {

            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();
                TwoLevelCache.ExpireGroupItems(Administration.Entities.UserPermissionRow.Fields.GenerationKey); TwoLevelCache.Remove("NavigationHelper:NavigationItems");
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }



    }
}