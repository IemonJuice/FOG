import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTripWeatherComponent } from './current-trip-weather.component';

describe('CurrentTripWeatherComponent', () => {
  let component: CurrentTripWeatherComponent;
  let fixture: ComponentFixture<CurrentTripWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTripWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentTripWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
