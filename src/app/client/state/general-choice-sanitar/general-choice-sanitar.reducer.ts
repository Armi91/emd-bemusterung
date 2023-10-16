import { createReducer, on } from '@ngrx/store';
import { generalChoiceSanitarInitialState } from './general-choice-sanitar.state';
import { GeneralChoiceSanitarActions } from './general-choice-sanitar.actions';

export const generalChoiceSanitarReducer = createReducer(
  generalChoiceSanitarInitialState,
  on(GeneralChoiceSanitarActions.updateLevel, (state, { elementId, selectedLevel }) => ({
    ...state,
    [elementId]: {
      ...state[elementId],
      levelId: selectedLevel,
      variantId: '',
    },
  })),
  on(GeneralChoiceSanitarActions.updateVariant, (state, { elementId, selectedVariant }) => ({
    ...state,
    [elementId]: {
      ...state[elementId],
      variantId: selectedVariant,
    },
  })),
  on(GeneralChoiceSanitarActions.updateWallpaper, (state, { selectedWallpaper }) => ({
    ...state,
    walls: {
      ...state['walls'],
      wallpaper: selectedWallpaper,
    },
  })),
  on(GeneralChoiceSanitarActions.updateBaseboard, (state, { selectedBaseboard }) => ({
    ...state,
    floor: {
      ...state['floor'],
      baseboard: selectedBaseboard,
    },
  })),
  on(GeneralChoiceSanitarActions.updateCeilingLevel, (state, { selectedCeilingLevel }) => ({
    ...state,
    walls: {
      ...state['walls'],
      ceilingLevelId: selectedCeilingLevel,
      ceilingVariantId: '',
    },
  })),
  on(GeneralChoiceSanitarActions.updateCeilingVariant, (state, { selectedCeilingVariant }) => ({
    ...state,
    walls: {
      ...state['walls'],
      ceilingVariantId: selectedCeilingVariant,
    },
  })),
  on(
    GeneralChoiceSanitarActions.saveSanitarGeneralChoiceFailed,
    GeneralChoiceSanitarActions.fetchSanitarGeneralChoiceFailed,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(
    GeneralChoiceSanitarActions.fetchSanitarGeneralChoiceSuccessful,
    (state, { generalChoiceSanitar }) => ({
      ...state,
      ...generalChoiceSanitar,
    })
  )
);
