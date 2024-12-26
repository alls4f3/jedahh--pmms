
namespace PMMS.EAM {
    export interface AssetsSurveyDistressRow {
        Itemdisid?: number;
        DistressId?: number;
        Severity?: string;
        Quantity?: number;
        Density?: string;
        TotalValue?: number;
        Itemsuidref?: number;
    }

    export namespace AssetsSurveyDistressRow {
        export const idProperty = 'Itemdisid';
        export const nameProperty = 'Severity';
        export const localTextPrefix = 'EAM.AssetsSurveyDistress';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Itemdisid;
            export declare const DistressId;
            export declare const Severity;
            export declare const Quantity;
            export declare const Density;
            export declare const TotalValue;
            export declare const Itemsuidref;
        }

        [
            'Itemdisid',
            'DistressId',
            'Severity',
            'Quantity',
            'Density',
            'TotalValue',
            'Itemsuidref'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}