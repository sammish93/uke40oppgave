import React, { useState } from "react"

import Product from "@/models/Product"

type DummyProps = {
  updateList: () => void
}

const PostButton = ({ updateList }: DummyProps) => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0.0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductData({
      ...productData,
      [name]: name === "price" ? parseFloat(value) : value,
    })
  }

  const handleButtonClick = async () => {
    await fetch("/api/products", {
      method: "post",
      body: JSON.stringify(
        new Product(
          productData.title,
          productData.description,
          productData.category,
          productData.price,
        ),
      ),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(updateList)
  }

  return (
    <div>
      <p>Enter product details you wish to add:</p>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <button className="col-span-full" onClick={handleButtonClick}>
          Send a post request
        </button>
      </form>
    </div>
  )
}

export default PostButton
