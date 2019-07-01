import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { StatusClientePipe } from './pipes/status-cliente.pipe';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DadosClienteComponent, CpfPipe, StatusClientePipe, FormularioClienteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DadosClienteComponent,
    FormularioClienteComponent
  ]
})
export class ClienteModule { }
