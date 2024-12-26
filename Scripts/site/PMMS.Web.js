var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var AuditLogForm = /** @class */ (function (_super) {
            __extends(AuditLogForm, _super);
            function AuditLogForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AuditLogForm.formKey = 'Administration.AuditLog';
            return AuditLogForm;
        }(Serenity.PrefixedContext));
        Administration.AuditLogForm = AuditLogForm;
        [,
            ['UserId', function () { return Serenity.IntegerEditor; }],
            ['UserName', function () { return Serenity.StringEditor; }],
            ['Action', function () { return Serenity.StringEditor; }],
            ['ChangedOn', function () { return Serenity.DateEditor; }],
            ['TableName', function () { return Serenity.StringEditor; }],
            ['RowId', function () { return Serenity.IntegerEditor; }],
            ['Module', function () { return Serenity.StringEditor; }],
            ['Page', function () { return Serenity.StringEditor; }],
            ['Changes', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AuditLogForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var AuditLogRow;
        (function (AuditLogRow) {
            AuditLogRow.idProperty = 'Id';
            AuditLogRow.nameProperty = 'UserName';
            AuditLogRow.localTextPrefix = 'Administration.AuditLog';
            AuditLogRow.deletePermission = 'Administration:General';
            AuditLogRow.insertPermission = 'Administration:General';
            AuditLogRow.readPermission = 'Administration:General';
            AuditLogRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AuditLogRow.Fields || (AuditLogRow.Fields = {}));
            [
                'Id',
                'UserId',
                'UserName',
                'Action',
                'ChangedOn',
                'TableName',
                'RowId',
                'Module',
                'Page',
                'Changes'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AuditLogRow = Administration.AuditLogRow || (Administration.AuditLogRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var AuditLogService;
        (function (AuditLogService) {
            AuditLogService.baseUrl = 'Administration/AuditLog';
            var Methods;
            (function (Methods) {
            })(Methods = AuditLogService.Methods || (AuditLogService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuditLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuditLogService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AuditLogService.baseUrl + '/' + x;
            });
        })(AuditLogService = Administration.AuditLogService || (Administration.AuditLogService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var CustomReportsForm = /** @class */ (function (_super) {
            __extends(CustomReportsForm, _super);
            function CustomReportsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomReportsForm.formKey = 'Administration.CustomReports';
            return CustomReportsForm;
        }(Serenity.PrefixedContext));
        Administration.CustomReportsForm = CustomReportsForm;
        [,
            ['ReportName', function () { return Serenity.StringEditor; }],
            ['ReportPath', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CustomReportsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var CustomReportsRow;
        (function (CustomReportsRow) {
            CustomReportsRow.idProperty = 'ReportId';
            CustomReportsRow.nameProperty = 'ReportName';
            CustomReportsRow.localTextPrefix = 'Administration.CustomReports';
            CustomReportsRow.deletePermission = 'Administration:General';
            CustomReportsRow.insertPermission = 'Administration:General';
            CustomReportsRow.readPermission = 'Administration:General';
            CustomReportsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CustomReportsRow.Fields || (CustomReportsRow.Fields = {}));
            [
                'ReportId',
                'ReportName',
                'ReportPath'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomReportsRow = Administration.CustomReportsRow || (Administration.CustomReportsRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var CustomReportsService;
        (function (CustomReportsService) {
            CustomReportsService.baseUrl = 'Administration/CustomReports';
            var Methods;
            (function (Methods) {
            })(Methods = CustomReportsService.Methods || (CustomReportsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomReportsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomReportsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomReportsService.baseUrl + '/' + x;
            });
        })(CustomReportsService = Administration.CustomReportsService || (Administration.CustomReportsService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var GisLayerConnectionsForm = /** @class */ (function (_super) {
            __extends(GisLayerConnectionsForm, _super);
            function GisLayerConnectionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GisLayerConnectionsForm.formKey = 'Administration.GisLayerConnections';
            return GisLayerConnectionsForm;
        }(Serenity.PrefixedContext));
        Administration.GisLayerConnectionsForm = GisLayerConnectionsForm;
        [
            ['GisPageName', function () { return Serenity.StringEditor; }],
            ['GisPageContent', function () { return Serenity.StringEditor; }],
            ['GisPageSorting', function () { return Serenity.IntegerEditor; }],
            ['GisurlName', function () { return Serenity.StringEditor; }],
            ['IsPublish', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(GisLayerConnectionsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var GisLayerConnectionsRow;
        (function (GisLayerConnectionsRow) {
            GisLayerConnectionsRow.idProperty = 'GisPageId';
            GisLayerConnectionsRow.nameProperty = 'GisPageName';
            GisLayerConnectionsRow.localTextPrefix = 'Administration.GisLayerConnections';
            GisLayerConnectionsRow.deletePermission = 'Administration:General';
            GisLayerConnectionsRow.insertPermission = 'Administration:General';
            GisLayerConnectionsRow.readPermission = 'Administration:General';
            GisLayerConnectionsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = GisLayerConnectionsRow.Fields || (GisLayerConnectionsRow.Fields = {}));
            [
                'GisPageName',
                'GisPageContent',
                'GisPageSorting',
                'GisPageId',
                'GisurlName',
                'IsPublish'
            ].forEach(function (x) { return Fields[x] = x; });
        })(GisLayerConnectionsRow = Administration.GisLayerConnectionsRow || (Administration.GisLayerConnectionsRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var GisLayerConnectionsService;
        (function (GisLayerConnectionsService) {
            GisLayerConnectionsService.baseUrl = 'Administration/GisLayerConnections';
            var Methods;
            (function (Methods) {
            })(Methods = GisLayerConnectionsService.Methods || (GisLayerConnectionsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GisLayerConnectionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(GisLayerConnectionsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = GisLayerConnectionsService.baseUrl + '/' + x;
            });
        })(GisLayerConnectionsService = Administration.GisLayerConnectionsService || (Administration.GisLayerConnectionsService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGroupsForm = /** @class */ (function (_super) {
            __extends(UserGroupsForm, _super);
            function UserGroupsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserGroupsForm.formKey = 'Administration.UserGroups';
            return UserGroupsForm;
        }(Serenity.PrefixedContext));
        Administration.UserGroupsForm = UserGroupsForm;
        [,
            ['UserGroupName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(UserGroupsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGroupsRow;
        (function (UserGroupsRow) {
            UserGroupsRow.idProperty = 'UserGroupId';
            UserGroupsRow.nameProperty = 'UserGroupName';
            UserGroupsRow.localTextPrefix = 'Administration.UserGroups';
            UserGroupsRow.deletePermission = 'Administration:General';
            UserGroupsRow.insertPermission = 'Administration:General';
            UserGroupsRow.readPermission = 'Administration:General';
            UserGroupsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = UserGroupsRow.Fields || (UserGroupsRow.Fields = {}));
            [
                'UserGroupId',
                'UserGroupName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserGroupsRow = Administration.UserGroupsRow || (Administration.UserGroupsRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGroupsService;
        (function (UserGroupsService) {
            UserGroupsService.baseUrl = 'Administration/UserGroups';
            var Methods;
            (function (Methods) {
            })(Methods = UserGroupsService.Methods || (UserGroupsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserGroupsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserGroupsService.baseUrl + '/' + x;
            });
        })(UserGroupsService = Administration.UserGroupsService || (Administration.UserGroupsService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowStagesForm = /** @class */ (function (_super) {
            __extends(WorkFlowStagesForm, _super);
            function WorkFlowStagesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowStagesForm.formKey = 'Administration.WorkFlowStages';
            return WorkFlowStagesForm;
        }(Serenity.PrefixedContext));
        Administration.WorkFlowStagesForm = WorkFlowStagesForm;
        [,
            ['StageName', function () { return Serenity.StringEditor; }],
            ['OnApproveGo', function () { return Serenity.IntegerEditor; }],
            ['OnRejectGo', function () { return Serenity.IntegerEditor; }],
            ['UserType', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkFlowStagesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowStagesRow;
        (function (WorkFlowStagesRow) {
            WorkFlowStagesRow.idProperty = 'StageId';
            WorkFlowStagesRow.nameProperty = 'StageName';
            WorkFlowStagesRow.localTextPrefix = 'Administration.WorkFlowStages';
            WorkFlowStagesRow.deletePermission = 'Administration:General';
            WorkFlowStagesRow.insertPermission = 'Administration:General';
            WorkFlowStagesRow.readPermission = 'Administration:General';
            WorkFlowStagesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkFlowStagesRow.Fields || (WorkFlowStagesRow.Fields = {}));
            [
                'StageId',
                'StageName',
                'OnApproveGo',
                'OnRejectGo',
                'UserType'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkFlowStagesRow = Administration.WorkFlowStagesRow || (Administration.WorkFlowStagesRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowStagesService;
        (function (WorkFlowStagesService) {
            WorkFlowStagesService.baseUrl = 'Administration/WorkFlowStages';
            var Methods;
            (function (Methods) {
            })(Methods = WorkFlowStagesService.Methods || (WorkFlowStagesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkFlowStagesService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkFlowStagesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkFlowStagesService.baseUrl + '/' + x;
            });
        })(WorkFlowStagesService = Administration.WorkFlowStagesService || (Administration.WorkFlowStagesService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowUserTypeForm = /** @class */ (function (_super) {
            __extends(WorkFlowUserTypeForm, _super);
            function WorkFlowUserTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowUserTypeForm.formKey = 'Administration.WorkFlowUserType';
            return WorkFlowUserTypeForm;
        }(Serenity.PrefixedContext));
        Administration.WorkFlowUserTypeForm = WorkFlowUserTypeForm;
        [,
            ['UserTypeName', function () { return Serenity.StringEditor; }],
            ['AssignType', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkFlowUserTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowUserTypeRow;
        (function (WorkFlowUserTypeRow) {
            WorkFlowUserTypeRow.idProperty = 'UserTypeId';
            WorkFlowUserTypeRow.nameProperty = 'UserTypeName';
            WorkFlowUserTypeRow.localTextPrefix = 'Administration.WorkFlowUserType';
            WorkFlowUserTypeRow.deletePermission = 'Administration:General';
            WorkFlowUserTypeRow.insertPermission = 'Administration:General';
            WorkFlowUserTypeRow.readPermission = 'Administration:General';
            WorkFlowUserTypeRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkFlowUserTypeRow.Fields || (WorkFlowUserTypeRow.Fields = {}));
            [
                'UserTypeId',
                'UserTypeName',
                'AssignType'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkFlowUserTypeRow = Administration.WorkFlowUserTypeRow || (Administration.WorkFlowUserTypeRow = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowUserTypeService;
        (function (WorkFlowUserTypeService) {
            WorkFlowUserTypeService.baseUrl = 'Administration/WorkFlowUserType';
            var Methods;
            (function (Methods) {
            })(Methods = WorkFlowUserTypeService.Methods || (WorkFlowUserTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkFlowUserTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkFlowUserTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkFlowUserTypeService.baseUrl + '/' + x;
            });
        })(WorkFlowUserTypeService = Administration.WorkFlowUserTypeService || (Administration.WorkFlowUserTypeService = {}));
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsForm = /** @class */ (function (_super) {
            __extends(CustomDashboardsForm, _super);
            function CustomDashboardsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomDashboardsForm.formKey = 'BI.CustomDashboards';
            return CustomDashboardsForm;
        }(Serenity.PrefixedContext));
        BI.CustomDashboardsForm = CustomDashboardsForm;
        [,
            ['PageName', function () { return Serenity.StringEditor; }],
            ['PagePath', function () { return Serenity.StringEditor; }],
            ['PageUsers', function () { return Serenity.StringEditor; }],
            ['PageGroups', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CustomDashboardsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsRow;
        (function (CustomDashboardsRow) {
            CustomDashboardsRow.idProperty = 'PageId';
            CustomDashboardsRow.nameProperty = 'PageName';
            CustomDashboardsRow.localTextPrefix = 'BI.CustomDashboards';
            CustomDashboardsRow.deletePermission = 'Administration:General';
            CustomDashboardsRow.insertPermission = 'Administration:General';
            CustomDashboardsRow.readPermission = 'Administration:General';
            CustomDashboardsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CustomDashboardsRow.Fields || (CustomDashboardsRow.Fields = {}));
            [
                'PageId',
                'PageName',
                'PagePath',
                'PageUsers',
                'PageGroups'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomDashboardsRow = BI.CustomDashboardsRow || (BI.CustomDashboardsRow = {}));
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsForm = /** @class */ (function (_super) {
            __extends(CustomDashboardsScriptsForm, _super);
            function CustomDashboardsScriptsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomDashboardsScriptsForm.formKey = 'BI.CustomDashboardsScripts';
            return CustomDashboardsScriptsForm;
        }(Serenity.PrefixedContext));
        BI.CustomDashboardsScriptsForm = CustomDashboardsScriptsForm;
        [,
            ['PageId', function () { return Serenity.IntegerEditor; }],
            ['ScriptName', function () { return Serenity.StringEditor; }],
            ['ScriptApi', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CustomDashboardsScriptsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsRow;
        (function (CustomDashboardsScriptsRow) {
            CustomDashboardsScriptsRow.idProperty = 'ScriptId';
            CustomDashboardsScriptsRow.nameProperty = 'ScriptName';
            CustomDashboardsScriptsRow.localTextPrefix = 'BI.CustomDashboardsScripts';
            CustomDashboardsScriptsRow.deletePermission = 'Administration:General';
            CustomDashboardsScriptsRow.insertPermission = 'Administration:General';
            CustomDashboardsScriptsRow.readPermission = 'Administration:General';
            CustomDashboardsScriptsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CustomDashboardsScriptsRow.Fields || (CustomDashboardsScriptsRow.Fields = {}));
            [
                'ScriptId',
                'PageId',
                'ScriptName',
                'ScriptApi'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomDashboardsScriptsRow = BI.CustomDashboardsScriptsRow || (BI.CustomDashboardsScriptsRow = {}));
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsService;
        (function (CustomDashboardsScriptsService) {
            CustomDashboardsScriptsService.baseUrl = 'BI/CustomDashboardsScripts';
            var Methods;
            (function (Methods) {
            })(Methods = CustomDashboardsScriptsService.Methods || (CustomDashboardsScriptsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomDashboardsScriptsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomDashboardsScriptsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomDashboardsScriptsService.baseUrl + '/' + x;
            });
        })(CustomDashboardsScriptsService = BI.CustomDashboardsScriptsService || (BI.CustomDashboardsScriptsService = {}));
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsService;
        (function (CustomDashboardsService) {
            CustomDashboardsService.baseUrl = 'BI/CustomDashboards';
            var Methods;
            (function (Methods) {
            })(Methods = CustomDashboardsService.Methods || (CustomDashboardsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomDashboardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomDashboardsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomDashboardsService.baseUrl + '/' + x;
            });
        })(CustomDashboardsService = BI.CustomDashboardsService || (BI.CustomDashboardsService = {}));
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AreasForm = /** @class */ (function (_super) {
            __extends(AreasForm, _super);
            function AreasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AreasForm.formKey = 'Default.Areas';
            return AreasForm;
        }(Serenity.PrefixedContext));
        Default.AreasForm = AreasForm;
        [
            ['AreaName', function () { return Serenity.StringEditor; }],
            ['ZoneNo', function () { return Serenity.DecimalEditor; }],
            ['AreaNo', function () { return Serenity.DecimalEditor; }],
            ['CityNo', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AreasForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AreasRow;
        (function (AreasRow) {
            AreasRow.idProperty = 'ItemId';
            AreasRow.nameProperty = 'AreaName';
            AreasRow.localTextPrefix = 'Default.Areas';
            AreasRow.deletePermission = 'Administration:General';
            AreasRow.insertPermission = 'Administration:General';
            AreasRow.readPermission = 'Administration:General';
            AreasRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AreasRow.Fields || (AreasRow.Fields = {}));
            [
                'AreaName',
                'ZoneNo',
                'AreaNo',
                'CityNo',
                'ItemId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AreasRow = Default.AreasRow || (Default.AreasRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AreasService;
        (function (AreasService) {
            AreasService.baseUrl = 'Default/Areas';
            var Methods;
            (function (Methods) {
            })(Methods = AreasService.Methods || (AreasService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AreasService[x] = function (r, s, o) {
                    return Q.serviceRequest(AreasService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AreasService.baseUrl + '/' + x;
            });
        })(AreasService = Default.AreasService || (Default.AreasService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetAttrForm = /** @class */ (function (_super) {
            __extends(AssetAttrForm, _super);
            function AssetAttrForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetAttrForm.formKey = 'Default.AssetAttr';
            return AssetAttrForm;
        }(Serenity.PrefixedContext));
        Default.AssetAttrForm = AssetAttrForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetAttrForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetAttrRow;
        (function (AssetAttrRow) {
            AssetAttrRow.idProperty = 'ItemId';
            AssetAttrRow.nameProperty = 'ItemName';
            AssetAttrRow.localTextPrefix = 'Default.AssetAttr';
            AssetAttrRow.deletePermission = 'Administration:General';
            AssetAttrRow.insertPermission = 'Administration:General';
            AssetAttrRow.readPermission = 'Administration:General';
            AssetAttrRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetAttrRow.Fields || (AssetAttrRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetAttrRow = Default.AssetAttrRow || (Default.AssetAttrRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetAttrService;
        (function (AssetAttrService) {
            AssetAttrService.baseUrl = 'Default/AssetAttr';
            var Methods;
            (function (Methods) {
            })(Methods = AssetAttrService.Methods || (AssetAttrService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetAttrService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetAttrService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetAttrService.baseUrl + '/' + x;
            });
        })(AssetAttrService = Default.AssetAttrService || (Default.AssetAttrService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetDistressForm = /** @class */ (function (_super) {
            __extends(AssetDistressForm, _super);
            function AssetDistressForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDistressForm.formKey = 'Default.AssetDistress';
            return AssetDistressForm;
        }(Serenity.PrefixedContext));
        Default.AssetDistressForm = AssetDistressForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetDistressForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetDistressRow;
        (function (AssetDistressRow) {
            AssetDistressRow.idProperty = 'ItemId';
            AssetDistressRow.nameProperty = 'ItemName';
            AssetDistressRow.localTextPrefix = 'Default.AssetDistress';
            AssetDistressRow.deletePermission = 'Administration:General';
            AssetDistressRow.insertPermission = 'Administration:General';
            AssetDistressRow.readPermission = 'Administration:General';
            AssetDistressRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetDistressRow.Fields || (AssetDistressRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetDistressRow = Default.AssetDistressRow || (Default.AssetDistressRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetDistressService;
        (function (AssetDistressService) {
            AssetDistressService.baseUrl = 'Default/AssetDistress';
            var Methods;
            (function (Methods) {
            })(Methods = AssetDistressService.Methods || (AssetDistressService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetDistressService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetDistressService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetDistressService.baseUrl + '/' + x;
            });
        })(AssetDistressService = Default.AssetDistressService || (Default.AssetDistressService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetSubCategoryLevelForm = /** @class */ (function (_super) {
            __extends(AssetSubCategoryLevelForm, _super);
            function AssetSubCategoryLevelForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryLevelForm.formKey = 'Default.AssetSubCategoryLevel';
            return AssetSubCategoryLevelForm;
        }(Serenity.PrefixedContext));
        Default.AssetSubCategoryLevelForm = AssetSubCategoryLevelForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ParentId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetSubCategoryLevelForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetSubCategoryLevelRow;
        (function (AssetSubCategoryLevelRow) {
            AssetSubCategoryLevelRow.idProperty = 'ItemId';
            AssetSubCategoryLevelRow.nameProperty = 'ItemName';
            AssetSubCategoryLevelRow.localTextPrefix = 'Default.AssetSubCategoryLevel';
            AssetSubCategoryLevelRow.deletePermission = 'Administration:General';
            AssetSubCategoryLevelRow.insertPermission = 'Administration:General';
            AssetSubCategoryLevelRow.readPermission = 'Administration:General';
            AssetSubCategoryLevelRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetSubCategoryLevelRow.Fields || (AssetSubCategoryLevelRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ParentId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetSubCategoryLevelRow = Default.AssetSubCategoryLevelRow || (Default.AssetSubCategoryLevelRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetSubCategoryLevelService;
        (function (AssetSubCategoryLevelService) {
            AssetSubCategoryLevelService.baseUrl = 'Default/AssetSubCategoryLevel';
            var Methods;
            (function (Methods) {
            })(Methods = AssetSubCategoryLevelService.Methods || (AssetSubCategoryLevelService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetSubCategoryLevelService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetSubCategoryLevelService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetSubCategoryLevelService.baseUrl + '/' + x;
            });
        })(AssetSubCategoryLevelService = Default.AssetSubCategoryLevelService || (Default.AssetSubCategoryLevelService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetTagsForm = /** @class */ (function (_super) {
            __extends(AssetTagsForm, _super);
            function AssetTagsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTagsForm.formKey = 'Default.AssetTags';
            return AssetTagsForm;
        }(Serenity.PrefixedContext));
        Default.AssetTagsForm = AssetTagsForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetTagsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetTagsRow;
        (function (AssetTagsRow) {
            AssetTagsRow.idProperty = 'ItemId';
            AssetTagsRow.nameProperty = 'ItemName';
            AssetTagsRow.localTextPrefix = 'Default.AssetTags';
            AssetTagsRow.deletePermission = 'Administration:General';
            AssetTagsRow.insertPermission = 'Administration:General';
            AssetTagsRow.readPermission = 'Administration:General';
            AssetTagsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetTagsRow.Fields || (AssetTagsRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetTagsRow = Default.AssetTagsRow || (Default.AssetTagsRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AssetTagsService;
        (function (AssetTagsService) {
            AssetTagsService.baseUrl = 'Default/AssetTags';
            var Methods;
            (function (Methods) {
            })(Methods = AssetTagsService.Methods || (AssetTagsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetTagsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetTagsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetTagsService.baseUrl + '/' + x;
            });
        })(AssetTagsService = Default.AssetTagsService || (Default.AssetTagsService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var BugsListForm = /** @class */ (function (_super) {
            __extends(BugsListForm, _super);
            function BugsListForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BugsListForm.formKey = 'Default.BugsList';
            return BugsListForm;
        }(Serenity.PrefixedContext));
        Default.BugsListForm = BugsListForm;
        [].forEach(function (x) { return Object.defineProperty(BugsListForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var BugsListRow;
        (function (BugsListRow) {
            BugsListRow.idProperty = 'ItemName';
            BugsListRow.nameProperty = 'ItemName';
            BugsListRow.localTextPrefix = 'Default.BugsList';
            BugsListRow.deletePermission = 'Administration:General';
            BugsListRow.insertPermission = 'Administration:General';
            BugsListRow.readPermission = 'Administration:General';
            BugsListRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = BugsListRow.Fields || (BugsListRow.Fields = {}));
            [
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BugsListRow = Default.BugsListRow || (Default.BugsListRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var BugsListService;
        (function (BugsListService) {
            BugsListService.baseUrl = 'Default/BugsList';
            var Methods;
            (function (Methods) {
            })(Methods = BugsListService.Methods || (BugsListService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BugsListService[x] = function (r, s, o) {
                    return Q.serviceRequest(BugsListService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BugsListService.baseUrl + '/' + x;
            });
        })(BugsListService = Default.BugsListService || (Default.BugsListService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var CityForm = /** @class */ (function (_super) {
            __extends(CityForm, _super);
            function CityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CityForm.formKey = 'Default.City';
            return CityForm;
        }(Serenity.PrefixedContext));
        Default.CityForm = CityForm;
        [,
            ['Name', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CityForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var CityRow;
        (function (CityRow) {
            CityRow.idProperty = 'No';
            CityRow.nameProperty = 'Name';
            CityRow.localTextPrefix = 'Default.City';
            CityRow.deletePermission = 'Administration:General';
            CityRow.insertPermission = 'Administration:General';
            CityRow.readPermission = 'Administration:General';
            CityRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CityRow.Fields || (CityRow.Fields = {}));
            [
                'No',
                'Name'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CityRow = Default.CityRow || (Default.CityRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var CityService;
        (function (CityService) {
            CityService.baseUrl = 'Default/City';
            var Methods;
            (function (Methods) {
            })(Methods = CityService.Methods || (CityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CityService[x] = function (r, s, o) {
                    return Q.serviceRequest(CityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CityService.baseUrl + '/' + x;
            });
        })(CityService = Default.CityService || (Default.CityService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ContractorsForm = /** @class */ (function (_super) {
            __extends(ContractorsForm, _super);
            function ContractorsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContractorsForm.formKey = 'Default.Contractors';
            return ContractorsForm;
        }(Serenity.PrefixedContext));
        Default.ContractorsForm = ContractorsForm;
        [,
            ['CompanyName', function () { return Serenity.StringEditor; }],
            ['ContactName', function () { return Serenity.StringEditor; }],
            ['StreetAddress', function () { return Serenity.StringEditor; }],
            ['PostalCode', function () { return Serenity.StringEditor; }],
            ['City', function () { return Serenity.StringEditor; }],
            ['Email', function () { return Serenity.StringEditor; }],
            ['MobileNumber', function () { return Serenity.StringEditor; }],
            ['PhoneNumber', function () { return Serenity.StringEditor; }],
            ['FaxNumber', function () { return Serenity.StringEditor; }],
            ['CreationDate', function () { return Serenity.DateEditor; }],
            ['Country', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ContractorsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ContractorsRow;
        (function (ContractorsRow) {
            ContractorsRow.idProperty = 'ContractorNo';
            ContractorsRow.nameProperty = 'CompanyName';
            ContractorsRow.localTextPrefix = 'Default.Contractors';
            ContractorsRow.deletePermission = 'Administration:General';
            ContractorsRow.insertPermission = 'Administration:General';
            ContractorsRow.readPermission = 'Administration:General';
            ContractorsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ContractorsRow.Fields || (ContractorsRow.Fields = {}));
            [
                'ContractorNo',
                'CompanyName',
                'ContactName',
                'StreetAddress',
                'PostalCode',
                'City',
                'Email',
                'MobileNumber',
                'PhoneNumber',
                'FaxNumber',
                'CreationDate',
                'Country'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ContractorsRow = Default.ContractorsRow || (Default.ContractorsRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ContractorsService;
        (function (ContractorsService) {
            ContractorsService.baseUrl = 'Default/Contractors';
            var Methods;
            (function (Methods) {
            })(Methods = ContractorsService.Methods || (ContractorsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContractorsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContractorsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ContractorsService.baseUrl + '/' + x;
            });
        })(ContractorsService = Default.ContractorsService || (Default.ContractorsService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DepartmentForm = /** @class */ (function (_super) {
            __extends(DepartmentForm, _super);
            function DepartmentForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DepartmentForm.formKey = 'Default.Department';
            return DepartmentForm;
        }(Serenity.PrefixedContext));
        Default.DepartmentForm = DepartmentForm;
        [,
            ['DepartmentName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DepartmentForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DepartmentRow;
        (function (DepartmentRow) {
            DepartmentRow.idProperty = 'DepartmentId';
            DepartmentRow.nameProperty = 'DepartmentName';
            DepartmentRow.localTextPrefix = 'Default.Department';
            DepartmentRow.deletePermission = 'Administration:General';
            DepartmentRow.insertPermission = 'Administration:General';
            DepartmentRow.readPermission = 'Administration:General';
            DepartmentRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DepartmentRow.Fields || (DepartmentRow.Fields = {}));
            [
                'DepartmentId',
                'DepartmentName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DepartmentRow = Default.DepartmentRow || (Default.DepartmentRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DepartmentService;
        (function (DepartmentService) {
            DepartmentService.baseUrl = 'Default/Department';
            var Methods;
            (function (Methods) {
            })(Methods = DepartmentService.Methods || (DepartmentService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DepartmentService.baseUrl + '/' + x;
            });
        })(DepartmentService = Default.DepartmentService || (Default.DepartmentService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DirectionForm = /** @class */ (function (_super) {
            __extends(DirectionForm, _super);
            function DirectionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DirectionForm.formKey = 'Default.Direction';
            return DirectionForm;
        }(Serenity.PrefixedContext));
        Default.DirectionForm = DirectionForm;
        [
            ['DirectionNo', function () { return Serenity.StringEditor; }],
            ['DirectionShortName', function () { return Serenity.StringEditor; }],
            ['DirectionDescription', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DirectionForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DirectionRow;
        (function (DirectionRow) {
            DirectionRow.idProperty = 'ItemId';
            DirectionRow.nameProperty = 'DirectionNo';
            DirectionRow.localTextPrefix = 'Default.Direction';
            DirectionRow.deletePermission = 'Administration:General';
            DirectionRow.insertPermission = 'Administration:General';
            DirectionRow.readPermission = 'Administration:General';
            DirectionRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DirectionRow.Fields || (DirectionRow.Fields = {}));
            [
                'DirectionNo',
                'DirectionShortName',
                'DirectionDescription',
                'ItemId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DirectionRow = Default.DirectionRow || (Default.DirectionRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DirectionService;
        (function (DirectionService) {
            DirectionService.baseUrl = 'Default/Direction';
            var Methods;
            (function (Methods) {
            })(Methods = DirectionService.Methods || (DirectionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DirectionService[x] = function (r, s, o) {
                    return Q.serviceRequest(DirectionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DirectionService.baseUrl + '/' + x;
            });
        })(DirectionService = Default.DirectionService || (Default.DirectionService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FeaturesForm = /** @class */ (function (_super) {
            __extends(FeaturesForm, _super);
            function FeaturesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FeaturesForm.formKey = 'Default.Features';
            return FeaturesForm;
        }(Serenity.PrefixedContext));
        Default.FeaturesForm = FeaturesForm;
        [
            ['FeatureNo', function () { return Serenity.StringEditor; }],
            ['FeatureShortName', function () { return Serenity.StringEditor; }],
            ['FeatureDescription', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(FeaturesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FeaturesRow;
        (function (FeaturesRow) {
            FeaturesRow.idProperty = 'ItemId';
            FeaturesRow.nameProperty = 'FeatureNo';
            FeaturesRow.localTextPrefix = 'Default.Features';
            FeaturesRow.deletePermission = 'Administration:General';
            FeaturesRow.insertPermission = 'Administration:General';
            FeaturesRow.readPermission = 'Administration:General';
            FeaturesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = FeaturesRow.Fields || (FeaturesRow.Fields = {}));
            [
                'FeatureNo',
                'FeatureShortName',
                'FeatureDescription',
                'ItemId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(FeaturesRow = Default.FeaturesRow || (Default.FeaturesRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FeaturesService;
        (function (FeaturesService) {
            FeaturesService.baseUrl = 'Default/Features';
            var Methods;
            (function (Methods) {
            })(Methods = FeaturesService.Methods || (FeaturesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FeaturesService[x] = function (r, s, o) {
                    return Q.serviceRequest(FeaturesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = FeaturesService.baseUrl + '/' + x;
            });
        })(FeaturesService = Default.FeaturesService || (Default.FeaturesService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FixListForm = /** @class */ (function (_super) {
            __extends(FixListForm, _super);
            function FixListForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FixListForm.formKey = 'Default.FixList';
            return FixListForm;
        }(Serenity.PrefixedContext));
        Default.FixListForm = FixListForm;
        [].forEach(function (x) { return Object.defineProperty(FixListForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FixListRow;
        (function (FixListRow) {
            FixListRow.idProperty = 'ItemName';
            FixListRow.nameProperty = 'ItemName';
            FixListRow.localTextPrefix = 'Default.FixList';
            FixListRow.deletePermission = 'Administration:General';
            FixListRow.insertPermission = 'Administration:General';
            FixListRow.readPermission = 'Administration:General';
            FixListRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = FixListRow.Fields || (FixListRow.Fields = {}));
            [
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(FixListRow = Default.FixListRow || (Default.FixListRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FixListService;
        (function (FixListService) {
            FixListService.baseUrl = 'Default/FixList';
            var Methods;
            (function (Methods) {
            })(Methods = FixListService.Methods || (FixListService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FixListService[x] = function (r, s, o) {
                    return Q.serviceRequest(FixListService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = FixListService.baseUrl + '/' + x;
            });
        })(FixListService = Default.FixListService || (Default.FixListService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportTypeForm = /** @class */ (function (_super) {
            __extends(ImportTypeForm, _super);
            function ImportTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportTypeForm.formKey = 'Default.ImportType';
            return ImportTypeForm;
        }(Serenity.PrefixedContext));
        Default.ImportTypeForm = ImportTypeForm;
        [,
            ['TypeName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ImportTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportTypeRow;
        (function (ImportTypeRow) {
            ImportTypeRow.idProperty = 'TypeId';
            ImportTypeRow.nameProperty = 'TypeName';
            ImportTypeRow.localTextPrefix = 'Default.ImportType';
            ImportTypeRow.deletePermission = 'Administration:General';
            ImportTypeRow.insertPermission = 'Administration:General';
            ImportTypeRow.readPermission = 'Administration:General';
            ImportTypeRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ImportTypeRow.Fields || (ImportTypeRow.Fields = {}));
            [
                'TypeId',
                'TypeName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ImportTypeRow = Default.ImportTypeRow || (Default.ImportTypeRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportTypeService;
        (function (ImportTypeService) {
            ImportTypeService.baseUrl = 'Default/ImportType';
            var Methods;
            (function (Methods) {
            })(Methods = ImportTypeService.Methods || (ImportTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ImportTypeService.baseUrl + '/' + x;
            });
        })(ImportTypeService = Default.ImportTypeService || (Default.ImportTypeService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdByEqFilesForm = /** @class */ (function (_super) {
            __extends(ImportWizerdByEqFilesForm, _super);
            function ImportWizerdByEqFilesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdByEqFilesForm.formKey = 'Default.ImportWizerdByEqFiles';
            return ImportWizerdByEqFilesForm;
        }(Serenity.PrefixedContext));
        Default.ImportWizerdByEqFilesForm = ImportWizerdByEqFilesForm;
        [
            ['FileName', function () { return Serenity.StringEditor; }],
            ['ImportType', function () { return Serenity.StringEditor; }],
            ['ImportDate', function () { return Serenity.DateEditor; }],
            ['ImportRef', function () { return Serenity.StringEditor; }],
            ['ImportBy', function () { return Serenity.StringEditor; }],
            ['Status', function () { return Serenity.StringEditor; }],
            ['StatusMessage', function () { return Serenity.StringEditor; }],
            ['SurvayDate', function () { return Serenity.DateEditor; }],
            ['GroupSurvey', function () { return Serenity.IntegerEditor; }],
            ['ImportUrl', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ImportWizerdByEqFilesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdByEqFilesRow;
        (function (ImportWizerdByEqFilesRow) {
            ImportWizerdByEqFilesRow.idProperty = 'ImportId';
            ImportWizerdByEqFilesRow.nameProperty = 'FileName';
            ImportWizerdByEqFilesRow.localTextPrefix = 'Default.ImportWizerdByEqFiles';
            ImportWizerdByEqFilesRow.deletePermission = 'Apps:Data:ImportDataEntry';
            ImportWizerdByEqFilesRow.insertPermission = 'Apps:Data:ImportDataEntry';
            ImportWizerdByEqFilesRow.readPermission = 'Apps:Data:ImportDataEntry';
            ImportWizerdByEqFilesRow.updatePermission = 'Apps:Data:ImportDataEntry';
            var Fields;
            (function (Fields) {
            })(Fields = ImportWizerdByEqFilesRow.Fields || (ImportWizerdByEqFilesRow.Fields = {}));
            [
                'FileName',
                'ImportType',
                'ImportDate',
                'ImportRef',
                'ImportBy',
                'ImportId',
                'Status',
                'StatusMessage',
                'SurvayDate',
                'GroupSurvey',
                'ImportUrl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ImportWizerdByEqFilesRow = Default.ImportWizerdByEqFilesRow || (Default.ImportWizerdByEqFilesRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdByEqFilesService;
        (function (ImportWizerdByEqFilesService) {
            ImportWizerdByEqFilesService.baseUrl = 'Default/ImportWizerdByEqFiles';
            var Methods;
            (function (Methods) {
            })(Methods = ImportWizerdByEqFilesService.Methods || (ImportWizerdByEqFilesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportWizerdByEqFilesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportWizerdByEqFilesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ImportWizerdByEqFilesService.baseUrl + '/' + x;
            });
        })(ImportWizerdByEqFilesService = Default.ImportWizerdByEqFilesService || (Default.ImportWizerdByEqFilesService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDataForm = /** @class */ (function (_super) {
            __extends(ImportWizerdDataForm, _super);
            function ImportWizerdDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdDataForm.formKey = 'Default.ImportWizerdData';
            return ImportWizerdDataForm;
        }(Serenity.PrefixedContext));
        Default.ImportWizerdDataForm = ImportWizerdDataForm;
        [
            ['FileName', function () { return Serenity.StringEditor; }],
            ['ImportType', function () { return Serenity.StringEditor; }],
            ['ImportDate', function () { return Serenity.DateEditor; }],
            ['ImportRef', function () { return Serenity.StringEditor; }],
            ['ImportBy', function () { return Serenity.StringEditor; }],
            ['ContentUrl', function () { return Serenity.StringEditor; }],
            ['StatusMessage', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ImportWizerdDataForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDataRow;
        (function (ImportWizerdDataRow) {
            ImportWizerdDataRow.idProperty = 'ImportId';
            ImportWizerdDataRow.nameProperty = 'FileName';
            ImportWizerdDataRow.localTextPrefix = 'Default.ImportWizerdData';
            ImportWizerdDataRow.deletePermission = 'Administration:General';
            ImportWizerdDataRow.insertPermission = 'Administration:General';
            ImportWizerdDataRow.readPermission = 'Administration:General';
            ImportWizerdDataRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ImportWizerdDataRow.Fields || (ImportWizerdDataRow.Fields = {}));
            [
                'FileName',
                'ImportType',
                'ImportDate',
                'ImportRef',
                'ImportBy',
                'ImportId',
                'ContentUrl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ImportWizerdDataRow = Default.ImportWizerdDataRow || (Default.ImportWizerdDataRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDataService;
        (function (ImportWizerdDataService) {
            ImportWizerdDataService.baseUrl = 'Default/ImportWizerdData';
            var Methods;
            (function (Methods) {
            })(Methods = ImportWizerdDataService.Methods || (ImportWizerdDataService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportWizerdDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportWizerdDataService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ImportWizerdDataService.baseUrl + '/' + x;
            });
        })(ImportWizerdDataService = Default.ImportWizerdDataService || (Default.ImportWizerdDataService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdForm = /** @class */ (function (_super) {
            __extends(ImportWizerdForm, _super);
            function ImportWizerdForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdForm.formKey = 'Default.ImportWizerd';
            return ImportWizerdForm;
        }(Serenity.PrefixedContext));
        Default.ImportWizerdForm = ImportWizerdForm;
        [
            ['FileName', function () { return Serenity.StringEditor; }],
            ['ImportType', function () { return Serenity.StringEditor; }],
            ['ImportDate', function () { return Serenity.StringEditor; }],
            ['ImportRef', function () { return Serenity.StringEditor; }],
            ['ImportBy', function () { return Serenity.StringEditor; }],
            ['ContentUrl', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ImportWizerdForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdLocalForm = /** @class */ (function (_super) {
            __extends(ImportWizerdLocalForm, _super);
            function ImportWizerdLocalForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdLocalForm.formKey = 'Default.ImportWizerdLocal';
            return ImportWizerdLocalForm;
        }(Serenity.PrefixedContext));
        Default.ImportWizerdLocalForm = ImportWizerdLocalForm;
        [
            ['FileName', function () { return Serenity.StringEditor; }],
            ['ImportType', function () { return Serenity.StringEditor; }],
            ['ImportDate', function () { return Serenity.DateEditor; }],
            ['ImportRef', function () { return Serenity.StringEditor; }],
            ['ImportBy', function () { return Serenity.StringEditor; }],
            ['ContentUrl', function () { return Serenity.StringEditor; }],
            ['ContentUrlFwd', function () { return Serenity.StringEditor; }],
            ['ContentUrlIri', function () { return Serenity.StringEditor; }],
            ['ContentUrlSkid', function () { return Serenity.StringEditor; }],
            ['Status', function () { return Serenity.StringEditor; }],
            ['StatusMessage', function () { return Serenity.StringEditor; }],
            ['SurvayDate', function () { return Serenity.DateEditor; }],
            ['DisplayStreet', function () { return Serenity.StringEditor; }],
            ['DisplayLane', function () { return Serenity.StringEditor; }],
            ['DisplayArea', function () { return Serenity.StringEditor; }],
            ['DisplayCity', function () { return Serenity.StringEditor; }],
            ['DisplaySection', function () { return Serenity.StringEditor; }],
            ['DisplayStreetName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ImportWizerdLocalForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdLocalRow;
        (function (ImportWizerdLocalRow) {
            ImportWizerdLocalRow.idProperty = 'ImportId';
            ImportWizerdLocalRow.nameProperty = 'FileName';
            ImportWizerdLocalRow.localTextPrefix = 'Default.ImportWizerdLocal';
            ImportWizerdLocalRow.deletePermission = 'Administration:General';
            ImportWizerdLocalRow.insertPermission = 'Administration:General';
            ImportWizerdLocalRow.readPermission = 'Administration:General';
            ImportWizerdLocalRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ImportWizerdLocalRow.Fields || (ImportWizerdLocalRow.Fields = {}));
            [
                'FileName',
                'ImportType',
                'ImportDate',
                'ImportRef',
                'ImportBy',
                'ImportId',
                'ContentUrl',
                'ContentUrlFwd',
                'ContentUrlIri',
                'ContentUrlSkid',
                'Status',
                'StatusMessage',
                'SurvayDate',
                'DisplayStreet',
                'DisplayLane',
                'DisplayArea',
                'DisplayCity',
                'DisplaySection',
                'DisplayStreetName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ImportWizerdLocalRow = Default.ImportWizerdLocalRow || (Default.ImportWizerdLocalRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdLocalService;
        (function (ImportWizerdLocalService) {
            ImportWizerdLocalService.baseUrl = 'Default/ImportWizerdLocal';
            var Methods;
            (function (Methods) {
            })(Methods = ImportWizerdLocalService.Methods || (ImportWizerdLocalService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportWizerdLocalService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportWizerdLocalService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ImportWizerdLocalService.baseUrl + '/' + x;
            });
        })(ImportWizerdLocalService = Default.ImportWizerdLocalService || (Default.ImportWizerdLocalService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdRow;
        (function (ImportWizerdRow) {
            ImportWizerdRow.idProperty = 'ImportId';
            ImportWizerdRow.nameProperty = 'FileName';
            ImportWizerdRow.localTextPrefix = 'Default.ImportWizerd';
            ImportWizerdRow.deletePermission = 'Administration:General';
            ImportWizerdRow.insertPermission = 'Administration:General';
            ImportWizerdRow.readPermission = 'Administration:General';
            ImportWizerdRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ImportWizerdRow.Fields || (ImportWizerdRow.Fields = {}));
            [
                'FileName',
                'ImportType',
                'ImportDate',
                'ImportRef',
                'ImportBy',
                'ImportId',
                'ContentUrl'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ImportWizerdRow = Default.ImportWizerdRow || (Default.ImportWizerdRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdService;
        (function (ImportWizerdService) {
            ImportWizerdService.baseUrl = 'Default/ImportWizerd';
            var Methods;
            (function (Methods) {
            })(Methods = ImportWizerdService.Methods || (ImportWizerdService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'DeleteAndRollBack',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportWizerdService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportWizerdService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ImportWizerdService.baseUrl + '/' + x;
            });
        })(ImportWizerdService = Default.ImportWizerdService || (Default.ImportWizerdService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ProjectsForm = /** @class */ (function (_super) {
            __extends(ProjectsForm, _super);
            function ProjectsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProjectsForm.formKey = 'Default.Projects';
            return ProjectsForm;
        }(Serenity.PrefixedContext));
        Default.ProjectsForm = ProjectsForm;
        [,
            ['ProjectName', function () { return Serenity.StringEditor; }],
            ['ProjectLocation', function () { return Serenity.StringEditor; }],
            ['ContractorName', function () { return Serenity.StringEditor; }],
            ['Maplocation', function () { return Serenity.StringEditor; }],
            ['ProjectAttachment', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ProjectsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ProjectsRow;
        (function (ProjectsRow) {
            ProjectsRow.idProperty = 'ProjectId';
            ProjectsRow.nameProperty = 'ProjectName';
            ProjectsRow.localTextPrefix = 'Default.Projects';
            ProjectsRow.deletePermission = 'Administration:General';
            ProjectsRow.insertPermission = 'Administration:General';
            ProjectsRow.readPermission = 'Administration:General';
            ProjectsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ProjectsRow.Fields || (ProjectsRow.Fields = {}));
            [
                'ProjectId',
                'ProjectName',
                'ProjectLocation',
                'ContractorName',
                'Maplocation',
                'ProjectAttachment'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProjectsRow = Default.ProjectsRow || (Default.ProjectsRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ProjectsService;
        (function (ProjectsService) {
            ProjectsService.baseUrl = 'Default/Projects';
            var Methods;
            (function (Methods) {
            })(Methods = ProjectsService.Methods || (ProjectsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProjectsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProjectsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProjectsService.baseUrl + '/' + x;
            });
        })(ProjectsService = Default.ProjectsService || (Default.ProjectsService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var RoadsForm = /** @class */ (function (_super) {
            __extends(RoadsForm, _super);
            function RoadsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoadsForm.formKey = 'Default.Roads';
            return RoadsForm;
        }(Serenity.PrefixedContext));
        Default.RoadsForm = RoadsForm;
        [
            ['RoadNo', function () { return Serenity.StringEditor; }],
            ['RoadName', function () { return Serenity.StringEditor; }],
            ['IsActive', function () { return Serenity.BooleanEditor; }],
        ].forEach(function (x) { return Object.defineProperty(RoadsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var RoadsRow;
        (function (RoadsRow) {
            RoadsRow.idProperty = 'ItemId';
            RoadsRow.nameProperty = 'RoadName';
            RoadsRow.localTextPrefix = 'Default.Roads';
            RoadsRow.deletePermission = 'Administration:General';
            RoadsRow.insertPermission = 'Administration:General';
            RoadsRow.readPermission = 'Administration:General';
            RoadsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = RoadsRow.Fields || (RoadsRow.Fields = {}));
            [
                'RoadNo',
                'RoadName',
                'AreaNo',
                'RoadType',
                'CityNo',
                'ZoneNo',
                'ItemId',
                'IsActive'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoadsRow = Default.RoadsRow || (Default.RoadsRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var RoadsService;
        (function (RoadsService) {
            RoadsService.baseUrl = 'Default/Roads';
            var Methods;
            (function (Methods) {
            })(Methods = RoadsService.Methods || (RoadsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoadsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoadsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoadsService.baseUrl + '/' + x;
            });
        })(RoadsService = Default.RoadsService || (Default.RoadsService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionForm = /** @class */ (function (_super) {
            __extends(SectionForm, _super);
            function SectionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionForm.formKey = 'Default.Section';
            return SectionForm;
        }(Serenity.PrefixedContext));
        Default.SectionForm = SectionForm;
        [
            ['RoadNo', function () { return Serenity.StringEditor; }],
            ['AreaNo', function () { return Serenity.DecimalEditor; }],
            ['CityNo', function () { return Serenity.StringEditor; }],
            ['ZoneNo', function () { return Serenity.StringEditor; }],
            ['SectionNo', function () { return Serenity.StringEditor; }],
            ['SecName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SectionForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionRow;
        (function (SectionRow) {
            SectionRow.idProperty = 'ItemId';
            SectionRow.nameProperty = 'RoadNo';
            SectionRow.localTextPrefix = 'Default.Section';
            SectionRow.deletePermission = 'Administration:General';
            SectionRow.insertPermission = 'Administration:General';
            SectionRow.readPermission = 'Administration:General';
            SectionRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = SectionRow.Fields || (SectionRow.Fields = {}));
            [
                'RoadNo',
                'AreaNo',
                'CityNo',
                'ZoneNo',
                'SectionNo',
                'ItemId',
                'SecName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SectionRow = Default.SectionRow || (Default.SectionRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionService;
        (function (SectionService) {
            SectionService.baseUrl = 'Default/Section';
            var Methods;
            (function (Methods) {
            })(Methods = SectionService.Methods || (SectionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SectionService[x] = function (r, s, o) {
                    return Q.serviceRequest(SectionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SectionService.baseUrl + '/' + x;
            });
        })(SectionService = Default.SectionService || (Default.SectionService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionsForm = /** @class */ (function (_super) {
            __extends(SectionsForm, _super);
            function SectionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionsForm.formKey = 'Default.Sections';
            return SectionsForm;
        }(Serenity.PrefixedContext));
        Default.SectionsForm = SectionsForm;
        [
            ['RoadNo', function () { return Serenity.DecimalEditor; }],
            ['AreaNo', function () { return Serenity.DecimalEditor; }],
            ['CityNo', function () { return Serenity.DecimalEditor; }],
            ['ZoneNo', function () { return Serenity.DecimalEditor; }],
            ['SectionNo', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SectionsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionsRow;
        (function (SectionsRow) {
            SectionsRow.idProperty = 'ItemId';
            SectionsRow.localTextPrefix = 'Default.Sections';
            SectionsRow.deletePermission = 'Administration:General';
            SectionsRow.insertPermission = 'Administration:General';
            SectionsRow.readPermission = 'Administration:General';
            SectionsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = SectionsRow.Fields || (SectionsRow.Fields = {}));
            [
                'RoadNo',
                'AreaNo',
                'CityNo',
                'ZoneNo',
                'SectionNo',
                'ItemId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SectionsRow = Default.SectionsRow || (Default.SectionsRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionsService;
        (function (SectionsService) {
            SectionsService.baseUrl = 'Default/Sections';
            var Methods;
            (function (Methods) {
            })(Methods = SectionsService.Methods || (SectionsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SectionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SectionsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SectionsService.baseUrl + '/' + x;
            });
        })(SectionsService = Default.SectionsService || (Default.SectionsService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugForm = /** @class */ (function (_super) {
            __extends(WorkOrderBugForm, _super);
            function WorkOrderBugForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderBugForm.formKey = 'Default.WorkOrderBug';
            return WorkOrderBugForm;
        }(Serenity.PrefixedContext));
        Default.WorkOrderBugForm = WorkOrderBugForm;
        [,
            ['ItemBugName', function () { return Serenity.StringEditor; }],
            ['WorkOrderId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkOrderBugForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugRow;
        (function (WorkOrderBugRow) {
            WorkOrderBugRow.idProperty = 'ItemBugId';
            WorkOrderBugRow.nameProperty = 'ItemBugName';
            WorkOrderBugRow.localTextPrefix = 'Default.WorkOrderBug';
            WorkOrderBugRow.deletePermission = 'Administration:General';
            WorkOrderBugRow.insertPermission = 'Administration:General';
            WorkOrderBugRow.readPermission = 'Administration:General';
            WorkOrderBugRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkOrderBugRow.Fields || (WorkOrderBugRow.Fields = {}));
            [
                'ItemBugId',
                'ItemBugName',
                'WorkOrderId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkOrderBugRow = Default.WorkOrderBugRow || (Default.WorkOrderBugRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugService;
        (function (WorkOrderBugService) {
            WorkOrderBugService.baseUrl = 'Default/WorkOrderBug';
            var Methods;
            (function (Methods) {
            })(Methods = WorkOrderBugService.Methods || (WorkOrderBugService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkOrderBugService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkOrderBugService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkOrderBugService.baseUrl + '/' + x;
            });
        })(WorkOrderBugService = Default.WorkOrderBugService || (Default.WorkOrderBugService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderEmergencyForm = /** @class */ (function (_super) {
            __extends(WorkOrderEmergencyForm, _super);
            function WorkOrderEmergencyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderEmergencyForm.formKey = 'Default.WorkOrderEmergency';
            return WorkOrderEmergencyForm;
        }(Serenity.PrefixedContext));
        Default.WorkOrderEmergencyForm = WorkOrderEmergencyForm;
        [,
            ['Ename', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkOrderEmergencyForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderEmergencyRow;
        (function (WorkOrderEmergencyRow) {
            WorkOrderEmergencyRow.idProperty = 'EId';
            WorkOrderEmergencyRow.nameProperty = 'Ename';
            WorkOrderEmergencyRow.localTextPrefix = 'Default.WorkOrderEmergency';
            WorkOrderEmergencyRow.deletePermission = 'Administration:General';
            WorkOrderEmergencyRow.insertPermission = 'Administration:General';
            WorkOrderEmergencyRow.readPermission = 'Administration:General';
            WorkOrderEmergencyRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkOrderEmergencyRow.Fields || (WorkOrderEmergencyRow.Fields = {}));
            [
                'EId',
                'Ename'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkOrderEmergencyRow = Default.WorkOrderEmergencyRow || (Default.WorkOrderEmergencyRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderEmergencyService;
        (function (WorkOrderEmergencyService) {
            WorkOrderEmergencyService.baseUrl = 'Default/WorkOrderEmergency';
            var Methods;
            (function (Methods) {
            })(Methods = WorkOrderEmergencyService.Methods || (WorkOrderEmergencyService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkOrderEmergencyService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkOrderEmergencyService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkOrderEmergencyService.baseUrl + '/' + x;
            });
        })(WorkOrderEmergencyService = Default.WorkOrderEmergencyService || (Default.WorkOrderEmergencyService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixForm = /** @class */ (function (_super) {
            __extends(WorkOrderFixForm, _super);
            function WorkOrderFixForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderFixForm.formKey = 'Default.WorkOrderFix';
            return WorkOrderFixForm;
        }(Serenity.PrefixedContext));
        Default.WorkOrderFixForm = WorkOrderFixForm;
        [,
            ['ItemFixName', function () { return Serenity.StringEditor; }],
            ['WorkOrderId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkOrderFixForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixRow;
        (function (WorkOrderFixRow) {
            WorkOrderFixRow.idProperty = 'ItemFixId';
            WorkOrderFixRow.nameProperty = 'ItemFixName';
            WorkOrderFixRow.localTextPrefix = 'Default.WorkOrderFix';
            WorkOrderFixRow.deletePermission = 'Administration:General';
            WorkOrderFixRow.insertPermission = 'Administration:General';
            WorkOrderFixRow.readPermission = 'Administration:General';
            WorkOrderFixRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkOrderFixRow.Fields || (WorkOrderFixRow.Fields = {}));
            [
                'ItemFixId',
                'ItemFixName',
                'WorkOrderId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkOrderFixRow = Default.WorkOrderFixRow || (Default.WorkOrderFixRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixService;
        (function (WorkOrderFixService) {
            WorkOrderFixService.baseUrl = 'Default/WorkOrderFix';
            var Methods;
            (function (Methods) {
            })(Methods = WorkOrderFixService.Methods || (WorkOrderFixService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkOrderFixService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkOrderFixService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkOrderFixService.baseUrl + '/' + x;
            });
        })(WorkOrderFixService = Default.WorkOrderFixService || (Default.WorkOrderFixService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderForm = /** @class */ (function (_super) {
            __extends(WorkOrderForm, _super);
            function WorkOrderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderForm.formKey = 'Default.WorkOrder';
            return WorkOrderForm;
        }(Serenity.PrefixedContext));
        Default.WorkOrderForm = WorkOrderForm;
        [,
            ['WorkOrderId', function () { return Serenity.IntegerEditor; }],
            ['ProjectName', function () { return Serenity.StringEditor; }],
            ['ContractName', function () { return Serenity.StringEditor; }],
            ['ProjectLocation', function () { return Serenity.StringEditor; }],
            ['DateOfOrderWork', function () { return Serenity.DateEditor; }],
            ['WorkDuration', function () { return Serenity.StringEditor; }],
            ['WorkorderStartDate', function () { return Serenity.StringEditor; }],
            ['WorkorderEndDate', function () { return Serenity.DateEditor; }],
            ['WorkorderRenewDate', function () { return Serenity.DateEditor; }],
            ['WorkorderNotes', function () { return Serenity.StringEditor; }],
            ['Doc1', function () { return Serenity.StringEditor; }],
            ['Doc2', function () { return Serenity.StringEditor; }],
            ['Doc3', function () { return Serenity.StringEditor; }],
            ['Doc4', function () { return Serenity.StringEditor; }],
            ['DocImageMap', function () { return Serenity.StringEditor; }],
            ['Remark1', function () { return Serenity.StringEditor; }],
            ['Remark2', function () { return Serenity.StringEditor; }],
            ['Remark3', function () { return Serenity.StringEditor; }],
            ['Remark4', function () { return Serenity.StringEditor; }],
            ['RemarkDate1', function () { return Serenity.DateEditor; }],
            ['RemarkDate2', function () { return Serenity.DateEditor; }],
            ['RemarkDate3', function () { return Serenity.DateEditor; }],
            ['signature', function () { return Serenity.StringEditor; }],
            ['WorkorderSection', function () { return Serenity.StringEditor; }],
            ['WorkorderLane', function () { return Serenity.StringEditor; }],
            ['WorkorderArea', function () { return Serenity.StringEditor; }],
            ['WorkorderRoad', function () { return Serenity.StringEditor; }],
            ['WorkorderZone', function () { return Serenity.StringEditor; }],
            ['WorkorderCity', function () { return Serenity.StringEditor; }],
            ['RefId', function () { return Serenity.LookupEditor; }],
            ['emergency', function () { return Serenity.LookupEditor; }],
            ['WorkorderBoqItem', function () { return PMMS.Default.WorkorderBoqItemEditor; }],
            ['LaneTemplate', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkOrderForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderOldForm = /** @class */ (function (_super) {
            __extends(WorkOrderOldForm, _super);
            function WorkOrderOldForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderOldForm.formKey = 'Default.WorkOrderOld';
            return WorkOrderOldForm;
        }(Serenity.PrefixedContext));
        Default.WorkOrderOldForm = WorkOrderOldForm;
        [,
            ['ProjectName', function () { return Serenity.StringEditor; }],
            ['ContractName', function () { return Serenity.StringEditor; }],
            ['ProjectLocation', function () { return Serenity.StringEditor; }],
            ['DateOfOrderWork', function () { return Serenity.DateEditor; }],
            ['WorkDuration', function () { return Serenity.StringEditor; }],
            ['WorkorderStartDate', function () { return Serenity.StringEditor; }],
            ['WorkorderEndDate', function () { return Serenity.DateEditor; }],
            ['WorkorderRenewDate', function () { return Serenity.DateEditor; }],
            ['WorkorderNotes', function () { return Serenity.StringEditor; }],
            ['Doc1', function () { return Serenity.StringEditor; }],
            ['Doc2', function () { return Serenity.StringEditor; }],
            ['Doc3', function () { return Serenity.StringEditor; }],
            ['Doc4', function () { return Serenity.StringEditor; }],
            ['DocImageMap', function () { return Serenity.StringEditor; }],
            ['Remark1', function () { return Serenity.StringEditor; }],
            ['Remark2', function () { return Serenity.StringEditor; }],
            ['Remark3', function () { return Serenity.StringEditor; }],
            ['Remark4', function () { return Serenity.StringEditor; }],
            ['RemarkDate1', function () { return Serenity.DateEditor; }],
            ['RemarkDate2', function () { return Serenity.DateEditor; }],
            ['RemarkDate3', function () { return Serenity.DateEditor; }],
            ['RefId', function () { return Serenity.IntegerEditor; }],
            ['Status', function () { return Serenity.StringEditor; }],
            ['WorkflowStage', function () { return Serenity.StringEditor; }],
            ['WorkflowStagename', function () { return Serenity.StringEditor; }],
            ['AssignTo', function () { return Serenity.StringEditor; }],
            ['Doc5', function () { return Serenity.StringEditor; }],
            ['Doc6', function () { return Serenity.StringEditor; }],
            ['Doc7', function () { return Serenity.StringEditor; }],
            ['Doc8', function () { return Serenity.StringEditor; }],
            ['CreatedDate', function () { return Serenity.DateEditor; }],
            ['LastUpdate', function () { return Serenity.DateEditor; }],
            ['DocImageMapKey', function () { return Serenity.StringEditor; }],
            ['WorkOrderLocation', function () { return Serenity.StringEditor; }],
            ['WorkorderCity', function () { return Serenity.StringEditor; }],
            ['WorkorderZone', function () { return Serenity.StringEditor; }],
            ['WorkorderArea', function () { return Serenity.StringEditor; }],
            ['WorkorderRoad', function () { return Serenity.StringEditor; }],
            ['WorkorderSection', function () { return Serenity.StringEditor; }],
            ['DocOther2', function () { return Serenity.StringEditor; }],
            ['DocOther1', function () { return Serenity.StringEditor; }],
            ['YearsOfLife', function () { return Serenity.IntegerEditor; }],
            ['WarrantyStartDate', function () { return Serenity.DateEditor; }],
            ['WarrantyEndDate', function () { return Serenity.DateEditor; }],
            ['WorkorderLane', function () { return Serenity.StringEditor; }],
            ['BlockDate', function () { return Serenity.DateEditor; }],
            ['AutoSkip', function () { return Serenity.BooleanEditor; }],
            ['SeqN', function () { return Serenity.StringEditor; }],
            ['Emergency', function () { return Serenity.IntegerEditor; }],
            ['StatusCode', function () { return Serenity.StringEditor; }],
            ['DepId', function () { return Serenity.StringEditor; }],
            ['DisplayStreet', function () { return Serenity.StringEditor; }],
            ['DisplayZone', function () { return Serenity.StringEditor; }],
            ['DisplayArea', function () { return Serenity.StringEditor; }],
            ['DisplayCity', function () { return Serenity.StringEditor; }],
            ['DisplaySection', function () { return Serenity.StringEditor; }],
            ['UserGroup', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkOrderOldForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderOldRow;
        (function (WorkOrderOldRow) {
            WorkOrderOldRow.idProperty = 'WorkOrderId';
            WorkOrderOldRow.nameProperty = 'ProjectName';
            WorkOrderOldRow.localTextPrefix = 'Default.WorkOrderOld';
            WorkOrderOldRow.deletePermission = 'Administration:General';
            WorkOrderOldRow.insertPermission = 'Administration:General';
            WorkOrderOldRow.readPermission = 'Administration:General';
            WorkOrderOldRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkOrderOldRow.Fields || (WorkOrderOldRow.Fields = {}));
            [
                'WorkOrderId',
                'ProjectName',
                'ContractName',
                'ProjectLocation',
                'DateOfOrderWork',
                'WorkDuration',
                'WorkorderStartDate',
                'WorkorderEndDate',
                'WorkorderRenewDate',
                'WorkorderNotes',
                'Doc1',
                'Doc2',
                'Doc3',
                'Doc4',
                'DocImageMap',
                'Remark1',
                'Remark2',
                'Remark3',
                'Remark4',
                'RemarkDate1',
                'RemarkDate2',
                'RemarkDate3',
                'RefId',
                'Status',
                'WorkflowStage',
                'WorkflowStagename',
                'AssignTo',
                'Doc5',
                'Doc6',
                'Doc7',
                'Doc8',
                'CreatedDate',
                'LastUpdate',
                'DocImageMapKey',
                'WorkOrderLocation',
                'WorkorderCity',
                'WorkorderZone',
                'WorkorderArea',
                'WorkorderRoad',
                'WorkorderSection',
                'DocOther2',
                'DocOther1',
                'YearsOfLife',
                'WarrantyStartDate',
                'WarrantyEndDate',
                'WorkorderLane',
                'BlockDate',
                'AutoSkip',
                'SeqN',
                'Emergency',
                'StatusCode',
                'DepId',
                'DisplayStreet',
                'DisplayZone',
                'DisplayArea',
                'DisplayCity',
                'DisplaySection',
                'UserGroup'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkOrderOldRow = Default.WorkOrderOldRow || (Default.WorkOrderOldRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderOldService;
        (function (WorkOrderOldService) {
            WorkOrderOldService.baseUrl = 'Default/WorkOrderOld';
            var Methods;
            (function (Methods) {
            })(Methods = WorkOrderOldService.Methods || (WorkOrderOldService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkOrderOldService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkOrderOldService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkOrderOldService.baseUrl + '/' + x;
            });
        })(WorkOrderOldService = Default.WorkOrderOldService || (Default.WorkOrderOldService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderRow;
        (function (WorkOrderRow) {
            WorkOrderRow.idProperty = 'WorkOrderId';
            WorkOrderRow.nameProperty = 'ProjectName';
            WorkOrderRow.localTextPrefix = 'Default.WorkOrder';
            WorkOrderRow.deletePermission = 'Apps:Data:General';
            WorkOrderRow.insertPermission = 'Apps:Data:General';
            WorkOrderRow.readPermission = 'Apps:Data:General';
            WorkOrderRow.updatePermission = 'Apps:Data:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkOrderRow.Fields || (WorkOrderRow.Fields = {}));
            [
                'WorkOrderId',
                'ProjectName',
                'ContractName',
                'ProjectLocation',
                'DateOfOrderWork',
                'WorkDuration',
                'WorkorderStartDate',
                'WorkorderEndDate',
                'WorkorderRenewDate',
                'WorkorderNotes',
                'Doc1',
                'Doc2',
                'Doc3',
                'Doc4',
                'DocImageMap',
                'Remark1',
                'Remark2',
                'Remark3',
                'Remark4',
                'RemarkDate1',
                'RemarkDate2',
                'RemarkDate3',
                'Status'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkOrderRow = Default.WorkOrderRow || (Default.WorkOrderRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderService;
        (function (WorkOrderService) {
            WorkOrderService.baseUrl = 'Default/WorkOrder';
            var Methods;
            (function (Methods) {
            })(Methods = WorkOrderService.Methods || (WorkOrderService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkOrderService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkOrderService.baseUrl + '/' + x;
            });
        })(WorkOrderService = Default.WorkOrderService || (Default.WorkOrderService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqForm = /** @class */ (function (_super) {
            __extends(WorkorderBoqForm, _super);
            function WorkorderBoqForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderBoqForm.formKey = 'Default.WorkorderBoq';
            return WorkorderBoqForm;
        }(Serenity.PrefixedContext));
        Default.WorkorderBoqForm = WorkorderBoqForm;
        [,
            ['ItmCode', function () { return Serenity.StringEditor; }],
            ['ItmSeq', function () { return Serenity.DecimalEditor; }],
            ['ItmDesc', function () { return Serenity.StringEditor; }],
            ['ContractId', function () { return Serenity.DecimalEditor; }],
            ['Unit', function () { return Serenity.StringEditor; }],
            ['Qty', function () { return Serenity.DecimalEditor; }],
            ['Remainder', function () { return Serenity.DecimalEditor; }],
            ['ExecQty', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkorderBoqForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemForm = /** @class */ (function (_super) {
            __extends(WorkorderBoqItemForm, _super);
            function WorkorderBoqItemForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderBoqItemForm.formKey = 'Default.WorkorderBoqItem';
            return WorkorderBoqItemForm;
        }(Serenity.PrefixedContext));
        Default.WorkorderBoqItemForm = WorkorderBoqItemForm;
        [,
            ['ItmCode', function () { return Serenity.StringEditor; }],
            ['ItmSeq', function () { return Serenity.DecimalEditor; }],
            ['ItmDesc', function () { return Serenity.StringEditor; }],
            ['ContractId', function () { return Serenity.DecimalEditor; }],
            ['Unit', function () { return Serenity.StringEditor; }],
            ['Qty', function () { return Serenity.DecimalEditor; }],
            ['Woid', function () { return Serenity.IntegerEditor; }],
            ['ExecQty', function () { return Serenity.DecimalEditor; }],
            ['Prev_EXEC_QTY', function () { return Serenity.DecimalEditor; }],
            ['REMAINDER', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkorderBoqItemForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemRow;
        (function (WorkorderBoqItemRow) {
            WorkorderBoqItemRow.idProperty = 'BItemId';
            WorkorderBoqItemRow.nameProperty = 'ItmCode';
            WorkorderBoqItemRow.localTextPrefix = 'Default.WorkorderBoqItem';
            WorkorderBoqItemRow.deletePermission = 'Administration:General';
            WorkorderBoqItemRow.insertPermission = 'Administration:General';
            WorkorderBoqItemRow.readPermission = 'Administration:General';
            WorkorderBoqItemRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkorderBoqItemRow.Fields || (WorkorderBoqItemRow.Fields = {}));
            [
                'BItemId',
                'ItmCode',
                'ItmSeq',
                'ItmDesc',
                'ContractId',
                'Unit',
                'Qty',
                'Woid',
                'ExecQty',
                'REMAINDER',
                'Status',
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkorderBoqItemRow = Default.WorkorderBoqItemRow || (Default.WorkorderBoqItemRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemService;
        (function (WorkorderBoqItemService) {
            WorkorderBoqItemService.baseUrl = 'Default/WorkorderBoqItem';
            var Methods;
            (function (Methods) {
            })(Methods = WorkorderBoqItemService.Methods || (WorkorderBoqItemService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkorderBoqItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkorderBoqItemService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkorderBoqItemService.baseUrl + '/' + x;
            });
        })(WorkorderBoqItemService = Default.WorkorderBoqItemService || (Default.WorkorderBoqItemService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqRow;
        (function (WorkorderBoqRow) {
            WorkorderBoqRow.idProperty = 'ItemId';
            WorkorderBoqRow.nameProperty = 'ItmCode';
            WorkorderBoqRow.localTextPrefix = 'Default.WorkorderBoq';
            WorkorderBoqRow.deletePermission = 'Administration:General';
            WorkorderBoqRow.insertPermission = 'Administration:General';
            WorkorderBoqRow.readPermission = 'Administration:General';
            WorkorderBoqRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkorderBoqRow.Fields || (WorkorderBoqRow.Fields = {}));
            [
                'ItemId',
                'ItmCode',
                'ItmSeq',
                'ItmDesc',
                'ContractId',
                'Unit',
                'Qty',
                'Remainder',
                'ExecQty'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkorderBoqRow = Default.WorkorderBoqRow || (Default.WorkorderBoqRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqService;
        (function (WorkorderBoqService) {
            WorkorderBoqService.baseUrl = 'Default/WorkorderBoq';
            var Methods;
            (function (Methods) {
            })(Methods = WorkorderBoqService.Methods || (WorkorderBoqService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkorderBoqService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkorderBoqService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkorderBoqService.baseUrl + '/' + x;
            });
        })(WorkorderBoqService = Default.WorkorderBoqService || (Default.WorkorderBoqService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderItemStatusForm = /** @class */ (function (_super) {
            __extends(WorkorderItemStatusForm, _super);
            function WorkorderItemStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderItemStatusForm.formKey = 'Default.WorkorderItemStatus';
            return WorkorderItemStatusForm;
        }(Serenity.PrefixedContext));
        Default.WorkorderItemStatusForm = WorkorderItemStatusForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['IsClosed', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(WorkorderItemStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderItemStatusRow;
        (function (WorkorderItemStatusRow) {
            WorkorderItemStatusRow.idProperty = 'ItemId';
            WorkorderItemStatusRow.nameProperty = 'ItemName';
            WorkorderItemStatusRow.localTextPrefix = 'Default.WorkorderItemStatus';
            WorkorderItemStatusRow.deletePermission = 'Administration:General';
            WorkorderItemStatusRow.insertPermission = 'Administration:General';
            WorkorderItemStatusRow.readPermission = 'Administration:General';
            WorkorderItemStatusRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = WorkorderItemStatusRow.Fields || (WorkorderItemStatusRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'IsClosed'
            ].forEach(function (x) { return Fields[x] = x; });
        })(WorkorderItemStatusRow = Default.WorkorderItemStatusRow || (Default.WorkorderItemStatusRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderItemStatusService;
        (function (WorkorderItemStatusService) {
            WorkorderItemStatusService.baseUrl = 'Default/WorkorderItemStatus';
            var Methods;
            (function (Methods) {
            })(Methods = WorkorderItemStatusService.Methods || (WorkorderItemStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WorkorderItemStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(WorkorderItemStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = WorkorderItemStatusService.baseUrl + '/' + x;
            });
        })(WorkorderItemStatusService = Default.WorkorderItemStatusService || (Default.WorkorderItemStatusService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZoneForm = /** @class */ (function (_super) {
            __extends(ZoneForm, _super);
            function ZoneForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZoneForm.formKey = 'Default.Zone';
            return ZoneForm;
        }(Serenity.PrefixedContext));
        Default.ZoneForm = ZoneForm;
        [
            ['ZoneNo', function () { return Serenity.DecimalEditor; }],
            ['ZoneName', function () { return Serenity.StringEditor; }],
            ['CityNo', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ZoneForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZoneRow;
        (function (ZoneRow) {
            ZoneRow.idProperty = 'ItemId';
            ZoneRow.nameProperty = 'ZoneName';
            ZoneRow.localTextPrefix = 'Default.Zone';
            ZoneRow.deletePermission = 'Administration:General';
            ZoneRow.insertPermission = 'Administration:General';
            ZoneRow.readPermission = 'Administration:General';
            ZoneRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ZoneRow.Fields || (ZoneRow.Fields = {}));
            [
                'ZoneNo',
                'ZoneName',
                'CityNo',
                'ItemId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ZoneRow = Default.ZoneRow || (Default.ZoneRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZoneService;
        (function (ZoneService) {
            ZoneService.baseUrl = 'Default/Zone';
            var Methods;
            (function (Methods) {
            })(Methods = ZoneService.Methods || (ZoneService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ZoneService[x] = function (r, s, o) {
                    return Q.serviceRequest(ZoneService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ZoneService.baseUrl + '/' + x;
            });
        })(ZoneService = Default.ZoneService || (Default.ZoneService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZonesForm = /** @class */ (function (_super) {
            __extends(ZonesForm, _super);
            function ZonesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZonesForm.formKey = 'Default.Zones';
            return ZonesForm;
        }(Serenity.PrefixedContext));
        Default.ZonesForm = ZonesForm;
        [,
            ['ZoneName', function () { return Serenity.StringEditor; }],
            ['CityNo', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ZonesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZonesRow;
        (function (ZonesRow) {
            ZonesRow.idProperty = 'ZoneNo';
            ZonesRow.nameProperty = 'ZoneName';
            ZonesRow.localTextPrefix = 'Default.Zones';
            ZonesRow.deletePermission = 'Administration:General';
            ZonesRow.insertPermission = 'Administration:General';
            ZonesRow.readPermission = 'Administration:General';
            ZonesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ZonesRow.Fields || (ZonesRow.Fields = {}));
            [
                'ZoneNo',
                'ZoneName',
                'CityNo'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ZonesRow = Default.ZonesRow || (Default.ZonesRow = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZonesService;
        (function (ZonesService) {
            ZonesService.baseUrl = 'Default/Zones';
            var Methods;
            (function (Methods) {
            })(Methods = ZonesService.Methods || (ZonesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ZonesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ZonesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ZonesService.baseUrl + '/' + x;
            });
        })(ZonesService = Default.ZonesService || (Default.ZonesService = {}));
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubCategoryForm = /** @class */ (function (_super) {
            __extends(ContentHubCategoryForm, _super);
            function ContentHubCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContentHubCategoryForm.formKey = 'Distortion.ContentHubCategory';
            return ContentHubCategoryForm;
        }(Serenity.PrefixedContext));
        Distortion.ContentHubCategoryForm = ContentHubCategoryForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ContentHubCategoryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubCategoryRow;
        (function (ContentHubCategoryRow) {
            ContentHubCategoryRow.idProperty = 'ItemId';
            ContentHubCategoryRow.nameProperty = 'ItemName';
            ContentHubCategoryRow.localTextPrefix = 'Distortion.ContentHubCategory';
            ContentHubCategoryRow.deletePermission = 'Administration:General';
            ContentHubCategoryRow.insertPermission = 'Administration:General';
            ContentHubCategoryRow.readPermission = 'Administration:General';
            ContentHubCategoryRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ContentHubCategoryRow.Fields || (ContentHubCategoryRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ContentHubCategoryRow = Distortion.ContentHubCategoryRow || (Distortion.ContentHubCategoryRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubCategoryService;
        (function (ContentHubCategoryService) {
            ContentHubCategoryService.baseUrl = 'Distortion/ContentHubCategory';
            var Methods;
            (function (Methods) {
            })(Methods = ContentHubCategoryService.Methods || (ContentHubCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContentHubCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContentHubCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ContentHubCategoryService.baseUrl + '/' + x;
            });
        })(ContentHubCategoryService = Distortion.ContentHubCategoryService || (Distortion.ContentHubCategoryService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubForm = /** @class */ (function (_super) {
            __extends(ContentHubForm, _super);
            function ContentHubForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContentHubForm.formKey = 'Distortion.ContentHub';
            return ContentHubForm;
        }(Serenity.PrefixedContext));
        Distortion.ContentHubForm = ContentHubForm;
        [,
            ['ImgColNote', function () { return Serenity.StringEditor; }],
            ['ImageColPath', function () { return Serenity.StringEditor; }],
            ['ImageLat', function () { return Serenity.StringEditor; }],
            ['ImageLong', function () { return Serenity.StringEditor; }],
            ['CollCateegory', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ContentHubForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubRow;
        (function (ContentHubRow) {
            ContentHubRow.idProperty = 'ImgColId';
            ContentHubRow.nameProperty = 'ImgColNote';
            ContentHubRow.localTextPrefix = 'Distortion.ContentHub';
            ContentHubRow.deletePermission = 'Administration:General';
            ContentHubRow.insertPermission = 'Administration:General';
            ContentHubRow.readPermission = 'Administration:General';
            ContentHubRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = ContentHubRow.Fields || (ContentHubRow.Fields = {}));
            [
                'ImgColId',
                'ImgColNote',
                'ImageColPath',
                'ImageLat',
                'ImageLong',
                'CollCateegory'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ContentHubRow = Distortion.ContentHubRow || (Distortion.ContentHubRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubService;
        (function (ContentHubService) {
            ContentHubService.baseUrl = 'Distortion/ContentHub';
            var Methods;
            (function (Methods) {
            })(Methods = ContentHubService.Methods || (ContentHubService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContentHubService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContentHubService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ContentHubService.baseUrl + '/' + x;
            });
        })(ContentHubService = Distortion.ContentHubService || (Distortion.ContentHubService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCasesForm = /** @class */ (function (_super) {
            __extends(DistortionCasesForm, _super);
            function DistortionCasesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionCasesForm.formKey = 'Distortion.DistortionCases';
            return DistortionCasesForm;
        }(Serenity.PrefixedContext));
        Distortion.DistortionCasesForm = DistortionCasesForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ItemCategory', function () { return Serenity.IntegerEditor; }],
            ['ItemSubCategory', function () { return Serenity.IntegerEditor; }],
            ['AssetCity', function () { return Serenity.StringEditor; }],
            ['AssetZone', function () { return Serenity.StringEditor; }],
            ['AssetsAreaId', function () { return Serenity.StringEditor; }],
            ['AssetRoad', function () { return Serenity.StringEditor; }],
            ['AssetSection', function () { return Serenity.StringEditor; }],
            ['ItemQty', function () { return Serenity.DecimalEditor; }],
            ['ItemImages', function () { return Serenity.StringEditor; }],
            ['ItemDoc', function () { return Serenity.StringEditor; }],
            ['ItemLatLong', function () { return Serenity.StringEditor; }],
            ['Attachments', function () { return Serenity.StringEditor; }],
            ['CaseDate', function () { return Serenity.DateEditor; }],
            ['CaseAdress', function () { return Serenity.StringEditor; }],
            ['CaseAmount', function () { return Serenity.DecimalEditor; }],
            ['CaseDesc', function () { return Serenity.StringEditor; }],
            ['CaseSolution', function () { return Serenity.StringEditor; }],
            ['CaseStatus', function () { return Serenity.IntegerEditor; }],
            ['ItemImagesAfter', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DistortionCasesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCasesRow;
        (function (DistortionCasesRow) {
            DistortionCasesRow.idProperty = 'ItemId';
            DistortionCasesRow.nameProperty = 'ItemName';
            DistortionCasesRow.localTextPrefix = 'Distortion.DistortionCases';
            DistortionCasesRow.deletePermission = 'Administration:General';
            DistortionCasesRow.insertPermission = 'Administration:General';
            DistortionCasesRow.readPermission = 'Administration:General';
            DistortionCasesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DistortionCasesRow.Fields || (DistortionCasesRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ItemCategory',
                'ItemSubCategory',
                'AssetCity',
                'AssetZone',
                'AssetsAreaId',
                'AssetRoad',
                'AssetSection',
                'ItemQty',
                'ItemImages',
                'ItemDoc',
                'ItemLatLong',
                'Attachments',
                'CaseDate',
                'CaseAdress',
                'CaseAmount',
                'CaseDesc',
                'CaseSolution',
                'CaseStatus',
                'ItemImagesAfter'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DistortionCasesRow = Distortion.DistortionCasesRow || (Distortion.DistortionCasesRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCasesService;
        (function (DistortionCasesService) {
            DistortionCasesService.baseUrl = 'Distortion/DistortionCases';
            var Methods;
            (function (Methods) {
            })(Methods = DistortionCasesService.Methods || (DistortionCasesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistortionCasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistortionCasesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DistortionCasesService.baseUrl + '/' + x;
            });
        })(DistortionCasesService = Distortion.DistortionCasesService || (Distortion.DistortionCasesService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCategoryForm = /** @class */ (function (_super) {
            __extends(DistortionCategoryForm, _super);
            function DistortionCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionCategoryForm.formKey = 'Distortion.DistortionCategory';
            return DistortionCategoryForm;
        }(Serenity.PrefixedContext));
        Distortion.DistortionCategoryForm = DistortionCategoryForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DistortionCategoryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCategoryRow;
        (function (DistortionCategoryRow) {
            DistortionCategoryRow.idProperty = 'ItemId';
            DistortionCategoryRow.nameProperty = 'ItemName';
            DistortionCategoryRow.localTextPrefix = 'Distortion.DistortionCategory';
            DistortionCategoryRow.deletePermission = 'Administration:General';
            DistortionCategoryRow.insertPermission = 'Administration:General';
            DistortionCategoryRow.readPermission = 'Administration:General';
            DistortionCategoryRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DistortionCategoryRow.Fields || (DistortionCategoryRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DistortionCategoryRow = Distortion.DistortionCategoryRow || (Distortion.DistortionCategoryRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCategoryService;
        (function (DistortionCategoryService) {
            DistortionCategoryService.baseUrl = 'Distortion/DistortionCategory';
            var Methods;
            (function (Methods) {
            })(Methods = DistortionCategoryService.Methods || (DistortionCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistortionCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistortionCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DistortionCategoryService.baseUrl + '/' + x;
            });
        })(DistortionCategoryService = Distortion.DistortionCategoryService || (Distortion.DistortionCategoryService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionStatusForm = /** @class */ (function (_super) {
            __extends(DistortionStatusForm, _super);
            function DistortionStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionStatusForm.formKey = 'Distortion.DistortionStatus';
            return DistortionStatusForm;
        }(Serenity.PrefixedContext));
        Distortion.DistortionStatusForm = DistortionStatusForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DistortionStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionStatusRow;
        (function (DistortionStatusRow) {
            DistortionStatusRow.idProperty = 'ItemId';
            DistortionStatusRow.nameProperty = 'ItemName';
            DistortionStatusRow.localTextPrefix = 'Distortion.DistortionStatus';
            DistortionStatusRow.deletePermission = 'Administration:General';
            DistortionStatusRow.insertPermission = 'Administration:General';
            DistortionStatusRow.readPermission = 'Administration:General';
            DistortionStatusRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DistortionStatusRow.Fields || (DistortionStatusRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DistortionStatusRow = Distortion.DistortionStatusRow || (Distortion.DistortionStatusRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionStatusService;
        (function (DistortionStatusService) {
            DistortionStatusService.baseUrl = 'Distortion/DistortionStatus';
            var Methods;
            (function (Methods) {
            })(Methods = DistortionStatusService.Methods || (DistortionStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistortionStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistortionStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DistortionStatusService.baseUrl + '/' + x;
            });
        })(DistortionStatusService = Distortion.DistortionStatusService || (Distortion.DistortionStatusService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionSubCategoryForm = /** @class */ (function (_super) {
            __extends(DistortionSubCategoryForm, _super);
            function DistortionSubCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionSubCategoryForm.formKey = 'Distortion.DistortionSubCategory';
            return DistortionSubCategoryForm;
        }(Serenity.PrefixedContext));
        Distortion.DistortionSubCategoryForm = DistortionSubCategoryForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ParentId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DistortionSubCategoryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionSubCategoryRow;
        (function (DistortionSubCategoryRow) {
            DistortionSubCategoryRow.idProperty = 'ItemId';
            DistortionSubCategoryRow.nameProperty = 'ItemName';
            DistortionSubCategoryRow.localTextPrefix = 'Distortion.DistortionSubCategory';
            DistortionSubCategoryRow.deletePermission = 'Administration:General';
            DistortionSubCategoryRow.insertPermission = 'Administration:General';
            DistortionSubCategoryRow.readPermission = 'Administration:General';
            DistortionSubCategoryRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = DistortionSubCategoryRow.Fields || (DistortionSubCategoryRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ParentId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DistortionSubCategoryRow = Distortion.DistortionSubCategoryRow || (Distortion.DistortionSubCategoryRow = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionSubCategoryService;
        (function (DistortionSubCategoryService) {
            DistortionSubCategoryService.baseUrl = 'Distortion/DistortionSubCategory';
            var Methods;
            (function (Methods) {
            })(Methods = DistortionSubCategoryService.Methods || (DistortionSubCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistortionSubCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistortionSubCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DistortionSubCategoryService.baseUrl + '/' + x;
            });
        })(DistortionSubCategoryService = Distortion.DistortionSubCategoryService || (Distortion.DistortionSubCategoryService = {}));
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetAttrForm = /** @class */ (function (_super) {
            __extends(AssetAttrForm, _super);
            function AssetAttrForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetAttrForm.formKey = 'EAM.AssetAttr';
            return AssetAttrForm;
        }(Serenity.PrefixedContext));
        EAM.AssetAttrForm = AssetAttrForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetAttrForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetAttrRow;
        (function (AssetAttrRow) {
            AssetAttrRow.idProperty = 'ItemId';
            AssetAttrRow.nameProperty = 'ItemName';
            AssetAttrRow.localTextPrefix = 'EAM.AssetAttr';
            AssetAttrRow.deletePermission = 'Administration:General';
            AssetAttrRow.insertPermission = 'Administration:General';
            AssetAttrRow.readPermission = 'Administration:General';
            AssetAttrRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetAttrRow.Fields || (AssetAttrRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetAttrRow = EAM.AssetAttrRow || (EAM.AssetAttrRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetAttrService;
        (function (AssetAttrService) {
            AssetAttrService.baseUrl = 'EAM/AssetAttr';
            var Methods;
            (function (Methods) {
            })(Methods = AssetAttrService.Methods || (AssetAttrService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetAttrService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetAttrService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetAttrService.baseUrl + '/' + x;
            });
        })(AssetAttrService = EAM.AssetAttrService || (EAM.AssetAttrService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetBuildingForm = /** @class */ (function (_super) {
            __extends(AssetBuildingForm, _super);
            function AssetBuildingForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetBuildingForm.formKey = 'EAM.AssetBuilding';
            return AssetBuildingForm;
        }(Serenity.PrefixedContext));
        EAM.AssetBuildingForm = AssetBuildingForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['CityId', function () { return Serenity.IntegerEditor; }],
            ['ItemDesc', function () { return Serenity.StringEditor; }],
            ['NumberOfFloor', function () { return Serenity.DecimalEditor; }],
            ['LatLong', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetBuildingForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetBuildingRow;
        (function (AssetBuildingRow) {
            AssetBuildingRow.idProperty = 'ItemId';
            AssetBuildingRow.nameProperty = 'ItemName';
            AssetBuildingRow.localTextPrefix = 'EAM.AssetBuilding';
            AssetBuildingRow.deletePermission = 'Administration:General';
            AssetBuildingRow.insertPermission = 'Administration:General';
            AssetBuildingRow.readPermission = 'Administration:General';
            AssetBuildingRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetBuildingRow.Fields || (AssetBuildingRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'CityId',
                'ItemDesc',
                'NumberOfFloor',
                'LatLong'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetBuildingRow = EAM.AssetBuildingRow || (EAM.AssetBuildingRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetBuildingService;
        (function (AssetBuildingService) {
            AssetBuildingService.baseUrl = 'EAM/AssetBuilding';
            var Methods;
            (function (Methods) {
            })(Methods = AssetBuildingService.Methods || (AssetBuildingService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetBuildingService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetBuildingService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetBuildingService.baseUrl + '/' + x;
            });
        })(AssetBuildingService = EAM.AssetBuildingService || (EAM.AssetBuildingService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCategoryForm = /** @class */ (function (_super) {
            __extends(AssetCategoryForm, _super);
            function AssetCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetCategoryForm.formKey = 'EAM.AssetCategory';
            return AssetCategoryForm;
        }(Serenity.PrefixedContext));
        EAM.AssetCategoryForm = AssetCategoryForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetCategoryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCategoryRow;
        (function (AssetCategoryRow) {
            AssetCategoryRow.idProperty = 'ItemId';
            AssetCategoryRow.nameProperty = 'ItemName';
            AssetCategoryRow.localTextPrefix = 'EAM.AssetCategory';
            AssetCategoryRow.deletePermission = 'Administration:General';
            AssetCategoryRow.insertPermission = 'Administration:General';
            AssetCategoryRow.readPermission = 'Administration:General';
            AssetCategoryRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetCategoryRow.Fields || (AssetCategoryRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetCategoryRow = EAM.AssetCategoryRow || (EAM.AssetCategoryRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCategoryService;
        (function (AssetCategoryService) {
            AssetCategoryService.baseUrl = 'EAM/AssetCategory';
            var Methods;
            (function (Methods) {
            })(Methods = AssetCategoryService.Methods || (AssetCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetCategoryService.baseUrl + '/' + x;
            });
        })(AssetCategoryService = EAM.AssetCategoryService || (EAM.AssetCategoryService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetClassForm = /** @class */ (function (_super) {
            __extends(AssetClassForm, _super);
            function AssetClassForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetClassForm.formKey = 'EAM.AssetClass';
            return AssetClassForm;
        }(Serenity.PrefixedContext));
        EAM.AssetClassForm = AssetClassForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetClassForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetClassRow;
        (function (AssetClassRow) {
            AssetClassRow.idProperty = 'ItemId';
            AssetClassRow.nameProperty = 'ItemName';
            AssetClassRow.localTextPrefix = 'EAM.AssetClass';
            AssetClassRow.deletePermission = 'Administration:General';
            AssetClassRow.insertPermission = 'Administration:General';
            AssetClassRow.readPermission = 'Administration:General';
            AssetClassRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetClassRow.Fields || (AssetClassRow.Fields = {}));
            [
                'ItemId',
                'ParentId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetClassRow = EAM.AssetClassRow || (EAM.AssetClassRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetClassService;
        (function (AssetClassService) {
            AssetClassService.baseUrl = 'EAM/AssetClass';
            var Methods;
            (function (Methods) {
            })(Methods = AssetClassService.Methods || (AssetClassService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetClassService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetClassService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetClassService.baseUrl + '/' + x;
            });
        })(AssetClassService = EAM.AssetClassService || (EAM.AssetClassService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrForm = /** @class */ (function (_super) {
            __extends(AssetCustAttrForm, _super);
            function AssetCustAttrForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetCustAttrForm.formKey = 'EAM.AssetCustAttr';
            return AssetCustAttrForm;
        }(Serenity.PrefixedContext));
        EAM.AssetCustAttrForm = AssetCustAttrForm;
        [,
            ['AssetId', function () { return Serenity.IntegerEditor; }],
            ['AttrId', function () { return Serenity.IntegerEditor; }],
            ['AttrValue', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetCustAttrForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrRow;
        (function (AssetCustAttrRow) {
            AssetCustAttrRow.idProperty = 'ItemSubId';
            AssetCustAttrRow.nameProperty = 'AttrValue';
            AssetCustAttrRow.localTextPrefix = 'EAM.AssetCustAttr';
            AssetCustAttrRow.deletePermission = 'Administration:General';
            AssetCustAttrRow.insertPermission = 'Administration:General';
            AssetCustAttrRow.readPermission = 'Administration:General';
            AssetCustAttrRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetCustAttrRow.Fields || (AssetCustAttrRow.Fields = {}));
            [
                'ItemSubId',
                'AssetId',
                'AttrId',
                'AttrValue'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetCustAttrRow = EAM.AssetCustAttrRow || (EAM.AssetCustAttrRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrService;
        (function (AssetCustAttrService) {
            AssetCustAttrService.baseUrl = 'EAM/AssetCustAttr';
            var Methods;
            (function (Methods) {
            })(Methods = AssetCustAttrService.Methods || (AssetCustAttrService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetCustAttrService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetCustAttrService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetCustAttrService.baseUrl + '/' + x;
            });
        })(AssetCustAttrService = EAM.AssetCustAttrService || (EAM.AssetCustAttrService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDimansionForm = /** @class */ (function (_super) {
            __extends(AssetDimansionForm, _super);
            function AssetDimansionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDimansionForm.formKey = 'EAM.AssetDimansion';
            return AssetDimansionForm;
        }(Serenity.PrefixedContext));
        EAM.AssetDimansionForm = AssetDimansionForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetDimansionForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDimansionRow;
        (function (AssetDimansionRow) {
            AssetDimansionRow.idProperty = 'ItemId';
            AssetDimansionRow.nameProperty = 'ItemName';
            AssetDimansionRow.localTextPrefix = 'EAM.AssetDimansion';
            AssetDimansionRow.deletePermission = 'Administration:General';
            AssetDimansionRow.insertPermission = 'Administration:General';
            AssetDimansionRow.readPermission = 'Administration:General';
            AssetDimansionRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetDimansionRow.Fields || (AssetDimansionRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetDimansionRow = EAM.AssetDimansionRow || (EAM.AssetDimansionRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDimansionService;
        (function (AssetDimansionService) {
            AssetDimansionService.baseUrl = 'EAM/AssetDimansion';
            var Methods;
            (function (Methods) {
            })(Methods = AssetDimansionService.Methods || (AssetDimansionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetDimansionService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetDimansionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetDimansionService.baseUrl + '/' + x;
            });
        })(AssetDimansionService = EAM.AssetDimansionService || (EAM.AssetDimansionService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDistressForm = /** @class */ (function (_super) {
            __extends(AssetDistressForm, _super);
            function AssetDistressForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDistressForm.formKey = 'EAM.AssetDistress';
            return AssetDistressForm;
        }(Serenity.PrefixedContext));
        EAM.AssetDistressForm = AssetDistressForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetDistressForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDistressRow;
        (function (AssetDistressRow) {
            AssetDistressRow.idProperty = 'ItemId';
            AssetDistressRow.nameProperty = 'ItemName';
            AssetDistressRow.localTextPrefix = 'EAM.AssetDistress';
            AssetDistressRow.deletePermission = 'Administration:General';
            AssetDistressRow.insertPermission = 'Administration:General';
            AssetDistressRow.readPermission = 'Administration:General';
            AssetDistressRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetDistressRow.Fields || (AssetDistressRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetDistressRow = EAM.AssetDistressRow || (EAM.AssetDistressRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDistressService;
        (function (AssetDistressService) {
            AssetDistressService.baseUrl = 'EAM/AssetDistress';
            var Methods;
            (function (Methods) {
            })(Methods = AssetDistressService.Methods || (AssetDistressService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetDistressService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetDistressService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetDistressService.baseUrl + '/' + x;
            });
        })(AssetDistressService = EAM.AssetDistressService || (EAM.AssetDistressService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetLocationForm = /** @class */ (function (_super) {
            __extends(AssetLocationForm, _super);
            function AssetLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetLocationForm.formKey = 'EAM.AssetLocation';
            return AssetLocationForm;
        }(Serenity.PrefixedContext));
        EAM.AssetLocationForm = AssetLocationForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetLocationForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetLocationRow;
        (function (AssetLocationRow) {
            AssetLocationRow.idProperty = 'ItemId';
            AssetLocationRow.nameProperty = 'ItemName';
            AssetLocationRow.localTextPrefix = 'EAM.AssetLocation';
            AssetLocationRow.deletePermission = 'Administration:General';
            AssetLocationRow.insertPermission = 'Administration:General';
            AssetLocationRow.readPermission = 'Administration:General';
            AssetLocationRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetLocationRow.Fields || (AssetLocationRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetLocationRow = EAM.AssetLocationRow || (EAM.AssetLocationRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetLocationService;
        (function (AssetLocationService) {
            AssetLocationService.baseUrl = 'EAM/AssetLocation';
            var Methods;
            (function (Methods) {
            })(Methods = AssetLocationService.Methods || (AssetLocationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetLocationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetLocationService.baseUrl + '/' + x;
            });
        })(AssetLocationService = EAM.AssetLocationService || (EAM.AssetLocationService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetServiceStatusForm = /** @class */ (function (_super) {
            __extends(AssetServiceStatusForm, _super);
            function AssetServiceStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetServiceStatusForm.formKey = 'EAM.AssetServiceStatus';
            return AssetServiceStatusForm;
        }(Serenity.PrefixedContext));
        EAM.AssetServiceStatusForm = AssetServiceStatusForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetServiceStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetServiceStatusRow;
        (function (AssetServiceStatusRow) {
            AssetServiceStatusRow.idProperty = 'ItemId';
            AssetServiceStatusRow.nameProperty = 'ItemName';
            AssetServiceStatusRow.localTextPrefix = 'EAM.AssetServiceStatus';
            AssetServiceStatusRow.deletePermission = 'Administration:General';
            AssetServiceStatusRow.insertPermission = 'Administration:General';
            AssetServiceStatusRow.readPermission = 'Administration:General';
            AssetServiceStatusRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetServiceStatusRow.Fields || (AssetServiceStatusRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetServiceStatusRow = EAM.AssetServiceStatusRow || (EAM.AssetServiceStatusRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetServiceStatusService;
        (function (AssetServiceStatusService) {
            AssetServiceStatusService.baseUrl = 'EAM/AssetServiceStatus';
            var Methods;
            (function (Methods) {
            })(Methods = AssetServiceStatusService.Methods || (AssetServiceStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetServiceStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetServiceStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetServiceStatusService.baseUrl + '/' + x;
            });
        })(AssetServiceStatusService = EAM.AssetServiceStatusService || (EAM.AssetServiceStatusService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetStatusForm = /** @class */ (function (_super) {
            __extends(AssetStatusForm, _super);
            function AssetStatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetStatusForm.formKey = 'EAM.AssetStatus';
            return AssetStatusForm;
        }(Serenity.PrefixedContext));
        EAM.AssetStatusForm = AssetStatusForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetStatusForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetStatusRow;
        (function (AssetStatusRow) {
            AssetStatusRow.idProperty = 'ItemId';
            AssetStatusRow.nameProperty = 'ItemName';
            AssetStatusRow.localTextPrefix = 'EAM.AssetStatus';
            AssetStatusRow.deletePermission = 'Administration:General';
            AssetStatusRow.insertPermission = 'Administration:General';
            AssetStatusRow.readPermission = 'Administration:General';
            AssetStatusRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetStatusRow.Fields || (AssetStatusRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetStatusRow = EAM.AssetStatusRow || (EAM.AssetStatusRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetStatusService;
        (function (AssetStatusService) {
            AssetStatusService.baseUrl = 'EAM/AssetStatus';
            var Methods;
            (function (Methods) {
            })(Methods = AssetStatusService.Methods || (AssetStatusService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetStatusService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetStatusService.baseUrl + '/' + x;
            });
        })(AssetStatusService = EAM.AssetStatusService || (EAM.AssetStatusService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCalcForm = /** @class */ (function (_super) {
            __extends(AssetSubCalcForm, _super);
            function AssetSubCalcForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCalcForm.formKey = 'EAM.AssetSubCalc';
            return AssetSubCalcForm;
        }(Serenity.PrefixedContext));
        EAM.AssetSubCalcForm = AssetSubCalcForm;
        [,
            ['Sid', function () { return Serenity.StringEditor; }],
            ['DisId', function () { return Serenity.IntegerEditor; }],
            ['Density', function () { return Serenity.StringEditor; }],
            ['TotalValue', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetSubCalcForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCalcRow;
        (function (AssetSubCalcRow) {
            AssetSubCalcRow.idProperty = 'ItemId';
            AssetSubCalcRow.nameProperty = 'Sid';
            AssetSubCalcRow.localTextPrefix = 'EAM.AssetSubCalc';
            AssetSubCalcRow.deletePermission = 'Administration:General';
            AssetSubCalcRow.insertPermission = 'Administration:General';
            AssetSubCalcRow.readPermission = 'Administration:General';
            AssetSubCalcRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetSubCalcRow.Fields || (AssetSubCalcRow.Fields = {}));
            [
                'ItemId',
                'Sid',
                'DisId',
                'Density',
                'TotalValue'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetSubCalcRow = EAM.AssetSubCalcRow || (EAM.AssetSubCalcRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCalcService;
        (function (AssetSubCalcService) {
            AssetSubCalcService.baseUrl = 'EAM/AssetSubCalc';
            var Methods;
            (function (Methods) {
            })(Methods = AssetSubCalcService.Methods || (AssetSubCalcService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetSubCalcService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetSubCalcService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetSubCalcService.baseUrl + '/' + x;
            });
        })(AssetSubCalcService = EAM.AssetSubCalcService || (EAM.AssetSubCalcService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryForm = /** @class */ (function (_super) {
            __extends(AssetSubCategoryForm, _super);
            function AssetSubCategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryForm.formKey = 'EAM.AssetSubCategory';
            return AssetSubCategoryForm;
        }(Serenity.PrefixedContext));
        EAM.AssetSubCategoryForm = AssetSubCategoryForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ParentId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetSubCategoryForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryLevelForm = /** @class */ (function (_super) {
            __extends(AssetSubCategoryLevelForm, _super);
            function AssetSubCategoryLevelForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryLevelForm.formKey = 'EAM.AssetSubCategoryLevel';
            return AssetSubCategoryLevelForm;
        }(Serenity.PrefixedContext));
        EAM.AssetSubCategoryLevelForm = AssetSubCategoryLevelForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ParentId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetSubCategoryLevelForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryLevelRow;
        (function (AssetSubCategoryLevelRow) {
            AssetSubCategoryLevelRow.idProperty = 'ItemId';
            AssetSubCategoryLevelRow.nameProperty = 'ItemName';
            AssetSubCategoryLevelRow.localTextPrefix = 'EAM.AssetSubCategoryLevel';
            AssetSubCategoryLevelRow.deletePermission = 'Administration:General';
            AssetSubCategoryLevelRow.insertPermission = 'Administration:General';
            AssetSubCategoryLevelRow.readPermission = 'Administration:General';
            AssetSubCategoryLevelRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetSubCategoryLevelRow.Fields || (AssetSubCategoryLevelRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ParentId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetSubCategoryLevelRow = EAM.AssetSubCategoryLevelRow || (EAM.AssetSubCategoryLevelRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryLevelService;
        (function (AssetSubCategoryLevelService) {
            AssetSubCategoryLevelService.baseUrl = 'EAM/AssetSubCategoryLevel';
            var Methods;
            (function (Methods) {
            })(Methods = AssetSubCategoryLevelService.Methods || (AssetSubCategoryLevelService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetSubCategoryLevelService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetSubCategoryLevelService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetSubCategoryLevelService.baseUrl + '/' + x;
            });
        })(AssetSubCategoryLevelService = EAM.AssetSubCategoryLevelService || (EAM.AssetSubCategoryLevelService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryRow;
        (function (AssetSubCategoryRow) {
            AssetSubCategoryRow.idProperty = 'ItemId';
            AssetSubCategoryRow.nameProperty = 'ItemName';
            AssetSubCategoryRow.localTextPrefix = 'EAM.AssetSubCategory';
            AssetSubCategoryRow.deletePermission = 'Administration:General';
            AssetSubCategoryRow.insertPermission = 'Administration:General';
            AssetSubCategoryRow.readPermission = 'Administration:General';
            AssetSubCategoryRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetSubCategoryRow.Fields || (AssetSubCategoryRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ParentId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetSubCategoryRow = EAM.AssetSubCategoryRow || (EAM.AssetSubCategoryRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryService;
        (function (AssetSubCategoryService) {
            AssetSubCategoryService.baseUrl = 'EAM/AssetSubCategory';
            var Methods;
            (function (Methods) {
            })(Methods = AssetSubCategoryService.Methods || (AssetSubCategoryService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetSubCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetSubCategoryService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetSubCategoryService.baseUrl + '/' + x;
            });
        })(AssetSubCategoryService = EAM.AssetSubCategoryService || (EAM.AssetSubCategoryService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTagsForm = /** @class */ (function (_super) {
            __extends(AssetTagsForm, _super);
            function AssetTagsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTagsForm.formKey = 'EAM.AssetTags';
            return AssetTagsForm;
        }(Serenity.PrefixedContext));
        EAM.AssetTagsForm = AssetTagsForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetTagsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTagsRow;
        (function (AssetTagsRow) {
            AssetTagsRow.idProperty = 'ItemId';
            AssetTagsRow.nameProperty = 'ItemName';
            AssetTagsRow.localTextPrefix = 'EAM.AssetTags';
            AssetTagsRow.deletePermission = 'Administration:General';
            AssetTagsRow.insertPermission = 'Administration:General';
            AssetTagsRow.readPermission = 'Administration:General';
            AssetTagsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetTagsRow.Fields || (AssetTagsRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetTagsRow = EAM.AssetTagsRow || (EAM.AssetTagsRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTagsService;
        (function (AssetTagsService) {
            AssetTagsService.baseUrl = 'EAM/AssetTags';
            var Methods;
            (function (Methods) {
            })(Methods = AssetTagsService.Methods || (AssetTagsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetTagsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetTagsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetTagsService.baseUrl + '/' + x;
            });
        })(AssetTagsService = EAM.AssetTagsService || (EAM.AssetTagsService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTypeForm = /** @class */ (function (_super) {
            __extends(AssetTypeForm, _super);
            function AssetTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTypeForm.formKey = 'EAM.AssetType';
            return AssetTypeForm;
        }(Serenity.PrefixedContext));
        EAM.AssetTypeForm = AssetTypeForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTypeRow;
        (function (AssetTypeRow) {
            AssetTypeRow.idProperty = 'ItemId';
            AssetTypeRow.nameProperty = 'ItemName';
            AssetTypeRow.localTextPrefix = 'EAM.AssetType';
            AssetTypeRow.deletePermission = 'Administration:General';
            AssetTypeRow.insertPermission = 'Administration:General';
            AssetTypeRow.readPermission = 'Administration:General';
            AssetTypeRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetTypeRow.Fields || (AssetTypeRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetTypeRow = EAM.AssetTypeRow || (EAM.AssetTypeRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTypeService;
        (function (AssetTypeService) {
            AssetTypeService.baseUrl = 'EAM/AssetType';
            var Methods;
            (function (Methods) {
            })(Methods = AssetTypeService.Methods || (AssetTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetTypeService.baseUrl + '/' + x;
            });
        })(AssetTypeService = EAM.AssetTypeService || (EAM.AssetTypeService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsForm = /** @class */ (function (_super) {
            __extends(AssetsForm, _super);
            function AssetsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsForm.formKey = 'EAM.Assets';
            return AssetsForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsForm = AssetsForm;
        [,
            ['AsseName', function () { return Serenity.StringEditor; }],
            ['AssetBarcode', function () { return Serenity.StringEditor; }],
            ['AssetSerial', function () { return Serenity.StringEditor; }],
            ['AssetType', function () { return Serenity.IntegerEditor; }],
            ['AssetCategory', function () { return Serenity.IntegerEditor; }],
            ['AssetSubCategory', function () { return Serenity.IntegerEditor; }],
            ['AssetLocation', function () { return Serenity.IntegerEditor; }],
            ['AssetStartDate', function () { return Serenity.DateEditor; }],
            ['AssetEndDate', function () { return Serenity.DateEditor; }],
            ['AssetMaunfacture', function () { return Serenity.StringEditor; }],
            ['AssetProject', function () { return Serenity.IntegerEditor; }],
            ['AssetContractor', function () { return Serenity.IntegerEditor; }],
            ['AssetVendor', function () { return Serenity.IntegerEditor; }],
            ['AssetInspector', function () { return Serenity.IntegerEditor; }],
            ['AssetParent', function () { return Serenity.IntegerEditor; }],
            ['AssetStatus', function () { return Serenity.IntegerEditor; }],
            ['AssetClass', function () { return Serenity.IntegerEditor; }],
            ['AssetClassDescription', function () { return Serenity.StringEditor; }],
            ['AssetAutoDepc', function () { return Serenity.BooleanEditor; }],
            ['AssetDepcMethod', function () { return Serenity.StringEditor; }],
            ['AssetDepcInMonth', function () { return Serenity.IntegerEditor; }],
            ['AssetDepcPrec', function () { return Serenity.IntegerEditor; }],
            ['AssetDepcDate', function () { return Serenity.DateEditor; }],
            ['AssetDepcStatus', function () { return Serenity.IntegerEditor; }],
            ['InstallDate', function () { return Serenity.DateEditor; }],
            ['InstallAccetpedDate', function () { return Serenity.DateEditor; }],
            ['PurchasePrice', function () { return Serenity.DecimalEditor; }],
            ['YearsOfLife', function () { return Serenity.IntegerEditor; }],
            ['WarrantyStartDate', function () { return Serenity.DateEditor; }],
            ['WarrantyEndDate', function () { return Serenity.DateEditor; }],
            ['MaintSubSet', function () { return Serenity.IntegerEditor; }],
            ['MaintCondation', function () { return Serenity.IntegerEditor; }],
            ['MaintCrit', function () { return Serenity.IntegerEditor; }],
            ['MaintLastCheckDate', function () { return Serenity.DateEditor; }],
            ['AssetWidth', function () { return Serenity.DecimalEditor; }],
            ['AssetHight', function () { return Serenity.DecimalEditor; }],
            ['AssetArea', function () { return Serenity.DecimalEditor; }],
            ['AssetDimansion', function () { return Serenity.IntegerEditor; }],
            ['AssetWeight', function () { return Serenity.DecimalEditor; }],
            ['AssetPower', function () { return Serenity.DecimalEditor; }],
            ['AssetServiceStatus', function () { return Serenity.IntegerEditor; }],
            ['MaintPowerConsumption', function () { return Serenity.DecimalEditor; }],
            ['AssetCity', function () { return Serenity.StringEditor; }],
            ['AssetZone', function () { return Serenity.StringEditor; }],
            ['AssetsAreaId', function () { return Serenity.StringEditor; }],
            ['AssetRoad', function () { return Serenity.StringEditor; }],
            ['AssetSection', function () { return Serenity.StringEditor; }],
            ['AssetQty', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCondationForm = /** @class */ (function (_super) {
            __extends(AssetsMaintCondationForm, _super);
            function AssetsMaintCondationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCondationForm.formKey = 'EAM.AssetsMaintCondation';
            return AssetsMaintCondationForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsMaintCondationForm = AssetsMaintCondationForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsMaintCondationForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCondationRow;
        (function (AssetsMaintCondationRow) {
            AssetsMaintCondationRow.idProperty = 'ItemId';
            AssetsMaintCondationRow.nameProperty = 'ItemName';
            AssetsMaintCondationRow.localTextPrefix = 'EAM.AssetsMaintCondation';
            AssetsMaintCondationRow.deletePermission = 'Administration:General';
            AssetsMaintCondationRow.insertPermission = 'Administration:General';
            AssetsMaintCondationRow.readPermission = 'Administration:General';
            AssetsMaintCondationRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsMaintCondationRow.Fields || (AssetsMaintCondationRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsMaintCondationRow = EAM.AssetsMaintCondationRow || (EAM.AssetsMaintCondationRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCondationService;
        (function (AssetsMaintCondationService) {
            AssetsMaintCondationService.baseUrl = 'EAM/AssetsMaintCondation';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsMaintCondationService.Methods || (AssetsMaintCondationService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsMaintCondationService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsMaintCondationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsMaintCondationService.baseUrl + '/' + x;
            });
        })(AssetsMaintCondationService = EAM.AssetsMaintCondationService || (EAM.AssetsMaintCondationService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCritForm = /** @class */ (function (_super) {
            __extends(AssetsMaintCritForm, _super);
            function AssetsMaintCritForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCritForm.formKey = 'EAM.AssetsMaintCrit';
            return AssetsMaintCritForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsMaintCritForm = AssetsMaintCritForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsMaintCritForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCritRow;
        (function (AssetsMaintCritRow) {
            AssetsMaintCritRow.idProperty = 'ItemId';
            AssetsMaintCritRow.nameProperty = 'ItemName';
            AssetsMaintCritRow.localTextPrefix = 'EAM.AssetsMaintCrit';
            AssetsMaintCritRow.deletePermission = 'Administration:General';
            AssetsMaintCritRow.insertPermission = 'Administration:General';
            AssetsMaintCritRow.readPermission = 'Administration:General';
            AssetsMaintCritRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsMaintCritRow.Fields || (AssetsMaintCritRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsMaintCritRow = EAM.AssetsMaintCritRow || (EAM.AssetsMaintCritRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCritService;
        (function (AssetsMaintCritService) {
            AssetsMaintCritService.baseUrl = 'EAM/AssetsMaintCrit';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsMaintCritService.Methods || (AssetsMaintCritService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsMaintCritService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsMaintCritService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsMaintCritService.baseUrl + '/' + x;
            });
        })(AssetsMaintCritService = EAM.AssetsMaintCritService || (EAM.AssetsMaintCritService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintSubSetForm = /** @class */ (function (_super) {
            __extends(AssetsMaintSubSetForm, _super);
            function AssetsMaintSubSetForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintSubSetForm.formKey = 'EAM.AssetsMaintSubSet';
            return AssetsMaintSubSetForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsMaintSubSetForm = AssetsMaintSubSetForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsMaintSubSetForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintSubSetRow;
        (function (AssetsMaintSubSetRow) {
            AssetsMaintSubSetRow.idProperty = 'ItemId';
            AssetsMaintSubSetRow.nameProperty = 'ItemName';
            AssetsMaintSubSetRow.localTextPrefix = 'EAM.AssetsMaintSubSet';
            AssetsMaintSubSetRow.deletePermission = 'Administration:General';
            AssetsMaintSubSetRow.insertPermission = 'Administration:General';
            AssetsMaintSubSetRow.readPermission = 'Administration:General';
            AssetsMaintSubSetRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsMaintSubSetRow.Fields || (AssetsMaintSubSetRow.Fields = {}));
            [
                'ItemId',
                'ItemName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsMaintSubSetRow = EAM.AssetsMaintSubSetRow || (EAM.AssetsMaintSubSetRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintSubSetService;
        (function (AssetsMaintSubSetService) {
            AssetsMaintSubSetService.baseUrl = 'EAM/AssetsMaintSubSet';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsMaintSubSetService.Methods || (AssetsMaintSubSetService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsMaintSubSetService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsMaintSubSetService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsMaintSubSetService.baseUrl + '/' + x;
            });
        })(AssetsMaintSubSetService = EAM.AssetsMaintSubSetService || (EAM.AssetsMaintSubSetService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsRow;
        (function (AssetsRow) {
            AssetsRow.idProperty = 'ItemId';
            AssetsRow.nameProperty = 'AsseName';
            AssetsRow.localTextPrefix = 'EAM.Assets';
            AssetsRow.deletePermission = 'Administration:General';
            AssetsRow.insertPermission = 'Administration:General';
            AssetsRow.readPermission = 'Administration:General';
            AssetsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsRow.Fields || (AssetsRow.Fields = {}));
            [
                'ItemId',
                'AsseName',
                'AssetBarcode',
                'AssetSerial',
                'AssetType',
                'AssetCategory',
                'AssetSubCategory',
                'AssetLocation',
                'AssetStartDate',
                'AssetEndDate',
                'AssetMaunfacture',
                'AssetProject',
                'AssetContractor',
                'AssetVendor',
                'AssetInspector',
                'AssetParent',
                'AssetStatus',
                'AssetClass',
                'AssetClassDescription',
                'AssetAutoDepc',
                'AssetDepcMethod',
                'AssetDepcInMonth',
                'AssetDepcPrec',
                'AssetDepcDate',
                'AssetDepcStatus',
                'InstallDate',
                'InstallAccetpedDate',
                'PurchasePrice',
                'YearsOfLife',
                'WarrantyStartDate',
                'WarrantyEndDate',
                'MaintSubSet',
                'MaintCondation',
                'MaintCrit',
                'MaintLastCheckDate',
                'AssetWidth',
                'AssetHight',
                'AssetArea',
                'AssetDimansion',
                'AssetWeight',
                'AssetPower',
                'AssetServiceStatus',
                'MaintPowerConsumption',
                'AssetCity',
                'AssetZone',
                'AssetsAreaId',
                'AssetRoad',
                'AssetSection',
                'AssetQty'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsRow = EAM.AssetsRow || (EAM.AssetsRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsService;
        (function (AssetsService) {
            AssetsService.baseUrl = 'EAM/Assets';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsService.Methods || (AssetsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsService.baseUrl + '/' + x;
            });
        })(AssetsService = EAM.AssetsService || (EAM.AssetsService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSeverityForm = /** @class */ (function (_super) {
            __extends(AssetsSeverityForm, _super);
            function AssetsSeverityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSeverityForm.formKey = 'EAM.AssetsSeverity';
            return AssetsSeverityForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsSeverityForm = AssetsSeverityForm;
        [,
            ['SName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsSeverityForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSeverityRow;
        (function (AssetsSeverityRow) {
            AssetsSeverityRow.idProperty = 'SCode';
            AssetsSeverityRow.nameProperty = 'SCode';
            AssetsSeverityRow.localTextPrefix = 'EAM.AssetsSeverity';
            AssetsSeverityRow.deletePermission = 'Administration:General';
            AssetsSeverityRow.insertPermission = 'Administration:General';
            AssetsSeverityRow.readPermission = 'Administration:General';
            AssetsSeverityRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsSeverityRow.Fields || (AssetsSeverityRow.Fields = {}));
            [
                'SCode',
                'SName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsSeverityRow = EAM.AssetsSeverityRow || (EAM.AssetsSeverityRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSeverityService;
        (function (AssetsSeverityService) {
            AssetsSeverityService.baseUrl = 'EAM/AssetsSeverity';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsSeverityService.Methods || (AssetsSeverityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsSeverityService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsSeverityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsSeverityService.baseUrl + '/' + x;
            });
        })(AssetsSeverityService = EAM.AssetsSeverityService || (EAM.AssetsSeverityService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressForm = /** @class */ (function (_super) {
            __extends(AssetsSurveyDistressForm, _super);
            function AssetsSurveyDistressForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSurveyDistressForm.formKey = 'EAM.AssetsSurveyDistress';
            return AssetsSurveyDistressForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsSurveyDistressForm = AssetsSurveyDistressForm;
        [,
            ['DistressId', function () { return Serenity.IntegerEditor; }],
            ['Severity', function () { return Serenity.StringEditor; }],
            ['Quantity', function () { return Serenity.DecimalEditor; }],
            ['Density', function () { return Serenity.StringEditor; }],
            ['TotalValue', function () { return Serenity.DecimalEditor; }],
            ['Itemsuidref', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsSurveyDistressForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressRow;
        (function (AssetsSurveyDistressRow) {
            AssetsSurveyDistressRow.idProperty = 'Itemdisid';
            AssetsSurveyDistressRow.nameProperty = 'Severity';
            AssetsSurveyDistressRow.localTextPrefix = 'EAM.AssetsSurveyDistress';
            AssetsSurveyDistressRow.deletePermission = 'Administration:General';
            AssetsSurveyDistressRow.insertPermission = 'Administration:General';
            AssetsSurveyDistressRow.readPermission = 'Administration:General';
            AssetsSurveyDistressRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsSurveyDistressRow.Fields || (AssetsSurveyDistressRow.Fields = {}));
            [
                'Itemdisid',
                'DistressId',
                'Severity',
                'Quantity',
                'Density',
                'TotalValue',
                'Itemsuidref'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsSurveyDistressRow = EAM.AssetsSurveyDistressRow || (EAM.AssetsSurveyDistressRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressService;
        (function (AssetsSurveyDistressService) {
            AssetsSurveyDistressService.baseUrl = 'EAM/AssetsSurveyDistress';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsSurveyDistressService.Methods || (AssetsSurveyDistressService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsSurveyDistressService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsSurveyDistressService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsSurveyDistressService.baseUrl + '/' + x;
            });
        })(AssetsSurveyDistressService = EAM.AssetsSurveyDistressService || (EAM.AssetsSurveyDistressService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyForm = /** @class */ (function (_super) {
            __extends(AssetsSurveyForm, _super);
            function AssetsSurveyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSurveyForm.formKey = 'EAM.AssetsSurvey';
            return AssetsSurveyForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsSurveyForm = AssetsSurveyForm;
        [,
            ['AssetsId', function () { return Serenity.IntegerEditor; }],
            ['SurvayDate', function () { return Serenity.DateEditor; }],
            ['SurvayDec', function () { return Serenity.StringEditor; }],
            ['SurvayBy', function () { return Serenity.StringEditor; }],
            ['SurvayResult', function () { return Serenity.StringEditor; }],
            ['SurvayRank', function () { return Serenity.IntegerEditor; }],
            ['SurvayNumber', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsSurveyForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyRow;
        (function (AssetsSurveyRow) {
            AssetsSurveyRow.idProperty = 'Itemsuid';
            AssetsSurveyRow.nameProperty = 'SurvayDec';
            AssetsSurveyRow.localTextPrefix = 'EAM.AssetsSurvey';
            AssetsSurveyRow.deletePermission = 'Administration:General';
            AssetsSurveyRow.insertPermission = 'Administration:General';
            AssetsSurveyRow.readPermission = 'Administration:General';
            AssetsSurveyRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsSurveyRow.Fields || (AssetsSurveyRow.Fields = {}));
            [
                'Itemsuid',
                'AssetsId',
                'SurvayDate',
                'SurvayDec',
                'SurvayBy',
                'SurvayResult',
                'SurvayRank',
                'SurvayNumber'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsSurveyRow = EAM.AssetsSurveyRow || (EAM.AssetsSurveyRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyService;
        (function (AssetsSurveyService) {
            AssetsSurveyService.baseUrl = 'EAM/AssetsSurvey';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsSurveyService.Methods || (AssetsSurveyService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsSurveyService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsSurveyService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsSurveyService.baseUrl + '/' + x;
            });
        })(AssetsSurveyService = EAM.AssetsSurveyService || (EAM.AssetsSurveyService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsTotalCalcForm = /** @class */ (function (_super) {
            __extends(AssetsTotalCalcForm, _super);
            function AssetsTotalCalcForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsTotalCalcForm.formKey = 'EAM.AssetsTotalCalc';
            return AssetsTotalCalcForm;
        }(Serenity.PrefixedContext));
        EAM.AssetsTotalCalcForm = AssetsTotalCalcForm;
        [,
            ['ItemName', function () { return Serenity.StringEditor; }],
            ['ItemOp', function () { return Serenity.StringEditor; }],
            ['ItemValue', function () { return Serenity.DecimalEditor; }],
            ['ItemThen', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AssetsTotalCalcForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsTotalCalcRow;
        (function (AssetsTotalCalcRow) {
            AssetsTotalCalcRow.idProperty = 'ItemId';
            AssetsTotalCalcRow.nameProperty = 'ItemName';
            AssetsTotalCalcRow.localTextPrefix = 'EAM.AssetsTotalCalc';
            AssetsTotalCalcRow.deletePermission = 'Administration:General';
            AssetsTotalCalcRow.insertPermission = 'Administration:General';
            AssetsTotalCalcRow.readPermission = 'Administration:General';
            AssetsTotalCalcRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = AssetsTotalCalcRow.Fields || (AssetsTotalCalcRow.Fields = {}));
            [
                'ItemId',
                'ItemName',
                'ItemOp',
                'ItemValue',
                'ItemThen'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AssetsTotalCalcRow = EAM.AssetsTotalCalcRow || (EAM.AssetsTotalCalcRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsTotalCalcService;
        (function (AssetsTotalCalcService) {
            AssetsTotalCalcService.baseUrl = 'EAM/AssetsTotalCalc';
            var Methods;
            (function (Methods) {
            })(Methods = AssetsTotalCalcService.Methods || (AssetsTotalCalcService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetsTotalCalcService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetsTotalCalcService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AssetsTotalCalcService.baseUrl + '/' + x;
            });
        })(AssetsTotalCalcService = EAM.AssetsTotalCalcService || (EAM.AssetsTotalCalcService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var OpValuesForm = /** @class */ (function (_super) {
            __extends(OpValuesForm, _super);
            function OpValuesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OpValuesForm.formKey = 'EAM.OpValues';
            return OpValuesForm;
        }(Serenity.PrefixedContext));
        EAM.OpValuesForm = OpValuesForm;
        [].forEach(function (x) { return Object.defineProperty(OpValuesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var OpValuesRow;
        (function (OpValuesRow) {
            OpValuesRow.idProperty = 'OpValues';
            OpValuesRow.nameProperty = 'OpValues';
            OpValuesRow.localTextPrefix = 'EAM.OpValues';
            OpValuesRow.deletePermission = 'Administration:General';
            OpValuesRow.insertPermission = 'Administration:General';
            OpValuesRow.readPermission = 'Administration:General';
            OpValuesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = OpValuesRow.Fields || (OpValuesRow.Fields = {}));
            [
                'OpValues'
            ].forEach(function (x) { return Fields[x] = x; });
        })(OpValuesRow = EAM.OpValuesRow || (EAM.OpValuesRow = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var OpValuesService;
        (function (OpValuesService) {
            OpValuesService.baseUrl = 'EAM/OpValues';
            var Methods;
            (function (Methods) {
            })(Methods = OpValuesService.Methods || (OpValuesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OpValuesService[x] = function (r, s, o) {
                    return Q.serviceRequest(OpValuesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = OpValuesService.baseUrl + '/' + x;
            });
        })(OpValuesService = EAM.OpValuesService || (EAM.OpValuesService = {}));
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    var w7 = s.IntegerEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2,
                        'IqamaID', w7,
                        'MobileNumber', w7
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Texts;
    (function (Texts) {
        PMMS['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = PMMS.Texts || (PMMS.Texts = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var AuditLogDialog = /** @class */ (function (_super) {
            __extends(AuditLogDialog, _super);
            function AuditLogDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AuditLogDialog.prototype.getFormKey = function () { return Administration.AuditLogForm.formKey; };
            AuditLogDialog.prototype.getIdProperty = function () { return Administration.AuditLogRow.idProperty; };
            AuditLogDialog.prototype.getLocalTextPrefix = function () { return Administration.AuditLogRow.localTextPrefix; };
            AuditLogDialog.prototype.getNameProperty = function () { return Administration.AuditLogRow.nameProperty; };
            AuditLogDialog.prototype.getService = function () { return Administration.AuditLogService.baseUrl; };
            AuditLogDialog.prototype.getDeletePermission = function () { return Administration.AuditLogRow.insertPermission; };
            /**
           * This is the method that gets list of tool
           * buttons to be created in a dialog.
           *
           * Here we'll remove save and close button, and
           * apply changes buttons.
           */
            AuditLogDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            AuditLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            AuditLogDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "You can not create any file here";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            AuditLogDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            AuditLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditLogDialog);
            return AuditLogDialog;
        }(Serenity.EntityDialog));
        Administration.AuditLogDialog = AuditLogDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var AuditLogGrid = /** @class */ (function (_super) {
            __extends(AuditLogGrid, _super);
            function AuditLogGrid(container) {
                return _super.call(this, container) || this;
            }
            AuditLogGrid.prototype.getColumnsKey = function () { return 'Administration.AuditLog'; };
            AuditLogGrid.prototype.getDialogType = function () { return Administration.AuditLogDialog; };
            AuditLogGrid.prototype.getIdProperty = function () { return Administration.AuditLogRow.idProperty; };
            AuditLogGrid.prototype.getInsertPermission = function () { return Administration.AuditLogRow.insertPermission; };
            /**
             * Removing add button from grid using its css class
             */
            AuditLogGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            AuditLogGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], AuditLogGrid);
            return AuditLogGrid;
        }(Serenity.EntityGrid));
        Administration.AuditLogGrid = AuditLogGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var CustomReportsDialog = /** @class */ (function (_super) {
            __extends(CustomReportsDialog, _super);
            function CustomReportsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomReportsDialog.prototype.getFormKey = function () { return Administration.CustomReportsForm.formKey; };
            CustomReportsDialog.prototype.getIdProperty = function () { return Administration.CustomReportsRow.idProperty; };
            CustomReportsDialog.prototype.getLocalTextPrefix = function () { return Administration.CustomReportsRow.localTextPrefix; };
            CustomReportsDialog.prototype.getNameProperty = function () { return Administration.CustomReportsRow.nameProperty; };
            CustomReportsDialog.prototype.getService = function () { return Administration.CustomReportsService.baseUrl; };
            CustomReportsDialog.prototype.getDeletePermission = function () { return Administration.CustomReportsRow.insertPermission; };
            CustomReportsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomReportsDialog);
            return CustomReportsDialog;
        }(Serenity.EntityDialog));
        Administration.CustomReportsDialog = CustomReportsDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var CustomReportsGrid = /** @class */ (function (_super) {
            __extends(CustomReportsGrid, _super);
            function CustomReportsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomReportsGrid.prototype.getColumnsKey = function () { return 'Administration.CustomReports'; };
            CustomReportsGrid.prototype.getDialogType = function () { return Administration.CustomReportsDialog; };
            CustomReportsGrid.prototype.getIdProperty = function () { return Administration.CustomReportsRow.idProperty; };
            CustomReportsGrid.prototype.getInsertPermission = function () { return Administration.CustomReportsRow.insertPermission; };
            CustomReportsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomReportsGrid);
            return CustomReportsGrid;
        }(Serenity.EntityGrid));
        Administration.CustomReportsGrid = CustomReportsGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var GisLayerConnectionsDialog = /** @class */ (function (_super) {
            __extends(GisLayerConnectionsDialog, _super);
            function GisLayerConnectionsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GisLayerConnectionsDialog.prototype.getFormKey = function () { return Administration.GisLayerConnectionsForm.formKey; };
            GisLayerConnectionsDialog.prototype.getIdProperty = function () { return Administration.GisLayerConnectionsRow.idProperty; };
            GisLayerConnectionsDialog.prototype.getLocalTextPrefix = function () { return Administration.GisLayerConnectionsRow.localTextPrefix; };
            GisLayerConnectionsDialog.prototype.getNameProperty = function () { return Administration.GisLayerConnectionsRow.nameProperty; };
            GisLayerConnectionsDialog.prototype.getService = function () { return Administration.GisLayerConnectionsService.baseUrl; };
            GisLayerConnectionsDialog.prototype.getDeletePermission = function () { return Administration.GisLayerConnectionsRow.insertPermission; };
            GisLayerConnectionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GisLayerConnectionsDialog);
            return GisLayerConnectionsDialog;
        }(Serenity.EntityDialog));
        Administration.GisLayerConnectionsDialog = GisLayerConnectionsDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var GisLayerConnectionsGrid = /** @class */ (function (_super) {
            __extends(GisLayerConnectionsGrid, _super);
            function GisLayerConnectionsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GisLayerConnectionsGrid.prototype.getColumnsKey = function () { return 'Administration.GisLayerConnections'; };
            GisLayerConnectionsGrid.prototype.getDialogType = function () { return Administration.GisLayerConnectionsDialog; };
            GisLayerConnectionsGrid.prototype.getIdProperty = function () { return Administration.GisLayerConnectionsRow.idProperty; };
            GisLayerConnectionsGrid.prototype.getInsertPermission = function () { return Administration.GisLayerConnectionsRow.insertPermission; };
            GisLayerConnectionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GisLayerConnectionsGrid);
            return GisLayerConnectionsGrid;
        }(Serenity.EntityGrid));
        Administration.GisLayerConnectionsGrid = GisLayerConnectionsGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.view.setGrouping([{
                        getter: 'UserTypeName'
                    }]);
                return _this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Group By User Type',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            getter: 'UserTypeName'
                        }]); }
                }, {
                    title: 'No Grouping',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = PMMS.Authorization || (PMMS.Authorization = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGroupsDialog = /** @class */ (function (_super) {
            __extends(UserGroupsDialog, _super);
            function UserGroupsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserGroupsDialog.prototype.getFormKey = function () { return Administration.UserGroupsForm.formKey; };
            UserGroupsDialog.prototype.getIdProperty = function () { return Administration.UserGroupsRow.idProperty; };
            UserGroupsDialog.prototype.getLocalTextPrefix = function () { return Administration.UserGroupsRow.localTextPrefix; };
            UserGroupsDialog.prototype.getNameProperty = function () { return Administration.UserGroupsRow.nameProperty; };
            UserGroupsDialog.prototype.getService = function () { return Administration.UserGroupsService.baseUrl; };
            UserGroupsDialog.prototype.getDeletePermission = function () { return Administration.UserGroupsRow.insertPermission; };
            UserGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGroupsDialog);
            return UserGroupsDialog;
        }(Serenity.EntityDialog));
        Administration.UserGroupsDialog = UserGroupsDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserGroupsGrid = /** @class */ (function (_super) {
            __extends(UserGroupsGrid, _super);
            function UserGroupsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserGroupsGrid.prototype.getColumnsKey = function () { return 'Administration.UserGroups'; };
            UserGroupsGrid.prototype.getDialogType = function () { return Administration.UserGroupsDialog; };
            UserGroupsGrid.prototype.getIdProperty = function () { return Administration.UserGroupsRow.idProperty; };
            UserGroupsGrid.prototype.getInsertPermission = function () { return Administration.UserGroupsRow.insertPermission; };
            UserGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGroupsGrid);
            return UserGroupsGrid;
        }(Serenity.EntityGrid));
        Administration.UserGroupsGrid = UserGroupsGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowStagesDialog = /** @class */ (function (_super) {
            __extends(WorkFlowStagesDialog, _super);
            function WorkFlowStagesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowStagesDialog.prototype.getFormKey = function () { return Administration.WorkFlowStagesForm.formKey; };
            WorkFlowStagesDialog.prototype.getIdProperty = function () { return Administration.WorkFlowStagesRow.idProperty; };
            WorkFlowStagesDialog.prototype.getLocalTextPrefix = function () { return Administration.WorkFlowStagesRow.localTextPrefix; };
            WorkFlowStagesDialog.prototype.getNameProperty = function () { return Administration.WorkFlowStagesRow.nameProperty; };
            WorkFlowStagesDialog.prototype.getService = function () { return Administration.WorkFlowStagesService.baseUrl; };
            WorkFlowStagesDialog.prototype.getDeletePermission = function () { return Administration.WorkFlowStagesRow.insertPermission; };
            WorkFlowStagesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkFlowStagesDialog);
            return WorkFlowStagesDialog;
        }(Serenity.EntityDialog));
        Administration.WorkFlowStagesDialog = WorkFlowStagesDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowStagesGrid = /** @class */ (function (_super) {
            __extends(WorkFlowStagesGrid, _super);
            function WorkFlowStagesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowStagesGrid.prototype.getColumnsKey = function () { return 'Administration.WorkFlowStages'; };
            WorkFlowStagesGrid.prototype.getDialogType = function () { return Administration.WorkFlowStagesDialog; };
            WorkFlowStagesGrid.prototype.getIdProperty = function () { return Administration.WorkFlowStagesRow.idProperty; };
            WorkFlowStagesGrid.prototype.getInsertPermission = function () { return Administration.WorkFlowStagesRow.insertPermission; };
            WorkFlowStagesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkFlowStagesGrid);
            return WorkFlowStagesGrid;
        }(Serenity.EntityGrid));
        Administration.WorkFlowStagesGrid = WorkFlowStagesGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowUserTypeDialog = /** @class */ (function (_super) {
            __extends(WorkFlowUserTypeDialog, _super);
            function WorkFlowUserTypeDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowUserTypeDialog.prototype.getFormKey = function () { return Administration.WorkFlowUserTypeForm.formKey; };
            WorkFlowUserTypeDialog.prototype.getIdProperty = function () { return Administration.WorkFlowUserTypeRow.idProperty; };
            WorkFlowUserTypeDialog.prototype.getLocalTextPrefix = function () { return Administration.WorkFlowUserTypeRow.localTextPrefix; };
            WorkFlowUserTypeDialog.prototype.getNameProperty = function () { return Administration.WorkFlowUserTypeRow.nameProperty; };
            WorkFlowUserTypeDialog.prototype.getService = function () { return Administration.WorkFlowUserTypeService.baseUrl; };
            WorkFlowUserTypeDialog.prototype.getDeletePermission = function () { return Administration.WorkFlowUserTypeRow.insertPermission; };
            WorkFlowUserTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkFlowUserTypeDialog);
            return WorkFlowUserTypeDialog;
        }(Serenity.EntityDialog));
        Administration.WorkFlowUserTypeDialog = WorkFlowUserTypeDialog;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Administration;
    (function (Administration) {
        var WorkFlowUserTypeGrid = /** @class */ (function (_super) {
            __extends(WorkFlowUserTypeGrid, _super);
            function WorkFlowUserTypeGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkFlowUserTypeGrid.prototype.getColumnsKey = function () { return 'Administration.WorkFlowUserType'; };
            WorkFlowUserTypeGrid.prototype.getDialogType = function () { return Administration.WorkFlowUserTypeDialog; };
            WorkFlowUserTypeGrid.prototype.getIdProperty = function () { return Administration.WorkFlowUserTypeRow.idProperty; };
            WorkFlowUserTypeGrid.prototype.getInsertPermission = function () { return Administration.WorkFlowUserTypeRow.insertPermission; };
            WorkFlowUserTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkFlowUserTypeGrid);
            return WorkFlowUserTypeGrid;
        }(Serenity.EntityGrid));
        Administration.WorkFlowUserTypeGrid = WorkFlowUserTypeGrid;
    })(Administration = PMMS.Administration || (PMMS.Administration = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsDialog = /** @class */ (function (_super) {
            __extends(CustomDashboardsDialog, _super);
            function CustomDashboardsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomDashboardsDialog.prototype.getFormKey = function () { return BI.CustomDashboardsForm.formKey; };
            CustomDashboardsDialog.prototype.getIdProperty = function () { return BI.CustomDashboardsRow.idProperty; };
            CustomDashboardsDialog.prototype.getLocalTextPrefix = function () { return BI.CustomDashboardsRow.localTextPrefix; };
            CustomDashboardsDialog.prototype.getNameProperty = function () { return BI.CustomDashboardsRow.nameProperty; };
            CustomDashboardsDialog.prototype.getService = function () { return BI.CustomDashboardsService.baseUrl; };
            CustomDashboardsDialog.prototype.getDeletePermission = function () { return BI.CustomDashboardsRow.insertPermission; };
            CustomDashboardsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomDashboardsDialog);
            return CustomDashboardsDialog;
        }(Serenity.EntityDialog));
        BI.CustomDashboardsDialog = CustomDashboardsDialog;
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsGrid = /** @class */ (function (_super) {
            __extends(CustomDashboardsGrid, _super);
            function CustomDashboardsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomDashboardsGrid.prototype.getColumnsKey = function () { return 'BI.CustomDashboards'; };
            CustomDashboardsGrid.prototype.getDialogType = function () { return BI.CustomDashboardsDialog; };
            CustomDashboardsGrid.prototype.getIdProperty = function () { return BI.CustomDashboardsRow.idProperty; };
            CustomDashboardsGrid.prototype.getInsertPermission = function () { return BI.CustomDashboardsRow.insertPermission; };
            CustomDashboardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomDashboardsGrid);
            return CustomDashboardsGrid;
        }(Serenity.EntityGrid));
        BI.CustomDashboardsGrid = CustomDashboardsGrid;
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsDialog = /** @class */ (function (_super) {
            __extends(CustomDashboardsScriptsDialog, _super);
            function CustomDashboardsScriptsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BI.CustomDashboardsScriptsForm(_this.idPrefix);
                return _this;
            }
            CustomDashboardsScriptsDialog.prototype.getFormKey = function () { return BI.CustomDashboardsScriptsForm.formKey; };
            //protected getIdProperty() { return CustomDashboardsScriptsRow.idProperty; }
            CustomDashboardsScriptsDialog.prototype.getLocalTextPrefix = function () { return BI.CustomDashboardsScriptsRow.localTextPrefix; };
            CustomDashboardsScriptsDialog.prototype.getNameProperty = function () { return BI.CustomDashboardsScriptsRow.nameProperty; };
            CustomDashboardsScriptsDialog.prototype.getService = function () { return BI.CustomDashboardsScriptsService.baseUrl; };
            CustomDashboardsScriptsDialog.prototype.getDeletePermission = function () { return BI.CustomDashboardsScriptsRow.insertPermission; };
            CustomDashboardsScriptsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomDashboardsScriptsDialog);
            return CustomDashboardsScriptsDialog;
        }(PMMS.Common.GridEditorDialog));
        BI.CustomDashboardsScriptsDialog = CustomDashboardsScriptsDialog;
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsEditor = /** @class */ (function (_super) {
            __extends(CustomDashboardsScriptsEditor, _super);
            function CustomDashboardsScriptsEditor(container) {
                return _super.call(this, container) || this;
            }
            CustomDashboardsScriptsEditor.prototype.getColumnsKey = function () { return "BI.CustomDashboardsScripts"; };
            CustomDashboardsScriptsEditor.prototype.getDialogType = function () { return BI.CustomDashboardsScriptsDialog; };
            CustomDashboardsScriptsEditor.prototype.getLocalTextPrefix = function () { return BI.CustomDashboardsScriptsRow.localTextPrefix; };
            CustomDashboardsScriptsEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            CustomDashboardsScriptsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomDashboardsScriptsEditor);
            return CustomDashboardsScriptsEditor;
        }(PMMS.Common.GridEditorBase));
        BI.CustomDashboardsScriptsEditor = CustomDashboardsScriptsEditor;
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BI;
    (function (BI) {
        var CustomDashboardsScriptsGrid = /** @class */ (function (_super) {
            __extends(CustomDashboardsScriptsGrid, _super);
            function CustomDashboardsScriptsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomDashboardsScriptsGrid.prototype.getColumnsKey = function () { return 'BI.CustomDashboardsScripts'; };
            CustomDashboardsScriptsGrid.prototype.getDialogType = function () { return BI.CustomDashboardsScriptsDialog; };
            CustomDashboardsScriptsGrid.prototype.getIdProperty = function () { return BI.CustomDashboardsScriptsRow.idProperty; };
            CustomDashboardsScriptsGrid.prototype.getInsertPermission = function () { return BI.CustomDashboardsScriptsRow.insertPermission; };
            CustomDashboardsScriptsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomDashboardsScriptsGrid);
            return CustomDashboardsScriptsGrid;
        }(Serenity.EntityGrid));
        BI.CustomDashboardsScriptsGrid = CustomDashboardsScriptsGrid;
    })(BI = PMMS.BI || (PMMS.BI = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = PMMS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = PMMS.LanguageList || (PMMS.LanguageList = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />
var PMMS;
(function (PMMS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('PMMS');
        Serenity.DataGrid.defaultPersistanceStorage = new PMMS.Common.UserPreferenceStorage();
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = PMMS.ScriptInitialization || (PMMS.ScriptInitialization = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    PMMS.BasicProgressDialog = BasicProgressDialog;
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new PMMS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = PMMS.DialogUtils || (PMMS.DialogUtils = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    PMMS.StaticTextBlock = StaticTextBlock;
})(PMMS || (PMMS = {}));
var SereneLargeFileUpload;
(function (SereneLargeFileUpload) {
    var Element = Serenity.Decorators.element;
    var LargeFileUploadEditor = /** @class */ (function (_super) {
        __extends(LargeFileUploadEditor, _super);
        function LargeFileUploadEditor(div, opt) {
            var _this = _super.call(this, div, opt) || this;
            _this.entities = [];
            div.addClass('s-MultipleImageUploadEditor');
            var self = _this;
            _this.toolbar = new Serenity.Toolbar($('<div/>').appendTo(_this.element), {
                buttons: _this.getToolButtons()
            });
            var progress = $('<div><div></div></div>')
                .addClass('upload-progress').prependTo(_this.toolbar.element);
            var addFileButton = _this.toolbar.findButton('add-file-button');
            _this.uploadInput = Serenity.UploadHelper.addLargeFileUploadInput({
                container: addFileButton,
                zone: _this.element,
                inputName: _this.uniqueName,
                progress: progress,
                fileDone: function (response, name, data) {
                    var newEntity = { OriginalName: name, Filename: response.TemporaryFile };
                    self.entities.push(newEntity);
                    self.populate();
                    self.updateInterface();
                }
            });
            _this.fileSymbols = $('<ul/>').appendTo(_this.element);
            _this.updateInterface();
            return _this;
        }
        LargeFileUploadEditor.prototype.addFileButtonText = function () {
            return Q.text('Controls.ImageUpload.AddFileButton');
        };
        LargeFileUploadEditor.prototype.getToolButtons = function () {
            return [{
                    title: this.addFileButtonText(),
                    cssClass: 'add-file-button',
                    onClick: function () {
                    }
                }];
        };
        LargeFileUploadEditor.prototype.populate = function () {
            var _this = this;
            Serenity.UploadHelper.populateFileSymbols(this.fileSymbols, this.entities, true, this.options.urlPrefix);
            this.fileSymbols.children().each(function (i, e) {
                var x = i;
                $("<a class='delete'></a>").appendTo($(e).children('.filename'))
                    .click(function (ev) {
                    ev.preventDefault();
                    ss.removeAt(_this.entities, x);
                    _this.populate();
                });
            });
        };
        LargeFileUploadEditor.prototype.updateInterface = function () {
            var addButton = this.toolbar.findButton('add-file-button');
            addButton.toggleClass('disabled', this.get_readOnly());
            this.fileSymbols.find('a.delete').toggle(!this.get_readOnly());
        };
        LargeFileUploadEditor.prototype.get_readOnly = function () {
            return this.uploadInput.attr('disabled') != null;
        };
        LargeFileUploadEditor.prototype.set_readOnly = function (value) {
            if (this.get_readOnly() !== value) {
                if (value) {
                    this.uploadInput.attr('disabled', 'disabled').fileupload('disable');
                }
                else {
                    this.uploadInput.removeAttr('disabled').fileupload('enable');
                }
                this.updateInterface();
            }
        };
        LargeFileUploadEditor.prototype.get_value = function () {
            return this.entities.map(function (x) {
                return $.extend({}, x);
            });
        };
        Object.defineProperty(LargeFileUploadEditor.prototype, "value", {
            get: function () {
                return this.get_value();
            },
            set: function (v) {
                this.set_value(v);
            },
            enumerable: true,
            configurable: true
        });
        LargeFileUploadEditor.prototype.set_value = function (value) {
            this.entities = (value || []).map(function (x) {
                return $.extend({}, x);
            });
            this.populate();
            this.updateInterface();
        };
        LargeFileUploadEditor.prototype.getEditValue = function (property, target) {
            target[property.name] = $.toJSON(this.get_value());
        };
        LargeFileUploadEditor.prototype.setEditValue = function (source, property) {
            var val = source[property.name];
            if (ss.isInstanceOfType(val, String)) {
                var json = Q.coalesce(Q.trimToNull(val), '[]');
                if (Q.startsWith(json, '[') && Q.endsWith(json, ']')) {
                    this.set_value($.parseJSON(json));
                }
                else {
                    this.set_value([{
                            Filename: json,
                            OriginalName: 'UnknownFile'
                        }]);
                }
            }
            else {
                this.set_value(val);
            }
        };
        LargeFileUploadEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IReadOnly, Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Element('<div/>')
        ], LargeFileUploadEditor);
        return LargeFileUploadEditor;
    }(Serenity.Widget));
    SereneLargeFileUpload.LargeFileUploadEditor = LargeFileUploadEditor;
})(SereneLargeFileUpload || (SereneLargeFileUpload = {}));
var Serenity;
(function (Serenity) {
    var UploadHelper;
    (function (UploadHelper) {
        function addLargeFileUploadInput(options) {
            options.container.addClass('fileinput-button');
            var uploadInput = $('<input/>').attr('type', 'file')
                .attr('name', options.inputName + '[]')
                .attr('data-url', Q.resolveUrl('~/api/fileupload/'))
                .attr('multiple', 'multiple')
                .appendTo(options.container);
            if (options.allowMultiple) {
                uploadInput.attr('multiple', 'multiple');
            }
            uploadInput.fileupload({
                multipart: true,
                maxChunkSize: 4000000,
                dropZone: options.zone,
                pasteZone: options.zone,
                done: function (e, data) {
                    var response = data.result;
                    if (options.fileDone != null) {
                        options.fileDone(response, data.files[0].name, data);
                    }
                },
                start: function () {
                    Q.blockUI(null);
                    if (options.progress != null) {
                        options.progress.show();
                    }
                },
                stop: function () {
                    Q.blockUndo();
                    if (options.progress != null) {
                        options.progress.hide();
                    }
                },
                progressall: function (e1, data1) {
                    if (options.progress != null) {
                        var percent = data1.loaded / data1.total * 100;
                        options.progress.children().css('width', percent.toString() + '%');
                    }
                },
                submit: function (e, data) {
                    var file = data.files[0];
                    var cm = Date.now().toString(36) + Math.random().toString(36).substr(9);
                    //data.headers = $.extend(data.headers, { 'X-File-Token': Q.Authorization.username + cm });
                    data.headers = $.extend(data.headers, { 'X-File-Token': cm });
                }
            });
            return uploadInput;
        }
        UploadHelper.addLargeFileUploadInput = addLargeFileUploadInput;
    })(UploadHelper = Serenity.UploadHelper || (Serenity.UploadHelper = {}));
})(Serenity || (Serenity = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var FontSelection = /** @class */ (function (_super) {
            __extends(FontSelection, _super);
            function FontSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('FontPreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('FontPreference-' + _this.getCurrentTheme());
                    $('body').addClass('FontPreference-' + theme);
                });
                Q.addOption(select, 'Default', 'Default');
                Q.addOption(select, 'Cairo', 'Cairo');
                Q.addOption(select, 'Sanserif', 'Sanserif');
                Q.addOption(select, 'Tahoma', 'Tahoma');
                Q.addOption(select, 'another', 'another');
                select.val(_this.getCurrentTheme());
                return _this;
            }
            FontSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'FontPreference-'); });
                if (skinClass) {
                    return skinClass.substr(15);
                }
                return 'Default';
            };
            return FontSelection;
        }(Serenity.Widget));
        Common.FontSelection = FontSelection;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                //Q.addOption(select, 'azure-light','azure-light');
                //Q.addOption(select, 'azure','azure');
                //Q.addOption(select, 'cosmos','cosmos');
                //Q.addOption(select, 'cosmos-light','cosmos-light');
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                //  Q.addOption(select, 'glassy', 'Glassy');
                //Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                //Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                //Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                //Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                //Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                //Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                //Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                //Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                //Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                //Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                //var skinClass = Q.first(($('body').attr('class') || '').split(' '), x => Q.startsWith(x, 'skin-'));
                //if (skinClass) {
                //    return skinClass.substr(5);
                //}
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                console.log(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function createFastReportToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.executeRemote(options);
                    }
                };
            }
            ReportHelper.createFastReportToolButton = createFastReportToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
            function executeRemote(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                var url = (window.location).href;
                var id = url.substring(url.lastIndexOf('/') + 1);
                Q.postToUrl({
                    url: options.URL + id,
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.executeRemote = executeRemote;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = PMMS.Common || (PMMS.Common = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AreasDialog = /** @class */ (function (_super) {
            __extends(AreasDialog, _super);
            function AreasDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AreasDialog.prototype.getFormKey = function () { return Default.AreasForm.formKey; };
            AreasDialog.prototype.getIdProperty = function () { return Default.AreasRow.idProperty; };
            AreasDialog.prototype.getLocalTextPrefix = function () { return Default.AreasRow.localTextPrefix; };
            AreasDialog.prototype.getNameProperty = function () { return Default.AreasRow.nameProperty; };
            AreasDialog.prototype.getService = function () { return Default.AreasService.baseUrl; };
            AreasDialog.prototype.getDeletePermission = function () { return Default.AreasRow.insertPermission; };
            AreasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AreasDialog);
            return AreasDialog;
        }(Serenity.EntityDialog));
        Default.AreasDialog = AreasDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var AreasGrid = /** @class */ (function (_super) {
            __extends(AreasGrid, _super);
            function AreasGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AreasGrid.prototype.getColumnsKey = function () { return 'Default.Areas'; };
            AreasGrid.prototype.getDialogType = function () { return Default.AreasDialog; };
            AreasGrid.prototype.getIdProperty = function () { return Default.AreasRow.idProperty; };
            AreasGrid.prototype.getInsertPermission = function () { return Default.AreasRow.insertPermission; };
            AreasGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], AreasGrid);
            return AreasGrid;
        }(Serenity.EntityGrid));
        Default.AreasGrid = AreasGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var BugsListDialog = /** @class */ (function (_super) {
            __extends(BugsListDialog, _super);
            function BugsListDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BugsListDialog.prototype.getFormKey = function () { return Default.BugsListForm.formKey; };
            BugsListDialog.prototype.getIdProperty = function () { return Default.BugsListRow.idProperty; };
            BugsListDialog.prototype.getLocalTextPrefix = function () { return Default.BugsListRow.localTextPrefix; };
            BugsListDialog.prototype.getNameProperty = function () { return Default.BugsListRow.nameProperty; };
            BugsListDialog.prototype.getService = function () { return Default.BugsListService.baseUrl; };
            BugsListDialog.prototype.getDeletePermission = function () { return Default.BugsListRow.insertPermission; };
            BugsListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BugsListDialog);
            return BugsListDialog;
        }(Serenity.EntityDialog));
        Default.BugsListDialog = BugsListDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var BugsListGrid = /** @class */ (function (_super) {
            __extends(BugsListGrid, _super);
            function BugsListGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BugsListGrid.prototype.getColumnsKey = function () { return 'Default.BugsList'; };
            BugsListGrid.prototype.getDialogType = function () { return Default.BugsListDialog; };
            BugsListGrid.prototype.getIdProperty = function () { return Default.BugsListRow.idProperty; };
            BugsListGrid.prototype.getInsertPermission = function () { return Default.BugsListRow.insertPermission; };
            BugsListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BugsListGrid);
            return BugsListGrid;
        }(Serenity.EntityGrid));
        Default.BugsListGrid = BugsListGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var CityDialog = /** @class */ (function (_super) {
            __extends(CityDialog, _super);
            function CityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CityDialog.prototype.getFormKey = function () { return Default.CityForm.formKey; };
            CityDialog.prototype.getIdProperty = function () { return Default.CityRow.idProperty; };
            CityDialog.prototype.getLocalTextPrefix = function () { return Default.CityRow.localTextPrefix; };
            CityDialog.prototype.getNameProperty = function () { return Default.CityRow.nameProperty; };
            CityDialog.prototype.getService = function () { return Default.CityService.baseUrl; };
            CityDialog.prototype.getDeletePermission = function () { return Default.CityRow.insertPermission; };
            CityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CityDialog);
            return CityDialog;
        }(Serenity.EntityDialog));
        Default.CityDialog = CityDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var CityGrid = /** @class */ (function (_super) {
            __extends(CityGrid, _super);
            function CityGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CityGrid.prototype.getColumnsKey = function () { return 'Default.City'; };
            CityGrid.prototype.getDialogType = function () { return Default.CityDialog; };
            CityGrid.prototype.getIdProperty = function () { return Default.CityRow.idProperty; };
            CityGrid.prototype.getInsertPermission = function () { return Default.CityRow.insertPermission; };
            CityGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CityGrid);
            return CityGrid;
        }(Serenity.EntityGrid));
        Default.CityGrid = CityGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ContractorsDialog = /** @class */ (function (_super) {
            __extends(ContractorsDialog, _super);
            function ContractorsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContractorsDialog.prototype.getFormKey = function () { return Default.ContractorsForm.formKey; };
            ContractorsDialog.prototype.getIdProperty = function () { return Default.ContractorsRow.idProperty; };
            ContractorsDialog.prototype.getLocalTextPrefix = function () { return Default.ContractorsRow.localTextPrefix; };
            ContractorsDialog.prototype.getNameProperty = function () { return Default.ContractorsRow.nameProperty; };
            ContractorsDialog.prototype.getService = function () { return Default.ContractorsService.baseUrl; };
            ContractorsDialog.prototype.getDeletePermission = function () { return Default.ContractorsRow.insertPermission; };
            ContractorsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContractorsDialog);
            return ContractorsDialog;
        }(Serenity.EntityDialog));
        Default.ContractorsDialog = ContractorsDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ContractorsGrid = /** @class */ (function (_super) {
            __extends(ContractorsGrid, _super);
            function ContractorsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContractorsGrid.prototype.getColumnsKey = function () { return 'Default.Contractors'; };
            ContractorsGrid.prototype.getDialogType = function () { return Default.ContractorsDialog; };
            ContractorsGrid.prototype.getIdProperty = function () { return Default.ContractorsRow.idProperty; };
            ContractorsGrid.prototype.getInsertPermission = function () { return Default.ContractorsRow.insertPermission; };
            ContractorsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ContractorsGrid);
            return ContractorsGrid;
        }(Serenity.EntityGrid));
        Default.ContractorsGrid = ContractorsGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DepartmentDialog = /** @class */ (function (_super) {
            __extends(DepartmentDialog, _super);
            function DepartmentDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DepartmentDialog.prototype.getFormKey = function () { return Default.DepartmentForm.formKey; };
            DepartmentDialog.prototype.getIdProperty = function () { return Default.DepartmentRow.idProperty; };
            DepartmentDialog.prototype.getLocalTextPrefix = function () { return Default.DepartmentRow.localTextPrefix; };
            DepartmentDialog.prototype.getNameProperty = function () { return Default.DepartmentRow.nameProperty; };
            DepartmentDialog.prototype.getService = function () { return Default.DepartmentService.baseUrl; };
            DepartmentDialog.prototype.getDeletePermission = function () { return Default.DepartmentRow.insertPermission; };
            DepartmentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentDialog);
            return DepartmentDialog;
        }(Serenity.EntityDialog));
        Default.DepartmentDialog = DepartmentDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DepartmentGrid = /** @class */ (function (_super) {
            __extends(DepartmentGrid, _super);
            function DepartmentGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DepartmentGrid.prototype.getColumnsKey = function () { return 'Default.Department'; };
            DepartmentGrid.prototype.getDialogType = function () { return Default.DepartmentDialog; };
            DepartmentGrid.prototype.getIdProperty = function () { return Default.DepartmentRow.idProperty; };
            DepartmentGrid.prototype.getInsertPermission = function () { return Default.DepartmentRow.insertPermission; };
            DepartmentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentGrid);
            return DepartmentGrid;
        }(Serenity.EntityGrid));
        Default.DepartmentGrid = DepartmentGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DirectionDialog = /** @class */ (function (_super) {
            __extends(DirectionDialog, _super);
            function DirectionDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DirectionDialog.prototype.getFormKey = function () { return Default.DirectionForm.formKey; };
            DirectionDialog.prototype.getIdProperty = function () { return Default.DirectionRow.idProperty; };
            DirectionDialog.prototype.getLocalTextPrefix = function () { return Default.DirectionRow.localTextPrefix; };
            DirectionDialog.prototype.getNameProperty = function () { return Default.DirectionRow.nameProperty; };
            DirectionDialog.prototype.getService = function () { return Default.DirectionService.baseUrl; };
            DirectionDialog.prototype.getDeletePermission = function () { return Default.DirectionRow.insertPermission; };
            DirectionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DirectionDialog);
            return DirectionDialog;
        }(Serenity.EntityDialog));
        Default.DirectionDialog = DirectionDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var DirectionGrid = /** @class */ (function (_super) {
            __extends(DirectionGrid, _super);
            function DirectionGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DirectionGrid.prototype.getColumnsKey = function () { return 'Default.Direction'; };
            DirectionGrid.prototype.getDialogType = function () { return Default.DirectionDialog; };
            DirectionGrid.prototype.getIdProperty = function () { return Default.DirectionRow.idProperty; };
            DirectionGrid.prototype.getInsertPermission = function () { return Default.DirectionRow.insertPermission; };
            DirectionGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], DirectionGrid);
            return DirectionGrid;
        }(Serenity.EntityGrid));
        Default.DirectionGrid = DirectionGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FeaturesDialog = /** @class */ (function (_super) {
            __extends(FeaturesDialog, _super);
            function FeaturesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FeaturesDialog.prototype.getFormKey = function () { return Default.FeaturesForm.formKey; };
            FeaturesDialog.prototype.getIdProperty = function () { return Default.FeaturesRow.idProperty; };
            FeaturesDialog.prototype.getLocalTextPrefix = function () { return Default.FeaturesRow.localTextPrefix; };
            FeaturesDialog.prototype.getNameProperty = function () { return Default.FeaturesRow.nameProperty; };
            FeaturesDialog.prototype.getService = function () { return Default.FeaturesService.baseUrl; };
            FeaturesDialog.prototype.getDeletePermission = function () { return Default.FeaturesRow.insertPermission; };
            FeaturesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FeaturesDialog);
            return FeaturesDialog;
        }(Serenity.EntityDialog));
        Default.FeaturesDialog = FeaturesDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FeaturesGrid = /** @class */ (function (_super) {
            __extends(FeaturesGrid, _super);
            function FeaturesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FeaturesGrid.prototype.getColumnsKey = function () { return 'Default.Features'; };
            FeaturesGrid.prototype.getDialogType = function () { return Default.FeaturesDialog; };
            FeaturesGrid.prototype.getIdProperty = function () { return Default.FeaturesRow.idProperty; };
            FeaturesGrid.prototype.getInsertPermission = function () { return Default.FeaturesRow.insertPermission; };
            FeaturesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], FeaturesGrid);
            return FeaturesGrid;
        }(Serenity.EntityGrid));
        Default.FeaturesGrid = FeaturesGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FixListDialog = /** @class */ (function (_super) {
            __extends(FixListDialog, _super);
            function FixListDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FixListDialog.prototype.getFormKey = function () { return Default.FixListForm.formKey; };
            FixListDialog.prototype.getIdProperty = function () { return Default.FixListRow.idProperty; };
            FixListDialog.prototype.getLocalTextPrefix = function () { return Default.FixListRow.localTextPrefix; };
            FixListDialog.prototype.getNameProperty = function () { return Default.FixListRow.nameProperty; };
            FixListDialog.prototype.getService = function () { return Default.FixListService.baseUrl; };
            FixListDialog.prototype.getDeletePermission = function () { return Default.FixListRow.insertPermission; };
            FixListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FixListDialog);
            return FixListDialog;
        }(Serenity.EntityDialog));
        Default.FixListDialog = FixListDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var FixListGrid = /** @class */ (function (_super) {
            __extends(FixListGrid, _super);
            function FixListGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FixListGrid.prototype.getColumnsKey = function () { return 'Default.FixList'; };
            FixListGrid.prototype.getDialogType = function () { return Default.FixListDialog; };
            FixListGrid.prototype.getIdProperty = function () { return Default.FixListRow.idProperty; };
            FixListGrid.prototype.getInsertPermission = function () { return Default.FixListRow.insertPermission; };
            FixListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FixListGrid);
            return FixListGrid;
        }(Serenity.EntityGrid));
        Default.FixListGrid = FixListGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportTypeDialog = /** @class */ (function (_super) {
            __extends(ImportTypeDialog, _super);
            function ImportTypeDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportTypeDialog.prototype.getFormKey = function () { return Default.ImportTypeForm.formKey; };
            ImportTypeDialog.prototype.getIdProperty = function () { return Default.ImportTypeRow.idProperty; };
            ImportTypeDialog.prototype.getLocalTextPrefix = function () { return Default.ImportTypeRow.localTextPrefix; };
            ImportTypeDialog.prototype.getNameProperty = function () { return Default.ImportTypeRow.nameProperty; };
            ImportTypeDialog.prototype.getService = function () { return Default.ImportTypeService.baseUrl; };
            ImportTypeDialog.prototype.getDeletePermission = function () { return Default.ImportTypeRow.insertPermission; };
            ImportTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportTypeDialog);
            return ImportTypeDialog;
        }(Serenity.EntityDialog));
        Default.ImportTypeDialog = ImportTypeDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportTypeGrid = /** @class */ (function (_super) {
            __extends(ImportTypeGrid, _super);
            function ImportTypeGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportTypeGrid.prototype.getColumnsKey = function () { return 'Default.ImportType'; };
            ImportTypeGrid.prototype.getDialogType = function () { return Default.ImportTypeDialog; };
            ImportTypeGrid.prototype.getIdProperty = function () { return Default.ImportTypeRow.idProperty; };
            ImportTypeGrid.prototype.getInsertPermission = function () { return Default.ImportTypeRow.insertPermission; };
            ImportTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportTypeGrid);
            return ImportTypeGrid;
        }(Serenity.EntityGrid));
        Default.ImportTypeGrid = ImportTypeGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDialog = /** @class */ (function (_super) {
            __extends(ImportWizerdDialog, _super);
            function ImportWizerdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdDialog.prototype.getFormKey = function () { return Default.ImportWizerdForm.formKey; };
            ImportWizerdDialog.prototype.getIdProperty = function () { return Default.ImportWizerdRow.idProperty; };
            ImportWizerdDialog.prototype.getLocalTextPrefix = function () { return Default.ImportWizerdRow.localTextPrefix; };
            ImportWizerdDialog.prototype.getNameProperty = function () { return Default.ImportWizerdRow.nameProperty; };
            ImportWizerdDialog.prototype.getService = function () { return Default.ImportWizerdService.baseUrl; };
            ImportWizerdDialog.prototype.getDeletePermission = function () { return Default.ImportWizerdRow.insertPermission; };
            ImportWizerdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizerdDialog);
            return ImportWizerdDialog;
        }(Serenity.EntityDialog));
        Default.ImportWizerdDialog = ImportWizerdDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdGrid = /** @class */ (function (_super) {
            __extends(ImportWizerdGrid, _super);
            function ImportWizerdGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdGrid.prototype.getColumnsKey = function () { return 'Default.ImportWizerd'; };
            ImportWizerdGrid.prototype.getDialogType = function () { return Default.ImportWizerdDialog; };
            ImportWizerdGrid.prototype.getIdProperty = function () { return Default.ImportWizerdRow.idProperty; };
            ImportWizerdGrid.prototype.getInsertPermission = function () { return Default.ImportWizerdRow.insertPermission; };
            ImportWizerdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizerdGrid);
            return ImportWizerdGrid;
        }(Serenity.EntityGrid));
        Default.ImportWizerdGrid = ImportWizerdGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdByEqFilesDialog = /** @class */ (function (_super) {
            __extends(ImportWizerdByEqFilesDialog, _super);
            function ImportWizerdByEqFilesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdByEqFilesDialog.prototype.getFormKey = function () { return Default.ImportWizerdByEqFilesForm.formKey; };
            ImportWizerdByEqFilesDialog.prototype.getIdProperty = function () { return Default.ImportWizerdByEqFilesRow.idProperty; };
            ImportWizerdByEqFilesDialog.prototype.getLocalTextPrefix = function () { return Default.ImportWizerdByEqFilesRow.localTextPrefix; };
            ImportWizerdByEqFilesDialog.prototype.getNameProperty = function () { return Default.ImportWizerdByEqFilesRow.nameProperty; };
            ImportWizerdByEqFilesDialog.prototype.getService = function () { return Default.ImportWizerdByEqFilesService.baseUrl; };
            ImportWizerdByEqFilesDialog.prototype.getDeletePermission = function () { return Default.ImportWizerdByEqFilesRow.insertPermission; };
            ImportWizerdByEqFilesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizerdByEqFilesDialog);
            return ImportWizerdByEqFilesDialog;
        }(Serenity.EntityDialog));
        Default.ImportWizerdByEqFilesDialog = ImportWizerdByEqFilesDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdByEqFilesGrid = /** @class */ (function (_super) {
            __extends(ImportWizerdByEqFilesGrid, _super);
            function ImportWizerdByEqFilesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImportWizerdByEqFilesGrid.prototype.getColumnsKey = function () { return 'Default.ImportWizerdByEqFiles'; };
            ImportWizerdByEqFilesGrid.prototype.getDialogType = function () { return Default.ImportWizerdByEqFilesDialog; };
            ImportWizerdByEqFilesGrid.prototype.getIdProperty = function () { return Default.ImportWizerdByEqFilesRow.idProperty; };
            ImportWizerdByEqFilesGrid.prototype.getInsertPermission = function () { return Default.ImportWizerdByEqFilesRow.insertPermission; };
            ImportWizerdByEqFilesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportWizerdByEqFilesGrid);
            return ImportWizerdByEqFilesGrid;
        }(Serenity.EntityGrid));
        Default.ImportWizerdByEqFilesGrid = ImportWizerdByEqFilesGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDataDialog = /** @class */ (function (_super) {
            __extends(ImportWizerdDataDialog, _super);
            function ImportWizerdDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ImportWizerdDataForm(_this.idPrefix);
                return _this;
            }
            ImportWizerdDataDialog.prototype.getFormKey = function () { return Default.ImportWizerdDataForm.formKey; };
            ImportWizerdDataDialog.prototype.getIdProperty = function () { return Default.ImportWizerdDataRow.idProperty; };
            ImportWizerdDataDialog.prototype.getLocalTextPrefix = function () { return Default.ImportWizerdDataRow.localTextPrefix; };
            ImportWizerdDataDialog.prototype.getNameProperty = function () { return Default.ImportWizerdDataRow.nameProperty; };
            ImportWizerdDataDialog.prototype.getService = function () { return Default.ImportWizerdDataService.baseUrl; };
            ImportWizerdDataDialog.prototype.getDeletePermission = function () { return Default.ImportWizerdDataRow.insertPermission; };
            ImportWizerdDataDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    this.convert(this.form.StatusMessage.value);
                }
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                if (this.isEditMode()) {
                    this.saveAndCloseButton.hide();
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                this.toolbar.findButton('commit').toggle(this.isEditMode());
                this.applyChangesButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                //// 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
                var workorderitem = this.entityId;
                //if (this.isEditMode()) {
                //    $.ajax({
                //        type: "GET",
                //        url: "/sysapi/ImportSummary",
                //        data: {
                //            Itemid: workorderitem
                //        },
                //        contentType: "application/json;charset=utf-8",
                //        dataType: "json",
                //        success: function (result) {
                //            var st = ""
                //            $.each(result, function (key, value) {
                //                st = st
                //                    + ' <tr style="color:white;">'
                //                    + ' <td>'
                //                    + ' <label>' + value.ItemId + '</label>'
                //                    + '</td>'
                //                    + '<td>'
                //                    + '  <label>' + value.Comment + '</label>'
                //                    + '</td>'
                //                    + '   </tr>'
                //            });
                //            $("#bodyWorkflowD3").html(st)
                //        },
                //    });
                //} else {
                //    $("#bodyWorkflowD3").html("");
                //}
            };
            ImportWizerdDataDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var path = "/sysapi/ExportSamples?ReportId=";
                buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                    title: 'Print Samples',
                    cssClass: 'export-pdf-button',
                    reportKey: this.get_entityId(),
                    URL: path,
                }));
                buttons.push({
                    title: 'Roll back transaction',
                    cssClass: 'commit',
                    icon: 'fa-retweet text-green',
                    onClick: function () {
                        Q.confirm("Are you sure you want to Roll back this(all samples and logs will deleted? you will not be able to rollback", function () {
                            var id2 = _this.entity.ImportId;
                            Default.ImportWizerdDataService.Delete({
                                EntityId: id2,
                            }, function (response) {
                                Serenity.SubDialogHelper.triggerDataChange(_this);
                                _this.dialogClose();
                            });
                        }, {
                            htmlEncode: false,
                            onNo: function () {
                                Q.warning("No action was taken.");
                            }
                        });
                    }
                });
                return buttons;
            };
            ImportWizerdDataDialog.prototype.convert = function (xml) {
                if (xml.includes('<') || xml.includes('SECTION_NO')) {
                    var xmlData = $.parseXML(xml);
                    var row = "";
                    $("Section", xmlData).each(function () {
                        var Number = $(this).find("ID").text();
                        var SECTION_NO = $(this).find("SECTION_NO").text();
                        var SECTION_ID = $(this).find("SECTION_ID").text();
                        var Lane = $(this).find("Lane").text();
                        row = row + '<tr>' + '<td>' + Number + '</td>' + '<td>' + SECTION_NO + '</td>' + '<td>' + SECTION_ID + '</td>' + '<td>' + Lane + '</td>' + '</tr>';
                    });
                    $("#mappingHistory").html("<table class=' table table-bordered' style='width:100%; background-color:#607D8B;' id='histW'><tr><th>Number</th><th>SECTION_NO</th><th>SECTION_ID</th><th>Lane</th></tr>" + row + "</table>");
                    $('#histW tr:eq(1)').remove();
                }
                else {
                    $("#mappingHistory").html("<span>" + xml + "</span>");
                }
            };
            ImportWizerdDataDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ImportWizerdDataDialog);
            return ImportWizerdDataDialog;
        }(Serenity.EntityDialog));
        Default.ImportWizerdDataDialog = ImportWizerdDataDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdDataGrid = /** @class */ (function (_super) {
            __extends(ImportWizerdDataGrid, _super);
            function ImportWizerdDataGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            ImportWizerdDataGrid.prototype.getColumnsKey = function () { return 'Default.ImportWizerdData'; };
            ImportWizerdDataGrid.prototype.getDialogType = function () { return Default.ImportWizerdDataDialog; };
            ImportWizerdDataGrid.prototype.getIdProperty = function () { return Default.ImportWizerdDataRow.idProperty; };
            ImportWizerdDataGrid.prototype.getInsertPermission = function () { return Default.ImportWizerdDataRow.insertPermission; };
            ImportWizerdDataGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            ImportWizerdDataGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons;
            };
            ImportWizerdDataGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            ImportWizerdDataGrid.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            ImportWizerdDataGrid.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            ImportWizerdDataGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ImportWizerdDataGrid);
            return ImportWizerdDataGrid;
        }(Serenity.EntityGrid));
        Default.ImportWizerdDataGrid = ImportWizerdDataGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdLocalDialog = /** @class */ (function (_super) {
            __extends(ImportWizerdLocalDialog, _super);
            function ImportWizerdLocalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ImportWizerdLocalForm(_this.idPrefix);
                return _this;
            }
            ImportWizerdLocalDialog.prototype.getFormKey = function () { return Default.ImportWizerdLocalForm.formKey; };
            ImportWizerdLocalDialog.prototype.getIdProperty = function () { return Default.ImportWizerdLocalRow.idProperty; };
            ImportWizerdLocalDialog.prototype.getLocalTextPrefix = function () { return Default.ImportWizerdLocalRow.localTextPrefix; };
            ImportWizerdLocalDialog.prototype.getNameProperty = function () { return Default.ImportWizerdLocalRow.nameProperty; };
            ImportWizerdLocalDialog.prototype.getService = function () { return Default.ImportWizerdLocalService.baseUrl; };
            ImportWizerdLocalDialog.prototype.getDeletePermission = function () { return Default.ImportWizerdLocalRow.insertPermission; };
            ImportWizerdLocalDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    this.convert(this.form.StatusMessage.value);
                }
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                if (this.isEditMode()) {
                    this.saveAndCloseButton.hide();
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                this.toolbar.findButton('commit').toggle(this.isEditMode());
                this.applyChangesButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                //// 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
                var workorderitem = this.entityId;
                //if (this.isEditMode()) {
                //    $.ajax({
                //        type: "GET",
                //        url: "/sysapi/ImportSummary",
                //        data: {
                //            Itemid: workorderitem
                //        },
                //        contentType: "application/json;charset=utf-8",
                //        dataType: "json",
                //        success: function (result) {
                //            var st = ""
                //            $.each(result, function (key, value) {
                //                st = st
                //                    + ' <tr style="color:white;">'
                //                    + ' <td>'
                //                    + ' <label>' + value.ItemId + '</label>'
                //                    + '</td>'
                //                    + '<td>'
                //                    + '  <label>' + value.Comment + '</label>'
                //                    + '</td>'
                //                    + '   </tr>'
                //            });
                //            $("#bodyWorkflowD3").html(st)
                //        },
                //    });
                //} else {
                //    $("#bodyWorkflowD3").html("");
                //}
            };
            ImportWizerdLocalDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var path = "/sysapi/ExportSamplesLocal?ReportId=";
                buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                    title: 'Print Samples',
                    cssClass: 'export-pdf-button',
                    reportKey: this.get_entityId(),
                    URL: path,
                }));
                buttons.push({
                    title: 'Roll back transaction',
                    cssClass: 'commit',
                    icon: 'fa-retweet text-green',
                    onClick: function () {
                        Q.confirm("Are you sure you want to Roll back this(all samples and logs will deleted? you will not be able to rollback", function () {
                            var id2 = _this.entity.ImportId;
                            Default.ImportWizerdDataService.Delete({
                                EntityId: id2,
                            }, function (response) {
                                Serenity.SubDialogHelper.triggerDataChange(_this);
                                _this.dialogClose();
                            });
                        }, {
                            htmlEncode: false,
                            onNo: function () {
                                Q.warning("No action was taken.");
                            }
                        });
                    }
                });
                return buttons;
            };
            ImportWizerdLocalDialog.prototype.convert = function (xml) {
                if (xml.includes('<') || xml.includes('SECTION_NO')) {
                    var xmlData = $.parseXML(xml);
                    var row = "";
                    $("Section", xmlData).each(function () {
                        var Number = $(this).find("ID").text();
                        var SECTION_NO = $(this).find("SECTION_NO").text();
                        var SECTION_ID = $(this).find("SECTION_ID").text();
                        var Lane = $(this).find("Lane").text();
                        row = row + '<tr>' + '<td>' + Number + '</td>' + '<td>' + SECTION_NO + '</td>' + '<td>' + SECTION_ID + '</td>' + '<td>' + Lane + '</td>' + '</tr>';
                    });
                    $("#mappingHistory").html("<table class=' table table-bordered' style='width:100%; background-color:#607D8B;' id='histW'><tr><th>Number</th><th>SECTION_NO</th><th>SECTION_ID</th><th>Lane</th></tr>" + row + "</table>");
                    $('#histW tr:eq(1)').remove();
                }
                else {
                    $("#mappingHistory").html("<span>" + xml + "</span>");
                }
            };
            ImportWizerdLocalDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ImportWizerdLocalDialog);
            return ImportWizerdLocalDialog;
        }(Serenity.EntityDialog));
        Default.ImportWizerdLocalDialog = ImportWizerdLocalDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ImportWizerdLocalGrid = /** @class */ (function (_super) {
            __extends(ImportWizerdLocalGrid, _super);
            function ImportWizerdLocalGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            ImportWizerdLocalGrid.prototype.getColumnsKey = function () { return 'Default.ImportWizerdLocal'; };
            ImportWizerdLocalGrid.prototype.getDialogType = function () { return Default.ImportWizerdLocalDialog; };
            ImportWizerdLocalGrid.prototype.getIdProperty = function () { return Default.ImportWizerdLocalRow.idProperty; };
            ImportWizerdLocalGrid.prototype.getInsertPermission = function () { return Default.ImportWizerdLocalRow.insertPermission; };
            ImportWizerdLocalGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            ImportWizerdLocalGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons;
            };
            ImportWizerdLocalGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            ImportWizerdLocalGrid.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            ImportWizerdLocalGrid.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            ImportWizerdLocalGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ImportWizerdLocalGrid);
            return ImportWizerdLocalGrid;
        }(Serenity.EntityGrid));
        Default.ImportWizerdLocalGrid = ImportWizerdLocalGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ProjectsDialog = /** @class */ (function (_super) {
            __extends(ProjectsDialog, _super);
            function ProjectsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProjectsDialog.prototype.getFormKey = function () { return Default.ProjectsForm.formKey; };
            ProjectsDialog.prototype.getIdProperty = function () { return Default.ProjectsRow.idProperty; };
            ProjectsDialog.prototype.getLocalTextPrefix = function () { return Default.ProjectsRow.localTextPrefix; };
            ProjectsDialog.prototype.getNameProperty = function () { return Default.ProjectsRow.nameProperty; };
            ProjectsDialog.prototype.getService = function () { return Default.ProjectsService.baseUrl; };
            ProjectsDialog.prototype.getDeletePermission = function () { return Default.ProjectsRow.insertPermission; };
            ProjectsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProjectsDialog);
            return ProjectsDialog;
        }(Serenity.EntityDialog));
        Default.ProjectsDialog = ProjectsDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ProjectsGrid = /** @class */ (function (_super) {
            __extends(ProjectsGrid, _super);
            function ProjectsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProjectsGrid.prototype.getColumnsKey = function () { return 'Default.Projects'; };
            ProjectsGrid.prototype.getDialogType = function () { return Default.ProjectsDialog; };
            ProjectsGrid.prototype.getIdProperty = function () { return Default.ProjectsRow.idProperty; };
            ProjectsGrid.prototype.getInsertPermission = function () { return Default.ProjectsRow.insertPermission; };
            ProjectsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProjectsGrid);
            return ProjectsGrid;
        }(Serenity.EntityGrid));
        Default.ProjectsGrid = ProjectsGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var RoadsDialog = /** @class */ (function (_super) {
            __extends(RoadsDialog, _super);
            function RoadsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.RoadsForm(_this.idPrefix);
                return _this;
                // alert(console.log(this.byId("CityNo")));
                //this.form.AreaNo.getGridField().toggle(false);
                //this.form.CityNo.getGridField().toggle(false);
                //this.form.ZoneNo.getGridField().toggle(false);
                //$("#area").select2();
                //$("#area").change(function () {
                //    alert(1);
                //})
                //this.form.ZoneNo.changeSelect2(e => {
                //    alert(1);
                //    Q.notifySuccess("You selected item with key: " + this.form.ZoneNo.value);
                //});
            }
            RoadsDialog.prototype.getFormKey = function () { return Default.RoadsForm.formKey; };
            RoadsDialog.prototype.getIdProperty = function () { return Default.RoadsRow.idProperty; };
            RoadsDialog.prototype.getLocalTextPrefix = function () { return Default.RoadsRow.localTextPrefix; };
            RoadsDialog.prototype.getNameProperty = function () { return Default.RoadsRow.nameProperty; };
            RoadsDialog.prototype.getService = function () { return Default.RoadsService.baseUrl; };
            RoadsDialog.prototype.getDeletePermission = function () { return Default.RoadsRow.insertPermission; };
            RoadsDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                return btns;
            };
            RoadsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    //  this.getDrops();
                }
                else {
                    // this.setDrops();
                }
            };
            RoadsDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                //if ($("#area").val() > 0 && $("#zoneSelect").val() > 0 && $("#citySelect").val() > 0) {
                //    oldEvt(e);
                //    return true;
                //} else {
                //    Q.alert("please select City ,Zone and area");
                //}
                oldEvt(e);
                return true;
            };
            RoadsDialog.prototype.getDrops = function () {
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        $("#citySelect").change(function () {
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    //alert(myform.byId("CityNo").val());
                                    myform.CityNo.value = $("#citySelect").val();
                                    //myform.ZoneNo.set_value(null) 
                                    //myform.AreaNo.set_value(null)
                                    // alert(myform.byId("CityNo").val());
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#zoneSelect").change(function () {
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getAreas",
                                data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                success: function (x) {
                                    dropdownarea.empty();
                                    dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownarea.prop('selectedIndex', 0);
                                    myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#area").change(function () {
                            myform.AreaNo.value = $("#area").val();
                        });
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            RoadsDialog.prototype.setDrops = function () {
                Q.blockUI(null);
                var allitem = this;
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        dropdown.prop('selectedIndex', myform.CityNo.value);
                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getZone",
                            data: { id: $("#citySelect").val() },
                            success: function (t) {
                                dropdownzone.empty();
                                dropdownarea.empty();
                                dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                $.each(t, function (key, entry) {
                                    dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                });
                                dropdownzone.prop('selectedIndex', myform.ZoneNo.value);
                                $.ajax({
                                    type: "GET",
                                    url: "/sysapi/getAreas",
                                    data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                    success: function (x) {
                                        dropdownarea.empty();
                                        dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                        $.each(x, function (key, entry) {
                                            dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                        });
                                        $("#area").val(myform.AreaNo.value);
                                        allitem.configDrops();
                                        Q.blockUndo();
                                    }
                                });
                            }
                        });
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            RoadsDialog.prototype.configDrops = function () {
                var myform = this.form;
                var dropdown = $('#citySelect');
                var dropdownzone = $('#zoneSelect');
                var dropdownarea = $('#area');
                $("#citySelect").change(function () {
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/getZone",
                        data: { id: $("#citySelect").val() },
                        success: function (t) {
                            myform.CityNo.value = $("#citySelect").val();
                            dropdownzone.empty();
                            dropdownarea.empty();
                            dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                            dropdownzone.prop('selectedIndex', 0);
                            $.each(t, function (key, entry) {
                                dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                            });
                        }
                    });
                });
                $("#zoneSelect").change(function () {
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/getAreas",
                        data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                        success: function (x) {
                            dropdownarea.empty();
                            dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                            dropdownarea.prop('selectedIndex', 0);
                            myform.ZoneNo.value = $("#zoneSelect").val();
                            $.each(x, function (key, entry) {
                                dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                            });
                        }
                    });
                });
                $("#area").change(function () {
                    myform.AreaNo.value = $("#area").val();
                });
            };
            RoadsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoadsDialog);
            return RoadsDialog;
        }(Serenity.EntityDialog));
        Default.RoadsDialog = RoadsDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var RoadsGrid = /** @class */ (function (_super) {
            __extends(RoadsGrid, _super);
            function RoadsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoadsGrid.prototype.getColumnsKey = function () { return 'Default.Roads'; };
            RoadsGrid.prototype.getDialogType = function () { return Default.RoadsDialog; };
            RoadsGrid.prototype.getIdProperty = function () { return Default.RoadsRow.idProperty; };
            RoadsGrid.prototype.getInsertPermission = function () { return Default.RoadsRow.insertPermission; };
            RoadsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], RoadsGrid);
            return RoadsGrid;
        }(Serenity.EntityGrid));
        Default.RoadsGrid = RoadsGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionDialog = /** @class */ (function (_super) {
            __extends(SectionDialog, _super);
            function SectionDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionDialog.prototype.getFormKey = function () { return Default.SectionForm.formKey; };
            SectionDialog.prototype.getIdProperty = function () { return Default.SectionRow.idProperty; };
            SectionDialog.prototype.getLocalTextPrefix = function () { return Default.SectionRow.localTextPrefix; };
            SectionDialog.prototype.getNameProperty = function () { return Default.SectionRow.nameProperty; };
            SectionDialog.prototype.getService = function () { return Default.SectionService.baseUrl; };
            SectionDialog.prototype.getDeletePermission = function () { return Default.SectionRow.insertPermission; };
            SectionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SectionDialog);
            return SectionDialog;
        }(Serenity.EntityDialog));
        Default.SectionDialog = SectionDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionGrid = /** @class */ (function (_super) {
            __extends(SectionGrid, _super);
            function SectionGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionGrid.prototype.getColumnsKey = function () { return 'Default.Section'; };
            SectionGrid.prototype.getDialogType = function () { return Default.SectionDialog; };
            SectionGrid.prototype.getIdProperty = function () { return Default.SectionRow.idProperty; };
            SectionGrid.prototype.getInsertPermission = function () { return Default.SectionRow.insertPermission; };
            SectionGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SectionGrid);
            return SectionGrid;
        }(Serenity.EntityGrid));
        Default.SectionGrid = SectionGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionsDialog = /** @class */ (function (_super) {
            __extends(SectionsDialog, _super);
            function SectionsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionsDialog.prototype.getFormKey = function () { return Default.SectionsForm.formKey; };
            SectionsDialog.prototype.getIdProperty = function () { return Default.SectionsRow.idProperty; };
            SectionsDialog.prototype.getLocalTextPrefix = function () { return Default.SectionsRow.localTextPrefix; };
            SectionsDialog.prototype.getService = function () { return Default.SectionsService.baseUrl; };
            SectionsDialog.prototype.getDeletePermission = function () { return Default.SectionsRow.insertPermission; };
            SectionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SectionsDialog);
            return SectionsDialog;
        }(Serenity.EntityDialog));
        Default.SectionsDialog = SectionsDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var SectionsGrid = /** @class */ (function (_super) {
            __extends(SectionsGrid, _super);
            function SectionsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SectionsGrid.prototype.getColumnsKey = function () { return 'Default.Sections'; };
            SectionsGrid.prototype.getDialogType = function () { return Default.SectionsDialog; };
            SectionsGrid.prototype.getIdProperty = function () { return Default.SectionsRow.idProperty; };
            SectionsGrid.prototype.getInsertPermission = function () { return Default.SectionsRow.insertPermission; };
            SectionsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SectionsGrid);
            return SectionsGrid;
        }(Serenity.EntityGrid));
        Default.SectionsGrid = SectionsGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderDialog = /** @class */ (function (_super) {
            __extends(WorkOrderDialog, _super);
            function WorkOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.WorkOrderForm(_this.idPrefix);
                _this.form.RefId.change(function (e) {
                    var dropdown = $('#protem');
                    dropdown.empty();
                    dropdown.append('<option selected="true" >val</option>');
                    dropdown.prop('selectedIndex', 0);
                    dropdown.append($('<option></option>').attr('value', _this.form.RefId.value).text(_this.form.RefId.value));
                    $("#protem").val(_this.form.RefId.value);
                    var list = [];
                    _this.form.WorkorderBoqItem.view.setItems(list, true);
                    _this.form.WorkorderBoqItem.view.refresh;
                });
                _this.form.WorkorderStartDate.element.addClass("rtl-txtbox");
                _this.form.DateOfOrderWork.change(function (e) {
                    var start = _this.form.DateOfOrderWork.valueAsDate;
                    var end = _this.form.WorkorderEndDate.valueAsDate;
                    // end - start returns difference in milliseconds 
                    var diff = new Date(end - start);
                    // get days
                    var days = diff / 1000 / 60 / 60 / 24;
                    if (days > 0)
                        _this.form.WorkorderStartDate.value = days + "  يوم من تاريخ استخراج تصاريح العمل من قبل الجهات الخدمية ";
                    else
                        _this.form.WorkorderStartDate.value = "";
                });
                _this.form.WorkorderEndDate.change(function (e) {
                    var start = _this.form.DateOfOrderWork.valueAsDate;
                    var end = _this.form.WorkorderEndDate.valueAsDate;
                    // end - start returns difference in milliseconds 
                    var diff = new Date(end - start);
                    // get days
                    var days = diff / 1000 / 60 / 60 / 24;
                    if (days > 0)
                        _this.form.WorkorderStartDate.value = days + "  يوم من تاريخ استخراج تصاريح العمل من قبل الجهات الخدمية ";
                    else
                        _this.form.WorkorderStartDate.value = "";
                });
                _this.form.Remark2.getGridField().toggle(false);
                _this.form.Remark3.getGridField().toggle(false);
                return _this;
            }
            WorkOrderDialog.prototype.getFormKey = function () { return Default.WorkOrderForm.formKey; };
            WorkOrderDialog.prototype.getIdProperty = function () { return Default.WorkOrderRow.idProperty; };
            WorkOrderDialog.prototype.getLocalTextPrefix = function () { return Default.WorkOrderRow.localTextPrefix; };
            WorkOrderDialog.prototype.getNameProperty = function () { return Default.WorkOrderRow.nameProperty; };
            WorkOrderDialog.prototype.getService = function () { return Default.WorkOrderService.baseUrl; };
            WorkOrderDialog.prototype.getDeletePermission = function () { return Default.WorkOrderRow.insertPermission; };
            WorkOrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var path = "~/Default/WorkOrder/GetReport?id=";
                buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                    title: 'Print',
                    icon: "fa-print",
                    cssClass: 'export-pdf-button',
                    reportKey: this.get_entityId(),
                    URL: path,
                }));
                var btnSave = Q.first(buttons, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(buttons, function (x) { return x.cssClass == "apply-changes-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                //btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
                //btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };
                btnSave.onClick = function (e) { _this.showCustomWarning("Workflow Actions", oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.showCustomWarning("Workflow Actions", oldApplyClick, e); };
                return buttons;
            };
            WorkOrderDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                var _this = this;
                var Currents = "";
                if ($("#ActionId").val() == "1") {
                    Currents = "Approve";
                }
                else if ($("#ActionId").val() == "2") {
                    Currents = "Reject";
                }
                if ($("#ActionId").val() == "3") {
                    Currents = "Keep Saving";
                }
                Q.confirm("Are you sure you want to proceed the workflow [" + Currents + "] ?", function () {
                    var myform = _this.form;
                    _this.form.Remark2.value = $("#ActionId").val();
                    if ($('#RoadID').val().length > 1 && $('#citySelect').val() != '99') {
                        myform.WorkorderLane.value = $(".drpLane").val();
                    }
                    else {
                        myform.WorkorderLane.value = "";
                        $(".drpLane").each(function () {
                            myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ',';
                        });
                    }
                    console.log(myform.WorkorderLane.value);
                    oldEvt(e);
                    return true;
                });
            };
            WorkOrderDialog.prototype.showCustomWarning = function (title, oldEvt, e) {
                var all;
                var def = $.Deferred();
                var myform = this.form;
                $(".cntAll").remove("");
                $('<div Id="cntAll" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                    '<div class="ui-dialog-content ui-widget-content">' +
                    '<div class="message">Do you want to continue ?' +
                    '<div  class="s-PropertyGrid"><div class="category"><div class="category-title"><a class="category-anchor" name="PMMS_Default_WorkOrderDialog4_Category8">معلومات سير العمل - Workflow Information</a></div><div class="field ActionTemaple"><label class="caption" for="PMMS_Default_WorkOrderDialog4_ActionTemaple" title="الاجراء - Action">الاجراء - Action</label><div class="editor flexify s-StaticTextBlock" ><select id="ActionId" style="width: 100%;" class="valid cntAll" aria-invalid="false"><option value="0" disabled selected hidden>Select the option</option> <option value="1">Approve and forward</option> <option value="2">Reject</option><option value="3">Keep saving</option> </select></div><div class="vx"></div><div class="clear"></div></div><div  style="display: none;"><label class="caption"  title="ملاحظه 2">ملاحظه 2</label><input type="text" class="editor flexify s-StringEditor" wfd-id="id30"><div class="vx"></div><div class="clear"></div></div><div class="field "><label class="caption" for="" title="Comment">الملاحظات - comment </label><textarea id="CommentValues" class="editor flexify s-TextAreaEditor cntAll"   cols="1" rows="4"  style=" width: 100%; height: 137px; "></textarea><div class="vx"></div><div class="clear"></div></div></div> <div class="sigPad">  <ul class="sigNav"> <li class="drawIt"><a href="#draw-it" >التوقيع -  Sign</a></li> <li class="clearButton"><a href="#clear">Clear</a></li> </ul> <div class="sig sigWrapper"> <div class="typed"></div> <canvas class="pad" width="280" height="84"></canvas> <input type="hidden" name="output" class="output"> </div>  </div></div></div></div>').dialog({
                    modal: true,
                    resizable: false,
                    minHeight: 500,
                    minWidth: 400,
                    title: title,
                    draggable: false,
                    open: function () {
                        $(document).ready(function () {
                            $('.sigPad').signaturePad({ drawOnly: true, lineWidth: 0 });
                        });
                        //const signaturePad = new SignaturePad(canvas);
                        //var sketchpad = new Sketchpad({
                        //    element: '#sketchpad',
                        //    width: 300,
                        //    penSize: 5,
                        //    height: 200,
                        //});
                        //all = sketchpad;
                        //$("#ssk").click(function () {
                        //    sketchpad.undo();
                        //})
                    },
                    buttons: {
                        Yes: function () {
                            if ($("#ActionId:last").val() == '0' || $("#ActionId:last").val() == '' || $("#ActionId:last").val() == null) {
                                Q.notifyError("please select the Action");
                                myform.Remark2.value = "0";
                                return;
                            }
                            var instance = $('.sigPad').signaturePad();
                            myform.signature.value = instance.getSignatureString() + '##' + instance.getSignatureImage();
                            myform.Remark2.value = $("#ActionId:last").val();
                            myform.Remark3.value = $("#CommentValues:last").val();
                            var Currents = "";
                            if ($("#ActionId:last").val() == "1") {
                                Currents = "Approve";
                            }
                            else if ($("#ActionId").val() == "2") {
                                Currents = "Reject";
                            }
                            if ($("#ActionId:last").val() == "3") {
                                Currents = "Keep Saving";
                            }
                            if ($('#RoadID').val().length > 1 && $('#citySelect').val() != '99') {
                                myform.WorkorderLane.value = $(".drpLane").val();
                            }
                            else {
                                myform.WorkorderLane.value = "";
                                $(".drpLane").each(function () {
                                    myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ',';
                                });
                            }
                            //  def.resolve();
                            oldEvt(e);
                            $('.modal').dialog('hide').data('bs.modal', null);
                            $(this).dialog("close");
                        },
                        No: function () {
                            // def.reject();
                            $('.modal').dialog('hide').data('bs.modal', null);
                            //console.log(all.toJSON());
                            //console.log(all.toObject());
                            $(this).dialog("close");
                        }
                    }
                });
                return def.promise();
            };
            WorkOrderDialog.prototype.onSaveSuccess = function (response) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/workOrdercalcById",
                    data: {
                        id: response.EntityId
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                    },
                });
                Q.notifySuccess("Workflow has been processed Successfully!", "Message");
            };
            WorkOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                this.deleteButton.hide();
                var bt = this.deleteButton;
                var workorderitem = this.entityId;
                if (this.isEditMode()) {
                    this.SetHafriaTemplate(workorderitem);
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/WorkfkowHistory",
                        data: {
                            Itemid: workorderitem
                        },
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            var st = "";
                            $.each(result, function (key, value) {
                                st = st
                                    + ' <tr style="color:white;">'
                                    + ' <td>'
                                    + ' <label>' + value.ActionData + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.ActionFrom + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.Action + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.username + '</label>'
                                    + '</td>'
                                    + ' <td>'
                                    + '  <label>' + value.Comment + '</label>'
                                    + '</td>'
                                    + '   </tr>';
                            });
                            $("#bodyWorkflowD3").html(st);
                        },
                    });
                }
                else {
                    $("#bodyWorkflowD3").html("");
                    $("#bodyWorkflowD333").html("");
                }
                $.ajax({
                    type: "GET",
                    url: "/sysapi/IsUserHasAccessToWF",
                    data: {},
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        if (result == "1") {
                            bt.show();
                            //  bt.removeAttr("disabled");
                        }
                    },
                });
            };
            WorkOrderDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    try {
                        this.form.WorkorderCity.element.closest('.category').toggle(true);
                        $(".LaneTemplate").show();
                        $(".MultiSectionTemplate").hide();
                        this.form.emergency.set_value("0");
                        this.getDrops();
                        this.OpenGisDialog();
                    }
                    catch (e) {
                    }
                }
                else {
                    document.getElementById('mapviwerAll').innerHTML = "<div id='mapviwer'></div>";
                    try {
                        if (this.form.WorkorderSection.value == "-1") {
                            this.form.WorkorderCity.element.closest('.category').toggle(false);
                            $(".LaneTemplate").hide();
                            $(".MultiSectionTemplate").show();
                            this.SetSectionTemplate(this.entityId);
                            this.GisSetView(this.entityId, "SecDataTemplate");
                        }
                        else {
                            //this.getDrops();
                            //this.setDrops();
                            var allt = this;
                            allt.SetLaneTemplate(allt.entityId);
                            allt.GisSetView(allt.entityId, "LaneDataTemplate");
                            this.form.WorkorderCity.element.closest('.category').toggle(false);
                            $(".MultiSectionTemplate").hide();
                        }
                        // this.element.find('.add-button').hide();
                    }
                    catch (e) {
                    }
                }
            };
            WorkOrderDialog.prototype.SetSectionTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/SecDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th> <th>Area </th><th>Street </th> <th>Section/Street Number </th> <th>Lat </th>  <th>Long </th> </tr> </thead> <tbody id='bodyWorkflowDSection'> </tbody> </table>";
                        var st = "";
                        $("#MultiSectionTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.CityName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ZoneName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.AreaNamew + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.RoadName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.SecionName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.lat + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.longt + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowDSection").html(st);
                    },
                });
            };
            WorkOrderDialog.prototype.OpenGisDialog = function () {
                var GisURL = "https://webgis.eamana.gov.sa/giswebmapframe/";
                var iframe = '<iframe frameborder="0" marginwidth="0" marginheight="0" allowfullscreen src="' + GisURL + '" Height="499" Width="790"></iframe>';
                $("#Gisbtn").click(function () {
                    $('<div class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                        '<div class="">' +
                        '<div class="">' +
                        '' + iframe + '</div></div></div>').dialog({
                        modal: true,
                        resizable: false,
                        minHeight: 500,
                        minWidth: 800,
                        title: 'GIS Browser',
                        draggable: false,
                        open: function () {
                        },
                        buttons: {
                            Yes: function () {
                                $('.modal').dialog('hide').data('bs.modal', null);
                                $(this).dialog("close");
                            },
                            No: function () {
                                // def.reject();
                                $('.modal').dialog('hide').data('bs.modal', null);
                                //console.log(all.toJSON());
                                //console.log(all.toObject());
                                $(this).dialog("close");
                            }
                        }
                    });
                });
            };
            WorkOrderDialog.prototype.GisSetView = function (workorderitem, methodName) {
                $(document).ready(function () {
                    var map = L.map('mapviwer').setView([21.492500, 39.177570], 15);
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/" + methodName,
                        data: {
                            Itemid: workorderitem
                        },
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            $.each(result, function (key, value) {
                                var mGreen = L.marker([value.lat, value.longt]).bindPopup(value.SectionNumber).addTo(map);
                            });
                        },
                    });
                    var el = document; // This can be your element on which to trigger the event
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent('resize', true, false);
                    el.dispatchEvent(event);
                });
            };
            WorkOrderDialog.prototype.SetLaneTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/LaneDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th>  <th>Area </th>  <th>Street </th>  <th>Section </th>  <th>Lane </th>  <th>Work Type </th> <th>ID </th> <th>Lat </th><th>Long </th>   </tr> </thead> <tbody id='bodyWorkflowD33'> </tbody> </table>";
                        var st = "";
                        $("#LaneTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.city_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.zone_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.area_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ROAD_NAME + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.SectionNumber + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ActionData + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.Action + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ItemID + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.lat + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.longt + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowD33").html(st);
                    },
                });
            };
            WorkOrderDialog.prototype.SetHafriaTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/HafriaDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        //  var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>  <th>End date </th>  <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>    <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
                        var st = "";
                        $("#HafriaTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.STATUS_CODE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.INITIAL_DATE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.DEPT_NAME + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.DEPT_ID + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.START_ROAD_JOB_DATE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.STREET_ID + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowD333").html(st);
                    },
                });
            };
            WorkOrderDialog.prototype.getDrops = function () {
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        var dropFeatureID = $('#FeatureID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        $('#RoadID').multiselect("rebuild");
                        dropdownSectionID.empty();
                        dropFeatureID.empty();
                        dropFeatureID.select2();
                        $("#LaneTemplate").html("");
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        $("#citySelect").change(function () {
                            myform.WorkorderCity.value = $("#citySelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    $('#RoadID').multiselect("rebuild");
                                    dropdownSectionID.empty();
                                    $("#LaneTemplate").html("");
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#zoneSelect").change(function () {
                            myform.WorkorderZone.value = $("#zoneSelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getAreas",
                                data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                success: function (x) {
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    $('#RoadID').multiselect("rebuild");
                                    dropdownSectionID.empty();
                                    $("#LaneTemplate").html("");
                                    dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownarea.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                    $('#RoadID').multiselect("rebuild");
                                }
                            });
                        });
                        $("#area").change(function () {
                            myform.WorkorderArea.value = $("#area").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getRoadPCI",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                success: function (x) {
                                    dropdownRoadID.empty();
                                    $('#RoadID').multiselect("rebuild");
                                    dropdownSectionID.empty();
                                    $("#LaneTemplate").html("");
                                    //dropdownRoadID.append('<option  disabled>Select road</option>');
                                    //dropdownRoadID.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        if (entry.itemstatus == "disable" && myform.emergency.get_value() == "0") {
                                            dropdownRoadID.append($('<option rpc="disable" disabled class="rpcd"></option>').attr('value', entry.id).text(entry.Name));
                                        }
                                        else if (entry.itemstatus == "disable" && myform.emergency.get_value() != "0") {
                                            dropdownRoadID.append($('<option rpc="disable"  class="rpcd"></option>').attr('value', entry.id).text(entry.Name));
                                        }
                                        else {
                                            dropdownRoadID.append($('<option rpc="enable" class="rpcE"></option>').attr('value', entry.id).text(entry.Name));
                                        }
                                        //     dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                    if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                        $("#RoadID").removeAttr("multiple");
                                        $("#RoadID").multiselect({ multiple: false, maxHeight: true, enableFiltering: true });
                                        $('#RoadID').multiselect("deselectAll");
                                        $('#RoadID').val("");
                                        $('#RoadID').multiselect("refresh");
                                        $('#RoadID').multiselect("rebuild");
                                        //$("#RoadID").multipleSelect({
                                        //    filter: false,
                                        //    single: true
                                        //});
                                    }
                                    else {
                                        $("#RoadID").attr("multiple", "multiple");
                                        $("#RoadID", this.el).multiselect({ allSelectedText: 'All', includeSelectAllOption: true, maxHeight: true, multiple: true, includeSelectAllIfMoreThan: 0, enableFiltering: true });
                                        $('#RoadID').multiselect("deselectAll");
                                        $('#RoadID').multiselect("rebuild");
                                        $('#RoadID').val("");
                                        $('#RoadID').multiselect("refresh");
                                        //$("#RoadID").multipleSelect({
                                        //    filter: true,
                                        //    single  : false
                                        //});
                                    }
                                }
                            });
                        });
                        $("#RoadID").change(function () {
                            var enable = 1;
                            if ($("#RoadID").attr("multiple") == "multiple") {
                                if ($('#RoadID').val().length != 0 && $('#RoadID').val().length == 1) {
                                    enable = 1;
                                }
                                else {
                                    enable = 0;
                                }
                            }
                            else {
                                enable = 1;
                            }
                            // $('#RoadID').val().length != 0 && $('#RoadID').val().length 
                            myform.WorkorderRoad.value = $("#RoadID").val();
                            dropdownSectionID.empty();
                            $("#LaneTemplate").html("");
                            $("#LaneTemplate").html("");
                            if (enable == 1) {
                                $.ajax({
                                    type: "GET",
                                    url: "/sysapi/getSectionIdPCI",
                                    data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: myform.WorkorderRoad.value },
                                    success: function (x) {
                                        dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                        dropdownSectionID.prop('selectedIndex', 0);
                                        $.each(x, function (key, entry) {
                                            if (entry.itemstatus == "disable" && myform.emergency.get_value() == "0") {
                                                dropdownSectionID.append($('<option rpc="disable" disabled class="rpcd"></option>').attr('value', entry.id).text(entry.Name));
                                            }
                                            else if (entry.itemstatus == "disable" && myform.emergency.get_value() != "0") {
                                                dropdownSectionID.append($('<option rpc="disable"  class="rpcd"></option>').attr('value', entry.id).text(entry.Name));
                                            }
                                            else {
                                                dropdownSectionID.append($('<option rpc="enable" class="rpcE"></option>').attr('value', entry.id).text(entry.Name));
                                            }
                                        });
                                    }
                                });
                            }
                            if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                $(".SectionNoTemplate").show();
                            }
                            else {
                                if ($('#RoadID').val().length > 1 && myform.emergency.get_value() == "0") {
                                    $("#LaneTemplate").html("");
                                    $.ajax({
                                        type: "GET",
                                        url: "/sysapi/GetEmergency",
                                        data: {
                                        //  OID: orderid,
                                        },
                                        contentType: "application/json;charset=utf-8",
                                        dataType: "json",
                                        success: function (result) {
                                            var ILaneoptions = "<option value='0'>Do Nothing</option>";
                                            $.each(result, function (key, entry) {
                                                ILaneoptions = ILaneoptions + " <option value='" + entry.id + "'>" + entry.Name + "</option> ";
                                            });
                                            var datastring = "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                            $("#LaneTemplate").html(datastring);
                                            $(".SectionNoTemplate").hide();
                                        }
                                    });
                                }
                                else if ($('#RoadID').val().length > 1 && myform.emergency.get_value() != "0") {
                                    $("#LaneTemplate").html("");
                                    var ILaneoptions = "<option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>";
                                    var datastring = "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                    $("#LaneTemplate").html(datastring);
                                    $(".SectionNoTemplate").hide();
                                }
                                else {
                                    $(".SectionNoTemplate").show();
                                }
                            }
                        });
                        myform.emergency.change(function () {
                            if (myform.emergency.get_value() == "0") {
                                $(".rpcd").attr("disabled", "disabled");
                                if ($("#SectionID option:selected").attr("rpc") == "disable") {
                                    $("#SectionID").val("-1");
                                    $("#SectionID").trigger("change");
                                }
                                else if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                }
                                else {
                                    $('#RoadID').val("");
                                    $('#RoadID').multiselect("deselectAll");
                                    $('#RoadID').multiselect("refresh");
                                    $('#RoadID').multiselect("rebuild");
                                    $("#SectionID").val("-1");
                                    $("#SectionID").trigger("change");
                                }
                            }
                            else {
                                $(".rpcd").removeAttr("disabled");
                                $("#RoadID option:selected").removeAttr("selected");
                                $("#SectionID").val("-1");
                                $("#LaneTemplate").html("");
                                if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                }
                                else {
                                    $("#SectionID").val("-1");
                                    $("#LaneTemplate").html("");
                                    $('#RoadID').val("");
                                    $('#RoadID').multiselect("deselectAll");
                                    $('#RoadID').multiselect("refresh");
                                    $('#RoadID').multiselect("rebuild");
                                }
                            }
                        });
                        $("#SectionID").change(function () {
                            myform.WorkorderSection.value = $("#SectionID").val();
                            var secSelect = $("#SectionID option:selected").text().split('-')[0];
                            if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                            }
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getFeatureSection",
                                data: {
                                    Section: secSelect
                                },
                                success: function (x) {
                                    $.ajax({
                                        type: "GET",
                                        url: "/sysapi/GetEmergency",
                                        data: {
                                        //  OID: orderid,
                                        },
                                        contentType: "application/json;charset=utf-8",
                                        dataType: "json",
                                        success: function (result) {
                                            var datastring = "";
                                            dropFeatureID.empty();
                                            $("#SectionComapnion").val("");
                                            dropFeatureID.append('<option selected="true" disabled>Select Feature</option>');
                                            dropFeatureID.prop('selectedIndex', 0);
                                            var ILaneoptions = "<option value='0'>Do Nothing</option>";
                                            // lane
                                            $.each(result, function (key, entry) {
                                                ILaneoptions = ILaneoptions + " <option value='" + entry.id + "'>" + entry.Name + "</option> ";
                                            });
                                            if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                                if (myform.emergency.get_value() != "0") {
                                                    ILaneoptions = "<option value='0'>Do Nothing</option> <option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>";
                                                }
                                                $.each(x, function (key, entry) {
                                                    dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                    datastring = datastring + "<div><span style='color: blue;'> " + entry.Name + "</span><div><select class='drpLane' id='drpLaneItem-" + entry.id + "' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                                });
                                                // local  
                                            }
                                            else {
                                                if (myform.emergency.get_value() != "0") {
                                                    ILaneoptions = "<option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>";
                                                    dropFeatureID.append($('<option></option>').attr('value', '01').text('Local Road - Pavement - LR'));
                                                    datastring = datastring + "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                                }
                                                else {
                                                    $.each(x, function (key, entry) {
                                                        dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                        datastring = datastring + "<div><span style='color: blue;'> " + entry.Name + "</span><div><select class='drpLane' id='drpLaneItem-" + entry.id + "' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                                    });
                                                }
                                            }
                                            $("#LaneTemplate").html(datastring);
                                            $(".drpLane").each(function () {
                                                myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ',';
                                            });
                                            // console.log(myform.WorkorderLane.value);
                                            $(".drpLane").change(function () {
                                                myform.WorkorderLane.value = "";
                                                $(".drpLane").each(function () {
                                                    myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ',';
                                                });
                                                //  console.log(myform.WorkorderLane.value);
                                            });
                                            //   $("#LaneTemplate").html(datastring);
                                            dropFeatureID.select2();
                                        }
                                    });
                                }
                            });
                        });
                        $("#FeatureID").change(function () {
                            //var theID = [];
                            //var theID = [];
                            //var theSelection = [];
                            //$.each(dropFeatureID.select2('data'), function (key, item) {
                            //    theID.push(item.id);
                            //    theSelection.push(item.text);
                            //});
                            //console.log(theID.join(","));
                            ////console.log(theSelection.join(","));
                            //myform.WorkorderLane.value = theID.join(",");
                        });
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            WorkOrderDialog.prototype.setDrops = function () {
                var allt = this;
                allt.SetLaneTemplate(allt.entityId);
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        var dropFeatureID = $('#FeatureID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        dropdownSectionID.empty();
                        $("#LaneTemplate").html("");
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        if (myform.WorkorderCity.value != "") {
                            $("#citySelect").val(myform.WorkorderCity.value);
                            $('#citySelect').prop('disabled', 'disabled');
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    $("#LaneTemplate").html("");
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                    if (myform.WorkorderZone.value != "") {
                                        $("#zoneSelect").val(myform.WorkorderZone.value);
                                        /*  $("#citySelect").trigger('change');*/
                                        $('#zoneSelect').prop('disabled', 'disabled');
                                        $.ajax({
                                            type: "GET",
                                            url: "/sysapi/getAreas",
                                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                            success: function (x) {
                                                dropdownarea.empty();
                                                dropdownRoadID.empty();
                                                dropdownSectionID.empty();
                                                $("#LaneTemplate").html("");
                                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                                dropdownarea.prop('selectedIndex', 0);
                                                //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                $.each(x, function (key, entry) {
                                                    dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                });
                                                if (myform.WorkorderArea.value != "") {
                                                    dropdownarea.val(myform.WorkorderArea.value);
                                                    $('#area').prop('disabled', 'disabled');
                                                    $.ajax({
                                                        type: "GET",
                                                        url: "/sysapi/getRoad",
                                                        data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                                        success: function (x) {
                                                            dropdownRoadID.empty();
                                                            dropdownSectionID.empty();
                                                            $("#LaneTemplate").html("");
                                                            dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                                            dropdownRoadID.prop('selectedIndex', 0);
                                                            //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                            $.each(x, function (key, entry) {
                                                                dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                            });
                                                            if (myform.WorkorderRoad.value != "") {
                                                                dropdownRoadID.val(myform.WorkorderRoad.value);
                                                                $('#RoadID').prop('disabled', 'disabled');
                                                                $.ajax({
                                                                    type: "GET",
                                                                    url: "/sysapi/getSectionId",
                                                                    data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                                                    success: function (x) {
                                                                        dropdownSectionID.empty();
                                                                        $("#LaneTemplate").html("");
                                                                        dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                                                        dropdownSectionID.prop('selectedIndex', 0);
                                                                        $.each(x, function (key, entry) {
                                                                            dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                        });
                                                                        if (myform.WorkorderSection.value != "") {
                                                                            dropdownSectionID.val(myform.WorkorderSection.value);
                                                                            $('#SectionID').prop('disabled', 'disabled');
                                                                            $.ajax({
                                                                                type: "GET",
                                                                                url: "/sysapi/getFeatureSection",
                                                                                data: {
                                                                                    Section: $("#SectionID option:selected").text()
                                                                                },
                                                                                success: function (x) {
                                                                                    dropFeatureID.empty();
                                                                                    $("#SectionComapnion").val("");
                                                                                    dropFeatureID.append('<option selected="true" disabled>Select Feature</option>');
                                                                                    dropFeatureID.prop('selectedIndex', 0);
                                                                                    var datastring = "";
                                                                                    $.each(x, function (key, entry) {
                                                                                        dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                                    });
                                                                                    // $("#LaneTemplate").html(datastring);
                                                                                    allt.SetLaneTemplate(allt.entityId);
                                                                                    //if ($.trim(myform.WorkorderLane.value) != '') {
                                                                                    //    var names = myform.WorkorderLane.value;
                                                                                    //    var nameArr = names.split(',');
                                                                                    //    dropFeatureID.select2("val", nameArr)
                                                                                    //    dropFeatureID.prop('disabled', true)
                                                                                    //} else {
                                                                                    //    var names = "";
                                                                                    //    $.each(x, function (key, entry) {
                                                                                    //        dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                                    //        names = names + "," + entry.id;
                                                                                    //    })
                                                                                    //    var nameArr = names.split(',');
                                                                                    //    dropFeatureID.select2("val", nameArr)
                                                                                    //    dropFeatureID.prop('disabled', true)
                                                                                    //}
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            WorkOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], WorkOrderDialog);
            return WorkOrderDialog;
        }(Serenity.EntityDialog));
        Default.WorkOrderDialog = WorkOrderDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderGrid = /** @class */ (function (_super) {
            __extends(WorkOrderGrid, _super);
            function WorkOrderGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            WorkOrderGrid.prototype.getColumnsKey = function () { return 'Default.WorkOrder'; };
            WorkOrderGrid.prototype.getDialogType = function () { return Default.WorkOrderDialog; };
            WorkOrderGrid.prototype.getIdProperty = function () { return Default.WorkOrderRow.idProperty; };
            WorkOrderGrid.prototype.getInsertPermission = function () { return Default.WorkOrderRow.insertPermission; };
            WorkOrderGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            WorkOrderGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Status == "Inpogress")
                    klass += " InpogressCls";
                else if (item.Status == "Done.Approved")
                    klass += " DoneClsApproved";
                else if (item.Status == "Done.Reject")
                    klass += " DoneClsReject";
                return Q.trimToNull(klass);
            };
            WorkOrderGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                var btnSave = Q.first(buttons, function (x) { return x.cssClass == "add-button"; });
                btnSave.visible = false;
                //btnSave.disabled = false;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/IsUserHasAccessToWF",
                    data: {},
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        if (result == "1") {
                            $(".add-button").show();
                        }
                    },
                });
                return buttons;
            };
            WorkOrderGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            WorkOrderGrid.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            WorkOrderGrid.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            WorkOrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WorkOrderGrid);
            return WorkOrderGrid;
        }(Serenity.EntityGrid));
        Default.WorkOrderGrid = WorkOrderGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugDialog = /** @class */ (function (_super) {
            __extends(WorkOrderBugDialog, _super);
            function WorkOrderBugDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.WorkOrderBugForm(_this.idPrefix);
                return _this;
            }
            WorkOrderBugDialog.prototype.getFormKey = function () { return Default.WorkOrderBugForm.formKey; };
            /* protected getIdProperty() { return WorkOrderBugRow.idProperty; }*/
            WorkOrderBugDialog.prototype.getLocalTextPrefix = function () { return Default.WorkOrderBugRow.localTextPrefix; };
            WorkOrderBugDialog.prototype.getNameProperty = function () { return Default.WorkOrderBugRow.nameProperty; };
            WorkOrderBugDialog.prototype.getService = function () { return Default.WorkOrderBugService.baseUrl; };
            WorkOrderBugDialog.prototype.getDeletePermission = function () { return Default.WorkOrderBugRow.insertPermission; };
            WorkOrderBugDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderBugDialog);
            return WorkOrderBugDialog;
        }(PMMS.Common.GridEditorDialog));
        Default.WorkOrderBugDialog = WorkOrderBugDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugEditor = /** @class */ (function (_super) {
            __extends(WorkOrderBugEditor, _super);
            function WorkOrderBugEditor(container) {
                return _super.call(this, container) || this;
            }
            WorkOrderBugEditor.prototype.getColumnsKey = function () { return "Default.WorkOrderBug"; };
            WorkOrderBugEditor.prototype.getDialogType = function () { return Default.WorkOrderBugDialog; };
            WorkOrderBugEditor.prototype.getLocalTextPrefix = function () { return Default.WorkOrderBugRow.localTextPrefix; };
            WorkOrderBugEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            WorkOrderBugEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderBugEditor);
            return WorkOrderBugEditor;
        }(PMMS.Common.GridEditorBase));
        Default.WorkOrderBugEditor = WorkOrderBugEditor;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderBugGrid = /** @class */ (function (_super) {
            __extends(WorkOrderBugGrid, _super);
            function WorkOrderBugGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderBugGrid.prototype.getColumnsKey = function () { return 'Default.WorkOrderBug'; };
            WorkOrderBugGrid.prototype.getDialogType = function () { return Default.WorkOrderBugDialog; };
            WorkOrderBugGrid.prototype.getIdProperty = function () { return Default.WorkOrderBugRow.idProperty; };
            WorkOrderBugGrid.prototype.getInsertPermission = function () { return Default.WorkOrderBugRow.insertPermission; };
            WorkOrderBugGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderBugGrid);
            return WorkOrderBugGrid;
        }(Serenity.EntityGrid));
        Default.WorkOrderBugGrid = WorkOrderBugGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderEmergencyDialog = /** @class */ (function (_super) {
            __extends(WorkOrderEmergencyDialog, _super);
            function WorkOrderEmergencyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderEmergencyDialog.prototype.getFormKey = function () { return Default.WorkOrderEmergencyForm.formKey; };
            WorkOrderEmergencyDialog.prototype.getIdProperty = function () { return Default.WorkOrderEmergencyRow.idProperty; };
            WorkOrderEmergencyDialog.prototype.getLocalTextPrefix = function () { return Default.WorkOrderEmergencyRow.localTextPrefix; };
            WorkOrderEmergencyDialog.prototype.getNameProperty = function () { return Default.WorkOrderEmergencyRow.nameProperty; };
            WorkOrderEmergencyDialog.prototype.getService = function () { return Default.WorkOrderEmergencyService.baseUrl; };
            WorkOrderEmergencyDialog.prototype.getDeletePermission = function () { return Default.WorkOrderEmergencyRow.insertPermission; };
            WorkOrderEmergencyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderEmergencyDialog);
            return WorkOrderEmergencyDialog;
        }(Serenity.EntityDialog));
        Default.WorkOrderEmergencyDialog = WorkOrderEmergencyDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderEmergencyGrid = /** @class */ (function (_super) {
            __extends(WorkOrderEmergencyGrid, _super);
            function WorkOrderEmergencyGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkOrderEmergencyGrid.prototype.getColumnsKey = function () { return 'Default.WorkOrderEmergency'; };
            WorkOrderEmergencyGrid.prototype.getDialogType = function () { return Default.WorkOrderEmergencyDialog; };
            WorkOrderEmergencyGrid.prototype.getIdProperty = function () { return Default.WorkOrderEmergencyRow.idProperty; };
            WorkOrderEmergencyGrid.prototype.getInsertPermission = function () { return Default.WorkOrderEmergencyRow.insertPermission; };
            WorkOrderEmergencyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderEmergencyGrid);
            return WorkOrderEmergencyGrid;
        }(Serenity.EntityGrid));
        Default.WorkOrderEmergencyGrid = WorkOrderEmergencyGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixDialog = /** @class */ (function (_super) {
            __extends(WorkOrderFixDialog, _super);
            function WorkOrderFixDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.WorkOrderFixForm(_this.idPrefix);
                return _this;
            }
            WorkOrderFixDialog.prototype.getFormKey = function () { return Default.WorkOrderFixForm.formKey; };
            /*  protected getIdProperty() { return WorkOrderFixRow.idProperty; }*/
            WorkOrderFixDialog.prototype.getLocalTextPrefix = function () { return Default.WorkOrderFixRow.localTextPrefix; };
            WorkOrderFixDialog.prototype.getNameProperty = function () { return Default.WorkOrderFixRow.nameProperty; };
            WorkOrderFixDialog.prototype.getService = function () { return Default.WorkOrderFixService.baseUrl; };
            WorkOrderFixDialog.prototype.getDeletePermission = function () { return Default.WorkOrderFixRow.insertPermission; };
            WorkOrderFixDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderFixDialog);
            return WorkOrderFixDialog;
        }(PMMS.Common.GridEditorDialog));
        Default.WorkOrderFixDialog = WorkOrderFixDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixEditor = /** @class */ (function (_super) {
            __extends(WorkOrderFixEditor, _super);
            function WorkOrderFixEditor(container) {
                return _super.call(this, container) || this;
            }
            WorkOrderFixEditor.prototype.getColumnsKey = function () { return "Default.WorkOrderFix"; };
            WorkOrderFixEditor.prototype.getDialogType = function () { return Default.WorkOrderFixDialog; };
            WorkOrderFixEditor.prototype.getLocalTextPrefix = function () { return Default.WorkOrderFixRow.localTextPrefix; };
            WorkOrderFixEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            WorkOrderFixEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderFixEditor);
            return WorkOrderFixEditor;
        }(PMMS.Common.GridEditorBase));
        Default.WorkOrderFixEditor = WorkOrderFixEditor;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderFixGrid = /** @class */ (function (_super) {
            __extends(WorkOrderFixGrid, _super);
            function WorkOrderFixGrid(container) {
                return _super.call(this, container) || this;
            }
            WorkOrderFixGrid.prototype.getColumnsKey = function () { return 'Default.WorkOrderFix'; };
            WorkOrderFixGrid.prototype.getDialogType = function () { return Default.WorkOrderFixDialog; };
            WorkOrderFixGrid.prototype.getIdProperty = function () { return Default.WorkOrderFixRow.idProperty; };
            WorkOrderFixGrid.prototype.getInsertPermission = function () { return Default.WorkOrderFixRow.insertPermission; };
            WorkOrderFixGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkOrderFixGrid);
            return WorkOrderFixGrid;
        }(Serenity.EntityGrid));
        Default.WorkOrderFixGrid = WorkOrderFixGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderOldDialog = /** @class */ (function (_super) {
            __extends(WorkOrderOldDialog, _super);
            function WorkOrderOldDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.WorkOrderOldForm(_this.idPrefix);
                _this.form.WorkorderStartDate.element.addClass("rtl-txtbox");
                _this.form.Remark2.getGridField().toggle(false);
                _this.form.Remark3.getGridField().toggle(false);
                return _this;
            }
            WorkOrderOldDialog.prototype.getFormKey = function () { return Default.WorkOrderOldForm.formKey; };
            WorkOrderOldDialog.prototype.getIdProperty = function () { return Default.WorkOrderOldRow.idProperty; };
            WorkOrderOldDialog.prototype.getLocalTextPrefix = function () { return Default.WorkOrderOldRow.localTextPrefix; };
            WorkOrderOldDialog.prototype.getNameProperty = function () { return Default.WorkOrderOldRow.nameProperty; };
            WorkOrderOldDialog.prototype.getService = function () { return Default.WorkOrderOldService.baseUrl; };
            WorkOrderOldDialog.prototype.getDeletePermission = function () { return Default.WorkOrderOldRow.insertPermission; };
            WorkOrderOldDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var path = "~/Default/WorkOrderOld/GetReport?id=";
                buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                    title: 'Print',
                    icon: "fa-print",
                    cssClass: 'export-pdf-button',
                    reportKey: this.get_entityId(),
                    URL: path,
                }));
                return buttons;
            };
            WorkOrderOldDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                this.deleteButton.hide();
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
                var bt = this.deleteButton;
                var workorderitem = this.entityId;
                if (this.isEditMode()) {
                    ////  this.SetHafriaTemplate(workorderitem);
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/workorderOld",
                        data: {
                            Itemid: workorderitem
                        },
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            var st = "";
                            $.each(result, function (key, value) {
                                st = st
                                    + ' <tr style="color:white;">'
                                    + ' <td>'
                                    + ' <label>' + value.ITM_CODE + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.ITM_DESC + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.UNIT + '</label>'
                                    + '</td>'
                                    + '<td>'
                                    + '  <label>' + value.EXEC_QTY + '</label>'
                                    + '</td>'
                                    + ' <td>'
                                    + '  <label>' + value.REMAINDER + '</label>'
                                    + '</td>'
                                    + ' <td>'
                                    + '  <label>' + value.PREV_EXEC_QTY + '</label>'
                                    + '</td>'
                                    + ' <td>'
                                    + '  <label>' + value.QUANTITY + '</label>'
                                    + '</td>'
                                    + '   </tr>';
                            });
                            $("#bodyBOQTemplates").html(st);
                        },
                    });
                }
                else {
                    $("#bodyBOQTemplates").html("");
                    $("#bodyWorkflowD333").html("");
                }
                //$.ajax({
                //    type: "GET",
                //    url: "/sysapi/IsUserHasAccessToWF",
                //    data: {
                //    },
                //    contentType: "application/json;charset=utf-8",
                //    dataType: "json",
                //    success: function (result) {
                //        if (result == "1") {
                //           // bt.show()
                //            //  bt.removeAttr("disabled");
                //        }
                //    },
                //});
            };
            WorkOrderOldDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    try {
                        this.form.WorkorderCity.element.closest('.category').toggle(true);
                        $(".LaneTemplate").show();
                        $(".MultiSectionTemplate").hide();
                        //// this.form.emergency.set_value("0")
                        ////  this.getDrops();
                        this.OpenGisDialog();
                    }
                    catch (e) {
                    }
                }
                else {
                    // document.getElementById('mapviwerAll').innerHTML = "<div id='mapviwer'></div>";
                    try {
                        if (this.form.WorkorderSection.value == "-1") {
                            this.form.WorkorderCity.element.closest('.category').toggle(false);
                            $(".LaneTemplate").hide();
                            $(".MultiSectionTemplate").show();
                            this.SetSectionTemplate(this.entityId);
                            //  this.GisSetView(this.entityId, "SecDataTemplate");
                        }
                        else {
                            //this.getDrops();
                            //this.setDrops();
                            var allt = this;
                            allt.SetLaneTemplate(allt.entityId);
                            //  allt.GisSetView(allt.entityId, "LaneDataTemplate");
                            this.form.WorkorderCity.element.closest('.category').toggle(false);
                            $(".MultiSectionTemplate").hide();
                        }
                        this.element.find('.add-button').hide();
                    }
                    catch (e) {
                    }
                }
            };
            WorkOrderOldDialog.prototype.SetSectionTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/SecDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th> <th>Area </th><th>Street </th> <th>Section/Street Number </th> </tr> </thead> <tbody id='bodyWorkflowDSection'> </tbody> </table>";
                        var st = "";
                        $("#MultiSectionTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.CityName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ZoneName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.AreaNamew + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.RoadName + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.SecionName + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowDSection").html(st);
                    },
                });
            };
            WorkOrderOldDialog.prototype.OpenGisDialog = function () {
                var GisURL = "https://webgis.eamana.gov.sa/giswebmapframe/";
                var iframe = '<iframe frameborder="0" marginwidth="0" marginheight="0" allowfullscreen src="' + GisURL + '" Height="499" Width="790"></iframe>';
                $("#Gisbtn").click(function () {
                    $('<div class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                        '<div class="">' +
                        '<div class="">' +
                        '' + iframe + '</div></div></div>').dialog({
                        modal: true,
                        resizable: false,
                        minHeight: 500,
                        minWidth: 800,
                        title: 'GIS Browser',
                        draggable: false,
                        open: function () {
                        },
                        buttons: {
                            Yes: function () {
                                $('.modal').dialog('hide').data('bs.modal', null);
                                $(this).dialog("close");
                            },
                            No: function () {
                                // def.reject();
                                $('.modal').dialog('hide').data('bs.modal', null);
                                //console.log(all.toJSON());
                                //console.log(all.toObject());
                                $(this).dialog("close");
                            }
                        }
                    });
                });
            };
            WorkOrderOldDialog.prototype.GisSetView = function (workorderitem, methodName) {
                $(document).ready(function () {
                    var map = L.map('mapviwer').setView([21.492500, 39.177570], 15);
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/" + methodName,
                        data: {
                            Itemid: workorderitem
                        },
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            $.each(result, function (key, value) {
                                var mGreen = L.marker([value.lat, value.longt]).bindPopup(value.SectionNumber).addTo(map);
                            });
                        },
                    });
                    var el = document; // This can be your element on which to trigger the event
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent('resize', true, false);
                    el.dispatchEvent(event);
                });
            };
            WorkOrderOldDialog.prototype.SetLaneTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/LaneDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th>  <th>Area </th>  <th>Street </th>  <th>Section </th>  <th>Lane </th>  <th>Work Type </th> <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD33'> </tbody> </table>";
                        var st = "";
                        $("#LaneTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.city_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.zone_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.area_name + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ROAD_NAME + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.SectionNumber + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ActionData + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.Action + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ItemID + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowD33").html(st);
                    },
                });
            };
            WorkOrderOldDialog.prototype.SetHafriaTemplate = function (workorderitem) {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/HafriaDataTemplate",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>  <th>End date </th>  <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
                        var st = "";
                        $("#HafriaTemplate").html(st2);
                        $.each(result, function (key, value) {
                            st = st
                                + ' <tr style="color:black;">'
                                + ' <td>'
                                + ' <label>' + value.STATUS_CODE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.INITIAL_DATE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.DEPT_NAME + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.DEPT_ID + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.START_ROAD_JOB_DATE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.END_ROAD_JOB_DATE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.STREET_ID + '</label>'
                                + '</td>'
                                + '   </tr>';
                        });
                        $("#bodyWorkflowD333").html(st);
                    },
                });
            };
            WorkOrderOldDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], WorkOrderOldDialog);
            return WorkOrderOldDialog;
        }(Serenity.EntityDialog));
        Default.WorkOrderOldDialog = WorkOrderOldDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkOrderOldGrid = /** @class */ (function (_super) {
            __extends(WorkOrderOldGrid, _super);
            function WorkOrderOldGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            WorkOrderOldGrid.prototype.getColumnsKey = function () { return 'Default.WorkOrderOld'; };
            WorkOrderOldGrid.prototype.getDialogType = function () { return Default.WorkOrderOldDialog; };
            WorkOrderOldGrid.prototype.getIdProperty = function () { return Default.WorkOrderOldRow.idProperty; };
            WorkOrderOldGrid.prototype.getInsertPermission = function () { return Default.WorkOrderOldRow.insertPermission; };
            WorkOrderOldGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            WorkOrderOldGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Status == "Inpogress")
                    klass += " InpogressCls";
                else if (item.Status == "Done.Approved")
                    klass += " DoneClsApproved";
                else if (item.Status == "Done.Reject")
                    klass += " DoneClsReject";
                return Q.trimToNull(klass);
            };
            WorkOrderOldGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                var btnSave = Q.first(buttons, function (x) { return x.cssClass == "add-button"; });
                btnSave.visible = false;
                //btnSave.disabled = false;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/IsUserHasAccessToWF",
                    data: {},
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        if (result == "1") {
                            // $(".add-button").show();
                        }
                    },
                });
                return buttons;
            };
            WorkOrderOldGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            WorkOrderOldGrid.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            WorkOrderOldGrid.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            WorkOrderOldGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WorkOrderOldGrid);
            return WorkOrderOldGrid;
        }(Serenity.EntityGrid));
        Default.WorkOrderOldGrid = WorkOrderOldGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqDialog = /** @class */ (function (_super) {
            __extends(WorkorderBoqDialog, _super);
            function WorkorderBoqDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderBoqDialog.prototype.getFormKey = function () { return Default.WorkorderBoqForm.formKey; };
            WorkorderBoqDialog.prototype.getIdProperty = function () { return Default.WorkorderBoqRow.idProperty; };
            WorkorderBoqDialog.prototype.getLocalTextPrefix = function () { return Default.WorkorderBoqRow.localTextPrefix; };
            WorkorderBoqDialog.prototype.getNameProperty = function () { return Default.WorkorderBoqRow.nameProperty; };
            WorkorderBoqDialog.prototype.getService = function () { return Default.WorkorderBoqService.baseUrl; };
            WorkorderBoqDialog.prototype.getDeletePermission = function () { return Default.WorkorderBoqRow.insertPermission; };
            WorkorderBoqDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderBoqDialog);
            return WorkorderBoqDialog;
        }(Serenity.EntityDialog));
        Default.WorkorderBoqDialog = WorkorderBoqDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqGrid = /** @class */ (function (_super) {
            __extends(WorkorderBoqGrid, _super);
            function WorkorderBoqGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderBoqGrid.prototype.getColumnsKey = function () { return 'Default.WorkorderBoq'; };
            WorkorderBoqGrid.prototype.getDialogType = function () { return Default.WorkorderBoqDialog; };
            WorkorderBoqGrid.prototype.getIdProperty = function () { return Default.WorkorderBoqRow.idProperty; };
            WorkorderBoqGrid.prototype.getInsertPermission = function () { return Default.WorkorderBoqRow.insertPermission; };
            WorkorderBoqGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderBoqGrid);
            return WorkorderBoqGrid;
        }(Serenity.EntityGrid));
        Default.WorkorderBoqGrid = WorkorderBoqGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemDialog = /** @class */ (function (_super) {
            __extends(WorkorderBoqItemDialog, _super);
            function WorkorderBoqItemDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.WorkorderBoqItemForm(_this.idPrefix);
                if (_this.isEditMode()) {
                }
                else {
                    var myform = _this.form;
                    $.ajax({
                        type: "GET",
                        url: "/sysapi/getContractItem",
                        data: {
                            id: $("#protem").val(),
                        },
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            var dropdown = $('#itemBqSelect');
                            dropdown.empty();
                            dropdown.append('<option selected="true" disabled>Select Area</option>');
                            dropdown.prop('selectedIndex', 0);
                            $.each(result, function (key, entry) {
                                dropdown.append($('<option></option>').attr('value', entry.Name).text(entry.id));
                            });
                            dropdown.change(function () {
                                myform.ItmDesc.value = $("#itemBqSelect option:selected").text();
                                var nameArr = dropdown.val().split(',');
                                myform.ItmCode.value = nameArr[0];
                                myform.ItmSeq.value = nameArr[1];
                                myform.REMAINDER.value = nameArr[2];
                                myform.Qty.value = nameArr[3];
                                myform.Prev_EXEC_QTY.value = nameArr[4];
                                myform.Unit.value = nameArr[5];
                                /*  alert(  $("#protem").val());*/
                            });
                            if (myform.ItmDesc.value != "") {
                                $("#itemBqSelect option:contains(" + myform.ItmDesc.value + ")").attr('selected', 'selected');
                            }
                        },
                        error: function (response) {
                            console.log(response);
                        }
                    });
                }
                return _this;
            }
            WorkorderBoqItemDialog.prototype.getFormKey = function () { return Default.WorkorderBoqItemForm.formKey; };
            /*  protected getIdProperty() { return WorkorderBoqItemRow.idProperty; }*/
            WorkorderBoqItemDialog.prototype.getLocalTextPrefix = function () { return Default.WorkorderBoqItemRow.localTextPrefix; };
            WorkorderBoqItemDialog.prototype.getNameProperty = function () { return Default.WorkorderBoqItemRow.nameProperty; };
            WorkorderBoqItemDialog.prototype.getService = function () { return Default.WorkorderBoqItemService.baseUrl; };
            WorkorderBoqItemDialog.prototype.getDeletePermission = function () { return Default.WorkorderBoqItemRow.insertPermission; };
            WorkorderBoqItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderBoqItemDialog);
            return WorkorderBoqItemDialog;
        }(PMMS.Common.GridEditorDialog));
        Default.WorkorderBoqItemDialog = WorkorderBoqItemDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemEditor = /** @class */ (function (_super) {
            __extends(WorkorderBoqItemEditor, _super);
            function WorkorderBoqItemEditor(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            WorkorderBoqItemEditor.prototype.getColumnsKey = function () { return "Default.WorkorderBoqItem"; };
            WorkorderBoqItemEditor.prototype.getDialogType = function () { return Default.WorkorderBoqItemDialog; };
            WorkorderBoqItemEditor.prototype.getLocalTextPrefix = function () { return Default.WorkorderBoqItemRow.localTextPrefix; };
            WorkorderBoqItemEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            WorkorderBoqItemEditor.prototype.validateEntity = function (row, id) {
                //  row.AttrId = Q.toId(row.AttrId);
                // console.log($("#itemBqSelect").val());
                if ($("#itemBqSelect").val() == "" || $("#itemBqSelect").val() == "0" || $("#itemBqSelect").val() == null) {
                    Q.alert('please select the item ');
                    return false;
                }
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ItmDesc === row.ItmDesc; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This item is already register!');
                    return false;
                }
                /* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/
                return true;
            };
            WorkorderBoqItemEditor.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            WorkorderBoqItemEditor.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            WorkorderBoqItemEditor.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            WorkorderBoqItemEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderBoqItemEditor);
            return WorkorderBoqItemEditor;
        }(PMMS.Common.GridEditorBase));
        Default.WorkorderBoqItemEditor = WorkorderBoqItemEditor;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderBoqItemGrid = /** @class */ (function (_super) {
            __extends(WorkorderBoqItemGrid, _super);
            function WorkorderBoqItemGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderBoqItemGrid.prototype.getColumnsKey = function () { return 'Default.WorkorderBoqItem'; };
            WorkorderBoqItemGrid.prototype.getDialogType = function () { return Default.WorkorderBoqItemDialog; };
            WorkorderBoqItemGrid.prototype.getIdProperty = function () { return Default.WorkorderBoqItemRow.idProperty; };
            WorkorderBoqItemGrid.prototype.getInsertPermission = function () { return Default.WorkorderBoqItemRow.insertPermission; };
            WorkorderBoqItemGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderBoqItemGrid);
            return WorkorderBoqItemGrid;
        }(Serenity.EntityGrid));
        Default.WorkorderBoqItemGrid = WorkorderBoqItemGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderItemStatusDialog = /** @class */ (function (_super) {
            __extends(WorkorderItemStatusDialog, _super);
            function WorkorderItemStatusDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderItemStatusDialog.prototype.getFormKey = function () { return Default.WorkorderItemStatusForm.formKey; };
            WorkorderItemStatusDialog.prototype.getIdProperty = function () { return Default.WorkorderItemStatusRow.idProperty; };
            WorkorderItemStatusDialog.prototype.getLocalTextPrefix = function () { return Default.WorkorderItemStatusRow.localTextPrefix; };
            WorkorderItemStatusDialog.prototype.getNameProperty = function () { return Default.WorkorderItemStatusRow.nameProperty; };
            WorkorderItemStatusDialog.prototype.getService = function () { return Default.WorkorderItemStatusService.baseUrl; };
            WorkorderItemStatusDialog.prototype.getDeletePermission = function () { return Default.WorkorderItemStatusRow.insertPermission; };
            WorkorderItemStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderItemStatusDialog);
            return WorkorderItemStatusDialog;
        }(Serenity.EntityDialog));
        Default.WorkorderItemStatusDialog = WorkorderItemStatusDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var WorkorderItemStatusGrid = /** @class */ (function (_super) {
            __extends(WorkorderItemStatusGrid, _super);
            function WorkorderItemStatusGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WorkorderItemStatusGrid.prototype.getColumnsKey = function () { return 'Default.WorkorderItemStatus'; };
            WorkorderItemStatusGrid.prototype.getDialogType = function () { return Default.WorkorderItemStatusDialog; };
            WorkorderItemStatusGrid.prototype.getIdProperty = function () { return Default.WorkorderItemStatusRow.idProperty; };
            WorkorderItemStatusGrid.prototype.getInsertPermission = function () { return Default.WorkorderItemStatusRow.insertPermission; };
            WorkorderItemStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WorkorderItemStatusGrid);
            return WorkorderItemStatusGrid;
        }(Serenity.EntityGrid));
        Default.WorkorderItemStatusGrid = WorkorderItemStatusGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZoneDialog = /** @class */ (function (_super) {
            __extends(ZoneDialog, _super);
            function ZoneDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZoneDialog.prototype.getFormKey = function () { return Default.ZoneForm.formKey; };
            ZoneDialog.prototype.getIdProperty = function () { return Default.ZoneRow.idProperty; };
            ZoneDialog.prototype.getLocalTextPrefix = function () { return Default.ZoneRow.localTextPrefix; };
            ZoneDialog.prototype.getNameProperty = function () { return Default.ZoneRow.nameProperty; };
            ZoneDialog.prototype.getService = function () { return Default.ZoneService.baseUrl; };
            ZoneDialog.prototype.getDeletePermission = function () { return Default.ZoneRow.insertPermission; };
            ZoneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ZoneDialog);
            return ZoneDialog;
        }(Serenity.EntityDialog));
        Default.ZoneDialog = ZoneDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZoneGrid = /** @class */ (function (_super) {
            __extends(ZoneGrid, _super);
            function ZoneGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZoneGrid.prototype.getColumnsKey = function () { return 'Default.Zone'; };
            ZoneGrid.prototype.getDialogType = function () { return Default.ZoneDialog; };
            ZoneGrid.prototype.getIdProperty = function () { return Default.ZoneRow.idProperty; };
            ZoneGrid.prototype.getInsertPermission = function () { return Default.ZoneRow.insertPermission; };
            ZoneGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ZoneGrid);
            return ZoneGrid;
        }(Serenity.EntityGrid));
        Default.ZoneGrid = ZoneGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZonesDialog = /** @class */ (function (_super) {
            __extends(ZonesDialog, _super);
            function ZonesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZonesDialog.prototype.getFormKey = function () { return Default.ZonesForm.formKey; };
            ZonesDialog.prototype.getIdProperty = function () { return Default.ZonesRow.idProperty; };
            ZonesDialog.prototype.getLocalTextPrefix = function () { return Default.ZonesRow.localTextPrefix; };
            ZonesDialog.prototype.getNameProperty = function () { return Default.ZonesRow.nameProperty; };
            ZonesDialog.prototype.getService = function () { return Default.ZonesService.baseUrl; };
            ZonesDialog.prototype.getDeletePermission = function () { return Default.ZonesRow.insertPermission; };
            ZonesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ZonesDialog);
            return ZonesDialog;
        }(Serenity.EntityDialog));
        Default.ZonesDialog = ZonesDialog;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Default;
    (function (Default) {
        var ZonesGrid = /** @class */ (function (_super) {
            __extends(ZonesGrid, _super);
            function ZonesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZonesGrid.prototype.getColumnsKey = function () { return 'Default.Zones'; };
            ZonesGrid.prototype.getDialogType = function () { return Default.ZonesDialog; };
            ZonesGrid.prototype.getIdProperty = function () { return Default.ZonesRow.idProperty; };
            ZonesGrid.prototype.getInsertPermission = function () { return Default.ZonesRow.insertPermission; };
            ZonesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ZonesGrid);
            return ZonesGrid;
        }(Serenity.EntityGrid));
        Default.ZonesGrid = ZonesGrid;
    })(Default = PMMS.Default || (PMMS.Default = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubDialog = /** @class */ (function (_super) {
            __extends(ContentHubDialog, _super);
            function ContentHubDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Distortion.ContentHubForm(_this.idPrefix);
                return _this;
            }
            ContentHubDialog.prototype.getFormKey = function () { return Distortion.ContentHubForm.formKey; };
            ContentHubDialog.prototype.getIdProperty = function () { return Distortion.ContentHubRow.idProperty; };
            ContentHubDialog.prototype.getLocalTextPrefix = function () { return Distortion.ContentHubRow.localTextPrefix; };
            ContentHubDialog.prototype.getNameProperty = function () { return Distortion.ContentHubRow.nameProperty; };
            ContentHubDialog.prototype.getService = function () { return Distortion.ContentHubService.baseUrl; };
            ContentHubDialog.prototype.getDeletePermission = function () { return Distortion.ContentHubRow.insertPermission; };
            ContentHubDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(buttons, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(buttons, function (x) { return x.cssClass == "apply-changes-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                return buttons;
            };
            ContentHubDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                var mm = this.form;
                if (navigator.geolocation) {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (p) {
                            mm.ImageLat.value = p.coords.latitude.toString();
                            mm.ImageLong.value = p.coords.longitude.toString();
                            oldEvt(e);
                        }, function () {
                            alert("Cannot get the location");
                            return false;
                        });
                    }
                    else {
                    }
                }
                else {
                }
            };
            ContentHubDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContentHubDialog);
            return ContentHubDialog;
        }(Serenity.EntityDialog));
        Distortion.ContentHubDialog = ContentHubDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubGrid = /** @class */ (function (_super) {
            __extends(ContentHubGrid, _super);
            function ContentHubGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContentHubGrid.prototype.getColumnsKey = function () { return 'Distortion.ContentHub'; };
            ContentHubGrid.prototype.getDialogType = function () { return Distortion.ContentHubDialog; };
            ContentHubGrid.prototype.getIdProperty = function () { return Distortion.ContentHubRow.idProperty; };
            ContentHubGrid.prototype.getInsertPermission = function () { return Distortion.ContentHubRow.insertPermission; };
            ContentHubGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContentHubGrid);
            return ContentHubGrid;
        }(Serenity.EntityGrid));
        Distortion.ContentHubGrid = ContentHubGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubCategoryDialog = /** @class */ (function (_super) {
            __extends(ContentHubCategoryDialog, _super);
            function ContentHubCategoryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContentHubCategoryDialog.prototype.getFormKey = function () { return Distortion.ContentHubCategoryForm.formKey; };
            ContentHubCategoryDialog.prototype.getIdProperty = function () { return Distortion.ContentHubCategoryRow.idProperty; };
            ContentHubCategoryDialog.prototype.getLocalTextPrefix = function () { return Distortion.ContentHubCategoryRow.localTextPrefix; };
            ContentHubCategoryDialog.prototype.getNameProperty = function () { return Distortion.ContentHubCategoryRow.nameProperty; };
            ContentHubCategoryDialog.prototype.getService = function () { return Distortion.ContentHubCategoryService.baseUrl; };
            ContentHubCategoryDialog.prototype.getDeletePermission = function () { return Distortion.ContentHubCategoryRow.insertPermission; };
            ContentHubCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContentHubCategoryDialog);
            return ContentHubCategoryDialog;
        }(Serenity.EntityDialog));
        Distortion.ContentHubCategoryDialog = ContentHubCategoryDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var ContentHubCategoryGrid = /** @class */ (function (_super) {
            __extends(ContentHubCategoryGrid, _super);
            function ContentHubCategoryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContentHubCategoryGrid.prototype.getColumnsKey = function () { return 'Distortion.ContentHubCategory'; };
            ContentHubCategoryGrid.prototype.getDialogType = function () { return Distortion.ContentHubCategoryDialog; };
            ContentHubCategoryGrid.prototype.getIdProperty = function () { return Distortion.ContentHubCategoryRow.idProperty; };
            ContentHubCategoryGrid.prototype.getInsertPermission = function () { return Distortion.ContentHubCategoryRow.insertPermission; };
            ContentHubCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContentHubCategoryGrid);
            return ContentHubCategoryGrid;
        }(Serenity.EntityGrid));
        Distortion.ContentHubCategoryGrid = ContentHubCategoryGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCasesDialog = /** @class */ (function (_super) {
            __extends(DistortionCasesDialog, _super);
            function DistortionCasesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Distortion.DistortionCasesForm(_this.idPrefix);
                return _this;
            }
            DistortionCasesDialog.prototype.getFormKey = function () { return Distortion.DistortionCasesForm.formKey; };
            DistortionCasesDialog.prototype.getIdProperty = function () { return Distortion.DistortionCasesRow.idProperty; };
            DistortionCasesDialog.prototype.getLocalTextPrefix = function () { return Distortion.DistortionCasesRow.localTextPrefix; };
            DistortionCasesDialog.prototype.getNameProperty = function () { return Distortion.DistortionCasesRow.nameProperty; };
            DistortionCasesDialog.prototype.getService = function () { return Distortion.DistortionCasesService.baseUrl; };
            DistortionCasesDialog.prototype.getDeletePermission = function () { return Distortion.DistortionCasesRow.insertPermission; };
            DistortionCasesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    this.getDrops();
                }
                else {
                    this.getDrops();
                    this.setDrops();
                }
            };
            DistortionCasesDialog.prototype.getDrops = function () {
                var frm = this.entityId;
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/Services/EAM/Assets/GetDistress",
                    data: {
                        itemId: frm,
                    },
                    success: function (x) {
                        var dropSampleID = $('#samplesSelect');
                        dropSampleID.empty();
                        dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                        dropSampleID.prop('selectedIndex', 0);
                        $.each(x, function (key, entry) {
                            dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                        });
                    }
                });
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        dropdownSectionID.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        $("#citySelect").change(function () {
                            myform.AssetCity.value = $("#citySelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#zoneSelect").change(function () {
                            myform.AssetZone.value = $("#zoneSelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getAreas",
                                data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                success: function (x) {
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownarea.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#area").change(function () {
                            myform.AssetsAreaId.value = $("#area").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getRoad",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                success: function (x) {
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownRoadID.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#RoadID").change(function () {
                            myform.AssetRoad.value = $("#RoadID").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getSectionId",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                success: function (x) {
                                    dropdownSectionID.empty();
                                    dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownSectionID.prop('selectedIndex', 0);
                                    $.each(x, function (key, entry) {
                                        dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#SectionID").change(function () {
                            myform.AssetSection.value = $("#SectionID").val();
                        });
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            DistortionCasesDialog.prototype.setDrops = function () {
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        dropdownSectionID.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        if (myform.AssetCity.value != "") {
                            $("#citySelect").val(myform.AssetCity.value);
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                    if (myform.AssetZone.value != "") {
                                        $("#zoneSelect").val(myform.AssetZone.value);
                                        /*  $("#citySelect").trigger('change');*/
                                        $.ajax({
                                            type: "GET",
                                            url: "/sysapi/getAreas",
                                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                            success: function (x) {
                                                dropdownarea.empty();
                                                dropdownRoadID.empty();
                                                dropdownSectionID.empty();
                                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                                dropdownarea.prop('selectedIndex', 0);
                                                //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                $.each(x, function (key, entry) {
                                                    dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                });
                                                if (myform.AssetsAreaId.value != "") {
                                                    dropdownarea.val(myform.AssetsAreaId.value);
                                                    $.ajax({
                                                        type: "GET",
                                                        url: "/sysapi/getRoad",
                                                        data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                                        success: function (x) {
                                                            dropdownRoadID.empty();
                                                            dropdownSectionID.empty();
                                                            dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                                            dropdownRoadID.prop('selectedIndex', 0);
                                                            //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                            $.each(x, function (key, entry) {
                                                                dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                            });
                                                            if (myform.AssetRoad.value != "") {
                                                                dropdownRoadID.val(myform.AssetRoad.value);
                                                                $.ajax({
                                                                    type: "GET",
                                                                    url: "/sysapi/getSectionId",
                                                                    data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                                                    success: function (x) {
                                                                        dropdownSectionID.empty();
                                                                        dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                                                        dropdownSectionID.prop('selectedIndex', 0);
                                                                        $.each(x, function (key, entry) {
                                                                            dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                        });
                                                                        if (myform.AssetSection.value != "") {
                                                                            dropdownSectionID.val(myform.AssetSection.value);
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            DistortionCasesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DistortionCasesDialog);
            return DistortionCasesDialog;
        }(Serenity.EntityDialog));
        Distortion.DistortionCasesDialog = DistortionCasesDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCasesGrid = /** @class */ (function (_super) {
            __extends(DistortionCasesGrid, _super);
            function DistortionCasesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionCasesGrid.prototype.getColumnsKey = function () { return 'Distortion.DistortionCases'; };
            DistortionCasesGrid.prototype.getDialogType = function () { return Distortion.DistortionCasesDialog; };
            DistortionCasesGrid.prototype.getIdProperty = function () { return Distortion.DistortionCasesRow.idProperty; };
            DistortionCasesGrid.prototype.getInsertPermission = function () { return Distortion.DistortionCasesRow.insertPermission; };
            DistortionCasesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], DistortionCasesGrid);
            return DistortionCasesGrid;
        }(Serenity.EntityGrid));
        Distortion.DistortionCasesGrid = DistortionCasesGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCategoryDialog = /** @class */ (function (_super) {
            __extends(DistortionCategoryDialog, _super);
            function DistortionCategoryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionCategoryDialog.prototype.getFormKey = function () { return Distortion.DistortionCategoryForm.formKey; };
            DistortionCategoryDialog.prototype.getIdProperty = function () { return Distortion.DistortionCategoryRow.idProperty; };
            DistortionCategoryDialog.prototype.getLocalTextPrefix = function () { return Distortion.DistortionCategoryRow.localTextPrefix; };
            DistortionCategoryDialog.prototype.getNameProperty = function () { return Distortion.DistortionCategoryRow.nameProperty; };
            DistortionCategoryDialog.prototype.getService = function () { return Distortion.DistortionCategoryService.baseUrl; };
            DistortionCategoryDialog.prototype.getDeletePermission = function () { return Distortion.DistortionCategoryRow.insertPermission; };
            DistortionCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionCategoryDialog);
            return DistortionCategoryDialog;
        }(Serenity.EntityDialog));
        Distortion.DistortionCategoryDialog = DistortionCategoryDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionCategoryGrid = /** @class */ (function (_super) {
            __extends(DistortionCategoryGrid, _super);
            function DistortionCategoryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionCategoryGrid.prototype.getColumnsKey = function () { return 'Distortion.DistortionCategory'; };
            DistortionCategoryGrid.prototype.getDialogType = function () { return Distortion.DistortionCategoryDialog; };
            DistortionCategoryGrid.prototype.getIdProperty = function () { return Distortion.DistortionCategoryRow.idProperty; };
            DistortionCategoryGrid.prototype.getInsertPermission = function () { return Distortion.DistortionCategoryRow.insertPermission; };
            DistortionCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionCategoryGrid);
            return DistortionCategoryGrid;
        }(Serenity.EntityGrid));
        Distortion.DistortionCategoryGrid = DistortionCategoryGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionStatusDialog = /** @class */ (function (_super) {
            __extends(DistortionStatusDialog, _super);
            function DistortionStatusDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionStatusDialog.prototype.getFormKey = function () { return Distortion.DistortionStatusForm.formKey; };
            DistortionStatusDialog.prototype.getIdProperty = function () { return Distortion.DistortionStatusRow.idProperty; };
            DistortionStatusDialog.prototype.getLocalTextPrefix = function () { return Distortion.DistortionStatusRow.localTextPrefix; };
            DistortionStatusDialog.prototype.getNameProperty = function () { return Distortion.DistortionStatusRow.nameProperty; };
            DistortionStatusDialog.prototype.getService = function () { return Distortion.DistortionStatusService.baseUrl; };
            DistortionStatusDialog.prototype.getDeletePermission = function () { return Distortion.DistortionStatusRow.insertPermission; };
            DistortionStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionStatusDialog);
            return DistortionStatusDialog;
        }(Serenity.EntityDialog));
        Distortion.DistortionStatusDialog = DistortionStatusDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionStatusGrid = /** @class */ (function (_super) {
            __extends(DistortionStatusGrid, _super);
            function DistortionStatusGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionStatusGrid.prototype.getColumnsKey = function () { return 'Distortion.DistortionStatus'; };
            DistortionStatusGrid.prototype.getDialogType = function () { return Distortion.DistortionStatusDialog; };
            DistortionStatusGrid.prototype.getIdProperty = function () { return Distortion.DistortionStatusRow.idProperty; };
            DistortionStatusGrid.prototype.getInsertPermission = function () { return Distortion.DistortionStatusRow.insertPermission; };
            DistortionStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionStatusGrid);
            return DistortionStatusGrid;
        }(Serenity.EntityGrid));
        Distortion.DistortionStatusGrid = DistortionStatusGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionSubCategoryDialog = /** @class */ (function (_super) {
            __extends(DistortionSubCategoryDialog, _super);
            function DistortionSubCategoryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionSubCategoryDialog.prototype.getFormKey = function () { return Distortion.DistortionSubCategoryForm.formKey; };
            DistortionSubCategoryDialog.prototype.getIdProperty = function () { return Distortion.DistortionSubCategoryRow.idProperty; };
            DistortionSubCategoryDialog.prototype.getLocalTextPrefix = function () { return Distortion.DistortionSubCategoryRow.localTextPrefix; };
            DistortionSubCategoryDialog.prototype.getNameProperty = function () { return Distortion.DistortionSubCategoryRow.nameProperty; };
            DistortionSubCategoryDialog.prototype.getService = function () { return Distortion.DistortionSubCategoryService.baseUrl; };
            DistortionSubCategoryDialog.prototype.getDeletePermission = function () { return Distortion.DistortionSubCategoryRow.insertPermission; };
            DistortionSubCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionSubCategoryDialog);
            return DistortionSubCategoryDialog;
        }(Serenity.EntityDialog));
        Distortion.DistortionSubCategoryDialog = DistortionSubCategoryDialog;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Distortion;
    (function (Distortion) {
        var DistortionSubCategoryGrid = /** @class */ (function (_super) {
            __extends(DistortionSubCategoryGrid, _super);
            function DistortionSubCategoryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DistortionSubCategoryGrid.prototype.getColumnsKey = function () { return 'Distortion.DistortionSubCategory'; };
            DistortionSubCategoryGrid.prototype.getDialogType = function () { return Distortion.DistortionSubCategoryDialog; };
            DistortionSubCategoryGrid.prototype.getIdProperty = function () { return Distortion.DistortionSubCategoryRow.idProperty; };
            DistortionSubCategoryGrid.prototype.getInsertPermission = function () { return Distortion.DistortionSubCategoryRow.insertPermission; };
            DistortionSubCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistortionSubCategoryGrid);
            return DistortionSubCategoryGrid;
        }(Serenity.EntityGrid));
        Distortion.DistortionSubCategoryGrid = DistortionSubCategoryGrid;
    })(Distortion = PMMS.Distortion || (PMMS.Distortion = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetAttrDialog = /** @class */ (function (_super) {
            __extends(AssetAttrDialog, _super);
            function AssetAttrDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetAttrDialog.prototype.getFormKey = function () { return EAM.AssetAttrForm.formKey; };
            AssetAttrDialog.prototype.getIdProperty = function () { return EAM.AssetAttrRow.idProperty; };
            AssetAttrDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetAttrRow.localTextPrefix; };
            AssetAttrDialog.prototype.getNameProperty = function () { return EAM.AssetAttrRow.nameProperty; };
            AssetAttrDialog.prototype.getService = function () { return EAM.AssetAttrService.baseUrl; };
            AssetAttrDialog.prototype.getDeletePermission = function () { return EAM.AssetAttrRow.insertPermission; };
            AssetAttrDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetAttrDialog);
            return AssetAttrDialog;
        }(Serenity.EntityDialog));
        EAM.AssetAttrDialog = AssetAttrDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetAttrGrid = /** @class */ (function (_super) {
            __extends(AssetAttrGrid, _super);
            function AssetAttrGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetAttrGrid.prototype.getColumnsKey = function () { return 'EAM.AssetAttr'; };
            AssetAttrGrid.prototype.getDialogType = function () { return EAM.AssetAttrDialog; };
            AssetAttrGrid.prototype.getIdProperty = function () { return EAM.AssetAttrRow.idProperty; };
            AssetAttrGrid.prototype.getInsertPermission = function () { return EAM.AssetAttrRow.insertPermission; };
            AssetAttrGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetAttrGrid);
            return AssetAttrGrid;
        }(Serenity.EntityGrid));
        EAM.AssetAttrGrid = AssetAttrGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetBuildingDialog = /** @class */ (function (_super) {
            __extends(AssetBuildingDialog, _super);
            function AssetBuildingDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetBuildingDialog.prototype.getFormKey = function () { return EAM.AssetBuildingForm.formKey; };
            AssetBuildingDialog.prototype.getIdProperty = function () { return EAM.AssetBuildingRow.idProperty; };
            AssetBuildingDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetBuildingRow.localTextPrefix; };
            AssetBuildingDialog.prototype.getNameProperty = function () { return EAM.AssetBuildingRow.nameProperty; };
            AssetBuildingDialog.prototype.getService = function () { return EAM.AssetBuildingService.baseUrl; };
            AssetBuildingDialog.prototype.getDeletePermission = function () { return EAM.AssetBuildingRow.insertPermission; };
            AssetBuildingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetBuildingDialog);
            return AssetBuildingDialog;
        }(Serenity.EntityDialog));
        EAM.AssetBuildingDialog = AssetBuildingDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetBuildingGrid = /** @class */ (function (_super) {
            __extends(AssetBuildingGrid, _super);
            function AssetBuildingGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetBuildingGrid.prototype.getColumnsKey = function () { return 'EAM.AssetBuilding'; };
            AssetBuildingGrid.prototype.getDialogType = function () { return EAM.AssetBuildingDialog; };
            AssetBuildingGrid.prototype.getIdProperty = function () { return EAM.AssetBuildingRow.idProperty; };
            AssetBuildingGrid.prototype.getInsertPermission = function () { return EAM.AssetBuildingRow.insertPermission; };
            AssetBuildingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetBuildingGrid);
            return AssetBuildingGrid;
        }(Serenity.EntityGrid));
        EAM.AssetBuildingGrid = AssetBuildingGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCategoryDialog = /** @class */ (function (_super) {
            __extends(AssetCategoryDialog, _super);
            function AssetCategoryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetCategoryDialog.prototype.getFormKey = function () { return EAM.AssetCategoryForm.formKey; };
            AssetCategoryDialog.prototype.getIdProperty = function () { return EAM.AssetCategoryRow.idProperty; };
            AssetCategoryDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetCategoryRow.localTextPrefix; };
            AssetCategoryDialog.prototype.getNameProperty = function () { return EAM.AssetCategoryRow.nameProperty; };
            AssetCategoryDialog.prototype.getService = function () { return EAM.AssetCategoryService.baseUrl; };
            AssetCategoryDialog.prototype.getDeletePermission = function () { return EAM.AssetCategoryRow.insertPermission; };
            AssetCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetCategoryDialog);
            return AssetCategoryDialog;
        }(Serenity.EntityDialog));
        EAM.AssetCategoryDialog = AssetCategoryDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCategoryGrid = /** @class */ (function (_super) {
            __extends(AssetCategoryGrid, _super);
            function AssetCategoryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetCategoryGrid.prototype.getColumnsKey = function () { return 'EAM.AssetCategory'; };
            AssetCategoryGrid.prototype.getDialogType = function () { return EAM.AssetCategoryDialog; };
            AssetCategoryGrid.prototype.getIdProperty = function () { return EAM.AssetCategoryRow.idProperty; };
            AssetCategoryGrid.prototype.getInsertPermission = function () { return EAM.AssetCategoryRow.insertPermission; };
            AssetCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetCategoryGrid);
            return AssetCategoryGrid;
        }(Serenity.EntityGrid));
        EAM.AssetCategoryGrid = AssetCategoryGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetClassDialog = /** @class */ (function (_super) {
            __extends(AssetClassDialog, _super);
            function AssetClassDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetClassDialog.prototype.getFormKey = function () { return EAM.AssetClassForm.formKey; };
            AssetClassDialog.prototype.getIdProperty = function () { return EAM.AssetClassRow.idProperty; };
            AssetClassDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetClassRow.localTextPrefix; };
            AssetClassDialog.prototype.getNameProperty = function () { return EAM.AssetClassRow.nameProperty; };
            AssetClassDialog.prototype.getService = function () { return EAM.AssetClassService.baseUrl; };
            AssetClassDialog.prototype.getDeletePermission = function () { return EAM.AssetClassRow.insertPermission; };
            AssetClassDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetClassDialog);
            return AssetClassDialog;
        }(Serenity.EntityDialog));
        EAM.AssetClassDialog = AssetClassDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        /// <reference path="../../Common/Helpers/GridEditorBase.ts" />
        var AssetClassGrid = /** @class */ (function (_super) {
            __extends(AssetClassGrid, _super);
            function AssetClassGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return false; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: EAM.AssetClassRow.Fields.ItemId,
                    getParentId: function (x) {
                        return x.ParentId;
                    }
                });
                return _this;
            }
            AssetClassGrid.prototype.getColumnsKey = function () { return 'EAM.AssetClass'; };
            AssetClassGrid.prototype.getDialogType = function () { return EAM.AssetClassDialog; };
            AssetClassGrid.prototype.getIdProperty = function () { return EAM.AssetClassRow.idProperty; };
            AssetClassGrid.prototype.getInsertPermission = function () { return EAM.AssetClassRow.insertPermission; };
            AssetClassGrid.prototype.usePager = function () {
                return false;
            };
            AssetClassGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetClassGrid);
            return AssetClassGrid;
        }(Serenity.EntityGrid));
        EAM.AssetClassGrid = AssetClassGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrDialog = /** @class */ (function (_super) {
            __extends(AssetCustAttrDialog, _super);
            function AssetCustAttrDialog() {
                var _this = _super.call(this) || this;
                _this.form = new EAM.AssetCustAttrForm(_this.idPrefix);
                return _this;
            }
            AssetCustAttrDialog.prototype.getFormKey = function () { return EAM.AssetCustAttrForm.formKey; };
            AssetCustAttrDialog.prototype.getIdProperty = function () { return EAM.AssetCustAttrRow.idProperty; };
            AssetCustAttrDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetCustAttrRow.localTextPrefix; };
            AssetCustAttrDialog.prototype.getNameProperty = function () { return EAM.AssetCustAttrRow.nameProperty; };
            AssetCustAttrDialog.prototype.getService = function () { return EAM.AssetCustAttrService.baseUrl; };
            AssetCustAttrDialog.prototype.getDeletePermission = function () { return EAM.AssetCustAttrRow.insertPermission; };
            AssetCustAttrDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetCustAttrDialog);
            return AssetCustAttrDialog;
        }(PMMS.Common.GridEditorDialog));
        EAM.AssetCustAttrDialog = AssetCustAttrDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrEditor = /** @class */ (function (_super) {
            __extends(AssetCustAttrEditor, _super);
            function AssetCustAttrEditor(container) {
                return _super.call(this, container) || this;
            }
            AssetCustAttrEditor.prototype.getColumnsKey = function () { return "EAM.AssetCustAttr"; };
            AssetCustAttrEditor.prototype.getDialogType = function () { return EAM.AssetCustAttrDialog; };
            AssetCustAttrEditor.prototype.getLocalTextPrefix = function () { return EAM.AssetCustAttrRow.localTextPrefix; };
            AssetCustAttrEditor.prototype.validateEntity = function (row, id) {
                row.AttrId = Q.toId(row.AttrId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.AttrId === row.AttrId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This Attr is already register!');
                    return false;
                }
                /* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/
                return true;
            };
            AssetCustAttrEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetCustAttrEditor);
            return AssetCustAttrEditor;
        }(PMMS.Common.GridEditorBase));
        EAM.AssetCustAttrEditor = AssetCustAttrEditor;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetCustAttrGrid = /** @class */ (function (_super) {
            __extends(AssetCustAttrGrid, _super);
            function AssetCustAttrGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetCustAttrGrid.prototype.getColumnsKey = function () { return 'EAM.AssetCustAttr'; };
            AssetCustAttrGrid.prototype.getDialogType = function () { return EAM.AssetCustAttrDialog; };
            AssetCustAttrGrid.prototype.getIdProperty = function () { return EAM.AssetCustAttrRow.idProperty; };
            AssetCustAttrGrid.prototype.getInsertPermission = function () { return EAM.AssetCustAttrRow.insertPermission; };
            AssetCustAttrGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetCustAttrGrid);
            return AssetCustAttrGrid;
        }(Serenity.EntityGrid));
        EAM.AssetCustAttrGrid = AssetCustAttrGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDimansionDialog = /** @class */ (function (_super) {
            __extends(AssetDimansionDialog, _super);
            function AssetDimansionDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDimansionDialog.prototype.getFormKey = function () { return EAM.AssetDimansionForm.formKey; };
            AssetDimansionDialog.prototype.getIdProperty = function () { return EAM.AssetDimansionRow.idProperty; };
            AssetDimansionDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetDimansionRow.localTextPrefix; };
            AssetDimansionDialog.prototype.getNameProperty = function () { return EAM.AssetDimansionRow.nameProperty; };
            AssetDimansionDialog.prototype.getService = function () { return EAM.AssetDimansionService.baseUrl; };
            AssetDimansionDialog.prototype.getDeletePermission = function () { return EAM.AssetDimansionRow.insertPermission; };
            AssetDimansionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetDimansionDialog);
            return AssetDimansionDialog;
        }(Serenity.EntityDialog));
        EAM.AssetDimansionDialog = AssetDimansionDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDimansionGrid = /** @class */ (function (_super) {
            __extends(AssetDimansionGrid, _super);
            function AssetDimansionGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDimansionGrid.prototype.getColumnsKey = function () { return 'EAM.AssetDimansion'; };
            AssetDimansionGrid.prototype.getDialogType = function () { return EAM.AssetDimansionDialog; };
            AssetDimansionGrid.prototype.getIdProperty = function () { return EAM.AssetDimansionRow.idProperty; };
            AssetDimansionGrid.prototype.getInsertPermission = function () { return EAM.AssetDimansionRow.insertPermission; };
            AssetDimansionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetDimansionGrid);
            return AssetDimansionGrid;
        }(Serenity.EntityGrid));
        EAM.AssetDimansionGrid = AssetDimansionGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDistressDialog = /** @class */ (function (_super) {
            __extends(AssetDistressDialog, _super);
            function AssetDistressDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDistressDialog.prototype.getFormKey = function () { return EAM.AssetDistressForm.formKey; };
            AssetDistressDialog.prototype.getIdProperty = function () { return EAM.AssetDistressRow.idProperty; };
            AssetDistressDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetDistressRow.localTextPrefix; };
            AssetDistressDialog.prototype.getNameProperty = function () { return EAM.AssetDistressRow.nameProperty; };
            AssetDistressDialog.prototype.getService = function () { return EAM.AssetDistressService.baseUrl; };
            AssetDistressDialog.prototype.getDeletePermission = function () { return EAM.AssetDistressRow.insertPermission; };
            AssetDistressDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetDistressDialog);
            return AssetDistressDialog;
        }(Serenity.EntityDialog));
        EAM.AssetDistressDialog = AssetDistressDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetDistressGrid = /** @class */ (function (_super) {
            __extends(AssetDistressGrid, _super);
            function AssetDistressGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDistressGrid.prototype.getColumnsKey = function () { return 'EAM.AssetDistress'; };
            AssetDistressGrid.prototype.getDialogType = function () { return EAM.AssetDistressDialog; };
            AssetDistressGrid.prototype.getIdProperty = function () { return EAM.AssetDistressRow.idProperty; };
            AssetDistressGrid.prototype.getInsertPermission = function () { return EAM.AssetDistressRow.insertPermission; };
            AssetDistressGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetDistressGrid);
            return AssetDistressGrid;
        }(Serenity.EntityGrid));
        EAM.AssetDistressGrid = AssetDistressGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetLocationDialog = /** @class */ (function (_super) {
            __extends(AssetLocationDialog, _super);
            function AssetLocationDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetLocationDialog.prototype.getFormKey = function () { return EAM.AssetLocationForm.formKey; };
            AssetLocationDialog.prototype.getIdProperty = function () { return EAM.AssetLocationRow.idProperty; };
            AssetLocationDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetLocationRow.localTextPrefix; };
            AssetLocationDialog.prototype.getNameProperty = function () { return EAM.AssetLocationRow.nameProperty; };
            AssetLocationDialog.prototype.getService = function () { return EAM.AssetLocationService.baseUrl; };
            AssetLocationDialog.prototype.getDeletePermission = function () { return EAM.AssetLocationRow.insertPermission; };
            AssetLocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetLocationDialog);
            return AssetLocationDialog;
        }(Serenity.EntityDialog));
        EAM.AssetLocationDialog = AssetLocationDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetLocationGrid = /** @class */ (function (_super) {
            __extends(AssetLocationGrid, _super);
            function AssetLocationGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetLocationGrid.prototype.getColumnsKey = function () { return 'EAM.AssetLocation'; };
            AssetLocationGrid.prototype.getDialogType = function () { return EAM.AssetLocationDialog; };
            AssetLocationGrid.prototype.getIdProperty = function () { return EAM.AssetLocationRow.idProperty; };
            AssetLocationGrid.prototype.getInsertPermission = function () { return EAM.AssetLocationRow.insertPermission; };
            AssetLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetLocationGrid);
            return AssetLocationGrid;
        }(Serenity.EntityGrid));
        EAM.AssetLocationGrid = AssetLocationGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetServiceStatusDialog = /** @class */ (function (_super) {
            __extends(AssetServiceStatusDialog, _super);
            function AssetServiceStatusDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetServiceStatusDialog.prototype.getFormKey = function () { return EAM.AssetServiceStatusForm.formKey; };
            AssetServiceStatusDialog.prototype.getIdProperty = function () { return EAM.AssetServiceStatusRow.idProperty; };
            AssetServiceStatusDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetServiceStatusRow.localTextPrefix; };
            AssetServiceStatusDialog.prototype.getNameProperty = function () { return EAM.AssetServiceStatusRow.nameProperty; };
            AssetServiceStatusDialog.prototype.getService = function () { return EAM.AssetServiceStatusService.baseUrl; };
            AssetServiceStatusDialog.prototype.getDeletePermission = function () { return EAM.AssetServiceStatusRow.insertPermission; };
            AssetServiceStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetServiceStatusDialog);
            return AssetServiceStatusDialog;
        }(Serenity.EntityDialog));
        EAM.AssetServiceStatusDialog = AssetServiceStatusDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetServiceStatusGrid = /** @class */ (function (_super) {
            __extends(AssetServiceStatusGrid, _super);
            function AssetServiceStatusGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetServiceStatusGrid.prototype.getColumnsKey = function () { return 'EAM.AssetServiceStatus'; };
            AssetServiceStatusGrid.prototype.getDialogType = function () { return EAM.AssetServiceStatusDialog; };
            AssetServiceStatusGrid.prototype.getIdProperty = function () { return EAM.AssetServiceStatusRow.idProperty; };
            AssetServiceStatusGrid.prototype.getInsertPermission = function () { return EAM.AssetServiceStatusRow.insertPermission; };
            AssetServiceStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetServiceStatusGrid);
            return AssetServiceStatusGrid;
        }(Serenity.EntityGrid));
        EAM.AssetServiceStatusGrid = AssetServiceStatusGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetStatusDialog = /** @class */ (function (_super) {
            __extends(AssetStatusDialog, _super);
            function AssetStatusDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetStatusDialog.prototype.getFormKey = function () { return EAM.AssetStatusForm.formKey; };
            AssetStatusDialog.prototype.getIdProperty = function () { return EAM.AssetStatusRow.idProperty; };
            AssetStatusDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetStatusRow.localTextPrefix; };
            AssetStatusDialog.prototype.getNameProperty = function () { return EAM.AssetStatusRow.nameProperty; };
            AssetStatusDialog.prototype.getService = function () { return EAM.AssetStatusService.baseUrl; };
            AssetStatusDialog.prototype.getDeletePermission = function () { return EAM.AssetStatusRow.insertPermission; };
            AssetStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetStatusDialog);
            return AssetStatusDialog;
        }(Serenity.EntityDialog));
        EAM.AssetStatusDialog = AssetStatusDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetStatusGrid = /** @class */ (function (_super) {
            __extends(AssetStatusGrid, _super);
            function AssetStatusGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetStatusGrid.prototype.getColumnsKey = function () { return 'EAM.AssetStatus'; };
            AssetStatusGrid.prototype.getDialogType = function () { return EAM.AssetStatusDialog; };
            AssetStatusGrid.prototype.getIdProperty = function () { return EAM.AssetStatusRow.idProperty; };
            AssetStatusGrid.prototype.getInsertPermission = function () { return EAM.AssetStatusRow.insertPermission; };
            AssetStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetStatusGrid);
            return AssetStatusGrid;
        }(Serenity.EntityGrid));
        EAM.AssetStatusGrid = AssetStatusGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCalcDialog = /** @class */ (function (_super) {
            __extends(AssetSubCalcDialog, _super);
            function AssetSubCalcDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCalcDialog.prototype.getFormKey = function () { return EAM.AssetSubCalcForm.formKey; };
            AssetSubCalcDialog.prototype.getIdProperty = function () { return EAM.AssetSubCalcRow.idProperty; };
            AssetSubCalcDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetSubCalcRow.localTextPrefix; };
            AssetSubCalcDialog.prototype.getNameProperty = function () { return EAM.AssetSubCalcRow.nameProperty; };
            AssetSubCalcDialog.prototype.getService = function () { return EAM.AssetSubCalcService.baseUrl; };
            AssetSubCalcDialog.prototype.getDeletePermission = function () { return EAM.AssetSubCalcRow.insertPermission; };
            AssetSubCalcDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCalcDialog);
            return AssetSubCalcDialog;
        }(Serenity.EntityDialog));
        EAM.AssetSubCalcDialog = AssetSubCalcDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCalcGrid = /** @class */ (function (_super) {
            __extends(AssetSubCalcGrid, _super);
            function AssetSubCalcGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCalcGrid.prototype.getColumnsKey = function () { return 'EAM.AssetSubCalc'; };
            AssetSubCalcGrid.prototype.getDialogType = function () { return EAM.AssetSubCalcDialog; };
            AssetSubCalcGrid.prototype.getIdProperty = function () { return EAM.AssetSubCalcRow.idProperty; };
            AssetSubCalcGrid.prototype.getInsertPermission = function () { return EAM.AssetSubCalcRow.insertPermission; };
            AssetSubCalcGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCalcGrid);
            return AssetSubCalcGrid;
        }(Serenity.EntityGrid));
        EAM.AssetSubCalcGrid = AssetSubCalcGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryDialog = /** @class */ (function (_super) {
            __extends(AssetSubCategoryDialog, _super);
            function AssetSubCategoryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryDialog.prototype.getFormKey = function () { return EAM.AssetSubCategoryForm.formKey; };
            AssetSubCategoryDialog.prototype.getIdProperty = function () { return EAM.AssetSubCategoryRow.idProperty; };
            AssetSubCategoryDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetSubCategoryRow.localTextPrefix; };
            AssetSubCategoryDialog.prototype.getNameProperty = function () { return EAM.AssetSubCategoryRow.nameProperty; };
            AssetSubCategoryDialog.prototype.getService = function () { return EAM.AssetSubCategoryService.baseUrl; };
            AssetSubCategoryDialog.prototype.getDeletePermission = function () { return EAM.AssetSubCategoryRow.insertPermission; };
            AssetSubCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCategoryDialog);
            return AssetSubCategoryDialog;
        }(Serenity.EntityDialog));
        EAM.AssetSubCategoryDialog = AssetSubCategoryDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryGrid = /** @class */ (function (_super) {
            __extends(AssetSubCategoryGrid, _super);
            function AssetSubCategoryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryGrid.prototype.getColumnsKey = function () { return 'EAM.AssetSubCategory'; };
            AssetSubCategoryGrid.prototype.getDialogType = function () { return EAM.AssetSubCategoryDialog; };
            AssetSubCategoryGrid.prototype.getIdProperty = function () { return EAM.AssetSubCategoryRow.idProperty; };
            AssetSubCategoryGrid.prototype.getInsertPermission = function () { return EAM.AssetSubCategoryRow.insertPermission; };
            AssetSubCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCategoryGrid);
            return AssetSubCategoryGrid;
        }(Serenity.EntityGrid));
        EAM.AssetSubCategoryGrid = AssetSubCategoryGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryLevelDialog = /** @class */ (function (_super) {
            __extends(AssetSubCategoryLevelDialog, _super);
            function AssetSubCategoryLevelDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryLevelDialog.prototype.getFormKey = function () { return EAM.AssetSubCategoryLevelForm.formKey; };
            AssetSubCategoryLevelDialog.prototype.getIdProperty = function () { return EAM.AssetSubCategoryLevelRow.idProperty; };
            AssetSubCategoryLevelDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetSubCategoryLevelRow.localTextPrefix; };
            AssetSubCategoryLevelDialog.prototype.getNameProperty = function () { return EAM.AssetSubCategoryLevelRow.nameProperty; };
            AssetSubCategoryLevelDialog.prototype.getService = function () { return EAM.AssetSubCategoryLevelService.baseUrl; };
            AssetSubCategoryLevelDialog.prototype.getDeletePermission = function () { return EAM.AssetSubCategoryLevelRow.insertPermission; };
            AssetSubCategoryLevelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCategoryLevelDialog);
            return AssetSubCategoryLevelDialog;
        }(Serenity.EntityDialog));
        EAM.AssetSubCategoryLevelDialog = AssetSubCategoryLevelDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetSubCategoryLevelGrid = /** @class */ (function (_super) {
            __extends(AssetSubCategoryLevelGrid, _super);
            function AssetSubCategoryLevelGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetSubCategoryLevelGrid.prototype.getColumnsKey = function () { return 'EAM.AssetSubCategoryLevel'; };
            AssetSubCategoryLevelGrid.prototype.getDialogType = function () { return EAM.AssetSubCategoryLevelDialog; };
            AssetSubCategoryLevelGrid.prototype.getIdProperty = function () { return EAM.AssetSubCategoryLevelRow.idProperty; };
            AssetSubCategoryLevelGrid.prototype.getInsertPermission = function () { return EAM.AssetSubCategoryLevelRow.insertPermission; };
            AssetSubCategoryLevelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetSubCategoryLevelGrid);
            return AssetSubCategoryLevelGrid;
        }(Serenity.EntityGrid));
        EAM.AssetSubCategoryLevelGrid = AssetSubCategoryLevelGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTagsDialog = /** @class */ (function (_super) {
            __extends(AssetTagsDialog, _super);
            function AssetTagsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTagsDialog.prototype.getFormKey = function () { return EAM.AssetTagsForm.formKey; };
            AssetTagsDialog.prototype.getIdProperty = function () { return EAM.AssetTagsRow.idProperty; };
            AssetTagsDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetTagsRow.localTextPrefix; };
            AssetTagsDialog.prototype.getNameProperty = function () { return EAM.AssetTagsRow.nameProperty; };
            AssetTagsDialog.prototype.getService = function () { return EAM.AssetTagsService.baseUrl; };
            AssetTagsDialog.prototype.getDeletePermission = function () { return EAM.AssetTagsRow.insertPermission; };
            AssetTagsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTagsDialog);
            return AssetTagsDialog;
        }(Serenity.EntityDialog));
        EAM.AssetTagsDialog = AssetTagsDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTagsGrid = /** @class */ (function (_super) {
            __extends(AssetTagsGrid, _super);
            function AssetTagsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTagsGrid.prototype.getColumnsKey = function () { return 'EAM.AssetTags'; };
            AssetTagsGrid.prototype.getDialogType = function () { return EAM.AssetTagsDialog; };
            AssetTagsGrid.prototype.getIdProperty = function () { return EAM.AssetTagsRow.idProperty; };
            AssetTagsGrid.prototype.getInsertPermission = function () { return EAM.AssetTagsRow.insertPermission; };
            AssetTagsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTagsGrid);
            return AssetTagsGrid;
        }(Serenity.EntityGrid));
        EAM.AssetTagsGrid = AssetTagsGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTypeDialog = /** @class */ (function (_super) {
            __extends(AssetTypeDialog, _super);
            function AssetTypeDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTypeDialog.prototype.getFormKey = function () { return EAM.AssetTypeForm.formKey; };
            AssetTypeDialog.prototype.getIdProperty = function () { return EAM.AssetTypeRow.idProperty; };
            AssetTypeDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetTypeRow.localTextPrefix; };
            AssetTypeDialog.prototype.getNameProperty = function () { return EAM.AssetTypeRow.nameProperty; };
            AssetTypeDialog.prototype.getService = function () { return EAM.AssetTypeService.baseUrl; };
            AssetTypeDialog.prototype.getDeletePermission = function () { return EAM.AssetTypeRow.insertPermission; };
            AssetTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTypeDialog);
            return AssetTypeDialog;
        }(Serenity.EntityDialog));
        EAM.AssetTypeDialog = AssetTypeDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetTypeGrid = /** @class */ (function (_super) {
            __extends(AssetTypeGrid, _super);
            function AssetTypeGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetTypeGrid.prototype.getColumnsKey = function () { return 'EAM.AssetType'; };
            AssetTypeGrid.prototype.getDialogType = function () { return EAM.AssetTypeDialog; };
            AssetTypeGrid.prototype.getIdProperty = function () { return EAM.AssetTypeRow.idProperty; };
            AssetTypeGrid.prototype.getInsertPermission = function () { return EAM.AssetTypeRow.insertPermission; };
            AssetTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetTypeGrid);
            return AssetTypeGrid;
        }(Serenity.EntityGrid));
        EAM.AssetTypeGrid = AssetTypeGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsDialog = /** @class */ (function (_super) {
            __extends(AssetsDialog, _super);
            function AssetsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new EAM.AssetsForm(_this.idPrefix);
                return _this;
            }
            AssetsDialog.prototype.getFormKey = function () { return EAM.AssetsForm.formKey; };
            AssetsDialog.prototype.getIdProperty = function () { return EAM.AssetsRow.idProperty; };
            AssetsDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsRow.localTextPrefix; };
            AssetsDialog.prototype.getNameProperty = function () { return EAM.AssetsRow.nameProperty; };
            AssetsDialog.prototype.getService = function () { return EAM.AssetsService.baseUrl; };
            AssetsDialog.prototype.getDeletePermission = function () { return EAM.AssetsRow.insertPermission; };
            AssetsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    $('#sridsample').hide();
                    $('#sample_section_save').hide();
                }
                else {
                    var myDialogAsPanel2;
                    $('#samplesSelect').change(function () {
                        $('#sridsample').empty();
                        myDialogAsPanel2 = new PMMS.EAM.AssetsSurveyLDialog();
                        myDialogAsPanel2.load($('#samplesSelect').val(), function () {
                            myDialogAsPanel2.element.removeClass('hidden').appendTo('#sridsample');
                            myDialogAsPanel2.arrange();
                        });
                    });
                }
            };
            AssetsDialog.prototype.btnMapping = function () {
                var frm = this.entityId;
                $('#sample_section_save').click(function () {
                    try {
                        $.ajax({
                            beforeSend: function () { Q.blockUI(null); }, complete: function () { Q.blockUndo(); },
                            type: "GET",
                            url: "/Services/EAM/Assets/AddSample",
                            data: {
                                itemId: frm,
                            },
                            contentType: 'application/json',
                            success: function (result) {
                                if (result != "0") {
                                    Q.notifySuccess("Sample " + result + " Added successfully!");
                                    $.ajax({
                                        type: "GET",
                                        url: "/Services/EAM/Assets/GetDistress",
                                        data: {
                                            itemId: frm,
                                        },
                                        success: function (x) {
                                            var dropSampleID = $('#samplesSelect');
                                            dropSampleID.empty();
                                            dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                                            dropSampleID.prop('selectedIndex', 0);
                                            $.each(x, function (key, entry) {
                                                dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                                            });
                                        }
                                    });
                                }
                                else {
                                    Q.warning("Please add the Assets details first!");
                                }
                            }
                        });
                    }
                    catch (e) {
                        alert(e);
                    }
                });
                $('#sample_Object_delete').click(function () {
                    try {
                        Q.confirm("Are you sure you want to delete Sample ID ?)", function () {
                            $.ajax({
                                beforeSend: function () { Q.blockUI(null); }, complete: function () { Q.blockUndo(); },
                                type: "GET",
                                url: "/Services/EAM/Assets/DeleteSample",
                                data: {
                                    ItemId: $('#samplesSelect').val()
                                },
                                contentType: 'application/json',
                                success: function (result) {
                                    if (result == "done") {
                                        Q.notifySuccess("Sample " + "" + " deleted successfully!");
                                        $.ajax({
                                            type: "GET",
                                            url: "/Services/EAM/Assets/GetDistress",
                                            data: {
                                                itemId: frm,
                                            },
                                            success: function (x) {
                                                var dropSampleID = $('#samplesSelect');
                                                dropSampleID.empty();
                                                dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                                                dropSampleID.prop('selectedIndex', 0);
                                                $.each(x, function (key, entry) {
                                                    dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                                                });
                                                $('#sridsample').empty();
                                            }
                                        });
                                    }
                                    else {
                                        Q.warning("can not find the sample !");
                                    }
                                }
                            });
                        }, {
                            onNo: function () {
                            },
                            onCancel: function () {
                            },
                            dialogClass: 's-MessageDialog s-WarningDialog'
                        });
                    }
                    catch (e) {
                    }
                });
            };
            AssetsDialog.prototype.getDrops = function () {
                var frm = this.entityId;
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/Services/EAM/Assets/GetDistress",
                    data: {
                        itemId: frm,
                    },
                    success: function (x) {
                        var dropSampleID = $('#samplesSelect');
                        dropSampleID.empty();
                        dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                        dropSampleID.prop('selectedIndex', 0);
                        $.each(x, function (key, entry) {
                            dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                        });
                    }
                });
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        dropdownSectionID.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        $("#citySelect").change(function () {
                            myform.AssetCity.value = $("#citySelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#zoneSelect").change(function () {
                            myform.AssetZone.value = $("#zoneSelect").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getAreas",
                                data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                success: function (x) {
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownarea.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#area").change(function () {
                            myform.AssetsAreaId.value = $("#area").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getRoad",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                success: function (x) {
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownRoadID.prop('selectedIndex', 0);
                                    //  myform.ZoneNo.value = $("#zoneSelect").val();
                                    $.each(x, function (key, entry) {
                                        dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#RoadID").change(function () {
                            myform.AssetRoad.value = $("#RoadID").val();
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getSectionId",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                success: function (x) {
                                    dropdownSectionID.empty();
                                    dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownSectionID.prop('selectedIndex', 0);
                                    $.each(x, function (key, entry) {
                                        dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                }
                            });
                        });
                        $("#SectionID").change(function () {
                            myform.AssetSection.value = $("#SectionID").val();
                        });
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            AssetsDialog.prototype.setDrops = function () {
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getcity",
                    data: {
                    //  OID: orderid,
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        var dropdown = $('#citySelect');
                        var dropdownzone = $('#zoneSelect');
                        var dropdownarea = $('#area');
                        var dropdownRoadID = $('#RoadID');
                        var dropdownSectionID = $('#SectionID');
                        dropdown.empty();
                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownRoadID.empty();
                        dropdownSectionID.empty();
                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);
                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        });
                        if (myform.AssetCity.value != "") {
                            $("#citySelect").val(myform.AssetCity.value);
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {
                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);
                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    });
                                    if (myform.AssetZone.value != "") {
                                        $("#zoneSelect").val(myform.AssetZone.value);
                                        /*  $("#citySelect").trigger('change');*/
                                        $.ajax({
                                            type: "GET",
                                            url: "/sysapi/getAreas",
                                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                            success: function (x) {
                                                dropdownarea.empty();
                                                dropdownRoadID.empty();
                                                dropdownSectionID.empty();
                                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                                dropdownarea.prop('selectedIndex', 0);
                                                //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                $.each(x, function (key, entry) {
                                                    dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                });
                                                if (myform.AssetsAreaId.value != "") {
                                                    dropdownarea.val(myform.AssetsAreaId.value);
                                                    $.ajax({
                                                        type: "GET",
                                                        url: "/sysapi/getRoad",
                                                        data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                                        success: function (x) {
                                                            dropdownRoadID.empty();
                                                            dropdownSectionID.empty();
                                                            dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                                            dropdownRoadID.prop('selectedIndex', 0);
                                                            //  myform.ZoneNo.value = $("#zoneSelect").val();
                                                            $.each(x, function (key, entry) {
                                                                dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                            });
                                                            if (myform.AssetRoad.value != "") {
                                                                dropdownRoadID.val(myform.AssetRoad.value);
                                                                $.ajax({
                                                                    type: "GET",
                                                                    url: "/sysapi/getSectionId",
                                                                    data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                                                    success: function (x) {
                                                                        dropdownSectionID.empty();
                                                                        dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                                                        dropdownSectionID.prop('selectedIndex', 0);
                                                                        $.each(x, function (key, entry) {
                                                                            dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                        });
                                                                        if (myform.AssetSection.value != "") {
                                                                            dropdownSectionID.val(myform.AssetSection.value);
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    },
                    error: function (response) {
                        console.log(response);
                    }
                });
            };
            AssetsDialog.prototype.setDropClass = function () {
            };
            AssetsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AssetsDialog);
            return AssetsDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsDialog = AssetsDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsGrid = /** @class */ (function (_super) {
            __extends(AssetsGrid, _super);
            function AssetsGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            AssetsGrid.prototype.getColumnsKey = function () { return 'EAM.Assets'; };
            AssetsGrid.prototype.getDialogType = function () { return EAM.AssetsDialog; };
            AssetsGrid.prototype.getIdProperty = function () { return EAM.AssetsRow.idProperty; };
            AssetsGrid.prototype.getInsertPermission = function () { return EAM.AssetsRow.insertPermission; };
            AssetsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 36;
                opt.headerRowHeight = 136;
                opt.groupingPanel = true;
                return opt;
            };
            AssetsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(PMMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'EAM/Assets/ListExcel',
                    separator: true
                }));
                return buttons;
            };
            AssetsGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                var groupingMixin = new Serenity.DraggableGroupingMixin({
                    grid: this
                });
                new Serenity.FavoriteViewsMixin({
                    grid: this
                });
            };
            AssetsGrid.prototype.markupReady = function () {
                _super.prototype.markupReady.call(this);
                // expanding all level 0 (Country) and level 1 (City) groups initially
                //this.view.expandAllGroups(0);
                //this.view.expandAllGroups(1);
            };
            AssetsGrid.prototype.getPersistanceStorage = function () {
                return new PMMS.Common.UserPreferenceStorage();
            };
            AssetsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], AssetsGrid);
            return AssetsGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsGrid = AssetsGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCondationDialog = /** @class */ (function (_super) {
            __extends(AssetsMaintCondationDialog, _super);
            function AssetsMaintCondationDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCondationDialog.prototype.getFormKey = function () { return EAM.AssetsMaintCondationForm.formKey; };
            AssetsMaintCondationDialog.prototype.getIdProperty = function () { return EAM.AssetsMaintCondationRow.idProperty; };
            AssetsMaintCondationDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsMaintCondationRow.localTextPrefix; };
            AssetsMaintCondationDialog.prototype.getNameProperty = function () { return EAM.AssetsMaintCondationRow.nameProperty; };
            AssetsMaintCondationDialog.prototype.getService = function () { return EAM.AssetsMaintCondationService.baseUrl; };
            AssetsMaintCondationDialog.prototype.getDeletePermission = function () { return EAM.AssetsMaintCondationRow.insertPermission; };
            AssetsMaintCondationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintCondationDialog);
            return AssetsMaintCondationDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsMaintCondationDialog = AssetsMaintCondationDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCondationGrid = /** @class */ (function (_super) {
            __extends(AssetsMaintCondationGrid, _super);
            function AssetsMaintCondationGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCondationGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsMaintCondation'; };
            AssetsMaintCondationGrid.prototype.getDialogType = function () { return EAM.AssetsMaintCondationDialog; };
            AssetsMaintCondationGrid.prototype.getIdProperty = function () { return EAM.AssetsMaintCondationRow.idProperty; };
            AssetsMaintCondationGrid.prototype.getInsertPermission = function () { return EAM.AssetsMaintCondationRow.insertPermission; };
            AssetsMaintCondationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintCondationGrid);
            return AssetsMaintCondationGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsMaintCondationGrid = AssetsMaintCondationGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCritDialog = /** @class */ (function (_super) {
            __extends(AssetsMaintCritDialog, _super);
            function AssetsMaintCritDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCritDialog.prototype.getFormKey = function () { return EAM.AssetsMaintCritForm.formKey; };
            AssetsMaintCritDialog.prototype.getIdProperty = function () { return EAM.AssetsMaintCritRow.idProperty; };
            AssetsMaintCritDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsMaintCritRow.localTextPrefix; };
            AssetsMaintCritDialog.prototype.getNameProperty = function () { return EAM.AssetsMaintCritRow.nameProperty; };
            AssetsMaintCritDialog.prototype.getService = function () { return EAM.AssetsMaintCritService.baseUrl; };
            AssetsMaintCritDialog.prototype.getDeletePermission = function () { return EAM.AssetsMaintCritRow.insertPermission; };
            AssetsMaintCritDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintCritDialog);
            return AssetsMaintCritDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsMaintCritDialog = AssetsMaintCritDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintCritGrid = /** @class */ (function (_super) {
            __extends(AssetsMaintCritGrid, _super);
            function AssetsMaintCritGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintCritGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsMaintCrit'; };
            AssetsMaintCritGrid.prototype.getDialogType = function () { return EAM.AssetsMaintCritDialog; };
            AssetsMaintCritGrid.prototype.getIdProperty = function () { return EAM.AssetsMaintCritRow.idProperty; };
            AssetsMaintCritGrid.prototype.getInsertPermission = function () { return EAM.AssetsMaintCritRow.insertPermission; };
            AssetsMaintCritGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintCritGrid);
            return AssetsMaintCritGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsMaintCritGrid = AssetsMaintCritGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintSubSetDialog = /** @class */ (function (_super) {
            __extends(AssetsMaintSubSetDialog, _super);
            function AssetsMaintSubSetDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintSubSetDialog.prototype.getFormKey = function () { return EAM.AssetsMaintSubSetForm.formKey; };
            AssetsMaintSubSetDialog.prototype.getIdProperty = function () { return EAM.AssetsMaintSubSetRow.idProperty; };
            AssetsMaintSubSetDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsMaintSubSetRow.localTextPrefix; };
            AssetsMaintSubSetDialog.prototype.getNameProperty = function () { return EAM.AssetsMaintSubSetRow.nameProperty; };
            AssetsMaintSubSetDialog.prototype.getService = function () { return EAM.AssetsMaintSubSetService.baseUrl; };
            AssetsMaintSubSetDialog.prototype.getDeletePermission = function () { return EAM.AssetsMaintSubSetRow.insertPermission; };
            AssetsMaintSubSetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintSubSetDialog);
            return AssetsMaintSubSetDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsMaintSubSetDialog = AssetsMaintSubSetDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsMaintSubSetGrid = /** @class */ (function (_super) {
            __extends(AssetsMaintSubSetGrid, _super);
            function AssetsMaintSubSetGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsMaintSubSetGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsMaintSubSet'; };
            AssetsMaintSubSetGrid.prototype.getDialogType = function () { return EAM.AssetsMaintSubSetDialog; };
            AssetsMaintSubSetGrid.prototype.getIdProperty = function () { return EAM.AssetsMaintSubSetRow.idProperty; };
            AssetsMaintSubSetGrid.prototype.getInsertPermission = function () { return EAM.AssetsMaintSubSetRow.insertPermission; };
            AssetsMaintSubSetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsMaintSubSetGrid);
            return AssetsMaintSubSetGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsMaintSubSetGrid = AssetsMaintSubSetGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSeverityDialog = /** @class */ (function (_super) {
            __extends(AssetsSeverityDialog, _super);
            function AssetsSeverityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSeverityDialog.prototype.getFormKey = function () { return EAM.AssetsSeverityForm.formKey; };
            AssetsSeverityDialog.prototype.getIdProperty = function () { return EAM.AssetsSeverityRow.idProperty; };
            AssetsSeverityDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsSeverityRow.localTextPrefix; };
            AssetsSeverityDialog.prototype.getNameProperty = function () { return EAM.AssetsSeverityRow.nameProperty; };
            AssetsSeverityDialog.prototype.getService = function () { return EAM.AssetsSeverityService.baseUrl; };
            AssetsSeverityDialog.prototype.getDeletePermission = function () { return EAM.AssetsSeverityRow.insertPermission; };
            AssetsSeverityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSeverityDialog);
            return AssetsSeverityDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsSeverityDialog = AssetsSeverityDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSeverityGrid = /** @class */ (function (_super) {
            __extends(AssetsSeverityGrid, _super);
            function AssetsSeverityGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSeverityGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsSeverity'; };
            AssetsSeverityGrid.prototype.getDialogType = function () { return EAM.AssetsSeverityDialog; };
            AssetsSeverityGrid.prototype.getIdProperty = function () { return EAM.AssetsSeverityRow.idProperty; };
            AssetsSeverityGrid.prototype.getInsertPermission = function () { return EAM.AssetsSeverityRow.insertPermission; };
            AssetsSeverityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSeverityGrid);
            return AssetsSeverityGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsSeverityGrid = AssetsSeverityGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDialog = /** @class */ (function (_super) {
            __extends(AssetsSurveyDialog, _super);
            function AssetsSurveyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSurveyDialog.prototype.getFormKey = function () { return EAM.AssetsSurveyForm.formKey; };
            AssetsSurveyDialog.prototype.getIdProperty = function () { return EAM.AssetsSurveyRow.idProperty; };
            AssetsSurveyDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsSurveyRow.localTextPrefix; };
            AssetsSurveyDialog.prototype.getNameProperty = function () { return EAM.AssetsSurveyRow.nameProperty; };
            AssetsSurveyDialog.prototype.getService = function () { return EAM.AssetsSurveyService.baseUrl; };
            AssetsSurveyDialog.prototype.getDeletePermission = function () { return EAM.AssetsSurveyRow.insertPermission; };
            AssetsSurveyDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AssetsSurveyDialog);
            return AssetsSurveyDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsSurveyDialog = AssetsSurveyDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressEditor = /** @class */ (function (_super) {
            __extends(AssetsSurveyDistressEditor, _super);
            function AssetsSurveyDistressEditor(container) {
                return _super.call(this, container) || this;
            }
            AssetsSurveyDistressEditor.prototype.getColumnsKey = function () { return "EAM.AssetsSurveyDistress"; };
            AssetsSurveyDistressEditor.prototype.getDialogType = function () { return EAM.AssetsSurveyDistressDialog; };
            AssetsSurveyDistressEditor.prototype.getLocalTextPrefix = function () { return EAM.AssetsSurveyDistressRow.localTextPrefix; };
            AssetsSurveyDistressEditor.prototype.validateEntity = function (row, id) {
                // row.AttrId = Q.toId(row.AttrId);
                // var sameProduct = Q.tryFirst(this.view.getItems(), x => x.AttrId === row.AttrId);
                // if (sameProduct && this.id(sameProduct) !== id) {
                //     Q.alert('This Attr is already register!');
                //     return false;
                // }
                ///* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/
                return true;
            };
            AssetsSurveyDistressEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSurveyDistressEditor);
            return AssetsSurveyDistressEditor;
        }(PMMS.Common.GridEditorBase));
        EAM.AssetsSurveyDistressEditor = AssetsSurveyDistressEditor;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyGrid = /** @class */ (function (_super) {
            __extends(AssetsSurveyGrid, _super);
            function AssetsSurveyGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSurveyGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsSurvey'; };
            AssetsSurveyGrid.prototype.getDialogType = function () { return EAM.AssetsSurveyDialog; };
            AssetsSurveyGrid.prototype.getIdProperty = function () { return EAM.AssetsSurveyRow.idProperty; };
            AssetsSurveyGrid.prototype.getInsertPermission = function () { return EAM.AssetsSurveyRow.insertPermission; };
            AssetsSurveyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSurveyGrid);
            return AssetsSurveyGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsSurveyGrid = AssetsSurveyGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyLDialog = /** @class */ (function (_super) {
            __extends(AssetsSurveyLDialog, _super);
            function AssetsSurveyLDialog() {
                return _super.call(this) || this;
            }
            AssetsSurveyLDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            AssetsSurveyLDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            AssetsSurveyLDialog = __decorate([
                Serenity.Decorators.panel()
            ], AssetsSurveyLDialog);
            return AssetsSurveyLDialog;
        }(PMMS.EAM.AssetsSurveyDialog));
        EAM.AssetsSurveyLDialog = AssetsSurveyLDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressDialog = /** @class */ (function (_super) {
            __extends(AssetsSurveyDistressDialog, _super);
            function AssetsSurveyDistressDialog() {
                var _this = _super.call(this) || this;
                _this.form = new EAM.AssetsSurveyDistressForm(_this.idPrefix);
                return _this;
            }
            AssetsSurveyDistressDialog.prototype.getFormKey = function () { return EAM.AssetsSurveyDistressForm.formKey; };
            //protected getIdProperty() { return AssetsSurveyDistressRow.idProperty; }
            AssetsSurveyDistressDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsSurveyDistressRow.localTextPrefix; };
            AssetsSurveyDistressDialog.prototype.getNameProperty = function () { return EAM.AssetsSurveyDistressRow.nameProperty; };
            AssetsSurveyDistressDialog.prototype.getService = function () { return EAM.AssetsSurveyDistressService.baseUrl; };
            AssetsSurveyDistressDialog.prototype.getDeletePermission = function () { return EAM.AssetsSurveyDistressRow.insertPermission; };
            AssetsSurveyDistressDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSurveyDistressDialog);
            return AssetsSurveyDistressDialog;
        }(PMMS.Common.GridEditorDialog));
        EAM.AssetsSurveyDistressDialog = AssetsSurveyDistressDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsSurveyDistressGrid = /** @class */ (function (_super) {
            __extends(AssetsSurveyDistressGrid, _super);
            function AssetsSurveyDistressGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsSurveyDistressGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsSurveyDistress'; };
            AssetsSurveyDistressGrid.prototype.getDialogType = function () { return EAM.AssetsSurveyDistressDialog; };
            AssetsSurveyDistressGrid.prototype.getIdProperty = function () { return EAM.AssetsSurveyDistressRow.idProperty; };
            AssetsSurveyDistressGrid.prototype.getInsertPermission = function () { return EAM.AssetsSurveyDistressRow.insertPermission; };
            AssetsSurveyDistressGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsSurveyDistressGrid);
            return AssetsSurveyDistressGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsSurveyDistressGrid = AssetsSurveyDistressGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsTotalCalcDialog = /** @class */ (function (_super) {
            __extends(AssetsTotalCalcDialog, _super);
            function AssetsTotalCalcDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsTotalCalcDialog.prototype.getFormKey = function () { return EAM.AssetsTotalCalcForm.formKey; };
            AssetsTotalCalcDialog.prototype.getIdProperty = function () { return EAM.AssetsTotalCalcRow.idProperty; };
            AssetsTotalCalcDialog.prototype.getLocalTextPrefix = function () { return EAM.AssetsTotalCalcRow.localTextPrefix; };
            AssetsTotalCalcDialog.prototype.getNameProperty = function () { return EAM.AssetsTotalCalcRow.nameProperty; };
            AssetsTotalCalcDialog.prototype.getService = function () { return EAM.AssetsTotalCalcService.baseUrl; };
            AssetsTotalCalcDialog.prototype.getDeletePermission = function () { return EAM.AssetsTotalCalcRow.insertPermission; };
            AssetsTotalCalcDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsTotalCalcDialog);
            return AssetsTotalCalcDialog;
        }(Serenity.EntityDialog));
        EAM.AssetsTotalCalcDialog = AssetsTotalCalcDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var AssetsTotalCalcGrid = /** @class */ (function (_super) {
            __extends(AssetsTotalCalcGrid, _super);
            function AssetsTotalCalcGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetsTotalCalcGrid.prototype.getColumnsKey = function () { return 'EAM.AssetsTotalCalc'; };
            AssetsTotalCalcGrid.prototype.getDialogType = function () { return EAM.AssetsTotalCalcDialog; };
            AssetsTotalCalcGrid.prototype.getIdProperty = function () { return EAM.AssetsTotalCalcRow.idProperty; };
            AssetsTotalCalcGrid.prototype.getInsertPermission = function () { return EAM.AssetsTotalCalcRow.insertPermission; };
            AssetsTotalCalcGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetsTotalCalcGrid);
            return AssetsTotalCalcGrid;
        }(Serenity.EntityGrid));
        EAM.AssetsTotalCalcGrid = AssetsTotalCalcGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var OpValuesDialog = /** @class */ (function (_super) {
            __extends(OpValuesDialog, _super);
            function OpValuesDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OpValuesDialog.prototype.getFormKey = function () { return EAM.OpValuesForm.formKey; };
            OpValuesDialog.prototype.getIdProperty = function () { return EAM.OpValuesRow.idProperty; };
            OpValuesDialog.prototype.getLocalTextPrefix = function () { return EAM.OpValuesRow.localTextPrefix; };
            OpValuesDialog.prototype.getNameProperty = function () { return EAM.OpValuesRow.nameProperty; };
            OpValuesDialog.prototype.getService = function () { return EAM.OpValuesService.baseUrl; };
            OpValuesDialog.prototype.getDeletePermission = function () { return EAM.OpValuesRow.insertPermission; };
            OpValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OpValuesDialog);
            return OpValuesDialog;
        }(Serenity.EntityDialog));
        EAM.OpValuesDialog = OpValuesDialog;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var EAM;
    (function (EAM) {
        var OpValuesGrid = /** @class */ (function (_super) {
            __extends(OpValuesGrid, _super);
            function OpValuesGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OpValuesGrid.prototype.getColumnsKey = function () { return 'EAM.OpValues'; };
            OpValuesGrid.prototype.getDialogType = function () { return EAM.OpValuesDialog; };
            OpValuesGrid.prototype.getIdProperty = function () { return EAM.OpValuesRow.idProperty; };
            OpValuesGrid.prototype.getInsertPermission = function () { return EAM.OpValuesRow.insertPermission; };
            OpValuesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OpValuesGrid);
            return OpValuesGrid;
        }(Serenity.EntityGrid));
        EAM.OpValuesGrid = OpValuesGrid;
    })(EAM = PMMS.EAM || (PMMS.EAM = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
var PMMS;
(function (PMMS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value,
                            IqamaID: _this.form.IqamaID.value,
                            MobileNumber: _this.form.MobileNumber.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = PMMS.Membership || (PMMS.Membership = {}));
})(PMMS || (PMMS = {}));
//# sourceMappingURL=PMMS.Web.js.map