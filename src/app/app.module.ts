import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { TagsComponent } from './tags/tags.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PaymentComponent } from './payment/payment.component'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SideNavComponent,
    CartPageComponent,
    ShoePageComponent,
    NotfoundComponent,
    AboutUSComponent,
    ContactComponent,
    TagsComponent,
    LoginComponent,
    SignupComponent,
    CheckoutPageComponent,
    PaymentComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-left',
      newestOnTop:false
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
