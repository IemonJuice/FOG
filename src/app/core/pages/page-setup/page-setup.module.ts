import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageSetupComponent} from './page-setup.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PageSetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component: PageSetupComponent}
    ])
  ],
  exports: [PageSetupComponent,RouterModule]
})
export class PageSetupModule {
}
