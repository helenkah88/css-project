import { Component, OnInit } from '@angular/core';
/*
import 'jquery';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/util';*/

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  faqInfo: object[] = [
    {
      title: 'Getting Started',
      info: [
        { q: 'What is a booking request?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        },
        { q: 'What is an option request?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        },
        { q: 'What is a casting request?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        }
      ]
    },
    {
      title: 'Account',
      info: [
        { q: 'How do I set up a public casting?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        },
        { q: 'How do I view my public profile?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        },
        { q: 'How does paying through Newbook work?',
          a: 'After sending your request, the model will have the opportunity to accept of decline. Usually models respond.'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
