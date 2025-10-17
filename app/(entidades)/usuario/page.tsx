"use client"
import Tabela from "@/app/ui/tabela";
import { Usuario } from "@/app/generated/prisma";
import { useEffect, useState } from "react";
import { obtUsuarios } from "./action";

export default function UsuarioPage() {

  const [usuarios, setUsuarios] = useState(new Array<Usuario>());

  useEffect(() => {
    obtUsuarios().then((value) => setUsuarios(value));
  }, []);

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