import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureFilteringComponent} from "./feature-filtering.component";



@NgModule({
  declarations: [FeatureFilteringComponent],
  imports: [
    CommonModule
  ],
  exports: [FeatureFilteringComponent]
})
export class FeatureFilteringModule { }
