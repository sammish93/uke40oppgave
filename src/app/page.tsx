export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <a href="./products" className="text-center text-xl hover:text-blue-600">
        To the /products page
      </a>
      <p>
        I wasn't able to get the tests running with typescript and my
        refactoring is a bit of a mess (ended up testing out tailwind half way
        through).
      </p>
    </div>
  )
}
