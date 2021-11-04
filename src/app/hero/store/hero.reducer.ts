import { createReducer, on, Action } from '@ngrx/store';
import { Hero } from '../model/hero.model';
import * as HeroActions from './hero.actions';

export enum LoadingState {
    Default = 'default',
    Loading = 'loading',
    Loaded = 'loaded',
    Error = 'error',
}

export interface State {
    heroes: Hero[];
    loadingState: LoadingState;
}

export const initialState: State = {
    heroes: [],
    loadingState: LoadingState.Default
};

export const heroReducer = createReducer(
    initialState,
    on(HeroActions.loadHeroes, state => ({...state, loadingState: LoadingState.Loading})),
    on(HeroActions.loadHeroesSuccess, (state, { heroes }) => ({...state,heroes,loadingState: LoadingState.Loaded})),
    on(HeroActions.loadHeroesError, state => ({...state, loadingState: LoadingState.Error})),
    on(HeroActions.addHeroSuccess, (state, { hero }) => ({...state, heroes: [...state.heroes, hero]})),
    on(HeroActions.updateHeroSuccess,  (state, { hero }) => ({ ...state, heroes: [...state.heroes.map(stateHero => stateHero.id === hero.id ? hero : stateHero)] })),
);

export function reducer(state: State | undefined, action: Action){
    return heroReducer(state, action)
}

export const featureKey = 'hero';