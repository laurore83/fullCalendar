import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FullCalendarModule], // register FullCalendar with your app],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
