import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta3Component } from './gta3.component';

describe('Gta3Component', () => {
  let component: Gta3Component;
  let fixture: ComponentFixture<Gta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gta3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
