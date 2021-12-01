import { Component, OnInit } from '@angular/core';
import { IncrementService } from 'src/app/services/increment.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  myservice: IncrementService;
  logging: LoggingService;
  counter: number = 100;

  constructor(service: IncrementService, logging: LoggingService) {
    console.log('ChildComponent Loaded...');
    this.myservice = service;
    this.logging = logging;
    this.logging.greeting('Child Component');
  }

  ngOnInit(): void {}

  callIncrement() {
    this.counter = this.myservice.incrementValue(this.counter);
  }
}
