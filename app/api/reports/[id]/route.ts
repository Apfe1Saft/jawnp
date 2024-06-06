import { NextResponse } from "next/server"
import {headers, cookies} from "next/headers"
import { redirect } from "next/navigation"

export async function DELETE(req:Request,{params}:{params: {id:string}}) {
    const id = params.id
    const API_KEY = process.env.OMDB_SECRET
    // example of work with headers
    // const headerList = headers()
    // const type = headerList.get('Content-Type')
    // DELETE reports logic
    //redirect('/reports')

    const cookiesList = cookies()

    const coo2 = cookiesList.get('')?.value

    return NextResponse.json({ id })
}