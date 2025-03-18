import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDeadRedemptionComponent } from './red-dead-redemption.component';

describe('RedDeadRedemptionComponent', () => {
  let component: RedDeadRedemptionComponent;
  let fixture: ComponentFixture<RedDeadRedemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedDeadRedemptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDeadRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
