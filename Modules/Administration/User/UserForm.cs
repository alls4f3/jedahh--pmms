namespace PMMS.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {

        [Category("Basic Information")]

        public String Username { get; set; }
     
        public String DisplayName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserMobile { get; set; }
        public String SSO { get; set; }
        
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }

        
        [Category("Workflow Setting")]
        [DisplayName("User Type")]
        public Int32 WorkFlowUserType { get; set; }
        [DisplayName("Location")]
        public string WorkFlowDirection { get; set; }

        [DisplayName("Department")]
        public string DepartmentId { get; set; }

        //public string UserGroup { get; set; }

        

    }
}