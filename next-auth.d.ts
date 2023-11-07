import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    firebaseToken?: string;
    user: {
      id: String;
    } & DefaultSession["user"];
  }
}
