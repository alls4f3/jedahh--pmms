
namespace PMMS.Distortion {
    export class ContentHubForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.ContentHub';
    }

    export interface ContentHubForm {
        ImgColNote: Serenity.StringEditor;
        ImageColPath: Serenity.StringEditor;
        ImageLat: Serenity.StringEditor;
        ImageLong: Serenity.StringEditor;
        CollCateegory: Serenity.IntegerEditor;
    }

    [,
        ['ImgColNote', () => Serenity.StringEditor],
        ['ImageColPath', () => Serenity.StringEditor],
        ['ImageLat', () => Serenity.StringEditor],
        ['ImageLong', () => Serenity.StringEditor],
        ['CollCateegory', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ContentHubForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}