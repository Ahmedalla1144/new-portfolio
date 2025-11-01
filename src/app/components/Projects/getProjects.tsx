export default async function getProjects() {
  let timeoutId: NodeJS.Timeout | null = null;
  
  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    // Fetch data from API
    const res = await fetch(
      "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/projects/1",
      { 
        next: { revalidate: 10 },
        signal: controller.signal
      }
    );
    
    if (timeoutId) clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.warn(`Failed to fetch projects: ${res.status} ${res.statusText}`);
      return []; // Return empty array instead of throwing
    }
    
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    // Clean up timeout if still active
    if (timeoutId) clearTimeout(timeoutId);
    
    // Log error but don't fail the build
    console.warn("Error fetching projects during build:", error);
    return []; // Return empty array as fallback
  }
}
