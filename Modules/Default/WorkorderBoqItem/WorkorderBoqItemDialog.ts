
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderBoqItemDialog extends Common.GridEditorDialog<WorkorderBoqItemRow> {
        protected getFormKey() { return WorkorderBoqItemForm.formKey; }
      /*  protected getIdProperty() { return WorkorderBoqItemRow.idProperty; }*/
        protected getLocalTextPrefix() { return WorkorderBoqItemRow.localTextPrefix; }
        protected getNameProperty() { return WorkorderBoqItemRow.nameProperty; }
        protected getService() { return WorkorderBoqItemService.baseUrl; }
        protected getDeletePermission() { return WorkorderBoqItemRow.insertPermission; }

        protected form: WorkorderBoqItemForm;
        public categoryID: number;

        constructor() {
            super();

            this.form = new WorkorderBoqItemForm(this.idPrefix);


          if (this.isEditMode()) {


            } else {
                var myform = this.form;
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getContractItem",
                    data: {
                        id: $("#protem").val(),


                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {

                        let dropdown = $('#itemBqSelect');


                        dropdown.empty();



                        dropdown.append('<option selected="true" disabled>Select Area</option>');
                        dropdown.prop('selectedIndex', 0);


                        $.each(result, function (key, entry) {
                            dropdown.append($('<option></option>').attr('value', entry.Name).text(entry.id));
                        })

                        dropdown.change(function () {

                            myform.ItmDesc.value = $("#itemBqSelect option:selected").text();
                            var nameArr = dropdown.val().split(',');
                            myform.ItmCode.value = nameArr[0];
                            myform.ItmSeq.value = nameArr[1];
                            myform.REMAINDER.value = nameArr[2];
                            myform.Qty.value = nameArr[3];
                            myform.Prev_EXEC_QTY.value = nameArr[4];
                            myform.Unit.value = nameArr[5];


                        /*  alert(  $("#protem").val());*/

                        })

                        if (myform.ItmDesc.value != "") {
                           

                            $("#itemBqSelect option:contains(" + myform.ItmDesc.value + ")").attr('selected', 'selected');
                        }

                      

                    },
                    error: function (response) {

                        console.log(response);
                    }
                });
            }

        }
      
      

    }
}