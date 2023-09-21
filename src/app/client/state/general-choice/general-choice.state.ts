export interface GeneralChoiceState {
    floor: {
        levelId: string;
        variantId?: string;
        baseboard: string;
    },
    walls: {
        levelId: string;
        variantId?: string;
        wallpaper: boolean;
        ceilingLevelId: string;
        ceilingVariantId?: string;
    },
    windowsills: {
        levelId: string;
        variantId?: string;
    },
    doors: {
        levelId: string;
        variantId?: string;
    },
    doorHardware: {
        levelId: string;
        variantId?: string;
    },
    electricEquipment: {
        levelId: string;
        variantId?: string;
    }
}

export const generalChoiceInitialState: GeneralChoiceState = {
    floor: {
        levelId: '',
        variantId: '',
        baseboard: '',
    },
    walls: {
        levelId: '',
        variantId: '',
        wallpaper: false,
        ceilingLevelId: '',
        ceilingVariantId: '',
    },
    windowsills: {
        levelId: '',
        variantId: '',
    },
    doors: {
        levelId: '',
        variantId: '',
    },
    doorHardware: {
        levelId: '',
        variantId: '',
    },
    electricEquipment: {
        levelId: '',
        variantId: '',
    }
}