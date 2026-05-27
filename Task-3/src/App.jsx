import { useReducer, useState } from "react";
import { reducer, ACTIONS } from "./Reducer";

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  const [productName, setProductName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: {
        name: productName,
      },
    });

    setProductName("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>

      <hr />

      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h3>{product.name}</h3>

            <p>Quantity: {product.quantity}</p>

            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.INCREASE_QTY,
                  payload: {
                    id: product.id,
                  },
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DECREASE_QTY,
                  payload: {
                    id: product.id,
                  },
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_PRODUCT,
                  payload: {
                    id: product.id,
                  },
                })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
