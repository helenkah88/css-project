import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss']
})
export class RequestPageComponent implements OnInit {

  /*imgUrls: any[] = [
    'step-2-pic/step-2-pic.png',
    'step-3-pic/step-3-pic.png',
    'step-4-pic/step-4-pic.png'
  ];*/

  stepsInfo: any[] = [
    {
      imgUrl: 'browse-pic/browse-pic.png',
      textInfo: {
        title: 'Find the perfect model',
        text: ['Use the search filters on the Browse page to find a model to best fit your job.', 'Once you find the perfect model, go to their profile and click on Send Request. You will have the option between a Booking, Option, and Casting invitation. (More on request types below).']
      }
    },
    {
      imgUrl: 'step-2-pic/step-2-pic.png',
      textInfo: {
        title: 'Create your request',
        text: ['Fill out the request form with details of your job. If you have an existing Project, you can use the Project Title dropdown to prefill Project information - time saver!', 'The more detailed you are, the more likely a model will be to accept your request.']
      }
    },
    {
      imgUrl: 'step-3-pic/step-3-pic.png',
      textInfo: {
        title: 'Receive confirmation',
        text: ['After sending your request, the model will have the opportunity to accept or decline. Usually models respond within 24 hours.', 'You will receive an email and a notification in your web account when the model responds.']
      }
    },
    {
      imgUrl: 'step-4-pic/step-4-pic.png',
      textInfo: {
        title: 'Messaging final details',
        text: ['Once your booking is confirmed, you can continzue messaging directly with the model about any last-minute details, like where to park or what to wear.', 'If you have a model release or call sheet to share, you can include attachments in the message thread.']
      }
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
