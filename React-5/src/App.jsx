import './App.css';
import { Parent } from './components/Parent';
// import { UserCard } from './components/UserCard';
/* import { Welcome } from './components/Welcome';
import {Product} from './components/Product'
import { Card } from './components/Card'; */

function App() {
  return (
    <div>
      <h1>Props:</h1>
      {/* <Welcome name = "Bhavik" alias= "Thor"/>
      <Welcome name = "R.D.J" alias= "Iron Man"/>
      <Welcome name = "Rohan" alias= "Loki"/>
      <Product title="Gaming Laptop" price={12.99} inStocks={true} Categories={["Electronics", "Gaming", "Computers"]} />
      <Card name="Cricket Kit" price={0}/> */}
      
      {/* <UserCard name="Bhavik" age={20} city="Ahmedabad" email="bhavik.sharma@gmail.com" /> */}
      
      <Parent />
      
    </div>
  )
}

export default App
