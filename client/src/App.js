import React, { useState, useEffect } from "react"
import productService from "./services/productService"
import Search from "./components/Search/search"

function App() {
  const [products, setproducts] = useState(null)

  useEffect(() => {
    if (!products) {
      getProducts()
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll()
    console.log(res)
    setproducts(res)
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    )
  }

  return (
    <div className="App">
      <p>abc</p>
      <Search />
      <ul className="list">
        {products && products.length > 0 ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  )
}

export default App
