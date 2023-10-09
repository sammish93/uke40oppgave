import { useState } from "react"

type DummyProps = {
  openPopout: () => void
  isOpen: boolean
  children: React.ReactNode
}

const BasketPopout = (params: DummyProps) => {
  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={params.openPopout}
          className="bg-transparent px-0 text-right text-black shadow-none hover:text-blue-600"
        >
          Open Shopping Basket
        </button>
      </div>
      {params.isOpen && <div>{params.children}</div>}
    </div>
  )
}

export default BasketPopout
