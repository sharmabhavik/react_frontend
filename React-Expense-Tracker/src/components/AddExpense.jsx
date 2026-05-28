import { useEffect, useState } from "react";
import { ACTIONS } from "./Reducer";

const AddExpense = ({ dispatch, editingExpense, setEditingExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: ""
  });

  useEffect(() => {
    if (editingExpense) {
      setFormData({
        name: editingExpense.name,
        amount: editingExpense.amount,
        category: editingExpense.category
      });
    } else {
      setFormData({
        name: "",
        amount: "",
        category: ""
      });
    }
  }, [editingExpense]);

  function submitDetails(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.amount ||
      !formData.category
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.amount < 0) {
      alert("Amount must be positive");
      return;
    }

    if (editingExpense) {
      dispatch({
        type: ACTIONS.EDIT_PRODUCT,
        payload: {
          id: editingExpense.id,
          name: formData.name,
          amount: formData.amount,
          category: formData.category
        }
      });

      setEditingExpense(null);
    } else {
      dispatch({
        type: ACTIONS.ADD_PRODUCT,
        payload: formData
      });
    }

    setFormData({
      name: "",
      amount: "",
      category: ""
    });
  }

  function clearExpense() {
    dispatch({ type: ACTIONS.REMOVE_ALL_PRODUCT });
  }

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#333]">
      <form
        onSubmit={submitDetails}
        className="flex flex-wrap items-center gap-4"
      >
        <input
          placeholder="Name"
          value={formData.name}
          onChange={e =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={e =>
            setFormData({ ...formData, amount: e.target.value })
          }
        />

        <select
          value={formData.category}
          onChange={e =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="FOOD">FOOD</option>
          <option value="BILLS">BILLS</option>
          <option value="ENTERTAINMENT">ENTERTAINMENT</option>
          <option value="SHOPPING">SHOPPING</option>
          <option value="ELECTRONICS">ELECTRONICS</option>
          <option value="OTHERS">OTHERS</option>
        </select>

        <button type="submit">
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>

        <button type="button" onClick={clearExpense}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default AddExpense;