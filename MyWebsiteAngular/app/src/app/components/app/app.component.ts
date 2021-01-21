import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import * as AOS from 'aos';
import { BeerSlider } from '../../../../custom_scripts/beerSlider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public hiddenDivSecond;
  public hiddenDivFirst;
  public slider: BeerSlider;

  public isCollapsed = true;
  constructor(
    private viewportScroller: ViewportScroller) {
  }

  navigateTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    })

    this.slider = new BeerSlider(document.getElementById("slider1"));
  }

  onJumbotronBackgroundMouseEnter = function (direction) {
    this.slider.reveal(direction);
  }

}

