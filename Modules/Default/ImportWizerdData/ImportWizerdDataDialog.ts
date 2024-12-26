
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()

    export class ImportWizerdDataDialog extends Serenity.EntityDialog<ImportWizerdDataRow, any> {
        protected getFormKey() { return ImportWizerdDataForm.formKey; }
        protected getIdProperty() { return ImportWizerdDataRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizerdDataRow.localTextPrefix; }
        protected getNameProperty() { return ImportWizerdDataRow.nameProperty; }
        protected getService() { return ImportWizerdDataService.baseUrl; }
        protected getDeletePermission() { return ImportWizerdDataRow.insertPermission; }

        protected form = new ImportWizerdDataForm(this.idPrefix);


        protected updateInterface(): void {

            super.updateInterface();

            if (this.isEditMode()) {

               

                this.convert(this.form.StatusMessage.value);
            }

            // 
            // this.toolbar.findButton('delete-button').hide();

            // entity dialog also has reference variables to
            // its default buttons, lets use them to hide delete button
           this.deleteButton.hide();
            if (this.isEditMode()) {
                this.saveAndCloseButton.hide();

            }


            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.toolbar.findButton('commit').toggle(this.isEditMode());


            this.applyChangesButton.hide();

            // we could also hide save buttons just like delete button,
            // but they are null now as we removed them in getToolbarButtons()
            // if we didn't we could write like this:
            //// 
            // this.applyChangesButton.hide();
            // this.saveAndCloseButton.hide();

            // instead of hiding, we could disable a button
            // 
            // this.deleteButton.toggleClass('disabled', true);

            var workorderitem = this.entityId;
            //if (this.isEditMode()) {
            //    $.ajax({
            //        type: "GET",
            //        url: "/sysapi/ImportSummary",
            //        data: {
            //            Itemid: workorderitem
            //        },
            //        contentType: "application/json;charset=utf-8",
            //        dataType: "json",
            //        success: function (result) {

            //            var st = ""
            //            $.each(result, function (key, value) {


            //                st = st
            //                    + ' <tr style="color:white;">'
            //                    + ' <td>'
            //                    + ' <label>' + value.ItemId + '</label>'
            //                    + '</td>'
            //                    + '<td>'
            //                    + '  <label>' + value.Comment + '</label>'
            //                    + '</td>'
                                
            //                    + '   </tr>'

            //            });

            //            $("#bodyWorkflowD3").html(st)
            //        },

            //    });
            //} else {
            //    $("#bodyWorkflowD3").html("");
            //}

        }


        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

          
                var path = "/sysapi/ExportSamples?ReportId=";



                buttons.push(PMMS.Common.ReportHelper.createFastReportToolButton({
                    title: 'Print Samples',
                    cssClass: 'export-pdf-button',
                    reportKey: this.get_entityId(),
                    URL: path,


                }));


                buttons.push({
                    title: 'Roll back transaction',
                    cssClass: 'commit',
                    icon: 'fa-retweet text-green',
                    onClick: () => {
                        Q.confirm("Are you sure you want to Roll back this(all samples and logs will deleted? you will not be able to rollback", () => {

                            var id2 = this.entity.ImportId;


                            ImportWizerdDataService.Delete({
                                EntityId: id2,
                            }, response => {
                                Serenity.SubDialogHelper.triggerDataChange(this);
                                this.dialogClose();
                            });





                        },
                            {
                                htmlEncode: false,
                                onNo: () => {
                                    Q.warning("No action was taken.");
                                }
                            });
                    }
                });
            

           
           



            return buttons;
        }


        protected  convert(xml) {

            if (xml.includes('<') || xml.includes('SECTION_NO')  ) {
                var xmlData = $.parseXML(xml);
                var row = "";
                $("Section", xmlData).each(function () {

                    var Number = $(this).find("ID").text() ;
                    var SECTION_NO = $(this).find("SECTION_NO").text();
                    var SECTION_ID = $(this).find("SECTION_ID").text();
                    var Lane = $(this).find("Lane").text();
                    row = row + '<tr>' + '<td>' + Number + '</td>' + '<td>' + SECTION_NO + '</td>' + '<td>' + SECTION_ID + '</td>' + '<td>' + Lane + '</td>' + '</tr>'


                });

                $("#mappingHistory").html("<table class=' table table-bordered' style='width:100%; background-color:#607D8B;' id='histW'><tr><th>Number</th><th>SECTION_NO</th><th>SECTION_ID</th><th>Lane</th></tr>" + row + "</table>")
                $('#histW tr:eq(1)').remove();

            } else {
                $("#mappingHistory").html("<span>"+xml+"</span>")
            }
          
    
        }

    }

    }