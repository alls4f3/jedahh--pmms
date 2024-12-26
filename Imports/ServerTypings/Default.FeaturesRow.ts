
namespace PMMS.Default {
    export interface FeaturesRow {
        FeatureNo?: string;
        FeatureShortName?: string;
        FeatureDescription?: string;
        ItemId?: number;
    }

    export namespace FeaturesRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'FeatureNo';
        export const localTextPrefix = 'Default.Features';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const FeatureNo;
            export declare const FeatureShortName;
            export declare const FeatureDescription;
            export declare const ItemId;
        }

        [
            'FeatureNo',
            'FeatureShortName',
            'FeatureDescription',
            'ItemId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}