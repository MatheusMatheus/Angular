import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClienteModule} from './cliente/cliente.module';
import {ContaModule} from './conta/conta.module';

import localePt from '@angular/common/locales/pt';
import extrasLocalePt from '@angular/common/locales/extra/pt';
import {registerLocaleData} from '@angular/common';
import {NegocioModule} from './negocio/negocio.module';
import {UtilModule} from './util/util.module';
import {CrudClienteComponent} from './crud/crud-cliente/crud-cliente.component';
import {CrudContaComponent} from './crud/crud-conta/crud-conta.component';
import {SaqueComponent} from './transacao/saque/saque.component';
import {DepositoComponent} from './transacao/deposito/deposito.component';
import {TransferenciaComponent} from './transacao/transferencia/transferencia.component';
import {FormsModule} from '@angular/forms';

registerLocaleData(localePt, 'pt-BR', extrasLocalePt);

@NgModule({
  declarations: [
    AppComponent,
    CrudClienteComponent,
    CrudContaComponent,
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent,
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ContaModule,
    NegocioModule,
    FormsModule,
    UtilModule,
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
