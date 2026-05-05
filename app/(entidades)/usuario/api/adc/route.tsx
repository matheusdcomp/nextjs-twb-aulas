import { adcUsuario } from "@/data/usuario";
import Usuario from "@/app/(entidades)/usuario/usuario";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.id && req.nome && req.email) {
    return Response.json({
      mensagem: adcUsuario(
        new Usuario(Number(req.id), req.nome, req.email)
      )
    });
  }
  else return Response.json({ mensagem: false });
}