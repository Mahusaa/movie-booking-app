import Movie from "./components/main/Movie";
import getMovie from "./api/getMovie";


export default  async function Page() {
  const data = await getMovie()
    return <div>
      <Movie movies={data}/>
    </div>
  }
  