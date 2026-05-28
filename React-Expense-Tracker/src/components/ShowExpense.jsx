import { ACTIONS } from "./Reducer";
import { ExpenseAmount } from "./ExpenseAmount";

const ShowExpense = ({ products, dispatch, setEditingExpense }) => {
  return (
    <div className="mt-5 flex flex-col gap-4">
      
      <h2 className="text-xl font-bold text-gray-300">
        Total Expenses: {products.length}
      </h2>

      <ExpenseAmount products={products} />

      {products.map(product => (
        <div
          key={product.id}
          className="flex justify-between items-center bg-[#1e1e1e] p-4 rounded-xl border border-[#333]"
        >
          <div>
            <h2>Name: {product.name}</h2>
            <p>Amount: {product.amount}</p>
            <p>Category: {product.category}</p>
          </div>

          <div>
            <button
              className="secondary-btn"
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_PRODUCT,
                  payload: product.id
                })
              }
            >
              Delete
            </button>

            <button
              className="secondary-btn ml-2"
              onClick={() => setEditingExpense(product)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowExpense;