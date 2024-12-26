
namespace PMMS.Default {
    export interface SectionRow {
        RoadNo?: string;
        AreaNo?: number;
        CityNo?: string;
        ZoneNo?: string;
        SectionNo?: string;
        ItemId?: number;
        SecName?: string;
    }

    export namespace SectionRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'RoadNo';
        export const localTextPrefix = 'Default.Section';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const RoadNo;
            export declare const AreaNo;
            export declare const CityNo;
            export declare const ZoneNo;
            export declare const SectionNo;
            export declare const ItemId;
            export declare const SecName;
        }

        [
            'RoadNo',
            'AreaNo',
            'CityNo',
            'ZoneNo',
            'SectionNo',
            'ItemId',
            'SecName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}