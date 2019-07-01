import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { MensagensErroComponent } from './mensagens-erro/mensagens-erro.component';
import { MinDirective } from './validadores/min/min.directive';
import { MaxDirective } from './validadores/max/max.directive';
import { CpfDirective } from './validadores/cpf/cpf.directive';
import { SelectClienteComponent } from './inputs/select-cliente/select-cliente.component';
import {FormsModule} from '@angular/forms';
import { SelectTipoContaComponent } from './inputs/select-tipo-conta/select-tipo-conta.component';
import { SelectEstadoContaComponent } from './inputs/select-estado-conta/select-estado-conta.component';

@NgModule({
  declarations: [HighlightDirective, MensagensErroComponent, MinDirective, MaxDirective, CpfDirective, SelectClienteComponent, SelectTipoContaComponent, SelectEstadoContaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    MensagensErroComponent,
    MinDirective,
    MaxDirective,
    CpfDirective,
    SelectClienteComponent,
    SelectTipoContaComponent,
    SelectEstadoContaComponent
  ]
})
export class UtilModule { }
