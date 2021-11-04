import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Hero, Role } from '../model/hero.model';
import * as HeroSelectors from '../store/hero.selectors'
import { Store } from '@ngrx/store';
import { LoadingState } from '../store/hero.reducer';
import { delay, throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private store: Store) { }

  readonly loadingState$: Observable<LoadingState> = this.store.select(HeroSelectors.selectLoadingState);
  readonly heroes$: Observable<Hero[]> = this.store.select(HeroSelectors.selectHeroes);
  readonly loadingStates = LoadingState;

  ngOnInit(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
