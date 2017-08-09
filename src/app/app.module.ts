import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {PersonComponent} from './person.component';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent, PersonComponent,ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule, FormsModule, AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
