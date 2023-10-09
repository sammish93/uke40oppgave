"use client"

import { useState } from "react"

import Card from "@/components/Card"
import ProductCart from "@/components/ProductCart"
import ProductList from "@/components/ProductList"
import getProducts from "@/domain/functions"
import Product from "@/models/Product"
import ShoppingBasket from "@/models/ShoppingBasket"

const ProductsPage = () => {
  const [basket, setBasket] = useState(
    new ShoppingBasket(new Map<Product, number>()),
  )

  const changeQuantity = (product: Product, quantity: number) => {
    const updatedBasket = new ShoppingBasket(new Map(basket.basket))
    updatedBasket.changeQuantity(product, quantity)
    setBasket(updatedBasket)
  }

  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <ProductCart basket={basket} />
        <ProductList changeQuantity={changeQuantity} />
      </div>
    </div>
  )
}

export default ProductsPage
