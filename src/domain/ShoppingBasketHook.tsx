import { useState } from "react"

import Product from "@/models/Product"
import ShoppingBasket from "@/models/ShoppingBasket" // Import your ShoppingBasket class and Product type

function ShoppingBasketHook() {
  const [basket, setBasket] = useState(
    new ShoppingBasket(new Map<Product, number>()),
  )

  const changeQuantity = (product: Product, quantity: number) => {
    basket.changeQuantity(product, quantity)
    const updatedBasket = new ShoppingBasket(new Map(basket.basket))

    setBasket(updatedBasket)
  }

  const removeProduct = (product: Product) => {
    const updatedBasket = new ShoppingBasket(new Map(basket.basket))
    updatedBasket.removeItem(product)
    setBasket(updatedBasket)
  }

  const buyBasket = () => {
    const basketEmptied = basket.purchaseBasket()

    setBasket(new ShoppingBasket(new Map<Product, number>()))
  }

  return {
    basket,
    changeQuantity,
    removeProduct,
    buyBasket,
  }
}

export default ShoppingBasketHook
