import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListagemContasComponent],

  declarations: [ListagemContasComponent]
})
export class ContaModule { }
