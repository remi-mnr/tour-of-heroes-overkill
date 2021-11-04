import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as HeroReducer from "./store/hero.reducer"
import { StoreModule } from '@ngrx/store';
import { HeroService } from './service/hero.service';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/hero.effects'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroDetailsComponent,
    HeroesComponent,
    HeroItemComponent,
    HeroCreateComponent
  ],
  imports: [
    CommonModule,
    // HeroRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
    StoreModule.forFeature(HeroReducer.featureKey, HeroReducer.reducer),
    EffectsModule.forFeature([HeroEffects])
  ],
  providers: [
    HeroService
  ]
})
export class HeroModule { }
