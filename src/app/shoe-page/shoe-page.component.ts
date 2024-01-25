import { Component } from '@angular/core';
import { Shoes } from '../Shared/Model/Shoe';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.css']
})
export class ShoePageComponent {
 shoe!:Shoes;
 constructor(private activatedRoute:ActivatedRoute, 
  private shoeservice:ShoeserviceService , private cartService:CartService, private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
  shoeservice.getShoeById(params['id']).subscribe(servershoe=>{
    this.shoe=servershoe
  })
  })
 }

 addToCart(){
  this.cartService.addToCart(this.shoe);
  this.router.navigateByUrl('/cart-page') 
 }
}
