import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseInitializationService } from 'src/firebase/firebase-initialization';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseInitializationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (firebaseInit: FirebaseInitializationService) => () =>
        firebaseInit.initializeFirebaseApp(),
      multi: true,
      deps: [FirebaseInitializationService],
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
