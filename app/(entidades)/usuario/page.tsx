import Tabela from "@/app/ui/tabela";

export default function Usuario() {

  const linhas = [
    ["1", "MATHEUS"],
    ["2", "MARIA"],
    ["3", "JOAO"],
  ];

  return (
    <div className="p-2 text-justify text-zinc-800">
      <h1 className="text-blue-900 text-3xl font-bold">Usuários</h1>
      <Tabela cabecalho={["Id", "Nome"]} linhas={linhas} />
    </div>
  );
}