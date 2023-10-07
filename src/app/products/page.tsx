"use client"

import Card from "@/components/Card"
import ProductList from "@/components/ProductList"
import getProducts from "@/domain/functions"

const ProductsPage = () => {
  return (
    <div>
      <ProductList />
      {getProducts().map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default ProductsPage
