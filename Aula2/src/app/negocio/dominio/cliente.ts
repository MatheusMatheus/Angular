export class Cliente {

  /*
  cpf: string;
  nome: string;
  */
  private statusInterno: string;

/*
  constructor(
    cpf: string,
    nome: string,
    status: string
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.status = status;
  }
  */

  constructor(
    public nome: string,
    public cpf: string,
    status: string
  ) {
    this.status = status;
  }

  get status(): string {
    return this.statusInterno;
  }

   set status(status: string) {

     if (status === 'ATIVO' ||
       status === 'INATIVO') {
       this.statusInterno = status;
     }

   }

}
