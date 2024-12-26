
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class ImportWizerdDataGrid extends Serenity.EntityGrid<ImportWizerdDataRow, any> {
        protected getColumnsKey() { return 'Default.ImportWizerdData'; }
        protected getDialogType() { return ImportWizerdDataDialog; }
        protected getIdProperty() { return ImportWizerdDataRow.idProperty; }
        protected getInsertPermission() { return ImportWizerdDataRow.insertPermission; }



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