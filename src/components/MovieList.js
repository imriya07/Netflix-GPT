import MovieCard from "./MovieCard";
import "../index.css"

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-4 ">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
