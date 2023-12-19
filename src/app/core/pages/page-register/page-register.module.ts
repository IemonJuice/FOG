import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRegisterComponent} from "./page-register.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [PageRegisterComponent],
    imports: [
        CommonModule, RouterModule.forChild([
            {path: '', component: PageRegisterComponent}
        ]), FormsModule, ReactiveFormsModule
    ],

  exports: [PageRegisterComponent]
})
export class PageRegisterModule { }
