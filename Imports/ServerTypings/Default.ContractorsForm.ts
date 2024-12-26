
namespace PMMS.Default {
    export class ContractorsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Contractors';
    }

    export interface ContractorsForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        StreetAddress: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        FaxNumber: Serenity.StringEditor;
        CreationDate: Serenity.DateEditor;
        Country: Serenity.StringEditor;
    }

    [,
        ['CompanyName', () => Serenity.StringEditor],
        ['ContactName', () => Serenity.StringEditor],
        ['StreetAddress', () => Serenity.StringEditor],
        ['PostalCode', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['MobileNumber', () => Serenity.StringEditor],
        ['PhoneNumber', () => Serenity.StringEditor],
        ['FaxNumber', () => Serenity.StringEditor],
        ['CreationDate', () => Serenity.DateEditor],
        ['Country', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ContractorsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}