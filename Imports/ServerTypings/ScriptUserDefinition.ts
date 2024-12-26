namespace PMMS {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        UserId?: number;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
    }
}

