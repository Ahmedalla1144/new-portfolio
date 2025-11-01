export default async function getProjects(): Promise<Project[]> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  try {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), 10_000);

    const url = "https://www.ahmed.alaa1144.apis.mrbotusa.com/api/projects/1";
    const res = await fetch(url, {
      // While you’re using `dynamic = 'force-dynamic'`, keep this runtime-only:
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
      // If you later go back to ISR, you can switch to: next: { revalidate: 10 }
    });

    if (timeoutId) clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`Failed to fetch projects: ${res.status} ${res.statusText}`);
      return [];
    }

    const ct = res.headers.get('content-type') || '';
    if (!ct.toLowerCase().includes('application/json')) {
      const txt = await res.text();
      console.warn(
        `Expected JSON but got "${ct}". Snippet: ${txt.slice(0, 200)}`
      );
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);
    console.warn("Error fetching projects during build/runtime:", error);
    return [];
  }
}
