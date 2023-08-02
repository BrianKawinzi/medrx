import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBenefitsComponent } from './features-benefits.component';

describe('FeaturesBenefitsComponent', () => {
  let component: FeaturesBenefitsComponent;
  let fixture: ComponentFixture<FeaturesBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesBenefitsComponent]
    });
    fixture = TestBed.createComponent(FeaturesBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
