import { Component, OnInit } from '@angular/core';
import { TouchID } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, public touchId: TouchID) {}

  public ngOnInit()
  {
    TouchID.isAvailable()
      .then(res => {
        console.log('Touch ID available');

        TouchID.verifyFingerprint('Scan Your Finger')
        .then(res => {
          alert(res);
        })
        .catch(err => {
          for (var key in err) {
            alert(err[key]);
          }
        })

      }, err => {
        for (var key in err) {
          alert(err[key]);
        }
      })
  }

}
