import { useState } from 'react'

const ObjectState = () => {
  const [user, setUser] = useState({
    name: "Bhavik",
    age: 20,
    favouriteSport: "Cricket"
  })
  
  const changeUserName = () => {
    setUser({...user,
        name: user.name === "Bhavik" ? "Thor": "Bhavik"
    })
  }
  
  const changeAge = () => {
    setUser({...user,
        age: user.age === 20 ? 25 : 20
    })
  }
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.favouriteSport}</p>
      <button onClick={changeUserName}>{user.name === "Bhavik" ? "Change User name to Thor" : "Change User name to Bhavik"}</button>
      <button onClick={changeAge}>{user.age === 20 ? "Change Age to 25" : "Change Age back to Original"}</button>
    </div>
  )
}

export default ObjectState
