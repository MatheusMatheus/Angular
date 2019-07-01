import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClienteModule} from './cliente/cliente.module';
import {ContaModule} from './conta/conta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
