
namespace PMMS.Default {
    export interface ContractorsRow {
        ContractorNo?: number;
        CompanyName?: string;
        ContactName?: string;
        StreetAddress?: string;
        PostalCode?: string;
        City?: string;
        Email?: string;
        MobileNumber?: string;
        PhoneNumber?: string;
        FaxNumber?: string;
        CreationDate?: string;
        Country?: string;
    }

    export namespace ContractorsRow {
        export const idProperty = 'ContractorNo';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Default.Contractors';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ContractorNo;
            export declare const CompanyName;
            export declare const ContactName;
            export declare const StreetAddress;
            export declare const PostalCode;
            export declare const City;
            export declare const Email;
            export declare const MobileNumber;
            export declare const PhoneNumber;
            export declare const FaxNumber;
            export declare const CreationDate;
            export declare const Country;
        }

        [
            'ContractorNo',
            'CompanyName',
            'ContactName',
            'StreetAddress',
            'PostalCode',
            'City',
            'Email',
            'MobileNumber',
            'PhoneNumber',
            'FaxNumber',
            'CreationDate',
            'Country'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}