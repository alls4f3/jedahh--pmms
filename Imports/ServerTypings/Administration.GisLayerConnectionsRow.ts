
namespace PMMS.Administration {
    export interface GisLayerConnectionsRow {
        GisPageName?: string;
        GisPageContent?: string;
        GisPageSorting?: number;
        GisPageId?: number;
        GisurlName?: string;
        IsPublish?: boolean;
    }

    export namespace GisLayerConnectionsRow {
        export const idProperty = 'GisPageId';
        export const nameProperty = 'GisPageName';
        export const localTextPrefix = 'Administration.GisLayerConnections';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const GisPageName;
            export declare const GisPageContent;
            export declare const GisPageSorting;
            export declare const GisPageId;
            export declare const GisurlName;
            export declare const IsPublish;
        }

        [
            'GisPageName',
            'GisPageContent',
            'GisPageSorting',
            'GisPageId',
            'GisurlName',
            'IsPublish'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}