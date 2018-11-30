export class Item{
	id?: string;
	name: string;
	description: string;
	price: number;
	amountOfStock: number;

	constructor(id: string, name:string, description:string,price:number,amountofstock:number){
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.amountOfStock = amountofstock;
	}
	
}