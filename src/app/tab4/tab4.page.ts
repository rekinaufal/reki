import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProgrammingPage } from '../pages/programming/programming.page';
import { JaringanPage } from '../pages/jaringan/jaringan.page';
import { AnalisPage } from '../pages/analis/analis.page';
import { IsadPage } from '../pages/isad/isad.page';
import { BaumPage } from '../pages/baum/baum.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  constructor(private modalController : ModalController) {}

  async openProgramming(){
    const programming = await this.modalController.create({
    component : ProgrammingPage
    });
    programming.present();
  }
  async openJaringan(){
    const jaringan = await this.modalController.create({
    component : JaringanPage
    });
    jaringan.present();
  }
  async openAnalis(){
    const analis = await this.modalController.create({
    component : AnalisPage
    });
    analis.present();
  }
  async openIsad(){
    const analis = await this.modalController.create({
    component : IsadPage
    });
    analis.present();
  }
  async openBaum(){
    const analis = await this.modalController.create({
    component : BaumPage
    });
    analis.present();
  }
}
