import { Component, OnInit } from '@angular/core';
import { Item } from '../../core/item';
import { ItemsService } from '../../core/items.service';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  item: Item;

  constructor(private itemsService: ItemsService) {
    this.item= {
      name: '',
      description:'',
      price:0,
      amountOfStock:0
    };
   }

  ngOnInit() {
  }

  add(item: Item): void {
    if(!item.name) {return;}
    this.itemsService.AddItem(item)
      .subscribe();
  }
}