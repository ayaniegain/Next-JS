"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const route=useRouter()
  const HandleClick = (item) => {
    alert("this is" + item);
  };

  const natigate=(pathdata)=>{
    route.push(pathdata)
  }

  return (
    <main className={styles.main}>
      <h2>functionn event </h2>
      <button onClick={() => HandleClick("Apple")}>click me</button>
      <Link href="/login">go to login </Link>
      <Link href="/about">go to about</Link>
      <br />
      <br />
      <button onClick={()=>natigate("/login")}>login</button>
      <button onClick={()=>natigate("/about")}>about</button>
      <button onClick={()=>natigate("/about/aboutstudent")}>Aboutstudent</button>
    </main>
  );
}
