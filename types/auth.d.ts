import { Tipo } from "@/app/generated/prisma";
import { DefaultSession, DefaultUser } from "next-auth";


declare module "next-auth" {
  
  interface Session {
    user: DefaultSession["user"] & {
      password: string;
      tipo: Tipo;
    };
  }

  interface User extends DefaultUser {
    id: string;
    name: string;
    email: string;
    password: string;
    tipo: Tipo;
  }
}

declare module "next-auth/jwt" {
  // Extend the token type
  interface JWT {    
    password: string; 
    tipo: Tipo;
  }
}