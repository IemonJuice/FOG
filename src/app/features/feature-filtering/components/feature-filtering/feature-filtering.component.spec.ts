import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFilteringComponent } from './feature-filtering.component';

describe('FeatureFilteringComponent', () => {
  let component: FeatureFilteringComponent;
  let fixture: ComponentFixture<FeatureFilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureFilteringComponent]
    });
    fixture = TestBed.createComponent(FeatureFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
