import { Item } from './item';

interface ItemsGroup {
	item: Item;
	amount: number;
}

export interface Order {	
	itemsgroup: ItemsGroup[];
	totalPrice: number;
}