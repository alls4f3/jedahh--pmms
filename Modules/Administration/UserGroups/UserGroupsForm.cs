
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.UserGroups")]
    [BasedOnRow(typeof(Entities.UserGroupsRow), CheckNames = true)]
    public class UserGroupsForm
    {
        public String UserGroupName { get; set; }
    }
}