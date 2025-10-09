"use client"
import Tabela from "@/app/ui/tabela";
import Usuario from "@/app/(entidades)/usuario/usuario";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UsuarioPage() {

  function cliqueAdicionar() {
    setUsuarios([...usuarios, new Usuario(4, "José")]);
    usuarios.push(new Usuario(4, "José"));
  }

  function linkEditar() {
    const id = (document.getElementById("inputLink") as HTMLInputElement)!.value;
    router.push("/usuario/" + id);
  }

  const router = useRouter();

  const [usuarios, setUsuarios] = useState(
    [
      new Usuario(1, "Matheus"),
      new Usuario(2, "João"),
      new Usuario(3, "Maria"),
    ]
  );

  const cabecalho = ["Id", "Nome"];
  const linhas = usuarios.map(u => [u.id + "", u.nome]);


  return (
    <div className="flex flex-col items-start">
      <h1 className="text-blue-900 text-3xl font-bold">Usuários</h1>
      <Tabela cabecalho={cabecalho} linhas={linhas} linkEditar="/usuario/" />
      <button
        className="bg-blue-600 text-zinc-200 text-bold p-2 "
        onClick={cliqueAdicionar}
      >
        Adicionar
      </button>
      <label>Id do Usuário: <input type="text" id="inputLink" /></label>
      <button
        className="bg-blue-600 text-zinc-200 text-bold p-2 "
        onClick={linkEditar}
      >
        Editar
      </button>
    </div>
  );
}