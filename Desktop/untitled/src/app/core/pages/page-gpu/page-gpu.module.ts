import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGpuComponent } from './page-gpu.component';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    PageGpuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'',component: PageGpuComponent,}
      ]
    )
  ],
  exports: [PageGpuComponent,RouterModule],
})
export class PageGpuModule { }
