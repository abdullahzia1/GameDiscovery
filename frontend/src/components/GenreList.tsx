import useGenres, { Genre } from "../hooks/useGenres";

import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
