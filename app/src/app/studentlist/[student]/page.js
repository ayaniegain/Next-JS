"use client"
import React from 'react'
function Student({params}) {
    console.log(params)
  return (
    <>
    <div>student details</div>
    <h2>studemt: {params.student}</h2>
    </>
  )
}

export default Student