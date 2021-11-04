import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroModule } from './hero/hero.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroCreateComponent } from './hero/hero-create/hero-create.component';
import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';
import { RouterModule, Routes } from '@angular/router';

const heroRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/new', component: HeroCreateComponent },
  { path: 'hero/:id', component: HeroDetailsComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: "**", redirectTo: "/heroes" }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroModule,
    RouterModule.forRoot(heroRoutes),
    BrowserAnimationsModule,
    // AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
