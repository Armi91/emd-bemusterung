import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GeneralChoiceElementId } from "src/app/data/general-choice-elements";
import { GeneralChoiceState } from "./general-choice.state";

export const GeneralChoiceActions = createActionGroup({
    source: 'General Choice',
    events: {
        'Update Level': props<{elementId: GeneralChoiceElementId, selectedLevel: string}>(),
        'Update Variant': props<{elementId: GeneralChoiceElementId, selectedVariant: string}>(),
        'Update Wallpaper': props<{selectedWallpaper: boolean}>(),
        'Update Baseboard': props<{selectedBaseboard: string}>(),
        'Update Ceiling Level': props<{selectedCeilingLevel: string}>(),
        'Update Ceiling Variant': props<{selectedCeilingVariant: string}>(),
        'Save General Choice': props<{generalChoice: GeneralChoiceState}>(),
        'Save General Choice Successful': emptyProps(),
        'Save General Choice Failed': props<{error: any}>(),
        'Fetch General Choice': emptyProps(),
        'Fetch General Choice Successful': props<{generalChoice: GeneralChoiceState}>(),
        'Fetch General Choice Failed': props<{error: any}>()
    }
})