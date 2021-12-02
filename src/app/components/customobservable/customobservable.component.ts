import { Component, OnInit } from '@angular/core';
import { Observable, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css'],
})
export class CustomobservableComponent {
  // create an Observable
  public myObservable: Observable<string>;
  public subscription: Unsubscribable;

  // push the data -> next()
  // push the error object -> error()
  // raise the complete signal -> complete()
  constructor() {
    console.log('CustomObservable Component Loaded...');
    this.myObservable = new Observable((observer) => {
      console.log('push the data from the observable');
      setTimeout(() => {
        observer.next('string 1');
      }, 2000);
      setTimeout(() => {
        observer.next('string 2');
      }, 4000);
      // setTimeout(() => {
      //   observer.error(new Error('Some error occurred'));
      // }, 6000);
      setTimeout(() => {
        observer.next('string 3');
      }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });
  }

  subscribeObservable() {
    this.subscription = this.myObservable.subscribe(
      (data: string) => {
        console.log(`Data received ${data}`);
      },
      (error) => {
        console.log(`Error received ${error}`);
      },
      () => {
        console.log('Complete signal from observable');
      }
    );
  }
  unsubscribeObservable() {
    this.subscription.unsubscribe();
  }
}
