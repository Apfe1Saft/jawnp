"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { Report } from "@prisma/client"

export async function createReport(data: FormData) {
    const { title, body, age, gender } = Object.fromEntries(data) as any;
    
    // Convert age to integer
    const ageInt = parseInt(age, 10);

    if (isNaN(ageInt)) {
        throw new Error("Invalid age value provided.");
    }

    const report = await prisma.report.create({
        data: {
            title,
            body,
            age: ageInt,
            gender
        }
    })

    redirect(`/reports/${report.id}`)
}

export async function updateReport(data: FormData) {
    const { title, body, id, age, gender } = Object.fromEntries(data) as any;

    // Convert age to integer
    const ageInt = parseInt(age, 10);
    console.log("HOW:" + age)
    console.log(ageInt)

    if (isNaN(ageInt)) {
        throw new Error("Invalid age value provided.");
    }

    const report = await prisma.report.update({
        where: {
            id,
        },
        data: {
            title,
            body,
            age: ageInt,
            gender
        }
    })

    revalidatePath(`/reports/${report.id}`)
    redirect(`/reports/${report.id}`)
}

export async function removeReport(id: string) {
    await prisma.report.delete({
        where: {
            id,
        },
    })
    revalidatePath('/reports')
    redirect('/reports')
}