export default function SSR({ message }) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>{message}</p>
    </div>
  );
}

// Runs on every request
export async function getServerSideProps() {
  return {
    props: {
      message: "Hello from SSR!"
    }
  };
}
