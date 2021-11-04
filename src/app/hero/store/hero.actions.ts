import { createAction, props } from '@ngrx/store';
import { Hero } from '../model/hero.model';

export const loadHeroes = createAction('[Hero] Load Heroes');
export const loadHeroesSuccess = createAction('[Hero] Load Heroes Success', props<{ heroes: Hero[]}>());
export const loadHeroesError = createAction('[Hero] Load Heroes Error');

export const addHero = createAction('[Hero] Add Hero', props<{ hero: Hero }>());
export const addHeroSuccess = createAction('[Hero] Add Hero Success', props<{ hero: Hero }>());
export const addHeroError = createAction('[Hero] Add Hero Error');

export const updateHero = createAction('[Hero] Update Hero', props<{ id: string, hero: Hero }>());
export const updateHeroSuccess = createAction('[Hero] Update Hero Success', props<{ hero: Hero }>());
export const updateHeroError = createAction('[Hero] Update Hero Error');