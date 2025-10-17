import { adcUsuario } from "@/data/usuario";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.nome && req.email) {
    return Response.json({
      mensagem: adcUsuario({
        id: 0,
        nome: req.nome,
        email: req.email
      })
    });
  }
  else return Response.json({ mensagem: false });
}