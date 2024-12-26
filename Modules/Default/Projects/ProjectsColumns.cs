
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Projects")]
    [BasedOnRow(typeof(Entities.ProjectsRow), CheckNames = true)]
    public class ProjectsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProjectId { get; set; }
        [EditLink]
        public String ProjectName { get; set; }
        //public String ProjectLocation { get; set; }
        public String ContractorName { get; set; }
        //public String Maplocation { get; set; }
        //public String ProjectAttachment { get; set; }

        
        public String CONTRACTOR_COM_REG { get; set; }
        public String PROJ_START_DATE { get; set; }
        public String PROJ_END_DATE { get; set; }
        public String PROJ_PERIOD { get; set; }
        public String CONTRACT_VALUE { get; set; }
        public String DEPT_DESC { get; set; }
        public String USER_CONT_NUMBER { get; set; }

        
    }
}