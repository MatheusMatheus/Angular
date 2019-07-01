import { Injectable } from '@angular/core';
import {Conta} from '../dominio/conta';
import {Cliente} from '../dominio/cliente';

@Injectable()
export class ContaService {

  constructor() { }

  getContas(): Array<Conta> {
    return [
      new Conta(
        7,
        12345,
        '0',
        'POUPANCA',
        new Cliente(
          'Cliente 1',
          '01234567980',
          'ATIVO'
        ),
        'ATIVA',
        10
      ),
      new Conta(
        7,
        54321,
        '1000',
        'POUPANCA',
        new Cliente(
          'Cliente 3',
          '98765432109',
          'ATIVO'
        ),
        'INATIVA',
        10
      ),
      new Conta(
        7,
        66666,
        '100',
        'CORRENTE',
        new Cliente(
          'Cliente 2',
          '01430376171',
          'ATIVO'
        ),
        'ATIVA',
        null
      )
    ];
  }
}
