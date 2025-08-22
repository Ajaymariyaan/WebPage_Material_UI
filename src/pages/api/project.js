
export default function handler(req, res) {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  
  res.status(200).json(products);
}
