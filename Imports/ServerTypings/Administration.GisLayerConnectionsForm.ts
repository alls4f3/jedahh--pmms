
namespace PMMS.Administration {
    export class GisLayerConnectionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.GisLayerConnections';
    }

    export interface GisLayerConnectionsForm {
        GisPageName: Serenity.StringEditor;
        GisPageContent: Serenity.StringEditor;
        GisPageSorting: Serenity.IntegerEditor;
        GisurlName: Serenity.StringEditor;
        IsPublish: Serenity.BooleanEditor;
    }

    [
        ['GisPageName', () => Serenity.StringEditor],
        ['GisPageContent', () => Serenity.StringEditor],
        ['GisPageSorting', () => Serenity.IntegerEditor],
        ['GisurlName', () => Serenity.StringEditor],
        ['IsPublish', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(GisLayerConnectionsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}