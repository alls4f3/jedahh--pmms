/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderBoqItemEditor extends Common.GridEditorBase<WorkorderBoqItemRow> {


        protected getColumnsKey() { return "Default.WorkorderBoqItem"; }
        protected getDialogType() { return WorkorderBoqItemDialog; }
        protected getLocalTextPrefix() { return WorkorderBoqItemRow.localTextPrefix; }
       


        constructor(container: JQuery) {
            super(container);

            new Serenity.HeaderFiltersMixin({
                grid: this
            });
        }



        getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.rowHeight = 36;
            opt.headerRowHeight = 136;
            opt.groupingPanel = true;
            return opt;
        }



      
        validateEntity(row, id) {
          //  row.AttrId = Q.toId(row.AttrId);
           // console.log($("#itemBqSelect").val());
            if ($("#itemBqSelect").val() == "" || $("#itemBqSelect").val() == "0" || $("#itemBqSelect").val() == null) {

                Q.alert('please select the item ');
                return false;
            }

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ItmDesc === row.ItmDesc);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This item is already register!');
                return false;
            }

            /* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/

            return true;

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
     
    }
}