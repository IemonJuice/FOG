import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSortingComponent } from './feature-sorting.component';

describe('FeatureSortingComponent', () => {
  let component: FeatureSortingComponent;
  let fixture: ComponentFixture<FeatureSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureSortingComponent]
    });
    fixture = TestBed.createComponent(FeatureSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
