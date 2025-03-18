import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanAndreasComponent } from './san-andreas.component';

describe('SanAndreasComponent', () => {
  let component: SanAndreasComponent;
  let fixture: ComponentFixture<SanAndreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanAndreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanAndreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
