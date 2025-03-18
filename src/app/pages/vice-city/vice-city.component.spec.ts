import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceCityComponent } from './vice-city.component';

describe('ViceCityComponent', () => {
  let component: ViceCityComponent;
  let fixture: ComponentFixture<ViceCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViceCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViceCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
