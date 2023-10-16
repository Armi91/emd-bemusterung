import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GeneralChoiceSanitarElementId } from "src/app/data/general-choice-elements";
import { GeneralChoiceSanitarState } from "./general-choice-sanitar.state";

export const GeneralChoiceSanitarActions = createActionGroup({
    source: 'General Choice Sanitar',
    events: {
        'Update Level': props<{elementId: GeneralChoiceSanitarElementId, selectedLevel: string}>(),
        'Update Variant': props<{elementId: GeneralChoiceSanitarElementId, selectedVariant: string}>(),
        'Update Wallpaper': props<{selectedWallpaper: boolean}>(),
        'Update Baseboard': props<{selectedBaseboard: string}>(),
        'Update Ceiling Level': props<{selectedCeilingLevel: string}>(),
        'Update Ceiling Variant': props<{selectedCeilingVariant: string}>(),
        'Save Sanitar General Choice': props<{generalChoiceSanitar: GeneralChoiceSanitarState}>(),
        'Save Sanitar General Choice Successful': emptyProps(),
        'Save Sanitar General Choice Failed': props<{error: any}>(),
        'Fetch Sanitar General Choice': emptyProps(),
        'Fetch Sanitar General Choice Successful': props<{generalChoiceSanitar: GeneralChoiceSanitarState}>(),
        'Fetch Sanitar General Choice Failed': props<{error: any}>()
    }
})