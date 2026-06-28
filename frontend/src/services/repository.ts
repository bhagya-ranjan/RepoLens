import api from "./api";

export async function indexLocalRepository(localPath: string) {
  const response = await api.post("/clone", {
    local_path: localPath,
  });

  return response.data;
}

export async function indexGithubRepository(githubUrl: string) {
  const response = await api.post("/clone", {
    github_url: githubUrl,
  });

  return response.data;
}