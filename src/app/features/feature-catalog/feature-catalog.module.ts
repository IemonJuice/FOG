import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CatalogItemComponent} from './components/catalog-item/catalog-item.component';
import {GetAllProductsService} from "./services/get-all-products.service";


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent
  ],
  exports: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  providers:[GetAllProductsService]
})
export class FeatureCatalogModule {
}
