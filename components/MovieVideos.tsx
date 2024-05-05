import { API_URL } from '../app/constants';
import sty from '../styles/movie-videos.module.css';
async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('뭔가 잘못됐어..');
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={sty.container}>
      {videos.map((video) => (
        <iframe
          key={video.key}
          src={`https://youtube.com/embed/${video.key}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
