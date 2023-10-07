import getProducts from "@/domain/functions"

const ProductList = () => {
  return (
    <ul>
      {getProducts().map((item) => (
        <li key={item.title}>
          Title: {item.title}, Price: {item.price}, Category: {item.category},
          Description: {item.description}
        </li>
      ))}
    </ul>
  )
}

export default ProductList
