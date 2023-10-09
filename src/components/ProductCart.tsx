import getProducts from "@/domain/functions"
import ProductInCart from "./ProductInCart"

const ProductCart = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        <h2 className="text-left">Shopping Basket</h2>
        <a href="." className="text-right">
          Close
        </a>
      </div>
      {getProducts().map((item) => (
        <ProductInCart key={item.title} product={item} />
      ))}
      <span>Total: £</span>
      <button>Buy</button>
    </div>
  )
}

export default ProductCart

//{getProducts().map((item) => ( ))}
