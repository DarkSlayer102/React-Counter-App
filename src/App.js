import { useState } from "react";
import './App.css';


function App() {
  const [count,setCount]  = useState(0)
  const head =  "Counter App"
  const Current = "Current Count: "

  const decrease = function decreaseing(){
    setCount(preCount => preCount - 1)
    console.log("This is decrease" + count)
    
  }

   const increase = function increaseing(){
    setCount(preCount => preCount + 1)
    console.log("This is increase" + count)
    
  }
  
  const handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.value != count){
      setCount(count)
    } 

    setCount(count)


    
  }


  const removed = (event) =>{
    if (count == 0){
        console.log(`Number is: ${count}`)
      }
    console.log(event.target.value)
    if (event.target.value != count){
      let newcount = null
      newcount = count
      newcount = parseInt(0)
      if (count != 0){
        console.log(`Current Number is : ${count}`)
      }

      
      setCount(newcount) 

      
    }
    

  }

  return (
    <div className="App">
      <div className="headers">{head}</div>
      <div className="Counters">
        <div class="counted">
                  <p4 className="counts">{Current} {count}</p4>        
        </div>
        <button onClick={decrease} className="min">-</button>
        <tr></tr>
        <button onClick={increase} className="max">+</button>
        <tr>
        </tr>
        <tr>

        </tr>
        <button onClick={removed} className="remove">Remove</button>

      </div>
    </div>
  );
}

export default App;
