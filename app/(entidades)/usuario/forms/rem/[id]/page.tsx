"use client"
import Link from "next/link";
import { remUsuario } from "@/app/(entidades)/usuario/action";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function RemUsuario({ params }: { params: Promise<{ id: string }> }) {

  const args = use(params);
  const router = useRouter();

  async function cliqueConfirmar() {
    await remUsuario(args.id);
    router.push("/usuario");
  }

  return (<div className="flex flex-col justify-center content-center items-center">
    <h1 className="m-5 text-xl text-center">Deseja realmente apagar o usuário de id {args.id}?</h1>
    <button
      className="m-2 p-2 bg-blue-900 text-zinc-200 font-bold"
      onClick={cliqueConfirmar}
    >
      Confirmar
    </button>
    <Link href="/usuario">
      <button
        className="m-2 p-2 bg-blue-900 text-zinc-200 font-bold"
      >
        Cancelar
      </button>
    </Link>
  </div>
  );
}
