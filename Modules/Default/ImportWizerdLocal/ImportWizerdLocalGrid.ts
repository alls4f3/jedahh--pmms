
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class ImportWizerdLocalGrid extends Serenity.EntityGrid<ImportWizerdLocalRow, any> {
        protected getColumnsKey() { return 'Default.ImportWizerdLocal'; }
        protected getDialogType() { return ImportWizerdLocalDialog; }
        protected getIdProperty() { return ImportWizerdLocalRow.idProperty; }
        protected getInsertPermission() { return ImportWizerdLocalRow.insertPermission; }

        getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.rowHeight = 36;
            opt.headerRowHeight = 136;
            opt.groupingPanel = true;
            return opt;
        }

        getButtons() {
            var buttons = super.getButtons();








            return buttons;
        }



        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            this.slickGrid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            var groupingMixin = new Serenity.DraggableGroupingMixin({
                grid: this
            });

            new Serenity.FavoriteViewsMixin({
                grid: this
            });
        }


        protected markupReady() {
            super.markupReady();

            // expanding all level 0 (Country) and level 1 (City) groups initially
            //this.view.expandAllGroups(0);
            //this.view.expandAllGroups(1);
        }




        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        constructor(container: JQuery) {

            super(container);
            new Serenity.HeaderFiltersMixin({
                grid: this
            });

        }


    }
}