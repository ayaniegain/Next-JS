"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";
import Profile from "./img/vercel.svg"

export default function Home() {
 const[color,setColor]=useState("yellow")
 return (
    <main className={styles.main}>
      <h2 style={{backgroundColor:color=="yellow"?"yellow":"red"}}>functionn event </h2>
      <Link href="./ProductlistServer"> go to productlist server</Link>
      <Image src="
      https://depositphotos.com/192521134/stock-photo-super-full-blood-moon-move.html
      
      "
      height={500} width={500} alt="img"
      />
      <Image src={Profile}
      height={500} width={500} alt="img"
      />
      <img src={Profile.src}  height={500} width={500} alt="img" />
    </main>
  );
}
