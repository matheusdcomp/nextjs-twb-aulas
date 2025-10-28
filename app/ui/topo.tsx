import "@/app/globals.css";
import Login from "./login";
import Image from "next/image";

export default function Topo() {
  return (
    <div className={"bg-fundo1 p-4 col-span-8 row-span-1 flex flex-row content-center justify-between items-center"}>
      <Image src='/coruja-azul.png' alt='Coruja' height='50' width='50' priority />
      <h1 className={"w-2/4 text-center text-cor3 text-4xl font-black"}>Página Teste</h1>
      <Login />
    </div>
  );
}
