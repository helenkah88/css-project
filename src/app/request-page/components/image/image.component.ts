import { Component, OnInit, Input } from '@angular/core';

const SMALL_SCREEN: number = 640;

@Component({
  selector: 'app-image',
  template: `
    <img *ngIf="!isSmallScreen()" src="/assets/img/{{imgUrl}}" srcset="/assets/img/{{imgUrl}}@2x 2x, {{imgUrl}}@3x 3x" alt="">
    <img *ngIf="isSmallScreen()" src="/assets/img/mobile/{{imgUrl}}" srcset="/assets/img/mobile/{{imgUrl}}@2x 2x, {{imgUrl}}@3x 3x" alt="">
  `,
  styles: []
})
export class ImageComponent implements OnInit {

  private matchMedia: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN}px)`);
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

  isSmallScreen(): boolean {
    return this.matchMedia.matches;
  }
}
