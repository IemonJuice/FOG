import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {failureProductsLoadAction, loadAllProductsAction, successProductsLoadAction} from "../actions/actions";
import {GetAllProductsService} from "../../features/feature-catalog/services/get-all-products.service";

@Injectable()
export class AllProductsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllProductsAction),
      switchMap(() => this.getAllProducts.getAllProducts().pipe(
        () => {
          return this.getAllProducts.getAllProducts().pipe(
            map((products) => {
              return successProductsLoadAction({products});
            }),
            catchError((error) => {
              return of(failureProductsLoadAction({error}));
            })
          )
        }))
    ))

  constructor(
    private actions$: Actions,
    private getAllProducts: GetAllProductsService) {}
}
