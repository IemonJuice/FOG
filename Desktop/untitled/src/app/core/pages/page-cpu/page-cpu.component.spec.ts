import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCpuComponent } from './page-cpu.component';

describe('PageCpuComponent', () => {
  let component: PageCpuComponent;
  let fixture: ComponentFixture<PageCpuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCpuComponent]
    });
    fixture = TestBed.createComponent(PageCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
