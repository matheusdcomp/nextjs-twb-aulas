"use client"
import { efetuarLogout } from "@/app/(entidades)/usuario/action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();
  const { data: session, status, update } = useSession();//pegar seção em página cliente

  async function cliqueLogin() {

    switch (status) {

      case "unauthenticated":
        router.push("/usuario/forms/lgn");
        break;

      case "authenticated":
        await efetuarLogout();
        window.location.reload();
        router.push("/usuario/forms/lgn");
    }
  }

  return (
    <div
      className="p-1 border-2 border-fundo3 text-sm text-fundo3 cursor-pointer"
      onClick={cliqueLogin}>
      {
        status == "authenticated" ?
          "Olá, " + session.user.name :
          "Login"
      }
    </div>
  );
}