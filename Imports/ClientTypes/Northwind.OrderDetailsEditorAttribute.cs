using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PMMS.Northwind
{
    public partial class OrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.Northwind.OrderDetailsEditor";

        public OrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }


    public partial class WorkOrderFixEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.Default.WorkOrderFixEditor";

        public WorkOrderFixEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class WorkorderBoqItemEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.Default.WorkorderBoqItemEditor";

        public WorkorderBoqItemEditorAttribute()
            : base(Key)
        {
        }
    }

    


    public partial class WorkOrderBugEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.Default.WorkOrderBug";

        public WorkOrderBugEditorAttribute()
            : base(Key)
        {
        }
    }


    public partial class CustomDashboardsScriptsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.BI.CustomDashboardsScripts";

        public CustomDashboardsScriptsEditorAttribute()
            : base(Key)
        {
        }
    }




    public partial class AssetCustAttrEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.EAM.AssetCustAttr";

        public AssetCustAttrEditorAttribute()
            : base(Key)
        {
        }
    }
    public partial class AssetsSurveyDistressEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.EAM.AssetsSurveyDistress";

        public AssetsSurveyDistressEditorAttribute()
            : base(Key)
        {
        }
    }
    
}

