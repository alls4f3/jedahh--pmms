
namespace PMMS.Administration {
    export class AuditLogForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.AuditLog';
    }

    export interface AuditLogForm {
        UserId: Serenity.IntegerEditor;
        UserName: Serenity.StringEditor;
        Action: Serenity.StringEditor;
        ChangedOn: Serenity.DateEditor;
        TableName: Serenity.StringEditor;
        RowId: Serenity.IntegerEditor;
        Module: Serenity.StringEditor;
        Page: Serenity.StringEditor;
        Changes: Serenity.StringEditor;
    }

    [,
        ['UserId', () => Serenity.IntegerEditor],
        ['UserName', () => Serenity.StringEditor],
        ['Action', () => Serenity.StringEditor],
        ['ChangedOn', () => Serenity.DateEditor],
        ['TableName', () => Serenity.StringEditor],
        ['RowId', () => Serenity.IntegerEditor],
        ['Module', () => Serenity.StringEditor],
        ['Page', () => Serenity.StringEditor],
        ['Changes', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AuditLogForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}