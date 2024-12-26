
namespace PMMS.Membership.Pages
{
    using Administration;
    using Administration.Entities;
    using Administration.Repositories;

    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Net.Mail;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult SignUp()
        {
         
                return null;
          

        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> SignUp(SignUpRequest request)
        {

            return null;

           
        }

        [HttpGet]
        public ActionResult Activate(string t)
        {
            return null;

         
        }
    }
}
