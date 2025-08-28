
const users = [{ id: 1, name: "Ajay" }, { id: 2, name: "Anto" }];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);     
  } else {
    res.status(405).end("Method Not Allowed");
  }

}


// export defaultfunction AppPageRouteModule(req,res){

//   if(req.method==="GET"){
//     res.status(200).json(users)
//   }
//   else{
//     res.status(405).end("method not found ")
//   }
// }

// export default function appp(req,res){

//   if(req.method==="GET"){
// res.status(200).json({message:"hello"})
//   }
//   else{
//     res.status(405).end("method not found ")
//   }
// }