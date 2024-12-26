
namespace PMMS.EAM {
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

    @Serenity.Decorators.registerClass()
    export class AssetClassGrid extends Serenity.EntityGrid<AssetClassRow, any> {
        protected getColumnsKey() { return 'EAM.AssetClass'; }
        protected getDialogType() { return AssetClassDialog; }
        protected getIdProperty() { return AssetClassRow.idProperty; }
        protected getInsertPermission() { return AssetClassRow.insertPermission; }

        private treeMixin: Serenity.TreeGridMixin<AssetClassRow>;

        constructor(container: JQuery) {
            super(container);

            this.treeMixin = new Serenity.TreeGridMixin({
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => false,
                // which column to place tree toggle / expand/collapse button
                toggleField: AssetClassRow.Fields.ItemId,
                getParentId: x => {
                    return x.ParentId;
                }
            });
        }

        protected usePager() {
            return false;
        }
    }
}