import { useQuery } from "@tanstack/react-query";

import { getPosts } from "../api/postsApi";
import MainLayout from "../layouts/MainLayout";

function PostsPage() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return (
      <MainLayout>
        <main className="min-h-screen px-6 py-24 text-white/60">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 text-white/40">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-foreground" />

              <p>Loading posts...</p>
            </div>
          </div>
        </main>
      </MainLayout>
    );
  }

  if (isError) {
    return (
      <MainLayout>
        <main className="min-h-screen px-6 py-24 text-white/60">
          <div className="mx-auto max-w-6xl">
            <p className="text-destructive">Failed to load posts.</p>
          </div>
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="min-h-screen px-6 py-24 text-white/60">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-white/40">API Demo</p>

          <h1 className="mt-2 text-4xl font-bold text-white/60">Posts</h1>

          <p className="mt-4 max-w-2xl text-white/40">
            These posts are loaded from a public REST API using Axios and
            TanStack Query.
          </p>

          <div className="mt-10 space-y-6">
            {posts?.slice(0, 10).map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-border p-6 transition duration-200 hover:-translate-y-1 hover:border-ring"
              >
                <h2 className="text-xl font-semibold text-white/60">
                  {post.title}
                </h2>

                <p className="mt-3 leading-7 text-white/40">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default PostsPage;
