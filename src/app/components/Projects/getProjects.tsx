export default async function getProjects() {
  // Fetch data from API
  const res = await fetch(
    "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/projects",
    { next: { revalidate: 10 } }
  );
  return res.json();
}
