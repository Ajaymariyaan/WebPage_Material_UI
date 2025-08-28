

// if (!global.users) {
//   global.users = []; 
// }

// export default function handler(req, res) {
//   const { method, body } = req;

//   if (method === "GET") {
//     res.status(200).json(global.users); 
//   } else if (method === "POST") {
//     const newUser = { id: Date.now(), name: body.name }; 
//     global.users.push(newUser);
//     res.status(201).json(newUser); 
//   } 
//   else if (req.method === "DELETE") {
//   const { name } = req.body; 
//   users = users.filter(user => user.name !== name); 
//   res.status(200).json({ message: `Deleted ${name}` });
// }

  
//   else {
//     res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

let users = []; // in-memory storage

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } 
  else if (req.method === "POST") {
    const { name } = req.body;
    users.push({ name });
    res.status(201).json({ name });
  }
  else if (req.method === "DELETE") {
    const { name } = req.body;
    users = users.filter(user => user.name !== name);
    res.status(200).json({ message: `Deleted ${name}` });
  }
  else if (req.method === "PUT") {
  const { oldName, newName } = req.body;
  const index = users.findIndex(user => user.name === oldName);
  if (index !== -1) {
    users[index] = { name: newName }; 
    res.status(200).json({ message: `Updated ${oldName} to ${newName}` });
  } else {
    res.status(404).json({ message: `${oldName} not found` });
  }
}




  else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]); // ⚠ allowed methods
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

