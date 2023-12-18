import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageCheckoutComponent} from "./page-checkout.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [PageCheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: '', component: PageCheckoutComponent}
      ]
    )
  ],
  exports: [PageCheckoutComponent, RouterModule]
})
export class PageCheckoutModule {
}
