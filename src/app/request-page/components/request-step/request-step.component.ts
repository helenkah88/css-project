import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-step',
  templateUrl: './request-step.component.html',
  styleUrls: ['./request-step.component.scss']
})
export class RequestStepComponent implements OnInit {

  @Input() idx: number = 0;
  @Input() order: string;
  @Input() stepInfo: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
