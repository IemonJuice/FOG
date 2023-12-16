import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageAccountComponent} from "./page-account.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PageAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'',component:PageAccountComponent}
      ]
    )
  ],
  exports:[PageAccountComponent,RouterModule]
})
export class PageAccountModule { }
