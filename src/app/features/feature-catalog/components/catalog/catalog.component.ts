import {Component} from '@angular/core';
import {GetAllProductsService} from "../../services/get-all-products.service";
import {CatalogItem} from "../../models/catalog-item.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: CatalogItem[] = [];

  constructor(private getAllProductsService: GetAllProductsService) {
    this.getAllProductsService.getAllProducts().subscribe((products: CatalogItem[]) => {
      this.products = products
    });
  }
}
