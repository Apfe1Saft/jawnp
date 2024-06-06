import {prisma} from "@/lib/prisma"

export function getUserbyLogin(login: string){
    return prisma.user.findUnique({
        where:{
            login,
        }
    });
}

export function getUserbyEmail(email: string){
    return prisma.user.findUnique({
        where:{
            email,
        }
    });
}

export function getAllUsers(){
    return prisma.user.findMany();
}