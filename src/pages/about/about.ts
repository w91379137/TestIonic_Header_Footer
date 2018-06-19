import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dataArray: DataBlock[] = []

  constructor(
    public navCtrl: NavController
  ) {
    let category = Array.from({ length: 20 }, (_, i) => i)
    this.dataArray = category.map(number => new DataBlock(number.toString(), Array.from({ length: 10 }, (_, i ) => (i + number * 10).toString())))
  }

  buttonClickAction(event) {
    console.log(event.target)
  }
}

class DataBlock {
  constructor(
    public title: string = "",
    public list: string[] = []
  ) {}
}
