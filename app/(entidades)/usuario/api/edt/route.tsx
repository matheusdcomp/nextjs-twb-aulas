import { edtUsuario } from "@/data/usuario";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.id && req.nome && req.email) {
    return Response.json({
      mensagem: edtUsuario({
        id: Number(req.id),
        nome: req.nome,
        email: req.email
      })
    });
  }
  else return Response.json({ mensagem: false });
}