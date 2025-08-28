import { useState } from "react";
// import SearchBar from "../components/SearchBar";
// import MovieCard from "../components/MovieCard";
import SearchBar from "@/Component/SearchBar";
import MovieCard from "@/Component/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const res = await fetch(
      `/api/search?query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Explorer</h1>
      <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovies} style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
