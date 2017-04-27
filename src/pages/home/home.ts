import { ThankYou } from './../thank-you/thank-you';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Stripe: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
private token: string='';
private ngForm: any = {
  cc:'',
  cvc:'',
  month:'',
  year:''
};
  constructor(public navCtrl: NavController) {
    console.log(Stripe);
    Stripe.setPublishableKey('pk_test_gvmGbYRaQQbu2zU61xXZTISh');
  }

onSubmit(){
  console.log(this.ngForm);
  Stripe.card.createToken({
    number: this.ngForm.cc, //'4242424242424242'
    cvc: this.ngForm.cvc,//'123'
    exp_month: this.ngForm.month,//12
    exp_year: this.ngForm.year//2017
    
  }, (status, response) => this.stripeResponseHandler(status, response));
}
stripeResponseHandler(status,response){
  if(response.error){
    console.log('error');
    console.log(response.error.message);
  }else{
    this.token = response.id;
    console.log('Yay! tu token es:')
    console.log(this.token);
    this.navCtrl.push(ThankYou, {token:this.token});
  }
}
}
