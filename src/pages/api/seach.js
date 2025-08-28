export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Query missing" });

  const apiRes = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await apiRes.json();
  res.status(200).json(data);
}
