import './App.css'
import { CustomButton } from './components/CustomButton'
function App() {
  return (
    <>
      <CustomButton type="submit" className="btn" onClick={() => { alert("Form Submitted") }}>Submit</CustomButton>
      <CustomButton disabled>Disabled</CustomButton>
    </>
  )
}

export default App