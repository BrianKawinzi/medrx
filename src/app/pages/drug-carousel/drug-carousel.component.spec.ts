import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCarouselComponent } from './drug-carousel.component';

describe('DrugCarouselComponent', () => {
  let component: DrugCarouselComponent;
  let fixture: ComponentFixture<DrugCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugCarouselComponent]
    });
    fixture = TestBed.createComponent(DrugCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
