import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Hero } from "../model/hero.model";
import { HeroService } from "../service/hero.service";
import * as HeroActions from './hero.actions'

@Injectable()
export class HeroEffects implements OnInitEffects {
  
    loadHeroes$ = createEffect(() => this.actions$.pipe(
        ofType(HeroActions.loadHeroes),
        mergeMap(() => this.service.fetchHeroes()
            .pipe(
                map(heroes => (HeroActions.loadHeroesSuccess({ heroes }))),
                catchError(() => [HeroActions.loadHeroesError()])
            )
        )
    ));

    addHero$ = createEffect(() => this.actions$.pipe(
        ofType(HeroActions.addHero),
        mergeMap(({ hero }) => this.service.addHero(hero)
            .pipe(
                map(hero => (HeroActions.addHeroSuccess({ hero }))),
                catchError(() => [HeroActions.addHeroError()])
            )
        )
    ))

    updateHero$ = createEffect(() => this.actions$.pipe(
        ofType(HeroActions.updateHero),
        mergeMap(({ id, hero }) => this.service.updateHero(id, hero)
            .pipe(
                map(hero => (HeroActions.updateHeroSuccess({ hero }))),
                catchError(() => [HeroActions.updateHeroError()])
            )
        )
    ))

    onError$ = createEffect(() => this.actions$.pipe(
        ofType(
            HeroActions.loadHeroesError,
            HeroActions.addHeroError,
            HeroActions.updateHeroError
        ),
        tap(() => console.error("ERROR"))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private service: HeroService
    ) {}
    
    ngrxOnInitEffects(): Action {
        return HeroActions.loadHeroes();
    }
}