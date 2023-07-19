"use client"
import React from 'react'
function Lecture({params}) {
    console.log(params.lecture[0])
  return (
        <>
    <div>lecture</div>
    <br />
    <span>college day: {params.lecture[0]}</span>
    <br />
    <span>lecture no: {params.lecture[1]}</span>
        </>
  )
}

export default Lecture