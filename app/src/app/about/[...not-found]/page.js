import React from 'react'
import Link from "next/link";

function Notfound() {
  return (
    <>
    <div>About Page Notfound</div>
    <h2>This page is not availabe click here <Link href="/login"><span>Home</span></Link></h2>
    </>
  )
}

export default Notfound