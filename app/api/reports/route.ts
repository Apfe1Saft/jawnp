import { NextResponse } from "next/server";

import {reports} from './reports';

export async function GET(req:Request) {
    const {searchParams} = new URL(req.url)

    const query = searchParams.get('q') // api/reports?q=xxxxxxx

    let currentReports = reports;

    if(query) {
        currentReports = reports.filter(report =>report.title.
            toLowerCase().includes(query.toLowerCase())
        )
    }

    return NextResponse.json(reports)
}

export async function POST(req:Request){
    const body = await req.json()

    console.log(body)

    return NextResponse.json({body})
}