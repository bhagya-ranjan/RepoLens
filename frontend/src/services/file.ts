import api from "./api";

export async function getFile(relativePath: string) {
  const res = await api.post("/file", {
    relative_path: relativePath,
  });

  return res.data;
}