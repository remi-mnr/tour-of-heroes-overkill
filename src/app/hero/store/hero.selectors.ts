import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as HeroReducer from './hero.reducer';
import * as RouterSelectors from '../../core/router.selectors';
import { Hero } from "../model/hero.model";

export const selectFeature = createFeatureSelector<HeroReducer.State>(HeroReducer.featureKey)

export const selectHeroes = createSelector(
    selectFeature, 
    (state: HeroReducer.State) => state.heroes
);

export const selectLoadingState = createSelector(
    selectFeature,
    (state: HeroReducer.State) => state.loadingState
)

export const selectHero = createSelector(
    selectHeroes,
    RouterSelectors.selectRouteParams,
    (heroes: Hero[], { id }) => heroes.filter((hero: Hero) => hero.id === id)[0]
)