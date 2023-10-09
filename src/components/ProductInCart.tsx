import Product from "@/models/Product"

import "./ProductInCart.css"

type DummyProps = {
  product: Product
}

const ProductInCart = (params: DummyProps) => {
  return (
    <div className="flex justify-between space-x-2">
      <button className="incrementButton">+</button>
      <button className="decrementButton">-</button>
      <span>#</span>
      <span className="flex-grow">{params.product.title}</span>
      <button className="removeButton">X</button>
    </div>
  )
}

export default ProductInCart
