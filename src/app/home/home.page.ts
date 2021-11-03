import { Component, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { SlidesPage } from '../slides/slides.page';

interface Menu {
  title: string;
  target: string;
}

const GIT_URL = 'https://github.com/johnwargo/ionic-slides-example';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonList, {static: true}) menuItems: IonList;

  menu: Menu[] = [
    {
      title: 'Open Slide 1',
      target: 'slides1'
    },
    {
      title: 'Open Slide 2',
      target: 'slides2'
    },
    {
      title: 'Open Slide 3',
      target: 'slides3'
    }
  ];

  constructor(private modalController: ModalController) {}

  openRepo() {
    console.log(`Opening: ${GIT_URL}`);
    window.open(GIT_URL);
  }

  async cardClicked(index) {
    const modal = await this.modalController.create({
      component: SlidesPage,
      cssClass: 'id-card-modal',
      backdropDismiss: false,
      componentProps: {
        selectedIdCardIndex: index
      }
    });
    console.log('before present');
    await modal.present();
  }

}
