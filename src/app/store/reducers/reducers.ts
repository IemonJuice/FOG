import {createReducer, on} from "@ngrx/store";
import {initialState, initialStateCheckout} from "../state/state";
import {
  filterByRating, filterByType, moveProductToTheCheckout, removeProductFromTheCheckout,
  sortProductsByNameASC,
  sortProductsByNameDSC,
  sortProductsByPriceASC,
  sortProductsByPriceDSC,
  successProductsLoadAction
} from "../actions/actions";
import {CatalogItem} from "../../features/feature-catalog/models/catalog-item.model";

export const loadAllProductsReducer = createReducer(initialState,

  on(successProductsLoadAction, (state, {products}) => {
    return {
      originalData: products,
      filteredData: products
    }
  }),

  on(sortProductsByPriceASC, (state) => {
      return {
        originalData: state.originalData.slice().sort((a: CatalogItem, b: CatalogItem) => a.price - b.price),
        filteredData: state.filteredData.slice().sort((a: CatalogItem, b: CatalogItem) => a.price - b.price),
      }
    }
  ),

  on(sortProductsByPriceDSC, (state) => {
      return {
        originalData: state.originalData.slice().sort((a: CatalogItem, b: CatalogItem) => b.price - a.price),
        filteredData: state.filteredData.slice().sort((a: CatalogItem, b: CatalogItem) => b.price - a.price),
      }
    }
  ),

  on(sortProductsByNameASC, (state) => {
      return {
        originalData: state.originalData.slice().sort((a: CatalogItem, b: CatalogItem) => a.name.localeCompare(b.name)),
        filteredData: state.filteredData.slice().slice().sort((a: CatalogItem, b: CatalogItem) => a.name.localeCompare(b.name)),
      }
    }
  ),

  on(sortProductsByNameDSC, (state) => {
      return {
        originalData: state.originalData.slice().sort((a: CatalogItem, b: CatalogItem) => b.name.localeCompare(a.name)),
        filteredData: state.filteredData.slice().slice().sort((a: CatalogItem, b: CatalogItem) => b.name.localeCompare(a.name)),
      }
    }
  ),

  on(filterByRating, (state, {ratingNumber}) => {
    return {
      originalData: state.originalData,
      filteredData: state.originalData.filter(catalogItem => catalogItem.rating === ratingNumber)
    }
  }),

  on(filterByType, (state, {productType}) => {
    return {
      originalData: state.originalData,
      filteredData: state.originalData.filter(catalogItem => catalogItem.type === productType)
    }
  }),
)

export const checkoutReducer = createReducer(initialStateCheckout,

  on(moveProductToTheCheckout, (state, {product}) => {
    return [...state, product]
  }),

  on(removeProductFromTheCheckout, (state, {name}) => {
    return [...state.filter((product:CatalogItem) =>product.name!==name)]
  }),

)
