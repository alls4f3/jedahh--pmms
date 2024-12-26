
namespace PMMS.Membership.Pages
{
    using PMMS.Administration;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Linq;
    using System.Security.Claims;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;
    using AmtarApp.RefSSOMapping;
    using EncryptString;

    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;
            if (ConfigurationManager.AppSettings.Get("EnableSSO") == "1")
            {
                return View("~/Modules/Membership/Account/SSO.cshtml");
            }
            else
            {
                if (UseAdminLTELoginBox)
                    return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
                else
                    return View(MVC.Views.Membership.Account.AccountLogin);
            }
        }

        [HttpGet, Route("~/")]
        public ActionResult sLogin(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (ConfigurationManager.AppSettings.Get("EnableSSO") == "1")
            {
                return View("~/Modules/Membership/Account/SSO.cshtml");
            }
            else
            {
                if (UseAdminLTELoginBox)
                    return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
                else
                    return View(MVC.Views.Membership.Account.AccountLogin);
            }
        }



    


    [HttpGet, Route("~/SiteSSOLogin")]
    public ActionResult SiteSSOLogin(string activated)
    {
        ViewData["Activated"] = activated;
        ViewData["HideLeftNavigation"] = true;

       

        if (ConfigurationManager.AppSettings.Get("EnableSSO") == "1")
        {
                try
                {
                    AmtarApp.RefSSOMapping.SSOMapping service = new SSOMapping();

                    var result = service.GetRedirect();

                    if (result != "-1" && result != "0")
                    {
                        
                        return Redirect(result);
                    }
                    else
                    {
                        if (UseAdminLTELoginBox)
                            return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
                        else
                            return View(MVC.Views.Membership.Account.AccountLogin);
                    }

                }
                catch (Exception)
                {

                    if (UseAdminLTELoginBox)
                        return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
                    else
                        return View(MVC.Views.Membership.Account.AccountLogin);
                }
       
        }
        else
        {

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }


    }



        [HttpGet, Route("~/Sitesso")]
        public ActionResult SSOLogin(  )
        {
            string IAM_ServiceID = Request.QueryString["ServiceID"];
            string IAM_SESSION = Request.QueryString["SessionID"];
            string IAM_KEYID = Request.QueryString["KeyID"];



            if (ConfigurationManager.AppSettings.Get("EnableSSO") == "1")
            {

                AmtarApp.RefSSOMapping.SSOMapping service = new SSOMapping();
                var SQLconnection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>();

                var result = service.GetLoginInfo(IAM_ServiceID,  IAM_SESSION,  IAM_KEYID);

                if (result.info == "1")
                {
                    var GetUser = SQLconnection.Query<PMMS.Northwind.ItemSelect>("select Username as  Id from users where SSO='" + result.json.ToString() + "'");
                    if (GetUser.ToList().Count > 0)
                    {
                        var username = GetUser.ToList()[0].Id;
                        var password = username + "pass@104[p*01";
                        bool returnval = false;
                        if (WebSecurityHelper.Authenticate(ref username, password, false))
                        {

                            using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                            {
                                var GetCurrentStatus = connection.Query<PMMS.Northwind.ItemSelect>("select isnull(email,'-1') as  Id from users where Username='" + username + "'");


                                if (Response.Cookies["TFA"] == null)
                                {
                                    addCookied(username, GetCurrentStatus.ToList()[0].Id.ToString());


                                }
                                else
                                {
                                    try
                                    {

                                        if (GetCurrentStatus.ToList()[0].Id.ToString() == "-1")
                                        {
                                            returnval = true;

                                        }
                                        else
                                        {
                                            HttpCookie cookie = Request.Cookies.Get("TFA");

                                            FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(cookie.Value);
                                            var st1 = ticket.UserData.Split(',')[3].ToString();
                                            var st2 = ticket.UserData.Split(',')[1].ToString();
                                            var st3 = ticket.UserData.Split(',')[2].ToString();
                                            if (st1 == st2 && st3 == Authorization.Username)
                                            {

                                            }
                                            else
                                            {
                                                addCookied(username, GetCurrentStatus.ToList()[0].Id.ToString());
                                            }
                                        }

                                    }
                                    catch (Exception)
                                    {
                                        if (GetCurrentStatus.ToList()[0].Id.ToString() != "-1")
                                            addCookied(username, GetCurrentStatus.ToList()[0].Id.ToString());
                                    }
                                }


                            }

                            if (returnval == false)
                            {


                                return Redirect("~/Dashboard");
                            }
                            else
                            {
                                return Redirect("~/ssoFailed" +"wronpassword2");
                            }





                        }
                        else
                        {
                            return Redirect("~/ssoFailed?"+ "wronpassword1");
                        }
                    }
                    else
                    {
                        return Redirect("~/ssoFailed?0list");
                    }
                   
                }
                else
                {
                    return Redirect("~/ssoFailed?noteqaul1");
                }

            }

            else
            {
                return Redirect("~/ssoFailed?noSSO");
            }

        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }


        public void loginExternal(string IAM_ServiceID, string IAM_SESSION, string IAM_KEYID)
        {

            ////string IAM_ServiceID = Request.QueryString("ServiceID");
            ////string IAM_SESSION = Request.QueryString("SessionID");
            ////string IAM_KEYID =  Request.QueryString("KeyID");

            //string GUID = ConfigurationManager.AppSettings.Get("GUID");
            //var IAM_WS = new IAM_Ref.IAMLoginClient("BasicHttpsBinding_IIAMLogin");

            //var results = IAM_WS.IAM_LOGIN_INFO(ConfigurationManager.AppSettings.Get("GUID"), IAM_SESSION, IAM_KEYID);

            //if (results.IsSuccessfull == true && results.ErrorCode == "0")
            //{
            //    // Dim json As String = JsonConvert.SerializeObject("تم بنجاح")
            //   // string json = JsonConvert.SerializeObject(results.Contents);

            //  //  Response.Write(json);
            //}
            //else
            //{
            //  //  string json = JsonConvert.SerializeObject(results.Description);
            //  //  Response.Write(json);
            //}

        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;
                bool returnval= false;
                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                {

                    using (var connection = SqlConnections.NewFor<PMMS.Default.Entities.CityRow>())
                    {
                        var GetCurrentStatus = connection.Query<PMMS.Northwind.ItemSelect>("select isnull(email,'-1') as  Id from users where Username='" + request.Username + "'");


                        if (Response.Cookies["TFA"] == null)
                        {
                            addCookied(request.Username, GetCurrentStatus.ToList()[0].Id.ToString());


                        }
                        else
                        {
                            try
                            {

                                if (GetCurrentStatus.ToList()[0].Id.ToString() == "-1")
                                {
                                    returnval = true;
                                     
                                }
                                else
                                {
                                    HttpCookie cookie = Request.Cookies.Get("TFA");

                                    FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(cookie.Value);
                                    var st1 = ticket.UserData.Split(',')[3].ToString();
                                    var st2 = ticket.UserData.Split(',')[1].ToString();
                                    var st3 = ticket.UserData.Split(',')[2].ToString();
                                    if (st1 == st2 && st3 == Authorization.Username)
                                    {

                                    }
                                    else
                                    {
                                        addCookied(request.Username, GetCurrentStatus.ToList()[0].Id.ToString());
                                    }
                                }
                                   
                            }
                            catch (Exception)
                            {
                                if(GetCurrentStatus.ToList()[0].Id.ToString() != "-1")
                                addCookied(request.Username,GetCurrentStatus.ToList()[0].Id.ToString());
                            }
                        }
                 
                  
                    }


                    // HttpCookie cookie = HttpContext.Current.Request.Cookies.Get(FormsAuthentication.FormsCookieName);

                    //FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(cookie.Value);
                    //var userName = ticket.UserData


                    if (returnval == false)
                    {


                        return new ServiceResponse();
                    }
                    else
                    {
                        throw new ValidationError("Please ask the system admin to add email to your account.");

                    }



                 

                }

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        public void addCookied(string name,string email)
        {
            AmtarApp.Modules.Common.Email.EmailCustom mail = new AmtarApp.Modules.Common.Email.EmailCustom();

            Random generator = new Random();
            String r = generator.Next(0, 1000000).ToString("D6");

            FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(
               1,
               "MFACIDE",
               DateTime.Now,
               DateTime.Now.AddMinutes(180),
               false,

               "CODEAUTH," + r + "," + name + ",");
            string encryptedTicket = FormsAuthentication.Encrypt(ticket);
            HttpCookie cookie = new HttpCookie("TFA", encryptedTicket);
            Response.Cookies.Add(cookie);
           // mail.sendEmail(email, email, "<p>Your OTP is :- " + r + "</p>", "منصة راصف - رمز الدخول");
        }
        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            if (ConfigurationManager.AppSettings.Get("EnableSSO") == "1")
            {
                return new RedirectResult("https://services.jeddah.gov.sa/SSO/_iam/IAMLogout.aspx");

            }
            else
            {
                return new RedirectResult("~/");

            }
        }
    }
}