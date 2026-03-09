type GithubUserResponse = {
  followers?: number;
};

type GithubRepoResponse = {
  stargazers_count?: number;
};

type GithubStats = {
  followers: number;
  stars: number;
};

const GITHUB_USERNAME = "Ahmedalla1144";
const USER_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export default async function getGithubStats(): Promise<GithubStats> {
  try {
    const userRes = await fetch(USER_API_URL, { next: { revalidate: 3600 } });
    if (!userRes.ok) {
      return { followers: 0, stars: 0 };
    }

    const userData = (await userRes.json()) as GithubUserResponse;
    const followers = Number(userData?.followers ?? 0);

    let stars = 0;
    let page = 1;
    let hasMore = true;

    while (hasMore && page <= 10) {
      const reposRes = await fetch(`${REPOS_API_URL}?per_page=100&page=${page}`, {
        next: { revalidate: 3600 },
      });

      if (!reposRes.ok) {
        break;
      }

      const repos = (await reposRes.json()) as GithubRepoResponse[];
      if (!Array.isArray(repos) || repos.length === 0) {
        hasMore = false;
        continue;
      }

      stars += repos.reduce((total, repo) => {
        const repoStars = Number(repo?.stargazers_count ?? 0);
        return total + (Number.isFinite(repoStars) ? repoStars : 0);
      }, 0);

      page += 1;
    }

    return {
      followers: Number.isFinite(followers) ? followers : 0,
      stars: Number.isFinite(stars) ? stars : 0,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { followers: 0, stars: 0 };
  }
}
