import {prisma} from "@/lib/prisma"

export const getAllReports = async () =>{
    return prisma.report.findMany();
}

export const getReportsBySearch = async (search: any) => {
    return prisma.report.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: search,
                    }
                },
                {
                    body: {
                        contains: search,
                    }
                }
            ]
        }
    });
}

export const getReportById = async(id: string) => {
    return prisma.report.findUnique({
        where:{
            id,
        }
    })
}
