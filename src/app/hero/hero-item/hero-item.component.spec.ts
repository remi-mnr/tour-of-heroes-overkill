import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Hero, Role } from '../model/hero.model';

import { HeroItemComponent } from './hero-item.component';

describe('HeroItemComponent', () => {
  let component: HeroItemComponent;
  let fixture: ComponentFixture<HeroItemComponent>;
  let hero: Hero = {
    id: "1",
    name: "All might",
    role: Role.Fighter
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroItemComponent);
    component = fixture.componentInstance;
    component.hero = hero
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve props', () => {
    expect(component.hero).toBe(hero);
  });

  it('should display the hero name', () => {
    expect(fixture.debugElement.query(By.css('mat-card-title')).nativeElement.innerText).toContain('All Might')
    
    const title: HTMLElement = fixture.nativeElement;
    expect(title.querySelector('mat-card-title')?.textContent).toContain('All Might')

    expect(fixture.nativeElement.querySelector('mat-card-title').textContent).toContain('All Might')
  })

  it('should display the hero description accordingly', () => {
    expect(fixture.debugElement.query(By.css('mat-card-content'))).toBeFalsy()
    let newHero: Hero = {
      id: "1",
      name: "All might",
      description: "New description",
      role: Role.Fighter
    }
    component.hero = newHero
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-card-content'))).toBeTruthy()
    expect(fixture.debugElement.query(By.css('mat-card-content p')).nativeElement.innerText).toContain(newHero.description)
  })

});
