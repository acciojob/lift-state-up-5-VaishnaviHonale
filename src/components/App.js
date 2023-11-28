
import React,{useState} from "react";
import './../styles/App.css';
import login from './login'
const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      <login isLoggedIn={isLoggedIn}setIsLoggedIn={setIsLoggedIn}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
