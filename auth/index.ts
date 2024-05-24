import { isPassCorrect } from "@/app/lib/salt";
import { sql } from "@vercel/postgres";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const BASE_PATH = "/dandelion/verify";

const AuthSchema = z.object({
  username: z
    .string()
    .max(50, { message: "User can't be more than 50 characters" }),
  password: z.string(),
});

const authOptions: NextAuthConfig = {
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", autoComplete: "off" },
        password: { label: "Password", type: "password", autoComplete: "off" },
      },
      async authorize(credentials): Promise<User | null> {
        const result = AuthSchema.safeParse({
          username: credentials.username,
          password: credentials.password,
        });
        if (result.success) {
          const { rows } = await sql<{
            username: string;
            password: string;
          }>`SELECT * FROM admin WHERE username = ${result.data.username};`;
          if (rows.length === 0 || rows.length > 1) return null;
          const { username, password } = rows[0];
          if (!isPassCorrect(result.data.password, password)) {
            return null;
          }
          return { name: username };
        } else {
          return null;
        }
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
