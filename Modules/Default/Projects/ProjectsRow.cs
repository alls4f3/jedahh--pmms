
namespace PMMS.Default.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Projects]")]
    [DisplayName("Projects"), InstanceName("Projects")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class ProjectsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Project Id"), Identity]
        public Int32? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("Project Name"), QuickSearch,Required]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("Project Location")]
        public String ProjectLocation
        {
            get { return Fields.ProjectLocation[this]; }
            set { Fields.ProjectLocation[this] = value; }
        }

        [DisplayName("Contractor Name")]
        public String ContractorName
        {
            get { return Fields.ContractorName[this]; }
            set { Fields.ContractorName[this] = value; }
        }

        [DisplayName("Maplocation")]
        public String Maplocation
        {
            get { return Fields.Maplocation[this]; }
            set { Fields.Maplocation[this] = value; }
        }

        [DisplayName("Project Attachment")]
        [ImageUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = false)]
        public String ProjectAttachment
        {
            get { return Fields.ProjectAttachment[this]; }
            set { Fields.ProjectAttachment[this] = value; }
        }



        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook))]

        [DisplayName("Contractor User")]
        public int? ContractorUser
        {
            get { return Fields.ContractorUser[this]; }
            set { Fields.ContractorUser[this] = value; }
        }

        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook))]

        [DisplayName("Project User")]
        public int? ProjectUser
        {
            get { return Fields.ProjectUser[this]; }
            set { Fields.CONTRACT_ID[this] = value; }
        }




        [DisplayName("CONTRACT_ID")]
        public int? CONTRACT_ID
        {
            get { return Fields.CONTRACT_ID[this]; }
            set { Fields.CONTRACT_ID[this] = value; }
        }



        [DisplayName("SUP_NO")]
        public int? SUP_NO
        {
            get { return Fields.SUP_NO[this]; }
            set { Fields.SUP_NO[this] = value; }
        }


        [DisplayName("Contractor COM REG")]
        public String CONTRACTOR_COM_REG
        {
            get { return Fields.CONTRACTOR_COM_REG[this]; }
            set { Fields.CONTRACTOR_COM_REG[this] = value; }
        }


        [DisplayName("Start Date")]
        public int? PROJ_START_DATE
        {
            get { return Fields.PROJ_START_DATE[this]; }
            set { Fields.PROJ_START_DATE[this] = value; }
        }


        [DisplayName("End date")]
        public int? PROJ_END_DATE
        {
            get { return Fields.PROJ_END_DATE[this]; }
            set { Fields.PROJ_END_DATE[this] = value; }
        }


        [DisplayName("PERIOD")]
        public double? PROJ_PERIOD
        {
            get { return Fields.PROJ_PERIOD[this]; }
            set { Fields.PROJ_PERIOD[this] = value; }
        }


        [DisplayName("Contract Value")]
        public double? CONTRACT_VALUE
        {
            get { return Fields.CONTRACT_VALUE[this]; }
            set { Fields.CONTRACT_VALUE[this] = value; }
        }


        [DisplayName("Department Name")]
        public String DEPT_DESC
        {
            get { return Fields.DEPT_DESC[this]; }
            set { Fields.DEPT_DESC[this] = value; }
        }

        [DisplayName("Contract Number")]
        public String USER_CONT_NUMBER
        {
            get { return Fields.USER_CONT_NUMBER[this]; }
            set { Fields.USER_CONT_NUMBER[this] = value; }
        }



        [DisplayName("contract desc")]
        public String contract_desc
        {
            get { return Fields.contract_desc[this]; }
            set { Fields.contract_desc[this] = value; }
        }

        
        IIdField IIdRow.IdField
        {
            get { return Fields.ProjectId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProjectName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProjectsRow()
            : base(Fields)
        {
        }

        
        public class RowFields : RowFieldsBase
        {
            public Int32Field ProjectId;
            public StringField ProjectName;
            public StringField ProjectLocation;
            public StringField ContractorName;
            public StringField Maplocation;
            public StringField ProjectAttachment;
            public StringField contract_desc;
            


            public Int32Field CONTRACT_ID;
            public Int32Field SUP_NO;
            public StringField CONTRACTOR_COM_REG;
            public Int32Field PROJ_START_DATE;
            public Int32Field PROJ_END_DATE;
            public DoubleField PROJ_PERIOD;
            public DoubleField CONTRACT_VALUE;
            public StringField DEPT_DESC;
            public StringField USER_CONT_NUMBER;
            public Int32Field ContractorUser;
            public Int32Field ProjectUser;

            
                


        }
    }
}
