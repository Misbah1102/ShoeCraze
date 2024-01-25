import { Component } from '@angular/core';
import { PaymentService } from '../Service/payment.service';
import { Cart } from '../Shared/Model/cart';


declare var Razorpay:any;



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cart!: Cart;

  
}
