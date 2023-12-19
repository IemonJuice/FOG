import {Component, inject} from '@angular/core';
import { Store } from '@ngrx/store';
import {filterByRating, filterByType, loadAllProductsAction} from "../../../../store/actions/actions";

@Component({
  selector: 'app-feature-filtering',
  templateUrl: './feature-filtering.component.html',
  styleUrls: ['./feature-filtering.component.scss']
})
export class FeatureFilteringComponent {
  private store:Store = inject(Store)
  filterByRating(number: number) {
    this.store.dispatch(filterByRating({ratingNumber:number}));
  }
  filterByType(type:string){
    this.store.dispatch(filterByType({productType:type}));
  }
}
