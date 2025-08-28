

export default function SSR({ message,Name }) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>{message}</p>
      <p> {Name}</p>

    </div>
  );
}


export async function getServerSideProps() {

  const name ="Ajay"
  return {


    
    props: {
      message: "Hello from SSR!",
      Name:name
    }
  };
}


