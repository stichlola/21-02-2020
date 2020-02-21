import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertPageComponent } from './insert-page/insert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    InsertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
