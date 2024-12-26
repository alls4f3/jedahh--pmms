using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;

using System.Linq;
using Serenity.Web;
using PMMS.Membership;
using System.Web;

using System.Collections.Generic;
using System.Web.Configuration;
using PMMS.Northwind;
using static PMMS.Apps.Workflow.WorkflowController;
using PMMS.Default.Repositories;

namespace AmtarApp.Modules.Common
{
    public class UpdateImportWizrd
    {


        public void UpdateAll()
        {
         
            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();

            DataTable dt = new DataTable();

            dt = cd.GetData("select workorderid from WorkOrder where WorkOrder.WorkorderSection <>'-1'  ");
        

            foreach (DataRow item in dt.Rows)
            {


                string SQL_I = @"

 SELECT 


  STRING_AGG( ROAD_NAME, ',') AS DisplayStreet,
  STRING_AGG(ZONE_NAME, ',' )   AS DisplayZone,
 STRING_AGG(AREA_NAME, ',') AS DisplayArea,
 STRING_AGG(CITY_NAME, ',') AS DisplayCity,
 STRING_AGG(SectionNumber, ',') AS DisplaySection

 
 FROM (
select FEATURE_DESCRIPTION as 'ActionData'
, ActionName as 'Action' 
,ROADS.ROAD_NAME
,ROADS.ROAD_NO
,WorkOrder.WorkorderSection
,areas.area_name
,zones.zone_name

,city.city_name
,roads.roadid 
,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as SectionNumber



,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.streetId from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.streetId from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.SectionId from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as ItemID

,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.MpointX from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.MpointX from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.MpointX from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as lat



,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.MpointY from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.MpointY from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.MpointY from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as longt





from 
[dbo].[WorkOrderLane] join  
LaneActions on
LaneActions.actionId =[WorkOrderLane].actionid
join WorkOrder on WorkOrder.workorderid=[WorkOrderLane].woid
join FEATURES on 
FEATURES.[FEATURE_NO]=[WorkOrderLane].LaneId 




join ROADS on 

 ROADS.AREA_NO=[WorkOrderLane].[regnumber]
and ROADS.road_no=[WorkOrderLane].[roadnumber]
and ROADS.CITY_NO=WorkOrder.WorkorderCity


join areas on 
areas.AREA_NO=ROADS.AREA_NO
and areas.city_no=ROADS.city_no
and areas.zone_no=ROADS.ZONE_NO

join ZONES on 
 ZONES.city_no=ROADS.city_no
and ZONES.zone_no=ROADS.ZONE_NO

join city
on 
 city.city_no=ROADS.city_no


where [WorkOrderLane].WoId='" + item[0] + "' and WorkOrder.WorkorderSection <>'-1')t";




                DataTable dtInfo = new DataTable();

                dtInfo = cd.GetData(SQL_I);
                if (dtInfo.Rows.Count > 0)
                {
                    string[] DisplayStreet = dtInfo.Rows[0]["DisplayStreet"].ToString().Split(',');
                    string[] distinctDisplayStreet = DisplayStreet.Distinct().ToArray();
                    string outputDisplayStreet = string.Join(",", distinctDisplayStreet);

                    string[] DisplayZone = dtInfo.Rows[0]["DisplayZone"].ToString().Split(',');
                    string[] distinctDisplayZone = DisplayZone.Distinct().ToArray();
                    string outputDisplayZone = string.Join(",", distinctDisplayZone);

                    string[] DisplayArea = dtInfo.Rows[0]["DisplayArea"].ToString().Split(',');
                    string[] distinctDisplayArea = DisplayArea.Distinct().ToArray();
                    string outputDisplayArea = string.Join(",", distinctDisplayArea);


                    string[] DisplayCity = dtInfo.Rows[0]["DisplayCity"].ToString().Split(',');
                    string[] distinctDisplayCity = DisplayCity.Distinct().ToArray();
                    string outputDisplayCity = string.Join(",", distinctDisplayCity);


                    string[] DisplaySection = dtInfo.Rows[0]["DisplaySection"].ToString().Split(',');
                    string[] distinctDisplaySection = DisplaySection.Distinct().ToArray();
                    string outputDisplaySection = string.Join(",", distinctDisplaySection);


                    cd.ExecuteNonQuery("update WorkOrder set DisplayStreet=N' " + outputDisplayStreet + "',DisplayZone=N' " + outputDisplayZone + "',DisplayArea=N' " + outputDisplayArea + "',DisplayCity=N' " + outputDisplayCity + "',DisplaySection=N' " + outputDisplaySection + "'  where workorderid=' " + item[0] + "'");

                }
                //connection.Execute("update sectemp set PCI='" + pci.SamplePCI + "' ,COMPUTED_DEDUCT_VALUE='"+pci.ComputedDeductValue+"' ,TOTAL_DEDUCT_VALUE='"+pci.TotalDeductValue+ "' where ItemId='" + item["ItemId"] + "' ");
                // update DB
            }



        }


        public void UpdateOldAll()
        {

            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();

            DataTable dt = new DataTable();

            dt = cd.GetData("select workorderid from WorkOrder where WorkOrder.WorkorderSection='-1'  ");


            foreach (DataRow item in dt.Rows)
            {


                string SQL_I = @" SELECT 


  STRING_AGG( ROADNAME, ',') AS DisplayStreet,
  STRING_AGG(ZONENAME, ',' )   AS DisplayZone,
 STRING_AGG(AreaNamew, ',') AS DisplayArea,
 STRING_AGG(CITYNAME, ',') AS DisplayCity,
 STRING_AGG(SecionName, ',') AS DisplaySection

 
 FROM (
select ISNULL(ROADS.ROAD_NO+' - ' + ROADS.ROAD_NAME,(select r2.ROAD_NO +' - ' + r2.ROAD_NAME from ROADS as r2 where r2.RoadId=SECTIONS.streetId)) as RoadName
,ISNULL(SECTIONS.SECTION_NO,ROADS.ROAD_NO) AS SecionName


,case when SECTIONS.SECTION_NO is null then
 (select city_no +' - ' +  city_name from city where city.city_no=ROADS.city_no)

 else
 (select city_no +' - ' +  city_name from city where city.city_no=sections.city_no)


 end as CityName


 ,case when SECTIONS.SECTION_NO is null then
 (select  ZONES.zone_no +' - ' + zone_name from ZONES where ZONES.city_no=ROADS.city_no and ZONES.zone_no=ROADS.zone_no)

 else
 (select ZONES.zone_no +' - ' + zone_name from ZONES where ZONES.city_no=sections.city_no and ZONES.zone_no=sections.zone_no)


 end as ZoneName


  ,case when SECTIONS.SECTION_NO is null then
 (select AREAS.area_no +' - ' + AREA_NAME from AREAS where AREAS.city_no=ROADS.city_no and AREAS.zone_no=ROADS.zone_no and AREAS.area_no=ROADS.area_no)

 else
 (select AREAS.area_no +' - ' + AREA_NAME from AREAS where AREAS.city_no=sections.city_no and AREAS.zone_no=sections.zone_no and AREAS.area_no=sections.area_no)


 end as AreaNamew

  ,case when SECTIONS.SECTION_NO is null then ROADS.MpointX else SECTIONS.MpointX end as lat
 
    ,case when SECTIONS.SECTION_NO is null then ROADS.Mpointy else SECTIONS.Mpointy end as longt

from workordersections as T0
join workorder o on o.workorderid=T0.workorderid

  Left Join SECTIONS as  SECTIONS on  RIGHT(T0.WORKORDERSECTION, LEN(T0.WORKORDERSECTION) - 6)=SECTIONS.[SectionId]  and left(T0.WORKORDERSECTION,5)='88888'
    Left Join ROADS AS ROADS ON RIGHT (T0.WORKORDERSECTION, LEN(T0.WORKORDERSECTION) - 6)=ROADS.[roadid]  and left(T0.WORKORDERSECTION,5)='99999'
	 where
	  o.workorderid='" + item[0] + "')t";




                DataTable dtInfo = new DataTable();

                dtInfo = cd.GetData(SQL_I);
                if (dtInfo.Rows.Count > 0)
                {
                    string[] DisplayStreet = dtInfo.Rows[0]["DisplayStreet"].ToString().Split(',');
                    string[] distinctDisplayStreet = DisplayStreet.Distinct().ToArray();
                    string outputDisplayStreet = string.Join(",", distinctDisplayStreet);

                    string[] DisplayZone = dtInfo.Rows[0]["DisplayZone"].ToString().Split(',');
                    string[] distinctDisplayZone = DisplayZone.Distinct().ToArray();
                    string outputDisplayZone = string.Join(",", distinctDisplayZone);

                    string[] DisplayArea = dtInfo.Rows[0]["DisplayArea"].ToString().Split(',');
                    string[] distinctDisplayArea = DisplayArea.Distinct().ToArray();
                    string outputDisplayArea = string.Join(",", distinctDisplayArea);


                    string[] DisplayCity = dtInfo.Rows[0]["DisplayCity"].ToString().Split(',');
                    string[] distinctDisplayCity = DisplayCity.Distinct().ToArray();
                    string outputDisplayCity = string.Join(",", distinctDisplayCity);


                    string[] DisplaySection = dtInfo.Rows[0]["DisplaySection"].ToString().Split(',');
                    string[] distinctDisplaySection = DisplaySection.Distinct().ToArray();
                    string outputDisplaySection = string.Join(",", distinctDisplaySection);


                    cd.ExecuteNonQuery("update WorkOrder set DisplayStreet=N' " + outputDisplayStreet + "',DisplayZone=N' " + outputDisplayZone + "',DisplayArea=N' " + outputDisplayArea + "',DisplayCity=N' " + outputDisplayCity + "',DisplaySection=N' " + outputDisplaySection + "'  where workorderid=' " + item[0] + "'");

                }
                //connection.Execute("update sectemp set PCI='" + pci.SamplePCI + "' ,COMPUTED_DEDUCT_VALUE='"+pci.ComputedDeductValue+"' ,TOTAL_DEDUCT_VALUE='"+pci.TotalDeductValue+ "' where ItemId='" + item["ItemId"] + "' ");
                // update DB
            }



        }


        public void Updatethis(string WorkOrder)
        {

           
            PMMS.Common.Helpers.SQLHelper cd = new PMMS.Common.Helpers.SQLHelper();

            DataTable dt = new DataTable();
            dt = cd.GetData("select workorderid from WorkOrder where WorkOrder.workorderid ='" + WorkOrder + "'  ");
            foreach (DataRow item in dt.Rows)
            {


                string SQL_I = @"

 SELECT 


  STRING_AGG( ROAD_NAME, ',') AS DisplayStreet,
  STRING_AGG(ZONE_NAME, ',' )   AS DisplayZone,
 STRING_AGG(AREA_NAME, ',') AS DisplayArea,
 STRING_AGG(CITY_NAME, ',') AS DisplayCity,
 STRING_AGG(SectionNumber, ',') AS DisplaySection

 
 FROM (
select FEATURE_DESCRIPTION as 'ActionData'
, ActionName as 'Action' 
,ROADS.ROAD_NAME
,ROADS.ROAD_NO
,WorkOrder.WorkorderSection
,areas.area_name
,zones.zone_name

,city.city_name
,roads.roadid 
,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.SECTION_NO from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as SectionNumber



,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.streetId from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.streetId from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.SectionId from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as ItemID

,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.MpointX from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.MpointX from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.MpointX from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as lat



,case 
when WorkorderSection='0-0' then (select top 1 SECTIONS.MpointY from SECTIONS where  SECTIONS.streetid=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='99999' then (select top 1 SECTIONS.MpointY from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=roads.roadid and SECTIONS.IsDeleted='0')
when left(WorkorderSection,5)='88888' then (select top 1 SECTIONS.MpointY from SECTIONS where  RIGHT(WorkorderSection, LEN(WorkorderSection) - 6)=SECTIONS.[SectionId] and SECTIONS.IsDeleted='0')
else 'None'
end as longt





from 
[dbo].[WorkOrderLane] join  
LaneActions on
LaneActions.actionId =[WorkOrderLane].actionid
join WorkOrder on WorkOrder.workorderid=[WorkOrderLane].woid
join FEATURES on 
FEATURES.[FEATURE_NO]=[WorkOrderLane].LaneId 




join ROADS on 

 ROADS.AREA_NO=[WorkOrderLane].[regnumber]
and ROADS.road_no=[WorkOrderLane].[roadnumber]
and ROADS.CITY_NO=WorkOrder.WorkorderCity


join areas on 
areas.AREA_NO=ROADS.AREA_NO
and areas.city_no=ROADS.city_no
and areas.zone_no=ROADS.ZONE_NO

join ZONES on 
 ZONES.city_no=ROADS.city_no
and ZONES.zone_no=ROADS.ZONE_NO

join city
on 
 city.city_no=ROADS.city_no


where [WorkOrderLane].WoId='" + item[0] + "' and WorkOrder.WorkorderSection <>'-1')t";




                DataTable dtInfo = new DataTable();

                dtInfo = cd.GetData(SQL_I);
                if (dtInfo.Rows.Count > 0)
                {
                    string[] DisplayStreet = dtInfo.Rows[0]["DisplayStreet"].ToString().Split(',');
                    string[] distinctDisplayStreet = DisplayStreet.Distinct().ToArray();
                    string outputDisplayStreet = string.Join(",", distinctDisplayStreet);

                    string[] DisplayZone = dtInfo.Rows[0]["DisplayZone"].ToString().Split(',');
                    string[] distinctDisplayZone = DisplayZone.Distinct().ToArray();
                    string outputDisplayZone = string.Join(",", distinctDisplayZone);

                    string[] DisplayArea = dtInfo.Rows[0]["DisplayArea"].ToString().Split(',');
                    string[] distinctDisplayArea = DisplayArea.Distinct().ToArray();
                    string outputDisplayArea = string.Join(",", distinctDisplayArea);


                    string[] DisplayCity = dtInfo.Rows[0]["DisplayCity"].ToString().Split(',');
                    string[] distinctDisplayCity = DisplayCity.Distinct().ToArray();
                    string outputDisplayCity = string.Join(",", distinctDisplayCity);


                    string[] DisplaySection = dtInfo.Rows[0]["DisplaySection"].ToString().Split(',');
                    string[] distinctDisplaySection = DisplaySection.Distinct().ToArray();
                    string outputDisplaySection = string.Join(",", distinctDisplaySection);


                    cd.ExecuteNonQuery("update WorkOrder set DisplayStreet=N' " + outputDisplayStreet + "',DisplayZone=N' " + outputDisplayZone + "',DisplayArea=N' " + outputDisplayArea + "',DisplayCity=N' " + outputDisplayCity + "',DisplaySection=N' " + outputDisplaySection + "'  where workorderid=' " + item[0] + "'");

                }
                //connection.Execute("update sectemp set PCI='" + pci.SamplePCI + "' ,COMPUTED_DEDUCT_VALUE='"+pci.ComputedDeductValue+"' ,TOTAL_DEDUCT_VALUE='"+pci.TotalDeductValue+ "' where ItemId='" + item["ItemId"] + "' ");
                // update DB
            }



        }
    }
}