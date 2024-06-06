"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import {useSession, signIn,signOut} from "next-auth/react"

const ProfileBlock =() =>{
    const session = useSession();

    return <>
    {session?.data && (
        <div className="profile-block">
            <Link href="/profile">Profile</Link>
        </div>
        
    )}
    </>
    
    }

    export {ProfileBlock}