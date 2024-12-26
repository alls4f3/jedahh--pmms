
namespace PMMS.Distortion {
    export interface ContentHubRow {
        ImgColId?: number;
        ImgColNote?: string;
        ImageColPath?: string;
        ImageLat?: string;
        ImageLong?: string;
        CollCateegory?: number;
    }

    export namespace ContentHubRow {
        export const idProperty = 'ImgColId';
        export const nameProperty = 'ImgColNote';
        export const localTextPrefix = 'Distortion.ContentHub';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ImgColId;
            export declare const ImgColNote;
            export declare const ImageColPath;
            export declare const ImageLat;
            export declare const ImageLong;
            export declare const CollCateegory;
        }

        [
            'ImgColId',
            'ImgColNote',
            'ImageColPath',
            'ImageLat',
            'ImageLong',
            'CollCateegory'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}