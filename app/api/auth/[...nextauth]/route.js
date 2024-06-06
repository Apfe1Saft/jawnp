import NextAuth from "next-auth/next"
import { authConfig } from "@/app/configs/auth";
import {options} from './options'

const handler = NextAuth(options);

export {handler as GET, handler as POST}

