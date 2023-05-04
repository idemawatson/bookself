import prisma from "@/lib/prisma";
import NextAuth, { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ClientType = {
  clientId: string;
  clientSecret: string;
};

export const authOptions: NextAuthOptions = {
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
        const user_id = user.id as string;
        const upsertUser = await prisma.user.upsert({
          where: { sub: user_id },
          update: {},
          create: {
            sub: user_id,
            email: user.email as string,
            name: user.name as string,
          },
        });
        return !!upsertUser;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    session({ session, token }) {
      if (session.user != null && token.sub != null) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
