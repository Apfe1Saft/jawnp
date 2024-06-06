"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import {redirect} from "next/navigation"
import type {Report} from "@prisma/client"

export async function createReport( data: FormData){
    const {title, body} = Object.fromEntries(data) as Omit<Report, "id">;

    const report = await prisma.report.create({
        data:{
            title, body,
        }
    })

    redirect('/reports/${report.id}')
}

export async function updateReport( data: FormData){
    const {title, body, id} = Object.fromEntries(data) as Report;

    const report = await prisma.report.update({
        where:{
            id,
        },
        data:{
            title,
            body,
        }
    })

    revalidatePath('/reports/${report.id}')
    redirect('/reports/${report.id}')
}

export async function removeReport( id: string){
    await prisma.report.delete({
        where:{
            id,
        },
    })
    revalidatePath('/reports')
    redirect('/reports')
}