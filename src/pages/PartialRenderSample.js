// 'use client';
// import { Suspense, useState, useEffect } from 'react';

// // Client-side dynamic component
// function DynamicQuote() {
//   const [quote, setQuote] = useState(null);
//   const[count,setCount]=useState("5")
//   const[action,setAction]=useState(true)

//   useEffect(() => {
  
//     setTimeout(() => {
//       setQuote({
//         content: "This is a dynamic quote from the server",
//         author: "Server-side Example"

//       });

//     }, 1000); 
//   }, []);


//   useEffect(() => {
//     if(!action) return;
    
//     const interval = setInterval(() => {
//       setCount(prev => prev *5); 
//     }, 2000);

//   }, [action]);

//   if (!quote) return null; 

// const handle =()=>{setAction(false)

// }
//   return <><p>"{quote.content}" - {quote.author}</p>
//   <p> {count}</p>
//   <button onClick={handle}>Clear</button>
  
//   </>;
// }


// export default function PartialRenderSample() {
//   return (
//     <div style={{ textAlign: 'center', padding: '2rem' }}>
//       <h1>Welcome to our website!</h1>

//       <Suspense fallback={<p>Loading dynamic quote...</p>}>
//         <DynamicQuote />
//       </Suspense>
//     </div>
//   );
// }


'use client';
import { Suspense, useState, useEffect } from 'react';

function DynamicQuote() {
  const [quote, setQuote] = useState(null);
  const [count, setCount] = useState(5); // number
  const [running, setRunning] = useState(true);

  // Load quote after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote({
        content: "This is a dynamic quote from the server",
        author: "Server-side Example"
      });
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  // Counter: multiply by 5 every 2 seconds
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount(prev => prev * 5);
    }, 500);

    return () => clearInterval(interval); // cleanup to avoid errors
  }, [running]);

  if (!quote) return null;

  return (
    <>
      <p>"{quote.content}" - {quote.author}</p>
      <p>Count: {count}</p>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=> setCount(1)}>Restart</button>
    </>
  );
}

export default function PartialRenderSample() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to our website!</h1>
      <Suspense fallback={<p>Loading dynamic quote...</p>}>
        <DynamicQuote />
      </Suspense>
    </div>
  );
}
