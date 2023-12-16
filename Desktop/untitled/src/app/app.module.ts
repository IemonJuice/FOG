import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CoreModule} from "./core/core.module";
import {RouterModule, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    RouterOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
