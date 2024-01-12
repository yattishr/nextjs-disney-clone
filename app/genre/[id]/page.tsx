type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return <div>Showing Genres of: {genre} with ID: {id}</div>;
}

export default GenrePage;