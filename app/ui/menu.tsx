import Link from "next/link";
import { bgcolor1 } from "../variaveis";

export default function Menu() {

  const cssItemMenu = `text-center font-bold text-m text-zinc-200 h-10 w-full mt-2 p-2 hover:bg-blue-600`;

  return (
    <div className="md:col-span-1 md:row-span-7 bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col items-start justify-start">
      <div className={cssItemMenu}>
        <Link href={"/"}>Home</Link>
      </div>
      <div className={cssItemMenu}>
        <Link href={"/usuario"}>Usuários</Link>
      </div>
    </div>
  );
}