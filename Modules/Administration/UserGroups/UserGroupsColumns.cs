
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.UserGroups")]
    [BasedOnRow(typeof(Entities.UserGroupsRow), CheckNames = true)]
    public class UserGroupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserGroupId { get; set; }
        [EditLink]
        public String UserGroupName { get; set; }
    }
}