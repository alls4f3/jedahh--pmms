
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class WorkOrderGrid extends Serenity.EntityGrid<WorkOrderRow, any> {
        protected getColumnsKey() { return 'Default.WorkOrder'; }
        protected getDialogType() { return WorkOrderDialog; }
        protected getIdProperty() { return WorkOrderRow.idProperty; }
        protected getInsertPermission() { return WorkOrderRow.insertPermission; }


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

      

        protected getItemCssClass(item: WorkOrderRow, index: number): string {   //index row
            let klass: string = "";

            if (item.Status == "Inpogress")
                klass += " InpogressCls";
            else if (item.Status == "Done.Approved")
                klass += " DoneClsApproved";
            else if (item.Status == "Done.Reject")
                klass += " DoneClsReject";
           

            return Q.trimToNull(klass);
        }




        protected getButtons() {
            var buttons = super.getButtons();


          
            var btnSave = Q.first(buttons, x => x.cssClass == "add-button");
            btnSave.visible = false;
            //btnSave.disabled = false;
      
            $.ajax({
                type: "GET",
                url: "/sysapi/IsUserHasAccessToWF",
                data: {

                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                 
                    if (result == "1") {
                        $(".add-button").show();
                    }
                


                },

            });

         
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
    }
}