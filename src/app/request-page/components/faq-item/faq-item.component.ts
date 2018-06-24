import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {

  @Input() info: any;
  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.visible = !this.visible;
    return false;
  }

}
