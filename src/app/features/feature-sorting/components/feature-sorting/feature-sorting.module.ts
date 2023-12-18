import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureSortingComponent} from "./feature-sorting.component";



@NgModule({
  declarations: [FeatureSortingComponent],
  imports: [
    CommonModule
  ],
  exports:[FeatureSortingComponent]
})
export class FeatureSortingModule { }
