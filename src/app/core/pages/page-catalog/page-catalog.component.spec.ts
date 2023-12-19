import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogComponent } from './page-catalog.component';

describe('PageCpuComponent', () => {
  let component: PageCatalogComponent;
  let fixture: ComponentFixture<PageCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCatalogComponent]
    });
    fixture = TestBed.createComponent(PageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
