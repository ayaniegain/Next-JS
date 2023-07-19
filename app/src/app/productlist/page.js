// "use client"
// import React from 'react'
// import { useState,useEffect } from 'react'
// function ProductList() {

//     const [product, setProduct]=useState([])

//     useEffect(async()=>{
//         let data = await fetch("https://dummyjson.com/products")
//         data = await data.json()
//         setProduct (data.products)
//     },[])
    
//   return (
//     <>
//     <div>ProductList</div>
//    {
//     product.map((e)=>
//     <h3>{e.title}</h3>)
//    }
//     </>

//   )
// }

// export default ProductList