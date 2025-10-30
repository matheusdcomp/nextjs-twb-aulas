"use server"
import { prisma } from "@/app/lib/data/prisma";
import { User } from "@/app/generated/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { signIn, signOut } from "@/app/lib/auth/auth";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs'; 

export async function efetuarLogin(prevState: any, formData: FormData) {

  let success;

  try {
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    success = true;
  }
  catch (error) {
    console.log(error)
    success = false;
  }

  if (success) {
    console.log("Login efetuado: " + formData.get("email"));
    revalidatePath("/");
    redirect("/");//não pode usar dentro de try-catch
  }

  return { mensagem: "Email ou senha incorretos." };
}

export async function efetuarLogout() {
  await signOut({ redirect: false });
  console.log("Logout efetuado");
}

export async function adcUsuario(prevState: any, formData: FormData) {

  const schema = z.object({
    nome: z.string().min(1, "Informe o nome"),
    email: z.email("Email inválido"),
    senha: z.string()
      .min(1, "A senha é obrigatória")
      .min(8, "A senha deve ter mais de 8 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),
    tipo: z.boolean(),
  });

  const parse = schema.safeParse({
    nome: formData.get("nome"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    tipo: formData.get("tipo") == "true",
  });

  if (!parse.success) {
    console.log(parse);
    return {
      status: false,
      mensagem: "Dados do formulário informados incorretamente."
    }
  }

  const usuario = parse.data;

  const res = await prisma.user.create({
    data: {
      name: usuario.nome,
      email: usuario.email,
      password: await criptografarSenha(usuario.senha),
      tipo: usuario.tipo ? "admin" : "usuario",
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

export async function edtUsuario(usuario: User): Promise<User> {
  return await prisma.user.update({
    where: {
      id: usuario.id,
    },
    data: {
      name: usuario.name,
      email: usuario.email,
      password: await criptografarSenha(usuario.password),
      tipo: usuario.tipo ? "admin" : "usuario",
    },
  });
}

export async function obtUsuarios(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function obtUsuarioPorId(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id: id
    }
  });
}

export async function obtUsuarioPorNome(nome: string): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      name: nome
    }
  });
}

export async function obtUsuarioPorEmail(email: string): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      email: email
    }
  });
}

export async function remUsuario(id: string): Promise<User> {
  return await prisma.user.delete({
    where: {
      id: id,
    }
  });
} 

export async function verificarSenha(senha:string, senhaCriptografada:string) {
  try {
    const match = await bcrypt.compare(senha, senhaCriptografada);
    return match; 
  } catch (error) {
    console.error("A senha está incorreta:", error);
    throw error;
  }
}

export async function criptografarSenha(senha:string) {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(senha, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Erro ao criptografar a senha:", error);
    throw error;
  }
}