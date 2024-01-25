import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../Shared/Model/cart';
import { CartItem } from '../Shared/Model/cartitem';
import { bindCallback } from 'rxjs';
import { PaymentComponent } from '../payment/payment.component';
import { PaymentService } from '../Service/payment.service';
// import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';



 declare var Razorpay:any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

cart!:Cart;
  // orderlist:any[]=[];
  isPaymentDone:boolean=false;
constructor(private cartService:CartService , private Payment: PaymentService)
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

  
   const RazorpayOptions ={
    description:'Sample Razorpay demo',
    currency:'USD',
    amount:`${this.cart.totalPrice * 100}` ,
    name:'ShoeCraZe',
    key:'rzp_test_zvs79zxPSosBp3',
    
    handler:(_response: any)=>{
      console.log("payment successfull", _response)
       
    },
    prefills:{
      name:'Misbah Memon',
      email:'mishu@gmail.com',
      phone:'9359551454',

    },
    theme:{
      color:'#000000',
    },
    modal:{
      ondismiss:()=>{
        console.log('dismissed')

      }
    }
   }


   const razr = new Razorpay(RazorpayOptions);
   razr.open();
 
  (   error: any)=>{
    console.error("payment failed ", error);

  }
   

}

// paywithRazorpay(Shoes:any[]){

//   const total = Shoes.reduce((sum, shoe)=> sum+ shoe.price, 0);

//   const orderDetail ={
//     amount : total,
//     currency:"USD",
//     items:Shoes.map(shoe=>({
//       id:shoe.id, 
//       quantity:shoe.quantity
//     }))
//   };

//   this.Payment.createOrder(orderDetail).subscribe(order=>{
//     const RazorpayOptions ={
//       description:'Sample Razorpay demo',
//       currency:'USD',
//       amount:`${this.cart.totalPrice * 100}` ,
//       name:'ShoeCraZe',
//       key:'rzp_test_zvs79zxPSosBp3',
      
     

//       prefills:{
//         name:'Misbah Memon',
//         email:'mishu@gmail.com',
//         phone:'9359551454',
  
//       },
//       theme:{
//         color:'#000000',
//       },
//       modal:{
//         ondismiss:()=>{
//           console.log('dismissed')
  
//         }
//       }
//      }
  
  
   
  
//   },
 
// }


// payNow(){

//   this.Payment['paywithRazorpay'](this.cart.items);
//   this.isPaymentDone=true;
// }
}
