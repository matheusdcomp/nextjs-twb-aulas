import { remUsuario } from "@/data/usuario";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.id) {
    return Response.json({
      mensagem: remUsuario(Number(req.id))
    });
  }
  else return Response.json({ mensagem: false });
}