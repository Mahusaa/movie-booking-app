import Movie from "./components/main/Movie";

async function getData() {
  const res = await fetch("https://seleksi-sea-2023.vercel.app/api/movies");

  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default  async function Page() {
  const data = await getData()
  console.log(data)
    return <div>
      <Movie className='w-90 mx-auto max-w-40rem p-12 my-8 text-center' movies={data}/>
    </div>
  }
  