
namespace PMMS.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using Northwind;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[WorkFlow_Stages]")]
    [DisplayName("Work Flow Stages"), InstanceName("Work Flow Stages")]
    [ReadPermission(PermissionKeys.Apps.WorkFlowConfiguration)]
    [ModifyPermission(PermissionKeys.Apps.WorkFlowConfiguration)]
    public sealed class WorkFlowStagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Stage Id"), PrimaryKey]
        public Int32? StageId
        {
            get { return Fields.StageId[this]; }
            set { Fields.StageId[this] = value; }
        }

        [DisplayName("Stage Name"), Size(50), QuickSearch]
        public String StageName
        {
            get { return Fields.StageName[this]; }
            set { Fields.StageName[this] = value; }
        }

        [DisplayName("On Approve Go")]
        public Int32? OnApproveGo
        {
            get { return Fields.OnApproveGo[this]; }
            set { Fields.OnApproveGo[this] = value; }
        }

        [DisplayName("On Reject Go")]
        public Int32? OnRejectGo
        {
            get { return Fields.OnRejectGo[this]; }
            set { Fields.OnRejectGo[this] = value; }
        }

        [DisplayName("User Type")]
        [LookupEditor(typeof(PMMS.Administration.Entities.WorkFlowUserTypeRow))]
        public Int32? UserType
        {
            get { return Fields.UserType[this]; }
            set { Fields.UserType[this] = value; }
        }


        [DisplayName("StageKey")]
        public Int32? StageKey
        {
            get { return Fields.StageKey[this]; }
            set { Fields.StageKey[this] = value; }
        }



        [DisplayName("Is Required Check HF")]
        public bool? IsRequiredCheckHF
        {
            get { return Fields.IsRequiredCheckHF[this]; }
            set { Fields.IsRequiredCheckHF[this] = value; }
        }


        [DisplayName("Is Required To Block HF")]
        public bool? IsRequiredToBlockHF
        {
            get { return Fields.IsRequiredToBlockHF[this]; }
            set { Fields.IsRequiredToBlockHF[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StageName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkFlowStagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StageId;
            public StringField StageName;
            public Int32Field OnApproveGo;
            public Int32Field OnRejectGo;
            public Int32Field UserType;
            public Int32Field StageKey;
            public BooleanField IsRequiredCheckHF;
            public BooleanField IsRequiredToBlockHF;


   
        }
    }
}
