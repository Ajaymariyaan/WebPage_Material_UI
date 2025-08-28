import Image from "next/image";
import Link from "next/link";

 function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <Link href={`/movies/${movie.imdbID}`}>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          width={180}
          height={270}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
}


export default MovieCard;
