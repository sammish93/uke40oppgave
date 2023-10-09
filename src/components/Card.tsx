import Product from "@/models/Product"

import "./Card.css"

type DummyProps = {
  product: Product
  changeQuantity: (product: Product, quantity: number) => void
}

const Card = (params: DummyProps) => {
  const handleButtonClick = () => {
    const product: Product = params.product
    params.changeQuantity(product, 1)
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-category-container">
          <span className="card-category">{params.product.category}</span>
        </div>
        <h2 className="card-title">{params.product.title}</h2>
        <p className="card-description">{params.product.description}</p>
        <p className="card-price">{params.product.price}</p>
        <button onClick={handleButtonClick}>Add to basket</button>
      </div>
    </div>
  )
}

export default Card
