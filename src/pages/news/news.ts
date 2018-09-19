import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.titleTitle = this.navParams.get('title');
  }

    titleTitle: any = ''
    ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
