import { obtUsuario, obtUsuarios } from "@/data/usuarios";


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (Number(id) <= 0) {
    return Response.json(obtUsuarios());
  }
  if (Number(id) > 0) {
    return Response.json(obtUsuario(Number(id)));
  }
  else return Response.json(undefined);
}