import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGpuComponent } from './page-gpu.component';

describe('PageGpuComponent', () => {
  let component: PageGpuComponent;
  let fixture: ComponentFixture<PageGpuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGpuComponent]
    });
    fixture = TestBed.createComponent(PageGpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
