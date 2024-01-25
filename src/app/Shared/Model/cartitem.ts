import { Shoes } from "./Shoe";

export class CartItem{

    constructor(shoe:Shoes) {
        this.shoe=shoe;
        this.price;
    }

    shoe:Shoes;
    quantity:number=1;
    get price():number {
        return this.shoe.price*this.quantity;
    }
}