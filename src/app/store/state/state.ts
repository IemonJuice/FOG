import { CatalogItem } from "../../features/feature-catalog/models/catalog-item.model";


export interface InitialState{
  originalData:CatalogItem[];
  filteredData:CatalogItem[];
}
export const initialState:InitialState ={
  filteredData: [],
  originalData: []
}
