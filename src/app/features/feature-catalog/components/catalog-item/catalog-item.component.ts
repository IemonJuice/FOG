import {Component, inject, Input} from '@angular/core';
import {CatalogItem} from "../../models/catalog-item.model";
import {Store} from "@ngrx/store";
import { moveProductToTheCheckout } from '../../../../../../FOG/src/app/store/actions/checkout-actions';

@Component({
  selector: 'app-catalog-item[product]',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product!: CatalogItem;
  store: Store = inject(Store)

  addProductToTheCheckout() {
    this.store.dispatch(moveProductToTheCheckout({product: this.product}))
  }
}
