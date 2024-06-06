"use server"
import { prisma } from "@/lib/prisma"
import type {User} from "@prisma/client"
import {redirect} from "next/navigation"

export async function createUser( data: FormData){
    const {name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals} = Object.fromEntries(data) as Omit<User, "id">;

    const user = await prisma.user.create({
        data: {
            name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals,
          },
    })

    redirect('/profile')
}

export async function updateUser( data: FormData){
    const {name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals, id} = Object.fromEntries(data) as User;

    const user = await prisma.user.update({
        where:{
            id,
        },
        data:{
            name, surname, email, fieldOfWork, linkedInLink, githubLink, password, login, softSkills, hardSkills, careerGoals,
        }
    })

}

export async function removeUser( id: string){
    await prisma.user.delete({
        where:{
            id,
        },
    })
}

export async function isUserByEmailExist(email:string) {
    if(await prisma.user.findUnique({
        where:{
            email,
        }
    }) !== null){
        return true
    }
    return false
}

export async function isUserByLoginExist(login:string) {
    if(await prisma.user.findUnique({
        where:{
            login,
        }
    }) !== null){
        console.log("User Found")
        return true
    }
    console.log("User Not Found")
    return false
}