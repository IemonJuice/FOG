import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckoutItemComponent} from "./checkout/checkout-item.component";



@NgModule({
  declarations: [CheckoutItemComponent],
  imports: [
    CommonModule
  ],
  exports:[CheckoutItemComponent]
})
export class FeatureCheckoutModule { }
