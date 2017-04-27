import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Thankyou } from './thankyou';

@NgModule({
  declarations: [
    Thankyou,
  ],
  imports: [
    IonicPageModule.forChild(Thankyou),
  ],
  exports: [
    Thankyou
  ]
})
export class ThankyouModule {}
