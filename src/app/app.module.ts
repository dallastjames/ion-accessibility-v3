import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestModalComponent } from '../components/test-modal/test-modal';

@NgModule({
    declarations: [MyApp, HomePage, TestModalComponent],
    imports: [BrowserModule, IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, HomePage, TestModalComponent],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
