import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  let name = "Bhavik";
  let isOnline = true;

  return (
    <>
      <div>
        <h1>Hello Ji</h1>
        <p>Hello I am here to meet you</p>
        <UserDetails
          name={name}
          isOnline={isOnline}
          isPremium={true}
          isNewUser={false}
          role="Admin"
        />
      </div>
    </>
  );
}

export default App;
