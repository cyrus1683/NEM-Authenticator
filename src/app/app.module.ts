import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {XEMPipe} from "../pipes/xem.pipe";
import {TransactionModal} from "../pages/home/transaction.modal";
import {IonicStorageModule} from "@ionic/storage";
import {AccountHttpInstance} from "../values/accounthttp.value";
import {AccountHttp, TransactionHttp} from "nem-library";
import {TransactionHttpInstance} from "../values/transactionhttp.value";
import {SetupPage} from "../pages/setup/setup";
import {SetupAccountModal} from "../pages/setup/setup-account.modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetupPage,
    XEMPipe,
    TransactionModal,
    SetupAccountModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransactionModal,
    SetupPage,
    SetupAccountModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: AccountHttp, useValue: AccountHttpInstance},
    {provide: TransactionHttp, useValue: TransactionHttpInstance}
  ]
})
export class AppModule {}
