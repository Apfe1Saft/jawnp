import { getAllReports, getReportById } from "@/services/reports";
import { removeReport } from "../../api/reports/actions"
import {getUserById} from "../../api/users/actions"
import { Metadata } from "next";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

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
    const session = await getServerSession();
    const report = await getReportById(id);
    const user = await getUserById(report?.userId);
    return (
        <>
        <div className="report-page">
            <h1>{report?.title}</h1>
        <div className="report-block">
            <p>{report?.body}</p>
        </div>
        
        <div className="bottom-content">
            <div className="report-data">
               <div className="report-data-block">
                    Author: <Link href='/users/{user?.id}'> {user?.login} </Link>
                </div>
                <div className="report-data-block">
                    Likes:
                </div> 
            </div>
            {report?.userId === user?.id ?
            <form action={removeReport.bind(null, id)}>
                <input type="submit" className="button-main" value="delete report" />
            </form> : ""
            }
            
        </div>
        
        </div>
        <pre>{session ? '' : 'Loading session...'}</pre>
        </>
        

    )
}