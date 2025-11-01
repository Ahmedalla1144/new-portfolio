export default async function getProjects() {
  // Fetch data from API
  const res = await fetch(
    "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/projects/1",
    { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}
