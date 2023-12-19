import {inject, Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CatalogItem} from "../models/catalog-item.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private asf = inject(AngularFirestore)

  getAllProducts(): Observable<CatalogItem[]> {
    return this.asf.collection('products').snapshotChanges().pipe(
      map(data => data.map(data => data.payload.doc.data()))
    ) as Observable<CatalogItem[]>
  }
}

