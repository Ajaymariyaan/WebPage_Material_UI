// Ensure the global users array exists (persists between hot reloads in dev)
if (!global.users) {
  global.users = [];
}

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Return all users
      res.status(200).json(global.users);
      break;

    case "POST":
      // Add a new user
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }
      const newUser = { id: Date.now(), name };
      global.users.push(newUser);
      res.status(201).json(newUser);
      break;

    case "PUT":
      // Update an existing user
      const { oldName, newName } = req.body;
      const index = global.users.findIndex(user => user.name === oldName);
      if (index !== -1) {
        global.users[index] = { ...global.users[index], name: newName };
        res.status(200).json({ message: `Updated ${oldName} to ${newName}` });
      } else {
        res.status(404).json({ message: `${oldName} not found` });
      }
      break;

    case "DELETE":
      // Delete a user by name
      const { name: deleteName } = req.body;
      const initialLength = global.users.length;
      global.users = global.users.filter(user => user.name !== deleteName);
      if (global.users.length < initialLength) {
        res.status(200).json({ message: `Deleted ${deleteName}` });
      } else {
        res.status(404).json({ message: `${deleteName} not found` });
      }
      break;

    default:
      // Method not allowed
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
