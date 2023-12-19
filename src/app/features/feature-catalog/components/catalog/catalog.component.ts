import {Component} from '@angular/core';
import {GetAllProductsService} from "../../services/get-all-products.service";
import {CatalogItem} from "../../models/catalog-item.model";
import {Store} from "@ngrx/store";
import {loadAllProductsAction} from "../../../../store/actions/actions";
import {Observable} from "rxjs";
import {InitialState} from "../../../../store/state/state";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: Observable<CatalogItem[]> = this.store.select('products','filteredData');

  constructor(private store:Store<{products:InitialState}>) {
    this.store.dispatch(loadAllProductsAction());
  }
}
