import type { NextAuthOptions } from "next-auth";
import GitHubProvider from'next-auth/providers/github'
import CredentialsProvider from'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
    ]
}