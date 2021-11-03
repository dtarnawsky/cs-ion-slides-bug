We are facing an issue with ion-slides after upgrading to ionic 5. We have slides inside a modal and has two actions, one is slide to next or previous with sliding on the screen and the other is on click of an element, we take them to respective slide. For the second action with the click , we are using ionSlides.slideTo(Index) as below.

  async slideToSliderIndex(index: number) {
    if (index) {
      await this.ionSlider.slideTo(index);
    }
  }
  
Which used to work in previous ionic versions. But with Ionic 5, it is not throwing any error but stops executing after triggering ionSlider.slideTo() and in the view we see blank slide with no content. We tried wrapping the above in try/catch or adding timeout but we still dont see any difference.
Finally, after many trial and errors, we explicitly ended up updating slides in ionViewDidEnter() as below. This does slide to the targeted index, but in this case we can see the first slide for 5-10seconds and then slides to the targeted one.

  public ionViewDidEnter(): void {
    this.ionSlider.update();
  }
  
Importantly, we found this issue only happening when the slides are inside a modal and can be reproduced easily with any demo app. Can you try and suggest if there is any solution to address this issue? The requirement is, when we try to slide programmatically passing the index, it should directly open that specific slide instead of going to the first slide and then sliding to the targeted index.
