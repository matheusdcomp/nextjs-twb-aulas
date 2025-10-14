"use server"

async function get(url: string) {
  const res = await fetch(url);
  return res.json();
}

async function post(url: string, obj: string) {

  const res = await fetch(url, { method: 'POST', body: obj });

  if (!res.ok) {
    throw new Error('Falha em executar a ação do formulário.');
  }
  return res.json();
}

export async function adcUsuario(props: string[]) {

  const res = await post(
    'http://localhost:3000/usuario/api/adc',
    `{"id":"${props[0]}", "nome":"${props[1]}", "email":"${props[2]}"}`
  );

  if (res.mensagem) {
    return `Novo usuario adicionado: ${props[1]}`;
  }
  else {
    return `Não foi possível adicionar o usuario: ${props[1]}`;
  }
}

export async function edtUsuario(props: string[]) {

  const res = await get(
    "http://localhost:3000/usuario/api/edt" +
    `?id=${props[0]}&nome=${props[1]}&email=${props[2]}`
  );

  if (res.mensagem) {
    return `O usuario ${props[1]} foi editado.`;
  }
  else {
    return `Não foi possível editar o usuario ${props[0]}`;
  }
}

export async function remUsuario(id: number) {

  const res = await post(
    "http://localhost:3000/usuario/api/rem",
    `{"id":"${id}"}`
  );

  if (res.mensagem) {
    return `O usuario com ID: ${id} foi removido.`;
  }
  else {
    return `Não foi possível remover o usuario com ID: ${id}`;
  }
}
