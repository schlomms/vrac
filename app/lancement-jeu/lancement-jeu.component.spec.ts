import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancementJeuComponent } from './lancement-jeu.component';

describe('LancementJeuComponent', () => {
  let component: LancementJeuComponent;
  let fixture: ComponentFixture<LancementJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancementJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancementJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
