import React from "react";
import Product from "./product";

async function productlist() {
  let productdata = await fetch("https://dummyjson.com/products");
  productdata = await productdata.json();
  return productdata.products;
}

async function ProductServer() {
  let data = await productlist();
  console.log(data);

  return (
    <>
      <div>ProductServer</div>
      {data.map((e) => (
        <>
        <h2>{e.title}</h2>
        <Product price={e.price}/>
        </>
      ))} 
    </>
  );
}
export default ProductServer;
