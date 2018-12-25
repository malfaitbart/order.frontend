import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/item';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public shoppingcartitems$: Observable<Item[]>;

  constructor(
    // private cartService: CartService
  ) {
    // this.shoppingcartitems$ = this.cartService.getItems();
    // this.shoppingcartitems$.subscribe(_ => _);
  }

  ngOnInit() {
  }

}
