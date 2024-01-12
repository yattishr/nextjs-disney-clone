import Image from 'next/image'
import { Button } from '@/components/ui/button'
import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      {/* Carousel Banner Wrapper */}

      <div className='flex flex-'>
        {/* Movie Carousel List */}
        <MoviesCarousel movies={[upcomingMovies]} title='Upcoming'/>
        <MoviesCarousel movies={[topRatedMovies]} title='Top Rated'/>
        <MoviesCarousel movies={[popularMovies]} title='Popular'/>

      </div>

    </main>
  )
}
