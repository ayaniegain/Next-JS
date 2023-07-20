"use client"
import Script from 'next/script'
import React from 'react'
function StudentDetails() {
  return (
    <>
<h2>student details geo location</h2>

    <Script
        src='/location.js'
        onLoad={()=>{
            console.log("file loaded")
        }}
        />
        </>
  )
}

export default StudentDetails