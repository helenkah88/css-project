import { Component, OnInit, Input } from '@angular/core';

const SMALL_SCREEN: number = 640;

@Component({
  selector: 'app-image',
  template: `
    <img [ngClass]="setClass(idx)" *ngIf="!isSmallScreen()" src="{{imgPath}}/{{imgUrl}}.png" srcset="{{imgPath}}/{{imgUrl}}@2x.png 2x, {{imgPath}}/{{imgUrl}}@3x.png 3x" alt="">
    <img [ngClass]="setClass(idx)" *ngIf="isSmallScreen()" src="{{imgPath}}/mobile/{{imgUrl}}.png" srcset="{{imgPath}}/mobile/{{imgUrl}}@2x.png 2x, {{imgPath}}/{{imgUrl}}@3x.png 3x" alt="">
  `,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  private matchMedia: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN}px)`);
  @Input() imgUrl: string;
  @Input() idx: number;
  imgPath = '/assets/img';


  constructor() { }

  ngOnInit() {
  }

  isSmallScreen(): boolean {
    return this.matchMedia.matches;
  }

  setClass(idx) {
    return `step-${++idx}`
  }
}
