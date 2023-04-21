import React, {useEffect, useState} from "react";

function Clicker() {
const [count, setCount] = useState(0)

  const incriment = () => {setCount(count + 1)}
  const decriment = () => {setCount(count - 1)}

  useEffect(() => {console.log('hello from clicker', count ) 
  return () => console.log('goodBy clicker')}, [count]) 
 
  return (
    <div className="App">
      <button onClick={decriment}> - </button>
      <span> {count} </span>
      <button onClick={incriment}> + </button>
    </div>
  );
}

export default Clicker;
