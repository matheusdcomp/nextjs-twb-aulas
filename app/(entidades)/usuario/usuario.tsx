
export default class Usuario {

  id: number;
  nome: string;
  email: string;

  constructor(id: number = 0, nome: string = "", email: string = "") {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}