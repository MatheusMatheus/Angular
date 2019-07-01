import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {

  cliente: Cliente;

  constructor() { }

  ngOnInit() {
    /*
    this.cliente = new Cliente();
    this.cliente.cpf = '012.345.678-90';
    this.cliente.nome = 'Fulano da Silva';
    this.cliente.status = 'ATIVO';
    */

    this.cliente = new Cliente(
      'Gabriel Silva',
      '01234567890',
      'ATIVO'
    );
  }

}
