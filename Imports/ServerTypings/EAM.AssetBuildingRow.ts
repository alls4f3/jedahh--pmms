
namespace PMMS.EAM {
    export interface AssetBuildingRow {
        ItemId?: number;
        ItemName?: string;
        CityId?: number;
        ItemDesc?: string;
        NumberOfFloor?: number;
        LatLong?: string;
    }

    export namespace AssetBuildingRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'EAM.AssetBuilding';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
            export declare const CityId;
            export declare const ItemDesc;
            export declare const NumberOfFloor;
            export declare const LatLong;
        }

        [
            'ItemId',
            'ItemName',
            'CityId',
            'ItemDesc',
            'NumberOfFloor',
            'LatLong'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}