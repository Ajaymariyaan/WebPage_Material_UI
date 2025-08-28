
export default function Home() {
  const posts = ["Post 1", "Post 2", "Post 3"]

  return (
    <div>
      <h1>Server Component</h1>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}


// export default function ServerSideRender(data){


// return(
// <ul>
//     data.map((name) = {
//         <li >{name}</li>

//     })
    
//     </ul>
// )
// }



// export async function getServerSideProps(){

//     const dataName=["Ajai","Ajay","anto"]

//     return{

//         props:{
//             data:{dataName}
//         }
//     }
// }