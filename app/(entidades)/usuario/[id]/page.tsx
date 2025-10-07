import Link from "next/link";

export default function EdtUsuario({ params }: { params: { id: number } }) {
  return (<div className="flex flex-col justify-center content-center items-center">
    <h1 className="m-5 text-9xl text-center">{params.id}</h1>
    <Link href="/usuario"><button className="m-2 p-2 bg-blue-900 text-zinc-200 font-bold">Voltar</button></Link>
  </div>
  );
}
