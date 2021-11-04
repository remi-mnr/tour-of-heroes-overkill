import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero.model';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  // let http: HttpClient
  // beforeEach(() => { service = new HeroService(http); })

  // it('#fetchHeroes should return value from observable', () => {
  //   service.fetchHeroes().subscribe(heroes => {
  //     expect(heroes).toBe(jasmine.);
  //     done();
  //   })
  // })

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
