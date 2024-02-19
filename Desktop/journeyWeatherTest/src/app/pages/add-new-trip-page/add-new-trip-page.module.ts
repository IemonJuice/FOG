import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddNewTripPageComponent} from "./add-new-trip-page.component";

const routes:Routes = [{
  path:'', component:AddNewTripPageComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddNewTripPageModule { }
