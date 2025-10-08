"use client"

import Link from "next/link";

export default function Tabela({ cabecalho, linhas }: { cabecalho: String[], linhas: String[][] }) {

  function selecionarTodos() {

    const checks: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#tabelaCRUD tbody input[id^='selid']");

    for (let i = 0; i < checks.length; i++) {
      checks[i].checked =
        (document.getElementById("seltodos") as HTMLInputElement)!.checked;
    }

  }

  const cssTabela = "mt-2 mb-2 w-full border border-zinc-900 border-collapse";
  const cssCabecalho = "bg-blue-900 text-zinc-200 font-bold text-left";
  const cssLinha = "even:bg-blue-300 hover:bg-blue-600";
  const cssCelula = "border border-zinc-900 p-2";

  return (
    <div className="relative w-full overflow-auto">
      <table id="tabelaCRUD" className={cssTabela}>
        <thead>
          <tr className={cssCabecalho}>
            <th key={"thcheck"} className={cssCelula + " w-5"}>
              <input
                type="checkbox"
                id="seltodos"
                name="seltodos"
                onChange={selecionarTodos}
              />
            </th>
            {cabecalho.map(col =>
              <th key={"th" + col} className={cssCelula}>{col}</th>
            )}
            <th key={"thedit"} className={cssCelula + " w-10"}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) =>
            <tr className={cssLinha}>
              <td key={"tdcheck" + i} className={cssCelula}>
                <input
                  type="checkbox"
                  id={"selid" + i}
                  name={"selid" + i}
                />
              </td>
              {linha.map(col =>
                <td key={"td" + col} className={cssCelula}>{col}</td>
              )}
              <td key={"tdedit"} className={cssCelula + " text-center"}>
                <Link href={"/usuario/" + linha[0]}>✎</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  );
}