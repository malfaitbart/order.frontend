import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {CartService} from '../../core/cart.service';
import { Item } from '../../core/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingcartitems$: Observable<Item[]> = of([]);
  public shoppingcartitems: Item[];

  constructor(private cartService: CartService) {
    this.shoppingcartitems$ = this
      .cartService
      .getItems();

      this.shoppingcartitems$.subscribe(_=>this.shoppingcartitems = _);
   }

  ngOnInit() {
  }

}
