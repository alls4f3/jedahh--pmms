
namespace PMMS.Distortion {
    export interface DistortionCasesRow {
        ItemId?: number;
        ItemName?: string;
        ItemCategory?: number;
        ItemSubCategory?: number;
        AssetCity?: string;
        AssetZone?: string;
        AssetsAreaId?: string;
        AssetRoad?: string;
        AssetSection?: string;
        ItemQty?: number;
        ItemImages?: string;
        ItemDoc?: string;
        ItemLatLong?: string;
        Attachments?: string;
        CaseDate?: string;
        CaseAdress?: string;
        CaseAmount?: number;
        CaseDesc?: string;
        CaseSolution?: string;
        CaseStatus?: number;
        ItemImagesAfter?: string;
    }

    export namespace DistortionCasesRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Distortion.DistortionCases';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
            export declare const ItemCategory;
            export declare const ItemSubCategory;
            export declare const AssetCity;
            export declare const AssetZone;
            export declare const AssetsAreaId;
            export declare const AssetRoad;
            export declare const AssetSection;
            export declare const ItemQty;
            export declare const ItemImages;
            export declare const ItemDoc;
            export declare const ItemLatLong;
            export declare const Attachments;
            export declare const CaseDate;
            export declare const CaseAdress;
            export declare const CaseAmount;
            export declare const CaseDesc;
            export declare const CaseSolution;
            export declare const CaseStatus;
            export declare const ItemImagesAfter;
        }

        [
            'ItemId',
            'ItemName',
            'ItemCategory',
            'ItemSubCategory',
            'AssetCity',
            'AssetZone',
            'AssetsAreaId',
            'AssetRoad',
            'AssetSection',
            'ItemQty',
            'ItemImages',
            'ItemDoc',
            'ItemLatLong',
            'Attachments',
            'CaseDate',
            'CaseAdress',
            'CaseAmount',
            'CaseDesc',
            'CaseSolution',
            'CaseStatus',
            'ItemImagesAfter'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}