import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtaVComponent } from './gta-v.component';

describe('GtaVComponent', () => {
  let component: GtaVComponent;
  let fixture: ComponentFixture<GtaVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GtaVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
