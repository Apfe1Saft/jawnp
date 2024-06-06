import Link from "next/link"
import { Navigation } from "./Navigation";
import {ProfileBlock} from "./ProfileBlock"

const navItems = [
    {label:"Home", href:"/"},
    {label:"Reports", href:"/reports"},
    {label:"About", href:"/about"},
];

const TheHeader = () => {
    return (<>
        <header>
            <Navigation navLinks={navItems}/>
            <ProfileBlock/>
        </header >
    </>
        
    )
}
export {TheHeader}