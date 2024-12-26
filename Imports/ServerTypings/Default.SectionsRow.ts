
namespace PMMS.Default {
    export interface SectionsRow {
        RoadNo?: number;
        AreaNo?: number;
        CityNo?: number;
        ZoneNo?: number;
        SectionNo?: number;
        ItemId?: number;
    }

    export namespace SectionsRow {
        export const idProperty = 'ItemId';
        export const localTextPrefix = 'Default.Sections';
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
        }

        [
            'RoadNo',
            'AreaNo',
            'CityNo',
            'ZoneNo',
            'SectionNo',
            'ItemId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}