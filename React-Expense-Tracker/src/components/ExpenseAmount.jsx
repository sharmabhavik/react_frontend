export const ExpenseAmount = ({products}) => {
   const totalExpenses =  products.reduce((total, product) => {
   return total + Number(product.amount)
  }, 0)
  return (
    <>
        <h2 style={{marginTop:"20px"}}>Total Expense Amount: {totalExpenses}</h2>
    </>
  )
}

