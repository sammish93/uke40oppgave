import { useEffect, useState } from "react"

import getProducts from "@/domain/functions"
import Product from "@/models/Product"
import Card from "./Card"
import PostButton from "./PostButton"

type DummyProps = {
  changeQuantity: (product: Product, quantity: number) => void
}

const ProductList = ({ changeQuantity }: DummyProps) => {
  const [responses, setResponses] = useState<Response[]>([])

  const getResponses = async () => {
    // Using fetch and the url matchin folder (api/responses/route.ts)
    // Using get since that is what this route handles
    const response = await fetch("/api/products", {
      method: "get",
    })

    // Using a built in method on the fetch-response that converts the "stream" to JSON (object-like data)
    const result = (await response.json()) as { data: Response[] }
    // Using the state-setter to update the state after component is mounted
    setResponses(result.data)
  }

  useEffect(() => {
    // Using async/await to be able to handle the promise coming from fetch

    // Call the fetch function
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getResponses()
  }, [])

  return (
    <div>
      <PostButton updateList={getResponses} />
      <div className="-mx-4 flex flex-wrap">
        {responses.map((response) => (
          <div key={response.title} className="w-full p-4 sm:w-1/2">
            <Card
              key={response.title}
              product={
                new Product(
                  response.title,
                  response.description,
                  response.category,
                  response.price,
                )
              }
              changeQuantity={changeQuantity}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
