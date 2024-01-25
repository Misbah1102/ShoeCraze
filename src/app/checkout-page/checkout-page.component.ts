import { Component } from '@angular/core';
import { Order } from '../Shared/Model/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../Service/cart.service';
import { UserService } from '../Service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(
    cartservice: CartService,
    private fb: FormBuilder,
    private userService: UserService,
    private toast: ToastrService
  ) {

    const cart = CartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice= cart.totalPrice;
}

ngOnInit(){
  let{name} = this.userService.currentUser;
 this.checkoutForm= this.fb.group({
  name:[name , Validators.required],
 })
}
get fc(){
  return this.checkoutForm.controls; 
}

createOrder(){
  if(this.checkoutForm.invalid){
    this.toast.warning('Please Fill The Inputs', 'Invalid Inputs');
    return;
  }
  this.order.name=this.fc['name'].value;
  console.log(this.order);
}
}
