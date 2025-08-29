
const posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three'},
  {id:4 ,title:'Post Four'},
]

export default function handler(req, res) {
  const {id} = req.query;


  if (!id) {
    return res.status(200).json(posts)
  }

 
  const post = posts.find((p) => p.id === parseInt(id))

  if (!post) {
    return res.status(404).json({ message: 'Post not found!' })
  }

  return res.status(200).json(post)
}
