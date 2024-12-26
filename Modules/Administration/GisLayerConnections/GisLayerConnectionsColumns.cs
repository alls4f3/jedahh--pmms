
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.GisLayerConnections")]
    [BasedOnRow(typeof(Entities.GisLayerConnectionsRow), CheckNames = true)]
    public class GisLayerConnectionsColumns
    {
        [EditLink]
        public String GisPageName { get; set; }
        public String GisPageContent { get; set; }
        //public Int32 GisPageSorting { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GisPageId { get; set; }
        public String GisurlName { get; set; }
        public Boolean IsPublish { get; set; }
    }
}