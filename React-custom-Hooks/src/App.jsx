import './App.css'
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const width = useWindowWidth();
  return (
    <>
      <p>{width}</p>
    </>
  )
}

export default App