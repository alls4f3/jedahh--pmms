
namespace PMMS.Default {
    export interface ZoneRow {
        ZoneNo?: number;
        ZoneName?: string;
        CityNo?: number;
        ItemId?: number;
    }

    export namespace ZoneRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ZoneName';
        export const localTextPrefix = 'Default.Zone';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ZoneNo;
            export declare const ZoneName;
            export declare const CityNo;
            export declare const ItemId;
        }

        [
            'ZoneNo',
            'ZoneName',
            'CityNo',
            'ItemId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}