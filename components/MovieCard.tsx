import getImagePath from '@/lib/getImagePath'
import { Movie } from '@/typings'
import Image from 'next/image'

function MovieCard({movie}: {movie: Movie}) {
  return (
    <div>
        <p>{movie.title}</p>
        <Image 
            alt={movie.title}
            width={1920}
            height={1080}
            key={movie.id}
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
        />
    </div>
  )
}

export default MovieCard