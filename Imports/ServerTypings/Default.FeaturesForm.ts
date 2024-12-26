
namespace PMMS.Default {
    export class FeaturesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Features';
    }

    export interface FeaturesForm {
        FeatureNo: Serenity.StringEditor;
        FeatureShortName: Serenity.StringEditor;
        FeatureDescription: Serenity.StringEditor;
    }

    [
        ['FeatureNo', () => Serenity.StringEditor],
        ['FeatureShortName', () => Serenity.StringEditor],
        ['FeatureDescription', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(FeaturesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}