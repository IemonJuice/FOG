import {Component, DoCheck, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CatalogItem} from "../../../features/feature-catalog/models/catalog-item.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit ,DoCheck {

  checkoutProducts!: Observable<CatalogItem[]>;
  totalPrice: number = 0;
  quantity: number = 0;

  ngOnInit(): void {
    this.checkoutProducts = this.store.select('checkoutProducts')
    this.checkoutProducts.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
       this.totalPrice+= Number(data[i].price);
      }
      this.quantity = data.length;
    })
  }

  ngDoCheck(): void {
    this.totalPrice = 0;
    this.checkoutProducts.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.totalPrice+= Number(data[i].price);
      }
      this.quantity = data.length;
    })
  }

  store: Store<{ checkoutProducts: CatalogItem[] }> = inject(Store<{ checkoutProducts: CatalogItem[] }>)

}
