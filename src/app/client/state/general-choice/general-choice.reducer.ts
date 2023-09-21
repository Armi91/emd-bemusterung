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
        selectedLevel,
        selectedVariant: ''
      },
    })
  ),
  on(
    GeneralChoiceActions.updateVariant,
    (state, { elementId, selectedVariant }) => ({
      ...state,
      [elementId]: {
        ...state[elementId],
        selectedVariant,
      },
    })
  ),
  on(GeneralChoiceActions.updateWallpaper, (state, { selectedWallpaper }) => ({
    ...state,
    walls: {
      ...state['walls'],
      selectedWallpaper,
    },
  })),
  on(GeneralChoiceActions.updateBaseboard, (state, { selectedBaseboard }) => ({
    ...state,
    floor: {
      ...state['floor'],
      selectedBaseboard,
    },
  })),
  on(
    GeneralChoiceActions.updateCeilingLevel,
    (state, { selectedCeilingLevel }) => ({
      ...state,
      walls: {
        ...state['walls'],
        selectedCeilingLevel,
        selectedCeilingVariant: '',
      },
    })
  ),
  on(
    GeneralChoiceActions.updateCeilingVariant,
    (state, { selectedCeilingVariant }) => ({
      ...state,
      walls: {
        ...state['walls'],
        selectedCeilingVariant,
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
