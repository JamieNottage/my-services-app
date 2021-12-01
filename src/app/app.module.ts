import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementService } from './services/increment.service';
import { LoggingService } from './services/logging.service';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [IncrementService, LoggingService], // information for Angular Injector service
  bootstrap: [AppComponent],
})
export class AppModule {}
