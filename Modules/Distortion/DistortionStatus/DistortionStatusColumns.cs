﻿
namespace PMMS.Distortion.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Distortion.DistortionStatus")]
    [BasedOnRow(typeof(Entities.DistortionStatusRow), CheckNames = true)]
    public class DistortionStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
    }
}