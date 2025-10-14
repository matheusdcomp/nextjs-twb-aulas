"use client"
import Tabela from "@/app/ui/tabela";
import Usuario from "@/app/(entidades)/usuario/usuario";
import Link from "next/link";
import useSWR from "swr";

export default function UsuarioPage() {

  const fetcher = (url: string) => fetch(url).then((res => res.json()));

  const { data, error, isLoading } = useSWR<Usuario[]>(
    "http://localhost:3000/usuario/api/obt?id=0",
    fetcher
  );

  if (isLoading) {
    return (
      <div className={"text-5xl text-cor1 text-left text-bold"}>
        <h1>Usuarios</h1>
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={"text-5xl text-cor1 text-left text-bold"}>
        <h1>Usuarios</h1>
        <h1>Error ao carregar os usuarios.</h1>
      </div>
    );
  }

  const usuarios = data && data.length > 0 ?
    data :
    [new Usuario(0, "Nenhum usuário retornado", "-")];

  return (
    <div className="flex flex-col items-start">
      <h1 className={"font-black text-2xl txt-cor1"}>Usuários</h1>
      <Tabela
        entidade={"usuario"}
        cabecalho={["Id", "Nome", "Email"]}
        linhas={usuarios.map(u => [u.id + "", u.nome, u.email])}
      />
    </div>
  );
}