import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Hero, Role } from '../model/hero.model';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as HeroActions from "../store/hero.actions"
import * as HeroSelectors from "../store/hero.selectors"

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  readonly hero$: Observable<Hero> = this.store.select(HeroSelectors.selectHero)

  myForm = this.fb.group({
    id: [null , Validators.required],
    name: [null , Validators.required],
    description: [null],
    role: [null , Validators.required],
  });
  roleList: string[] = [];

  ngOnInit(): void {
    this.roleList = Object.values(Role)
    
    this.store.select(HeroSelectors.selectHero)
    .pipe()
    .subscribe(hero => this.myForm.patchValue({...hero}))

    this.myForm.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
    ).subscribe((val) => this.updateHero(val))

  }

  updateHero(val: any): void {
    let newHero: Hero = {
      id: val.id,
      name: val.name,
      ...(val.description && {description: val.description}),
      role: val.role
    };
    console.log(val)
    this.store.dispatch(HeroActions.updateHero({
      id: val.id,
      hero: newHero
    }))
  }
}
