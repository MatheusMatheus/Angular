import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../negocio/service/cliente.service';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})
export class CrudClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  cadastrando: Cliente;
  visualizando: Cliente;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.buscaClientes();
  }

  private buscaClientes() {
    let observable = this.clienteService.buscaTodos();

    observable.subscribe(clientes => {
      this.clientes = clientes;

      console.log(this.clientes);
    });
  }

  async cadastrar(cliente: Cliente) {
    /*
    this.clienteService
      .cadastra(cliente)
      .subscribe(() => {

        if (cliente.status === 'ATIVO') {
          this.clienteService.ativa(cliente).subscribe(() => {

            this.buscaClientes();

            this.cadastrando = undefined;

          });
        } else {
          this.buscaClientes();

          this.cadastrando = undefined;
        }

    });
  */

    await this.clienteService.cadastra(cliente).toPromise();

    if (cliente.status === 'ATIVO') {
      await this.clienteService.ativa(cliente).toPromise();
    }

    this.buscaClientes();

    this.cadastrando = undefined;

  }

  ativar() {
    this.clienteService.ativa(this.visualizando);

    this.visualizando = this.clienteService.buscaPorCPF(this.visualizando.cpf)

    this.buscaClientes();
  }

  async remover() {
    await this.clienteService.remove(this.visualizando);

    this.buscaClientes();
  }

  novoCadastro() {
    this.cadastrando = new Cliente(
      undefined,
      undefined,
      'PENDENTE'
    );
  }
}
