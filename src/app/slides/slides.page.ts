import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { NavController, IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  @Input() selectedIdCardIndex;
  @ViewChild(IonSlides, { static: true }) ionSlider: IonSlides;

  constructor(
    private navCtrl: NavController,
    private elementRef: ElementRef,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.slideToSliderIndex(this.selectedIdCardIndex);
  }

  async slideToSliderIndex(index: number) {
    if (index) {
      await this.ionSlider.slideTo(index);
    }
  }

  public ionViewDidEnter(): void {
    // Update is required for the new Ionic 5 upgrade as there is a issue with slides within modal.
    // Without this update, slide to targeted index is not working.
    // But the issue with this solution is there is a delay in sliding.
    this.ionSlider.update();
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
