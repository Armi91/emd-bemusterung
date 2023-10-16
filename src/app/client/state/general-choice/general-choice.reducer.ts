import { createReducer, on } from '@ngrx/store';
import { generalChoiceInitialState } from './general-choice.state';
import { GeneralChoiceActions } from './general-choice.actions';

export const generalChoiceReducer = createReducer(
  generalChoiceInitialState,
  on(
    GeneralChoiceActions.updateLevel,
    (state, { elementId, selectedLevel }) => ({
      ...state,
      [elementId]: {
        ...state[elementId],
        levelId: selectedLevel,
        variantId: ''
      },
    })
  ),
  on(
    GeneralChoiceActions.updateVariant,
    (state, { elementId, selectedVariant }) => ({
      ...state,
      [elementId]: {
        ...state[elementId],
        variantId: selectedVariant,
      },
    })
  ),
  on(GeneralChoiceActions.updateWallpaper, (state, { selectedWallpaper }) => ({
    ...state,
    walls: {
      ...state['walls'],
      wallpaper: selectedWallpaper,
    },
  })),
  on(GeneralChoiceActions.updateBaseboard, (state, { selectedBaseboard }) => ({
    ...state,
    floor: {
      ...state['floor'],
      baseboard: selectedBaseboard,
    },
  })),
  on(
    GeneralChoiceActions.updateCeilingLevel,
    (state, { selectedCeilingLevel }) => ({
      ...state,
      walls: {
        ...state['walls'],
        ceilingLevelId: selectedCeilingLevel,
        ceilingVariantId: '',
      },
    })
  ),
  on(
    GeneralChoiceActions.updateCeilingVariant,
    (state, { selectedCeilingVariant }) => ({
      ...state,
      walls: {
        ...state['walls'],
        ceilingVariantId: selectedCeilingVariant,
      },
    })
  ),
  on(
    GeneralChoiceActions.saveGeneralChoiceFailed,
    GeneralChoiceActions.fetchGeneralChoiceFailed,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(GeneralChoiceActions.fetchGeneralChoiceSuccessful, (state, { generalChoice }) => ({
    ...state,
    ...generalChoice,
  }))
);
