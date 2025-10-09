import Tabela from "@/app/ui/tabela";
import Usuario from "@/app/(entidades)/usuario/usuario";

export default function UsuarioPage() {

  const usuarios = [
    new Usuario(1, "Matheus"),
    new Usuario(2, "João"),
    new Usuario(3, "Maria"),
  ];

  const cabecalho = ["Id", "Nome"];
  const linhas = usuarios.map(u => [u.id + "", u.nome]);


  return (
    <div className="flex flex-col items-start">
      <h1 className="text-blue-900 text-3xl font-bold">Usuários</h1>
      <Tabela cabecalho={cabecalho} linhas={linhas} />
      <button className="bg-blue-600 text-zinc-200 text-bold">Adicionar</button>
    </div>
  );
}