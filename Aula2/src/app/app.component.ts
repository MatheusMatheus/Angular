import {Component, OnInit} from '@angular/core';
import {Cliente} from './negocio/dominio/cliente';
import {Conta} from './negocio/dominio/conta';
import {ClienteService} from './negocio/service/cliente.service';
import {ContaService} from './negocio/service/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contasApp: Array<Conta>;
  clientesApp: Array<Cliente>;

  clienteDaVez: Cliente;

  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService
  ) {}

  ngOnInit() {
    this.clienteDaVez =
      this.clienteService.getCliente('01234567890');

    this.contasApp = this.contaService.getContas();
    this.clientesApp = this.clienteService.getClientes();
  }

  trocaCliente() {
    if (this.clienteDaVez.cpf === '01234567890') {
      this.clienteDaVez =
        this.clienteService.getCliente('98765432130');
    } else {
      this.clienteDaVez =
        this.clienteService.getCliente('01234567890');
    }
  }

  seleciona(conta: Conta) {
    this.clienteDaVez = conta.titular;
  }

  adicionaConta(conta: Conta) {
    this.contasApp.push(conta);
  }
}
