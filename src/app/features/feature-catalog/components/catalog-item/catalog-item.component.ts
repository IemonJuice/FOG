import {Component, Input} from '@angular/core';
import {CatalogItem} from "../../models/catalog-item.model";

@Component({
  selector: 'app-catalog-item[product]',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product!: CatalogItem;

}
