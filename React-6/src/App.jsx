import './App.css'
import { UserDetails } from './components/UserDetails'

function App() {
  return (
    <>
      <UserDetails name="AB Devilliers" isOnline={true} />
      <UserDetails name="Glenn Maxx" isOnline={false} />
    </>
  )
}

export default App
