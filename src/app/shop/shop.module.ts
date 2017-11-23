import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';


export const routes = [     
  { path: '', component: CartComponent },     
  { path: 'checkout', component: CheckoutComponent },    
  { path: 'confirm', component: ConfirmComponent } 
];


@NgModule({
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ],
  declarations: [CartComponent, CheckoutComponent, ConfirmComponent]
})
export class ShopModule { }
