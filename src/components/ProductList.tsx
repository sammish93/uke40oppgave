import getProducts from "@/domain/functions"
import Card from "./Card"

type DummyProps = {
  changeQuantity: (product: Product, quantity: number) => void
}

const ProductList = ({ changeQuantity }: DummyProps) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      {getProducts().map((item) => (
        <div key={item.title} className="w-full p-4 sm:w-1/2">
          <Card
            key={item.title}
            product={item}
            changeQuantity={changeQuantity}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductList
