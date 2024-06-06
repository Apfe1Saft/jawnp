import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials"; 
import Email from "next-auth/providers/email";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials:{
                email:{label:'email', type:'email',required:true},
                password:{label:'password', type:'password',required:true}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password) return null;
                return null
            }
        })
    ],
    pages:{
        signIn: '/signin'
    }
}