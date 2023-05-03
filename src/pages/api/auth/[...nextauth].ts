import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ClientType = {
  clientId: string;
  clientSecret: string;
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({ user }) => {
      console.log("SignIn Callback");
      try {
        const email = user.email as string;
        const upsertUser = await prisma.user.upsert({
          where: { email },
          update: {},
          create: {
            email,
            name: user.name as string,
          },
        });
        return !!upsertUser;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
