import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-isad',
  templateUrl: './isad.page.html',
  styleUrls: ['./isad.page.scss'],
})
export class IsadPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
