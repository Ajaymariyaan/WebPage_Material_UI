import { useState, useEffect } from "react";

export default function CSR() {
  const [msg, setMsg] = useState("Loading..."); // start with "Loading..."
const [count,setCount] = useState(100)
  useEffect(() => {
    setMsg("Hello from CSR!"); // change message after render
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering</h1>
      <p>{msg}</p>
      <button onClick={()=>{
        setCount(count-1)
      }}> click me {count} </button>

      <p> {count}</p>
    </div>
  );
}
