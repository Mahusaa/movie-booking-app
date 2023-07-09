import Movie from "./components/main/Movie";
import getMovie from "./api/getMovie";
import Home from "./components/main/Home";

export default async function Page() {
  const data = await getMovie();
  return (
    <Home>
      <Movie movies={data} />
      </Home>
  );
}
