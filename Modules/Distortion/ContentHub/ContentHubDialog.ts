
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class ContentHubDialog extends Serenity.EntityDialog<ContentHubRow, any> {
        protected getFormKey() { return ContentHubForm.formKey; }
        protected getIdProperty() { return ContentHubRow.idProperty; }
        protected getLocalTextPrefix() { return ContentHubRow.localTextPrefix; }
        protected getNameProperty() { return ContentHubRow.nameProperty; }
        protected getService() { return ContentHubService.baseUrl; }
        protected getDeletePermission() { return ContentHubRow.insertPermission; }
        protected form = new ContentHubForm(this.idPrefix);



        getToolbarButtons() {
            var buttons = super.getToolbarButtons();





            var btnSave = Q.first(buttons, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(buttons, x => x.cssClass == "apply-changes-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;




            btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            btnApply.onClick = e => { this.confirmBeforeSave( oldApplyClick, e); };


            return buttons;
        }





        private confirmBeforeSave(oldEvt, e) {
            var mm = this.form;
           
            if (navigator.geolocation) {


                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (p) {

                        mm.ImageLat.value = p.coords.latitude.toString();
                        mm.ImageLong.value = p.coords.longitude.toString();
                        oldEvt(e);
                    }, function () {
                        alert("Cannot get the location")
                        return false;
                    });
                } else {
                   
                }
            } else {
               
            }


          
        }

    }
}