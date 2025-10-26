"use server"
import prisma from "@/data/prisma";
import { Usuario } from "@/app/generated/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";


export async function adcUsuario(prevState: any, formData: FormData) {

  const schema = z.object({
    nome: z.string().min(1, "Informe o nome do cliente"),
    email: z.email("Email inválido"),
  });

  const parse = schema.safeParse({
    nome: formData.get("nome"),
    email: formData.get("email"),
  });

  if (!parse.success) {
    return {
      status: false,
      mensagem: "Dados do formulário informados incorretamente."
    }
  }

  const usuario = parse.data;

  const res = await prisma.usuario.create({
    data: {
      nome: usuario.nome,
      email: usuario.email,
    },
  });

  if (res) {
    revalidatePath("/usuario");
    return {
      status: true,
      mensagem: `Novo usuário adicionado: ${usuario.nome}`
    };
  }
  else {
    return {
      status: false,
      mensagem: `Não foi possível adicionar o usuário: ${usuario.nome}`
    };
  }
}

export async function edtUsuario(usuario: Usuario): Promise<Usuario> {
  return await prisma.usuario.update({
    where: {
      id: usuario.id,
    },
    data: {
      nome: usuario.nome,
      email: usuario.email,
    },
  });
}

export async function obtUsuarios(): Promise<Usuario[]> {
  return await prisma.usuario.findMany();
}

export async function obtUsuarioPorId(id: number): Promise<Usuario | null> {
  return await prisma.usuario.findUnique({
    where: {
      id: id
    }
  });
}

export async function obtUsuarioPorNome(nome: string): Promise<Usuario | null> {
  return await prisma.usuario.findFirst({
    where: {
      nome: nome
    }
  });
}

export async function remUsuario(id: number): Promise<Usuario> {
  return await prisma.usuario.delete({
    where: {
      id: Number(id),
    }
  });
}