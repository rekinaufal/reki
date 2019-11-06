import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-analis',
  templateUrl: './analis.page.html',
  styleUrls: ['./analis.page.scss'],
})
export class AnalisPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
