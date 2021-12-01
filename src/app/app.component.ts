import { Component } from '@angular/core';
import { IncrementService } from './services/increment.service';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-services-app';
  myservice: IncrementService;
  logging: LoggingService;
  counter: number = 0;

  // Good place to initialise service is in a constructor
  // service instances are injected in the constructor of the component class
  // service = Angular Injector reference to IncrementService
  constructor(service: IncrementService, logging: LoggingService) {
    console.log('AppComponent Loaded...');
    this.myservice = service;
    this.logging = logging;
    this.logging.greeting('Root Component');
  }

  callIncrement() {
    this.counter = this.myservice.incrementValue(this.counter);
  }
}
