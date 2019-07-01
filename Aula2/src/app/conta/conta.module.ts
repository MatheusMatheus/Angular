import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { EstadoContaPipe } from './pipes/estado-conta.pipe';
import { TipoContaPipe } from './pipes/tipo-conta.pipe';
import { FormularioContaComponent } from './formulario-conta/formulario-conta.component';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilModule
  ],
  exports: [ListagemContasComponent, FormularioContaComponent],

  declarations: [ListagemContasComponent, EstadoContaPipe, TipoContaPipe, FormularioContaComponent]
})
export class ContaModule { }
