using Serenity.Navigation;
using MyPages = PMMS.Administration.Pages;
using Administration = PMMS.Administration.Pages;
using MyPages3 = PMMS.Default.Pages;

using MyPages5 = PMMS.BI.Pages;




[assembly: NavigationMenu(9000, "Control Panel", icon: "fa-wrench")]
[assembly: NavigationMenu(10000, "System Setting", icon: "fa-users")]
[assembly: NavigationLink(9000, "System Setting/Exceptions Log", url: "~/errorlog.axd", permission: PMMS.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Control Panel/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]

[assembly: NavigationLink(9000, "Control Panel/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9002, "Control Panel/File Box Server", typeof(PMMS.Apps.Browse.FileManagerFrameController), icon: "fa-comment-o")]

[assembly: NavigationLink(9000, "System Setting/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "System Setting/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "System Setting/Audit Log", typeof(MyPages.AuditLogController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Control Panel/Work Flow Stages", typeof(MyPages.WorkFlowStagesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Control Panel/Work Flow User Type", typeof(MyPages.WorkFlowUserTypeController), icon: null)]

[assembly: NavigationLink(9000, "Control Panel/BI/Custom Reports", typeof(MyPages.CustomReportsController), icon: null)]
[assembly: NavigationLink(9000, "Control Panel/BI/Custom Dashboards", typeof(MyPages5.CustomDashboardsController), icon: null)]

[assembly: NavigationLink(90001, "System Setting/User Groups", typeof(MyPages.UserGroupsController), icon: null)]

