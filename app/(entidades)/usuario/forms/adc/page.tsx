'use client'
import { adcUsuario } from "@/app/(entidades)/usuario/action";
import { useActionState } from "react";
import SubmitButton from "@/app/ui/submit";
import Link from "next/link";

export default function UsuarioAdcForm() {

  const [state, formAction] = useActionState(
    adcUsuario,
    { status: true, mensagem: "" }
  );

  const cssLabel = "w-full block m-2 text-cor1";
  const cssSpan = "inline-block w-1/10 font-bold";
  const cssInput = "w-8/10 border border-cor1 ml-1";
  const cssButton = "m-2 p-2 bg-blue-900 text-zinc-200 text-center font-bold hover:bg-zinc-800";
  const cssMensagemT = "w-full bg-blue-200 text-cor1 text-bold";
  const cssMensagemF = "w-full bg-red-900 text-cor3 text-bold";

  return (
    <div className="w-full">
      <form className="w-full text-left" action={formAction}>
        <label className={cssLabel}>
          <span className={cssSpan}>Nome:</span>
          <input
            className={cssInput}
            type="text"
            id="nome"
            name="nome"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Email:</span>
          <input
            className={cssInput}
            type="email"
            id="email"
            name="email"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Senha:</span>
          <input
            className={cssInput}
            type="password"
            id="senha"
            name="senha"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Admin?</span>
          <input
            className={cssInput}
            type="checkbox"
            id="tipo"
            name="tipo"
          />
        </label>
        <div className="w-full bg-blue-200">
          <SubmitButton estilo={cssButton} rotulo="Confirmar" />
          <Link href="/usuario">
            <button type="button" className={cssButton}>
              Cancelar
            </button>
          </Link>
        </div>
        <p
          className={state.status ? cssMensagemT : cssMensagemF}
          aria-live="polite"
          role="status"
        >
          {state.mensagem}
        </p>
      </form>
    </div>
  );
}