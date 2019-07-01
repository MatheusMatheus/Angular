import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  private contas: Conta[] = new Array();
  constructor() {
    this.contas.push(new Conta(123, "Ativo", 5, 200.0, "corrente", "Matheus", new Date()));
    this.contas.push(new Conta(456, "Ativo", 5, 200.0, "corrente", "Matheus", new Date()));
    this.contas.push(new Conta(789, "Ativo", 5, 200.0, "corrente", "Matheus", new Date()));
    this.contas.push(new Conta(777, "Pendente", 5, 200.0, "corrente", "Matheus", new Date()));
    this.contas.push(new Conta(666, "Pendente", 5, 200.0, "corrente", "Matheus", new Date()));
    this.contas.push(new Conta(555, "Pendente", 5, 200.0, "corrente", "Matheus", new Date()));
  }
  ngOnInit() {
  }

}

class Conta {
  constructor(
    public agencia: number,
    public estado: string,
    public numero: number,
    public saldo: number,
    public tipo: string,
    public titular,
    public dataAniversario: Date) {

  }

}
