import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
/**
 * Generated class for the Login2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');
  }

    goNews(){
        // this.navCtrl.push('页面');
        //this.navCtrl.push(NewsPage);
        this.navCtrl.push(NewsPage, {
            title : '测试传参'
        });
    }

}
