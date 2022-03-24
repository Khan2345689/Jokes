import axios from "axios";
import { useEffect, useState } from "react";

function App() {
const [x,setX]=useState('')

  const handleclick = async() => {
    
   const {data}= await axios({
      url:"https://icanhazdadjoke.com",
      method:'get',
      headers:{"Accept": "application/json"}
    })
    const {joke}=data
    setX(joke)
    console.log(joke)
  };

  useEffect(()=>{
    handleclick()
  },[])

  

  return (
    <div className="App">
      <button onClick={handleclick}>click to get a joke</button>
      <p>{x}</p>
      
    </div>
  );
}

export default App;
