import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  @Input() clientes: Array<Cliente>;

  @Output() clienteSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  seleciona(cliente: Cliente) {
    this.clienteSelecionado.emit(cliente);
  }
}
