import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammingPageModule } from './pages/programming/programming.module';
import { JaringanPageModule } from './pages/jaringan/jaringan.module';
import { AnalisPageModule } from './pages/analis/analis.module';
import { IsadPageModule } from './pages/isad/isad.module';
import { BaumPageModule } from './pages/baum/baum.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ProgrammingPageModule,
    JaringanPageModule,
    AnalisPageModule,
    IsadPageModule,
    BaumPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
