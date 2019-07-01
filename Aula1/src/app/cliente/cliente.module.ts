import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { StatusClientePipe } from './pipes/status-cliente.pipe';

@NgModule({
  declarations: [DadosClienteComponent, CpfPipe, StatusClientePipe],
  imports: [
    CommonModule
  ],
  exports: [
    DadosClienteComponent
  ]
})
export class ClienteModule { }
