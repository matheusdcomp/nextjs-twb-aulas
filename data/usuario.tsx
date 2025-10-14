import Usuario from "@/app/(entidades)/usuario/usuario";
import fs from "fs";

const arquivo = "/data/usuarios.json";


export function obtUsuarios(): Usuario[] {
  const arq = fs.readFileSync(process.cwd() + arquivo, "utf8");
  return JSON.parse(arq);
}

export function obtUsuario(id: number) {
  return obtUsuarios().find(t => t.id == id);
}

export function adcUsuario(cliente: Usuario): boolean {

  const lista = obtUsuarios();
  lista.push(cliente);

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}

export function edtUsuario(cliente: Usuario): boolean {

  const lista = obtUsuarios().map(
    c => c.id == cliente.id ? cliente : c
  );

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}


export function remUsuario(id: number): boolean {

  const lista = obtUsuarios().filter(c => c.id != id);

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}