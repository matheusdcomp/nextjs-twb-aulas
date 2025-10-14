import Link from "next/link";
import "@/app/globals.css";

export default function Menu() {

  const menuItemCSS = "text-center font-bold text-m text-cor3 h-10 w-full mt-2 p-2 hover:bg-fundo2";

  return (
    <div
      className={"col-span-1 row-span-7 bg-gradient-to-b from-fundo1 to-fundo3 flex flex-col items-start justify-start"}
    >
      <div className={menuItemCSS}>
        <Link href={"/"}>Home</Link>
      </div>
      <div className={menuItemCSS}>
        <Link href={"/usuario"}>Usuário</Link>
      </div>
    </div>
  );
}