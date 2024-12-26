
namespace PMMS.Default {
    export interface AreasRow {
        AreaName?: string;
        ZoneNo?: number;
        AreaNo?: number;
        CityNo?: number;
        ItemId?: number;
    }

    export namespace AreasRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'AreaName';
        export const localTextPrefix = 'Default.Areas';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const AreaName;
            export declare const ZoneNo;
            export declare const AreaNo;
            export declare const CityNo;
            export declare const ItemId;
        }

        [
            'AreaName',
            'ZoneNo',
            'AreaNo',
            'CityNo',
            'ItemId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}