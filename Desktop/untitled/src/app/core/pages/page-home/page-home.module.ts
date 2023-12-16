import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHomeComponent} from "./page-home.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:PageHomeComponent}
    ])
  ],
  exports:[PageHomeComponent,RouterModule]
})
export class PageHomeModule { }
