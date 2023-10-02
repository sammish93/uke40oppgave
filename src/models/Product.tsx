export default class Product {
  title: string
  description: string
  category: string
  price: number

  public constructor(
    title: string,
    description: string,
    category: string,
    price: number,
  ) {
    this.title = title
    this.description = description
    this.category = category
    this.price = price
  }
}
