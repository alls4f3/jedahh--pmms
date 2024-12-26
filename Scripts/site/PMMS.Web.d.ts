/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace PMMS.Administration {
    class AuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AuditLogForm {
        UserId: Serenity.IntegerEditor;
        UserName: Serenity.StringEditor;
        Action: Serenity.StringEditor;
        ChangedOn: Serenity.DateEditor;
        TableName: Serenity.StringEditor;
        RowId: Serenity.IntegerEditor;
        Module: Serenity.StringEditor;
        Page: Serenity.StringEditor;
        Changes: Serenity.StringEditor;
    }
}
declare namespace PMMS.Administration {
    interface AuditLogRow {
        Id?: number;
        UserId?: number;
        UserName?: string;
        Action?: string;
        ChangedOn?: string;
        TableName?: string;
        RowId?: number;
        Module?: string;
        Page?: string;
        Changes?: string;
    }
    namespace AuditLogRow {
        const idProperty = "Id";
        const nameProperty = "UserName";
        const localTextPrefix = "Administration.AuditLog";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const Id: any;
            const UserId: any;
            const UserName: any;
            const Action: any;
            const ChangedOn: any;
            const TableName: any;
            const RowId: any;
            const Module: any;
            const Page: any;
            const Changes: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace AuditLogService {
        const baseUrl = "Administration/AuditLog";
        function Create(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Administration {
    class CustomReportsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomReportsForm {
        ReportName: Serenity.StringEditor;
        ReportPath: Serenity.StringEditor;
    }
}
declare namespace PMMS.Administration {
    interface CustomReportsRow {
        ReportId?: number;
        ReportName?: string;
        ReportPath?: string;
    }
    namespace CustomReportsRow {
        const idProperty = "ReportId";
        const nameProperty = "ReportName";
        const localTextPrefix = "Administration.CustomReports";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ReportId: any;
            const ReportName: any;
            const ReportPath: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace CustomReportsService {
        const baseUrl = "Administration/CustomReports";
        function Create(request: Serenity.SaveRequest<CustomReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomReportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomReportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Administration {
    class GisLayerConnectionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GisLayerConnectionsForm {
        GisPageName: Serenity.StringEditor;
        GisPageContent: Serenity.StringEditor;
        GisPageSorting: Serenity.IntegerEditor;
        GisurlName: Serenity.StringEditor;
        IsPublish: Serenity.BooleanEditor;
    }
}
declare namespace PMMS.Administration {
    interface GisLayerConnectionsRow {
        GisPageName?: string;
        GisPageContent?: string;
        GisPageSorting?: number;
        GisPageId?: number;
        GisurlName?: string;
        IsPublish?: boolean;
    }
    namespace GisLayerConnectionsRow {
        const idProperty = "GisPageId";
        const nameProperty = "GisPageName";
        const localTextPrefix = "Administration.GisLayerConnections";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const GisPageName: any;
            const GisPageContent: any;
            const GisPageSorting: any;
            const GisPageId: any;
            const GisurlName: any;
            const IsPublish: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace GisLayerConnectionsService {
        const baseUrl = "Administration/GisLayerConnections";
        function Create(request: Serenity.SaveRequest<GisLayerConnectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GisLayerConnectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GisLayerConnectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GisLayerConnectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Administration {
}
declare namespace PMMS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace PMMS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace PMMS.Administration {
}
declare namespace PMMS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PMMS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace PMMS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace PMMS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace PMMS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace PMMS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace PMMS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace PMMS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace PMMS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace PMMS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace PMMS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace PMMS.Administration {
}
declare namespace PMMS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Administration {
    class UserGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserGroupsForm {
        UserGroupName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Administration {
    interface UserGroupsRow {
        UserGroupId?: number;
        UserGroupName?: string;
    }
    namespace UserGroupsRow {
        const idProperty = "UserGroupId";
        const nameProperty = "UserGroupName";
        const localTextPrefix = "Administration.UserGroups";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserGroupId: any;
            const UserGroupName: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace UserGroupsService {
        const baseUrl = "Administration/UserGroups";
        function Create(request: Serenity.SaveRequest<UserGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PMMS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace PMMS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace PMMS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace PMMS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace PMMS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace PMMS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace PMMS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace PMMS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace PMMS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace PMMS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace PMMS.Administration {
    class WorkFlowStagesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkFlowStagesForm {
        StageName: Serenity.StringEditor;
        OnApproveGo: Serenity.IntegerEditor;
        OnRejectGo: Serenity.IntegerEditor;
        UserType: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Administration {
    interface WorkFlowStagesRow {
        StageId?: number;
        StageName?: string;
        OnApproveGo?: number;
        OnRejectGo?: number;
        UserType?: number;
    }
    namespace WorkFlowStagesRow {
        const idProperty = "StageId";
        const nameProperty = "StageName";
        const localTextPrefix = "Administration.WorkFlowStages";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const StageId: any;
            const StageName: any;
            const OnApproveGo: any;
            const OnRejectGo: any;
            const UserType: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace WorkFlowStagesService {
        const baseUrl = "Administration/WorkFlowStages";
        function Create(request: Serenity.SaveRequest<WorkFlowStagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkFlowStagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkFlowStagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkFlowStagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Administration {
    class WorkFlowUserTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkFlowUserTypeForm {
        UserTypeName: Serenity.StringEditor;
        AssignType: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Administration {
    interface WorkFlowUserTypeRow {
        UserTypeId?: number;
        UserTypeName?: string;
        AssignType?: number;
    }
    namespace WorkFlowUserTypeRow {
        const idProperty = "UserTypeId";
        const nameProperty = "UserTypeName";
        const localTextPrefix = "Administration.WorkFlowUserType";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserTypeId: any;
            const UserTypeName: any;
            const AssignType: any;
        }
    }
}
declare namespace PMMS.Administration {
    namespace WorkFlowUserTypeService {
        const baseUrl = "Administration/WorkFlowUserType";
        function Create(request: Serenity.SaveRequest<WorkFlowUserTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkFlowUserTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkFlowUserTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkFlowUserTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomDashboardsForm {
        PageName: Serenity.StringEditor;
        PagePath: Serenity.StringEditor;
        PageUsers: Serenity.StringEditor;
        PageGroups: Serenity.StringEditor;
    }
}
declare namespace PMMS.BI {
    interface CustomDashboardsRow {
        PageId?: number;
        PageName?: string;
        PagePath?: string;
        PageUsers?: string;
        PageGroups?: string;
    }
    namespace CustomDashboardsRow {
        const idProperty = "PageId";
        const nameProperty = "PageName";
        const localTextPrefix = "BI.CustomDashboards";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const PageId: any;
            const PageName: any;
            const PagePath: any;
            const PageUsers: any;
            const PageGroups: any;
        }
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsScriptsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomDashboardsScriptsForm {
        PageId: Serenity.IntegerEditor;
        ScriptName: Serenity.StringEditor;
        ScriptApi: Serenity.StringEditor;
    }
}
declare namespace PMMS.BI {
    interface CustomDashboardsScriptsRow {
        ScriptId?: number;
        PageId?: number;
        ScriptName?: string;
        ScriptApi?: string;
    }
    namespace CustomDashboardsScriptsRow {
        const idProperty = "ScriptId";
        const nameProperty = "ScriptName";
        const localTextPrefix = "BI.CustomDashboardsScripts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ScriptId: any;
            const PageId: any;
            const ScriptName: any;
            const ScriptApi: any;
        }
    }
}
declare namespace PMMS.BI {
    namespace CustomDashboardsScriptsService {
        const baseUrl = "BI/CustomDashboardsScripts";
        function Create(request: Serenity.SaveRequest<CustomDashboardsScriptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomDashboardsScriptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomDashboardsScriptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomDashboardsScriptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.BI {
    namespace CustomDashboardsService {
        const baseUrl = "BI/CustomDashboards";
        function Create(request: Serenity.SaveRequest<CustomDashboardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomDashboardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomDashboardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomDashboardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace PMMS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace PMMS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace PMMS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace PMMS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace PMMS.Default {
    class AreasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AreasForm {
        AreaName: Serenity.StringEditor;
        ZoneNo: Serenity.DecimalEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    interface AreasRow {
        AreaName?: string;
        ZoneNo?: number;
        AreaNo?: number;
        CityNo?: number;
        ItemId?: number;
    }
    namespace AreasRow {
        const idProperty = "ItemId";
        const nameProperty = "AreaName";
        const localTextPrefix = "Default.Areas";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const AreaName: any;
            const ZoneNo: any;
            const AreaNo: any;
            const CityNo: any;
            const ItemId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace AreasService {
        const baseUrl = "Default/Areas";
        function Create(request: Serenity.SaveRequest<AreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AreasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AreasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class AssetAttrForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetAttrForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface AssetAttrRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetAttrRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.AssetAttr";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace AssetAttrService {
        const baseUrl = "Default/AssetAttr";
        function Create(request: Serenity.SaveRequest<AssetAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class AssetDistressForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetDistressForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface AssetDistressRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetDistressRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.AssetDistress";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace AssetDistressService {
        const baseUrl = "Default/AssetDistress";
        function Create(request: Serenity.SaveRequest<AssetDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class AssetSubCategoryLevelForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetSubCategoryLevelForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Default {
    interface AssetSubCategoryLevelRow {
        ItemId?: number;
        ItemName?: string;
        ParentId?: number;
    }
    namespace AssetSubCategoryLevelRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.AssetSubCategoryLevel";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ParentId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace AssetSubCategoryLevelService {
        const baseUrl = "Default/AssetSubCategoryLevel";
        function Create(request: Serenity.SaveRequest<AssetSubCategoryLevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetSubCategoryLevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetSubCategoryLevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetSubCategoryLevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class AssetTagsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetTagsForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface AssetTagsRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetTagsRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.AssetTags";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace AssetTagsService {
        const baseUrl = "Default/AssetTags";
        function Create(request: Serenity.SaveRequest<AssetTagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetTagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetTagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetTagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class BugsListForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BugsListForm {
    }
}
declare namespace PMMS.Default {
    interface BugsListRow {
        ItemName?: string;
    }
    namespace BugsListRow {
        const idProperty = "ItemName";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.BugsList";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace BugsListService {
        const baseUrl = "Default/BugsList";
        function Create(request: Serenity.SaveRequest<BugsListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BugsListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BugsListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BugsListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class CityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CityForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface CityRow {
        No?: number;
        Name?: string;
    }
    namespace CityRow {
        const idProperty = "No";
        const nameProperty = "Name";
        const localTextPrefix = "Default.City";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const No: any;
            const Name: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace CityService {
        const baseUrl = "Default/City";
        function Create(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ContractorsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContractorsForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        StreetAddress: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        FaxNumber: Serenity.StringEditor;
        CreationDate: Serenity.DateEditor;
        Country: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ContractorsRow {
        ContractorNo?: number;
        CompanyName?: string;
        ContactName?: string;
        StreetAddress?: string;
        PostalCode?: string;
        City?: string;
        Email?: string;
        MobileNumber?: string;
        PhoneNumber?: string;
        FaxNumber?: string;
        CreationDate?: string;
        Country?: string;
    }
    namespace ContractorsRow {
        const idProperty = "ContractorNo";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Default.Contractors";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ContractorNo: any;
            const CompanyName: any;
            const ContactName: any;
            const StreetAddress: any;
            const PostalCode: any;
            const City: any;
            const Email: any;
            const MobileNumber: any;
            const PhoneNumber: any;
            const FaxNumber: any;
            const CreationDate: any;
            const Country: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ContractorsService {
        const baseUrl = "Default/Contractors";
        function Create(request: Serenity.SaveRequest<ContractorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContractorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContractorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContractorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class DepartmentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DepartmentForm {
        DepartmentName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface DepartmentRow {
        DepartmentId?: number;
        DepartmentName?: string;
    }
    namespace DepartmentRow {
        const idProperty = "DepartmentId";
        const nameProperty = "DepartmentName";
        const localTextPrefix = "Default.Department";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const DepartmentId: any;
            const DepartmentName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace DepartmentService {
        const baseUrl = "Default/Department";
        function Create(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class DirectionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DirectionForm {
        DirectionNo: Serenity.StringEditor;
        DirectionShortName: Serenity.StringEditor;
        DirectionDescription: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface DirectionRow {
        DirectionNo?: string;
        DirectionShortName?: string;
        DirectionDescription?: string;
        ItemId?: number;
    }
    namespace DirectionRow {
        const idProperty = "ItemId";
        const nameProperty = "DirectionNo";
        const localTextPrefix = "Default.Direction";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const DirectionNo: any;
            const DirectionShortName: any;
            const DirectionDescription: any;
            const ItemId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace DirectionService {
        const baseUrl = "Default/Direction";
        function Create(request: Serenity.SaveRequest<DirectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DirectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DirectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DirectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class FeaturesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FeaturesForm {
        FeatureNo: Serenity.StringEditor;
        FeatureShortName: Serenity.StringEditor;
        FeatureDescription: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface FeaturesRow {
        FeatureNo?: string;
        FeatureShortName?: string;
        FeatureDescription?: string;
        ItemId?: number;
    }
    namespace FeaturesRow {
        const idProperty = "ItemId";
        const nameProperty = "FeatureNo";
        const localTextPrefix = "Default.Features";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const FeatureNo: any;
            const FeatureShortName: any;
            const FeatureDescription: any;
            const ItemId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace FeaturesService {
        const baseUrl = "Default/Features";
        function Create(request: Serenity.SaveRequest<FeaturesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeaturesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeaturesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeaturesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class FixListForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FixListForm {
    }
}
declare namespace PMMS.Default {
    interface FixListRow {
        ItemName?: string;
    }
    namespace FixListRow {
        const idProperty = "ItemName";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.FixList";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace FixListService {
        const baseUrl = "Default/FixList";
        function Create(request: Serenity.SaveRequest<FixListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FixListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FixListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FixListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ImportTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ImportTypeForm {
        TypeName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ImportTypeRow {
        TypeId?: number;
        TypeName?: string;
    }
    namespace ImportTypeRow {
        const idProperty = "TypeId";
        const nameProperty = "TypeName";
        const localTextPrefix = "Default.ImportType";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const TypeId: any;
            const TypeName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ImportTypeService {
        const baseUrl = "Default/ImportType";
        function Create(request: Serenity.SaveRequest<ImportTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ImportWizerdByEqFilesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ImportWizerdByEqFilesForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
        SurvayDate: Serenity.DateEditor;
        GroupSurvey: Serenity.IntegerEditor;
        ImportUrl: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ImportWizerdByEqFilesRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        Status?: string;
        StatusMessage?: string;
        SurvayDate?: string;
        GroupSurvey?: number;
        ImportUrl?: string;
    }
    namespace ImportWizerdByEqFilesRow {
        const idProperty = "ImportId";
        const nameProperty = "FileName";
        const localTextPrefix = "Default.ImportWizerdByEqFiles";
        const deletePermission = "Apps:Data:ImportDataEntry";
        const insertPermission = "Apps:Data:ImportDataEntry";
        const readPermission = "Apps:Data:ImportDataEntry";
        const updatePermission = "Apps:Data:ImportDataEntry";
        namespace Fields {
            const FileName: any;
            const ImportType: any;
            const ImportDate: any;
            const ImportRef: any;
            const ImportBy: any;
            const ImportId: any;
            const Status: any;
            const StatusMessage: any;
            const SurvayDate: any;
            const GroupSurvey: any;
            const ImportUrl: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ImportWizerdByEqFilesService {
        const baseUrl = "Default/ImportWizerdByEqFiles";
        function Create(request: Serenity.SaveRequest<ImportWizerdByEqFilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportWizerdByEqFilesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportWizerdByEqFilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportWizerdByEqFilesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ImportWizerdDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ImportWizerdDataForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ImportWizerdDataRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        ContentUrl?: string;
    }
    namespace ImportWizerdDataRow {
        const idProperty = "ImportId";
        const nameProperty = "FileName";
        const localTextPrefix = "Default.ImportWizerdData";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const FileName: any;
            const ImportType: any;
            const ImportDate: any;
            const ImportRef: any;
            const ImportBy: any;
            const ImportId: any;
            const ContentUrl: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ImportWizerdDataService {
        const baseUrl = "Default/ImportWizerdData";
        function Create(request: Serenity.SaveRequest<ImportWizerdDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportWizerdDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportWizerdDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportWizerdDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ImportWizerdForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ImportWizerdForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.StringEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdLocalForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ImportWizerdLocalForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
        ContentUrlFwd: Serenity.StringEditor;
        ContentUrlIri: Serenity.StringEditor;
        ContentUrlSkid: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
        SurvayDate: Serenity.DateEditor;
        DisplayStreet: Serenity.StringEditor;
        DisplayLane: Serenity.StringEditor;
        DisplayArea: Serenity.StringEditor;
        DisplayCity: Serenity.StringEditor;
        DisplaySection: Serenity.StringEditor;
        DisplayStreetName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ImportWizerdLocalRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        ContentUrl?: string;
        ContentUrlFwd?: string;
        ContentUrlIri?: string;
        ContentUrlSkid?: string;
        Status?: string;
        StatusMessage?: string;
        SurvayDate?: string;
        DisplayStreet?: string;
        DisplayLane?: string;
        DisplayArea?: string;
        DisplayCity?: string;
        DisplaySection?: string;
        DisplayStreetName?: string;
    }
    namespace ImportWizerdLocalRow {
        const idProperty = "ImportId";
        const nameProperty = "FileName";
        const localTextPrefix = "Default.ImportWizerdLocal";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const FileName: any;
            const ImportType: any;
            const ImportDate: any;
            const ImportRef: any;
            const ImportBy: any;
            const ImportId: any;
            const ContentUrl: any;
            const ContentUrlFwd: any;
            const ContentUrlIri: any;
            const ContentUrlSkid: any;
            const Status: any;
            const StatusMessage: any;
            const SurvayDate: any;
            const DisplayStreet: any;
            const DisplayLane: any;
            const DisplayArea: any;
            const DisplayCity: any;
            const DisplaySection: any;
            const DisplayStreetName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ImportWizerdLocalService {
        const baseUrl = "Default/ImportWizerdLocal";
        function Create(request: Serenity.SaveRequest<ImportWizerdLocalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportWizerdLocalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportWizerdLocalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportWizerdLocalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    interface ImportWizerdRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        ContentUrl?: string;
    }
    namespace ImportWizerdRow {
        const idProperty = "ImportId";
        const nameProperty = "FileName";
        const localTextPrefix = "Default.ImportWizerd";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const FileName: any;
            const ImportType: any;
            const ImportDate: any;
            const ImportRef: any;
            const ImportBy: any;
            const ImportId: any;
            const ContentUrl: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ImportWizerdService {
        const baseUrl = "Default/ImportWizerd";
        function Create(request: Serenity.SaveRequest<ImportWizerdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportWizerdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteAndRollBack(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportWizerdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportWizerdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const DeleteAndRollBack: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ProjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProjectsForm {
        ProjectName: Serenity.StringEditor;
        ProjectLocation: Serenity.StringEditor;
        ContractorName: Serenity.StringEditor;
        Maplocation: Serenity.StringEditor;
        ProjectAttachment: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface ProjectsRow {
        ProjectId?: number;
        ProjectName?: string;
        ProjectLocation?: string;
        ContractorName?: string;
        Maplocation?: string;
        ProjectAttachment?: string;
    }
    namespace ProjectsRow {
        const idProperty = "ProjectId";
        const nameProperty = "ProjectName";
        const localTextPrefix = "Default.Projects";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ProjectId: any;
            const ProjectName: any;
            const ProjectLocation: any;
            const ContractorName: any;
            const Maplocation: any;
            const ProjectAttachment: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ProjectsService {
        const baseUrl = "Default/Projects";
        function Create(request: Serenity.SaveRequest<ProjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class RoadsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoadsForm {
        RoadNo: Serenity.StringEditor;
        RoadName: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
    }
}
declare namespace PMMS.Default {
    interface RoadsRow {
        RoadNo?: string;
        RoadName?: string;
        AreaNo?: string;
        RoadType?: number;
        CityNo?: string;
        ZoneNo?: string;
        IsActive?: boolean;
    }
    namespace RoadsRow {
        const idProperty = "ItemId";
        const nameProperty = "RoadName";
        const localTextPrefix = "Default.Roads";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const RoadNo: any;
            const RoadName: any;
            const AreaNo: any;
            const RoadType: any;
            const CityNo: any;
            const ZoneNo: any;
            const ItemId: any;
            const IsActive: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace RoadsService {
        const baseUrl = "Default/Roads";
        function Create(request: Serenity.SaveRequest<RoadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class SectionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SectionForm {
        RoadNo: Serenity.StringEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.StringEditor;
        ZoneNo: Serenity.StringEditor;
        SectionNo: Serenity.StringEditor;
        SecName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface SectionRow {
        RoadNo?: string;
        AreaNo?: number;
        CityNo?: string;
        ZoneNo?: string;
        SectionNo?: string;
        ItemId?: number;
        SecName?: string;
    }
    namespace SectionRow {
        const idProperty = "ItemId";
        const nameProperty = "RoadNo";
        const localTextPrefix = "Default.Section";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const RoadNo: any;
            const AreaNo: any;
            const CityNo: any;
            const ZoneNo: any;
            const SectionNo: any;
            const ItemId: any;
            const SecName: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace SectionService {
        const baseUrl = "Default/Section";
        function Create(request: Serenity.SaveRequest<SectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class SectionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SectionsForm {
        RoadNo: Serenity.DecimalEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.DecimalEditor;
        ZoneNo: Serenity.DecimalEditor;
        SectionNo: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    interface SectionsRow {
        RoadNo?: number;
        AreaNo?: number;
        CityNo?: number;
        ZoneNo?: number;
        SectionNo?: number;
        ItemId?: number;
    }
    namespace SectionsRow {
        const idProperty = "ItemId";
        const localTextPrefix = "Default.Sections";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const RoadNo: any;
            const AreaNo: any;
            const CityNo: any;
            const ZoneNo: any;
            const SectionNo: any;
            const ItemId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace SectionsService {
        const baseUrl = "Default/Sections";
        function Create(request: Serenity.SaveRequest<SectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SectionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SectionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkOrderBugForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkOrderBugForm {
        ItemBugName: Serenity.StringEditor;
        WorkOrderId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkOrderBugRow {
        ItemBugId?: number;
        ItemBugName?: string;
        WorkOrderId?: number;
    }
    namespace WorkOrderBugRow {
        const idProperty = "ItemBugId";
        const nameProperty = "ItemBugName";
        const localTextPrefix = "Default.WorkOrderBug";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemBugId: any;
            const ItemBugName: any;
            const WorkOrderId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkOrderBugService {
        const baseUrl = "Default/WorkOrderBug";
        function Create(request: Serenity.SaveRequest<WorkOrderBugRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkOrderBugRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkOrderBugRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkOrderBugRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkOrderEmergencyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkOrderEmergencyForm {
        Ename: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkOrderEmergencyRow {
        EId?: number;
        Ename?: string;
    }
    namespace WorkOrderEmergencyRow {
        const idProperty = "EId";
        const nameProperty = "Ename";
        const localTextPrefix = "Default.WorkOrderEmergency";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const EId: any;
            const Ename: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkOrderEmergencyService {
        const baseUrl = "Default/WorkOrderEmergency";
        function Create(request: Serenity.SaveRequest<WorkOrderEmergencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkOrderEmergencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkOrderEmergencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkOrderEmergencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkOrderFixForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkOrderFixForm {
        ItemFixName: Serenity.StringEditor;
        WorkOrderId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkOrderFixRow {
        ItemFixId?: number;
        ItemFixName?: string;
        WorkOrderId?: number;
    }
    namespace WorkOrderFixRow {
        const idProperty = "ItemFixId";
        const nameProperty = "ItemFixName";
        const localTextPrefix = "Default.WorkOrderFix";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemFixId: any;
            const ItemFixName: any;
            const WorkOrderId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkOrderFixService {
        const baseUrl = "Default/WorkOrderFix";
        function Create(request: Serenity.SaveRequest<WorkOrderFixRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkOrderFixRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkOrderFixRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkOrderFixRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkOrderForm {
        WorkOrderId: Serenity.IntegerEditor;
        ProjectName: Serenity.StringEditor;
        ContractName: Serenity.StringEditor;
        ProjectLocation: Serenity.StringEditor;
        DateOfOrderWork: Serenity.DateEditor;
        WorkDuration: Serenity.StringEditor;
        WorkorderStartDate: Serenity.StringEditor;
        WorkorderEndDate: Serenity.DateEditor;
        WorkorderRenewDate: Serenity.DateEditor;
        WorkorderNotes: Serenity.StringEditor;
        Doc1: Serenity.StringEditor;
        Doc2: Serenity.StringEditor;
        Doc3: Serenity.StringEditor;
        Doc4: Serenity.StringEditor;
        DocImageMap: Serenity.StringEditor;
        Remark1: Serenity.StringEditor;
        Remark2: Serenity.StringEditor;
        Remark3: Serenity.StringEditor;
        Remark4: Serenity.StringEditor;
        RemarkDate1: Serenity.DateEditor;
        RemarkDate2: Serenity.DateEditor;
        RemarkDate3: Serenity.DateEditor;
        signature: Serenity.StringEditor;
        WorkorderSection: Serenity.StringEditor;
        WorkorderLane: Serenity.StringEditor;
        WorkorderArea: Serenity.StringEditor;
        WorkorderRoad: Serenity.StringEditor;
        WorkorderZone: Serenity.StringEditor;
        WorkorderCity: Serenity.StringEditor;
        RefId: Serenity.LookupEditor;
        emergency: Serenity.LookupEditor;
        WorkorderBoqItem: PMMS.Default.WorkorderBoqItemEditor;
        LaneTemplate: Serenity.StringEditor;
    }
}
declare namespace PMMS.Default {
    class WorkOrderOldForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkOrderOldForm {
        ProjectName: Serenity.StringEditor;
        ContractName: Serenity.StringEditor;
        ProjectLocation: Serenity.StringEditor;
        DateOfOrderWork: Serenity.DateEditor;
        WorkDuration: Serenity.StringEditor;
        WorkorderStartDate: Serenity.StringEditor;
        WorkorderEndDate: Serenity.DateEditor;
        WorkorderRenewDate: Serenity.DateEditor;
        WorkorderNotes: Serenity.StringEditor;
        Doc1: Serenity.StringEditor;
        Doc2: Serenity.StringEditor;
        Doc3: Serenity.StringEditor;
        Doc4: Serenity.StringEditor;
        DocImageMap: Serenity.StringEditor;
        Remark1: Serenity.StringEditor;
        Remark2: Serenity.StringEditor;
        Remark3: Serenity.StringEditor;
        Remark4: Serenity.StringEditor;
        RemarkDate1: Serenity.DateEditor;
        RemarkDate2: Serenity.DateEditor;
        RemarkDate3: Serenity.DateEditor;
        RefId: Serenity.IntegerEditor;
        Status: Serenity.StringEditor;
        WorkflowStage: Serenity.StringEditor;
        WorkflowStagename: Serenity.StringEditor;
        AssignTo: Serenity.StringEditor;
        Doc5: Serenity.StringEditor;
        Doc6: Serenity.StringEditor;
        Doc7: Serenity.StringEditor;
        Doc8: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        LastUpdate: Serenity.DateEditor;
        DocImageMapKey: Serenity.StringEditor;
        WorkOrderLocation: Serenity.StringEditor;
        WorkorderCity: Serenity.StringEditor;
        WorkorderZone: Serenity.StringEditor;
        WorkorderArea: Serenity.StringEditor;
        WorkorderRoad: Serenity.StringEditor;
        WorkorderSection: Serenity.StringEditor;
        DocOther2: Serenity.StringEditor;
        DocOther1: Serenity.StringEditor;
        YearsOfLife: Serenity.IntegerEditor;
        WarrantyStartDate: Serenity.DateEditor;
        WarrantyEndDate: Serenity.DateEditor;
        WorkorderLane: Serenity.StringEditor;
        BlockDate: Serenity.DateEditor;
        AutoSkip: Serenity.BooleanEditor;
        SeqN: Serenity.StringEditor;
        Emergency: Serenity.IntegerEditor;
        StatusCode: Serenity.StringEditor;
        DepId: Serenity.StringEditor;
        DisplayStreet: Serenity.StringEditor;
        DisplayZone: Serenity.StringEditor;
        DisplayArea: Serenity.StringEditor;
        DisplayCity: Serenity.StringEditor;
        DisplaySection: Serenity.StringEditor;
        UserGroup: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkOrderOldRow {
        WorkOrderId?: number;
        ProjectName?: string;
        ContractName?: string;
        ProjectLocation?: string;
        DateOfOrderWork?: string;
        WorkDuration?: string;
        WorkorderStartDate?: string;
        WorkorderEndDate?: string;
        WorkorderRenewDate?: string;
        WorkorderNotes?: string;
        Doc1?: string;
        Doc2?: string;
        Doc3?: string;
        Doc4?: string;
        DocImageMap?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        RemarkDate1?: string;
        RemarkDate2?: string;
        RemarkDate3?: string;
        RefId?: number;
        Status?: string;
        WorkflowStage?: string;
        WorkflowStagename?: string;
        AssignTo?: string;
        Doc5?: string;
        Doc6?: string;
        Doc7?: string;
        Doc8?: string;
        CreatedDate?: string;
        LastUpdate?: string;
        DocImageMapKey?: string;
        WorkOrderLocation?: string;
        WorkorderCity?: string;
        WorkorderZone?: string;
        WorkorderArea?: string;
        WorkorderRoad?: string;
        WorkorderSection?: string;
        DocOther2?: string;
        DocOther1?: string;
        YearsOfLife?: number;
        WarrantyStartDate?: string;
        WarrantyEndDate?: string;
        WorkorderLane?: string;
        BlockDate?: string;
        AutoSkip?: boolean;
        SeqN?: string;
        Emergency?: number;
        StatusCode?: string;
        DepId?: string;
        DisplayStreet?: string;
        DisplayZone?: string;
        DisplayArea?: string;
        DisplayCity?: string;
        DisplaySection?: string;
        UserGroup?: number;
    }
    namespace WorkOrderOldRow {
        const idProperty = "WorkOrderId";
        const nameProperty = "ProjectName";
        const localTextPrefix = "Default.WorkOrderOld";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const WorkOrderId: any;
            const ProjectName: any;
            const ContractName: any;
            const ProjectLocation: any;
            const DateOfOrderWork: any;
            const WorkDuration: any;
            const WorkorderStartDate: any;
            const WorkorderEndDate: any;
            const WorkorderRenewDate: any;
            const WorkorderNotes: any;
            const Doc1: any;
            const Doc2: any;
            const Doc3: any;
            const Doc4: any;
            const DocImageMap: any;
            const Remark1: any;
            const Remark2: any;
            const Remark3: any;
            const Remark4: any;
            const RemarkDate1: any;
            const RemarkDate2: any;
            const RemarkDate3: any;
            const RefId: any;
            const Status: any;
            const WorkflowStage: any;
            const WorkflowStagename: any;
            const AssignTo: any;
            const Doc5: any;
            const Doc6: any;
            const Doc7: any;
            const Doc8: any;
            const CreatedDate: any;
            const LastUpdate: any;
            const DocImageMapKey: any;
            const WorkOrderLocation: any;
            const WorkorderCity: any;
            const WorkorderZone: any;
            const WorkorderArea: any;
            const WorkorderRoad: any;
            const WorkorderSection: any;
            const DocOther2: any;
            const DocOther1: any;
            const YearsOfLife: any;
            const WarrantyStartDate: any;
            const WarrantyEndDate: any;
            const WorkorderLane: any;
            const BlockDate: any;
            const AutoSkip: any;
            const SeqN: any;
            const Emergency: any;
            const StatusCode: any;
            const DepId: any;
            const DisplayStreet: any;
            const DisplayZone: any;
            const DisplayArea: any;
            const DisplayCity: any;
            const DisplaySection: any;
            const UserGroup: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkOrderOldService {
        const baseUrl = "Default/WorkOrderOld";
        function Create(request: Serenity.SaveRequest<WorkOrderOldRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkOrderOldRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkOrderOldRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkOrderOldRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    interface WorkOrderRow {
        WorkOrderId?: number;
        ProjectName?: string;
        ContractName?: string;
        ProjectLocation?: string;
        DateOfOrderWork?: string;
        WorkDuration?: string;
        WorkorderStartDate?: string;
        WorkorderEndDate?: string;
        WorkorderRenewDate?: string;
        WorkorderNotes?: string;
        Doc1?: string;
        Doc2?: string;
        Doc3?: string;
        Doc4?: string;
        DocImageMap?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        RemarkDate1?: string;
        RemarkDate2?: string;
        RemarkDate3?: string;
        Status: string;
    }
    namespace WorkOrderRow {
        const idProperty = "WorkOrderId";
        const nameProperty = "ProjectName";
        const localTextPrefix = "Default.WorkOrder";
        const deletePermission = "Apps:Data:General";
        const insertPermission = "Apps:Data:General";
        const readPermission = "Apps:Data:General";
        const updatePermission = "Apps:Data:General";
        namespace Fields {
            const WorkOrderId: any;
            const ProjectName: any;
            const ContractName: any;
            const ProjectLocation: any;
            const DateOfOrderWork: any;
            const WorkDuration: any;
            const WorkorderStartDate: any;
            const WorkorderEndDate: any;
            const WorkorderRenewDate: any;
            const WorkorderNotes: any;
            const Doc1: any;
            const Doc2: any;
            const Doc3: any;
            const Doc4: any;
            const DocImageMap: any;
            const Remark1: any;
            const Remark2: any;
            const Remark3: any;
            const Remark4: any;
            const RemarkDate1: any;
            const RemarkDate2: any;
            const RemarkDate3: any;
            const Status: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkOrderService {
        const baseUrl = "Default/WorkOrder";
        function Create(request: Serenity.SaveRequest<WorkOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkorderBoqForm {
        ItmCode: Serenity.StringEditor;
        ItmSeq: Serenity.DecimalEditor;
        ItmDesc: Serenity.StringEditor;
        ContractId: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Remainder: Serenity.DecimalEditor;
        ExecQty: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqItemForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkorderBoqItemForm {
        ItmCode: Serenity.StringEditor;
        ItmSeq: Serenity.DecimalEditor;
        ItmDesc: Serenity.StringEditor;
        ContractId: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Woid: Serenity.IntegerEditor;
        ExecQty: Serenity.DecimalEditor;
        Prev_EXEC_QTY: Serenity.DecimalEditor;
        REMAINDER: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkorderBoqItemRow {
        BItemId?: number;
        ItmCode?: string;
        ItmSeq?: number;
        ItmDesc?: string;
        ContractId?: number;
        Unit?: string;
        Qty?: number;
        Woid?: number;
        ExecQty?: number;
        REMAINDER?: number;
        Status?: string;
    }
    namespace WorkorderBoqItemRow {
        const idProperty = "BItemId";
        const nameProperty = "ItmCode";
        const localTextPrefix = "Default.WorkorderBoqItem";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const BItemId: any;
            const ItmCode: any;
            const ItmSeq: any;
            const ItmDesc: any;
            const ContractId: any;
            const Unit: any;
            const Qty: any;
            const Woid: any;
            const ExecQty: any;
            const REMAINDER: any;
            const Status: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkorderBoqItemService {
        const baseUrl = "Default/WorkorderBoqItem";
        function Create(request: Serenity.SaveRequest<WorkorderBoqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkorderBoqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkorderBoqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkorderBoqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    interface WorkorderBoqRow {
        ItemId?: number;
        ItmCode?: string;
        ItmSeq?: number;
        ItmDesc?: string;
        ContractId?: number;
        Unit?: string;
        Qty?: number;
        Remainder?: number;
        ExecQty?: number;
    }
    namespace WorkorderBoqRow {
        const idProperty = "ItemId";
        const nameProperty = "ItmCode";
        const localTextPrefix = "Default.WorkorderBoq";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItmCode: any;
            const ItmSeq: any;
            const ItmDesc: any;
            const ContractId: any;
            const Unit: any;
            const Qty: any;
            const Remainder: any;
            const ExecQty: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkorderBoqService {
        const baseUrl = "Default/WorkorderBoq";
        function Create(request: Serenity.SaveRequest<WorkorderBoqRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkorderBoqRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkorderBoqRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkorderBoqRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class WorkorderItemStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface WorkorderItemStatusForm {
        ItemName: Serenity.StringEditor;
        IsClosed: Serenity.BooleanEditor;
    }
}
declare namespace PMMS.Default {
    interface WorkorderItemStatusRow {
        ItemId?: number;
        ItemName?: string;
        IsClosed?: boolean;
    }
    namespace WorkorderItemStatusRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.WorkorderItemStatus";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const IsClosed: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace WorkorderItemStatusService {
        const baseUrl = "Default/WorkorderItemStatus";
        function Create(request: Serenity.SaveRequest<WorkorderItemStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkorderItemStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkorderItemStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkorderItemStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ZoneForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ZoneForm {
        ZoneNo: Serenity.DecimalEditor;
        ZoneName: Serenity.StringEditor;
        CityNo: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    interface ZoneRow {
        ZoneNo?: number;
        ZoneName?: string;
        CityNo?: number;
        ItemId?: number;
    }
    namespace ZoneRow {
        const idProperty = "ItemId";
        const nameProperty = "ZoneName";
        const localTextPrefix = "Default.Zone";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ZoneNo: any;
            const ZoneName: any;
            const CityNo: any;
            const ItemId: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ZoneService {
        const baseUrl = "Default/Zone";
        function Create(request: Serenity.SaveRequest<ZoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ZoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ZoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ZoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Default {
    class ZonesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ZonesForm {
        ZoneName: Serenity.StringEditor;
        CityNo: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.Default {
    interface ZonesRow {
        ZoneNo?: number;
        ZoneName?: string;
        CityNo?: number;
    }
    namespace ZonesRow {
        const idProperty = "ZoneNo";
        const nameProperty = "ZoneName";
        const localTextPrefix = "Default.Zones";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ZoneNo: any;
            const ZoneName: any;
            const CityNo: any;
        }
    }
}
declare namespace PMMS.Default {
    namespace ZonesService {
        const baseUrl = "Default/Zones";
        function Create(request: Serenity.SaveRequest<ZonesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ZonesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ZonesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ZonesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class ContentHubCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContentHubCategoryForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Distortion {
    interface ContentHubCategoryRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace ContentHubCategoryRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Distortion.ContentHubCategory";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace ContentHubCategoryService {
        const baseUrl = "Distortion/ContentHubCategory";
        function Create(request: Serenity.SaveRequest<ContentHubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContentHubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContentHubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContentHubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class ContentHubForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContentHubForm {
        ImgColNote: Serenity.StringEditor;
        ImageColPath: Serenity.StringEditor;
        ImageLat: Serenity.StringEditor;
        ImageLong: Serenity.StringEditor;
        CollCateegory: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Distortion {
    interface ContentHubRow {
        ImgColId?: number;
        ImgColNote?: string;
        ImageColPath?: string;
        ImageLat?: string;
        ImageLong?: string;
        CollCateegory?: number;
    }
    namespace ContentHubRow {
        const idProperty = "ImgColId";
        const nameProperty = "ImgColNote";
        const localTextPrefix = "Distortion.ContentHub";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ImgColId: any;
            const ImgColNote: any;
            const ImageColPath: any;
            const ImageLat: any;
            const ImageLong: any;
            const CollCateegory: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace ContentHubService {
        const baseUrl = "Distortion/ContentHub";
        function Create(request: Serenity.SaveRequest<ContentHubRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContentHubRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContentHubRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContentHubRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class DistortionCasesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DistortionCasesForm {
        ItemName: Serenity.StringEditor;
        ItemCategory: Serenity.IntegerEditor;
        ItemSubCategory: Serenity.IntegerEditor;
        AssetCity: Serenity.StringEditor;
        AssetZone: Serenity.StringEditor;
        AssetsAreaId: Serenity.StringEditor;
        AssetRoad: Serenity.StringEditor;
        AssetSection: Serenity.StringEditor;
        ItemQty: Serenity.DecimalEditor;
        ItemImages: Serenity.StringEditor;
        ItemDoc: Serenity.StringEditor;
        ItemLatLong: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
        CaseDate: Serenity.DateEditor;
        CaseAdress: Serenity.StringEditor;
        CaseAmount: Serenity.DecimalEditor;
        CaseDesc: Serenity.StringEditor;
        CaseSolution: Serenity.StringEditor;
        CaseStatus: Serenity.IntegerEditor;
        ItemImagesAfter: Serenity.StringEditor;
    }
}
declare namespace PMMS.Distortion {
    interface DistortionCasesRow {
        ItemId?: number;
        ItemName?: string;
        ItemCategory?: number;
        ItemSubCategory?: number;
        AssetCity?: string;
        AssetZone?: string;
        AssetsAreaId?: string;
        AssetRoad?: string;
        AssetSection?: string;
        ItemQty?: number;
        ItemImages?: string;
        ItemDoc?: string;
        ItemLatLong?: string;
        Attachments?: string;
        CaseDate?: string;
        CaseAdress?: string;
        CaseAmount?: number;
        CaseDesc?: string;
        CaseSolution?: string;
        CaseStatus?: number;
        ItemImagesAfter?: string;
    }
    namespace DistortionCasesRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Distortion.DistortionCases";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ItemCategory: any;
            const ItemSubCategory: any;
            const AssetCity: any;
            const AssetZone: any;
            const AssetsAreaId: any;
            const AssetRoad: any;
            const AssetSection: any;
            const ItemQty: any;
            const ItemImages: any;
            const ItemDoc: any;
            const ItemLatLong: any;
            const Attachments: any;
            const CaseDate: any;
            const CaseAdress: any;
            const CaseAmount: any;
            const CaseDesc: any;
            const CaseSolution: any;
            const CaseStatus: any;
            const ItemImagesAfter: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace DistortionCasesService {
        const baseUrl = "Distortion/DistortionCases";
        function Create(request: Serenity.SaveRequest<DistortionCasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistortionCasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistortionCasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistortionCasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class DistortionCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DistortionCategoryForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Distortion {
    interface DistortionCategoryRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace DistortionCategoryRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Distortion.DistortionCategory";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace DistortionCategoryService {
        const baseUrl = "Distortion/DistortionCategory";
        function Create(request: Serenity.SaveRequest<DistortionCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistortionCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistortionCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistortionCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class DistortionStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DistortionStatusForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.Distortion {
    interface DistortionStatusRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace DistortionStatusRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Distortion.DistortionStatus";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace DistortionStatusService {
        const baseUrl = "Distortion/DistortionStatus";
        function Create(request: Serenity.SaveRequest<DistortionStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistortionStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistortionStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistortionStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.Distortion {
    class DistortionSubCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DistortionSubCategoryForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.Distortion {
    interface DistortionSubCategoryRow {
        ItemId?: number;
        ItemName?: string;
        ParentId?: number;
    }
    namespace DistortionSubCategoryRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "Distortion.DistortionSubCategory";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ParentId: any;
        }
    }
}
declare namespace PMMS.Distortion {
    namespace DistortionSubCategoryService {
        const baseUrl = "Distortion/DistortionSubCategory";
        function Create(request: Serenity.SaveRequest<DistortionSubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistortionSubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistortionSubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistortionSubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetAttrForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetAttrForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetAttrRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetAttrRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetAttr";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetAttrService {
        const baseUrl = "EAM/AssetAttr";
        function Create(request: Serenity.SaveRequest<AssetAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetBuildingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetBuildingForm {
        ItemName: Serenity.StringEditor;
        CityId: Serenity.IntegerEditor;
        ItemDesc: Serenity.StringEditor;
        NumberOfFloor: Serenity.DecimalEditor;
        LatLong: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetBuildingRow {
        ItemId?: number;
        ItemName?: string;
        CityId?: number;
        ItemDesc?: string;
        NumberOfFloor?: number;
        LatLong?: string;
    }
    namespace AssetBuildingRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetBuilding";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const CityId: any;
            const ItemDesc: any;
            const NumberOfFloor: any;
            const LatLong: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetBuildingService {
        const baseUrl = "EAM/AssetBuilding";
        function Create(request: Serenity.SaveRequest<AssetBuildingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetBuildingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetBuildingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetBuildingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetCategoryForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetCategoryRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetCategoryRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetCategory";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetCategoryService {
        const baseUrl = "EAM/AssetCategory";
        function Create(request: Serenity.SaveRequest<AssetCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetClassForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetClassForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetClassRow {
        ItemId?: number;
        ParentId?: number;
        ItemName?: string;
    }
    namespace AssetClassRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetClass";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ParentId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetClassService {
        const baseUrl = "EAM/AssetClass";
        function Create(request: Serenity.SaveRequest<AssetClassRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetClassRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetClassRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetClassRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetCustAttrForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetCustAttrForm {
        AssetId: Serenity.IntegerEditor;
        AttrId: Serenity.IntegerEditor;
        AttrValue: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetCustAttrRow {
        ItemSubId?: number;
        AssetId?: number;
        AttrId?: number;
        AttrValue?: string;
    }
    namespace AssetCustAttrRow {
        const idProperty = "ItemSubId";
        const nameProperty = "AttrValue";
        const localTextPrefix = "EAM.AssetCustAttr";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemSubId: any;
            const AssetId: any;
            const AttrId: any;
            const AttrValue: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetCustAttrService {
        const baseUrl = "EAM/AssetCustAttr";
        function Create(request: Serenity.SaveRequest<AssetCustAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetCustAttrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetCustAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetCustAttrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetDimansionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetDimansionForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetDimansionRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetDimansionRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetDimansion";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetDimansionService {
        const baseUrl = "EAM/AssetDimansion";
        function Create(request: Serenity.SaveRequest<AssetDimansionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetDimansionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetDimansionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetDimansionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetDistressForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetDistressForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetDistressRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetDistressRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetDistress";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetDistressService {
        const baseUrl = "EAM/AssetDistress";
        function Create(request: Serenity.SaveRequest<AssetDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetLocationForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetLocationRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetLocationRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetLocation";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetLocationService {
        const baseUrl = "EAM/AssetLocation";
        function Create(request: Serenity.SaveRequest<AssetLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetServiceStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetServiceStatusForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetServiceStatusRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetServiceStatusRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetServiceStatus";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetServiceStatusService {
        const baseUrl = "EAM/AssetServiceStatus";
        function Create(request: Serenity.SaveRequest<AssetServiceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetServiceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetServiceStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetServiceStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetStatusForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetStatusRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetStatusRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetStatus";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetStatusService {
        const baseUrl = "EAM/AssetStatus";
        function Create(request: Serenity.SaveRequest<AssetStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetSubCalcForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetSubCalcForm {
        Sid: Serenity.StringEditor;
        DisId: Serenity.IntegerEditor;
        Density: Serenity.StringEditor;
        TotalValue: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetSubCalcRow {
        ItemId?: number;
        Sid?: string;
        DisId?: number;
        Density?: string;
        TotalValue?: string;
    }
    namespace AssetSubCalcRow {
        const idProperty = "ItemId";
        const nameProperty = "Sid";
        const localTextPrefix = "EAM.AssetSubCalc";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const Sid: any;
            const DisId: any;
            const Density: any;
            const TotalValue: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetSubCalcService {
        const baseUrl = "EAM/AssetSubCalc";
        function Create(request: Serenity.SaveRequest<AssetSubCalcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetSubCalcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetSubCalcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetSubCalcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetSubCategoryForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryLevelForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetSubCategoryLevelForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetSubCategoryLevelRow {
        ItemId?: number;
        ItemName?: string;
        ParentId?: number;
    }
    namespace AssetSubCategoryLevelRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetSubCategoryLevel";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ParentId: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetSubCategoryLevelService {
        const baseUrl = "EAM/AssetSubCategoryLevel";
        function Create(request: Serenity.SaveRequest<AssetSubCategoryLevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetSubCategoryLevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetSubCategoryLevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetSubCategoryLevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    interface AssetSubCategoryRow {
        ItemId?: number;
        ItemName?: string;
        ParentId?: number;
    }
    namespace AssetSubCategoryRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetSubCategory";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ParentId: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetSubCategoryService {
        const baseUrl = "EAM/AssetSubCategory";
        function Create(request: Serenity.SaveRequest<AssetSubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetSubCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetSubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetSubCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetTagsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetTagsForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetTagsRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetTagsRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetTags";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetTagsService {
        const baseUrl = "EAM/AssetTags";
        function Create(request: Serenity.SaveRequest<AssetTagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetTagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetTagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetTagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetTypeForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetTypeRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetTypeRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetType";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetTypeService {
        const baseUrl = "EAM/AssetType";
        function Create(request: Serenity.SaveRequest<AssetTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsForm {
        AsseName: Serenity.StringEditor;
        AssetBarcode: Serenity.StringEditor;
        AssetSerial: Serenity.StringEditor;
        AssetType: Serenity.IntegerEditor;
        AssetCategory: Serenity.IntegerEditor;
        AssetSubCategory: Serenity.IntegerEditor;
        AssetLocation: Serenity.IntegerEditor;
        AssetStartDate: Serenity.DateEditor;
        AssetEndDate: Serenity.DateEditor;
        AssetMaunfacture: Serenity.StringEditor;
        AssetProject: Serenity.IntegerEditor;
        AssetContractor: Serenity.IntegerEditor;
        AssetVendor: Serenity.IntegerEditor;
        AssetInspector: Serenity.IntegerEditor;
        AssetParent: Serenity.IntegerEditor;
        AssetStatus: Serenity.IntegerEditor;
        AssetClass: Serenity.IntegerEditor;
        AssetClassDescription: Serenity.StringEditor;
        AssetAutoDepc: Serenity.BooleanEditor;
        AssetDepcMethod: Serenity.StringEditor;
        AssetDepcInMonth: Serenity.IntegerEditor;
        AssetDepcPrec: Serenity.IntegerEditor;
        AssetDepcDate: Serenity.DateEditor;
        AssetDepcStatus: Serenity.IntegerEditor;
        InstallDate: Serenity.DateEditor;
        InstallAccetpedDate: Serenity.DateEditor;
        PurchasePrice: Serenity.DecimalEditor;
        YearsOfLife: Serenity.IntegerEditor;
        WarrantyStartDate: Serenity.DateEditor;
        WarrantyEndDate: Serenity.DateEditor;
        MaintSubSet: Serenity.IntegerEditor;
        MaintCondation: Serenity.IntegerEditor;
        MaintCrit: Serenity.IntegerEditor;
        MaintLastCheckDate: Serenity.DateEditor;
        AssetWidth: Serenity.DecimalEditor;
        AssetHight: Serenity.DecimalEditor;
        AssetArea: Serenity.DecimalEditor;
        AssetDimansion: Serenity.IntegerEditor;
        AssetWeight: Serenity.DecimalEditor;
        AssetPower: Serenity.DecimalEditor;
        AssetServiceStatus: Serenity.IntegerEditor;
        MaintPowerConsumption: Serenity.DecimalEditor;
        AssetCity: Serenity.StringEditor;
        AssetZone: Serenity.StringEditor;
        AssetsAreaId: Serenity.StringEditor;
        AssetRoad: Serenity.StringEditor;
        AssetSection: Serenity.StringEditor;
        AssetQty: Serenity.DecimalEditor;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCondationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsMaintCondationForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsMaintCondationRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetsMaintCondationRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetsMaintCondation";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsMaintCondationService {
        const baseUrl = "EAM/AssetsMaintCondation";
        function Create(request: Serenity.SaveRequest<AssetsMaintCondationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsMaintCondationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsMaintCondationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsMaintCondationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCritForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsMaintCritForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsMaintCritRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetsMaintCritRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetsMaintCrit";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsMaintCritService {
        const baseUrl = "EAM/AssetsMaintCrit";
        function Create(request: Serenity.SaveRequest<AssetsMaintCritRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsMaintCritRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsMaintCritRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsMaintCritRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintSubSetForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsMaintSubSetForm {
        ItemName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsMaintSubSetRow {
        ItemId?: number;
        ItemName?: string;
    }
    namespace AssetsMaintSubSetRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetsMaintSubSet";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsMaintSubSetService {
        const baseUrl = "EAM/AssetsMaintSubSet";
        function Create(request: Serenity.SaveRequest<AssetsMaintSubSetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsMaintSubSetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsMaintSubSetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsMaintSubSetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    interface AssetsRow {
        ItemId?: number;
        AsseName?: string;
        AssetBarcode?: string;
        AssetSerial?: string;
        AssetType?: number;
        AssetCategory?: number;
        AssetSubCategory?: number;
        AssetLocation?: number;
        AssetStartDate?: string;
        AssetEndDate?: string;
        AssetMaunfacture?: string;
        AssetProject?: number;
        AssetContractor?: number;
        AssetVendor?: number;
        AssetInspector?: number;
        AssetParent?: number;
        AssetStatus?: number;
        AssetClass?: number;
        AssetClassDescription?: string;
        AssetAutoDepc?: boolean;
        AssetDepcMethod?: string;
        AssetDepcInMonth?: number;
        AssetDepcPrec?: number;
        AssetDepcDate?: string;
        AssetDepcStatus?: number;
        InstallDate?: string;
        InstallAccetpedDate?: string;
        PurchasePrice?: number;
        YearsOfLife?: number;
        WarrantyStartDate?: string;
        WarrantyEndDate?: string;
        MaintSubSet?: number;
        MaintCondation?: number;
        MaintCrit?: number;
        MaintLastCheckDate?: string;
        AssetWidth?: number;
        AssetHight?: number;
        AssetArea?: number;
        AssetDimansion?: number;
        AssetWeight?: number;
        AssetPower?: number;
        AssetServiceStatus?: number;
        MaintPowerConsumption?: number;
        AssetCity?: string;
        AssetZone?: string;
        AssetsAreaId?: string;
        AssetRoad?: string;
        AssetSection?: string;
        AssetQty?: number;
    }
    namespace AssetsRow {
        const idProperty = "ItemId";
        const nameProperty = "AsseName";
        const localTextPrefix = "EAM.Assets";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const AsseName: any;
            const AssetBarcode: any;
            const AssetSerial: any;
            const AssetType: any;
            const AssetCategory: any;
            const AssetSubCategory: any;
            const AssetLocation: any;
            const AssetStartDate: any;
            const AssetEndDate: any;
            const AssetMaunfacture: any;
            const AssetProject: any;
            const AssetContractor: any;
            const AssetVendor: any;
            const AssetInspector: any;
            const AssetParent: any;
            const AssetStatus: any;
            const AssetClass: any;
            const AssetClassDescription: any;
            const AssetAutoDepc: any;
            const AssetDepcMethod: any;
            const AssetDepcInMonth: any;
            const AssetDepcPrec: any;
            const AssetDepcDate: any;
            const AssetDepcStatus: any;
            const InstallDate: any;
            const InstallAccetpedDate: any;
            const PurchasePrice: any;
            const YearsOfLife: any;
            const WarrantyStartDate: any;
            const WarrantyEndDate: any;
            const MaintSubSet: any;
            const MaintCondation: any;
            const MaintCrit: any;
            const MaintLastCheckDate: any;
            const AssetWidth: any;
            const AssetHight: any;
            const AssetArea: any;
            const AssetDimansion: any;
            const AssetWeight: any;
            const AssetPower: any;
            const AssetServiceStatus: any;
            const MaintPowerConsumption: any;
            const AssetCity: any;
            const AssetZone: any;
            const AssetsAreaId: any;
            const AssetRoad: any;
            const AssetSection: any;
            const AssetQty: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsService {
        const baseUrl = "EAM/Assets";
        function Create(request: Serenity.SaveRequest<AssetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsSeverityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsSeverityForm {
        SName: Serenity.StringEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsSeverityRow {
        SCode?: string;
        SName?: string;
    }
    namespace AssetsSeverityRow {
        const idProperty = "SCode";
        const nameProperty = "SCode";
        const localTextPrefix = "EAM.AssetsSeverity";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const SCode: any;
            const SName: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsSeverityService {
        const baseUrl = "EAM/AssetsSeverity";
        function Create(request: Serenity.SaveRequest<AssetsSeverityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsSeverityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsSeverityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsSeverityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyDistressForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsSurveyDistressForm {
        DistressId: Serenity.IntegerEditor;
        Severity: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Density: Serenity.StringEditor;
        TotalValue: Serenity.DecimalEditor;
        Itemsuidref: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsSurveyDistressRow {
        Itemdisid?: number;
        DistressId?: number;
        Severity?: string;
        Quantity?: number;
        Density?: string;
        TotalValue?: number;
        Itemsuidref?: number;
    }
    namespace AssetsSurveyDistressRow {
        const idProperty = "Itemdisid";
        const nameProperty = "Severity";
        const localTextPrefix = "EAM.AssetsSurveyDistress";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const Itemdisid: any;
            const DistressId: any;
            const Severity: any;
            const Quantity: any;
            const Density: any;
            const TotalValue: any;
            const Itemsuidref: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsSurveyDistressService {
        const baseUrl = "EAM/AssetsSurveyDistress";
        function Create(request: Serenity.SaveRequest<AssetsSurveyDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsSurveyDistressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsSurveyDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsSurveyDistressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsSurveyForm {
        AssetsId: Serenity.IntegerEditor;
        SurvayDate: Serenity.DateEditor;
        SurvayDec: Serenity.StringEditor;
        SurvayBy: Serenity.StringEditor;
        SurvayResult: Serenity.StringEditor;
        SurvayRank: Serenity.IntegerEditor;
        SurvayNumber: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsSurveyRow {
        Itemsuid?: number;
        AssetsId?: number;
        SurvayDate?: string;
        SurvayDec?: string;
        SurvayBy?: string;
        SurvayResult?: string;
        SurvayRank?: number;
        SurvayNumber?: number;
    }
    namespace AssetsSurveyRow {
        const idProperty = "Itemsuid";
        const nameProperty = "SurvayDec";
        const localTextPrefix = "EAM.AssetsSurvey";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const Itemsuid: any;
            const AssetsId: any;
            const SurvayDate: any;
            const SurvayDec: any;
            const SurvayBy: any;
            const SurvayResult: any;
            const SurvayRank: any;
            const SurvayNumber: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsSurveyService {
        const baseUrl = "EAM/AssetsSurvey";
        function Create(request: Serenity.SaveRequest<AssetsSurveyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsSurveyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsSurveyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsSurveyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class AssetsTotalCalcForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AssetsTotalCalcForm {
        ItemName: Serenity.StringEditor;
        ItemOp: Serenity.StringEditor;
        ItemValue: Serenity.DecimalEditor;
        ItemThen: Serenity.IntegerEditor;
    }
}
declare namespace PMMS.EAM {
    interface AssetsTotalCalcRow {
        ItemId?: number;
        ItemName?: string;
        ItemOp?: string;
        ItemValue?: number;
        ItemThen?: number;
    }
    namespace AssetsTotalCalcRow {
        const idProperty = "ItemId";
        const nameProperty = "ItemName";
        const localTextPrefix = "EAM.AssetsTotalCalc";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const ItemId: any;
            const ItemName: any;
            const ItemOp: any;
            const ItemValue: any;
            const ItemThen: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace AssetsTotalCalcService {
        const baseUrl = "EAM/AssetsTotalCalc";
        function Create(request: Serenity.SaveRequest<AssetsTotalCalcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetsTotalCalcRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetsTotalCalcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetsTotalCalcRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS.EAM {
    class OpValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OpValuesForm {
    }
}
declare namespace PMMS.EAM {
    interface OpValuesRow {
        OpValues?: string;
    }
    namespace OpValuesRow {
        const idProperty = "OpValues";
        const nameProperty = "OpValues";
        const localTextPrefix = "EAM.OpValues";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const OpValues: any;
        }
    }
}
declare namespace PMMS.EAM {
    namespace OpValuesService {
        const baseUrl = "EAM/OpValues";
        function Create(request: Serenity.SaveRequest<OpValuesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpValuesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpValuesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpValuesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PMMS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace PMMS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace PMMS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace PMMS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace PMMS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PMMS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace PMMS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace PMMS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PMMS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        IqamaID: Serenity.IntegerEditor;
        MobileNumber: Serenity.IntegerEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PMMS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace PMMS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        UserId?: number;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace PMMS.Texts {
}
declare namespace PMMS.Administration {
    class AuditLogDialog extends Serenity.EntityDialog<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        /**
       * This is the method that gets list of tool
       * buttons to be created in a dialog.
       *
       * Here we'll remove save and close button, and
       * apply changes buttons.
       */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace PMMS.Administration {
    class AuditLogGrid extends Serenity.EntityGrid<AuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PMMS.Administration {
    class CustomReportsDialog extends Serenity.EntityDialog<CustomReportsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Administration {
    class CustomReportsGrid extends Serenity.EntityGrid<CustomReportsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomReportsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Administration {
    class GisLayerConnectionsDialog extends Serenity.EntityDialog<GisLayerConnectionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Administration {
    class GisLayerConnectionsGrid extends Serenity.EntityGrid<GisLayerConnectionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GisLayerConnectionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace PMMS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace PMMS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace PMMS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace PMMS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace PMMS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace PMMS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace PMMS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PMMS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace PMMS.Administration {
    class UserGroupsDialog extends Serenity.EntityDialog<UserGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Administration {
    class UserGroupsGrid extends Serenity.EntityGrid<UserGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserGroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace PMMS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace PMMS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace PMMS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace PMMS.Administration {
    class WorkFlowStagesDialog extends Serenity.EntityDialog<WorkFlowStagesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Administration {
    class WorkFlowStagesGrid extends Serenity.EntityGrid<WorkFlowStagesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkFlowStagesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Administration {
    class WorkFlowUserTypeDialog extends Serenity.EntityDialog<WorkFlowUserTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Administration {
    class WorkFlowUserTypeGrid extends Serenity.EntityGrid<WorkFlowUserTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkFlowUserTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsDialog extends Serenity.EntityDialog<CustomDashboardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsGrid extends Serenity.EntityGrid<CustomDashboardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomDashboardsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsScriptsDialog extends Common.GridEditorDialog<CustomDashboardsScriptsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: CustomDashboardsScriptsForm;
        constructor();
    }
}
declare namespace PMMS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsScriptsEditor extends Common.GridEditorBase<CustomDashboardsScriptsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomDashboardsScriptsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PMMS.BI {
    class CustomDashboardsScriptsGrid extends Serenity.EntityGrid<CustomDashboardsScriptsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomDashboardsScriptsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.LanguageList {
    function getValue(): string[][];
}
declare namespace PMMS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace PMMS.ScriptInitialization {
}
declare namespace PMMS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace PMMS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace PMMS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace PMMS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace PMMS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace PMMS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SereneLargeFileUpload {
    interface LargeFileUploadEditorOptions {
        urlPrefix?: string;
    }
    class LargeFileUploadEditor extends Serenity.Widget<LargeFileUploadEditorOptions> {
        private entities;
        private toolbar;
        private fileSymbols;
        private uploadInput;
        constructor(div: JQuery, opt: LargeFileUploadEditorOptions);
        protected addFileButtonText(): string;
        protected getToolButtons(): Serenity.ToolButton[];
        protected populate(): void;
        protected updateInterface(): void;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        get_value(): Serenity.UploadedFile[];
        value: Serenity.UploadedFile[];
        set_value(value: Serenity.UploadedFile[]): void;
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
}
declare namespace Serenity {
    namespace UploadHelper {
        function addLargeFileUploadInput(options: UploadInputOptions): JQuery;
    }
}
declare namespace PMMS.Common {
    class FontSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace PMMS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace PMMS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace PMMS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace PMMS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace PMMS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace PMMS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
        URL?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function createFastReportToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
        function executeRemote(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace PMMS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace PMMS.Default {
    class AreasDialog extends Serenity.EntityDialog<AreasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class AreasGrid extends Serenity.EntityGrid<AreasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AreasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class BugsListDialog extends Serenity.EntityDialog<BugsListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class BugsListGrid extends Serenity.EntityGrid<BugsListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BugsListDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class CityDialog extends Serenity.EntityDialog<CityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CityDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ContractorsDialog extends Serenity.EntityDialog<ContractorsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ContractorsGrid extends Serenity.EntityGrid<ContractorsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContractorsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class DirectionDialog extends Serenity.EntityDialog<DirectionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class DirectionGrid extends Serenity.EntityGrid<DirectionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DirectionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class FeaturesDialog extends Serenity.EntityDialog<FeaturesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class FeaturesGrid extends Serenity.EntityGrid<FeaturesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeaturesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class FixListDialog extends Serenity.EntityDialog<FixListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class FixListGrid extends Serenity.EntityGrid<FixListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FixListDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportTypeDialog extends Serenity.EntityDialog<ImportTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportTypeGrid extends Serenity.EntityGrid<ImportTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdDialog extends Serenity.EntityDialog<ImportWizerdRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdGrid extends Serenity.EntityGrid<ImportWizerdRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportWizerdDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdByEqFilesDialog extends Serenity.EntityDialog<ImportWizerdByEqFilesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdByEqFilesGrid extends Serenity.EntityGrid<ImportWizerdByEqFilesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportWizerdByEqFilesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdDataDialog extends Serenity.EntityDialog<ImportWizerdDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: ImportWizerdDataForm;
        protected updateInterface(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected convert(xml: any): void;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdDataGrid extends Serenity.EntityGrid<ImportWizerdDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportWizerdDataDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        getSlickOptions(): Slick.GridOptions;
        getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Default {
    class ImportWizerdLocalDialog extends Serenity.EntityDialog<ImportWizerdLocalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: ImportWizerdLocalForm;
        protected updateInterface(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected convert(xml: any): void;
    }
}
declare namespace PMMS.Default {
    class ImportWizerdLocalGrid extends Serenity.EntityGrid<ImportWizerdLocalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportWizerdLocalDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        getSlickOptions(): Slick.GridOptions;
        getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Default {
    class ProjectsDialog extends Serenity.EntityDialog<ProjectsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ProjectsGrid extends Serenity.EntityGrid<ProjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProjectsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class RoadsDialog extends Serenity.EntityDialog<RoadsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: RoadsForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
        private confirmBeforeSave;
        protected getDrops(): void;
        protected setDrops(): void;
        protected configDrops(): void;
    }
}
declare namespace PMMS.Default {
    class RoadsGrid extends Serenity.EntityGrid<RoadsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoadsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class SectionDialog extends Serenity.EntityDialog<SectionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class SectionGrid extends Serenity.EntityGrid<SectionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SectionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class SectionsDialog extends Serenity.EntityDialog<SectionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class SectionsGrid extends Serenity.EntityGrid<SectionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SectionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkOrderDialog extends Serenity.EntityDialog<WorkOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: WorkOrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
        private showCustomWarning;
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected SetSectionTemplate(workorderitem: any): void;
        protected OpenGisDialog(): void;
        protected GisSetView(workorderitem: any, methodName: any): void;
        protected SetLaneTemplate(workorderitem: any): void;
        protected SetHafriaTemplate(workorderitem: any): void;
        protected getDrops(): void;
        protected setDrops(): void;
    }
}
declare namespace PMMS.Default {
    class WorkOrderGrid extends Serenity.EntityGrid<WorkOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        constructor(container: JQuery);
        getSlickOptions(): Slick.GridOptions;
        protected getItemCssClass(item: WorkOrderRow, index: number): string;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace PMMS.Default {
    class WorkOrderBugDialog extends Common.GridEditorDialog<WorkOrderBugRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: WorkOrderBugForm;
        constructor();
    }
}
declare namespace PMMS.Default {
    class WorkOrderBugEditor extends Common.GridEditorBase<WorkOrderBugRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderBugDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PMMS.Default {
    class WorkOrderBugGrid extends Serenity.EntityGrid<WorkOrderBugRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderBugDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkOrderEmergencyDialog extends Serenity.EntityDialog<WorkOrderEmergencyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkOrderEmergencyGrid extends Serenity.EntityGrid<WorkOrderEmergencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderEmergencyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkOrderFixDialog extends Common.GridEditorDialog<WorkOrderFixRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: WorkOrderFixForm;
        constructor();
    }
}
declare namespace PMMS.Default {
    class WorkOrderFixEditor extends Common.GridEditorBase<WorkOrderFixRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderFixDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PMMS.Default {
    class WorkOrderFixGrid extends Serenity.EntityGrid<WorkOrderFixRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderFixDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Default {
    class WorkOrderOldDialog extends Serenity.EntityDialog<WorkOrderOldRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: WorkOrderOldForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected SetSectionTemplate(workorderitem: any): void;
        protected OpenGisDialog(): void;
        protected GisSetView(workorderitem: any, methodName: any): void;
        protected SetLaneTemplate(workorderitem: any): void;
        protected SetHafriaTemplate(workorderitem: any): void;
    }
}
declare namespace PMMS.Default {
    class WorkOrderOldGrid extends Serenity.EntityGrid<WorkOrderOldRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkOrderOldDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        constructor(container: JQuery);
        getSlickOptions(): Slick.GridOptions;
        protected getItemCssClass(item: WorkOrderRow, index: number): string;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqDialog extends Serenity.EntityDialog<WorkorderBoqRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqGrid extends Serenity.EntityGrid<WorkorderBoqRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkorderBoqDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqItemDialog extends Common.GridEditorDialog<WorkorderBoqItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: WorkorderBoqItemForm;
        categoryID: number;
        constructor();
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqItemEditor extends Common.GridEditorBase<WorkorderBoqItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkorderBoqItemDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        getSlickOptions(): Slick.GridOptions;
        validateEntity(row: any, id: any): boolean;
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace PMMS.Default {
    class WorkorderBoqItemGrid extends Serenity.EntityGrid<WorkorderBoqItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkorderBoqItemDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkorderItemStatusDialog extends Serenity.EntityDialog<WorkorderItemStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class WorkorderItemStatusGrid extends Serenity.EntityGrid<WorkorderItemStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkorderItemStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ZoneDialog extends Serenity.EntityDialog<ZoneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ZoneGrid extends Serenity.EntityGrid<ZoneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ZoneDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Default {
    class ZonesDialog extends Serenity.EntityDialog<ZonesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Default {
    class ZonesGrid extends Serenity.EntityGrid<ZonesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ZonesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class ContentHubDialog extends Serenity.EntityDialog<ContentHubRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: ContentHubForm;
        getToolbarButtons(): Serenity.ToolButton[];
        private confirmBeforeSave;
    }
}
declare namespace PMMS.Distortion {
    class ContentHubGrid extends Serenity.EntityGrid<ContentHubRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContentHubDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class ContentHubCategoryDialog extends Serenity.EntityDialog<ContentHubCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class ContentHubCategoryGrid extends Serenity.EntityGrid<ContentHubCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContentHubCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionCasesDialog extends Serenity.EntityDialog<DistortionCasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: DistortionCasesForm;
        constructor();
        protected afterLoadEntity(): void;
        protected getDrops(): void;
        protected setDrops(): void;
    }
}
declare namespace PMMS.Distortion {
    class DistortionCasesGrid extends Serenity.EntityGrid<DistortionCasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistortionCasesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionCategoryDialog extends Serenity.EntityDialog<DistortionCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionCategoryGrid extends Serenity.EntityGrid<DistortionCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistortionCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionStatusDialog extends Serenity.EntityDialog<DistortionStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionStatusGrid extends Serenity.EntityGrid<DistortionStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistortionStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionSubCategoryDialog extends Serenity.EntityDialog<DistortionSubCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.Distortion {
    class DistortionSubCategoryGrid extends Serenity.EntityGrid<DistortionSubCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistortionSubCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetAttrDialog extends Serenity.EntityDialog<AssetAttrRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetAttrGrid extends Serenity.EntityGrid<AssetAttrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetAttrDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetBuildingDialog extends Serenity.EntityDialog<AssetBuildingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetBuildingGrid extends Serenity.EntityGrid<AssetBuildingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetBuildingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetCategoryDialog extends Serenity.EntityDialog<AssetCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetCategoryGrid extends Serenity.EntityGrid<AssetCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetClassDialog extends Serenity.EntityDialog<AssetClassRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetClassGrid extends Serenity.EntityGrid<AssetClassRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetClassDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace PMMS.EAM {
    class AssetCustAttrDialog extends Common.GridEditorDialog<AssetCustAttrRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: AssetCustAttrForm;
        constructor();
    }
}
declare namespace PMMS.EAM {
    class AssetCustAttrEditor extends Common.GridEditorBase<AssetCustAttrRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetCustAttrDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PMMS.EAM {
    class AssetCustAttrGrid extends Serenity.EntityGrid<AssetCustAttrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetCustAttrDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetDimansionDialog extends Serenity.EntityDialog<AssetDimansionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetDimansionGrid extends Serenity.EntityGrid<AssetDimansionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetDimansionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetDistressDialog extends Serenity.EntityDialog<AssetDistressRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetDistressGrid extends Serenity.EntityGrid<AssetDistressRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetDistressDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetLocationDialog extends Serenity.EntityDialog<AssetLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetLocationGrid extends Serenity.EntityGrid<AssetLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetLocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetServiceStatusDialog extends Serenity.EntityDialog<AssetServiceStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetServiceStatusGrid extends Serenity.EntityGrid<AssetServiceStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetServiceStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetStatusDialog extends Serenity.EntityDialog<AssetStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetStatusGrid extends Serenity.EntityGrid<AssetStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCalcDialog extends Serenity.EntityDialog<AssetSubCalcRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCalcGrid extends Serenity.EntityGrid<AssetSubCalcRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetSubCalcDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryDialog extends Serenity.EntityDialog<AssetSubCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryGrid extends Serenity.EntityGrid<AssetSubCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetSubCategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryLevelDialog extends Serenity.EntityDialog<AssetSubCategoryLevelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetSubCategoryLevelGrid extends Serenity.EntityGrid<AssetSubCategoryLevelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetSubCategoryLevelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetTagsDialog extends Serenity.EntityDialog<AssetTagsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetTagsGrid extends Serenity.EntityGrid<AssetTagsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetTagsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetTypeDialog extends Serenity.EntityDialog<AssetTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetTypeGrid extends Serenity.EntityGrid<AssetTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsDialog extends Serenity.EntityDialog<AssetsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: AssetsForm;
        constructor();
        protected afterLoadEntity(): void;
        protected btnMapping(): void;
        protected getDrops(): void;
        protected setDrops(): void;
        protected setDropClass(): void;
    }
}
declare namespace PMMS.EAM {
    class AssetsGrid extends Serenity.EntityGrid<AssetsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        getSlickOptions(): Slick.GridOptions;
        getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        protected markupReady(): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCondationDialog extends Serenity.EntityDialog<AssetsMaintCondationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCondationGrid extends Serenity.EntityGrid<AssetsMaintCondationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsMaintCondationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCritDialog extends Serenity.EntityDialog<AssetsMaintCritRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintCritGrid extends Serenity.EntityGrid<AssetsMaintCritRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsMaintCritDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintSubSetDialog extends Serenity.EntityDialog<AssetsMaintSubSetRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsMaintSubSetGrid extends Serenity.EntityGrid<AssetsMaintSubSetRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsMaintSubSetDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsSeverityDialog extends Serenity.EntityDialog<AssetsSeverityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsSeverityGrid extends Serenity.EntityGrid<AssetsSeverityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsSeverityDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyDialog extends Serenity.EntityDialog<AssetsSurveyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyDistressEditor extends Common.GridEditorBase<AssetsSurveyDistressRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsSurveyDistressDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyGrid extends Serenity.EntityGrid<AssetsSurveyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsSurveyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyLDialog extends PMMS.EAM.AssetsSurveyDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyDistressDialog extends Common.GridEditorDialog<AssetsSurveyDistressRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected form: AssetsSurveyDistressForm;
        constructor();
    }
}
declare namespace PMMS.EAM {
    class AssetsSurveyDistressGrid extends Serenity.EntityGrid<AssetsSurveyDistressRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsSurveyDistressDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsTotalCalcDialog extends Serenity.EntityDialog<AssetsTotalCalcRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class AssetsTotalCalcGrid extends Serenity.EntityGrid<AssetsTotalCalcRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetsTotalCalcDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.EAM {
    class OpValuesDialog extends Serenity.EntityDialog<OpValuesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
    }
}
declare namespace PMMS.EAM {
    class OpValuesGrid extends Serenity.EntityGrid<OpValuesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpValuesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
    }
}
declare namespace PMMS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PMMS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
