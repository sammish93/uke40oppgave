import getProducts from "@/domain/functions"
import Card from "./Card"

const ProductList = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {getProducts().map((item) => (
        <div key={item.title} className="w-full p-4 sm:w-1/2">
          <Card key={item.title} product={item} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
