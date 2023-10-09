import getProducts from "@/domain/functions"
import ShoppingBasket from "@/models/ShoppingBasket"
import ProductInCart from "./ProductInCart"

type DummyProps = {
  basket: ShoppingBasket
}

const ProductCart = (props: DummyProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        <h2 className="text-left">Shopping Basket</h2>
        <a href="." className="text-right">
          Close
        </a>
      </div>
      {Array.from(props.basket.basket.entries()).map(([product, quantity]) => (
        <ProductInCart
          key={product.title}
          product={product}
          quantity={quantity}
        />
      ))}
      <span>Total: £{props.basket.totalBasketPrice()}.00</span>
      <button>Buy</button>
    </div>
  )
}

export default ProductCart
