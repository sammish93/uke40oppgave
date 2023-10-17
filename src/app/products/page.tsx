"use client"

import { useState } from "react"

import BasketPopout from "@/components/BasketPopout"
import Card from "@/components/Card"
import PostButton from "@/components/PostButton"
import ProductCart from "@/components/ProductCart"
import ProductList from "@/components/ProductList"
import getProducts from "@/domain/functions"
import ShoppingBasketHook from "@/domain/ShoppingBasketHook"
import Product from "@/models/Product"
import ShoppingBasket from "@/models/ShoppingBasket"

const ProductsPage = () => {
  const { basket, changeQuantity, removeProduct, buyBasket } =
    ShoppingBasketHook()

  const [isOpen, setIsOpen] = useState(false)

  const openPopout = () => {
    setIsOpen(true)
  }

  const closePopout = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <BasketPopout openPopout={openPopout} isOpen={isOpen}>
          <ProductCart
            basket={basket}
            changeQuantity={changeQuantity}
            removeProduct={removeProduct}
            buyBasket={buyBasket}
            closePopout={closePopout}
          />
        </BasketPopout>
        <ProductList changeQuantity={changeQuantity} />
      </div>
    </div>
  )
}

export default ProductsPage
