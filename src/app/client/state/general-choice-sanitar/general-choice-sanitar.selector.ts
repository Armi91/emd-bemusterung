import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GeneralChoiceSanitarElementId } from "src/app/data/general-choice-elements";
import { GeneralChoiceSanitarState } from "./general-choice-sanitar.state";

export const generalChoiceSanitarFeature = createFeatureSelector<GeneralChoiceSanitarState>('generalChoiceSanitar');

export const selectAllGeneralChoicesSanitar = createSelector(generalChoiceSanitarFeature, (state) => {
    return state;
});

export const selectGeneralChoiceSanitarElement = (elementId: GeneralChoiceSanitarElementId) => {
    return createSelector(generalChoiceSanitarFeature, (state) => state[elementId]);
};