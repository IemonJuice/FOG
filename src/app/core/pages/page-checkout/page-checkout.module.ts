import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageCheckoutComponent} from "./page-checkout.component";
import {RouterModule} from "@angular/router";
import {FeatureCheckoutModule} from "../../../features/feature-checkout/feature-checkout.module";


@NgModule({
  declarations: [PageCheckoutComponent],
  imports: [
    CommonModule,
    FeatureCheckoutModule,
    RouterModule.forChild(
      [
        {path: '', component: PageCheckoutComponent}
      ]
    ),
  ],
  exports: [PageCheckoutComponent, RouterModule]
})
export class PageCheckoutModule {
}
