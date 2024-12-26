
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AssetsDialog extends Serenity.EntityDialog<AssetsRow, any> {
        protected getFormKey() { return AssetsForm.formKey; }
        protected getIdProperty() { return AssetsRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsRow.localTextPrefix; }
        protected getNameProperty() { return AssetsRow.nameProperty; }
        protected getService() { return AssetsService.baseUrl; }
        protected getDeletePermission() { return AssetsRow.insertPermission; }


        protected form = new AssetsForm(this.idPrefix);




        constructor() {
            super();



        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {

                $('#sridsample').hide();
                $('#sample_section_save').hide();

             

            }
            else {
            
              


             
             
                var myDialogAsPanel2;
                $('#samplesSelect').change(function () {
                    $('#sridsample').empty();
                    myDialogAsPanel2 = new PMMS.EAM.AssetsSurveyLDialog();
                    myDialogAsPanel2.load($('#samplesSelect').val(), function () {
                        myDialogAsPanel2.element.removeClass('hidden').appendTo('#sridsample');
                        myDialogAsPanel2.arrange();
                    })

                })
            
            }

        }


        protected btnMapping() {
            var frm = this.entityId;
            $('#sample_section_save').click(function () {


              
                    try {
                        $.ajax({
                            beforeSend: function () { Q.blockUI(null); }, complete: function () { Q.blockUndo(); },
                            type: "GET",
                            url: "/Services/EAM/Assets/AddSample",
                            data: {
                                itemId: frm,

                            },
                            contentType: 'application/json',
                            success: function (result) {

                                if (result != "0") {
                                    Q.notifySuccess("Sample " + result + " Added successfully!")
                                    $.ajax({
                                        type: "GET",
                                        url: "/Services/EAM/Assets/GetDistress",
                                        data: {
                                            itemId: frm,
                                        },
                                        success: function (x) {


                                            var dropSampleID = $('#samplesSelect');

                                            dropSampleID.empty();

                                            dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                                            dropSampleID.prop('selectedIndex', 0);


                                            $.each(x, function (key, entry) {
                                                dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                                            })


                                         
                                        }
                                    });



                                } else {
                                    Q.warning("Please add the Assets details first!")

                                }



                            }

                        })

                    } catch (e) {
                        alert(e);
                    }
                

            });




            $('#sample_Object_delete').click(function () {


              
                    try {

                        Q.confirm(
                            "Are you sure you want to delete Sample ID ?)",
                            () => {

                                $.ajax({
                                    beforeSend: function () { Q.blockUI(null); }, complete: function () { Q.blockUndo(); },
                                    type: "GET",
                                    url: "/Services/EAM/Assets/DeleteSample",
                                    data: {
                                        ItemId: $('#samplesSelect').val()
                                     


                                    },
                                    contentType: 'application/json',
                                    success: function (result) {

                                        if (result == "done") {
                                            Q.notifySuccess("Sample " + "" + " deleted successfully!")
                                          

                                            $.ajax({
                                                type: "GET",
                                                url: "/Services/EAM/Assets/GetDistress",
                                                data: {
                                                    itemId: frm,
                                                },
                                                success: function (x) {


                                                    var dropSampleID = $('#samplesSelect');

                                                    dropSampleID.empty();

                                                    dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                                                    dropSampleID.prop('selectedIndex', 0);


                                                    $.each(x, function (key, entry) {
                                                        dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                                                    })


                                                    $('#sridsample').empty();
                                                }
                                            });



                                        } else {
                                            Q.warning("can not find the sample !")

                                        }



                                    }

                                })

                            },
                            {
                                onNo: () => {

                                },
                                onCancel: () => {

                                },
                                dialogClass: 's-MessageDialog s-WarningDialog'
                            });





                    } catch (e) {
                 
                }

            });

        }

        protected getDrops() {
            var frm = this.entityId;
            var myform = this.form;

            $.ajax({
                type: "GET",
                url: "/Services/EAM/Assets/GetDistress",
                data: {
                    itemId: frm,
                },
                success: function (x) {


                    var dropSampleID = $('#samplesSelect');

                    dropSampleID.empty();

                    dropSampleID.append('<option selected="true" disabled>Select Sample</option>');
                    dropSampleID.prop('selectedIndex', 0);


                    $.each(x, function (key, entry) {
                        dropSampleID.append($('<option></option>').attr('value', entry.SAMPLE_id).text(entry.SAMPLE_NO));
                    })



                }
            });









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
                    let dropdownRoadID = $('#RoadID');
                    let dropdownSectionID = $('#SectionID');

                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();
                    dropdownRoadID.empty();
                    dropdownSectionID.empty();


                    dropdown.append('<option selected="true" disabled>Select Area</option>');
                    dropdown.prop('selectedIndex', 0);


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })

                   



                    $("#citySelect").change(function () {
                        myform.AssetCity.value = $("#citySelect").val();
                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getZone",
                            data: { id: $("#citySelect").val() },
                            success: function (t) {



                                dropdownzone.empty();
                                dropdownarea.empty();
                                dropdownRoadID.empty();
                                dropdownSectionID.empty();
                                dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                dropdownzone.prop('selectedIndex', 0);

                                $.each(t, function (key, entry) {
                                    dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })

                             

                            }
                        });

                    })



                    $("#zoneSelect").change(function () {
                        myform.AssetZone.value = $("#zoneSelect").val();

                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getAreas",
                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                            success: function (x) {
                                dropdownarea.empty();
                                dropdownRoadID.empty();
                                dropdownSectionID.empty();
                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                dropdownarea.prop('selectedIndex', 0);

                                //  myform.ZoneNo.value = $("#zoneSelect").val();



                                $.each(x, function (key, entry) {
                                    dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })
                                
                            }
                        });

                    })


                    $("#area").change(function () {
                        myform.AssetsAreaId.value = $("#area").val();

                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getRoad",
                            data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                            success: function (x) {

                                dropdownRoadID.empty();
                                dropdownSectionID.empty();
                                dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                dropdownRoadID.prop('selectedIndex', 0);

                                //  myform.ZoneNo.value = $("#zoneSelect").val();


                                $.each(x, function (key, entry) {
                                    dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })


                               

                            }
                        });




                    })



                    $("#RoadID").change(function () {
                        myform.AssetRoad.value = $("#RoadID").val();

                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getSectionId",
                            data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                            success: function (x) {



                                dropdownSectionID.empty();
                                dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                dropdownSectionID.prop('selectedIndex', 0);






                                $.each(x, function (key, entry) {
                                    dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })


                               
                            }
                        });
                    })

                    $("#SectionID").change(function () {
                        myform.AssetSection.value = $("#SectionID").val();


                    })





                   



                },
                error: function (response) {

                    console.log(response);
                }
            });

        }



        protected setDrops() {

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
                    let dropdownRoadID = $('#RoadID');
                    let dropdownSectionID = $('#SectionID');

                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();
                    dropdownRoadID.empty();
                    dropdownSectionID.empty();


                    dropdown.append('<option selected="true" disabled>Select Area</option>');
                    dropdown.prop('selectedIndex', 0);


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })

                  
                     
                        if (myform.AssetCity.value != "") {
                            $("#citySelect").val(myform.AssetCity.value);
                         
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getZone",
                                data: { id: $("#citySelect").val() },
                                success: function (t) {



                                    dropdownzone.empty();
                                    dropdownarea.empty();
                                    dropdownRoadID.empty();
                                    dropdownSectionID.empty();
                                    dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                    dropdownzone.prop('selectedIndex', 0);

                                    $.each(t, function (key, entry) {
                                        dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                    })

                                 
                                   
                                        if (myform.AssetZone.value != "") {
                                            $("#zoneSelect").val(myform.AssetZone.value);
                                            /*  $("#citySelect").trigger('change');*/


                                            $.ajax({
                                                type: "GET",
                                                url: "/sysapi/getAreas",
                                                data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                                success: function (x) {
                                                    dropdownarea.empty();
                                                    dropdownRoadID.empty();
                                                    dropdownSectionID.empty();
                                                    dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                                    dropdownarea.prop('selectedIndex', 0);

                                                    //  myform.ZoneNo.value = $("#zoneSelect").val();



                                                    $.each(x, function (key, entry) {
                                                        dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                    })
                                                    if (myform.AssetsAreaId.value != "") {
                                                        dropdownarea.val(myform.AssetsAreaId.value)


                                                        $.ajax({
                                                            type: "GET",
                                                            url: "/sysapi/getRoad",
                                                            data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                                            success: function (x) {

                                                                dropdownRoadID.empty();
                                                                dropdownSectionID.empty();
                                                                dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                                                dropdownRoadID.prop('selectedIndex', 0);

                                                                //  myform.ZoneNo.value = $("#zoneSelect").val();


                                                                $.each(x, function (key, entry) {
                                                                    dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                })


                                                                if (myform.AssetRoad.value != "") {
                                                                    dropdownRoadID.val(myform.AssetRoad.value)

                                                                    $.ajax({
                                                                        type: "GET",
                                                                        url: "/sysapi/getSectionId",
                                                                        data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                                                        success: function (x) {



                                                                            dropdownSectionID.empty();
                                                                            dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                                                            dropdownSectionID.prop('selectedIndex', 0);






                                                                            $.each(x, function (key, entry) {
                                                                                dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                            })

                                                                            if (myform.AssetSection.value != "") {
                                                                                dropdownSectionID.val(myform.AssetSection.value)



                                                                            }

                                                                        }
                                                                    });
                                                                }

                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    

                                }
                            });


                        }
                    


                },
                error: function (response) {

                    console.log(response);
                }
            });

        }


        protected setDropClass()

        {

          
         
        }
    }
}