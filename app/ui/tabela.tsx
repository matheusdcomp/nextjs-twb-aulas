"use client"

import Link from "next/link";

export default function Tabela({ cabecalho, linhas }: { cabecalho: String[], linhas: String[][] }) {

  function selecionarTodos() {

    const checks: NodeListOf<HTMLInputElement> = document.querySelectorAll("#tabelaCRUD tbody input[id^='selid']");

    for (let i = 0; i < checks.length; i++) {
      checks[i].checked = (document.getElementById("seltodos") as HTMLInputElement)!.checked;
    }

  }

  const cssTable = "w-full mt-2 mb-2 border border-zinc-700 border-colapse";
  const cssCelula = "p-2 border border-zinc-700";

  return (
    <div>
      <table id="tabelaCRUD" className={cssTable}>
        <thead>
          <tr className="bg-blue-900 text-zinc-200 font-bold">
            <th
              key={"thcheck"}
              className={cssCelula}
            >
              <input type="checkbox" id="seltodos" name="seltodos" onChange={selecionarTodos} />
            </th>
            {cabecalho.map(col =>
              <th key={"th" + col}
                className={cssCelula}>
                {col}
              </th>
            )}
            <th key={"thedit"} className={cssCelula}></th>
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) =>
            <tr className="even:bg-blue-300 hover:bg-blue-400">
              <th
                key={"tdcheck" + i}
                className={cssCelula}
              >
                <input type="checkbox" id={"selid" + i} name={"selid" + i} />
              </th>
              {linha.map(col =>
                <td
                  key={"td" + col}
                  className={cssCelula}
                >
                  {col}
                </td>
              )}
              <td key={"tdedit"} className={cssCelula}>
                <Link href={"/usuario/" + linha[0]}>✎</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  );
}