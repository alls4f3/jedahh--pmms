
namespace PMMS.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.WorkFlowUserTypeRow;

    public class WorkFlowUserTypeRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            if (request.EntityId.ToString() == "2" || request.EntityId.ToString() == "3" || request.EntityId.ToString() == "5" || request.EntityId.ToString() == "7" || request.EntityId.ToString() == "16" || request.EntityId.ToString() == "18")
            {
                throw  new ValidationError("you cannot update this user type .it's used by the system");
            }


            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {

            if (request.EntityId.ToString() == "2" || request.EntityId.ToString() == "3" || request.EntityId.ToString() == "5" || request.EntityId.ToString() == "7" || request.EntityId.ToString() == "16" || request.EntityId.ToString() == "18")
            {
                throw new ValidationError("you cannot delete this user type.it's used by the system");
            }
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

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}