
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class AssetsGrid extends Serenity.EntityGrid<AssetsRow, any> {
        protected getColumnsKey() { return 'EAM.Assets'; }
        protected getDialogType() { return AssetsDialog; }
        protected getIdProperty() { return AssetsRow.idProperty; }
        protected getInsertPermission() { return AssetsRow.insertPermission; }



    


        getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.rowHeight = 36;
            opt.headerRowHeight = 136;
            opt.groupingPanel = true;
            return opt;
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(PMMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'EAM/Assets/ListExcel',
                separator: true
            },

            ));


         


           
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