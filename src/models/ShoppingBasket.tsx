import Product from "./Product"

export default class ShoppingBasket {
  getMap(): Iterable<readonly [Product, number]> | null | undefined {
    throw new Error("Method not implemented.")
  }
  basket = new Map<Product, number>()

  public constructor(basket: Map<Product, number>) {
    this.basket = basket
  }

  public changeQuantity = (product: Product, quantity: number) => {
    let numberThing = quantity
    if (this.basket.has(product)) {
      numberThing += this.basket.get(product) ?? 0
    }

    // If the quantity is 0 and the product exists
    if (numberThing === 0 && this.basket.has(product)) {
      // The product is deleted
      this.removeItem(product)
    } else {
      // If the product exists
      this.basket.has(product)
        ? // The quantity is changed
          this.basket.set(product, numberThing)
        : // Otherwise the product is added
          this.basket.set(product, quantity)
    }
  }

  public removeItem = (product: Product) => {
    if (this.basket.has(product)) {
      this.basket.delete(product)
    }
  }

  public countProducts = (): number => {
    return this.basket.size
  }

  public totalItemPrice = (product: Product): number => {
    if (this.basket.has(product)) {
      const quantity: number = this.basket.get(product) ?? 0
      return product.price * quantity
    } else {
      return 0
    }
  }

  public totalBasketPrice = (): number => {
    let totalPrice = 0

    this.basket.forEach((value, key) => {
      totalPrice += this.totalItemPrice(key)
    })

    return totalPrice
  }
}
