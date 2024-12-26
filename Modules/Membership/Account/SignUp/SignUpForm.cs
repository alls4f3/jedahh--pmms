
namespace PMMS.Membership
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("الاسم بالكامل")]
        public String DisplayName { get; set; }
        [Required(true), Placeholder("رقم الهوية او السجل"),MaxLength(10)]
        public Int32? IqamaID { get; set; }

        [Required(true), Placeholder("رقم الجوال ؛ مثال 501234567"), MaxLength(10)]
        public Int32? MobileNumber { get; set; }

      

        [EmailEditor, Required(true), Placeholder("البريد الالكتروني")]
        public String Email { get; set; }
        [EmailEditor, Required(true), Placeholder("تاكيد البريد الالكتروني")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("كلمة المرور")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("تاكيد كلمة المرور")]
        public String ConfirmPassword { get; set; }
    }
}
