export interface GeneralChoiceSanitarState {
  floor: {
    levelId: string;
    variantId?: string;
    baseboard: string;
  };
  walls: {
    levelId: string;
    variantId?: string;
    wallpaper: boolean;
    ceilingLevelId: string;
    ceilingVariantId?: string;
  };
  sink: {
    levelId: string;
    variantId?: string;
  };
  sinkFaucet: {
    levelId: string;
    variantId?: string;
  };
  toilet: {
    levelId: string;
    variantId?: string;
  };
  flushPlate: {
    levelId: string;
    variantId?: string;
  };
  showerSystemDrain: {
    levelId: string;
    variantId?: string;
  };
  showerSystemFitting: {
    levelId: string;
    variantId?: string;
  };
  showerSystemOther: {
    levelId: string;
    variantId?: string;
  };
}

export const generalChoiceSanitarInitialState: GeneralChoiceSanitarState = {
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
  sink: {
    levelId: '',
    variantId: '',
  },
  sinkFaucet: {
    levelId: '',
    variantId: '',
  },
  toilet: {
    levelId: '',
    variantId: '',
  },
  flushPlate: {
    levelId: '',
    variantId: '',
  },
  showerSystemDrain: {
    levelId: '',
    variantId: '',
  },
  showerSystemFitting: {
    levelId: '',
    variantId: '',
  },
  showerSystemOther: {
    levelId: '',
    variantId: '',
  },
}

export type GeneralChoiceSanitarKeys = keyof typeof generalChoiceSanitarInitialState;