
namespace PMMS.EAM {
    export interface AssetsSurveyRow {
        Itemsuid?: number;
        AssetsId?: number;
        SurvayDate?: string;
        SurvayDec?: string;
        SurvayBy?: string;
        SurvayResult?: string;
        SurvayRank?: number;
        SurvayNumber?: number;
    }

    export namespace AssetsSurveyRow {
        export const idProperty = 'Itemsuid';
        export const nameProperty = 'SurvayDec';
        export const localTextPrefix = 'EAM.AssetsSurvey';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Itemsuid;
            export declare const AssetsId;
            export declare const SurvayDate;
            export declare const SurvayDec;
            export declare const SurvayBy;
            export declare const SurvayResult;
            export declare const SurvayRank;
            export declare const SurvayNumber;
        }

        [
            'Itemsuid',
            'AssetsId',
            'SurvayDate',
            'SurvayDec',
            'SurvayBy',
            'SurvayResult',
            'SurvayRank',
            'SurvayNumber'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}