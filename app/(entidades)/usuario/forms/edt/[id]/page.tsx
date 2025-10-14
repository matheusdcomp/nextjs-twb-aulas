import Link from "next/link";
import { use } from "react";

export default function EdtUsuario({ params }: { params: Promise<{ id: number }> }) {

  const args = use(params);

  return (<div className="flex flex-col justify-center content-center items-center">
    <h1 className="m-5 text-9xl text-center">{args.id}</h1>
    <Link href="/usuario">
      <button
        className="m-2 p-2 bg-blue-900 text-zinc-200 font-bold"
      >
        Voltar
      </button>
    </Link>
  </div>
  );
}
