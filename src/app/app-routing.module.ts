import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [

{ path:'', component:HomeComponent},
{path:'home', component:HomeComponent },
{path:'search/:searchItem', component:HomeComponent},
{path:'shoe/:id', component:ShoePageComponent},
{path:'cart-page', component:CartPageComponent },
{path:'notfound', component:HomeComponent},
{path:'about-us', component:AboutUSComponent},
{path:'contact', component:ContactComponent},
{path:'tag/:tag', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'checkout', component:CheckoutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
