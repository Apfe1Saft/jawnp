'use client'

import { getReportsBySearch } from "@/services/reports";
import { FormEventHandler, useState } from "react";

type Props = {
    onSearch:(value:any[]) =>void;
}
 const ReportSearch =({onSearch}:Props) =>{
    const [search, setSearch] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event)=>{
        event.preventDefault()

        const reports = await getReportsBySearch(search);
        
        onSearch(reports);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search" value={search} 
            onChange={event => setSearch(event.target.value)}

            />
            <button type='submit'>Search</button>
        </form>
    )
 }

 export {ReportSearch}