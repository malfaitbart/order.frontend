import { Component, OnInit } from '@angular/core';

import { Item } from '../../core/item';
import { ItemsService } from '../../core/items.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.GetItems();
  }

  GetItems(): void {
    this.itemsService.GetItems()
      .subscribe(items => this.items = items);
  }

}
