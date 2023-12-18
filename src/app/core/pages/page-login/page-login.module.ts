import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLoginComponent} from "./page-login.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:PageLoginComponent}
    ])
  ],
  exports:[PageLoginComponent]
})
export class PageLoginModule { }
