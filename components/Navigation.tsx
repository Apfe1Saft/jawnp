'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import {useSession, signIn,signOut} from "next-auth/react"

type NavLink = { 
    label:string;
    href:string;
}

type Props = {
    navLinks: NavLink[];
}

const Navigation =({navLinks}:Props) =>{
    const pathname = usePathname();

    const session = useSession()

    return <>{
        navLinks.map((link) =>{
            const isActive = pathname ===link.href;

            return (
                <Link
                key = {link.label}
                href = {link.href}
                className={isActive ? 'active': ""}>
                    {link.label}
                </Link>
            )
        })
    }
    
    {session?.data ?
        <Link href="#" onClick={
            ()=>signOut({callbackUrl:"/"})
            }>
                Sign Out</Link>:
        <Link href="/api/auth/signin">Login</Link>

    }
    </>
}

export {Navigation}