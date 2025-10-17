"use server"
import { Usuario } from "@/app/generated/prisma";
import prisma from "@/data/prisma";


export async function adcUsuario(usuario: Usuario): Promise<Usuario> {
  return await prisma.usuario.create({
    data: {
      nome: usuario.nome,
      email: usuario.email,
    },
  });
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