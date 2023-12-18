import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRegisterComponent} from "./page-register.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PageRegisterComponent],
  imports: [
    CommonModule,RouterModule.forChild([
      {path:'',component:PageRegisterComponent}
    ])
  ],

  exports: [PageRegisterComponent]
})
export class PageRegisterModule { }
