import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLoginComponent} from "./page-login.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthServiceModule} from "../../services/auth-service/auth-service.module";



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PageLoginComponent}
    ]),
    ReactiveFormsModule,
    AuthServiceModule
  ],
  exports:[PageLoginComponent]
})
export class PageLoginModule { }
