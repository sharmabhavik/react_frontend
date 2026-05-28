import { useReducer, useEffect, useState } from "react";
import { reducer } from "./components/Reducer";
import AddExpense from "./components/AddExpense";
import ShowExpense from "./components/ShowExpense";
import ExpenseCategories from "./components/ExpenseCategories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingExpense, setEditingExpense] = useState(null);

  const [sortOrder, setSortOrder] = useState("");

  const [products, dispatch] = useReducer(reducer, [], () => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });

  let filteredProducts = products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory,
  );

  if (sortOrder === "asc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.amount - b.amount,
    );
  }

  if (sortOrder === "desc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.amount - a.amount,
    );
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 mt-6">
      <h1 className="text-3xl text-center">Expense Tracker App</h1>

      <AddExpense
        dispatch={dispatch}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <ExpenseCategories
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex gap-3">
        <button onClick={() => setSortOrder("asc")}>Ascending</button>

        <button onClick={() => setSortOrder("desc")}>Descending</button>
      </div>

      <ShowExpense
        products={filteredProducts}
        dispatch={dispatch}
        setEditingExpense={setEditingExpense}
      />
    </div>
  );
}

export default App;
