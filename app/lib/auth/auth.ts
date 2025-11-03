import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/app/lib/data/prisma";
import { Tipo } from "@/app/generated/prisma";
import { z } from "zod";
import { obtUsuarioPorEmail, verificarSenha } from "@/app/(entidades)/usuario/action";


const providers: Provider[] = [
  Credentials({
    credentials: {
      //id : {},
      //name: {},
      email: {},
      password: {},
      //tipo: {},
    },
    authorize: async (credentials) => {

      const signInSchema = z.object({
        email: z.email("Email inválido").min(1, "O email é obrigatório"),
        password: z.string()
          .min(1, "A senha é obrigatória")
          .min(8, "A senha deve ter mais de 8 caracteres")
          .max(32, "A senha deve ter no máximo 32 caracteres"),
      });

      const { email, password } = await signInSchema.parseAsync(credentials);    
      const usuario = await obtUsuarioPorEmail(email);
      
      if (!usuario) {
        console.log("Não existe usuário com esse email.");
        return null;
      }

      const senhaOK = await verificarSenha(password, usuario.password);

      if (senhaOK) 
        return usuario;

      console.log("Email e/ou senha incorreta.");
      return null;      
    },
  }),
];


export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials");


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/",
  },
  adapter: PrismaAdapter(prisma),
  session: {
		strategy: "jwt",
	},
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.password = user.password;
        token.tipo = user.tipo; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.password = token.password as string;
        session.user.tipo = token.tipo as Tipo;
      }
      return session;
    },
  },
});