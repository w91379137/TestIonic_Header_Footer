import { Component, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {

  dataArray: DataBlock[] = []

  constructor(
    public navCtrl: NavController
  ) {
    let category = Array.from({ length: 10 }, (_, i) => i)
    this.dataArray = category.map(number => new DataBlock(number.toString(), Array.from({ length: 10 }, (_, i) => (i + number * 10).toString())))
  }

  //Lifecycle ionic
  //https://blog.ionicframework.com/navigating-lifecycle-events/

  ionViewDidLoad() {
    console.log("ionViewDidLoad")
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter")
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter")
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave")
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave")
  }

  ionViewWillUnload() {
    console.log("ionViewWillUnload")
  }

  //Lifecycle Angular
  ngOnChanges() {
    console.log("ngOnChanges")
  }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

  //Action
  buttonClickAction(event) {
    console.log(event.target)
  }
}

class DataBlock {
  constructor(
    public title: string = "",
    public list: string[] = []
  ) { }
}
