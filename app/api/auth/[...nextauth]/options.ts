import { NextAuthOptions } from 'next-auth/index'
import GitHubProvider from'next-auth/providers/github'
import CredentialsProvider from'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { randomBytes, randomUUID } from "crypto";


export const options: NextAuthOptions ={
    
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name:"Credentials", 
            credentials:{
                login:{
                    label:"Login:",
                    type:"text",
                    placeholder:"your-login"
                },
                password:{
                    label:"Password::",
                    type:"password",
                    placeholder:"your-password"
                }
                
            },
            async authorize(credentials) {
                if (!credentials?.login || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { login: credentials.login }
                });

                if (user && user.password === credentials.password) {
                    const { password, ...userWithoutPassword } = user;
                    return userWithoutPassword;
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }:any) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token, }:any) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    }
}