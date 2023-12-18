import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCpuComponent } from './page-cpu.component';
import {RouterModule} from "@angular/router";
import { FeatureSortingModule } from "../../../features/feature-sorting/components/feature-sorting/feature-sorting.module";
import {
  FeatureFilteringModule
} from "../../../features/feature-filtering/components/feature-filtering/feature-filtering.module";
import {FeatureCatalogModule} from "../../../features/feature-catalog/feature-catalog.module";



@NgModule({
  declarations: [
    PageCpuComponent,
    PageCpuComponent
  ],
  imports: [
    CommonModule,
    FeatureSortingModule,
    FeatureFilteringModule,
    FeatureCatalogModule,
    RouterModule.forChild(
      [
        {path:'',component: PageCpuComponent}
      ]
    )
  ],
  exports:[PageCpuComponent,RouterModule]
})
export class PageCpuModule { }
