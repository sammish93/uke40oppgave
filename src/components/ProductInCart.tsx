import Product from "@/models/Product"

import "./ProductInCart.css"

type DummyProps = {
  product: Product
  quantity: number
}

const ProductInCart = (params: DummyProps) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <button className="increment-button">+</button>
      <button className="decrement-button">-</button>
      <span>{params.quantity}</span>
      <span className="product-title flex-grow">{params.product.title}</span>
      <button className="remove-button">X</button>
    </div>
  )
}

export default ProductInCart
