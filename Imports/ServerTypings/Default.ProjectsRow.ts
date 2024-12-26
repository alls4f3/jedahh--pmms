
namespace PMMS.Default {
    export interface ProjectsRow {
        ProjectId?: number;
        ProjectName?: string;
        ProjectLocation?: string;
        ContractorName?: string;
        Maplocation?: string;
        ProjectAttachment?: string;
    }

    export namespace ProjectsRow {
        export const idProperty = 'ProjectId';
        export const nameProperty = 'ProjectName';
        export const localTextPrefix = 'Default.Projects';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ProjectId;
            export declare const ProjectName;
            export declare const ProjectLocation;
            export declare const ContractorName;
            export declare const Maplocation;
            export declare const ProjectAttachment;
        }

        [
            'ProjectId',
            'ProjectName',
            'ProjectLocation',
            'ContractorName',
            'Maplocation',
            'ProjectAttachment'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}