export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <a href="./products" className="text-center text-xl hover:text-blue-600">
        To the /products page
      </a>
      <div className="mx-auto max-w-screen-sm">
        <p className="p-4 text-center">
          I updated the 'Uke 40' project to take POST requests. I added a form
          to the products page in which all properties of a product can be
          entered. You can then click the 'Send a post request' button which
          adds the Product to the ProductList and then rerenders the
          ProductList. The insert isn't permanent however, as no database is
          present in the code.
        </p>
        <p className="p-4 text-center">
          I would be interested to know if I should use .then() after my POST
          request if my fetch is async and I've used 'await'. See
          components/PostButton: line 39.
        </p>
      </div>
    </div>
  )
}
