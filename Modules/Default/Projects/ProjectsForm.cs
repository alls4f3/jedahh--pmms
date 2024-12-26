
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Projects")]
    [BasedOnRow(typeof(Entities.ProjectsRow), CheckNames = true)]
    public class ProjectsForm
    {

        [Tab("Basic Information")]
        [Category("Project Information")]

        public String ProjectName { get; set; }

        [ReadOnly(true)]
        public String CONTRACTOR_COM_REG { get; set; }

        [ReadOnly(true)]
        public String CONTRACT_VALUE { get; set; }
        [ReadOnly(true)]

        public String DEPT_DESC { get; set; }

        [ReadOnly(true)]

        public String USER_CONT_NUMBER { get; set; }

        [Tab("Users Management")]
        [Category("Users Mapping")]
        public int? ContractorUser { get; set; }
        public int? ProjectUser { get; set; }


    }
}