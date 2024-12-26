
namespace PMMS.Apps.GIS
{
    using Serenity.Web;
    using System.Web.Mvc;
    using System.Linq;
    using Serenity.Data;
    using PMMS.Northwind;
    using Serenity.Services;
    using System.IO;
    using Serenity;

    [RoutePrefix("Apps/GIS/display"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class GISController : Controller
    {
        public ActionResult Index()
        {

            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


                var queryParameters = new DynamicParameters();

                queryParameters.Add("@GISPageID", System.Web.HttpContext.Current.Request.QueryString["render"].ToString());

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select gispagename as Name,gispagecontent as Text ,ReportUsers as itemstatus from GisLayerConnections where GISPageID=@GISPageID", queryParameters).ToList();


                if (GetAll.Count > 0)
                {


                    var st = GetAll[0].itemstatus.ToString().Split(',');
                    var u = Authorization.UserId.ToString();
                    foreach (var item in st)
                    {
                        if (u == item)
                        {
                            ViewBag.Output = "/upload/" + GetAll[0].Text;
                            ViewBag.pageNameTile = GetAll[0].Name;
                            ViewBag.error = "0";
                            ViewBag.IsHTML = Path.GetExtension(ViewBag.Output).ToUpper();

                            break;

                            
                        }
                        else
                        {
                            ViewBag.error = "1";
                            ViewBag.pageNameTile = "No connection found";
                        }
                    }

                 

                }
                else
                {
                    ViewBag.error = "1";
                    ViewBag.pageNameTile = "No connection found";
                }

            }
            catch (System.Exception ex)
            {
                ViewBag.error = "1";
                ViewBag.pageNameTile = ex.Message.ToString();


            }

           
            return View(MVC.Views.PMMS.Apps.GIS);
        }

      
    }


    [RoutePrefix("Apps/GISSideWalk"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class GISSIDEWALKController : Controller
    {
        public ActionResult Index()
        {


            return View(MVC.Views.PMMS.Apps.GISSIDEWALK);
        }


    }


    [RoutePrefix("Apps/GISAshrf"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class GISAshrfController : Controller
    {
        public ActionResult Index()
        {


            return View(MVC.Views.PMMS.Apps.Ashrf);
        }


    }

    [RoutePrefix("Apps/SectionMR"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class SectionMRController : Controller
    {
        public ActionResult Index()
        {


            return View(MVC.Views.PMMS.Apps.SectionMR);
        }


    }

    [RoutePrefix("Apps/SectionPCI"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class SectionPCIController : Controller
    {
        public ActionResult Index(string render)
        {
            try
            {
                var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();


                var queryParameters = new DynamicParameters();

                queryParameters.Add("@GISPageID", render);

                var GetAll = connection.Query<PMMS.Northwind.ItemSelect>(@"select gispagename as Name,gispagecontent as Text from GisLayerConnections where GISPageID=@GISPageID", queryParameters).ToList();


                if (GetAll.Count > 0)
                {
                    ViewBag.Output = "/upload/" + GetAll[0].Text;
                    ViewBag.pageNameTile = GetAll[0].Name;
                    ViewBag.error = "0";

                }
            else
            {
                    ViewBag.error = "1";
                    ViewBag.pageNameTile ="No connection found";
            }

        }
            catch (System.Exception ex)
            {
                ViewBag.error = "1";
                ViewBag.pageNameTile = ex.Message.ToString();


            }

            if (Path.GetExtension(ViewBag.Output)=="kml" || Path.GetExtension(ViewBag.Output) == ".kml")
            {
                return View(MVC.Views.PMMS.Apps.Sectionkml);

            }
            else if (Path.GetExtension(ViewBag.Output) == "kmz" || Path.GetExtension(ViewBag.Output) == ".kmz")
            {
                return View(MVC.Views.PMMS.Apps.Sectionkmz);

            }
            else
            {
                return View(MVC.Views.PMMS.Apps.SectionPCI);

            }



        }


    }


    [RoutePrefix("Apps/SideWalkMR"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class SideWalkMRController : Controller
    {
        public ActionResult Index()
        {


            return View(MVC.Views.PMMS.Apps.SideWalkMR);
        }


    }

    [RoutePrefix("Apps/SideWalkPCI"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Apps.GIS)]
    public class SideWalkPCIController : Controller
    {
        public ActionResult Index()
        {


            return View(MVC.Views.PMMS.Apps.SideWalkPCI);
        }


    }





}
