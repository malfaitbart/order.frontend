import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../core/item';
import { ItemsService } from '../../core/items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {  
  item: Item;
  model: any = {};
  
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    ) {
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
    this.itemsService.AddItem(item)
      .subscribe(() => this.router.navigate(['/items']));
  }
}