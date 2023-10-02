import Product from "../models/Product"

const products = [
  new Product("egg", "only the finest eggs are available here", "food", 1),
  new Product(
    "dog",
    "dogs are pre-trained and are very friendly. perfect for the barbecue",
    "livestock",
    24000,
  ),
  new Product(
    "michael bolton",
    "our michael boltons are cloned in a sterilised laborotory environment",
    "ex heartthrob",
    3.5,
  ),
  new Product(
    "pumpkin",
    "one of the spookiest things a person can digest",
    "food",
    9,
  ),
  new Product("guinea fowl", "the OG chicken", "livestock", 60),
]

const getProducts = (): Product[] => {
  return products
}
