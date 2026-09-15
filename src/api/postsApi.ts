import api from "../lib/axios";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts");

  return response.data;
}
