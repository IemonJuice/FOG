import {createAction, props} from "@ngrx/store";
import {CatalogItem} from "../../features/feature-catalog/models/catalog-item.model";


export const moveProductToTheCheckout = createAction('[Checkout] add to the checkout', props<{ product: CatalogItem}>());
export const removeProductFromTheCheckout = createAction('[Checkout] remove by name from the checkout', props<{ name: string }>())


export const loadAllProductsAction = createAction('[Catalog] load all products')
export const successProductsLoadAction = createAction('[Catalog] load success', props<{ products: CatalogItem[] }>())
export const failureProductsLoadAction = createAction('[Catalog] load failure', props<{ error: unknown }>())

export const sortProductsByPriceASC = createAction('[Catalog] sort products by price ascending');
export const sortProductsByPriceDSC = createAction('[Catalog] sort products by price descending');
export const sortProductsByNameASC = createAction('[Catalog] sort products by name ascending');
export const sortProductsByNameDSC = createAction('[Catalog] sort products by name descending');
export const filterByRating = createAction('[Catalog] filter by rating',props<{ ratingNumber: number }>());
export const filterByType = createAction('[Catalog] filter by type', props<{ productType: string }>());
