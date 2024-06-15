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
                <div className="header-button">
                    <Link
                    key = {link.label}
                    href = {link.href}
                    className={isActive ? 'active': ""}>
                        {link.label}
                    </Link>
                </div>
            )
        })
    }
    
    {session?.data ?
        <div className="header-button">
            <Link href="#" onClick={
            ()=>signOut({callbackUrl:"/"})
            }>
                Sign Out</Link>
        </div>:
        <div className="header-button">
            <Link href="/api/auth/signin">Login</Link>
        </div>

    }
    </>
}

export {Navigation}