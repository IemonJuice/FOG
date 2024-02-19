import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPerWeekComponent } from './weather-per-week.component';

describe('WeatherPerWeekComponent', () => {
  let component: WeatherPerWeekComponent;
  let fixture: ComponentFixture<WeatherPerWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherPerWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherPerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
