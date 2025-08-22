// pages/isr-example.js
import { useState } from "react";

export default function ISRExample({ msg }) {
  const [count, setCount] = useState(100);

  return (
    <div>
      <h1>ISR Example</h1>
      <p>Message: {msg}</p>
      <button onClick={() => setCount(count - 1)}>Click me {count}</button>
      <p>Count: {count}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { msg: "Hello from ISR! " + new Date().toISOString() },
    revalidate: 10, // regenerate every 10 seconds
  };
}
