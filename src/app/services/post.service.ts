import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  myObservable: Observable<any>;
  // performs HTTP request & responses with external app
  public http: HttpClient;
  constructor(http: HttpClient) {
    console.log('Injecting HttpClient');
    this.http = http;
  }

  public getPosts() {
    this.myObservable = this.http.get(this.url);
    this.myObservable.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete Signal');
      }
    );
  }
}
