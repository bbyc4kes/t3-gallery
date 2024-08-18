import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/aba06b8e-2615-4f3b-99ae-e225f2eb3c0e-7wjbi6.jpg",
  "https://utfs.io/f/da27a7d2-4eaa-433d-9c0f-629410e90cae-wl12qf.jpg",
  "https://utfs.io/f/fd38c5d9-356f-44a9-95e5-368b7b466371-btfc9m.jpg",
  "https://utfs.io/f/48efd5b4-c672-4103-a3b8-be716714ebb1-lkdgsa.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`image-#${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
