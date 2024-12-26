
namespace PMMS.Default {
    export interface RoadsRow {
        RoadNo?: string;
        RoadName?: string;
        AreaNo?: string;
        RoadType?: number;
        CityNo?: string;
        ZoneNo?: string;
        IsActive?: boolean;
    }

    export namespace RoadsRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'RoadName';
        export const localTextPrefix = 'Default.Roads';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const RoadNo;
            export declare const RoadName;
            export declare const AreaNo;
            export declare const RoadType;
            export declare const CityNo;
            export declare const ZoneNo;
            export declare const ItemId;
            export declare const IsActive;

            
        }

        [
            'RoadNo',
            'RoadName',
            'AreaNo',
            'RoadType',
            'CityNo',
            'ZoneNo',
            'ItemId',
            'IsActive'

        ].forEach(x => (<any>Fields)[x] = x);
    }
}