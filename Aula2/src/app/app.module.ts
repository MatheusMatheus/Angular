import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ClienteModule} from './cliente/cliente.module';
import {ContaModule} from './conta/conta.module';

import localePt from '@angular/common/locales/pt';
import extrasLocalePt from '@angular/common/locales/extra/pt';
import {registerLocaleData} from '@angular/common';
import {NegocioModule} from './negocio/negocio.module';
import {UtilModule} from './util/util.module';

registerLocaleData(localePt, 'pt-BR', extrasLocalePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ContaModule,
    NegocioModule,
    UtilModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
