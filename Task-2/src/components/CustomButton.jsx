export const CustomButton = ({children, ...jungle}) => {
  return (
    <button {...jungle}>
        {children}
    </button>
  )
}