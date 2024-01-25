import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Shared/Model/cart';
import { CartItem } from '../Shared/Model/cartitem';
import { bindCallback } from 'rxjs';
// import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';



 declare var Razorpay:any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

cart!:Cart;
constructor(private cartService:CartService, )
{
 
  this.setCart();
}

setCart(){
  this.cart=this.cartService.getCart();
}
removeFromCart(cartItem:CartItem)
{
this.cartService.removeFromCart(cartItem.shoe.id);
this.setCart();

}

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.shoe.id, quantity);
  this.setCart();
}

payNow(){
  const RazorpayOptions={
    description:"Sample",
    currency:'USD',
    name:'ShoeCraZe',
    amount:`${this.cart.totalPrice*100}`,
    key:'rzp_test_zvs79zxPSosBp3',
    theme:{
      color:'black'
    },
    modals:{
      ondismiss:()=>{
        console.log('dismissed');
      }
    }

  }

  const succesCallback= (paymentId:any)=>{
    console.log(paymentId);
    alert("payment Successfull!")
  }
  const failureCallback=(e:any)=>{
    console.log(e);
  }
  const deLete=(cartItem:CartItem)=>{
    this.cartService.removeFromCart;
  }

  Razorpay.open(RazorpayOptions, succesCallback);



 
}

}
