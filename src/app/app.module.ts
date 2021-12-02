import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementService } from './services/increment.service';
import { LoggingService } from './services/logging.service';
import { ChildComponent } from './components/child/child.component';
import { CustomobservableComponent } from './components/customobservable/customobservable.component';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, CustomobservableComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // provide HttpClient Service for data fetching
  providers: [IncrementService, LoggingService, PostService], // information for Angular Injector service
  // new IncrementService()
  bootstrap: [AppComponent],
})
export class AppModule {}
