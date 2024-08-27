import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt={`image-#${image.id}`} />
        </div>
      ))}
    </>
  );
}

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
