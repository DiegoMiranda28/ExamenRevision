import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloAreaComponent } from './titulo-area.component';

describe('TituloAreaComponent', () => {
  let component: TituloAreaComponent;
  let fixture: ComponentFixture<TituloAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
