import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteService} from './service/cliente.service';
import {ContaService} from './service/conta.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService,
    ContaService
  ]
})
export class NegocioModule { }
