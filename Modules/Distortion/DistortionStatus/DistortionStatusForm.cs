
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.DistortionStatus")]
    [BasedOnRow(typeof(Entities.DistortionStatusRow), CheckNames = true)]
    public class DistortionStatusForm
    {
        public String ItemName { get; set; }
    }
}