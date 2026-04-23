'use client'
import Link from "next/link";

export default function Tabela({
  entidade,
  cabecalho,
  linhas,
}: {
  entidade: string,
  cabecalho: string[],
  linhas: string[][],
}) {

  function cliqueCheckTodos() {

    const checks: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#tabelaCRUD td input[type='checkbox']");

    for (let i = 0; i < checks.length; i++) {
      checks[i].checked =
        (document.getElementById("seltodos")! as HTMLInputElement)
          .checked;
    }
  }

  const cssTabela = "mb-2 w-full border border-cor1 border-collapse";
  const cssCabecalho = "bg-fundo1";
  const cssLinha = "even:bg-fundo3 hover:bg-fundo2";
  const cssCelulaTH = "border border-zinc-800 text-cor3 p-1";
  const cssCelulaTD = "border border-zinc-800 text-cor1 p-1";

  const ths = (
    <tr key={"trcabecalho"} className={cssCabecalho}>
      <th key={"thinputcheck"} className={cssCelulaTH}>
        <input
          type='checkbox'
          name='seltodos'
          id='seltodos'
          onChange={cliqueCheckTodos}
        />
      </th>
      {cabecalho.map((col) => (
        <th
          key={"th" + col}
          className={`text-left ${cssCelulaTH}`}
        >
          {col}
        </th>
      ))}
      <th
        key={"acoes"}
        className={cssCelulaTH}
      >
        Ações
      </th>
    </tr>
  );

  const tds = linhas.map((lnh, i) => (
    <tr
      key={"trlinha" + i}
      className={cssLinha}
    >
      <td
        key={"tdinputcheck" + i}
        className={`text-center ${cssCelulaTD}`}
      >
        <input
          type='checkbox'
          name={`sel${lnh[0]}`}
          id={`sel${lnh[0]}`}
        />
      </td>
      {lnh.map((col) => (
        <td
          key={"td" + col}
          className={cssCelulaTD}
        >
          {col}
        </td>
      ))}
      <td
        key={"acoes" + i}
        className={`font-sans font-bold text-center ${cssCelulaTD}`}
      >
        <Link href={"/" + entidade.toLowerCase() + "/forms/edt/" + lnh[0]}>
          <span className="inline-block pr-2">✎</span>
        </Link>
        <Link href={"/" + entidade.toLowerCase() + "/forms/rem/" + lnh[0]}>
          <span className="inline-block pl-2">🗑</span>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="relative w-full overflow-auto border-collapse">
      <div className="w-full bg-cor2 text-right">
        <Link href={"/" + entidade.toLowerCase() + "/forms/adc"}>
          <button
            className="m-2 p-2 bg-fundo1 text-cor3 text-center font-bold hover:bg-cor1"
          >
            Adicionar novo
          </button>
        </Link>
      </div>
      <table id="tabelaCRUD" className={cssTabela}>
        <thead>{ths}</thead>
        <tbody>{tds}</tbody>
      </table>
    </div>
  );
}


export function obterSelecionadas(apenasUm: boolean) {

  let x = 0;
  const entidades: string[][] = [];
  const trs: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll("#tabelaCRUD tbody tr");

  for (let t = 0; t < trs.length; t++) {

    const checkbox = trs[t].cells[0].children[0] as HTMLInputElement;

    if (checkbox.checked) {

      const entidade: string[] = [];

      for (let i = 1; i < trs[t].cells.length; i++)
        entidade.push(trs[t].cells[i].innerText);

      entidades.push(entidade);

      if (apenasUm) break;
    }
  }
  return entidades;
}
