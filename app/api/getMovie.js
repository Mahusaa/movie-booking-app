export default async function getMovie() {
  const res = await fetch("https://seleksi-sea-2023.vercel.app/api/movies");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const movies = await res.json();

  return movies;
}
