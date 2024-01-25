import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Shared/Model/cart';
import { CartItem } from '../Shared/Model/cartitem';
import { Shoes } from '../Shared/Model/Shoe';
import { Shoes_Url } from '../Shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  [x: string]: any;

  constructor(private http:HttpClient) { 

    
  }
  createOrder(orderDeatil:any):Observable<Shoes>{
return this.http.post<Shoes>(Shoes_Url,  orderDeatil);
  }


}
