
namespace PMMS.Northwind.Lookups
{
   
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    //[LookupScript]
    //public class CustomerLookup : RowLookupScript<CustomerRow>
    //{
    //    public CustomerLookup()
    //    {
    //        IdField = "ID";
    //        TextField = "CustomerDisplay";
    //    }

    //    protected override void PrepareQuery(SqlQuery query)
    //    {
    //        var fld = Entities.CustomerRow.Fields;
    //        query.Select(fld.CustomerDisplay)
    //         .Select(fld.ID);



    //    }

    //}


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class UserLookup : RowLookupScript<PMMS.Administration.Entities.UserRow>
    {
        public UserLookup()
        {
            IdField = PMMS.Administration.Entities.UserRow.Fields.UserId.PropertyName;
            TextField = PMMS.Administration.Entities.UserRow.Fields.DisplayName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Administration.Entities.UserRow.Fields;
            query.Select(fld.UserId)
             .Select(fld.DisplayName)
             .Where(fld.Source=="site");



        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class CityLook : RowLookupScript<PMMS.Default.Entities.CityRow>
    {
        public CityLook()
        {
            IdField = PMMS.Default.Entities.CityRow.Fields.No.PropertyName;
            TextField = PMMS.Default.Entities.CityRow.Fields.Name.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.CityRow.Fields;
            query.Select(fld.No)
             .Select(fld.Name)
            .Where(fld.No != "99");



        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class CityLook2 : RowLookupScript<PMMS.Default.Entities.CityRow>
    {
        public CityLook2()
        {
            IdField = PMMS.Default.Entities.CityRow.Fields.CITY_ID.PropertyName;
            TextField = PMMS.Default.Entities.CityRow.Fields.Name.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.CityRow.Fields;
            query.Select(fld.CITY_ID)
             .Select(fld.Name)
            .Where(fld.CITY_ID != "99");



        }
    }






    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class ZoneLook : RowLookupScript<PMMS.Default.Entities.ZoneRow>
    {
        public ZoneLook()
        {
            IdField = PMMS.Default.Entities.ZoneRow.Fields.ZoneNo.PropertyName;
            TextField = PMMS.Default.Entities.ZoneRow.Fields.ZoneName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.ZoneRow.Fields;
            query.Select(fld.ZoneNo)
             .Select(fld.ZoneName)
             .Select(fld.CityNo)
             .Select(fld.ZoneId)
             ;




        }
    }



    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class AreaLook : RowLookupScript<PMMS.Default.Entities.AreasRow>
    {
        public AreaLook()
        {
            IdField = PMMS.Default.Entities.AreasRow.Fields.AreaNo.PropertyName;
            TextField = PMMS.Default.Entities.AreasRow.Fields.AreaName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.AreasRow.Fields;
            query.Select(fld.AreaName)
             .Select(fld.AreaNo)
             .Select(fld.ZoneId)
             ;




        }
    }

    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class ProjectLook : RowLookupScript<PMMS.Default.Entities.ProjectsRow>
    {
        public ProjectLook()
        {
            IdField = PMMS.Default.Entities.ProjectsRow.Fields.ProjectId.PropertyName;
            TextField = PMMS.Default.Entities.ProjectsRow.Fields.contract_desc.PropertyName;
         //   Expiration= TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.ProjectsRow.Fields;
            query.Select(fld.ProjectId)
             .Select(fld.contract_desc);
            




        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class WorkorderItemStatus : RowLookupScript<PMMS.Default.Entities.WorkorderItemStatusRow>
    {
        public WorkorderItemStatus()
        {
            IdField = PMMS.Default.Entities.WorkorderItemStatusRow.Fields.ItemId.PropertyName;
            TextField = PMMS.Default.Entities.WorkorderItemStatusRow.Fields.ItemName.PropertyName;
            //   Expiration= TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.WorkorderItemStatusRow.Fields;
            query.Select(fld.ItemId)
             .Select(fld.ItemName);





        }
    }




    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class EmrgLook : RowLookupScript<PMMS.Default.Entities.WorkOrderEmergencyRow>
    {
        public EmrgLook()
        {
            IdField = PMMS.Default.Entities.WorkOrderEmergencyRow.Fields.EId.PropertyName;
            TextField = PMMS.Default.Entities.WorkOrderEmergencyRow.Fields.Ename.PropertyName;
            //   Expiration= TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.WorkOrderEmergencyRow.Fields;
            query.Select(fld.EId)
             .Select(fld.Ename);





        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class WorkorderBoqRowLook : RowLookupScript<PMMS.Default.Entities.WorkorderBoqRow>
    {
        public WorkorderBoqRowLook()
        {
            IdField = PMMS.Default.Entities.WorkorderBoqRow.Fields.ItmDesc.PropertyName;
            TextField = PMMS.Default.Entities.WorkorderBoqRow.Fields.ItmDesc.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.WorkorderBoqRow.Fields;
            query.Select(fld.ContractId)
             .Select(fld.ItmDesc)
             .Select(fld.ItmCode)
             .Select(fld.Qty);





        }
    }



    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class ImportTypeLook : RowLookupScript<PMMS.Default.Entities.ImportTypeRow>
    {
        public ImportTypeLook()
        {
            IdField = PMMS.Default.Entities.ImportTypeRow.Fields.TypeId.PropertyName;
            TextField = PMMS.Default.Entities.ImportTypeRow.Fields.TypeName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.ImportTypeRow.Fields;
            query.Select(fld.TypeId)
             .Select(fld.TypeName)
             .Where("GroupName='SRV'");



        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class ImportTypeLookIMP : RowLookupScript<PMMS.Default.Entities.ImportTypeRow>
    {
        public ImportTypeLookIMP()
        {
            IdField = PMMS.Default.Entities.ImportTypeRow.Fields.TypeName.PropertyName;
            TextField = PMMS.Default.Entities.ImportTypeRow.Fields.TypeName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.ImportTypeRow.Fields;
            query.Select(fld.TypeId)
             .Select(fld.TypeName)
             .Where("GroupName='IMP'");



        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class ContractorLook : RowLookupScript<PMMS.Default.Entities.ContractorsRow>
    {
        public ContractorLook()
        {
            IdField = PMMS.Default.Entities.ContractorsRow.Fields.ContractorNo.PropertyName;
            TextField = PMMS.Default.Entities.ContractorsRow.Fields.CompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.ContractorsRow.Fields;
            query.Select(fld.ContractorNo)
             .Select(fld.CompanyName);




        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class FixLook : RowLookupScript<PMMS.Default.Entities.FixListRow>
    {
        public FixLook()
        {
            IdField = PMMS.Default.Entities.FixListRow.Fields.ItemName.PropertyName;
            TextField = PMMS.Default.Entities.FixListRow.Fields.ItemName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.FixListRow.Fields;
            query.Select(fld.ItemName)
             .Select(fld.ItemName);




        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class BugLook : RowLookupScript<PMMS.Default.Entities.BugsListRow>
    {
        public BugLook()
        {
            IdField = PMMS.Default.Entities.BugsListRow.Fields.ItemName.PropertyName;
            TextField = PMMS.Default.Entities.BugsListRow.Fields.ItemName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Default.Entities.BugsListRow.Fields;
            query.Select(fld.ItemName)
             .Select(fld.ItemName);




        }
    }


    //[LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    //public class CategorysLook : RowLookupScript<PMMS.Northwind.Entities.CategoryRow>
    //{
    //    public CategorysLook()
    //    {
    //        IdField = PMMS.Northwind.Entities.CategoryRow.Fields.CategoryID.PropertyName;
    //        TextField = PMMS.Northwind.Entities.CategoryRow.Fields.CategoryName.PropertyName;
    //    }

    //    protected override void PrepareQuery(SqlQuery query)
    //    {
    //        var fld = PMMS.Northwind.Entities.CategoryRow.Fields;
    //        query.Select(fld.CategoryID)
    //         .Select(fld.CategoryName)
    //         .OrderBy(fld.CategoryID);



    //    }
    //}


    ////[LookupScript(Permission = PMMS.Northwind.PermissionKeys.ExtUser)]
    //[LookupScript(Permission =  PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    //public class ProductLook : RowLookupScript<PMMS.Northwind.Entities.ProductRow>
    //{
    //    public ProductLook()
    //    {
    //        IdField = PMMS.Northwind.Entities.ProductRow.Fields.ProductID.PropertyName;
    //        TextField = PMMS.Northwind.Entities.ProductRow.Fields.ProductName.PropertyName;
    //    }

    //    protected override void PrepareQuery(SqlQuery query)
    //    {
    //        var fld = PMMS.Northwind.Entities.ProductRow.Fields;
    //        query.Select(fld.ProductID)
    //         .Select(fld.ProductName)
    //         .OrderBy(fld.ProductID);



    //    }
    //}


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class UserLook : RowLookupScript<PMMS.Administration.Entities.UserRow>
    {
        public UserLook()
        {
            IdField = PMMS.Administration.Entities.UserRow.Fields.UserId.PropertyName;
            TextField = PMMS.Administration.Entities.UserRow.Fields.DisplayName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Administration.Entities.UserRow.Fields;
            query.Select(fld.UserId)
             .Select(fld.DisplayName)
             .OrderBy(fld.UserId);



        }
    }


    [LookupScript(Permission = PMMS.Northwind.PermissionKeys.Apps.RelatedData)]
    public class GroupsLook : RowLookupScript<PMMS.Administration.Entities.RoleRow>
    {
        public GroupsLook()
        {
            IdField = PMMS.Administration.Entities.RoleRow.Fields.RoleId.PropertyName;
            TextField = PMMS.Administration.Entities.RoleRow.Fields.RoleName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PMMS.Administration.Entities.RoleRow.Fields;
            query.Select(fld.RoleId)
             .Select(fld.RoleName)
             .OrderBy(fld.RoleId);



        }
    }


}