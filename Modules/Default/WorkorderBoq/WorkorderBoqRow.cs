
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[workorderBOQ]")]
    [DisplayName("Workorder Boq"), InstanceName("Workorder Boq")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class WorkorderBoqRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Itm Code"), Column("ITM_CODE"), Size(255), QuickSearch]
        public String ItmCode
        {
            get { return Fields.ItmCode[this]; }
            set { Fields.ItmCode[this] = value; }
        }

        [DisplayName("Itm Seq"), Column("ITM_SEQ")]
        public Double? ItmSeq
        {
            get { return Fields.ItmSeq[this]; }
            set { Fields.ItmSeq[this] = value; }
        }

        [DisplayName("Itm Desc"), Column("ITM_DESC")]
        public String ItmDesc
        {
            get { return Fields.ItmDesc[this]; }
            set { Fields.ItmDesc[this] = value; }
        }

        [DisplayName("Contract Id"), Column("CONTRACT_ID")]
        public Double? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Unit"), Column("UNIT"), Size(255)]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Qty"), Column("QTY")]
        public Double? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Remainder"), Column("REMAINDER")]
        public Double? Remainder
        {
            get { return Fields.Remainder[this]; }
            set { Fields.Remainder[this] = value; }
        }

        [DisplayName("Exec Qty"), Column("EXEC_QTY")]
        public Double? ExecQty
        {
            get { return Fields.ExecQty[this]; }
            set { Fields.ExecQty[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItmCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkorderBoqRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItmCode;
            public DoubleField ItmSeq;
            public StringField ItmDesc;
            public DoubleField ContractId;
            public StringField Unit;
            public DoubleField Qty;
            public DoubleField Remainder;
            public DoubleField ExecQty;
        }
    }
}
