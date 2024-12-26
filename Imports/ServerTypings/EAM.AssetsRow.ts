
namespace PMMS.EAM {
    export interface AssetsRow {
        ItemId?: number;
        AsseName?: string;
        AssetBarcode?: string;
        AssetSerial?: string;
        AssetType?: number;
        AssetCategory?: number;
        AssetSubCategory?: number;
        AssetLocation?: number;
        AssetStartDate?: string;
        AssetEndDate?: string;
        AssetMaunfacture?: string;
        AssetProject?: number;
        AssetContractor?: number;
        AssetVendor?: number;
        AssetInspector?: number;
        AssetParent?: number;
        AssetStatus?: number;
        AssetClass?: number;
        AssetClassDescription?: string;
        AssetAutoDepc?: boolean;
        AssetDepcMethod?: string;
        AssetDepcInMonth?: number;
        AssetDepcPrec?: number;
        AssetDepcDate?: string;
        AssetDepcStatus?: number;
        InstallDate?: string;
        InstallAccetpedDate?: string;
        PurchasePrice?: number;
        YearsOfLife?: number;
        WarrantyStartDate?: string;
        WarrantyEndDate?: string;
        MaintSubSet?: number;
        MaintCondation?: number;
        MaintCrit?: number;
        MaintLastCheckDate?: string;
        AssetWidth?: number;
        AssetHight?: number;
        AssetArea?: number;
        AssetDimansion?: number;
        AssetWeight?: number;
        AssetPower?: number;
        AssetServiceStatus?: number;
        MaintPowerConsumption?: number;
        AssetCity?: string;
        AssetZone?: string;
        AssetsAreaId?: string;
        AssetRoad?: string;
        AssetSection?: string;
        AssetQty?: number;
    }

    export namespace AssetsRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'AsseName';
        export const localTextPrefix = 'EAM.Assets';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const AsseName;
            export declare const AssetBarcode;
            export declare const AssetSerial;
            export declare const AssetType;
            export declare const AssetCategory;
            export declare const AssetSubCategory;
            export declare const AssetLocation;
            export declare const AssetStartDate;
            export declare const AssetEndDate;
            export declare const AssetMaunfacture;
            export declare const AssetProject;
            export declare const AssetContractor;
            export declare const AssetVendor;
            export declare const AssetInspector;
            export declare const AssetParent;
            export declare const AssetStatus;
            export declare const AssetClass;
            export declare const AssetClassDescription;
            export declare const AssetAutoDepc;
            export declare const AssetDepcMethod;
            export declare const AssetDepcInMonth;
            export declare const AssetDepcPrec;
            export declare const AssetDepcDate;
            export declare const AssetDepcStatus;
            export declare const InstallDate;
            export declare const InstallAccetpedDate;
            export declare const PurchasePrice;
            export declare const YearsOfLife;
            export declare const WarrantyStartDate;
            export declare const WarrantyEndDate;
            export declare const MaintSubSet;
            export declare const MaintCondation;
            export declare const MaintCrit;
            export declare const MaintLastCheckDate;
            export declare const AssetWidth;
            export declare const AssetHight;
            export declare const AssetArea;
            export declare const AssetDimansion;
            export declare const AssetWeight;
            export declare const AssetPower;
            export declare const AssetServiceStatus;
            export declare const MaintPowerConsumption;
            export declare const AssetCity;
            export declare const AssetZone;
            export declare const AssetsAreaId;
            export declare const AssetRoad;
            export declare const AssetSection;
            export declare const AssetQty;
        }

        [
            'ItemId',
            'AsseName',
            'AssetBarcode',
            'AssetSerial',
            'AssetType',
            'AssetCategory',
            'AssetSubCategory',
            'AssetLocation',
            'AssetStartDate',
            'AssetEndDate',
            'AssetMaunfacture',
            'AssetProject',
            'AssetContractor',
            'AssetVendor',
            'AssetInspector',
            'AssetParent',
            'AssetStatus',
            'AssetClass',
            'AssetClassDescription',
            'AssetAutoDepc',
            'AssetDepcMethod',
            'AssetDepcInMonth',
            'AssetDepcPrec',
            'AssetDepcDate',
            'AssetDepcStatus',
            'InstallDate',
            'InstallAccetpedDate',
            'PurchasePrice',
            'YearsOfLife',
            'WarrantyStartDate',
            'WarrantyEndDate',
            'MaintSubSet',
            'MaintCondation',
            'MaintCrit',
            'MaintLastCheckDate',
            'AssetWidth',
            'AssetHight',
            'AssetArea',
            'AssetDimansion',
            'AssetWeight',
            'AssetPower',
            'AssetServiceStatus',
            'MaintPowerConsumption',
            'AssetCity',
            'AssetZone',
            'AssetsAreaId',
            'AssetRoad',
            'AssetSection',
            'AssetQty'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}