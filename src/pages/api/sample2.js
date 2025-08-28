// pages/api/users.js
let users = [{ id: 1, name: "Ajay" }];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Return all users
      res.status(200).json(users);
      break;

    case "POST":
      // Add a new user
      const newUser = { id: users.length + 1, ...req.body };
      users.push(newUser);
      res.status(201).json(newUser);
      break;

    // case "PUT":
    //   // Replace a user completely
    //   const replaceUser = req.body; // must include id
    //   users = users.map(u => (u.id === replaceUser.id ? replaceUser : u));
    //   res.status(200).json(replaceUser);
    //   break;

    // case "PATCH":
    //   // Update a user partially
    //   const { id, name } = req.body;
    //   users = users.map(u => (u.id === id ? { ...u, name } : u));
    //   res.status(200).json({ id, name });
    //   break;

    // case "DELETE":
    //   // Remove a user
    //   const deleteId = req.body.id;
    //   users = users.filter(u => u.id !== deleteId);
    //   res.status(200).json({ message: "Deleted user " + deleteId });
    //   break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
