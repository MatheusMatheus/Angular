import { Injectable } from '@angular/core';
import {Cliente} from '../dominio/cliente';

@Injectable()
export class ClienteService {

  clientes = [
    new Cliente(
      'Gabriel Silva',
      '01234567890',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'ATIVO'
    )
  ];

  constructor() {}

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  getCliente(cpf: string): Cliente {
    for (const cliente of this.clientes) {
      if (cliente.cpf === cpf) {
        return cliente;
      }
    }

    return null;
  }

}
