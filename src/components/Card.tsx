import Product from "@/models/Product"

import "./Card.css"

type DummyProps = {
  product: Product
}

const Card = (params: DummyProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-category-container">
          <span className="card-category">{params.product.category}</span>
        </div>
        <h2 className="card-title">{params.product.title}</h2>
        <p className="card-description">{params.product.description}</p>
        <p className="card-price">{params.product.price}</p>
        <button>Add to basket</button>
      </div>
    </div>
  )
}

export default Card
