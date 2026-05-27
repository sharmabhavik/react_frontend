import './App.css'
import { Footer } from './components/footer'
import Navbar from './components/navbar'

function Welcome(){
  return (
    <h2>By Glenn Maxx</h2>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Welcome />
      <Footer />
      {/* <welcome /> - Not Allowed */}
    </div>
  )
}

export default App
