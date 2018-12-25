import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs';

import { Item } from './item';


@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  private itemsInCart: Item[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Item) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Item[]> {
    return this.itemsInCartSubject;
  }
}