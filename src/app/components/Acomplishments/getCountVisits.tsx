export default async function getCountVisits() {
  try {
    const res = await fetch(
      "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/portfolio-visits/1",
      { next: { revalidate: 600 } }
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching portfolio visits:", error);
    return;
  }
}
