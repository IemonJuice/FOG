import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCpuComponent } from './page-cpu.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PageCpuComponent,
    PageCpuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'',component: PageCpuComponent}
      ]
    )
  ],
  exports:[PageCpuComponent,RouterModule]
})
export class PageCpuModule { }
