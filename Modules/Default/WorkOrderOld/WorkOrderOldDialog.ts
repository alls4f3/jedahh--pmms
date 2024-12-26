
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()

    export class WorkOrderOldDialog extends Serenity.EntityDialog<WorkOrderOldRow, any> {
        protected getFormKey() { return WorkOrderOldForm.formKey; }
        protected getIdProperty() { return WorkOrderOldRow.idProperty; }
        protected getLocalTextPrefix() { return WorkOrderOldRow.localTextPrefix; }
        protected getNameProperty() { return WorkOrderOldRow.nameProperty; }
        protected getService() { return WorkOrderOldService.baseUrl; }
        protected getDeletePermission() { return WorkOrderOldRow.insertPermission; }

        protected form = new WorkOrderOldForm(this.idPrefix);

        constructor() {
            super();

            


            this.form.WorkorderStartDate.element.addClass("rtl-txtbox")
           


            this.form.Remark2.getGridField().toggle(false);
            this.form.Remark3.getGridField().toggle(false);
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();





            var path = "~/Default/WorkOrderOld/GetReport?id=";

            buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                title: 'Print',
                icon: "fa-print",
                cssClass: 'export-pdf-button',
                reportKey: this.get_entityId(),
                URL: path,


            }));



            

            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.deleteButton.hide();
            this.applyChangesButton.hide()
            this.saveAndCloseButton.hide();
            var bt = this.deleteButton;


            var workorderitem = this.entityId;
            if (this.isEditMode()) {
              ////  this.SetHafriaTemplate(workorderitem);
                $.ajax({
                    type: "GET",
                    url: "/sysapi/workorderOld",
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
                                + ' <label>' + value.ITM_CODE + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.ITM_DESC + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.UNIT + '</label>'
                                + '</td>'
                                + '<td>'
                                + '  <label>' + value.EXEC_QTY + '</label>'
                                + '</td>'
                                + ' <td>'
                                + '  <label>' + value.REMAINDER + '</label>'
                                + '</td>'
                                + ' <td>'
                                + '  <label>' + value.PREV_EXEC_QTY + '</label>'
                                + '</td>'
                                + ' <td>'
                                + '  <label>' + value.QUANTITY + '</label>'
                                + '</td>'
                                + '   </tr>'
                        });

                        $("#bodyBOQTemplates").html(st)
                    },

                });
            } else {
                $("#bodyBOQTemplates").html("");
                $("#bodyWorkflowD333").html("");

            }






            //$.ajax({
            //    type: "GET",
            //    url: "/sysapi/IsUserHasAccessToWF",
            //    data: {

            //    },
            //    contentType: "application/json;charset=utf-8",
            //    dataType: "json",
            //    success: function (result) {
            //        if (result == "1") {
            //           // bt.show()
            //            //  bt.removeAttr("disabled");

            //        }

            //    },

            //});


        }


        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {

                try {
                    this.form.WorkorderCity.element.closest('.category').toggle(true);
                    $(".LaneTemplate").show();
                    $(".MultiSectionTemplate").hide();

                //// this.form.emergency.set_value("0")
                 ////  this.getDrops();

                   this.OpenGisDialog();

                } catch (e) {

                }


            }
            else {
               // document.getElementById('mapviwerAll').innerHTML = "<div id='mapviwer'></div>";

                try {
                    if (this.form.WorkorderSection.value == "-1") {
                        this.form.WorkorderCity.element.closest('.category').toggle(false);
                        $(".LaneTemplate").hide();
                        $(".MultiSectionTemplate").show();
                      this.SetSectionTemplate(this.entityId);

                  //  this.GisSetView(this.entityId, "SecDataTemplate");

                    } else {
                        //this.getDrops();
                        //this.setDrops();

                        var allt = this;
                        allt.SetLaneTemplate(allt.entityId);
                       //  allt.GisSetView(allt.entityId, "LaneDataTemplate");

                        this.form.WorkorderCity.element.closest('.category').toggle(false);
                        $(".MultiSectionTemplate").hide();

                    }

                    this.element.find('.add-button').hide();



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

                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th> <th>Area </th><th>Street </th> <th>Section/Street Number </th> </tr> </thead> <tbody id='bodyWorkflowDSection'> </tbody> </table>";
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


                            + '   </tr>'

                    });

                    $("#bodyWorkflowDSection").html(st)
                },

            });
        }
        protected OpenGisDialog() {
            var GisURL = "https://webgis.eamana.gov.sa/giswebmapframe/";
            var iframe = '<iframe frameborder="0" marginwidth="0" marginheight="0" allowfullscreen src="' + GisURL + '" Height="499" Width="790"></iframe>';

            $("#Gisbtn").click(function () {


                $('<div class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front s-MessageDialog s-WarningDialog ui-dialog-buttons ui-draggable cntAll" >' +
                    '<div class="">' +
                    '<div class="">' +
                    '' + iframe + '</div></div></div>').dialog({
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

        protected GisSetView(workorderitem, methodName) {
            $(document).ready(function () {


                const map = L.map('mapviwer').setView([21.492500, 39.177570], 15);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);






                $.ajax({
                    type: "GET",
                    url: "/sysapi/" + methodName,
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

                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>City</th><th>Zone </th>  <th>Area </th>  <th>Street </th>  <th>Section </th>  <th>Lane </th>  <th>Work Type </th> <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD33'> </tbody> </table>";
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

                    var st2 = "<table class=' table table-bordered' style='width:98%; background-color:#ffffff;'> <thead class='thead-dark'> <tr> <th>Status</th><th>INITIAL_DATE </th>  <th>Department name </th>  <th>Department Id </th>  <th>Road Start date </th>  <th>End date </th>  <th>ID </th>   </tr> </thead> <tbody id='bodyWorkflowD333'> </tbody> </table>";
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
                            + '  <label>' + value.END_ROAD_JOB_DATE + '</label>'
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
    }
}