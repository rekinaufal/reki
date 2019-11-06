import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-jaringan',
  templateUrl: './jaringan.page.html',
  styleUrls: ['./jaringan.page.scss'],
})
export class JaringanPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
