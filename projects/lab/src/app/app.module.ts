import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDarkModule } from 'projects/ngx-dark/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDarkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
