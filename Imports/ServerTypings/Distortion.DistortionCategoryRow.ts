﻿
namespace PMMS.Distortion {
    export interface DistortionCategoryRow {
        ItemId?: number;
        ItemName?: string;
    }

    export namespace DistortionCategoryRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Distortion.DistortionCategory';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
        }

        [
            'ItemId',
            'ItemName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}