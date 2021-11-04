import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Hero, Role } from '../model/hero.model';
import * as HeroActions from "../store/hero.actions"

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  myForm = this.fb.group({
    id: [Math.round(Math.random()*10000), Validators.required],
    name: ['' , Validators.required],
    description: '',
    role: [Role.Fighter, Validators.required]
  });
  roleList: string[] = [];
  
  ngOnInit(): void {
    this.roleList = Object.values(Role)
    this.myForm.valueChanges.pipe(
      tap(val => console.log(val))
    ).subscribe()
  }

  addHero(): void {
    const hero: Hero = {
      id: this.myForm.value.id.toString(),
      name: this.myForm.value.name,
      ...(this.myForm.value.description && {description: this.myForm.value.description}),
      role: this.myForm.value.role,
    }
    this.store.dispatch(HeroActions.addHero({ hero }))
    this.router.navigate(["/","todos"])
  }
}
