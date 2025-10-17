'use client'
import { adcUsuario } from "@/app/(entidades)/usuario/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UsuarioAdcForm() {

  const router = useRouter();

  function cliqueConfirmar() {

    const form = document.forms[0];

    const props: string[] = [
      form["usuarioNome"].value,
      form["usuarioEmail"].value,
    ]

    adcUsuario(props).then(msn => alert(msn));
    router.push("/usuario");
  }

  const cssLabel = "w-full block m-2 text-cor1"
  const cssSpan = "inline-block w-1/10 font-bold"
  const cssInput = "w-8/10 border border-cor1 ml-1";

  return (
    <div className="w-full">
      <form className="w-full text-left">
        <label className={cssLabel}>
          <span className={cssSpan}>Nome:</span>
          <input
            className={cssInput}
            type="text"
            id="usuarioNome"
            name="usuarioNome"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Email:</span>
          <input
            className={cssInput}
            type="text"
            id="usuarioEmail"
            name="usuarioEmail"
            required />
        </label>
      </form>
      <div className="w-full bg-blue-200">
        <button
          className="m-2 p-2 bg-blue-900 text-zinc-200 text-center font-bold hover:bg-zinc-800"
          onClick={cliqueConfirmar}
        >
          Confirmar
        </button>
        <Link href="/usuario">
          <button
            className="m-2 p-2 bg-blue-900 text-zinc-200 text-center font-bold hover:bg-zinc-800"
          >
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
}