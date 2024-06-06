import { getAllReports, getReportById } from "@/services/reports";
import { removeReport } from "../actions"
import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params:{
        id: string;
    };
};

export async function generateStaticParams(){
    const reports: any[] = await getAllReports();

    return reports.map(report =>({
        slug: report.id.toString(),
    }))
} 

export async function generateMetadata({
    params:{id},
}:Props): Promise<Metadata>{
    const report = await getReportById(id)
    if(report){
    return{
        title: report.title,
    }}
    return {
        title: "Post not found"
    }
}

export default async function Report({params:{id}}:Props){
    const report = await getReportById(id)
    return (
        <>
        <div className="report-page">
            <h1>{report?.title}</h1>
        Report ID: {report?.id}
        <div className="report-block">
            <p>{report?.body}</p>
        </div>

        <form action={removeReport.bind(null, id)}>
            <input type="submit" className="button-1" value="delete report" />
        </form>
        </div>
        
        </>
        

    )
}