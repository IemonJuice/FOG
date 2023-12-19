import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CoreModule} from "./core/core.module";
import {RouterOutlet} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {loadAllProductsReducer} from "./store/reducers/reducers";
import {AllProductsEffects} from "./store/effects/effects";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot({products:loadAllProductsReducer}, {}),
    EffectsModule.forRoot([AllProductsEffects]),
    RouterOutlet,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
