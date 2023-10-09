import { NextResponse } from "next/server"
import getProducts from "@/domain/functions"

export function GET() {
  const responses = getProducts()

  return NextResponse.json(
    { data: Array.from(responses.values()) },
    { status: 200 }, 
  )
}