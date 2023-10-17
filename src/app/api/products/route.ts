import { NextRequest, NextResponse } from "next/server"
import { getProducts, addProduct } from "@/domain/functions"
import Product from "@/models/Product";

export function GET() {
  const responses = getProducts()

  return NextResponse.json(
    { data: Array.from(responses.values()) },
    { status: 200 }, 
  )
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const product = new Product(
      data.title,
      data.description,
      data.category,
      data.price
    );
    
    addProduct(product)

    return NextResponse.json(product, { status: 200 })
  } catch (error) {
    return NextResponse.json("oops, item could not be serialised into Product", { status: 400 })
  }
}