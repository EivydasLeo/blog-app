"use client"
import React from 'react'
import Link from "next/link";
import { links } from "@/utils/dummyData/navbar";
import styles from './navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href='/'>HomePage</Link>
            <div className={styles.links}>
                {links.map(link => (
                    <Link className={styles.link} key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                <button className={styles.logout}
                        onClick={() => {
                    console.log("logged out")}}>Logout</button>
            </div>

        </div>
    )
}
export default Navbar
