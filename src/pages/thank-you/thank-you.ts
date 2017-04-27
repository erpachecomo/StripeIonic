import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThankYou page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYou {
private token : string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.token = this.navParams.get('token');
    console.log(this.token);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYou');
  }

}
