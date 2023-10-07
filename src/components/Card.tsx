import Product from "@/models/Product"

import "./Card.css"

type DummyProps = {
  title: string
  description: string
  category: string
  price: number
}

const Card = (params: DummyProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-category-container">
          <span className="card-category">{params.category}</span>
        </div>
        <h2 className="card-title">{params.title}</h2>
        <p className="card-description">{params.description}</p>
        <p className="card-price">{params.price}</p>
        <button>Add to basket</button>
      </div>
    </div>
  )
}

export default Card
