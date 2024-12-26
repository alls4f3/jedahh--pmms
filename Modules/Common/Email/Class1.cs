//using PMMS.Administration.Entities;
//using Serenity;
//using Serenity.Abstractions;
//using Serenity.Data;
//using Serenity.Services;
//using Serenity.Web;
//using System;
//using System.Collections.Generic;
//using System.Configuration;
//using System.Net.Mail;
//using System.Threading;
//using MyRepository = Administration.Repositories.QueuedEmailRepository;
//using MyRow = Administration.Entities.QueuedEmailRow;

//public static class EmailThread
//{
//	private static Thread _SendEmailThread = null;
//	public static void StartEmailThread()
//	{
//		if (_SendEmailThread == null)
//		{
//			_SendEmailThread = new Thread(new ThreadStart(SendEmails));
//			_SendEmailThread.Priority = ThreadPriority.Lowest;
//			_SendEmailThread.Start();
//		}
//	}
//	public static void EndEmailThread()
//	{
//		if (_SendEmailThread != null)
//		{
//			_SendEmailThread.Abort();
//		}
//	}

//	private static void SendEmails()
//	{
//		bool enableEmailService = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
//		if (enableEmailService)
//		{

//			while (true)
//			{
//				Thread.Sleep(60000); // 10 sec
//				var connection = SqlConnections.NewFor<MyRow>();
//				var request = new ListRequest();
//				ListResponse<MyRow> rows =
//				new MyRepository().List(connection, request);
//				if (rows.TotalCount == 0)
//					break;

//				foreach (MyRow row in rows.Entities)
//				{
//					try
//					{
//						MailMessage mailMessage = new MailMessage();
//						mailMessage.From = new MailAddress(row.From, row.FromName);
//						foreach (var to in row.To.Split(','))
//							mailMessage.To.Add(new MailAddress(to));
//						if (!string.IsNullOrEmpty(row.Cc))
//							foreach (var cc in row.Cc.Split(','))
//								mailMessage.CC.Add(new MailAddress(cc));
//						if (!string.IsNullOrEmpty(row.Bcc))
//							foreach (var bcc in row.Bcc.Split(','))
//								mailMessage.Bcc.Add(new MailAddress(bcc));
//						mailMessage.Subject = row.Subject;
//						mailMessage.Body = row.Body;
//						mailMessage.IsBodyHtml = true;
//						EmailAccountsRow emailAccount = connection.TryFirst<EmailAccountsRow>(EmailAccountsRow.Fields.Id == (int)row.EmailAccountId.Value);
//						SmtpClient smtp = new SmtpClient
//						{
//							Host = emailAccount.Host,
//							Port = (int)emailAccount.Port,
//							EnableSsl = (bool)emailAccount.EnableSsl,
//							DeliveryMethod = SmtpDeliveryMethod.Network,
//							Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
//							Timeout = 30000,
//						};
//						smtp.Send(mailMessage);
//						row.HasError = false;
//						row.SentTries = 1;
//						row.SentOnUtc = DateTime.UtcNow;
//					}
//					catch (Exception ex)
//					{
//						row.HasError = true;
//						row.Result = ex.Message;
//						row.SentTries = 1;
//					}
//					connection.UpdateById<MyRow>(row);
//				}
//			}
//		}
//	}
//}