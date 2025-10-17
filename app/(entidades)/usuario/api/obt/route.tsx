import { obtUsuarios, obtUsuarioPorId } from "@/data/usuario";


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (Number(id) <= 0) {
    const usuarios = await obtUsuarios();
    return Response.json(usuarios);
  }
  if (Number(id) > 0) {
    return Response.json(obtUsuarioPorId(Number(id)));
  }
  else return Response.json(undefined);
}