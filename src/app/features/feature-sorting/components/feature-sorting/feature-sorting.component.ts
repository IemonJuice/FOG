import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  sortProductsByNameASC,
  sortProductsByNameDSC,
  sortProductsByPriceASC,
  sortProductsByPriceDSC
} from "../../../../store/actions/actions";

@Component({
  selector: 'app-feature-sorting',
  templateUrl: './feature-sorting.component.html',
  styleUrls: ['./feature-sorting.component.scss']
})
export class FeatureSortingComponent {
  store: Store = inject(Store)

  sortByPrice(value: string) {
    if (value === 'toHighPriceSortingMode') {
      this.store.dispatch(sortProductsByPriceASC())
    }
    else{
      this.store.dispatch(sortProductsByPriceDSC())
    }
  }

  sortByName(value: string) {
    if (value === 'toHighPriceSortingMode') {
      this.store.dispatch(sortProductsByNameASC())
    }
    else{
      this.store.dispatch(sortProductsByNameDSC())
    }
  }
}
