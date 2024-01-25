import { CartItem } from "./cartitem";

export class Cart{
    // [x: string]: Cart;
    items:CartItem[]=[];

    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}