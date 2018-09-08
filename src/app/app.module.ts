import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';




import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppRoutingModule } from './app.routing';
import { ProductsModule } from './app-modules/products/products.module';
import { MatIconModule } from '@angular/material/icon';
import { AppLoginModule } from './app-login/app-login.module';

@NgModule({
  declarations: [
    AppComponent,AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    ProductsModule,
    AppLoginModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
