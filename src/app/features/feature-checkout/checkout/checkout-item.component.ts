import {Component, inject, Input} from '@angular/core';
import {CatalogItem} from "../../feature-catalog/models/catalog-item.model";
import {Store} from "@ngrx/store";
import {removeProductFromTheCheckout} from "../../../store/actions/actions";

@Component({
  selector: 'app-checkout-item[product]',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent {
  @Input() product!: CatalogItem;
  store: Store = inject(Store);

  removeProductFromCheckout() {
    this.store.dispatch(removeProductFromTheCheckout({name: this.product.name}));
  }
}
