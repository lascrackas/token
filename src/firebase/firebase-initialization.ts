import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { initializeApp, getApps } from 'firebase/app';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import firebaseConfig from './firebaseconfig';

@Injectable({
  providedIn: 'root',
})
export class FirebaseInitializationService {
  constructor(private platform: Platform) {}

  initializeFirebaseApp(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (getApps().length === 0) {
        // Initialize Firebase app if it hasn't been initialized yet
        const app = initializeApp(firebaseConfig);

        if (this.platform.is('capacitor')) {
          initializeAuth(app, { persistence: indexedDBLocalPersistence });
        }
      }
      resolve();
    });
  }
}
