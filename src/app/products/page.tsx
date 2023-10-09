"use client"

import Card from "@/components/Card"
import ProductCart from "@/components/ProductCart"
import ProductList from "@/components/ProductList"
import getProducts from "@/domain/functions"

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <ProductCart />
        <ProductList />
      </div>
    </div>
  )
}

export default ProductsPage
