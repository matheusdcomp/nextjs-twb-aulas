export default function Tabela({ cabecalho, linhas }: { cabecalho: String[], linhas: String[][] }) {


  return (
    <div>
      <table>
        <thead>
          <tr>
            {cabecalho.map(col => <th>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {linhas.map(linha =>
            <tr>
              {linha.map(col => <td>{col}</td>)}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}