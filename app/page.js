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
    return <h1 className="text-red-400">Hello, Next.js!</h1>
  }
  