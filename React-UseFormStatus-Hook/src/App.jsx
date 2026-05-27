import './App.css'
import CustomerForm from './components/CustomerForm'

function App() {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit");
  }
  
  return (
    <>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  )
}

export default App
