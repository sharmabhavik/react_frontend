import { useState } from 'react'

const ArrayState = () => {
    
  const [items, setItems] = useState([
    {
        id:1,
        name: "Laptop",
        price: 54500,
        color: "Black"
    },
    {
        id:2,
        name: "Keyboard",
        price: 500,
        color: "Black"
    }
  ])
  
  const addProduct = () => {
    const newItem = {
    id: Date.now(),
    name: "Mouse",
    price: 700,
    color: "Black"
  }
    setItems([...items, newItem])
  }
  
  const removeProduct = () => {(id) => {
    setItems(items.filter((item) => item.id !== id))
  }}
  
  return (
    <div>
      <h2>Accessories</h2>
      <ul>
        {items.map((item) => {
            return (
                <>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <button onClick = {removeProduct(item.id)}>Delete</button>
                </>
            )
        })}
      </ul>
      <button onClick={addProduct}>Add a Product</button>
    </div>
  )
}

export default ArrayState
