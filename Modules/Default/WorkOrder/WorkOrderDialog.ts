
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class WorkOrderDialog extends Serenity.EntityDialog<WorkOrderRow, any> {
        protected getFormKey() { return WorkOrderForm.formKey; }
        protected getIdProperty() { return WorkOrderRow.idProperty; }
        
        protected getLocalTextPrefix() { return WorkOrderRow.localTextPrefix; }
        protected getNameProperty() { return WorkOrderRow.nameProperty; }
        protected getService() { return WorkOrderService.baseUrl; }
        protected getDeletePermission() { return WorkOrderRow.insertPermission; }

        protected form = new WorkOrderForm(this.idPrefix);

        constructor() {
            super();

            this.form.RefId.change(e => {


                let dropdown = $('#protem');


                dropdown.empty();



                dropdown.append('<option selected="true" >val</option>');
                dropdown.prop('selectedIndex', 0);
                dropdown.append($('<option></option>').attr('value', this.form.RefId.value).text(this.form.RefId.value));

                $("#protem").val(this.form.RefId.value);

             
               
                var list = [];
                this.form.WorkorderBoqItem.view.setItems(list,true);
                this.form.WorkorderBoqItem.view.refresh;

             
              
            });


            this.form.WorkorderStartDate.element.addClass("rtl-txtbox")
            this.form.DateOfOrderWork.change(e => {

             
                var start = this.form.DateOfOrderWork.valueAsDate;
                var end = this.form.WorkorderEndDate.valueAsDate;

                // end - start returns difference in milliseconds 
                var diff = new Date(end - start);

                // get days
                var days = diff / 1000 / 60 / 60 / 24;

                if (days > 0)
                    this.form.WorkorderStartDate.value = days + "  يوم من تاريخ استخراج تصاريح العمل من قبل الجهات الخدمية " ;
                else
                    this.form.WorkorderStartDate.value = "";

            })



            this.form.WorkorderEndDate.change(e => {


                var start = this.form.DateOfOrderWork.valueAsDate;
                var end = this.form.WorkorderEndDate.valueAsDate;

                // end - start returns difference in milliseconds 
                var diff = new Date(end - start);

                // get days
                var days = diff / 1000 / 60 / 60 / 24;

                if (days > 0)
                    this.form.WorkorderStartDate.value = days + "  يوم من تاريخ استخراج تصاريح العمل من قبل الجهات الخدمية " ;
                else
                    this.form.WorkorderStartDate.value = "";

            })



            this.form.Remark2.getGridField().toggle(false);
            this.form.Remark3.getGridField().toggle(false);
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
           
           

            
            
            var path = "~/Default/WorkOrder/GetReport?id=";

            buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                title: 'Print',
                icon: "fa-print",
                cssClass: 'export-pdf-button',
                reportKey: this.get_entityId(),
                URL: path,
                
              
            }));



            var btnSave = Q.first(buttons, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(buttons, x => x.cssClass == "apply-changes-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;

            //btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            //btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };



            btnSave.onClick = e => { this.showCustomWarning("Workflow Actions",oldSaveClick, e); };
            btnApply.onClick = e => { this.showCustomWarning("Workflow Actions",oldApplyClick, e); };
            

            return buttons;
        }


        
        private confirmBeforeSave(oldEvt, e) {
           
            var Currents = "";
            if ($("#ActionId").val() == "1") {
                Currents="Approve"
            } else if ($("#ActionId").val() == "2") {
                Currents = "Reject"

            }

             if ($("#ActionId").val() == "3") {
                Currents = "Keep Saving"

            }

            Q.confirm("Are you sure you want to proceed the workflow [" + Currents + "] ?", () => {
                var myform = this.form;
                this.form.Remark2.value = $("#ActionId").val();
                if ($('#RoadID').val().length > 1 && $('#citySelect').val() !='99' ) {

                    myform.WorkorderLane.value = $(".drpLane").val();
                  
                } else {
                    myform.WorkorderLane.value = "";
                    $(".drpLane").each(function () {

                        myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ','

                  


                    });
                }

                console.log(myform.WorkorderLane.value);
           
                oldEvt(e);
                
                return true;

            });
             
            
        }


        private showCustomWarning(title: string, oldEvt, e): JQueryPromise<Object> {

            var all;

            var def = $.Deferred();
            var myform = this.form;
            $(".cntAll").remove("");
           
            $('<div Id="cntAll" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                '<div class="ui-dialog-content ui-widget-content">' +
                '<div class="message">Do you want to continue ?' +
                '<div  class="s-PropertyGrid"><div class="category"><div class="category-title"><a class="category-anchor" name="PMMS_Default_WorkOrderDialog4_Category8">معلومات سير العمل - Workflow Information</a></div><div class="field ActionTemaple"><label class="caption" for="PMMS_Default_WorkOrderDialog4_ActionTemaple" title="الاجراء - Action">الاجراء - Action</label><div class="editor flexify s-StaticTextBlock" ><select id="ActionId" style="width: 100%;" class="valid cntAll" aria-invalid="false"><option value="0" disabled selected hidden>Select the option</option> <option value="1">Approve and forward</option> <option value="2">Reject</option><option value="3">Keep saving</option> </select></div><div class="vx"></div><div class="clear"></div></div><div  style="display: none;"><label class="caption"  title="ملاحظه 2">ملاحظه 2</label><input type="text" class="editor flexify s-StringEditor" wfd-id="id30"><div class="vx"></div><div class="clear"></div></div><div class="field "><label class="caption" for="" title="Comment">الملاحظات - comment </label><textarea id="CommentValues" class="editor flexify s-TextAreaEditor cntAll"   cols="1" rows="4"  style=" width: 100%; height: 137px; "></textarea><div class="vx"></div><div class="clear"></div></div></div> <div class="sigPad">  <ul class="sigNav"> <li class="drawIt"><a href="#draw-it" >التوقيع -  Sign</a></li> <li class="clearButton"><a href="#clear">Clear</a></li> </ul> <div class="sig sigWrapper"> <div class="typed"></div> <canvas class="pad" width="280" height="84"></canvas> <input type="hidden" name="output" class="output"> </div>  </div></div></div></div>').dialog({
                    modal: true,
                    resizable: false,
                    minHeight: 500,
                    minWidth: 400,
                    title: title,
                    draggable: false,
                    open: function () {

                        $(document).ready(function () {
                            $('.sigPad').signaturePad({ drawOnly: true, lineWidth: 0 });
                        });

              
                       

                        //const signaturePad = new SignaturePad(canvas);
                        //var sketchpad = new Sketchpad({
                        //    element: '#sketchpad',
                        //    width: 300,
                        //    penSize: 5,
                        //    height: 200,

                        //});
                        //all = sketchpad;
                        //$("#ssk").click(function () {
                        //    sketchpad.undo();


                        //})

                    },
                    buttons: {

                        Yes: function () {

                            if ($("#ActionId:last").val() == '0' || $("#ActionId:last").val() == '' || $("#ActionId:last").val() == null) {
                                Q.notifyError("please select the Action");

                                myform.Remark2.value = "0";
                                return;
                            }

                            var instance = $('.sigPad').signaturePad();

                            myform.signature.value = instance.getSignatureString() + '##' + instance.getSignatureImage();
                            myform.Remark2.value = $("#ActionId:last").val();
                            myform.Remark3.value = $("#CommentValues:last").val();
                            var Currents = "";
                            if ($("#ActionId:last").val() == "1") {
                                Currents = "Approve"
                            } else if ($("#ActionId").val() == "2") {
                                Currents = "Reject"

                            }

                            if ($("#ActionId:last").val() == "3") {
                                Currents = "Keep Saving"

                            }

                           
                           
                            
                           
                            if ($('#RoadID').val().length > 1 && $('#citySelect').val() != '99') {

                                myform.WorkorderLane.value = $(".drpLane").val();

                            } else {
                                myform.WorkorderLane.value = "";
                                $(".drpLane").each(function () {

                                    myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ','




                                });
                            }
                          //  def.resolve();
                            oldEvt(e);
                            $('.modal').dialog('hide').data('bs.modal', null);

                            $(this).dialog("close");
                        },
                        No: function () {
                           // def.reject();
                            $('.modal').dialog('hide').data('bs.modal', null);
                            //console.log(all.toJSON());
                            //console.log(all.toObject());

                           


                            $(this).dialog("close");
                        }
                    }
                });

          return def.promise();
        }
       
        protected onSaveSuccess(response: Serenity.SaveResponse) {
          
         
            $.ajax({
                type: "GET",
                url: "/sysapi/workOrdercalcById",
                data: {
                    id: response.EntityId
                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {

                },

            });
            Q.notifySuccess("Workflow has been processed Successfully!", "Message")
          

        }
        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.deleteButton.hide();
           
            var bt = this.deleteButton;
          

            var workorderitem = this.entityId;
            if (this.isEditMode()) {
              
                this.SetHafriaTemplate(workorderitem);
                $.ajax({
                    type: "GET",
                    url: "/sysapi/WorkfkowHistory",
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                       
                        var st = ""
                        $.each(result, function (key, value) {


                            st = st
                                + ' <tr style="color:white;">'
                                + ' <td>'
                                + ' <label>' + value.ActionData + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ActionFrom + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.Action + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.username + '</label>'
                                + '</td>'
                                + ' <td>'
                                + '  <label>' + value.Comment + '</label>'
                                + '</td>'
                               + '   </tr>'

                        });

                        $("#bodyWorkflowD3").html(st)
                    },

                });
            } else {
                $("#bodyWorkflowD3").html("");
                $("#bodyWorkflowD333").html("");

            }


         



            $.ajax({
                type: "GET",
                url: "/sysapi/IsUserHasAccessToWF",
                data: {

                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                    if (result == "1") {
                        bt.show()
                      //  bt.removeAttr("disabled");

                    }

                },
              
            });
           

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {

                try {
                    this.form.WorkorderCity.element.closest('.category').toggle(true);
                    $(".LaneTemplate").show();
                    $(".MultiSectionTemplate").hide();

                    this.form.emergency.set_value("0")
                    this.getDrops();

                    this.OpenGisDialog();

                } catch (e) {

                }
              

            }
            else {
                document.getElementById('mapviwerAll').innerHTML = "<div id='mapviwer'></div>";

                try {
                    if (this.form.WorkorderSection.value == "-1") {
                        this.form.WorkorderCity.element.closest('.category').toggle(false);
                        $(".LaneTemplate").hide();
                        $(".MultiSectionTemplate").show();
                        this.SetSectionTemplate(this.entityId);
                        
                        this.GisSetView(this.entityId,"SecDataTemplate");
                        
                    } else {
                        //this.getDrops();
                        //this.setDrops();

                        var allt = this;
                        allt.SetLaneTemplate(allt.entityId);
                        allt.GisSetView(allt.entityId,"LaneDataTemplate");

                        this.form.WorkorderCity.element.closest('.category').toggle(false);
                        $(".MultiSectionTemplate").hide();

                    }
                 
                   // this.element.find('.add-button').hide();
                  


                } catch (e) {

                }
               
            }

        }
        protected SetSectionTemplate(workorderitem) {


            $.ajax({
                type: "GET",
                url: "/sysapi/SecDataTemplate",
                data: {
                    Itemid: workorderitem
                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {

                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th> <th>Area </th><th>Street </th> <th>Section/Street Number </th> <th>Lat </th>  <th>Long </th> </tr> </thead> <tbody id='bodyWorkflowDSection'> </tbody> </table>";
                    var st = "";
                    $("#MultiSectionTemplate").html(st2);

                    $.each(result, function (key, value) {


                        st = st
                            + ' <tr style="color:black;">'
                            + ' <td>'
                            + ' <label>' + value.CityName + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.ZoneName + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.AreaNamew + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.RoadName + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.SecionName + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.lat + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.longt + '</label>'
                            + '</td>'
                           

                            + '   </tr>'

                    });

                    $("#bodyWorkflowDSection").html(st)
                },

            });
        }



        protected OpenGisDialog() {
            var GisURL = "https://webgis.eamana.gov.sa/giswebmapframe/";
            var iframe = '<iframe frameborder="0" marginwidth="0" marginheight="0" allowfullscreen src="' + GisURL +'" Height="499" Width="790"></iframe>';

            $("#Gisbtn").click(function () {


                $('<div class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                    '<div class="">' +
                    '<div class="">' +
                    ''+ iframe+'</div></div></div>').dialog({
                        modal: true,
                        resizable: false,
                        minHeight: 500,
                        minWidth: 800,
                        title: 'GIS Browser',
                        draggable: false,
                        open: function () {

                        },
                        buttons: {

                            Yes: function () {
                                $('.modal').dialog('hide').data('bs.modal', null);
                                $(this).dialog("close");
                            },
                            No: function () {
                                // def.reject();
                                $('.modal').dialog('hide').data('bs.modal', null);
                                //console.log(all.toJSON());
                                //console.log(all.toObject());




                                $(this).dialog("close");
                            }
                        }
                    });

              
            })


           
        }

        protected GisSetView(workorderitem,methodName) {
            $(document).ready(function () {


                const map = L.map('mapviwer').setView([21.492500, 39.177570], 15);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

            

               


                $.ajax({
                    type: "GET",
                    url: "/sysapi/"+ methodName,
                    data: {
                        Itemid: workorderitem
                    },
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (result) {


                        $.each(result, function (key, value) {

                            var mGreen = L.marker([value.lat, value.longt]).bindPopup(value.SectionNumber).addTo(map);
                         
                            
                        });

                      
                    },

                });



                var el = document; // This can be your element on which to trigger the event
                var event = document.createEvent('HTMLEvents');
                event.initEvent('resize', true, false);
                el.dispatchEvent(event);
            });



        }

        protected SetLaneTemplate(workorderitem) {


            $.ajax({
                type: "GET",
                url: "/sysapi/LaneDataTemplate",
                data: {
                    Itemid: workorderitem
                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {

                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th>  <th>Area </th>  <th>Street </th>  <th>Section </th>  <th>Lane </th>  <th>Work Type </th> <th>ID </th> <th>Lat </th><th>Long </th>   </tr> </thead> <tbody id='bodyWorkflowD33'> </tbody> </table>";
                    var st = "";
                    $("#LaneTemplate").html(st2);

                    $.each(result, function (key, value) {


                        st = st
                            + ' <tr style="color:black;">'
                            + ' <td>'
                            + ' <label>' + value.city_name + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.zone_name + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.area_name + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.ROAD_NAME + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.SectionNumber + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.ActionData + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.Action + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.ItemID + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.lat + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.longt + '</label>'
                            + '</td>'
                        
                            + '   </tr>'

                    });

                    $("#bodyWorkflowD33").html(st)
                },

            });
        }


        protected SetHafriaTemplate(workorderitem) {

        
            $.ajax({
                type: "GET",
                url: "/sysapi/HafriaDataTemplate",
                data: {
                    Itemid: workorderitem
                },
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {

                  //  var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>  <th>End date </th>  <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>    <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
                    var st = "";
                    $("#HafriaTemplate").html(st2);

                    $.each(result, function (key, value) {


                        st = st
                            + ' <tr style="color:black;">'
                            + ' <td>'
                            + ' <label>' + value.STATUS_CODE + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.INITIAL_DATE + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.DEPT_NAME + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.DEPT_ID + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.START_ROAD_JOB_DATE + '</label>'
                            + '</td>'
                            + '<td>'
                            + '  <label>' + value.STREET_ID + '</label>'
                            + '</td>'
                            + '   </tr>'

                    });

                    $("#bodyWorkflowD333").html(st)
                },

            });
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
                    let dropdownRoadID = $('#RoadID');
                    let dropdownSectionID = $('#SectionID');
                    var dropFeatureID = $('#FeatureID');
                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();
                    dropdownRoadID.empty();
                    $('#RoadID').multiselect("rebuild");
                    dropdownSectionID.empty();
                    dropFeatureID.empty();
                    dropFeatureID.select2();
                    $("#LaneTemplate").html("");
                    dropdown.append('<option selected="true" disabled>Select Area</option>');
                    dropdown.prop('selectedIndex', 0);


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })





                    $("#citySelect").change(function () {
                        myform.WorkorderCity.value = $("#citySelect").val();
                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getZone",
                            data: { id: $("#citySelect").val() },
                            success: function (t) {



                                dropdownzone.empty();
                                dropdownarea.empty();
                                dropdownRoadID.empty();
                                $('#RoadID').multiselect("rebuild");
                                dropdownSectionID.empty();
                                $("#LaneTemplate").html("");
                                dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                dropdownzone.prop('selectedIndex', 0);

                                $.each(t, function (key, entry) {
                                    dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })



                            }
                        });

                    })



                    $("#zoneSelect").change(function () {
                        myform.WorkorderZone.value = $("#zoneSelect").val();

                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getAreas",
                            data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                            success: function (x) {
                                dropdownarea.empty();
                                dropdownRoadID.empty();
                                $('#RoadID').multiselect("rebuild");
                                dropdownSectionID.empty();
                                $("#LaneTemplate").html("");
                                dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                dropdownarea.prop('selectedIndex', 0);

                                //  myform.ZoneNo.value = $("#zoneSelect").val();



                                $.each(x, function (key, entry) {
                                   
                                 dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })
                                $('#RoadID').multiselect("rebuild");

                            }
                        });

                    })


                    $("#area").change(function () {
                        myform.WorkorderArea.value = $("#area").val();




                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getRoadPCI",
                            data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                            success: function (x) {

                                dropdownRoadID.empty();
                                $('#RoadID').multiselect("rebuild");
                                dropdownSectionID.empty();
                                $("#LaneTemplate").html("");
                                //dropdownRoadID.append('<option  disabled>Select road</option>');
                                //dropdownRoadID.prop('selectedIndex', 0);

                                //  myform.ZoneNo.value = $("#zoneSelect").val();
                             



                                $.each(x, function (key, entry) {

                                    if (entry.itemstatus == "disable" && myform.emergency.get_value() == "0") {
                                        dropdownRoadID.append($('<option rpc="disable" disabled class="rpcd"></option>').attr('value', entry.id).text(entry.Name));

                                    }

                                    else if (entry.itemstatus == "disable" && myform.emergency.get_value() != "0") {
                                        dropdownRoadID.append($('<option rpc="disable"  class="rpcd"></option>').attr('value', entry.id).text(entry.Name));

                                    }
                                    else {
                                        dropdownRoadID.append($('<option rpc="enable" class="rpcE"></option>').attr('value', entry.id).text(entry.Name));

                                    }

                               //     dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })
                               
                                if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                    $("#RoadID").removeAttr("multiple");
                                    

                                    $("#RoadID").multiselect({ multiple: false, maxHeight: true, enableFiltering: true });
                                    $('#RoadID').multiselect("deselectAll");
                                    $('#RoadID').val("");
                                    $('#RoadID').multiselect("refresh");
                                    $('#RoadID').multiselect("rebuild");
                                   

                                        //$("#RoadID").multipleSelect({
                                        //    filter: false,
                                        //    single: true


                                        //});
                                } else {
                                    $("#RoadID").attr("multiple","multiple");
                                   

                                    $("#RoadID", this.el).multiselect({ allSelectedText: 'All', includeSelectAllOption: true, maxHeight: true, multiple: true, includeSelectAllIfMoreThan: 0, enableFiltering: true});
                                    $('#RoadID').multiselect("deselectAll");
                                    $('#RoadID').multiselect("rebuild");
                                    $('#RoadID').val("");
                                    $('#RoadID').multiselect("refresh");

                                        //$("#RoadID").multipleSelect({
                                        //    filter: true,
                                        //    single  : false



                                        //});
                                    }

                               

                            }
                        });




                    })



                    $("#RoadID").change(function () {
                






                        var enable = 1;
                        if ($("#RoadID").attr("multiple") == "multiple"){
                            if ($('#RoadID').val().length != 0 && $('#RoadID').val().length == 1) {
                                enable=1
                            } else {
                                enable=0
                            }
                        } else {
                            enable = 1
                        }
                        // $('#RoadID').val().length != 0 && $('#RoadID').val().length 
                        myform.WorkorderRoad.value = $("#RoadID").val();
                        dropdownSectionID.empty();
                        $("#LaneTemplate").html("");
                        $("#LaneTemplate").html("");
                        if (enable == 1) {
                            $.ajax({
                                type: "GET",
                                url: "/sysapi/getSectionIdPCI",
                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: myform.WorkorderRoad.value },
                                success: function (x) {



                                 
                                    dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                    dropdownSectionID.prop('selectedIndex', 0);



                                    


                                    $.each(x, function (key, entry) {

                                        if (entry.itemstatus == "disable" && myform.emergency.get_value() == "0") {
                                            dropdownSectionID.append($('<option rpc="disable" disabled class="rpcd"></option>').attr('value', entry.id).text(entry.Name));

                                        }
                                        else if (entry.itemstatus == "disable" && myform.emergency.get_value() != "0")
                                        {
                                            dropdownSectionID.append($('<option rpc="disable"  class="rpcd"></option>').attr('value', entry.id).text(entry.Name));

                                        }
                                        else {
                                            dropdownSectionID.append($('<option rpc="enable" class="rpcE"></option>').attr('value', entry.id).text(entry.Name));

                                        }
                                    })



                                }
                            });
                        }

                        if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                            $(".SectionNoTemplate").show();
                        } else {
                            if ($('#RoadID').val().length > 1 && myform.emergency.get_value() == "0") {
                                $("#LaneTemplate").html("");


                                $.ajax({
                                    type: "GET",
                                    url: "/sysapi/GetEmergency",
                                    data: {
                                        //  OID: orderid,


                                    },
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json",
                                    success: function (result) {

                                        var ILaneoptions = "<option value='0'>Do Nothing</option>"


                                        $.each(result, function (key, entry) {
                                            ILaneoptions = ILaneoptions + " <option value='" + entry.id + "'>" + entry.Name+"</option> "
                                        })
                                        var datastring = "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";

                                        $("#LaneTemplate").html(datastring);
                                        $(".SectionNoTemplate").hide();

                                    }
                                });

                                
                            } else if ($('#RoadID').val().length > 1 && myform.emergency.get_value() != "0") {

                                $("#LaneTemplate").html("");


                               var ILaneoptions = "<option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>"


                                var datastring = "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";
                                $("#LaneTemplate").html(datastring);
                              
                                $(".SectionNoTemplate").hide();


                            } else {
                                $(".SectionNoTemplate").show();

                            }
                        }
                       
                     
                    })

                    myform.emergency.change(function () {
                
                       
                        if (myform.emergency.get_value() == "0") {
                            $(".rpcd").attr("disabled", "disabled");

                            if ($("#SectionID option:selected").attr("rpc") == "disable") {
                                $("#SectionID").val("-1");
                                $("#SectionID").trigger("change");

                            } else

                                if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {
                                   
                                } else {
                                    $('#RoadID').val("");
                                    $('#RoadID').multiselect("deselectAll");
                                    $('#RoadID').multiselect("refresh");
                                    $('#RoadID').multiselect("rebuild");
                                    $("#SectionID").val("-1");
                                    $("#SectionID").trigger("change");
                                }

                   
                        } else {
                            $(".rpcd").removeAttr("disabled");
                            $("#RoadID option:selected").removeAttr("selected");
                            $("#SectionID").val("-1");
                            $("#LaneTemplate").html("");
                          

                            if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {

                            } else {
                                $("#SectionID").val("-1");
                                $("#LaneTemplate").html("");
                                $('#RoadID').val("");
                                $('#RoadID').multiselect("deselectAll");
                                $('#RoadID').multiselect("refresh");
                                $('#RoadID').multiselect("rebuild");
                            }



                        }

                      

                    }    
                    )


                    $("#SectionID").change(function () {
                        myform.WorkorderSection.value = $("#SectionID").val();
                        var secSelect = $("#SectionID option:selected").text().split('-')[0];
                        if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {

                        } 


                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getFeatureSection",
                            data: {
                                Section: secSelect
                            },
                            success: function (x) {


                                $.ajax({
                                    type: "GET",
                                    url: "/sysapi/GetEmergency",
                                    data: {
                                        //  OID: orderid,


                                    },
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json",
                                    success: function (result) {
                                       


                                        var datastring = "";


                                        dropFeatureID.empty();
                                        $("#SectionComapnion").val("")
                                        dropFeatureID.append('<option selected="true" disabled>Select Feature</option>');
                                        dropFeatureID.prop('selectedIndex', 0);


                                        var ILaneoptions = "<option value='0'>Do Nothing</option>"
                                        // lane

                                            $.each(result, function (key, entry) {
                                        ILaneoptions = ILaneoptions + " <option value='" + entry.id + "'>" + entry.Name + "</option> "
                                    })

                                        if (myform.WorkorderCity.value == '99' || myform.WorkorderCity.value == '100' || myform.WorkorderCity.value == '101' || myform.WorkorderCity.value == '102' || myform.WorkorderCity.value == '103' || myform.WorkorderCity.value == '104' || myform.WorkorderCity.value == '105') {

                                            if (myform.emergency.get_value() != "0") {
                                                ILaneoptions = "<option value='0'>Do Nothing</option> <option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>"

                                            }
                                            $.each(x, function (key, entry) {
                                                dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                datastring = datastring + "<div><span style='color: blue;'> " + entry.Name + "</span><div><select class='drpLane' id='drpLaneItem-" + entry.id + "' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";

                                            })


                                            // local  
                                        } else {
                                            if (myform.emergency.get_value() != "0") {
                                                ILaneoptions = "<option value='" + myform.emergency.get_value() + "'>" + myform.emergency.text + "</option>"

                                                dropFeatureID.append($('<option></option>').attr('value', '01').text('Local Road - Pavement - LR'));
                                                datastring = datastring + "<div><span style='color: blue;'> " + 'Local Road - Pavement - LR' + "</span><div><select class='drpLane' id='drpLaneItem-01' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";




                                            } else {
                                                $.each(x, function (key, entry) {
                                                    dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                    datastring = datastring + "<div><span style='color: blue;'> " + entry.Name + "</span><div><select class='drpLane' id='drpLaneItem-" + entry.id + "' style='width: 100%;'>" + ILaneoptions + "  </select></div></div>";

                                                })
                                            }
                                        }







                                        $("#LaneTemplate").html(datastring);

                                        $(".drpLane").each(function () {


                                            myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ','


                                        });
                                        // console.log(myform.WorkorderLane.value);

                                        $(".drpLane").change(function () {



                                            myform.WorkorderLane.value = "";
                                            $(".drpLane").each(function () {


                                                myform.WorkorderLane.value = myform.WorkorderLane.value + $(this).val() + '-' + $(this).attr('id') + ','


                                            });



                                            //  console.log(myform.WorkorderLane.value);

                                        })




                                        //   $("#LaneTemplate").html(datastring);

                                        dropFeatureID.select2();


                                    }
                                })


                             
                            }
                        });
                    })


                    $("#FeatureID").change(function () {

                     
                        //var theID = [];

                        //var theID = [];
                        //var theSelection = [];
                        //$.each(dropFeatureID.select2('data'), function (key, item) {
                        //    theID.push(item.id);
                        //    theSelection.push(item.text);
                        //});
                        //console.log(theID.join(","));
                        ////console.log(theSelection.join(","));
                        //myform.WorkorderLane.value = theID.join(",");
                    })






                },
                error: function (response) {

                    console.log(response);
                }
            });

        }



        protected setDrops() {
            var allt = this;
            allt.SetLaneTemplate(allt.entityId);
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
                    var dropFeatureID = $('#FeatureID');

                    dropdown.empty();
                    dropdownzone.empty();
                    dropdownarea.empty();
                    dropdownRoadID.empty();
                    dropdownSectionID.empty();
                    $("#LaneTemplate").html("");

                    dropdown.append('<option selected="true" disabled>Select Area</option>');
                    dropdown.prop('selectedIndex', 0);


                    $.each(result, function (key, entry) {
                        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                    })



                    if (myform.WorkorderCity.value != "") {
                        $("#citySelect").val(myform.WorkorderCity.value);
                       
                        $('#citySelect').prop('disabled', 'disabled');

                        $.ajax({
                            type: "GET",
                            url: "/sysapi/getZone",
                            data: { id: $("#citySelect").val() },
                            success: function (t) {



                                dropdownzone.empty();
                                dropdownarea.empty();
                                dropdownRoadID.empty();
                                dropdownSectionID.empty();
                                $("#LaneTemplate").html("");
                                dropdownzone.append('<option selected="true" disabled>Select Zone</option>');
                                dropdownzone.prop('selectedIndex', 0);

                                $.each(t, function (key, entry) {
                                    dropdownzone.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                })




                                if (myform.WorkorderZone.value != "") {
                                    $("#zoneSelect").val(myform.WorkorderZone.value);
                                    /*  $("#citySelect").trigger('change');*/
                                    $('#zoneSelect').prop('disabled', 'disabled');


                                    $.ajax({
                                        type: "GET",
                                        url: "/sysapi/getAreas",
                                        data: { id: $("#zoneSelect").val(), id2: $("#citySelect").val() },
                                        success: function (x) {
                                            dropdownarea.empty();
                                            dropdownRoadID.empty();
                                            dropdownSectionID.empty();
                                            $("#LaneTemplate").html("");
                                            dropdownarea.append('<option selected="true" disabled>Select Area</option>');
                                            dropdownarea.prop('selectedIndex', 0);

                                            //  myform.ZoneNo.value = $("#zoneSelect").val();



                                            $.each(x, function (key, entry) {
                                                dropdownarea.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                            })
                                            if (myform.WorkorderArea.value != "") {
                                                dropdownarea.val(myform.WorkorderArea.value)
                                                $('#area').prop('disabled', 'disabled');

                                                $.ajax({
                                                    type: "GET",
                                                    url: "/sysapi/getRoad",
                                                    data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val() },
                                                    success: function (x) {

                                                        dropdownRoadID.empty();
                                                        dropdownSectionID.empty();
                                                        $("#LaneTemplate").html("");
                                                        dropdownRoadID.append('<option selected="true" disabled>Select Area</option>');
                                                        dropdownRoadID.prop('selectedIndex', 0);

                                                        //  myform.ZoneNo.value = $("#zoneSelect").val();


                                                        $.each(x, function (key, entry) {
                                                            dropdownRoadID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                        })


                                                        if (myform.WorkorderRoad.value != "") {
                                                            dropdownRoadID.val(myform.WorkorderRoad.value);
                                                            $('#RoadID').prop('disabled', 'disabled');

                                                            $.ajax({
                                                                type: "GET",
                                                                url: "/sysapi/getSectionId",
                                                                data: { id: $("#citySelect").val(), id2: $("#zoneSelect").val(), id3: $("#area").val(), id4: $("#RoadID").val() },
                                                                success: function (x) {



                                                                    dropdownSectionID.empty();
                                                                    $("#LaneTemplate").html("");
                                                                    dropdownSectionID.append('<option selected="true" disabled>Select Area</option>');
                                                                    dropdownSectionID.prop('selectedIndex', 0);






                                                                    $.each(x, function (key, entry) {
                                                                        dropdownSectionID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                    })

                                                                    if (myform.WorkorderSection.value != "") {
                                                                        dropdownSectionID.val(myform.WorkorderSection.value)
                                                                        $('#SectionID').prop('disabled', 'disabled');

                                                                        $.ajax({
                                                                            type: "GET",
                                                                            url: "/sysapi/getFeatureSection",
                                                                            data: {
                                                                                Section: $("#SectionID option:selected").text()
                                                                            },
                                                                            success: function (x) {




                                                                                dropFeatureID.empty();
                                                                                $("#SectionComapnion").val("")
                                                                                dropFeatureID.append('<option selected="true" disabled>Select Feature</option>');
                                                                                dropFeatureID.prop('selectedIndex', 0);



                                                                                var datastring = "";

                                                                                $.each(x, function (key, entry) {
                                                                                    dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));

                                                                                })
                                                                               // $("#LaneTemplate").html(datastring);


                                                                                allt.SetLaneTemplate(allt.entityId);
                                        

                                                                                //if ($.trim(myform.WorkorderLane.value) != '') {
                                                                                //    var names = myform.WorkorderLane.value;
                                                                                //    var nameArr = names.split(',');

                                                                                //    dropFeatureID.select2("val", nameArr)
                                                                                //    dropFeatureID.prop('disabled', true)
                                                                                //} else {
                                                                                //    var names = "";
                                                                                //    $.each(x, function (key, entry) {
                                                                                //        dropFeatureID.append($('<option></option>').attr('value', entry.id).text(entry.Name));
                                                                                //        names = names + "," + entry.id;
                                                                                //    })


                                                                                  
                                                                                //    var nameArr = names.split(',');

                                                                                //    dropFeatureID.select2("val", nameArr)
                                                                                //    dropFeatureID.prop('disabled', true)
                                                                                //}
                                                                               
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


                            }
                        });


                    }



                },
                error: function (response) {

                    console.log(response);
                }
            });

        }
    }
}