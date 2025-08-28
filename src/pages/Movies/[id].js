import Image from "next/image";

export default function MovieDetail({ movie }) {
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.Title}</h1>
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        width={300}
        height={450}
      />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}

// Fetch movie details using SSR
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${params.id}`
  );
  const movie = await res.json();

  return { props: { movie } };
}
