import Movie from "./components/main/Movie";
import getMovie from "./api/getMovie";
import Home from "./components/main/Home";

export default async function Page() {
  const data = await getMovie();
  return (
    <>
    <div className="mt-16 ml-10">
    <h1 className="text-5xl text-lime-500 font-serif">Recomendation</h1>
    </div>
    <Home>
      <Movie movies={data} />
      </Home>
      </>
  );
}
