import Product from "@/models/Product"

import "./ProductInCart.css"

type DummyProps = {
  product: Product
  quantity: number
  changeQuantity: (product: Product, quantity: number) => void
  removeProduct: (product: Product) => void
}

const ProductInCart = (params: DummyProps) => {
  const handleAddButtonClick = () => {
    const product: Product = params.product
    params.changeQuantity(product, 1)
  }

  const handleSubtractButtonClick = () => {
    const product: Product = params.product
    params.changeQuantity(product, -1)
  }

  const handleRemoveButtonClick = () => {
    const product: Product = params.product
    params.removeProduct(product)
  }

  return (
    <div className="flex items-center justify-between space-x-2">
      <button onClick={handleAddButtonClick} className="increment-button">
        +
      </button>
      <button onClick={handleSubtractButtonClick} className="decrement-button">
        -
      </button>
      <span>{params.quantity}</span>
      <span className="product-title flex-grow">{params.product.title}</span>
      <button onClick={handleRemoveButtonClick} className="remove-button">
        X
      </button>
    </div>
  )
}

export default ProductInCart
