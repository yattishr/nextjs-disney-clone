import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    }
}

function SearchPage({params: {term}}: Props) {
    if (!term) notFound

    const termToUse = decodeURI(term)

    // API call to get searched movies from TMDB

  return (
    <div>Showing search results for: {termToUse}</div>
  )
}

export default SearchPage