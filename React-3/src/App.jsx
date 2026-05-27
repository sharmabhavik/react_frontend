import './App.css';
import { CardWithJSX, CardWithRuleOne } from './components/Card';
import { Footer } from './components/footer';
import Navbar from './components/navbar';
import { WelcomeWithJSX } from './components/Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <WelcomeWithJSX />
      {/* <WelcomeWithoutJSX /> */}
      <CardWithJSX />
      {/* <CardWithoutJSX /> */}
      <CardWithRuleOne />
      <Footer />
      {/* <welcome /> - Not Allowed */}
    </div>
  )
}

export default App
