import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';
import {NgForm} from '@angular/forms';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-formulario-conta',
  templateUrl: './formulario-conta.component.html',
  styleUrls: ['./formulario-conta.component.css']
})
export class FormularioContaComponent implements OnInit {

  conta: Conta;

  @Output() novaConta = new EventEmitter();
  @Input() clientes: Array<Cliente>;

  constructor() { }

  ngOnInit() {
    this.limpar();
  }

  salvar(form: NgForm) {
    if (!form.valid) return;

    this.novaConta.emit(this.conta);
    this.limpar();
  }

  limpar() {
    this.conta = new Conta(
      undefined,
      undefined,
      undefined,
      undefined,
      new Cliente(
        'Marcos Oliveira',
        '98765432130',
        'ATIVO'
      ),
      undefined,
      undefined
    );
  }

}
