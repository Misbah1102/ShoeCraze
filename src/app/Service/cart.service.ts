import { Injectable } from '@angular/core';
import { Cart } from '../Shared/Model/cart';
import { Shoes } from '../Shared/Model/Shoe';
import { CartItem } from '../Shared/Model/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private cart: Cart = new Cart();
  addToCart(shoe: Shoes): void {
    let cartItem = this.cart.items.find((item) => item.shoe.id === shoe.id);

    if (cartItem) {
      this.changeQuantity(shoe.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(shoe));
  }

  removeFromCart(shoeId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.shoe.id != shoeId);
  }
  changeQuantity(quantity: number, shoeId: number) {
    let cartItem = this.cart.items.find((item) => item.shoe.id === shoeId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  // changeSize(){

  // }

  getCart():Cart{
    return this.cart;
  }
  constructor() {}
}
