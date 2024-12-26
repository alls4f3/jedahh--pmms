
namespace PMMS.EAM {
    export interface AssetCustAttrRow {
        ItemSubId?: number;
        AssetId?: number;
        AttrId?: number;
        AttrValue?: string;
    }

    export namespace AssetCustAttrRow {
        export const idProperty = 'ItemSubId';
        export const nameProperty = 'AttrValue';
        export const localTextPrefix = 'EAM.AssetCustAttr';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemSubId;
            export declare const AssetId;
            export declare const AttrId;
            export declare const AttrValue;
        }

        [
            'ItemSubId',
            'AssetId',
            'AttrId',
            'AttrValue'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}