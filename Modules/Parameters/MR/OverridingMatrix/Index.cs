
namespace PMMS.Parameters.MR
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;

    [RoutePrefix("Parameters/OverridingMatrix"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.Parameters)]
    public class OverridingMatrixController : Controller
    {
        public ActionResult Index()
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();
            var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"
select  MAINTENANCE_FACTOR_NO as Name,MAINTENANCE_FACTOR_VALUE as Text from Maintenance_Factors where MAINTENANCE_FACTOR_NO like 'MC%'
order by convert(int, substring(MAINTENANCE_FACTOR_NO,3,3))
");
            return View(MVC.Views.PMMS.MR.OverridingMatrix, GetAll.ToList());
        }


        public JsonResult SaveData(string m0, string m1, string m2, string m3, string m4, string m5, string m6, string m7, string m8, string m9, string m10, string m11, string m12, string m13, string m14, string m15, string m16, string m17, string m18, string m19, string m20, string m21, string m22, string m23, string m24, string m25, string m26, string m27, string m28, string m29, string m30, string m31, string m32, string m33, string m34, string m35, string m36, string m37, string m38, string m39, string m40, string m41, string m42, string m43, string m44, string m45, string m46, string m47, string m48, string m49, string m50, string m51, string m52, string m53, string m54, string m55, string m56, string m57, string m58, string m59, string m60, string m61, string m62, string m63, string m64, string m65, string m66, string m67, string m68, string m69, string m70, string m71, string m72, string m73, string m74, string m75, string m76, string m77, string m78, string m79, string m80, string m81, string m82, string m83, string m84,string m85)
        {

            var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m0 + "'  where MAINTENANCE_FACTOR_NO ='MC20'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m1 + "'  where MAINTENANCE_FACTOR_NO ='MC21'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m2 + "'  where MAINTENANCE_FACTOR_NO ='MC22'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m3 + "'  where MAINTENANCE_FACTOR_NO ='MC23'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m4 + "'  where MAINTENANCE_FACTOR_NO ='MC24'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m5 + "'  where MAINTENANCE_FACTOR_NO ='MC25'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m6 + "'  where MAINTENANCE_FACTOR_NO ='MC26'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m7 + "'  where MAINTENANCE_FACTOR_NO ='MC27'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m8 + "'  where MAINTENANCE_FACTOR_NO ='MC28'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m9 + "'  where MAINTENANCE_FACTOR_NO ='MC29'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m10 + "'  where MAINTENANCE_FACTOR_NO ='MC30'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m11 + "'  where MAINTENANCE_FACTOR_NO ='MC31'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m12 + "'  where MAINTENANCE_FACTOR_NO ='MC32'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m13 + "'  where MAINTENANCE_FACTOR_NO ='MC33'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m14 + "'  where MAINTENANCE_FACTOR_NO ='MC34'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m15 + "'  where MAINTENANCE_FACTOR_NO ='MC35'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m16 + "'  where MAINTENANCE_FACTOR_NO ='MC36'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m17 + "'  where MAINTENANCE_FACTOR_NO ='MC37'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m18 + "'  where MAINTENANCE_FACTOR_NO ='MC38'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m19 + "'  where MAINTENANCE_FACTOR_NO ='MC39'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m20 + "'  where MAINTENANCE_FACTOR_NO ='MC40'");


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m21 + "'  where MAINTENANCE_FACTOR_NO ='MC41'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m22 + "'  where MAINTENANCE_FACTOR_NO ='MC42'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m23 + "'  where MAINTENANCE_FACTOR_NO ='MC43'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m24 + "'  where MAINTENANCE_FACTOR_NO ='MC44'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m25 + "'  where MAINTENANCE_FACTOR_NO ='MC45'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m26 + "'  where MAINTENANCE_FACTOR_NO ='MC46'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m27 + "'  where MAINTENANCE_FACTOR_NO ='MC47'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m28 + "'  where MAINTENANCE_FACTOR_NO ='MC48'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m29 + "'  where MAINTENANCE_FACTOR_NO ='MC49'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m30 + "'  where MAINTENANCE_FACTOR_NO ='MC50'");


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m31 + "'  where MAINTENANCE_FACTOR_NO ='MC51'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m32 + "'  where MAINTENANCE_FACTOR_NO ='MC52'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m33 + "'  where MAINTENANCE_FACTOR_NO ='MC53'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m34 + "'  where MAINTENANCE_FACTOR_NO ='MC54'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m35 + "'  where MAINTENANCE_FACTOR_NO ='MC55'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m36 + "'  where MAINTENANCE_FACTOR_NO ='MC56'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m37 + "'  where MAINTENANCE_FACTOR_NO ='MC57'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m38 + "'  where MAINTENANCE_FACTOR_NO ='MC58'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m39 + "'  where MAINTENANCE_FACTOR_NO ='MC59'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m40 + "'  where MAINTENANCE_FACTOR_NO ='MC60'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m41 + "'  where MAINTENANCE_FACTOR_NO ='MC61'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m42 + "'  where MAINTENANCE_FACTOR_NO ='MC62'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m43 + "'  where MAINTENANCE_FACTOR_NO ='MC63'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m44 + "'  where MAINTENANCE_FACTOR_NO ='MC64'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m45 + "'  where MAINTENANCE_FACTOR_NO ='MC65'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m46 + "'  where MAINTENANCE_FACTOR_NO ='MC66'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m47 + "'  where MAINTENANCE_FACTOR_NO ='MC67'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m48 + "'  where MAINTENANCE_FACTOR_NO ='MC68'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m49 + "'  where MAINTENANCE_FACTOR_NO ='MC69'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m50 + "'  where MAINTENANCE_FACTOR_NO ='MC70'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m51 + "'  where MAINTENANCE_FACTOR_NO ='MC71'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m52 + "'  where MAINTENANCE_FACTOR_NO ='MC72'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m53 + "'  where MAINTENANCE_FACTOR_NO ='MC73'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m54 + "'  where MAINTENANCE_FACTOR_NO ='MC74'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m55 + "'  where MAINTENANCE_FACTOR_NO ='MC75'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m56 + "'  where MAINTENANCE_FACTOR_NO ='MC76'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m57 + "'  where MAINTENANCE_FACTOR_NO ='MC77'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m58 + "'  where MAINTENANCE_FACTOR_NO ='MC78'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m59 + "'  where MAINTENANCE_FACTOR_NO ='MC79'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m60 + "'  where MAINTENANCE_FACTOR_NO ='MC81'");


            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m61 + "'  where MAINTENANCE_FACTOR_NO ='MC82'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m62 + "'  where MAINTENANCE_FACTOR_NO ='MC83'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m63 + "'  where MAINTENANCE_FACTOR_NO ='MC84'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m64 + "'  where MAINTENANCE_FACTOR_NO ='MC85'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m65 + "'  where MAINTENANCE_FACTOR_NO ='MC86'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m66 + "'  where MAINTENANCE_FACTOR_NO ='MC87'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m67 + "'  where MAINTENANCE_FACTOR_NO ='MC91'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m68 + "'  where MAINTENANCE_FACTOR_NO ='MC92'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m69 + "'  where MAINTENANCE_FACTOR_NO ='MC93'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m70 + "'  where MAINTENANCE_FACTOR_NO ='MC94'");

            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m71 + "'  where MAINTENANCE_FACTOR_NO ='MC95'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m72 + "'  where MAINTENANCE_FACTOR_NO ='MC96'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m73 + "'  where MAINTENANCE_FACTOR_NO ='MC97'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m74 + "'  where MAINTENANCE_FACTOR_NO ='MC210'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m75 + "'  where MAINTENANCE_FACTOR_NO ='MC211'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m76 + "'  where MAINTENANCE_FACTOR_NO ='MC310'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m77 + "'  where MAINTENANCE_FACTOR_NO ='MC311'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m78 + "'  where MAINTENANCE_FACTOR_NO ='MC410'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m79 + "'  where MAINTENANCE_FACTOR_NO ='MC411'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m80 + "'  where MAINTENANCE_FACTOR_NO ='MC510'");

       
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m81 + "'  where MAINTENANCE_FACTOR_NO ='MC511'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m82 + "'  where MAINTENANCE_FACTOR_NO ='MC610'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m83 + "'  where MAINTENANCE_FACTOR_NO ='MC611'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m84 + "'  where MAINTENANCE_FACTOR_NO ='MC710'");
            connection.Execute("update Maintenance_Factors set MAINTENANCE_FACTOR_VALUE ='" + m85 + "'  where MAINTENANCE_FACTOR_NO ='MC711'");





            return Json("done", JsonRequestBehavior.AllowGet);
        }
    }
}
