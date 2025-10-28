'use client'
import SubmitButton from "@/app/ui/submit";
import { efetuarLogin } from "@/app/(entidades)/usuario/action";
import { useActionState } from "react";
import Link from "next/link";


export default function SignIn() {

  const [state, formAction] = useActionState(
    efetuarLogin,
    { mensagem: "" }
  );

  const cssLabel = "w-full block m-2 text-cor1";
  const cssSpan = "inline-block w-1/10 font-bold";
  const cssInput = "w-8/10 border border-cor1 ml-1";
  const cssButton = "m-2 p-2 bg-blue-900 text-zinc-200 text-center font-bold hover:bg-zinc-800";

  return (
    <form className="w-full text-left" action={formAction}>
      <h1 className={"font-black text-2xl txt-cor1"}>Login</h1>
      <label className={cssLabel}>
        <span className={cssSpan}>Email:</span>
        <input className={cssInput} name="email" type="email" />
      </label>
      <label className={cssLabel}>
        <span className={cssSpan}>Senha:</span>
        <input className={cssInput} name="password" type="password" />
      </label>
      <div className="w-full bg-blue-200">
        <SubmitButton estilo={cssButton} rotulo="Logar" />
        <Link href="/usuario/forms/adc">
          <button type="button" className={cssButton}>Registrar-se</button>
        </Link>
        <Link href="/">
          <button type="button" className={cssButton}>Cancelar</button>
        </Link>
      </div>
      <p aria-live="polite" role="status">
        {state?.mensagem}
      </p>
    </form>
  );
}