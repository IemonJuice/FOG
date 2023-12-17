import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHomeComponent} from "./page-home.component";
import {RouterModule} from "@angular/router";
import { HeroModule } from '../../components/hero/hero.module';




@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PageHomeComponent}
    ]),
    HeroModule
  ],
  exports:[PageHomeComponent,RouterModule]
})
export class PageHomeModule { }
