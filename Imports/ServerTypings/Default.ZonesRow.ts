
namespace PMMS.Default {
    export interface ZonesRow {
        ZoneNo?: number;
        ZoneName?: string;
        CityNo?: number;
    }

    export namespace ZonesRow {
        export const idProperty = 'ZoneNo';
        export const nameProperty = 'ZoneName';
        export const localTextPrefix = 'Default.Zones';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ZoneNo;
            export declare const ZoneName;
            export declare const CityNo;
        }

        [
            'ZoneNo',
            'ZoneName',
            'CityNo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}