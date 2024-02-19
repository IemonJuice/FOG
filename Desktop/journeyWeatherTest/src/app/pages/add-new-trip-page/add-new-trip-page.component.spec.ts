import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTripPageComponent } from './add-new-trip-page.component';

describe('AddNewTripPageComponent', () => {
  let component: AddNewTripPageComponent;
  let fixture: ComponentFixture<AddNewTripPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTripPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
