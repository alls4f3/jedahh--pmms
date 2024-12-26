
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class RoadsDialog extends Serenity.EntityDialog<RoadsRow, any> {
        protected getFormKey() { return RoadsForm.formKey; }
        protected getIdProperty() { return RoadsRow.idProperty; }
        protected getLocalTextPrefix() { return RoadsRow.localTextPrefix; }
        protected getNameProperty() { return RoadsRow.nameProperty; }
        protected getService() { return RoadsService.baseUrl; }
        protected getDeletePermission() { return RoadsRow.insertPermission; }

        protected form = new RoadsForm(this.idPrefix);

        constructor() {
            super();
          
           // alert(console.log(this.byId("CityNo")));
        
            //this.form.AreaNo.getGridField().toggle(false);
            //this.form.CityNo.getGridField().toggle(false);
            //this.form.ZoneNo.getGridField().toggle(false);
           

          
            //$("#area").select2();
            //$("#area").change(function () {

            //    alert(1);
            //})

            //this.form.ZoneNo.changeSelect2(e => {

            //    alert(1);
            //    Q.notifySuccess("You selected item with key: " + this.form.ZoneNo.value);
            //});
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();

            var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;

            btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };

            return btns;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {


              //  this.getDrops();

            }
            else {
               // this.setDrops();
            }
        }


        private confirmBeforeSave(oldEvt, e) {
          
            //if ($("#area").val() > 0 && $("#zoneSelect").val() > 0 && $("#citySelect").val() > 0) {
            //    oldEvt(e);
            //    return true;
            //} else {
            //    Q.alert("please select City ,Zone and area");

            //}

                  oldEvt(e);
                return true;
        }


        protected getDrops() {
            var myform = this.form;
            $.ajax({
                type: "GET",
                url: "/sysapi/getcity",
                data: {
                  //  OID: orderid,


                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                  
                    let dropdown = $('#citySelect');
                    let dropdownzone = $('#zoneSelect');
                    let dropdownarea = $('#area');

                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();


                    dropdown.append('<option selected="true" disabled>Select Area</option>');
                    dropdown.prop('selectedIndex', 0);


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })


                    $("#citySelect").change(function () {
                         $.ajax({
                             type: "GET",
                             url: "/sysapi/getZone",
                             data: { id: $("#citySelect").val()},
                             success: function (t) {
                                 //alert(myform.byId("CityNo").val());
                                
                            
                                 myform.CityNo.value = $("#citySelect").val();

                                 //myform.ZoneNo.set_value(null) 
                                 //myform.AreaNo.set_value(null)

                                // alert(myform.byId("CityNo").val());



                                 dropdownzone.empty();
                                 dropdownarea.empty();
                                 dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                 dropdownzone.prop('selectedIndex', 0);

                                 $.each(t, function (key, entry) {
                                     dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                 })

                             }
                         });
                
                    })



                    $("#zoneSelect").change(function () {
                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getAreas",
                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                            success: function (x) {
                                dropdownarea.empty();
                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                dropdownarea.prop('selectedIndex', 0);
                         
                                myform.ZoneNo.value = $("#zoneSelect").val();

                          
                             
                                $.each(x, function (key, entry) {
                                    dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })

                            }
                        });

                    })


                    $("#area").change(function () {
                       

                  
                       

                        myform.AreaNo.value = $("#area").val();
                    })

                },
                error: function (response) {

                    console.log(response);
                }
            });

        }


        protected setDrops() {
            Q.blockUI(null);
            var allitem = this;
            var myform = this.form;
            $.ajax({
                type: "GET",
                url: "/sysapi/getcity",
                data: {
                    //  OID: orderid,


                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {

                    let dropdown = $('#citySelect');
                    let dropdownzone = $('#zoneSelect');
                    let dropdownarea = $('#area');

                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();


                    dropdown.append('<option selected="true" disabled>Select Area</option>');


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })

                    dropdown.prop('selectedIndex', myform.CityNo.value);

                   
                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getZone",
                            data: { id: $("#citySelect").val() },
                            success: function (t) {
                               



                                dropdownzone.empty();
                                dropdownarea.empty();
                                dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                        

                                $.each(t, function (key, entry) {
                                    dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })

                                dropdownzone.prop('selectedIndex', myform.ZoneNo.value);



                                $.ajax({
                                    type: "GET",
                                    url: "/sysapi/getAreas",
                                    data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                    success: function (x) {
                                        dropdownarea.empty();
                                        dropdownarea.append('<option selected="true" disabled>Select Area</option>');

                                     



                                        $.each(x, function (key, entry) {
                                            dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                        })

                                        $("#area").val(myform.AreaNo.value);
                                     
                                        allitem.configDrops();
                                        Q.blockUndo();


                                    }
                                });

                            }
                        });

                    





               

                },
                error: function (response) {

                    console.log(response);
                }
            });

        }


        protected configDrops() {
            var myform = this.form;

            let dropdown = $('#citySelect');
            let dropdownzone = $('#zoneSelect');
            let dropdownarea = $('#area');

   
            $("#citySelect").change(function () {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getZone",
                    data: { id: $("#citySelect").val() },
                    success: function (t) {
                     


                        myform.CityNo.value = $("#citySelect").val();

                        dropdownzone.empty();
                        dropdownarea.empty();
                        dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                        dropdownzone.prop('selectedIndex', 0);

                        $.each(t, function (key, entry) {
                            dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        })

                    }
                });

            })



            $("#zoneSelect").change(function () {
                $.ajax({
                    type: "GET",
                    url: "/sysapi/getAreas",
                    data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                    success: function (x) {
                        dropdownarea.empty();
                        dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                        dropdownarea.prop('selectedIndex', 0);

                        myform.ZoneNo.value = $("#zoneSelect").val();



                        $.each(x, function (key, entry) {
                            dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                        })

                    }
                });

            })


            $("#area").change(function () {
                myform.AreaNo.value = $("#area").val();
            })
         

        }

    }
}