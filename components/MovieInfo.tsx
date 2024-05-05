import { API_URL } from '../app/constants';
import carrot from '../styles/movie-info.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={carrot.container}>
      <img
        className={carrot.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={carrot.info}>
        <h1 className={carrot.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.hompage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
