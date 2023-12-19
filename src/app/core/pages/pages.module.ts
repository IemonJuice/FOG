import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./pages.routes";
import {AuthModule} from "@angular/fire/auth";




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
