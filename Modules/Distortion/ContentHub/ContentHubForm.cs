
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.ContentHub")]
    [BasedOnRow(typeof(Entities.ContentHubRow), CheckNames = true)]
    public class ContentHubForm
    {
       
        public String ImageColPath { get; set; }
        public String ImageLat { get; set; }
        public String ImageLong { get; set; }
        public Int32 CollCateegory { get; set; }

        [TextAreaEditor(Cols = 1, Rows = 4)]

        public String ImgColNote { get; set; }
    }
}