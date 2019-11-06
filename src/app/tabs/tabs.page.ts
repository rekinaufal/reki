import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProgrammingPage } from '../pages/programming/programming.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController : ModalController) {}

  async openProgramming(){
    const programming = await this.modalController.create({
    component : ProgrammingPage
    });
    programming.present();
  }
}
