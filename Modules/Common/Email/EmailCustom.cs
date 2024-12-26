using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Configuration;
using System.Net.Mail;
using System.Web;
using System.Web.Configuration;

namespace AmtarApp.Modules.Common.Email
{
    public class EmailCustom
    {
        public enum LanguageSmtp { Arabic, English };
        public enum Emails
        {

            Rasef=0,
            Test=1

        }


        public class SmtpClientAmana : System.Net.Mail.SmtpClient //, System.IDisposable
        {

            private string EmailRasef
            {
                get { return "Rasef@jeddah.gov.sa"; }
            }


            public MailAddress RasefEnglishFromAddress
            {
                get { return new MailAddress(EmailRasef, "Rasef system jeddah Municipality"); }
            }
            public MailAddress RasefiArabicFromAddress
            {
                get { return new MailAddress(EmailRasef, "نظام راصف امانة جدة"); }
            }
            public SmtpClientAmana(string SendEmails)
            {


//                base.Host = "smtp.jeddah.gov.sa";
  //              base.Port = 25;
                //base.EnableSsl = true;

                switch (SendEmails)
                {
                    case "1":
                        {

                            base.Host = "smtp.jeddah.gov.sa";
                            base.Port = 25;
                            base.Credentials = new System.Net.NetworkCredential("Rasef", "657485@F"); break;
                        }

                    case "0":
                        {
                            SmtpSection smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
                            base.EnableSsl = smtpSection.Network.EnableSsl;
                            base.Host = smtpSection.Network.Host;
                            base.Port = smtpSection.Network.Port;
                            base.Credentials = new System.Net.NetworkCredential(smtpSection.Network.UserName, smtpSection.Network.Password); break;
                        }
                    default:
                        break;
                }

            }


        }


        public void sendEmail(string to, string cc,string body,string subject) {

            if (!string.IsNullOrEmpty(to))
            {
                try
                {
                    SmtpClientAmana smtpClient = new SmtpClientAmana(WebConfigurationManager.AppSettings["EmailUsed"]);
                    System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage();

                    //message.From = smtpClient.RasefiArabicFromAddress;
                    message.Subject = subject;
                    message.To.Add(to);
                    message.CC.Add(cc);
                    //message.Bcc.Add(bcc);
                    // message.Bcc.Add("aalshatibi@jeddah.gov.sa");
                    message.IsBodyHtml = true;
                    message.Body = body;
                    smtpClient.Send(message);
                    message.Dispose();
                    smtpClient.Dispose();
                    GC.Collect();
                }
                catch (Exception)
                {

                   
                }
              

            }


        }

    }
}