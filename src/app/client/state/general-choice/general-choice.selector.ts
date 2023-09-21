import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GeneralChoiceState } from './general-choice.state';
import { GeneralChoiceElementId } from 'src/app/data/general-choice-elements';

export const generalChoiceFeature = createFeatureSelector<GeneralChoiceState>('generalChoice');

export const selectAllGeneralChoices = createSelector(generalChoiceFeature, (state) => {
  return state;
});

export const selectGeneralChoiceElement = (elementId: GeneralChoiceElementId) => {
  return createSelector(generalChoiceFeature, (state) => state[elementId]);
};
