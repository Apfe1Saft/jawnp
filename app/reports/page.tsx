import { ReportSearch } from "@/components/ReportSearch";
import { Reports } from "@/components/Reports";
import { getAllReports } from "@/services/reports";
import { Metadata } from "next"
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
    title: "Reports | Jawnp App"
}



export default async function Report(){
  const reports = await getAllReports()
  return (
  <>
  <h1>Report page</h1>
  <ul className="reports">
    {reports.map((report:any)=>(
      <li key={report.id} className="report-item">
        <Link href={'/reports/${report.id}'}>{report.title}</Link>
      </li>
    ))}
    
  </ul>
  <div className="add-report-block">
    <Link href="/reports/new" className="add-new">
      <button className="add-report-button">Add new report</button>
      </Link>
  </div>
  
  </>
);
}