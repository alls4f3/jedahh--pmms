using Serenity;
using Serenity.Extensibility;

namespace PMMS
{
    [NestedLocalTexts]
    public static partial class Texts
    {
        public static class Db
        {
            public static class Administration
            {
                public static class Translation
                {
                    public static LocalText EntityPlural = "Translations";
                    public static LocalText Key = "Local Text Key";
                    public static LocalText SourceLanguage = "Source Language";
                    public static LocalText SourceText = "Effective Translation in Source Language";
                    public static LocalText TargetLanguage = "Target Language";
                    public static LocalText TargetText = "Effective Translation in Target Language";
                    public static LocalText CustomText = "User Translation in Target Language";
                    public static LocalText OverrideConfirmation = "Overwrite user translation with clicked text?";
                    public static LocalText SaveChangesButton = "Save Changes";
                }
            }
        }

        public static class Forms
        {
            public static class Membership
            {
                public static class ChangePassword
                {
                    public static LocalText FormTitle = "تغيير كلمة المرور";//"Change Password";
                    public static LocalText SubmitButton = "تغيير كلمة المرور";// "Change Password";
                    public static LocalText Success = "تم تغيير كلمة المرور بنجاح";//"Your password is changed.";
                }

                public static class ForgotPassword
                {
                    public static LocalText FormInfo = "ادخل الايميل المستخدم عند التسجيل";// "Please enter the e-mail you used to signup.";
                    public static LocalText FormTitle = "نسيت كلمة المرور";// "Forgot My Password";
                    public static LocalText SubmitButton = "استعادة كلمة المرور";// "Reset My Password";
                    public static LocalText Success = "سيتم ارسال قواعد استعادة كلمة المرور على ايميلك";// "An e-mail with password reset instructions is sent to your e-mail address.";
                    public static LocalText BackToLogin = "العودة الى تسجيل الدخول";// "I remember my password";
                }

                public static class ResetPassword
                {
                    public static LocalText EmailSubject = "استعادة كلمة مرورك على راصف";// "Reset Your PMMS Password";
                    public static LocalText FormTitle = "استعادة كلمة المرور";//"Reset Password";
                    public static LocalText SubmitButton = "استعادة كلمة المرور";// "Reset Password";
                    public static LocalText Success = "تم تغيير كلمة مرورك بنجاح ، يمكنك الدخول مجددا";// "Your password is changed. Please login with your new password.";
                    public static LocalText BackToLogin = "أتذكر كلمة المرور الخاصة بى";// "I remember my password. Don't reset it!";
                }

                public static class Login
                {
                    public static LocalText FormTitle = "تسجيل الدخول";// "Sign In";
                    public static LocalText SignInButton = "تسجيل الدخول";// "Sign In";
                    public static LocalText ForgotPassword = "نسيت كلمة المرور";// "Forgot password?";
                    public static LocalText SignUpButton = "تسجيل حساب جديد";//"Register a new account";
                    public static LocalText RememberMe = "تذكرنى";//"Remember Me";
                    public static LocalText OR = "أو";// "OR";
                    public static LocalText FacebookButton = "الدخول بالفيس بوك";//"Sign in using Facebook";
                    public static LocalText GoogleButton = "الدخول بجوجل";// "Sign in using Google+";
                }

                public static class SignUp
                {
                    public static LocalText ActivateEmailSubject = "تنشيط الحساب";//"Activate Your PMMS Account";
                    public static LocalText ActivationCompleteMessage = "تم تنشيط حسابك";// "Your account is now activated. " +   "Use the e-mail and password you used while signing up to login.";
                    public static LocalText FormInfo = "يرجي ادخال المعلومات ادناه بشكل صحيح للتسجبل فى التطبيق والبدء فى الاستفادة من خدمات التطبيق";
                    public static LocalText FormTitle = "التسجيل بموقع راصف";// "Sign up for PMMS";
                    public static LocalText SubmitButton = "سجل الان";// "Sign Up";
                    public static LocalText Success = "تم ارسال قواعد تنشيط الحساب على الايميل ، الرجاء الاطلاع عليها";// "An e-mail with instructions to active your account is " + "sent to your e-mail address. Please check your e-mails.";

                    public static LocalText DisplayName = "الاسم بالكامل";//"Full Name";
                    public static LocalText Email = "الايميل";//"E-mail";
                    public static LocalText ConfirmEmail = "تاكيد الايميل";//"Confirm Email";
                    public static LocalText Password = "كلمة المرور";// "Password";
                    public static LocalText ConfirmPassword = "تأكيد كلمة المرور";// "Confirm Password";

                    public static LocalText AcceptTerms = "موافق على كل الشروط";
                    public static LocalText BackToLogin = "بالفعل لدي حساب - تسجيل الدخول";
                }
            }
        }

        public static class Navigation
        {
            public static LocalText LogoutLink = "خروج";// "Logout";
            public static LocalText SiteTitle = "PMMS platform";
        }

        public static class Site
        {
            public static class AccessDenied
            {
                public static LocalText PageTitle = "ليس لديك صلاحية";//"Unauthorized Access";
                public static LocalText LackPermissions = "ليس لديك صلاحية على هذه الصفحة";// "You don't have required permissions to access this page!";
                public static LocalText NotLoggedIn = "يجب تسجيل الدخول لفتح هذه الصفحة";// "You need to be logged in to access this page!";
                public static LocalText ClickToChangeUser = "click here to login with another user...";
                public static LocalText ClickToLogin = "اضغط هنا لاعادة الدخول للصفحة";// "clik here to return to login page...";
            }

            public static class Dashboard
            {
                public static LocalText ContentDescription =
                    " System overview";

                public static LocalText SchedulerDescription =
                  "جدول المهام";// " Scheduler overview";

                public static LocalText DashboardDescriptionContent =
                   "لوحة التحكم";// " Dashboard overview";

                public static LocalText DashboardDescription =
                 "لوحة التحكم";// " Dashboard overview";

                public static LocalText DashboardCategoryDescription =
                 "تصنيفات لوحة التحكم";// " Dashboard Category overview";


                public static LocalText DashboardUsersDescription =
               "لوحة التحكم المستخدمين";// " Dashboard Users overview";
            }

            public static class BasicProgressDialog
            {
                public static LocalText CancelTitle = "Operation cancelled. Waiting for in progress calls to complete...";
                public static LocalText PleaseWait = "رجاء الانتظار";// "Please wait...";
            }

            public static class BulkServiceAction
            {
                public static LocalText AllHadErrorsFormat = "All {0} record(s) that are processed had errors!";
                public static LocalText AllSuccessFormat = "Finished processing on {0} record(s) with success.";
                public static LocalText ConfirmationFormat = "Perform this operation on {0} selected record(s)?";
                public static LocalText ErrorCount = "{0} error(s)";
                public static LocalText NothingToProcess = "Please select some records to process!";
                public static LocalText SomeHadErrorsFormat = "Finished processing on {0} record(s) with success. {1} record(s) had errors!";
                public static LocalText SuccessCount = "{0} done";
            }

            public static class UserDialog
            {
                public static LocalText EditPermissionsButton = "تعديل الصلاحيات";// "Edit Permissions";
                public static LocalText EditRolesButton = "تعديل الادوار";//"Edit Roles";
            }

            public static class UserRoleDialog
            {
                public static LocalText DialogTitle = "Edit User Roles ({0})";
                public static LocalText SaveSuccess = " تحديث صلاحيات المستخدم";//"Updated user roles.";
            }

            public static class UserPermissionDialog
            {
                public static LocalText DialogTitle = "Edit User Permissions ({0})";
                public static LocalText SaveSuccess = " تحديث صلاحيات المستخدم";//"Updated user permissions.";
                public static LocalText Permission = "صلاحيات";// "Permission";
                public static LocalText Grant = "Grant";
                public static LocalText Revoke = "Revoke";
            }

            public static class RolePermissionDialog
            {
                public static LocalText EditButton = "تعديل الصلاحيات";// "Edit Permissions";
                public static LocalText DialogTitle = "Edit Role Permissions ({0})";
                public static LocalText SaveSuccess = " تحديث أدوار صلاحيات المستخدم";//"Updated role permissions.";
            }

            public static class Layout
            {
                public static LocalText FooterCopyright = "";
                public static LocalText FooterInfo = "";
                public static LocalText FooterRights = "All rights reserved.";
                public static LocalText GeneralSettings = "General Settings";
                public static LocalText Language = "Language";
                public static LocalText Theme = "Theme";
                public static LocalText Fonts = "Fonts";
                public static LocalText ThemeBlack = "Black";
                public static LocalText ThemeBlackLight = "Black Light";
                public static LocalText ThemeBlue = "Blue";
                public static LocalText ThemeBlueLight = "Blue Light";
                public static LocalText ThemeGreen = "Green";
                public static LocalText ThemeGreenLight = "Green Light";
                public static LocalText ThemePurple = "Purple";
                public static LocalText ThemePurpleLight = "Purple Light";
                public static LocalText ThemeRed = "Red";
                public static LocalText ThemeRedLight = "Red Light";
                public static LocalText ThemeYellow = "Yellow";
                public static LocalText ThemeYellowLight = "Yellow Light";
            }

            public static class ValidationError
            {
                public static LocalText Title = "ERROR";
            }
        }

        public static partial class Validation
        {
            public static LocalText AuthenticationError = "Invalid username or password!";
            public static LocalText MobileError = "يرجي ادخال الجوال بشكل سليم";
            public static LocalText NumberError = "رقم الهوية او السجل يجب ان يكون مكون من 10 ارقام";
            public static LocalText CurrentPasswordMismatch = "Your current password is not valid!";
            public static LocalText MinRequiredPasswordLength = "Entered password doesn't have enough characters (min {0})!";
            public static LocalText InvalidResetToken = "Your token to reset your password is invalid or has expired!";
            public static LocalText InvalidActivateToken = "Your token to activate your account is invalid or has expired!";
            public static LocalText CantFindUserWithEmail = "Can't find a user with that e-mail adress!";
            public static LocalText EmailInUse = "Another user with this e-mail exists!";
            public static LocalText EmailNotMatch = "عزيزى المستفيد ؛ رقم الهوية الخاص بك مسجلة لدينا ؛ ولكن البريد الالكتروني المسجل غير مطابق للبريد الذى قمت بادخاله ؛ يرجي مرجعة الدعم الفنى لمعرفة البريد المسجل لدينا";
            public static LocalText IdNotMatch = "عزيزى المستفيد ؛ البريد الالكتروني الخاص بك مسجلة لدينا ؛ ولكن برقم هوية غير مطابقة للذى لقمت بادخالها ؛ يرجي مراجعة الدعم الفنى لمعرفة الهوية المسجلة لدينا ";
            public static LocalText EmailConfirm = "Emails entered doesn't match!";
            public static LocalText DeleteForeignKeyError = "Can't delete record. '{0}' table has " +
                "records that depends on this one!";
            public static LocalText SavePrimaryKeyError = "Can't save record. There is another record with the same {1} value!";
        }
    }
}