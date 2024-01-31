import products from "../../productData";

import React from 'react'
import "./Products.css"
import ProductItem from "./ProductItem";

const Products = () => {

    const productList=products.map((product)=><ProductItem key={product.id} product={product}></ProductItem>)
  return (
    <main className='products-wrapper'>
      <ul className='products'>
         {productList}
      </ul>
    </main>
  )
}

export default Products
