import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) { }

  pushAction() {
    this.navCtrl.push(AboutPage)
  }

  popoverAction1() {
    let popover = this.popoverCtrl.create(AboutPage)
    popover.present()
  }

  popoverAction2() {
    let popover = this.popoverCtrl.create(AboutPage, {}, { cssClass: 'popoverCss' })
    popover.present()
  }

  popoverAction3() {
    let popover = this.popoverCtrl.create(AboutPage, {}, { cssClass: 'custom-wide-popover' })
    popover.present()
  }
}
