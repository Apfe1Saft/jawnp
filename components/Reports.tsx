import Link from "next/link";

type Props ={
    reports:any[]
}

const Reports =({reports}:Props) =>{
    return (
        <ul>
            {reports.map((report:any) =>(
                <li key={report.id}>
                    <Link href={'/reports/${report.id}'}>
                        {report.title}
                    </Link>
                </li>
            ))};
        </ul>
    )
}
export {Reports};