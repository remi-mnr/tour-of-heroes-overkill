import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';


const heroRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/new', component: HeroCreateComponent },
  { path: 'hero/:id', component: HeroDetailsComponent },
  // { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
  // { path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
