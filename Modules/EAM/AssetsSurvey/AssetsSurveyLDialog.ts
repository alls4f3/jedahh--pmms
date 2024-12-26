
namespace PMMS.EAM {

    @Serenity.Decorators.panel()
    export class AssetsSurveyLDialog extends PMMS.EAM.AssetsSurveyDialog {
        constructor() {
            super();
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();

        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
        }
    }
}