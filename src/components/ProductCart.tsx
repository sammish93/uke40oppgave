import getProducts from "@/domain/functions"
import Product from "@/models/Product"
import ShoppingBasket from "@/models/ShoppingBasket"
import ProductInCart from "./ProductInCart"

type DummyProps = {
  basket: ShoppingBasket
  changeQuantity: (product: Product, quantity: number) => void
  removeProduct: (product: Product) => void
  buyBasket: () => void
  closePopout: () => void
}

const ProductCart = (params: DummyProps) => {
  return (
    <div className="fixed inset-y-0 right-0 z-10 h-screen w-1/3 overflow-y-auto bg-white p-5 shadow-lg ">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <h2 className="text-left">Shopping Basket</h2>
          <button
            onClick={params.closePopout}
            className="bg-transparent text-right text-black shadow-none hover:text-blue-600"
          >
            Close
          </button>
        </div>
        {Array.from(params.basket.basket.entries()).map(
          ([product, quantity]) => (
            <ProductInCart
              key={product.title}
              product={product}
              quantity={quantity}
              changeQuantity={params.changeQuantity}
              removeProduct={params.removeProduct}
            />
          ),
        )}
        <span>Total: £{params.basket.totalBasketPrice()}.00</span>
        <button onClick={params.buyBasket}>Buy</button>
      </div>
    </div>
  )
}

export default ProductCart
