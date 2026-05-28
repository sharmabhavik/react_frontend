const ExpenseCategories = ({ products, selectedCategory, setSelectedCategory }) => {
    
  const categories = [
    ...new Set(
      products.map(product => product.category)
    )
  ]
  
  function handleCategory(categoryValue){
    setSelectedCategory(categoryValue);
  }

  return (
    <div className="flex flex-wrap gap-2.5 mt-5">

      <button
        className={`px-3.5 py-2 rounded-md font-medium cursor-pointer border-2 transition-all ${
          selectedCategory === "All" 
            ? "bg-blue-600 border-blue-600 text-white" 
            : "bg-[#1e1e1e] border-[#333] text-white hover:bg-[#252525]"
        }`}
        onClick={() => handleCategory("All")}
      >
        All
      </button>
      {
        categories.map(category => (
          <button
            key={category}
            className={`px-3.5 py-2 rounded-md font-medium cursor-pointer border-2 transition-all ${
              selectedCategory === category 
                ? "bg-blue-600 border-blue-600 text-white" 
                : "bg-[#1e1e1e] border-[#333] text-white hover:bg-[#252525]"
            }`}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))
      }

    </div>
  )
}

export default ExpenseCategories;